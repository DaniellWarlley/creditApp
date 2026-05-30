import z from 'zod'

export const loginSchema = z.object({
    email: z.string().email('Email invalido'),
    passWord: z.string().min(8, 'Senha com menos de 8 caracteres')
})

