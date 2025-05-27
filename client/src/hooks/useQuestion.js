import { toast } from "sonner"
import useSound from "use-sound";
import { handlingErros } from "../errors/errors"
import { getResponsesRequest, saveResponseRequest } from "../api/response"
import { useState } from "react"
import { useAuth } from "../context/AuthContext"
import { getUserRequest, updateLevelRequest } from "../api/auth"

export function UseQuestion () {
  const { setUser } = useAuth()
  const [ responses, setResponses ] = useState([])
  const [ select, setSelect ] = useState(null)
  const [ loading, setLoading ] = useState(true)

  const [playCorrectSound] = useSound("/sounds/correct.mp3", { volume: 0.5 });
  const [playWrongSound] = useSound("/sounds/wrong.mp3", { volume: 0.5 });
  
  async function getResponses () {
    try {
      const response = await getResponsesRequest()
      setResponses(response.data.responses)
    } catch (e) {
      console.log(e)
      toast.error(handlingErros(e))
    } finally {
      setLoading(false)
    }
  }

  async function verifyResponse (level, response) {
    const { id, correctAnswer } = response

    if(correctAnswer !== select)  {
      playWrongSound()
      return toast.error('Respuesta incorrecta.', { duration: 2000 })
    }
    
    
    try {
      const requestData = {
        level: level,
        question: id
      }
      const response = await saveResponseRequest(requestData)
      setResponses((prevResponses) => {
        const newResponses = [...prevResponses, response.data.response];
        if (newResponses.length === 10) {
          updateLevel();
        }
        return newResponses;
      })
      playCorrectSound();
      toast.success('Respuesta correcta.', { duration: 2000 })
    } catch (e) {
      console.log(e)
      toast.error(handlingErros(e))
    }
  }

  async function updateLevel () {
    try {
      await updateLevelRequest()
    } catch (e) {
      console.log(e)
      toast.error(handlingErros(e))
    }
  }

  async function getInfoUser () {
    try {
      const [userResponse, questionResponse] = await Promise.all([
        getUserRequest(),
        getResponsesRequest()
      ])
      setUser(userResponse.data.user)
      setResponses(questionResponse.data.responses)
    } catch (e) {
      console.log(e)
      toast.error(handlingErros(e))
    } finally {
      setLoading(false)
    }
  }

  return {
    getResponses,
    setSelect,
    verifyResponse,
    getInfoUser,
    responses,
    select,
    loading
  }
}