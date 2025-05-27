import z from 'zod'

export const loginSchema = z.object({
  username: z
    .string({ message: 'El nombre de usuario es requerido.' })
    .trim()
    .min(3, { message: 'Debe tener al menos 3 caracteres.' })
    .max(20, { message: 'No puede tener más de 20 caracteres.' }),
  password: z
    .string({ message: 'La contraseña es requerida.' })
    .trim()
    .min(8, { message: 'Debe tener al menos 8 caracteres.' })
})

export const registerSchema = z.object({
  name: z
    .string({ message: 'El nombre es requerido.' })
    .trim()
    .min(3, { message: 'Debe tener al menos 3 caracteres.' })
    .max(20, { message: 'No puede tener más de 20 caracteres.' }),
  lastname: z
    .string({ message: 'El apellido es requerido.' })
    .trim()
    .min(3, { message: 'Debe tener al menos 3 caracteres.' })
    .max(20, { message: 'No puede tener más de 20 caracteres.' }),
  username: z
    .string({ message: 'El nombre de usuario es requerido.' })
    .trim()
    .min(3, { message: 'Debe tener al menos 3 caracteres.' })
    .max(20, { message: 'No puede tener más de 20 caracteres.' }),
  password: z
    .string({ message: 'La contraseña es requerida.' })
    .trim()
    .min(8, { message: 'Debe tener al menos 8 caracteres.' })
})