
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";
import { ThemeProvider } from './hooks/ThemeContext';
import Header from './components/Header';
import Movie from './components/Movie';
import TimeLine from './components/TimeLine';
import Navbar from './components/Navbar';

function App() {


  return (
    <ThemeProvider>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Movie" element={<Movie />} />
          <Route path="/TimeLine" element={<TimeLine />} />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  )
}

export default App
