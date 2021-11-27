import { useEffect, useState } from 'react';
import { useUserContext } from "../context/UserContextProvider";
import { updateUserLogin } from '../reducer/UserDetailsReducer';

export function Header() {
    const { userInfo: { isUserLogin }, dispatch } = useUserContext();
    const [isLogin, setIsLogin] = useState(false);
    console.log('isUserLogin ', isUserLogin);
    const userLogin = () => {
        setIsLogin(!isLogin);
    }

    //Jaise hi component render hoga waise hi fetchUserDetails action perform karenge
    useEffect(() => {
        updateUserLogin(dispatch, isLogin);
    }, [dispatch, isLogin])
    return (
        <>
            {isUserLogin?'Hello SAGAR': 'Hello Guest'}
            <button onClick={userLogin}>User Login</button>
        </>
    )
}