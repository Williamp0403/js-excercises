import dotenv from 'dotenv'
dotenv.config()
import { createClient } from '@libsql/client'

export const db = createClient({
  url: 'libsql://js-exercises-williamp0403.aws-us-east-1.turso.io',
  authToken: process.env.DB_TOKEN
})