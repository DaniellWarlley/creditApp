import { useMutation, useQueryClient } from "@tanstack/react-query"
import { servicesServices } from "../services/servicesServices"

export default function useEditService(){
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: ({id, data}) => servicesServices.updateOneService(id, data),
        onMutate: async ({id, data}) => {
            await queryClient.cancelQueries(['services'])

            const previus = queryClient.getQueryData(['services'])

            queryClient.setQueryData(['services'], (oldData) => {
                if (!oldData) return oldData
                return oldData.map((old) => {
                    if(old._id == id){
                        return{
                            ...old,
                            ...data
                        }
                    }
                    return old
                })
            })

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