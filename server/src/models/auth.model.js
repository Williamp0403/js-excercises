import { db } from "../config/db.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export class AuthModel {

  static async queryRegister(data) {
    const { username, name, lastname, password } = data

    const userFound = await db.execute({
      sql: 'SELECT * FROM Users WHERE username = ?',
      args: [username]
    })

    if(userFound.rows.length > 0) return { success: false, status: 409, message: 'El nombre de usuario ya existe.' }

    const SALT = parseInt(process.env.SALT_ROUND)
    const hashedPassword = await bcrypt.hash(password, SALT)

    const newUser = await db.execute({
      sql: 'INSERT INTO Users (username, name, lastname, password) VALUES (?, ?, ?, ?) RETURNING *',
      args: [username, name, lastname, hashedPassword]
    })

    if(newUser.rows.length === 0) return { success: false, status: 400, message: 'No se pudo crear el usuario.' }

    const user = {
      idUser: newUser.rows[0].id_user,
      username: newUser.rows[0].username,
      name: newUser.rows[0].name,
      lastname: newUser.rows[0].lastname,
      level: newUser.rows[0].level
    }

    const token = jwt.sign({ idUser: user.idUser }, process.env.SECRET_TOKEN, { expiresIn: '1d' })

    return {
      success: true,
      user: user,
      token: token
    }
  }

  static async queryLogin(data) {
    const { username, password } = data
    
    const userFound = await db.execute({
      sql: 'SELECT * FROM Users WHERE username = ?',
      args: [username]
    })

    if(userFound.rows.length === 0) return { success: false, message: 'Usuario o contraseña incorrecta.' }

    const verifyPassword = await bcrypt.compare(password, userFound.rows[0].password)
    if(!verifyPassword) return { success: false, message: 'Usuario o contraseña incorrecta.' }

    const user = {
      idUser: userFound.rows[0].id_user,
      username: userFound.rows[0].username,
      name: userFound.rows[0].name,
      lastname: userFound.rows[0].lastname,
      level: userFound.rows[0].level
    }

    const token = jwt.sign({ idUser: user.idUser }, process.env.SECRET_TOKEN, { expiresIn: '1d' })

    return {
      success: true,
      user: user,
      token: token
    }
  }

  static async queryGetUser(id) {
    const user = await db.execute({
      sql: 'SELECT * FROM Users WHERE id_user = ?',
      args: [id]
    })
    
    if(user.rows.length === 0) return { success: false, message: 'Usuario no encontrado.' }
    
    return {
      success: true,
      user: {
        idUser: user.rows[0].id_user,
        username: user.rows[0].username,
        name: user.rows[0].name,
        lastname: user.rows[0].lastname,
        level: user.rows[0].level
      }
    }
  }

  static async queryUpdateLevel (id) {
    const updateLevel = await db.execute({
      sql: 'UPDATE Users SET level = level + 1 WHERE id_user = ? RETURNING *',
      args: [id]
    })

    if(updateLevel.rows.length === 0) return { success: false, message: 'El usuario no existe.' }

    return {
      success: true,
      level: updateLevel.rows[0].level
    }
  }
}