import z from 'zod'

export const clientSchema = z.object({
    name: z.string().min(1, 'Nome obrigatório'),
    contato: z.string().min(1, "Contato obrigatório"),
    credito: z.coerce.number().min(0, 'Credito invalido'),
    debito: z.coerce.number().min(0, 'Debito invalido')
})