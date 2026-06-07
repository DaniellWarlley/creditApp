import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { serviceSchema } from "../schemas/serviceSchema"
import { serviceStore } from "../../../shared/store/serviceStore"
import useServiceMutation from '../hooks/useServiceMutation.js'
import { useEffect } from "react"
import useEditService from "./useEditService.js"

export default function useServiceForm(){
    const {closeServiceModal, selectedService} = serviceStore()
    const { mutateAsync, isPending } = useServiceMutation()
    const { mutate } = useEditService()
    const {register, handleSubmit, formState, reset} = useForm({
        resolver: zodResolver(serviceSchema),
        defaultValues: {
            name: '',
            valor: 0
        }
    })

    const onSubmit = async (data) => {
        try{
            if(selectedService != null){
                await mutate({id: selectedService._id, data: data})
            }else{
                await mutateAsync(data)
            }
            
            handleCancel()
        }catch(err){
            console.log(err)
        }
    }

    const handleCancel = () => {
        closeServiceModal()
        reset({
            name: '',
            valor: 0
        })
    }

    useEffect(() => {
        if(selectedService){
            reset({
                name: selectedService.name ?? '',
                valor: selectedService.valor ?? ''
            })
        }else{
            reset({
                name: '',
                valor: ''
            })
        }
    }, [selectedService])

    return{
        register,
        handleSubmit,
        handleCancel,
        errors: formState.errors,
        onSubmit,
        isPending
    }
}