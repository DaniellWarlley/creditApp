import z from "zod"

export const serviceSchema = z.object({
    name: z.string().min(1, 'Digite um nome').max(25, 'Maximo de caracteres atingido'),
    valor: z.coerce.number().min(0, 'Valor invalido')
})