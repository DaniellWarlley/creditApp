import { useNavigate } from "react-router-dom";

export default function useLogOut(){
    const navigate = useNavigate()

    const logOut = () => {
        localStorage.removeItem('token')
        navigate('/')
    }

    return logOut
}