import { useState } from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home';
import Doctors from './Doctors';
import NewDoctor from './NewDoctor';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/new" element={<NewDoctor />} />
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
