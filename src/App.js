import React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Import your components
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Documents from './components/Documents';
import Terminal from './components/Terminal';
import Notepad from './components/Notepad';
import DesktopTopBar from './components/DesktopTopBar';

// Global or additional CSS
import './index.css';

// Create a custom MUI theme (optional)
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00ff00', // "terminal green"
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

// Layout component for a common desktop-like structure
const Layout = () => {
  return (
    <div className="desktop-container">
      <DesktopTopBar />
      <div className="window-container">
        <Outlet /> {/* Nested routes get rendered here */}
      </div>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/*
        IMPORTANT: basename="/Portfolio" so React Router knows
        the app is served at /Portfolio on GitHub Pages
      */}
      <Router basename="/Portfolio">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<AboutMe />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
            <Route path="documents" element={<Documents />} />

            {/* "Apps" sub-routes */}
            <Route path="apps">
              <Route path="terminal" element={<Terminal />} />
              <Route path="notepad" element={<Notepad />} />
            </Route>

            {/* Catch-all route for 404s */}
            <Route
              path="*"
              element={
                <div className="window">
                  <h1>404 - Not Found</h1>
                </div>
              }
            />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
