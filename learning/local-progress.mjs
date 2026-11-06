// Gemeinsames lokales Lernprofil für Prototyp-Missionen, ohne Netzwerkübertragung.
const KEY='klassencheck-progress-v1';
export function emptyProgress(){return {version:1,completed:{},attempts:{}}}
function safeEntries(value,valid){
 const out=Object.create(null);
 if(!value||typeof value!=='object'||Array.isArray(value))return out;
 for(const [key,item] of Object.entries(value)){
  if(!/^[A-Za-z0-9-]{1,64}$/.test(key))continue;
  if(valid(item))out[key]=item;
 }
 return out;
}
export function normalizeProgress(value){
 if(!value||typeof value!=='object'||Array.isArray(value))return emptyProgress();
 return {version:1,completed:{...safeEntries(value.completed,v=>v===true)},attempts:{...safeEntries(value.attempts,v=>Number.isSafeInteger(v)&&v>=0)}};
}
export function loadProgress(storage){try{return normalizeProgress(JSON.parse(storage.getItem(KEY)))}catch{return emptyProgress()}}
export function saveProgress(storage,progress){try{storage.setItem(KEY,JSON.stringify(normalizeProgress(progress)));return true}catch{return false}}
export function recordProgress(progress,id,status){
 const next=normalizeProgress(progress);
 // Nur bewertete Antworten zählen, keine leeren Eingaben oder Bauhinweise.
 if(!['correct','retry','misconception'].includes(status))return next;
 if(typeof id!=='string'||!/^[A-Za-z0-9-]{1,64}$/.test(id))return next;
 const previous=next.attempts[id]??0;
 const attempts={...next.attempts,[id]:Math.min(Number.MAX_SAFE_INTEGER,previous+1)};
 const completed={...next.completed};
 if(status==='correct')completed[id]=true;
 return {version:1,completed,attempts};
}
export function clearProgress(storage){try{storage.removeItem(KEY);return true}catch{return false}}
