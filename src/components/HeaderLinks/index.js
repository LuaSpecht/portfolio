import './HeaderLinks.css'

const HeaderLinks = (props) => {
  return(
    <a href={props.link} className='header-link' >{props.name}</a>
  )
}

export default HeaderLinks