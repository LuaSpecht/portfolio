import './ProjectCards.css'
import Card from '../Card'
import weddingPrint from "../../assets/images/wedding-print.png";
import reviewPrint from "../../assets/images/review-print.png";
import doutoriaPrint from "../../assets/images/doutoria-print.png";

const ProjectCards = (props) =>{
  return(
    <div className='carrousel'>
      <Card name='Wedding Site | Site de Casamento' tags='#JavaScript #Invite #Save-the-date' image={weddingPrint} projectLink='https://casamento-lua-e-nics.netlify.app/' githubLink='https://github.com/LuaSpecht/wedding-site' />
      <Card name='NicLua | Games Review' tags='#JavaScript #Games #Blog' image={reviewPrint} projectLink='https://luaspecht.github.io/NicLua/' githubLink='https://github.com/LuaSpecht/NicLua' />
      <Card name='Doutoria | Projeto Prático da Faculdade' tags='#Faculdade #API #Resposividade' image={doutoriaPrint} projectLink='https://luaspecht.github.io/portfolio_pratico/' githubLink='https://github.com/LuaSpecht/portfolio_pratico' />
    </div>
  )
}

export default ProjectCards