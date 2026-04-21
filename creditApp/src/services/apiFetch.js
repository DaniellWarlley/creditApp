export default async function apiFetch(endPoint, {method = 'GET', headers = {}, body} = {}){
    try{
        const response = await fetch(`https://creditapp-1rw1.onrender.com/${endPoint}`,{
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
            throw new Error(`Erro HTTP: ${response.status}`)
        }

        return response.json()
    }catch(err){
        throw err
    }
}
