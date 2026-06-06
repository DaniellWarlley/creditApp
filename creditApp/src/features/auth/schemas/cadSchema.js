import z from 'zod'

export const cadSchema = z.object({
    name: z.string().min(3, 'Nome invalido'),
    email: z.string().email('Email invalido'),
    passWord: z.string().min(8, 'Senha com menos de 8 caracteres')
})

