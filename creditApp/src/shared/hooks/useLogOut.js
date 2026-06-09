import { useQueryClient } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"

export default function useLogOut(){
    const navigate = useNavigate()
    const queryClient = useQueryClient()

    const logOut = () => {
        localStorage.removeItem('token')
        queryClient.clear()
        navigate('/')
    }

    return logOut
}