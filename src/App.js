import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.js';
import HomePage from './pages/HomePage/HomePage.js';
import AboutMePage from './pages/AboutMePage/AboutMePage.js';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage.js';
import ContactPage from './pages/ContactPage/ContactPage.js';

function App() {
  return (
    <div className="App">
          <>
          <NavBar />
           <Routes>
            <Route path="/" element={<HomePage  /> } />
            <Route path="/aboutme" element={<AboutMePage /> } />
            <Route path="/projects" element={<ProjectsPage  /> } /> 
            <Route path="/contact" element={<ContactPage  /> } />
           </Routes>
           </>
      </div>
  );
}

export default App;
