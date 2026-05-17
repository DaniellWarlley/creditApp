import { useMutation, useQueryClient } from '@tanstack/react-query'
import { clientService } from '../../services/clientService'

export default function useEditClient() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: ({ id, data }) => 
            clientService.editClient(id, data),
        onMutate: async ({ id, data }) => {
            await queryClient.cancelQueries({
                queryKey: ['clients']
            })

            const previous = queryClient.getQueryData(['clients']) 

            queryClient.setQueryData(['clients'], (oldData) => {
                console.log(oldData)
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
                ['clients'],
                context.previous
            )
        },

        onSettled: () => {
            queryClient.invalidateQueries({
                queryKey: ['clients']
            })
        }
    })
}