import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import Home from './components/home/Home'
import Skill from './components/skill/Skill'
import Contact from './components/contact/Contact'
import Project from './components/project/Project'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'; 
function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <main class="main">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/skill' element={<Skill />} />
            <Route path='/project' element={<Project />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </main>
         <ToastContainer position="top-right" autoClose={3000} />
      </BrowserRouter>
    </>
  )
}

export default App
