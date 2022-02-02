import {useState,useEffect} from "react";


function UseEffectComp() {
    const [val, valSet] = useState(1);

    useEffect(() =>{
        const timer =window.setInterval(()=>{
            valSet((v) => v+1)
        },5000)
        return ()=> window.clearInterval(timer);
    },[])

  return (
  <div>
      {val}
      <div>
        <button onClick = {() =>valSet(0)}>Click to reset</button>
      </div>
      
  </div>
  )
}

export default UseEffectComp;
