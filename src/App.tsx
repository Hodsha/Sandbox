
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";
import { ThemeProvider } from './hooks/ThemeContext';
import Header from './components/Header';
import Movie from './components/Movie';

function App() {


  return (
    <ThemeProvider>
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Movie" element={<Movie />} />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  )
}

export default App
