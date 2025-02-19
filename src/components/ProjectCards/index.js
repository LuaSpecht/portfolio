import './ProjectCards.css'
import Card from '../Card'


const ProjectCards = (props) =>{
  return(
    <div className='carrousel'  >
      <Card name='NicLua | Review de Games' tags='#JavaScript #Games #Blog'/>
      <Card name='To-do-List' tags='#JavaScript #Daily #Organization'/>
      <Card name='Jogo da Cobrinha' tags='#JavaScript #Games #Nostalgia'/>
    </div>
  )
}

export default ProjectCards