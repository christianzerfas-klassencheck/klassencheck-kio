// Diagnostischer Missionszustand: deterministisch, unabhängig von der Oberfläche.
export function makeMissionState(mission){
 return {id:mission.id,attempts:0,hints:0,completed:false,lastStatus:"new",history:[]};
}
export function recordAttempt(state,mission,input,assess){
 const result=assess(mission,input);
 const next={...state,attempts:state.attempts+1,completed:state.completed||result.status==="correct",lastStatus:result.status,
 history:[...state.history,{status:result.status,attempt:state.attempts+1}].slice(-10)};
 return {state:next,result,nextAction:result.status==="correct"?"transfer":result.status==="misconception"?"concept-model":state.attempts>=1?"guided-example":"retry"};
}
export function recordHint(state){return {...state,hints:state.hints+1}}
export function selectNextMission(missions,current,completedIds=[]){
 const eligible=missions.filter(m=>m.grade===current.grade&&!completedIds.includes(m.id));
 return eligible.find(m=>m.id!==current.id)||missions.find(m=>m.grade===current.grade+1&&!completedIds.includes(m.id))||null;
}
