import { useReducer } from "react";

interface IState{
    count: number;
}
const initialValue: IState = {count : 0}

function reducer(state:IState, action:any){
    switch(action.type){
        case 'increment':
           return {count : state.count+1}
        case 'decrement':
            return {count: state.count-1}
        case 'reset':
            return {count : 0}
        default:
            return {count : state.count}
    }
}

export function UseReducerHook() {
    const [countState, dispatch] = useReducer(reducer, initialValue);
    return(
            <div>
                Count: {countState.count}
                
                {/* onclick p kis type ka action perform hoga. 
                kis type ka means dispatch action perform karega means increment type ka action ko dispatch karega 
                */}

                <button onClick={()=> dispatch({type:'increment'})}>Increment</button>
                <button onClick={()=> dispatch({type:'decrement'})}>Decrement</button>
                <button onClick={()=> dispatch({type:'reset'})}>Reset</button>
            </div>
    )
}