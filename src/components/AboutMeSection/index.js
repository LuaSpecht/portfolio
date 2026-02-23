import './AboutMeSection.css'
import SectionTitle from '../SectionTitle'
import luaPic from "../../assets/images/about-me-image.png";
import Elipse from '../Elipse'
import Contacts from '../Contacts'  

const AboutMeSection = (props) => {
  return(
    <section className='about-me-section' id='about-me'>
        <Elipse className='elipse'/>
        <SectionTitle className='section-title' name='Sobre mim'/>
        <div className='about-me-content'>
            <Contacts/>
            <img src={luaPic} alt='Uma foto de Luana Specht'/>
            <div className='about-me-text'>
                <p id='hello' >Olá, eu sou a</p>
                <h2 className='my-name'>Luana Specht Bragante</h2>
                <p>
                  Sou desenvolvedora Full Stack apaixonada por criar experiências digitais funcionais, envolventes e acessíveis. 
                  Encontrei no desenvolvimento a união entre lógica, criatividade e resolução de problemas.
                </p>
                
                <p>
                  Estou no último período de Análise e Desenvolvimento de Sistemas e atuo no desenvolvimento completo de aplicações web — do front-end ao back-end. 
                  Trabalho com HTML, CSS, JavaScript e React na construção de interfaces modernas e responsivas, além de desenvolver APIs e estruturas focadas em performance e escalabilidade.
                </p>
                
                <p>
                  Acredito que um bom projeto vai além da estética: ele precisa ser intuitivo, eficiente e gerar resultados reais.
                </p>
                
                <p>
                  Ajudo marcas e profissionais a transformarem ideias em uma presença digital sólida, criando soluções personalizadas e alinhadas aos seus objetivos.
                </p>
            </div>
            

        </div>
    </section>
  )
}

export default AboutMeSection