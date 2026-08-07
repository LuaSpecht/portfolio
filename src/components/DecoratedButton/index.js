import './DecoratedButton.css'

const DecoratedButtom = (props) => {
  return(
    <a
      href={props.link}
      download={props.download ? true : undefined}
      target={props.target}
      rel={props.target === '_blank' ? 'noopener noreferrer' : undefined}
      onClick={props.onClick}
      className={`decorated-button ${props.className || ''}`}
    >
      {props.icon}
      {props.name}
    </a>
  )

}

export default DecoratedButtom