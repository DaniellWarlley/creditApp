import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { serviceSchema } from "../schemas/serviceSchema"
import { serviceStore } from "../../../shared/store/serviceStore"
import useServiceMutation from '../hooks/useServiceMutation.js'

export default function useServiceForm(){
    const {closeServiceModal, selectedService} = serviceStore()
    const { mutateAsync, isPending } = useServiceMutation()
    const {register, handleSubmit, formState, reset} = useForm({
        resolver: zodResolver(serviceSchema),
        defaultValues: {
            name: '',
            valor: 0
        }
    })

    const onSubmit = (data) => {
        mutateAsync(data)
    }

    const handleCancel = () => {
        closeServiceModal()
        reset({
            name: '',
            valor: 0
        })
    }

    return{
        register,
        handleSubmit,
        handleCancel,
        errors: formState.errors,
        onSubmit
    }
}