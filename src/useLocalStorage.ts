import { Dispatch, SetStateAction, useEffect, useState } from "react"

export const useLocalStorage =  <T>(key:string, initialValue?: T): [T | undefined, Dispatch<SetStateAction<T | undefined>>,()=>void]=>{
    const [state, setstate] = useState<T | undefined>(()=>{  
        try{
            const value = localStorage.getItem(key);
            return JSON.parse(value || 'no value in local storage')
        }catch{
            return initialValue;
        }
    });

    useEffect(() => {
        try{
            localStorage.setItem( key, JSON.stringify(state)); 
            //try kar setState karne ka yaha
        }catch{
            // eslint-disable-next-line
        }
        // eslint-disable-next-line 
    }, [state]);

    const remove = ()=> {
        try{
            localStorage.removeItem( key);
            setstate(undefined);
        }catch{
            // eslint-disable-next-line
        }
    }
    return [state, setstate, remove] 
}