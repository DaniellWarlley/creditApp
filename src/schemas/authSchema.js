import z from 'zod'

export const authSchema = z.object({
    name: z.string().min(1, 'Nome obrigatório').optional(),
    email: z.string().email('Email invalido'),
    passWord: z.string().min(8, 'Senha com menos de 8 caracteres')
})

