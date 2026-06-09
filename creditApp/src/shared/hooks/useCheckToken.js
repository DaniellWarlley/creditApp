import { useEffect, useState } from "react"
import { checkTokenService } from "../services/checkTokenService"
import { useNavigate } from "react-router-dom"

export default function useCheckToken(){
    const [ isValid, setIsValid ] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        async function fetchData() {
            try{
                await checkTokenService()
                setIsValid(true)
                navigate('../home/Clientes')
            }catch(err){
                localStorage.removeItem('token')
                navigate('/login')
            }
        }
        fetchData()
    }, [])

    return {
        isValid
    }
}