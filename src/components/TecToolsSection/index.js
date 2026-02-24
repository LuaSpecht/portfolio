import './TecToolsSection.css'
import SectionTitle from '../SectionTitle'
import { AtomIcon, FileJsIcon, FileCssIcon, FileCSharpIcon, GitBranchIcon} from "@phosphor-icons/react";
import TecCards from '../TecCard';
import Elipse from '../Elipse';

const TecToolsSection = (props) =>{
  return(
    <section>
        <Elipse/>
        <SectionTitle name='Tecnologias'/>
        <div className='tectools-content'>
            <div id='tec-frontend-area' className='tec-area' >
                <TecCards
                    icon={<AtomIcon size={32} color="#4FBAD2"/>}
                    name='React'
                    description='Biblioteca JavaScript para construção de interfaces componentizadas e escaláveis. Facilita a criação de aplicações dinâmicas com melhor organização e reaproveitamento de código.'
                />
                <TecCards
                    icon={<FileJsIcon size={32} color="#FAB709"/>}
                    name='JavaScript'
                    description='Linguagem que adiciona interatividade e lógica às aplicações web, permitindo manipulação de elementos, consumo de APIs e dinamismo na interface.'
                />
                <TecCards
                    icon={<FileCssIcon size={32} color="#215292"/>}
                    name='HTML5 & CSS3'
                    description='HTML e CSS são a base da construção de interfaces web, estruturando o conteúdo e definindo layouts responsivos, acessíveis e visualmente consistentes.'
                />
            </div>
            <div id='tec-backend-area' className='tec-area'>
                <TecCards
                    icon={<FileCSharpIcon size={32} color="#8615bb"/>}
                    name='C# e .Net Core'
                    description='Linguagem orientada a objetos amplamente utilizada no desenvolvimento de aplicações robustas e seguras.'
                />
                <TecCards
                    icon={<FileJsIcon size={32} color="#499c6c"/>}
                    name='Node.js'
                    description='Ambiente de execução JavaScript no servidor, utilizado para criar APIs e aplicações escaláveis com alta performance.'
                />
                <TecCards
                    icon={<GitBranchIcon size={32} color="#fc924c"/>}
                    name='Git'
                    description='Sistema de controle de versão que permite rastrear alterações no código e manter organização no desenvolvimento.'
                />
            </div>
        </div>  
    </section>
  )
}

export default TecToolsSection