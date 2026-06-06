import mongoose from "mongoose"

const serviceSchema = new mongoose.Schema({
    name: {type: String, required: true},
    valor: {type: Number, required: true},
    status: {type: String, enum: ['Ativo', 'Inativo'], required: true, default: 'Ativo'},
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'Users'}
})

export const Services = mongoose.model('Services', serviceSchema)