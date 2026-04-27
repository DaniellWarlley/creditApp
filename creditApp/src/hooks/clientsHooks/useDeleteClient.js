import { useMutation, useQueryClient } from "@tanstack/react-query"
import { clientService } from "../../services/clientService"

export default function useDeleteClient(){
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (id) => clientService.deleteClientById(id),
        onMutate: async (id) => {
            await queryClient.cancelQueries(['clientes'])

            const previus = queryClient.getQueryData(['clients'])

            queryClient.setQueryData(['clients'], (oldData) =>
                oldData.filter(old => old._id != id)
            )

            return { previus }
        },
        onError: (err, _, context) => {
                queryClient.setQueryData(['clients'], context.previus)
        },
        onSettled: () => {
            queryClient.invalidateQueries(['clients'])
        }
    })
}