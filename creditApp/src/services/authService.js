import apiFetch from "./apiFetch"

export const authService = {
    cad: async (data) => {
        const res = await apiFetch('auth/cad', {
            method: 'POST',
            body: data
        })

        return res
    },    
    log: async (data) => {
        const res = await apiFetch('auth/log', {
            method: 'POST',
            body: data
        })

        localStorage.setItem('userId', res.id)
        return res
    }
}