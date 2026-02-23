import './TecCards.css'

const TecCards = (props) =>{
  return(    
  
    <div className='tec-card'>
        <div className='tec-card-title'>{props.icon}{props.name}</div>
        <div className='tec-card-description'>
            <p>{props.description}</p>
        </div>
    </div>
  )
}

export default TecCards