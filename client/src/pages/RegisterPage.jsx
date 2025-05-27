import { Input, InputPassword } from "../components/Input";
import { Fade } from '@mui/material';
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../schemas/auth";
import { useAuth } from "../context/AuthContext";

export function RegisterPage () {
  const { sigup } = useAuth()
  const { handleSubmit, register, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(registerSchema)
  })

  const onSubmit = handleSubmit(async data => {
    await sigup(data)
  })

  return (
    <Fade in={true} timeout={700}>
      <main className="container mx-auto h-[calc(100vh-96px)]">
        <section className="flex items-center container justify-center mx-auto h-full">
          <div className="border rounded-lg mx-10 mb-15 max-w-md w-full shadow-2xl shadow-sky-700 border-sky-700 p-5">
            <h1 className="text-2xl font-bold text-sky-400 mb-5">Registrarse</h1>
            <form onSubmit={onSubmit} className="flex flex-col gap-y-5">
              <div className="flex items-center gap-x-4">
                <Input type='text' name='name' label='Nombre' register={register} errors={errors.name}/>
                <Input type='text' name='lastname' label='Apellido' register={register}  errors={errors.lastname}/>
              </div>
                <Input type='text' name='username' label='Nombre de usuario' register={register}  errors={errors.username}/>
                <InputPassword name='password' label='Contraseña' register={register}  errors={errors.password}/>
              <button 
                className="py-3 bg-sky-600 text-zinc-800 font-semibold rounded-sm transition ease-in-out duration-300 hover:bg-sky-500 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                disabled={isSubmitting}
              >          
                Enviar
              </button>
            </form>
          </div>
        </section>
      </main>
    </Fade>
  )
}