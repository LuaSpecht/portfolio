import './Header.css'
import HeaderLinks from '../HeaderLinks'
import DecoratedButton from '../DecoratedButton'

const Header = () => {
  return(
    <header>
      <img src="../images/logo.svg" alt="Logo Lua" />
      <div className='header-links' >
        <HeaderLinks link="#about-me"  name='Sobre Mim'/>
        <HeaderLinks name='Projetos'/>
        <HeaderLinks name='Carreira'/>
        <HeaderLinks name='Tecnologias'/>
        <HeaderLinks name='Certificações'/>
        <DecoratedButton link="../archives/Curriculo-Luana-Front-End.pdf" name='Baixar CV'/>
      </div>
    </header>
    
  )
}

export default Header