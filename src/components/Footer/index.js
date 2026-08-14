import './Footer.css'
import Contacts from '../Contacts'
import Logo from '../../assets/images/logo.svg'
import { useLanguage } from "../../i18n/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return(
    <footer id='footer'>
      <div className='footer-content'>
        <div className='footer-main-content' >
          <div className='logo'>
            <img src={Logo} alt="Logo" />
            <p>{t.footer.bio}</p>
          </div>
          <div className='info'>
            <div className='sections-info'>
              <h3>{t.footer.sections}</h3>
              <a href='#projects' >{t.nav.projects}</a>
              <a href='#about-me' >{t.nav.about}</a>
              <a href='#tec-tools' >{t.nav.tech}</a>
              <a href='#certification' >{t.nav.certifications}</a>
            </div>
          <div className='terms-info'>
            <h3>{t.footer.terms}</h3>
            <a href='#footer'>{t.footer.privacyPolicy}</a>
            <a href='#footer'>{t.footer.termsOfUse}</a>
          </div>
          <div className='contact-info'>
            <h3>{t.footer.contacts}</h3>
            <Contacts/>
          </div>
          </div>

        </div>
        <div className='footer-design-credits'>
          <div>Luana Specht Bragante</div>
          <div>
            <p>{t.footer.designBy} ANA<b>DESIGN</b></p>
            <p>{t.footer.rights}</p>
          </div>
      </div>
      </div>
    </footer>
  )
}

export default Footer