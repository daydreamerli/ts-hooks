import {useRef} from 'react';

function UseRefComp() {
    const inputRef = useRef<HTMLInputElement | null>(null);

  return (
      <div>
          <input ref = {inputRef}></input>
          
      </div>
  )
}

export default UseRefComp;

/*useRef returns a mutable ref object whose .current property 
is initialized to the passed argument (initialValue). 
The returned object will persist for the full lifetime of 
the component.*/