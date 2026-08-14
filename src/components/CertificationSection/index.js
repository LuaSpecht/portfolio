import { useState } from 'react'
import './CertificationSection.css'
import SectionTitle from '../SectionTitle'
import CertificadoUdemy from "../../assets/images/certificado-udemy.jpg";
import CertificadoCursoEmVideo from "../../assets/images/certificado-curso-em-video.pdf.png";
import CertfificadoDesignEPrototipacao from "../../assets/images/certificado-design.png";
import Diploma from "../../assets/images/diploma.png"
import { LessThanIcon, GreaterThanIcon } from "@phosphor-icons/react";
import { useLanguage } from "../../i18n/LanguageContext";

const CertificationSection = () => {
  const { t } = useLanguage();

  const slides = [
    { image: Diploma, alt: t.certifications.alts.diploma },
    { image: CertificadoUdemy, alt: t.certifications.alts.udemy },
    { image: CertificadoCursoEmVideo, alt: t.certifications.alts.cursoEmVideo },
    { image: CertfificadoDesignEPrototipacao, alt: t.certifications.alts.design },
  ]

  const [slideIndex, setSlideIndex] = useState(0)

  const nextSlide = () => {
    setSlideIndex((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setSlideIndex((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    )
  }

  const goToSlide = (index) => {
    setSlideIndex(index)
  }

  return (
    <section id='certification' className='certification-section'>
      <SectionTitle name={t.certifications.sectionTitle}/>
      
      <div className='certification-content'>
        
        <div className='certification-card'>
          <LessThanIcon 
            size={32} 
            color='#606060' 
            onClick={prevSlide}
            style={{ cursor: "pointer" }}
          />

          <img
            src={slides[slideIndex].image}
            alt={slides[slideIndex].alt}
            loading='lazy'
            decoding='async'
          />

          <GreaterThanIcon 
            size={32} 
            color='#606060' 
            onClick={nextSlide}
            style={{ cursor: "pointer" }}
          />
        </div>

        <div className='carrosel-certificados'>
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === slideIndex ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default CertificationSection