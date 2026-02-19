import './ProjectCards.css'
import Card from '../Card'


const ProjectCards = (props) =>{
  return(
    <div className='carrousel'  >
      <Card name='NicLua | Review de Games' tags='#JavaScript #Games #Blog'/>
      <Card name='Wedding Site' tags='#JavaScript #Invite #Save-the-date'/>
      <Card name='Meu portfólio' tags='#JavaScript #React #Portfolio'/>
    </div>
  )
}

export default ProjectCards