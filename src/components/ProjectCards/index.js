import './ProjectCards.css'
import Card from '../Card'
import weddingPrint from "../../assets/images/wedding-print.png";
import alegriaPrint from "../../assets/images/alegria-print.png";
import eccosPrint from "../../assets/images/eccos-print.png";
import { useLanguage } from "../../i18n/LanguageContext";

const ProjectCards = () =>{
  const { t } = useLanguage();
  const { items, viewProject, challengeLabel, solutionLabel } = t.projects;

  return(
    <div className='carrousel'>
      <Card
        {...items.alegria}
        image={alegriaPrint}
        projectLink='https://alegria-geleias.vercel.app/'
        githubLink='https://github.com/LuaSpecht/Alegria-Geleias'
        viewProjectLabel={viewProject}
        challengeLabel={challengeLabel}
        solutionLabel={solutionLabel}
      />
      <Card
        {...items.wedding}
        image={weddingPrint}
        projectLink='https://casamento-lua-e-nics.netlify.app/'
        githubLink='https://github.com/LuaSpecht/wedding-site'
        viewProjectLabel={viewProject}
        challengeLabel={challengeLabel}
        solutionLabel={solutionLabel}
      />
      <Card
        {...items.eccos}
        image={eccosPrint}
        projectLink='https://www.eccosengenharia.com.br/'
        githubLink='https://github.com/LuaSpecht/ECCOS'
        viewProjectLabel={viewProject}
        challengeLabel={challengeLabel}
        solutionLabel={solutionLabel}
      />
    </div>
  )
}

export default ProjectCards