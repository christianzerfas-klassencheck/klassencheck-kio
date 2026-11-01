// Playback is driven by the recorded audio clock, never a repeating sine wave.
export const VISEMES={X:[0,0,0],A:[0,0,.9],B:[.12,.5,0],C:[.45,.5,0],D:[.85,.15,0],E:[.45,0,.7],F:[.22,0,1],G:[.07,.15,.1],H:[.2,.35,0]};
export function sampleMouth(cues,time){const cue=cues.find(c=>time>=c.start&&time<c.end);const [open,wide,round]=VISEMES[cue?.value||'X']||VISEMES.X;return{open,wide,round,cue:cue?.value||'X'}}
export function walkPosition(from,to,elapsed,duration=2.4){const t=Math.max(0,Math.min(1,elapsed/duration));return from.map((v,i)=>v+(to[i]-v)*t)}
