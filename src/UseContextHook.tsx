import { createContext, useState } from "react";
import { DisplayName } from "./DisplayName";
import { DisplayRollNo } from "./DisplayRollNo";


export interface IUserDetailsContext {
    name: string,
    rollno: number | null
}
const initialValue = {
    name: '',
    rollno: null
}
const user = {
    name: 'SAGAR',
    rollno: 29
}

export const _userContext = createContext<IUserDetailsContext>(initialValue);

export function UseContextHook() {
    const [userDetails, setUserDetails] = useState(user);
    const updateName = (_name: string, _rollno: number) => {
        setUserDetails({
            ...userDetails,
            name: _name,
            rollno: _rollno
        })
    }
    // abi tak sara context create kar lia hai... below sara provider banayenge
    return (
        <>
            {/* provider accept karta hai value and wo sabi childs me automatically mil jayega */}
            {/* eslint-disable-next-line */}
            <_userContext.Provider value={userDetails}>
                <button onClick={() => { updateName('Kartik', 31) }}>Update name</button>
                <DisplayName />
                <DisplayRollNo />
            </_userContext.Provider>
        </>
    )
}