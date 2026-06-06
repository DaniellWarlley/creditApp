import { useQuery } from "@tanstack/react-query"
import { clientService } from "../services/clientService"

export default function useQueryClient(){
    return useQuery({
        queryKey: ['clients'],
        queryFn: () => clientService.getAllUserClients()
    })
}