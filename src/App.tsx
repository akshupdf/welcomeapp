import { useState } from 'react'

import './App.css'
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import Datalist from './components/datalist';
import Protected from './components/protected';
import Register from './components/login';

function App() {

  const [user, setUser] = useState("")

  return (
    <div className="App">

      <BrowserRouter>

      <div className='nav'>
        <ul className='nav'>
          <li><Link to=''>Home </Link></li>
          <li><Link to='/data'>Data </Link></li>
          <li><Link to='/'>Register </Link></li>
        </ul>
      </div>
        <Routes>
          <Route path="/data" element={<Protected Component={Datalist} />} />
          <Route path="/" element={<Register />} />
          <Route path="*" element={<Navigate to='/' replace />} />

        </Routes>

        
      </BrowserRouter>

      

    </div>
  )
}

export default App
