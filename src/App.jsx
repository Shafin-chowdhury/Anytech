import { useState } from 'react'
import './App.css'
import Home from './AllComponents/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ContactUs from './Components/ContactUs'
import Navber from './Components/Navber/Navber'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Router>
      <Navber />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home Page */}
        <Route path="/contact" element={<ContactUs />} /> {/* Contact Page */}
      </Routes>
    </Router>
    
    </>
  )
}

export default App
