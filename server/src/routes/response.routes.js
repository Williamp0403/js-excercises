import { Router } from 'express'
import { validateToken } from '../middlewares/validateToken.js'
import { ResponseController } from '../controllers/response.controller.js'

const routes = Router()

routes.get('/responses', validateToken, ResponseController.getResponse)
routes.post('/save-response', validateToken, ResponseController.saveReponse)

export default routes