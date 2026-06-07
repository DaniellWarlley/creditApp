import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { cadSchema } from '../schemas/cadSchema.js'
import { useNavigate } from 'react-router-dom'
import { authService } from '../services/authService'
import { handleAuthError } from '../../../shared/utils/handleError.js'

export default function useCadForm(){
    const navigate = useNavigate()
    const { register, handleSubmit, formState, setError } = useForm({
        resolver: zodResolver(cadSchema),
        shouldUnregister: true,
        defaultValues: {
            name: '',
            email: '',
            passWord: ''
        }
    })

    const onSubmit = async (data) => {
        try{
            await authService.cad(data)
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