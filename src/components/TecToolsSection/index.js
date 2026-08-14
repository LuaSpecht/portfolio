import './TecToolsSection.css'
import SectionTitle from '../SectionTitle'
import { AtomIcon, FileJsIcon, FileCssIcon, FileHtmlIcon, FileCSharpIcon, GitBranchIcon} from "@phosphor-icons/react";
import Elipse from '../Elipse';
import { useLanguage } from "../../i18n/LanguageContext";

const frontendTechs = [
  { icon: <AtomIcon size={24} weight='duotone' color='#4FBAD2' />, name: 'React' },
  { icon: <FileJsIcon size={24} weight='duotone' color='#FAB709' />, name: 'JavaScript' },
  { icon: <FileHtmlIcon size={24} weight='duotone' color='#E34F26' />, name: 'HTML5' },
  { icon: <FileCssIcon size={24} weight='duotone' color='#2965F1' />, name: 'CSS3' },
]

const backendTechs = [
  { icon: <FileCSharpIcon size={24} weight='duotone' color='#8615bb' />, name: 'C# & .NET' },
  { icon: <FileJsIcon size={24} weight='duotone' color='#499c6c' />, name: 'Node.js' },
  { icon: <GitBranchIcon size={24} weight='duotone' color='#fc924c' />, name: 'Git' },
]

const TecPillGroup = ({ label, items }) => (
  <div className='tec-group'>
    <span className='tec-group-label'>{label}</span>
    <div className='tec-pills'>
      {items.map((tech, index) => (
        <div className='tec-pill' key={index}>
          <span className='tec-pill-icon'>{tech.icon}</span>
          <span className='tec-pill-name'>{tech.name}</span>
        </div>
      ))}
    </div>
  </div>
)

const TecToolsSection = () =>{
  const { t } = useLanguage();

  return(
    <section id='tec-tools' className='tec-tools-section'>
        <Elipse/>
        <SectionTitle name={t.tech.sectionTitle}/>
        <div className='tectools-content'>
            <TecPillGroup label={t.tech.frontend} items={frontendTechs} />
            <TecPillGroup label={t.tech.backend} items={backendTechs} />
        </div>
    </section>
  )
}

export default TecToolsSection