import './DecoratedButton.css'

const DecoratedButtom = (props) => {
  return(
    <a href={props.link} download className='decorated-button'>{props.name}</a>
  )
  
}

export default DecoratedButtom