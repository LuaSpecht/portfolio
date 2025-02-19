import './ProjectSection.css'
import SectionTitle from '../SectionTitle'
import ProjectCards from '../ProjectCards'

const ProjectSection = () =>{
  return(
    <section className='projects'>
      <SectionTitle name='Projetos'/>
      <ProjectCards/>
      
    </section>
  )
}

export default ProjectSection