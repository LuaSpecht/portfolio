import { useState } from "react";
import './Header.css'
import HeaderLinks from '../HeaderLinks'
import DecoratedButton from '../DecoratedButton'
import Elipse from '../Elipse'
import logoImg from "../../assets/images/logo.svg";
import { ListIcon} from "@phosphor-icons/react";
import luaCurriculo from "../../assets/documents/Curriculo-Luana-Specht.pdf";

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return(
    <header>
      <Elipse/>
      <img src={logoImg} alt="Logo Lua" />

      <div className={`header-links ${menuOpen ? "active" : ""}`}>

        <HeaderLinks link='#projects' name='Projetos'/>
        <HeaderLinks link="#about-me"  name='Sobre Mim'/>
        <HeaderLinks link='#tec-tools' name='Tecnologias'/>
        <HeaderLinks link='#certification' name='Certificações'/>
        <DecoratedButton link={luaCurriculo} name='Baixar CV'/>
      </div>

      <div 
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <ListIcon size={32} color="#fff"/>
      </div>

    </header>
  )
}

export default Header