import { useMutation, useQueryClient } from "@tanstack/react-query"
import { clientService } from '../../services/clientService';

export default function useMutationClient(){
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (data) => clientService.createClient(data),
        onSuccess: (newClient) => queryClient.setQueryData(['clients'], (oldData = []) => {
            return [...oldData, newClient]
        })
    })
}