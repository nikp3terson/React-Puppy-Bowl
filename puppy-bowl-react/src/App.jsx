import { useState } from 'react'
import AllPuppies from './compnents/allPuppies'
import AddPuppyForm from './compnents/Addpuppyform'
import SinglePuppy from './compnents/singlePuppy'
import './App.css'

import { Link, Route, Routes } from 'react-router-dom'


function App() {

  return (
    <>
      <nav className='nav-bar'>
      <h1>Puppy Bowl! 🐕</h1>
        <Link to='/' id='home-btn'>Home</Link>
        <Link to='/addpuppy'>Add Puppy</Link>
      </nav>

    <Routes>
      <Route path='/' element={<AllPuppies/>}/>
      <Route path='/addpuppy' element={<AddPuppyForm/>}/>
      <Route path='/details/:id' element={<SinglePuppy/>}/>
    </Routes>
    </>
  )
}

export default App
