import { db } from "../config/db.js";

export class ResponseModel {

  static async queryGetResponse (id) {
    const responses = await db.execute({
      sql: 'SELECT * FROM Responses WHERE id_user = ?',
      args: [id]
    })
    return responses.rows
  }

  static async querySaveResponse (id, data) {
    const { level, question } = data
    const response = await db.execute({
      sql: 'INSERT INTO Responses (id_user, level, question) VALUES (?, ?, ?) RETURNING *',
      args: [id, level, question]
    })
    return response.rows[0]
  }
}