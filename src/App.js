import './App.css';
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ProjectSection from './components/ProjectSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <HeroSection/>
      <ProjectSection className='projects'/>
      <Footer/>
    </div>
  );
}

export default App;
