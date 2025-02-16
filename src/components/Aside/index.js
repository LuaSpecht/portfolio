import './Aside.css'

const Aside = () => {
  return(
    <aside className='contacts-aside'>
      <a className='contact-icons' target='_blank' href='https://www.linkedin.com/in/luanaspechtbragante/' rel="noreferrer" > <img src='../images/linkedin.png' alt='Ícone do Linkedin'/> </a>
      <a className='contact-icons' target='_blank' href='https://github.com/LuaSpecht' rel="noreferrer" > <img src='../images/github.png' alt='Ícone do Github'/> </a>
      <a className='contact-icons' target='_blank' href='mailto:spechtdeveloper@gmail.com' rel="noreferrer" > <img src='../images/email.png' alt='Ícone de Email'/> </a>
    </aside>
  )
}

export default Aside