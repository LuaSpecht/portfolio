import './App.css';
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ProjectSection from './components/ProjectSection';
import AboutMeSection from './components/AboutMeSection';
import Footer from './components/Footer';
import TecToolsSection from './components/TecToolsSection';
import CertificationSection from './components/CertificationSection';

function App() {
  return (
    <div className="App">
      <div className="app-content">
        <Header/>
        <HeroSection/>
        <ProjectSection className='projects'/>
        <AboutMeSection className='about-me'/>
        <TecToolsSection className='tec-tools' />
        <CertificationSection className='certifications' />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
