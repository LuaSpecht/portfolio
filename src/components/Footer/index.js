import './Footer.css'
import Contacts from '../Contacts'
import Logo from '../../assets/images/logo.svg'

const Footer = () => {
  return(
    <footer>
      <div className='footer-content'>
        <div className='footer-main-content' >
          <div className='logo'>
            <img src={Logo} alt="Logo" />
            <p>Uma dev que se diverte criando coisas. 
              Trabalhar com desenvolvimento é mais uma dessas coisas que amo fazer. 
              Atualmente, foco principalmente em React e estou em processo de aprendizado de C#.
            </p>
          </div>
          <div className='info'>
            <div className='sections-info'>
            <h3>Seções</h3>
           <a href='#projects' >Projetos</a>
           <a href='#about-me' >Sobre Mim</a>
            <a href='#tec-tools' >Tecnologias</a>
             <a href='#certification' >Certificado</a>
          
          </div>
          <div className='terms-info'>
            <h3>Termos</h3>
            <a href='#'>Política de Privacidade</a>
            <a href='#'>Termos de Uso</a>
          </div>
          <div className='contact-info'>
            <h3>Contatos</h3>
            <Contacts/>
          </div>
          </div>
          
        </div>
        <div className='footer-design-credits'>
          <div>Luana Specht Bragante</div>
          
          <div>Design por ANA<b>DESIGN</b>   &#169; 2026 - Luana Todos os direitos reservados.</div>
      </div>
      </div>
    </footer>
  )
}

export default Footer