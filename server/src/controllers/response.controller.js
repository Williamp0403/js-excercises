import { ResponseModel } from "../models/response.model.js";

export class ResponseController {

  static async getResponse (req, res) {
    try {
      const response = await ResponseModel.queryGetResponse(req.user.idUser)
      res.json({ responses: response })
    } catch (e) {
      console.log(e)
      res.status(500).json({ message: "Error interno del servidor." });
    }
  }

  static async saveReponse (req, res) {
    try {
      const response = await ResponseModel.querySaveResponse(req.user.idUser, req.body)
      res.json({ response: response })
    } catch (e) {
      console.log(e)
      res.status(500).json({ message: "Error interno del servidor." });
    }
  }
}