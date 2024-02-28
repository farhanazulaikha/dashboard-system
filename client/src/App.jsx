import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './components/home/home'
import Main from './components/main/main'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/main" element={<Main />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
