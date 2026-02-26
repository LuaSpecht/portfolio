import './HeaderLinks.css'

const HeaderLinks = (props) => {
  return(
    <a href={props.link} className='header-link' onClick={props.onClick} >{props.name}</a>
  )
}

export default HeaderLinks