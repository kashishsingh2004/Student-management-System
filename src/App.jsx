import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Student from './components/Student';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
// import StudentForm from './components/StudentForm';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<> <Navbar /><Home /></>}></Route>
          <Route path='/Student' element={<><Navbar /> <Student /></>}></Route>
          <Route path='/Contact' element={<><Navbar /> <Contact/> </>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App