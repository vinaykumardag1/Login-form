import React from 'react'
import Signup from './Signup'
import Login  from './login'
import {Routes,Route} from 'react-router-dom'
import Home from './Home'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
      
    </div>
  )
}

export default App
