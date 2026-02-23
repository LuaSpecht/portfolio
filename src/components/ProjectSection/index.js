import './ProjectSection.css'
import SectionTitle from '../SectionTitle'
import ProjectCards from '../ProjectCards'

const ProjectSection = () =>{
  return(
    <section className='projects'>
      <SectionTitle className='section-title' name='Projetos'/>
      <ProjectCards/>
    </section>
  )
}

export default ProjectSection