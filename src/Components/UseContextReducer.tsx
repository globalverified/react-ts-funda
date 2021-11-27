import { map } from 'lodash';
import { useEffect } from 'react';
import { useUserContext } from "../context/UserContextProvider";
import { fetchUserDetails } from '../reducer/UserDetailsReducer';
import { Header } from './Header';

export function UseContextReducer() {
    const { userInfo: { user }, dispatch } = useUserContext();
    console.log('user ', user);
    //Jaise hi component render hoga waise hi fetchUserDetails action perform karenge
    useEffect(() => {
        fetchUserDetails(dispatch);
    }, [dispatch])
    return (
        <>
            <Header/>
            User Details: {
                map(user, (u, index) => <div key={index}>{u?.first_name}{' '}{u?.last_name}</div>)
            }
        </>
    )
}