// Mathematisches Modell der Proportionsstadt: ganzzahlige Materialeinheiten.
export const deliveryLevels=Object.freeze([
 {id:"P7-B1",built:3,materials:12,target:5,answer:20},
 {id:"P7-B2",built:4,materials:20,target:7,answer:35},
 {id:"P7-B3",built:6,materials:18,target:9,answer:27}
]);
export function calculateDelivery(level,fields){
 if(!Number.isSafeInteger(fields)||fields<0||fields>20)throw new RangeError("Ungültige Feldanzahl");
 if(!Number.isSafeInteger(level.built)||level.built<=0||!Number.isSafeInteger(level.materials)||level.materials<0||level.materials%level.built!==0)throw new RangeError("Ungültiges Verhältnis");
 return {perField:level.materials/level.built,total:fields*(level.materials/level.built)};
}
export function checkDelivery(level,fields,answer){
 const expected=calculateDelivery(level,level.target).total;
 if(fields!==level.target)return {status:"build",message:"Kio: Baue zuerst genau "+level.target+" Brückenfelder."};
 if(typeof answer==="string"&&answer.trim()==="")return {status:"empty",message:"Kio: Gib deine berechnete Materialmenge ein."};
 const n=Number(answer);
 if(!Number.isSafeInteger(n)||n<0)return {status:"invalid",message:"Kio: Verwende eine ganze, nicht negative Zahl."};
 if(n===expected)return {status:"correct",message:"Richtig! "+level.materials+" : "+level.built+" = "+calculateDelivery(level,1).perField+" je Feld. "+level.target+" Felder brauchen "+expected+" Bausteine."};
 if(n===level.materials+(level.target-level.built))return {status:"misconception",message:"Kio: Du hast möglicherweise addiert. Bei gleichen Brückenfeldern brauchen wir ein festes Verhältnis. Teile zuerst "+level.materials+" durch "+level.built+"."};
 return {status:"retry",message:"Kio: Bestimme erst die Bausteine pro Feld. Multipliziere dann mit "+level.target+"."};
}
