export default async function apiFetch(endPoint, {method = 'GET', headers = {}, body} = {}){
    try{
        const response = await fetch(`http://localhost:3333/${endPoint}`,{
            method: method,
            headers: {
                "Content-Type": "application/json",
                ...headers
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
