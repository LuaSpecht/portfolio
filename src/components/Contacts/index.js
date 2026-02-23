import './Contacts.css'
import linkedinIcon from "../../assets/images/linkedin.png";
import gitHubIcon from "../../assets/images/github.png";
import mailIcon from "../../assets/images/email.png";

const Contacts = () => {
  return(
    <div className='contacts'>
      <a className='contact-icons' target='_blank' href='https://www.linkedin.com/in/luanaspechtbragante/' rel="noreferrer" > <img src={linkedinIcon} alt='Ícone do Linkedin'/> </a>
      <a className='contact-icons' target='_blank' href='https://github.com/LuaSpecht' rel="noreferrer" > <img src={gitHubIcon} alt='Ícone do Github'/> </a>
      <a className='contact-icons' target='_blank' href='mailto:spechtdeveloper@gmail.com' rel="noreferrer" > <img src={mailIcon} alt='Ícone de Email'/> </a>
    </div>
  )
}

export default Contacts