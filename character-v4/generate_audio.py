"""Kios reproducible local synthesis entry point; model weights stay outside Git."""
import argparse,json,subprocess,hashlib
from pathlib import Path
import numpy as np
from huggingface_hub import snapshot_download
from supertonic import TTS

def main():
    p=argparse.ArgumentParser();p.add_argument('--text',required=True);p.add_argument('--voice',choices=['M3','M4','M5'],default='M5');p.add_argument('--models',default='.audio-models');p.add_argument('--output',default='generated/Kio.wav');p.add_argument('--rhubarb',help='Path to Rhubarb 1.14.0 for an aligned mouth track');a=p.parse_args()
    text=a.text.strip()
    if not text or len(text)>280:p.error('Use 1–280 characters of German text. Write mathematical notation as spoken words.')
    snapshot_download(repo_id='supertone-oss-archive/supertonic-3',revision='aafc6e32416a594460b32413efc49d7fe4ce6d46',allow_patterns=['onnx/*','voice_styles/'+a.voice+'.json','LICENSE'],local_dir=a.models,max_workers=2)
    tts=TTS(model_dir=a.models,auto_download=False,intra_op_num_threads=2,inter_op_num_threads=1);wav,duration=tts.synthesize(text.replace('Kio','Ki-o'),voice_style=tts.get_voice_style(a.voice),lang='de',speed=1,total_steps=8)
    if not np.isfinite(wav).all() or float(np.sqrt(np.mean(wav**2)))<.001:raise ValueError('No valid audible waveform generated.')
    target=Path(a.output);target.parent.mkdir(parents=True,exist_ok=True);tts.save_audio(wav,str(target));metadata={'text':text,'voice':a.voice,'language':'de','seconds':float(duration[0]),'model_revision':'aafc6e32416a594460b32413efc49d7fe4ce6d46','steps':8,'speed':1,'audioSha256':hashlib.sha256(target.read_bytes()).hexdigest()}
    if a.rhubarb:
        track=target.with_suffix('.rhubarb.json');subprocess.run([a.rhubarb,'-r','phonetic','-f','json','-o',str(track),str(target)],check=True);metadata['cues']=json.loads(track.read_text())['mouthCues'];metadata['alignment']='Rhubarb 1.14.0 phonetic'
    target.with_suffix('.json').write_text(json.dumps(metadata,ensure_ascii=False,indent=2));print(str(target))
if __name__=='__main__':main()
