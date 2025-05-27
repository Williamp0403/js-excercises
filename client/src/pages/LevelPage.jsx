import { Fade } from '@mui/material'
import { useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import { useParams, Navigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { levels } from '../const/levels'
import { ProgressBar } from '../components/ProgressBar'
import { UseQuestion } from '../hooks/useQuestion'
import { RadioButtonsGroup } from '../components/RadioGroup'
import { Loading } from '../components/Loading'
import { ModalCompletedLevel } from '../components/Modal'

export function LevelPage () {
  const { levelId } = useParams();
  const { user } = useAuth();
  const { getResponses, responses, select, setSelect, loading, verifyResponse } = UseQuestion();
  const { handleSubmit, formState: { isSubmitting } } = useForm();

  useEffect(() => {
    getResponses();
  }, []);

  if (loading) return <Loading className='flex justify-center items-center'/>;

  const currentLevelId = Number(levelId);
  const responsesLevel = responses.filter(response => response.level === currentLevelId);
  const dataLevel = levels.find(data => data.level === currentLevelId);

  if (currentLevelId > user.level) return <h1>No tienes el nivel necesario para jugar este nivel</h1>;
  if (currentLevelId < user.level) return <Navigate to='/game'/>;
  if (responsesLevel.length === 10) return <ModalCompletedLevel />;
  
  const onSubmit = handleSubmit(async () => {
    await verifyResponse(dataLevel.level, dataLevel.questions[responsesLevel.length]);
  });

  return (
    <Fade in={true} timeout={700}>
      <main className="flex flex-col h-[calc(100vh-107px)] max-w-4xl w-full gap-y-7 mx-auto px-10">
        <ProgressBar value={responsesLevel.length}/>
        <h1 className='text-3xl md:text-4xl font-bold text-sky-600'>{dataLevel.title}</h1>
        <h3 className='text-lg md:text-xl font-medium'>
          {dataLevel.questions[responsesLevel.length].question}
        </h3>
        <form onSubmit={onSubmit} className='flex flex-col justify-around pb-5 h-full'>
          <RadioButtonsGroup 
            options={dataLevel.questions[responsesLevel.length].options}
            select={select}
            setSelect={setSelect}
          />
          <button 
            className="bg-sky-700 text-base md:text-lg rounded-xl font-bold p-4 cursor-pointer transition ease-in-out duration-300 disabled:bg-zinc-600 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!select || isSubmitting}
          >
            Enviar
          </button>
        </form>
      </main>
    </Fade>
  );
}
