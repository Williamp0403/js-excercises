import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from './context/AuthContext'
import { Loading } from './components/Loading'
import { Header } from "./components/Header"

export function PublicRoutes () {
  const { loading, isAuthenticated } = useAuth()

  if(loading) return <Loading className='flex items-center justify-center h-screen'/>

  if(!loading && isAuthenticated) return <Navigate to="/game" replace />

  return (
    <>
      <Header/>
      <Outlet/>
    </>
  )
}