import './HeaderButtom.css'

const HeaderButtom = (props) => {
  return(
    <a href={props.link} className='header-buttom'>{props.name}</a>
  )
  
}

export default HeaderButtom