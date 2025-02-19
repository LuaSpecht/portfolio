import './SectionTitle.css'

const SectionTitle = (props) => {
  let sectionName = props.name.toUpperCase()
  return(
    <h1 className='section-title' >{sectionName}</h1>
  )
}

export default SectionTitle