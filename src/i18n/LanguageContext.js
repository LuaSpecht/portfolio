import { createContext, useContext, useEffect, useState } from 'react'
import translations from './translations'

const LanguageContext = createContext(null)

const STORAGE_KEY = 'lua-portfolio-lang'

const getInitialLanguage = () => {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (saved === 'pt' || saved === 'en') return saved
  } catch (e) {
    // localStorage indisponível (ex: navegação privada) — segue com o padrão
  }
  return 'pt'
}

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(getInitialLanguage)

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, language)
    } catch (e) {
      // ignora se não puder persistir
    }
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en'
  }, [language])

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'pt' ? 'en' : 'pt'))
  }

  const t = translations[language]

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage precisa ser usado dentro de um LanguageProvider')
  }
  return context
}
