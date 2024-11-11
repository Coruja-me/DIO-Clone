import { Header } from "../../Components/Header";
import { Container, Title, Column, CriarTxt, EsqueciTxt, Row, SubitleLogin, TitleLogin, Wrapper } from "./styles"
import { Button } from "../../Components/Button";
import { Input } from "../../Components/Input";
import { MdEmail, MdLock } from "react-icons/md"

const Login = () => {
    return ( <>
      <Header />
      <Container>
        <Column>
            <Title>
            Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts.
            </Title>
        </Column>
        <Column>
            <Wrapper>
                <TitleLogin>Faça seu cadastro</TitleLogin>
                <SubitleLogin>Faça seu login e make the change._</SubitleLogin>
                <form>
                    <Input placeholder="Email" leftIcon={<MdEmail />}/>
                    <Input placeholder="Senha" type="password" leftIcon={<MdLock />}/>
                    <Button title="Entrar" variant="secondary" />
                </form>
                <Row>
                    <EsqueciTxt>Esqueci minha senha</EsqueciTxt>
                    <CriarTxt>Criar conta</CriarTxt>
                </Row>
            </Wrapper>
        </Column>
      </Container>
    </>);
  }
  
  export {Login};
  