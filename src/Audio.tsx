import React, { useEffect,useRef } from 'react';
import MissMe from '../src/assets/MissMe.mp3';
import songimg from "../src/assets/songimg.jpg"

const Audio = () => {
    const audioRef = useRef<HTMLAudioElement>(MissMe)

    useEffect(()=>{
        audioRef.current.pause();
    },[])

  return (
      <div>
          <audio src = {MissMe} ref = {audioRef} />
          <div>
              <img src ={songimg}/>
          </div>
      </div>
  )
};

export default Audio;




