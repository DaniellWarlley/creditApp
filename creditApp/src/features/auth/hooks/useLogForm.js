import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import {  loginSchema } from '../schemas/loginSchema.js'
import { useNavigate } from 'react-router-dom'
import { authService } from '../services/authService'
import { handleAuthError } from '../../../shared/utils/handleError.js'

export default function useLogForm(){
    const navigate = useNavigate()
    const { register, handleSubmit, formState, setError } = useForm({
        resolver: zodResolver(loginSchema),
        shouldUnregister: true,
        defaultValues: {
            email: '',
            passWord: ''
        }
    })

    const onSubmit = async (data) => {
        try{
            await authService.log(data)
            navigate('../home/Clientes')
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