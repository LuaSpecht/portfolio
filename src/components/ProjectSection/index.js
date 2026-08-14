import './ProjectSection.css'
import SectionTitle from '../SectionTitle'
import ProjectCards from '../ProjectCards'
import { useLanguage } from "../../i18n/LanguageContext";

const ProjectSection = () =>{
  const { t } = useLanguage();

  return(
    <section id='projects' className='projects'>
      <SectionTitle className='section-title' name={t.projects.sectionTitle}/>
      <ProjectCards/>
    </section>
  )
}

export default ProjectSection