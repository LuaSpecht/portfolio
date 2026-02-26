import { useState } from "react";
import './Header.css'
import HeaderLinks from '../HeaderLinks'
import DecoratedButton from '../DecoratedButton'
import Elipse from '../Elipse'
import logoImg from "../../assets/images/logo.svg";
import {ListIcon} from "@phosphor-icons/react";
import luaCurriculo from "../../assets/documents/LuanaSpecht.pdf";


const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);

    const handleCloseMenu = () => {
  setMenuOpen(false)
  } 

  return(
    <header>
      <Elipse/>
      <img src={logoImg} alt="Logo Lua" />

      <div className={`header-links ${menuOpen ? "active" : ""}`}>

        <HeaderLinks link='#projects' name='Projetos' onClick={handleCloseMenu}/>
        <HeaderLinks link="#about-me"  name='Sobre Mim' onClick={handleCloseMenu}/>
        <HeaderLinks link='#tec-tools' name='Tecnologias' onClick={handleCloseMenu}/>
        <HeaderLinks link='#certification' name='Certificações' onClick={handleCloseMenu}/>
        <DecoratedButton link={luaCurriculo} name='Baixar CV' onClick={handleCloseMenu}/>
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