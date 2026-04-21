import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { clientSchema } from '../schemas/clientSchema'
import useMutationClient from './useMutationClient'


export default function useClientForm(onClick = null){
    const { mutate } = useMutationClient()

    const {register, handleSubmit, formState, reset} = useForm({
        resolver: zodResolver(clientSchema),
        defaultValues: {
            name: '',
            contato: '',
            credito: 0,
            debito: 0
        }
    })

    const onSubmit = (data) => {
        mutate(data)
        handleCancel()
    }

    const handleCancel = () => {
        onClick()
        reset()
    }

    return{
        register,
        handleSubmit,
        onSubmit,
        errors: formState.errors,
        handleCancel
    }
}