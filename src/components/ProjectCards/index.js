import './ProjectCards.css'
import Card from '../Card'
import hotelPrint from "../../assets/images/hotel-print.jpg";
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
        {...items.hotel}
        image={hotelPrint}
        projectLink='https://hotelriosdopantanal.com/'
        githubLink='https://github.com/LuaSpecht/HotelRiosPantanal'
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