import { useQuery } from "@tanstack/react-query"
import { servicesServices } from "../services/servicesServices"

export default function useQueryService(){
    return useQuery({
        queryKey: ['services'],
        queryFn: () => servicesServices.getAllUserServices()
    })
}