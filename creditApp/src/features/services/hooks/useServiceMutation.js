import { useMutation, useQueryClient } from "@tanstack/react-query"
import { servicesServices } from '../services/servicesServices.js'

export default function useServiceMutation(){
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (data) => servicesServices.createNewService(data),
        onSuccess: (newService) => queryClient.setQueryData(['services'], (oldData = []) => {
            return [...oldData, newService]
        })
    })
}