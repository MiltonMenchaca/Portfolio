// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Documents from './components/Documents';
import Terminal from './components/Terminal';
import Notepad from './components/Notepad';
import DesktopTopBar from './components/DesktopTopBar';
import './styles/index.css';

// Crear tema personalizado de MUI
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00ff00', // Color verde tipo terminal
    },
    background: {
      default: '#1a1a1a',
      paper: '#2d2d2d',
    },
  },
  typography: {
    fontFamily: '"Courier New", monospace',
  },
});

// Componente Layout para estructura común
const Layout = () => {
  return (
    <div className="desktop-container">
      <DesktopTopBar />
      <div className="window-container">
        <Outlet /> {/* Aquí se renderizarán las rutas */}
      </div>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<AboutMe />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
            <Route path="documents" element={<Documents />} />
            
            {/* Aplicaciones del sistema */}
            <Route path="apps">
              <Route path="terminal" element={<Terminal />} />
              <Route path="notepad" element={<Notepad />} />
            </Route>

            {/* Ruta 404 */}
            <Route path="*" element={<div className="window"><h1>404 - Not Found</h1></div>} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;