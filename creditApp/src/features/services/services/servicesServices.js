import apiFetch from "../../../shared/services/apiFetch"

export const servicesServices = {
    createNewService: async (data) => {
        const token = localStorage.getItem('token')

        const res = await apiFetch('services/services', {
            method: 'POST',
            body: data,
            token: token
        })

        return res
    },
    getAllUserServices: async () => {
        const token = localStorage.getItem('token')

        const res = await apiFetch('services/services', {
            method: 'GET',
            token: token
        })

        return res
    },
    deleteOneService: async (serviceId) => {
        const token = localStorage.getItem('token')

        const res = await apiFetch(`services/services/${serviceId}`, {
            method: 'DELETE',
            token: token
        })
    }
}