import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignIn from './pages/signin';

function App() {
  const [count, setCount] = useState()

  return (
    <>
      <div>
      <SignIn />
    </div>
    </>
  )
}

export default App
