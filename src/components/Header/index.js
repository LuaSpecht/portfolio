import './Header.css'
import HeaderLinks from '../HeaderLinks'
import HeaderButtom from '../HeaderButtom'

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
        <HeaderButtom name='Baixar CV'/>
      </div>
    </header>
    
  )
}

export default Header