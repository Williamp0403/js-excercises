import { Router } from 'express'
import { AuthController } from '../controllers/auth.controller.js'
import { validateData } from '../middlewares/validateData.js'
import { loginSchema, registerSchema } from '../schemas/auth.js'
import { validateToken } from '../middlewares/validateToken.js'

const routes = Router()

routes.post('/register', validateData(registerSchema), AuthController.register)
routes.post('/login', validateData(loginSchema), AuthController.login)
routes.post('/logout', AuthController.logout)
routes.get('/verify-token', AuthController.verifyToken)
routes.put('/update-level', validateToken, AuthController.updateLevel)
routes.get('/get-user', validateToken, AuthController.getUser)

export default routes
