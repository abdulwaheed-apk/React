import './App.css'
import Exercise from './features/exercises/Exercise'
import Login from './features/Login/Login'
import Signup from './features/Signup/Signup'
import Landing from './components/Landing'
import NotFound from './components/NotFound'
import Dashboard from './features/dashboard/Dashboard'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import { Children } from 'react'
function App() {
  return (
    <>
      <div>
        <Header>{Children}</Header>

        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/exercises' element={<Exercise />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </>
  )
}

export default App
