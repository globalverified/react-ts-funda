import { useEffect, useRef, useState } from "react";
import { usePrevious } from './usePrevious';

export const UseRefExample = ()=>{
    const nameInputRef = useRef<HTMLInputElement>(null);
    const [count, setCount] = useState(0);
    const previousCount = useRef(0);
    const previousCount2 = usePrevious(count);

    useEffect(() => {
        previousCount.current = count;
    }, [count]);

    const onSubmit = ()=>{
        if(nameInputRef.current){
            nameInputRef.current.focus(); 
            console.log('nameInputRef',nameInputRef,nameInputRef.current.value);
        }
    }
    return <>
        count values with useState : {count} <br />
        previous count value with useRef: {previousCount.current}<br />
        previous count value with Custom useRef: {previousCount2}<br />
        <button onClick={()=>setCount(count+1)}>Increment Count</button>
        <input ref={nameInputRef} name="inputref" defaultValue='type input ref' />
        <button onClick={onSubmit}>submit input ref</button>
    </>
}