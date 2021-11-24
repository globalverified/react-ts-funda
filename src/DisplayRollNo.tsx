import { useContext } from "react";
import { _userContext } from "./UseContextHook";

export function DisplayRollNo() {
    // ye ek consumer hai jo provider se context ko use karega with the help of usecontext
    const contextValue = useContext(_userContext);
    return <div>User RollNo: {contextValue.rollno}</div>
}