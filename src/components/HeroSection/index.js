import './HeroSection.css'
import DecoratedButton from '../DecoratedButton'
import Contacts from '../Contacts'
import Elipse from '../Elipse'
import luaPic from "../../assets/images/foto-linkedin.jpeg";
import luaCurriculo from "../../assets/documents/LuanaSpecht.pdf";

const HeroSection = () => {
  return(
    <main className='hero-section'>
      <div className="hero-container">
        <div className="hero-content">
          <img src={luaPic} alt='Uma foto de Luana Specht'/>
          <p className='p-hello-word'>Olá, eu sou a Lua!</p>
          <h1 className='main-title'> Desenvolvedora</h1>
          <h1 className='main-title'>
            <DecoratedButton link='#header' name='&lt;/&gt;'/> FullStack
          </h1>
          <p className='subtitle'>
            Transformando café em código e designs em experiências digitais — com interfaces responsivas, acessíveis e profissionais.
          </p>
          <div className='curriculum-button'>
            <DecoratedButton link={luaCurriculo} name='Baixar Currículo'/>
          </div>
        </div>
        <Elipse/>
        <Contacts/>
      </div>
    </main>
  )
}

export default HeroSection