import apiFetch from "./apiFetch"

export const authService = {
    cad: async (data) => {
        const res = await apiFetch('auth/cad', {
            method: 'POST',
            body: data
        })

        localStorage.setItem('token', res.token)

        return res
    },    
    log: async (data) => {
        const res = await apiFetch('auth/log', {
            method: 'POST',
            body: data
        })

        localStorage.setItem('token', res.token)
        
        return res
    },
    checkToken: async() => {
        const token = localStorage.getItem('token')

        if(!token) return

        try {
            const res = await apiFetch('auth/verifyToken', {
                method: 'GET',
                token: token
            })

            return res
        } catch (error) {
            return error
        }
    }
}