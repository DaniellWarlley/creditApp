import { QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 1000 * 60 * 5,
            refetchOnReconnect: true,
            refetchOnWindowFocus: true,
            retry: 2
        },
        mutations: {
            retry: 2
        }
    }
})