import { RefObject } from "react"

type ControlProps = {
    audioPlayer: RefObject<HTMLAudioElement | null>
}

const Controls = ({audioPlayer}:ControlProps) =>{

    const jump10Seconds = () =>{
        if(!audioPlayer === null && audioPlayer.current){
            audioPlayer.current.currentTime += 10
        }
    }
    
    return (
        <div>
            <button onClick={() =>{jump10Seconds()}}>Jump10Sec</button>
        </div>
    )
}

export default Controls;