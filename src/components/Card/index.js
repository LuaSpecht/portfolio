import './Card.css'

const Card = (props) =>{
  return(
    <div className='card' >
      <div className='card-image-part' >
          <img src='' />
        <a  ></a>
      </div>
      <div className='card-information-part' >
        <p className='card-tags'>{props.tags} </p>
        <h3 className='card-title'>{props.name}</h3>
        <a href='#header'><button className='project-anchor'>Ver Projeto</button></a>
        
      </div>
      
    </div>
  )
}

export default Card