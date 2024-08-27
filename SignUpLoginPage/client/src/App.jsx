import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import SignUp from './SignUp'
import Login from './Login'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home'
function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path='/register' element={ <SignUp/> }></Route>
      <Route path='/login' element={ <Login/> }></Route>
      <Route path='/home' element={ <Home/> }></Route>
    </Routes>
     
    </BrowserRouter>
  )
}

export default App
