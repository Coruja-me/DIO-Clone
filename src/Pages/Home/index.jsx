import { Header } from "../../Components/Header";
import {Container, Title, TitleHighlight, TxtContent, Banner} from "./styles"
import banner from '../../Assets/uau.png'
import { Button } from "../../Components/Button";

const Home = () => {
    return ( <>
      <Header />
      <Container>
        <section>
            <Title>
                <TitleHighlight>
                    Implemente <br />
                </TitleHighlight>
                o seu futuro global agora!
            </Title>
            <TxtContent>
                Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts.
            </TxtContent>
            <Button title="Começar agora" variant="secondary" onClick={() => null}/>
        </section>
        <section>
            <Banner src={banner} alt="Banner de tela" />
        </section>
      </Container>
    </>);
  }
  
  export {Home};
  