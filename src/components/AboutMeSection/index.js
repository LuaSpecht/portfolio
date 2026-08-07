import './AboutMeSection.css'
import SectionTitle from '../SectionTitle'
import luaPic from "../../assets/images/about-me-image.jpg";
import Elipse from '../Elipse'
import Contacts from '../Contacts'  

const AboutMeSection = (props) => {
  return(
    <section id='about-me' className='about-me-section'>
        <SectionTitle className='section-title' name='Sobre mim'/>
        <div className='about-me-content'>
            <Contacts/>
            <img src={luaPic} alt='Uma foto de Luana Specht' loading='lazy' decoding='async'/>
            <div className='about-me-text'>
                <p id='hello' >Olá, eu sou a</p>
                <h2 className='my-name'>Luana Specht Bragante</h2>
                <p>
                  Sou desenvolvedora Full Stack apaixonada por criar experiências digitais funcionais, envolventes e acessíveis. 
                  Encontrei no desenvolvimento a união entre lógica, criatividade e resolução de problemas.
                </p>
                
                <p>
                  Sou formada em Análise e Desenvolvimento de Sistemas pela Anhanguera e atuo no desenvolvimento completo de aplicações web — do front-end ao back-end. 
                  Trabalho com HTML, CSS, JavaScript e React na construção de interfaces modernas e responsivas, além de desenvolver APIs e estruturas focadas em performance e escalabilidade.
                </p>
                
                <p>
                  Acredito que um bom projeto vai além da estética: ele precisa ser intuitivo, eficiente e gerar resultados reais.
                </p>
                
                <p>
                  Ajudo marcas e profissionais a transformarem ideias em uma presença digital sólida, criando soluções personalizadas e alinhadas aos seus objetivos.
                </p>

                <p>
                  Cada projeto começa com uma pergunta simples: o que você quer alcançar? A partir daí, entrego o meu melhor pra tirar isso do papel — porque, mais do que código, o que importa de verdade é realizar o seu sonho.
                </p>
            </div>
        </div>
            <Elipse className='purple-elipse' />
    </section>
  )
}

export default AboutMeSection