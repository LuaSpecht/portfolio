import './HeroSection.css'
import DecoratedButton from '../DecoratedButton'
import Contacts from '../Contacts'
import Elipse from '../Elipse'
import luaPic from "../../assets/images/foto-linkedin.jpeg";
import { getWhatsappLink } from "../../constants/whatsapp";
import { useLanguage } from "../../i18n/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();

  return(
    <main className='hero-section'>
      <div className="hero-container">
        <div className="hero-content">
          <img src={luaPic} alt='Uma foto de Luana Specht' fetchpriority='high' decoding='async'/>
          <p className='p-hello-word'>{t.hero.greeting}</p>
          <h1 className='main-title'> {t.hero.titleLine1}</h1>
          <h1 className='main-title'>
            <DecoratedButton link='#header' name='&lt;/&gt;'/> {t.hero.titleLine2}
          </h1>
          <p className='subtitle'>
            {t.hero.subtitle}
          </p>
          <div className='curriculum-button'>
            <DecoratedButton
              link={getWhatsappLink(t.whatsappMessage)}
              name={t.hero.cta}
              target='_blank'
            />
          </div>
        </div>
        <Elipse/>
        <Contacts/>
      </div>
    </main>
  )
}

export default HeroSection