import { useState } from 'react'
import './CertificationSection.css'
import SectionTitle from '../SectionTitle'
import CertificadoUdemy from "../../assets/images/certificado-udemy.jpg";
import CertificadoCursoEmVideo from "../../assets/images/certificado-curso-em-video.jpg";
import { LessThanIcon, GreaterThanIcon } from "@phosphor-icons/react";

const CertificationSection = () => {

  const slides = [
    {
      image: CertificadoUdemy,
      alt: "Certificação de Desenvolvimento Web da Udemy"
    },
    {
      image: CertificadoCursoEmVideo,
      alt: "Certificação de Desenvolvimento Web do Curso em Vídeo"
    }
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
    <section className='certification-section'>
      <SectionTitle name='Certificações'/>
      
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