import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Countries from './assets/Components/Countries/Countries'

function App() {

  return (
    <div className='px-24 py-10 space-y-10'>
     
      <h1 className='text-black font-semibold  text-center text-5xl' >Countries</h1>

      <Countries></Countries>
   
    </div>
  )
}

export default App
