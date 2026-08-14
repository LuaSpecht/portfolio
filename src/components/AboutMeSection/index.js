import './AboutMeSection.css'
import SectionTitle from '../SectionTitle'
import luaPic from "../../assets/images/about-me-image.jpg";
import Elipse from '../Elipse'
import Contacts from '../Contacts'
import { useLanguage } from "../../i18n/LanguageContext";

const AboutMeSection = () => {
  const { t } = useLanguage();

  return(
    <section id='about-me' className='about-me-section'>
        <SectionTitle className='section-title' name={t.about.sectionTitle}/>
        <div className='about-me-content'>
            <Contacts/>
            <img src={luaPic} alt='Uma foto de Luana Specht' loading='lazy' decoding='async'/>
            <div className='about-me-text'>
                <p id='hello'>{t.about.hello}</p>
                <h2 className='my-name'>Luana Specht Bragante</h2>
                {t.about.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
            </div>
        </div>
            <Elipse className='purple-elipse' />
    </section>
  )
}

export default AboutMeSection