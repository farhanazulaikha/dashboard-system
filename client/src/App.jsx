import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './components/navbar/navbar'
import Home from './components/home/home'
import Main from './components/main/main'

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/main" element={<Main />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
