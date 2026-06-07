import { useMutation, useQueryClient } from "@tanstack/react-query"
import { servicesServices } from "../services/servicesServices"

export default function useDeleteService(){
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (serviceId) => servicesServices.deleteOneService(serviceId),
        onMutate: async (serviceId) => {
            await queryClient.cancelQueries(['services'])

            const previus = queryClient.getQueryData(['services'])

            queryClient.setQueryData(['services'], (oldData) => 
                oldData.filter(data => data._id != serviceId)
            )

            return { previus }
        },
        onError: (err, _, context) => {
            queryClient.setQueryData(['services'], context.previus)
        },
        onSettled: () => {
            queryClient.invalidateQueries(['services'])
        }
    })
}