import apiFetch from "./apiFetch"

export const clientService = {
    createClient: async (data) => { 
        const token = localStorage.getItem('token')

        const res = await apiFetch('clients/client', {
            method: 'POST',
            body: {data},
            token: token
        })

        return res
    },
    getAllUserClients: async () => { 
        const token = localStorage.getItem('token')
        
        const res = await apiFetch(`clients/clients`, {
            method: 'GET',
            token: token
        })

        return res
    },
    deleteClientById: async (clientId) => {
        const token = localStorage.getItem('token')

        const res = await apiFetch(`clients/client/${clientId}`, {
            method: 'DELETE',
            token: token
        })

        return res
    }
}