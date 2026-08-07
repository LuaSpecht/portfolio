import './Card.css'
import gitHubIcon from "../../assets/images/github.png";

const Card = (props) =>{
  return(
    <div className='card' >
      <div className='card-image-part' >
        <img className='card-image'  src={props.image} alt={props.alt} />
        <a className='card-github-link' target='_blank' rel="noreferrer" href={props.githubLink} > <img className='card-github-link-icon'  src={gitHubIcon} alt='ícone do github com caminho para o projeto designado' /></a>

        <div className='card-overlay'>
          <div className='card-overlay-block'>
            <span className='card-overlay-label'>O desafio</span>
            <p className='card-overlay-text'>{props.problem}</p>
          </div>
          <div className='card-overlay-block'>
            <span className='card-overlay-label'>A solução</span>
            <p className='card-overlay-text'>{props.solution}</p>
          </div>
        </div>
      </div>
      <div className='card-information-part' >
        <p className='card-tags'>{props.tags} </p>
        <h3 className='card-title'>{props.name}</h3>
        <a href={props.projectLink} target="_blank" rel="noopener noreferrer"><button className='project-anchor'>Ver Projeto</button></a>

      </div>

    </div>
  )
}

export default Card