import { Fade } from '@mui/material';
import { Input, InputPassword } from "../components/Input";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from "../schemas/auth";
import { useAuth } from "../context/AuthContext";

export function LoginPage () {
  const { sigin } = useAuth()

  const { handleSubmit, register, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(loginSchema)
  });

  const onSubmit = handleSubmit(async data => {
    await sigin(data);
  });

  return (
    <Fade in={true} timeout={700}>
      <main className="container mx-auto h-[calc(100vh-96px)]">
        <section className="flex items-center container justify-center mx-auto h-full">
          <div className="border rounded-lg mx-10 mb-15 max-w-md w-full shadow-2xl shadow-sky-700 border-sky-700 p-5">
            <h1 className="text-2xl font-bold text-sky-400 mb-5">Iniciar sesión</h1>
            <form onSubmit={onSubmit} className="flex flex-col gap-y-5">
              <Input type='text' name='username' label='Nombre de usuario' register={register} errors={errors.username} />
              <InputPassword name='password' label='Contraseña' register={register} errors={errors.password}/>
              <button 
                className="py-3 bg-sky-600 text-zinc-800 font-semibold rounded-sm transition ease-in-out duration-300 hover:bg-sky-500 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                disabled={isSubmitting}
              >          
                Iniciar sesión
              </button>
            </form>
          </div>
        </section>
      </main>
    </Fade>
  );
}
