import {useForm} from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { authSchema } from '../schemas/authSchema'
import { useNavigate } from 'react-router-dom'
import { authService } from '../services/authService'
import { handleAuthError } from '../utils/handleError'

export default function useAuthForm(toggle = null){
    const navigate = useNavigate()
    const { register, handleSubmit, formState, setError } = useForm({
        resolver: zodResolver(authSchema),
        shouldUnregister: true,
        defaultValues: {
            name: '',
            email: '',
            passWord: ''
        }
    })

    const onSubmit = async (data) => {
        try{
            if(toggle){
                await authService.cad(data)
            }else{
                await authService.log(data)
                navigate('home/Clientes')
            }            
        }catch(err){
            handleAuthError(err, setError)
        }       
    }

    return{
        errors: formState.errors,
        register,
        handleSubmit,
        onSubmit,
        isSubmitting: formState.isSubmitting
    }
}