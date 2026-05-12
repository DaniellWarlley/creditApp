import { useMutation, useQueryClient } from '@tanstack/react-query'
import { clientService } from '../../services/clientService'

export default function useEditClient() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: ({ id, data }) => 
            clientService.editClient(id, data),
        onMutate: async ({ id, data }) => {
            await queryClient.cancelQueries({
                queryKey: ['clientes']
            })

            const previous = queryClient.getQueryData(['clientes'])
            
            queryClient.setQueryData(['clientes'], (oldData) => {
                if (!oldData) return oldData
                return oldData.map(cliente => {
                    if (cliente._id === id) {
                        return {
                            ...cliente,
                            ...data
                        }
                    }

                    return cliente
                })
            })

            return { previous }
        },

        onError: (err, variables, context) => {
            queryClient.setQueryData(
                ['clientes'],
                context.previous
            )
        },

        onSettled: () => {
            queryClient.invalidateQueries({
                queryKey: ['clientes']
            })
        }
    })
}