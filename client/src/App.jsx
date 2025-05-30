import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Toaster } from "sonner"
import { HomePage } from './pages/HomePage'
import { LoginPage } from './pages/LoginPage'
import { RegisterPage } from './pages/RegisterPage'
import { AuthProvider } from './context/AuthContext'
import { PublicRoutes } from './PublicRoutes'
import { PrivateRoutes } from './PrivateRoutes'
import { GamePage } from './pages/GamePage'
import { LevelPage } from './pages/LevelPage'
import { ResponseProvider } from './context/ResponsesContext'

function App() {

  return (
    <AuthProvider>
      <ResponseProvider>      
        <BrowserRouter>
          <Toaster richColors/>
            <Routes>

              <Route element={<PublicRoutes/>}>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/login' element={<LoginPage/>}/>
                <Route path='/register' element={<RegisterPage/>}/>
              </Route>

              <Route element={<PrivateRoutes/>}>
                <Route path='/game' element={<GamePage/>}/>
                <Route path='/level/:levelId' element={<LevelPage/>}/>
              </Route>

              <Route path='*' element={<h1>404</h1>}/>
              
            </Routes>
        </BrowserRouter>
      </ResponseProvider>
    </AuthProvider>
  )
}

export default App
