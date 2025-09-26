import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useState, createContext, useContext, useEffect } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import Home from './components/home/Home'
import Skill from './components/skill/Skill'
import Contact from './components/contact/Contact'
import Project from './components/project/Project'
import AnimatedPage from './components/AnimatedPage'
import StarsCanvas from './components/StarsCanvas'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

// Create Theme Context
const ThemeContext = createContext(); 
function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence  mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={
          <AnimatedPage>
            <Home />
          </AnimatedPage>
        } />
        <Route path='/about' element={
          <AnimatedPage>
            <About />
          </AnimatedPage>
        } />
        <Route path='/skill' element={
          <AnimatedPage>
            <Skill />
          </AnimatedPage>
        } />
        <Route path='/project' element={
          <AnimatedPage>
            <Project />
          </AnimatedPage>
        } />
        <Route path='/contact' element={
          <AnimatedPage>
            <Contact />
          </AnimatedPage>
        } />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [theme, setTheme] = useState("dark");

  // Initialize dark theme on app load
  useEffect(() => {
    document.body.classList.add("dark-theme");
  }, []);

  const handleToggleTheme = () => {
    if (theme === "dark") {
      setTheme("light")
      document.body.classList.remove("dark-theme")
    } else {
      setTheme("dark")
      document.body.classList.add("dark-theme");
    }
  };

  const isDarkMode = theme === "dark";

  return (
    <ThemeContext.Provider value={{ theme, handleToggleTheme, isDarkMode }}>
      <BrowserRouter>
        <StarsCanvas isDarkMode={isDarkMode} />
        <Navbar />
        <main className="main">
          <AnimatedRoutes />
        </main>
        <ToastContainer position="top-right" autoClose={3000} />
      </BrowserRouter>
    </ThemeContext.Provider>
  )
}

// Custom hook to use theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export default App
