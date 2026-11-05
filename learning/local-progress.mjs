// Gemeinsames lokales Lernprofil für Prototyp-Missionen, ohne Netzwerkübertragung.
const KEY='klassencheck-progress-v1';
export function emptyProgress(){return {version:1,completed:{},attempts:{}}}
export function normalizeProgress(value){if(!value||typeof value!=='object')return emptyProgress();return {version:1,completed:value.completed&&typeof value.completed==='object'?value.completed:{},attempts:value.attempts&&typeof value.attempts==='object'?value.attempts:{}}}
export function loadProgress(storage){try{return normalizeProgress(JSON.parse(storage.getItem(KEY)))}catch{return emptyProgress()}}
export function saveProgress(storage,progress){try{storage.setItem(KEY,JSON.stringify(normalizeProgress(progress)));return true}catch{return false}}
export function recordProgress(progress,id,status){const next=normalizeProgress(progress);const attempts={...next.attempts,[id]:(next.attempts[id]||0)+1};const completed={...next.completed};if(status==='correct')completed[id]=true;return {version:1,completed,attempts}}
export function clearProgress(storage){try{storage.removeItem(KEY);return true}catch{return false}}
