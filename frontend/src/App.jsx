import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route} from 'react-router-dom';
import { Landing } from './components/Landing';

function App() {
  return (
    <>
      <Landing/>
    </>
  )
}

export default App
