import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userLogin } from "../feature/auth/authSlice";

export default function useAuthCheck(){
    const dispatch = useDispatch();
    const [authChecked, setAuthChecked] = useState(false);

    useEffect(()=>{
        const localauth = localStorage?.getItem("auth");

        if(localauth){
            const auth = JSON.parse(localauth);
            if(auth?.accessToken && auth?.user){
                dispatch(
                    userLogin({
                        accessToken: auth.accessToken,
                        user: auth.user,
                    })
                );
            }
        }
        setAuthChecked(true);
    }, [dispatch, setAuthChecked]);

    return authChecked;
}