import './ProjectCards.css'
import Card from '../Card'
import weddingPrint from "../../assets/images/wedding-print.png";
import alegriaPrint from "../../assets/images/alegria-print.png";
import eccosPrint from "../../assets/images/eccos-print.png";

const ProjectCards = (props) =>{
  return(
    <div className='carrousel'>
      <Card
        name='Alegria Geleias | Geleias Artesanais'
        tags='#ProjetoInstitucional #ReactJS'
        image={alegriaPrint}
        projectLink='https://alegria-geleias.vercel.app/'
        githubLink='https://github.com/LuaSpecht/Alegria-Geleias'
        problem='Marca de geleias artesanais sem presença digital, vendia só por indicação boca a boca.'
        solution='Site institucional para apresentar os produtos e a marca, com contato direto para quem quer comprar.'
      />
      <Card
        name='Wedding Site | Site de Casamento'
        tags='#JavaScript #Convite #Save-the-date'
        image={weddingPrint}
        projectLink='https://casamento-lua-e-nics.netlify.app/'
        githubLink='https://github.com/LuaSpecht/wedding-site'
        problem='Casal queria um convite de casamento digital e personalizado, fugindo do papel tradicional.'
        solution='Landing page com contagem regressiva, informações do evento e confirmação de presença online.'
      />
      <Card
        name='ECCOS | Engenharia de Recursos Hídricos'
        tags='#ProjetoInstitucional #Landing-Page'
        image={eccosPrint}
        projectLink='https://www.eccosengenharia.com.br/'
        githubLink='https://github.com/LuaSpecht/ECCOS'
        problem='Empresa de engenharia sem site — perdia credibilidade ao apresentar propostas para novos clientes.'
        solution='Landing page institucional profissional para apresentar serviços e portfólio técnico da empresa.'
      />
    </div>
  )
}

export default ProjectCards