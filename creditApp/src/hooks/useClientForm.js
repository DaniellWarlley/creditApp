import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { clientSchema } from '../schemas/clientSchema'
import useMutationClient from './clientsHooks/useMutationClient'
import { useClientStore } from '../store/useClientStore'
import { useEffect } from 'react'
import useEditClient from './clientsHooks/useEditClient'


export default function useClientForm(){
    const { mutateAsync, isPending } = useMutationClient()
    const { mutate } = useEditClient()
    const {closeClientModal, selectedClient} = useClientStore()

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
        if(selectedClient == null){
            await mutateAsync(data)
        }else{
            await mutate({id: selectedClient._id, data: data})
        }
        handleCancel()
    }

    const handleEdit = (id) => {
        onClick()
        console.log(id)
    }
    const handleCancel = () => {
        closeClientModal()
        reset({
            name: '',
            contato: '',
            credito: 0,
            debito: 0
        })
    }

    useEffect(() => {
        if(selectedClient){
            reset(selectedClient)
        }else{
            reset({
            name: '',
            contato: '',
            credito: 0,
            debito: 0
        })
        }
    }, [selectedClient])

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