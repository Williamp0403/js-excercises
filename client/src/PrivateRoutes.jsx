import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from './context/AuthContext'
import { Loading } from './components/Loading'
import { HeaderPrivate } from './components/HeaderPrivate'

export function PrivateRoutes () {
  const { loading, isAuthenticated } = useAuth()

  if(loading) return <Loading className='flex items-center justify-center h-screen'/>

  if(!loading && !isAuthenticated) return <Navigate to="/" replace />

  return (
    <>
      <HeaderPrivate/>
      <Outlet/>
    </>
)
}