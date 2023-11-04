import { useSelector } from "react-redux/es/hooks/useSelector";

export default function useAuth(){
    const auth = useSelector( state => state.auth );

    if(auth?.accessToken && auth?.user){
        return true
    } else {
        return false
    }
    
}