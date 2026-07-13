import './ProjectCards.css'
import Card from '../Card'
import weddingPrint from "../../assets/images/wedding-print.png";
import reviewPrint from "../../assets/images/review-print.png";
import eccosPrint from "../../assets/images/eccos-print.png";

const ProjectCards = (props) =>{
  return(
    <div className='carrousel'>
      <Card name='Wedding Site | Site de Casamento' tags='#JavaScript #Invite #Save-the-date' image={weddingPrint} projectLink='https://casamento-lua-e-nics.netlify.app/' githubLink='https://github.com/LuaSpecht/wedding-site' />
      <Card name='NicLua | Games Review' tags='#JavaScript #Games #Blog' image={reviewPrint} projectLink='https://luaspecht.github.io/NicLua/' githubLink='https://github.com/LuaSpecht/NicLua' />
      <Card name='ECCOS | Engenharia de Recursos Hídricos' tags='#ProjetosReais #Landing-Page' image={eccosPrint} projectLink='https://www.eccosengenharia.com.br/' githubLink='https://github.com/LuaSpecht/ECCOS' />
    </div>
  )
}

export default ProjectCards