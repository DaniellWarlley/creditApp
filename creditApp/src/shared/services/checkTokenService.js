import apiFetch from './apiFetch.js'

export const checkTokenService = async () => {
    const token = localStorage.getItem('token')

    const res = await apiFetch('checkToken', {
        token: token
    })

    return res
}