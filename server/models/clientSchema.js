import mongoose from "mongoose"

const clientSchema = new mongoose.Schema({
    userId: {required: true, type: mongoose.Schema.Types.ObjectId, ref: 'Users'},
    name: {required: true, type: String},
    contato: {required: true, type: String},
    saldo: {default: 0, type: Number},
    debito: {default: 0, type: Number},
    credito: {default: 0, type: Number}
})

export const Clients = mongoose.model('Clients', clientSchema)