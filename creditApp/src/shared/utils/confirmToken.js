export const confirmToken = (req, res) => {
    if (!req.userId) return res.status(400).json({msg: 'Dados invalidos'})

    return res.status(200).json({msg: 'ok'})
}