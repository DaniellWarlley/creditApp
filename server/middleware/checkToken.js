export default function checkToken(req, res, next){
import { jwt } from 'jsonwebtoken'
    const authHeader = req.headers['authorization']

    if (!authHeader) return res.status(401).json({msg: 'Acces denied: no token provided'})

    const token = authHeader.split(' ')[1]
    if(!token) return res.status(401).json({msg: 'Acces denied: malformed token'})

    try {
        const secret = process.env.SECRET
        const decoded = jwt.verify(token, secret)
        req.userId = decoded.id
        next()
    } catch (error) {
        if (err.name === 'TokenExpiredError') {
            return res.status(401).json({ msg: 'Token expired' })
        }
        return res.status(400).json({ msg: 'Invalid token' })
    }
}