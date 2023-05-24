import './App.css';
import React from 'react'
import NavBar from './components/NavBar/NavBar';
import HomePage from './pages/HomePage/HomePage';
import AboutMePage from './pages/AboutMePage/AboutMePage';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import ContactPage from './pages/ContactPage/ContactPage';

const App = () => {
  return (
    <div>
            <NavBar />
            <HomePage />
            <AboutMePage />
            <ProjectsPage /> 
            <ContactPage />
      </div>
  );
}

export default App;
