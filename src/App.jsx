import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ProjectShowcase from './pages/ProjectShowcase';

const Home = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash === '#work') {
      const element = document.getElementById('work');
      if (element) {
        element.scrollIntoView({ behavior: 'auto' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <div className="app-container">
      <Header />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
    </div>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project/:id" element={<ProjectShowcase />} />
    </Routes>
  );
}

export default App;
