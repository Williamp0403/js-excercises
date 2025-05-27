import { useEffect, useState } from "react"
import { toast } from 'sonner'
import { loginRequest, logoutRequest, registerRequest, verifyTokenRequest } from "../api/auth"
import { handlingErros } from "../errors/errors"

export function useAuth () {
  const [ user, setUser ] = useState(null)
  const [ isAuthenticated, setIsAuthenticated ] = useState(false)
  const [ loading, setLoading ] = useState(true)

  useEffect(() => {
    async function verifyToken() {
      try {
        const response = await verifyTokenRequest()
        setIsAuthenticated(true)
        setUser(response.data.user)
      } catch (e) {
        setIsAuthenticated(false)
        setUser(null)
      } finally {
        setLoading(false)
      }
    }
    
    verifyToken()
  }, [])
 
  async function sigin (data) {
    try {
      const response = await loginRequest(data)
      setUser(response.data.user)
      setIsAuthenticated(true)
      toast.success('Sesion iniciada correctamente.')
    } catch (e) {
      console.log(e)
      toast.error(handlingErros(e))
    }
  }

  async function sigup (data) {
    try {
      const response = await registerRequest(data)
      setUser(response.data.user)
      setIsAuthenticated(true)
      toast.success('Usuario registrado correctamente.')
    } catch (e) {
      console.log(e)
      toast.error(handlingErros(e))
    }
  }

  async function logout () {
    try {
      await logoutRequest()
      setUser(null)
      setIsAuthenticated(false)
    } catch (e) {
      console.log(e)
      toast.error(handlingErros(e))
    }
  }

  return {
    user,
    isAuthenticated,
    loading,
    sigin,
    setUser,
    sigup,
    logout
  }
}