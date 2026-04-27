export default async function apiFetch(endPoint, {method = 'GET', headers = {}, body, token} = {} ){
    try{
        const response = await fetch(`https://creditapp-1rw1.onrender.com/${endPoint}`,{
            method: method,
            headers: {
                "Content-Type": "application/json",
                ... (headers),
                ... (token && {'Authorization': `Bearer ${token}`}),
            },
            ...(body && method != 'GET' && {
                body: JSON.stringify(body)
            })            
        })

        if (!response.ok) {
            const error = new Error('Erro na requisição')
            error.status = response.status
            error.body = await response.json().catch(() => null) // opcional
            throw error
        }

        return response.json()
    }catch(err){
        throw err
    }
}