import './ProjectCards.css'
import Card from '../Card'
import weddingPrint from "../../assets/images/wedding-print.png";
import alegriaPrint from "../../assets/images/alegria-print.png";
import eccosPrint from "../../assets/images/eccos-print.png";

const ProjectCards = (props) =>{
  return(
    <div className='carrousel'>
      <Card name='Alegria Geleias | Geleias Artesanais' tags='#ProjetoInstitucional #ReactJS' image={alegriaPrint} projectLink='https://alegria-geleias.vercel.app/' githubLink='https://github.com/LuaSpecht/Alegria-Geleias' />
      <Card name='Wedding Site | Site de Casamento' tags='#JavaScript #Invite #Save-the-date' image={weddingPrint} projectLink='https://casamento-lua-e-nics.netlify.app/' githubLink='https://github.com/LuaSpecht/wedding-site' />
      <Card name='ECCOS | Engenharia de Recursos Hídricos' tags='#ProjetoInstitucional #Landing-Page' image={eccosPrint} projectLink='https://www.eccosengenharia.com.br/' githubLink='https://github.com/LuaSpecht/ECCOS' />
    </div>
  )
}

export default ProjectCards