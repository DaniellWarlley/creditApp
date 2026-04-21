import apiFetch from "./apiFetch"

export const clientService = {
    createClient: async (data) => { 
        const userId = localStorage.getItem('userId')

        const res = await apiFetch('clients/client', {
            method: 'POST',
            body: {data, userId}
        })

        return res
    },
    getAllUserClients: async (userId) => { 
        const res = await apiFetch(`clients/clients/${userId}`, {
            method: 'GET',
        })

        return res
    }
}