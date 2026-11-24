import { useEffect, useRef, useState } from 'react'
import './ProjectCards.css'
import Card from '../Card'
import rosianePrint from "../../assets/images/rosiane-print.png";
import hotelPrint from "../../assets/images/hotel-print.jpg";
import alegriaPrint from "../../assets/images/alegria-print.png";
import eccosPrint from "../../assets/images/eccos-print.png";
import { LessThanIcon, GreaterThanIcon } from "@phosphor-icons/react";
import { useLanguage } from "../../i18n/LanguageContext";

// Quantos cards aparecem por vez, de acordo com a largura da tela.
// O padrão no desktop é 3; em telas menores cai pra 2 e depois 1.
const getVisibleCount = () => {
  if (typeof window === 'undefined') return 3
  if (window.matchMedia('(max-width: 640px)').matches) return 1
  if (window.matchMedia('(max-width: 960px)').matches) return 2
  return 3
}

const SWIPE_THRESHOLD = 50

const ProjectCards = () =>{
  const { t } = useLanguage();
  const { items, viewProject, challengeLabel, solutionLabel, prevLabel, nextLabel, goToLabel } = t.projects;

  // Para adicionar um projeto novo: inclua aqui (e o texto em i18n/translations.js).
  const projects = [
    {
      key: 'rosiane',
      image: rosianePrint,
      projectLink: 'https://rosianepaixao.com.br/',
      githubLink: 'https://github.com/LuaSpecht/rosianepaixao',
    },
    {
      key: 'alegria',
      image: alegriaPrint,
      projectLink: 'https://alegria-geleias.vercel.app/',
      githubLink: 'https://github.com/LuaSpecht/Alegria-Geleias',
    },
    {
      key: 'hotel',
      image: hotelPrint,
      projectLink: 'https://hotelriosdopantanal.com/',
      githubLink: 'https://github.com/LuaSpecht/HotelRiosPantanal',
    },
    {
      key: 'eccos',
      image: eccosPrint,
      projectLink: 'https://www.eccosengenharia.com.br/',
      githubLink: 'https://github.com/LuaSpecht/ECCOS',
    },
  ]

  const [visibleCount, setVisibleCount] = useState(getVisibleCount)
  const [startIndex, setStartIndex] = useState(0)
  const touchStartX = useRef(null)

  useEffect(() => {
    const onResize = () => setVisibleCount(getVisibleCount())
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Última posição possível sem deixar espaço vazio no fim
  const maxIndex = Math.max(projects.length - visibleCount, 0)
  const hasCarousel = maxIndex > 0

  // Se a tela aumentar e o índice atual passar do limite, ajusta
  useEffect(() => {
    setStartIndex((prev) => Math.min(prev, maxIndex))
  }, [maxIndex])

  const next = () => setStartIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  const prev = () => setStartIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return
    const delta = e.changedTouches[0].clientX - touchStartX.current
    touchStartX.current = null
    if (Math.abs(delta) < SWIPE_THRESHOLD) return
    if (delta < 0) next()
    else prev()
  }

  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') next()
    if (e.key === 'ArrowLeft') prev()
  }

  return(
    <div className='carrousel' style={{ '--visible': visibleCount }}>
      <div className='carrousel-row'>
        {hasCarousel && (
          <button type='button' className='carrousel-arrow' onClick={prev} aria-label={prevLabel}>
            <LessThanIcon size={32} color='#606060' />
          </button>
        )}

        <div
          className='carrousel-viewport'
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          onKeyDown={onKeyDown}
        >
          <div
            className='carrousel-track'
            style={{ transform: `translateX(calc(-${startIndex} * (var(--card-width) + var(--card-gap))))` }}
          >
            {projects.map((project, index) => {
              const isVisible = index >= startIndex && index < startIndex + visibleCount
              return (
                <div
                  key={project.key}
                  className={`carrousel-item ${isVisible ? '' : 'is-out'}`}
                  aria-hidden={!isVisible}
                  inert={isVisible ? undefined : ''}
                >
                  <Card
                    {...items[project.key]}
                    image={project.image}
                    projectLink={project.projectLink}
                    githubLink={project.githubLink}
                    viewProjectLabel={viewProject}
                    challengeLabel={challengeLabel}
                    solutionLabel={solutionLabel}
                  />
                </div>
              )
            })}
          </div>
        </div>

        {hasCarousel && (
          <button type='button' className='carrousel-arrow' onClick={next} aria-label={nextLabel}>
            <GreaterThanIcon size={32} color='#606060' />
          </button>
        )}
      </div>

      {hasCarousel && (
        <div className='carrousel-dots'>
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              type='button'
              className={`carrousel-dot ${index === startIndex ? 'active' : ''}`}
              onClick={() => setStartIndex(index)}
              aria-label={`${goToLabel} ${index + 1}`}
              aria-current={index === startIndex}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default ProjectCards
