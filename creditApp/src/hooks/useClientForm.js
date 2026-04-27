import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { clientSchema } from '../schemas/clientSchema'
import useMutationClient from './clientsHooks/useMutationClient'


export default function useClientForm(onClick = null){
    const { mutateAsync, isPending } = useMutationClient()

    const {register, handleSubmit, formState, reset} = useForm({
        resolver: zodResolver(clientSchema),
        defaultValues: {
            name: '',
            contato: '',
            credito: 0,
            debito: 0
        }
    })

    const onSubmit = async (data) => {
        await mutateAsync(data)
        handleCancel()
    }

    const handleEdit = (id) => {
        onClick()
        console.log(id)
    }
    const handleCancel = () => {
        onClick?.()
        reset()
    }

    return{
        register,
        handleSubmit,
        onSubmit,
        errors: formState.errors,
        isPending,
        handleCancel,
        handleEdit
    }
}