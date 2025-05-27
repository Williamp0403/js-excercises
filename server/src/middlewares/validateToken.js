import jwt from 'jsonwebtoken'

export function validateToken (req, res, next) {
  const { token } = req.cookies

  if(!token) return res.status(401).json({ message: 'No hay token, acceso denegado.' })

  jwt.verify(token, process.env.SECRET_TOKEN, (error, user) => {
    if(error) return res.status(401).json({ message: 'El token no es válido.' })
    
    req.user = user
    next()
  })
}