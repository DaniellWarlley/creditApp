import mongoose from "mongoose"

const serviceSchema = new mongoose.Schema({
    name: {type: String, required: true},
    valor: {type: Number, required: true},
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'Users'}
})

export const Services = mongoose.model('Services', serviceSchema)