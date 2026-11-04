import { chromium, devices } from 'playwright';
import { spawn } from 'node:child_process';
import { mkdir } from 'node:fs/promises';
import assert from 'node:assert/strict';

const server=spawn('python3',['-m','http.server','4173','--bind','127.0.0.1'],{stdio:'ignore'});
const url='http://127.0.0.1:4173';
await mkdir('test-results/mobile',{recursive:true});
let browser;
const results=[];
try{
 browser=await chromium.launch({headless:true,args:['--use-gl=angle','--use-angle=swiftshader','--enable-webgl']});
 for(const [label,device] of [['iphone',devices['iPhone 13']],['android',devices['Pixel 7']]]){
  const context=await browser.newContext({...device,browserName:undefined});
  const page=await context.newPage();
  const errors=[];
  page.on('pageerror',error=>errors.push(error.message));
  await page.goto(url+'/prototype/diagnoselabor-integration.html',{waitUntil:'domcontentloaded',timeout:20000});
  await page.getByRole('heading',{name:/Was möchtest du/}).waitFor();
  await page.getByRole('button',{name:/Starten/}).first().click();
  await page.locator('#game:not(.hide)').waitFor();
  await page.locator('#question').waitFor();
  assert.ok((await page.locator('#question').innerText()).length>5);
  await page.screenshot({path:'test-results/mobile/'+label+'-akademie.png',fullPage:true});
  await page.goto(url+'/',{waitUntil:'domcontentloaded',timeout:20000});
  await page.locator('#start').waitFor();
  await page.screenshot({path:'test-results/mobile/'+label+'-3d.png',fullPage:true});
  assert.equal(errors.length,0,'JavaScript-Fehler: '+errors.join(' | '));
  results.push(label+': Navigation, Aufgabenanzeige und JS ohne Fehler');
  await context.close();
 }
 console.log(results.join('\n'));
}finally{await browser?.close();server.kill();}
