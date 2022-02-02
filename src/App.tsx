import './index.css';
import UseStateComp from './UseStateComp';
import UseEffectComp from './UseEffectComp';
import UseContextComp from './UseContextComp';
import UseReducerComp from './UseReducerComp';
import UseRefComp from './UseRefComp';
import Audio from './Audio';
import Player from './Player';
import Controls from './Controls';
import { useEffect, useRef } from 'react';
import MissMe from '../src/assets/MissMe.mp3';
import MissMeimg from "../src/assets/songimg.jpg"

//const srcUrl = '../src/assets/MissMe.mp3'

function App() {
  //const audioPlayer = useRef<HTMLAudioElement | null>(null);
  const audioRef = useRef<HTMLAudioElement>(MissMe);

  useEffect(() =>{
    audioRef.current.pause();
  },[])

  const pauseClick = () =>{
    audioRef.current.pause();
  }

  const playClick = () =>{
    audioRef.current.play();
  }

  const jump10Seconds = () =>{
    audioRef.current.currentTime += 10;
  }
 
  return (
    <div className="App">
      <h1>All about React Hooks</h1>
      <h2>useState Hook</h2>
      <UseStateComp />
      <h2>useEffect Hook</h2>
      <UseEffectComp />
      <h2>useContext Hook</h2>
      <UseContextComp />
      <h2>useReducer Hook</h2>
      <UseReducerComp />
      <h2>useRef Hook</h2>
      <div>Simple Input useRef down below:</div>
      <UseRefComp />
      <audio src = {MissMe} ref = {audioRef} />
      <div>
        <img src = {MissMeimg} />
      </div>
      <div>
        <button onClick={playClick}>Play</button>{"  "}
        <button onClick={pauseClick}>Pause</button>{"  "}
        <button onClick={jump10Seconds}>Jump10Sec</button>
      </div>
      {/*<div>
      <Player src = {srcUrl} ref = {audioPlayer}></Player>
      <Controls audioPlayer = {audioPlayer}></Controls>
      </div>*/}
    </div>
  );
}

export default App;
