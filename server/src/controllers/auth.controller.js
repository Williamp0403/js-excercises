import { AuthModel } from "../models/auth.model.js"
import jwt from "jsonwebtoken"

export class AuthController {
  static async register (req, res) {
    try {
      const response = await AuthModel.queryRegister(req.body)
      if(!response.success) return res.status(response.status).json({ message: response.message })

      res.cookie('token', response.token, { 
        httpOnly: true, 
        secure: true, 
        sameSite: 'None', 
        maxAge: 24 * 60 * 60 * 1000,
      }).json({ user: response.user })
    } catch (e) {
      console.log(e)
      res.status(500).json({ message: "Error interno del servidor." });
    }
  }

  static async login (req, res) {
    try {
      const response = await AuthModel.queryLogin(req.body)
      if(!response.success) return res.status(401).json({ message: response.message })

      res.cookie('token', response.token, {
        httpOnly: true, 
        secure: true, 
        sameSite: 'None', 
        maxAge: 24 * 60 * 60 * 1000,
      }).json({ user: response.user })
    } catch (e) {
      console.log(e)
      res.status(500).json({ message: "Error interno del servidor." });
    }
  }
  
  static async logout(req, res) {
    try {
      res.cookie('token', '', { 
        httpOnly: true, 
        secure: true, 
        sameSite: 'None', 
        expires: new Date(0)
      }).sendStatus(200)
    } catch (e) {
      console.log(e)
      res.status(500).json({ message: "Error interno del servidor." });
    }
  }

  static async verifyToken (req, res) {
    const { token } = req.cookies
    if(!token) return res.status(401).json({ message: 'No hay token, accesso denegado.' })

    jwt.verify(token, process.env.SECRET_TOKEN, async (error, user) => {
      if(error) return res.status(401).json({ message: 'Token inválido, acceso denegado.' })  
      
      const { idUser } = user
      const userFound = await AuthModel.queryGetUser(idUser)
      if(!userFound.success) return res.status(401).json({ message: userFound.message })
      res.json({ user: userFound.user })
    })
  }

  static async updateLevel (req, res) {
    try {
      const response = await AuthModel.queryUpdateLevel(req.user.idUser)
      if(!response.success) return res.status(401).json({ message: response.message })

      res.json({ newLevel: response.level })
    } catch (e) {
      console.log(e)
      res.status(500).json({ message: "Error interno del servidor." });
    }
  }

  static async getUser (req, res) {
    try {
      const response = await AuthModel.queryGetUser(req.user.idUser)
      if(!response.success) res.status(401).json({ message: response.message })
      
      res.json({ user: response.user })
    } catch (e) {
      console.log(e)
      res.status(500).json({ message: "Error interno del servidor." });
    }
  }
}