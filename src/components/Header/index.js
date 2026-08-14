import { useState } from "react";
import './Header.css'
import HeaderLinks from '../HeaderLinks'
import DecoratedButton from '../DecoratedButton'
import Elipse from '../Elipse'
import logoImg from "../../assets/images/logo.svg";
import {ListIcon} from "@phosphor-icons/react";
import { getWhatsappLink } from "../../constants/whatsapp";
import { useLanguage } from "../../i18n/LanguageContext";


const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

    const handleCloseMenu = () => {
  setMenuOpen(false)
  }

  return(
    <header>
      <Elipse/>
      <img src={logoImg} alt="Logo Lua" />

      <div className={`header-links ${menuOpen ? "active" : ""}`}>

        <HeaderLinks link='#projects' name={t.nav.projects} onClick={handleCloseMenu}/>
        <HeaderLinks link="#about-me"  name={t.nav.about} onClick={handleCloseMenu}/>
        <HeaderLinks link='#tec-tools' name={t.nav.tech} onClick={handleCloseMenu}/>
        <HeaderLinks link='#certification' name={t.nav.certifications} onClick={handleCloseMenu}/>
        <button
          type='button'
          className='lang-toggle lang-toggle-desktop'
          onClick={toggleLanguage}
          aria-label={language === 'pt' ? 'Switch to English' : 'Mudar para Português'}
        >
          {language === 'pt' ? 'EN' : 'PT'}
        </button>
        <DecoratedButton
          link={getWhatsappLink(t.whatsappMessage)}
          name={t.nav.quote}
          target='_blank'
          onClick={handleCloseMenu}
        />
      </div>

      <div className='header-mobile-controls'>
        <button
          type='button'
          className='lang-toggle lang-toggle-mobile'
          onClick={toggleLanguage}
          aria-label={language === 'pt' ? 'Switch to English' : 'Mudar para Português'}
        >
          {language === 'pt' ? 'EN' : 'PT'}
        </button>

        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <ListIcon size={32} color="#fff"/>
        </div>
      </div>

    </header>
  )
}

export default Header