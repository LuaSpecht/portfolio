import './HeroSection.css'
import DecoratedButton from '../DecoratedButton'
import Aside from '../Aside'

const HeroSection = () => {
  return(
    <main className='hero-section' >
      <img src='../images/foto-linkedin.jpeg' alt='Uma foto de Luana Specht'/>
      <p className='p-hello-word'>Olá, eu sou a Lua!</p>
      <h1 className='main-title'> Desenvolvedora</h1>
      <h1 className='main-title'> <DecoratedButton link='#header' name='&lt;/&gt;'/> Front-End</h1>
      <p className='subtitle'>Transformando café em código e designs em experiências digitais — com interfaces responsivas, acessíveis e... gatos insistindo em ajudar no teclado 🐾</p>
      <div className='curriculum-button'> <DecoratedButton link="../archives/Curriculo-Luana-Front-End.pdf" name='Baixar Currículo'/> </div>
      <Aside/>
    </main>
  )
}

export default HeroSection