import axios from 'axios';

export interface IUserDetails {
    email: string;
    id: number;
    first_name: string;
    last_name: string;
}
export interface IUserState {
    user: IUserDetails[];
    isUserLogin?: boolean;
}
export enum UserStateReducerConstant {
    userDetails = 'userDetails',
    userLogin = 'userLogin'
}

//Action kis type ka rahega and payload kis type ka
// partial ka mean - jitne b object me value hota h use optional bana deta hai
export interface IAction<T, P> {
    type: T;
    payload?: Partial<P>;
}

//IAction me type and payload(state) jayega // action kis type ka
export type IActionType = IAction<UserStateReducerConstant, IUserState>;
//dispatch kis type ka hoga-kis type ka action perform karega
export type IUserStateReducerDispatchType = (value: IActionType) => void;

export const initialIUserState: IUserState = {
    user: [],
    isUserLogin: false
};

//reducer banao
export const userStateReducer = (state: IUserState, action: IActionType) => {
    switch (action.type) {
        case UserStateReducerConstant.userDetails: {
            return { ...state, user: action?.payload?.user || [] }
        }
        case UserStateReducerConstant.userLogin: {
            return { ...state, isUserLogin: action?.payload?.isUserLogin }
        }
        default: {
            return state;
        }
    }
}

const fetchUsers = async () => {
    await new Promise((resolve) => setTimeout(resolve, 100));
    return axios.get('https://reqres.in/api/users').then((res) => res?.data?.data ?? [])
}
//backend se data fetch karenge us API k through (YE ACTION HAI)
export const fetchUserDetails = async (dispatch: IUserStateReducerDispatchType) => {
    const userDe = await fetchUsers();
    dispatch({type:UserStateReducerConstant.userDetails, payload: {user: userDe}});
}
//user login hai ki nahi (YE ACTION HAI)
export const updateUserLogin =  (dispatch: IUserStateReducerDispatchType, isUserLogin:boolean) => {
    dispatch({type:UserStateReducerConstant.userLogin, payload: {isUserLogin:isUserLogin}});
}
//ab reducer ban gaya hai ab banayenge context ---context/UserContextProvider.tsx

// export const InitialIUserState : IUserState
// naam sankirtanam yasya sarv pap pranshanam 
// pranamo dukh shamnamah tam namami harim param
