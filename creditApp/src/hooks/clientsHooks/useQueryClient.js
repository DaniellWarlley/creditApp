import { useQuery } from "@tanstack/react-query"
import { clientService } from "../../services/clientService"

export default function useQueryClient(){
    const userId = localStorage.getItem('userId')

    return useQuery({
        queryKey: ['clients'],
        queryFn: () => clientService.getAllUserClients(userId)
    })
}