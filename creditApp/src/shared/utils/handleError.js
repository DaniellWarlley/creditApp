export function handleAuthError(error, setError){
    if(error.status == 404){
        setError('email', {
            type: 'manual',
            message: 'O email não foi encontrado'
        })
    }else if(error.status == 401){
        setError('passWord', {
            type: 'manual',
            message: 'Senha invalida'
        })
    }else if(error.status == 409){
        setError('email', {
            type: 'manual',
            message: 'O email já foi cadastrado'
        })
    }
}