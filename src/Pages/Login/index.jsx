import { Header } from "../../Components/Header";
import { Container, Title, Column, CriarTxt, EsqueciTxt, Row, SubitleLogin, TitleLogin, Wrapper } from "./styles"
import { Button } from "../../Components/Button";
import { Input } from "../../Components/Input";
import { MdEmail, MdLock } from "react-icons/md"
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"

const schema = yup.object({
    email: yup.string().email('Email inválido!').required('Email requirido!'),
    senha: yup.string().min(3, 'Senha curta, deve ser no mínimo 3 caracteres').required('Senha requirida!')
}).required()

const Login = () => {
    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors, isValid } } = useForm({
        resolver: yupResolver(schema),
        mode: "onChange"
    })
    console.log(isValid, errors)
    const onSubmit = data => console.log(data)

    const handleClickSignIn = () => {
        navigate('/Feed')
    }

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
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input name="email" errMsg={errors?.email?.message} control={control} placeholder="Email" leftIcon={<MdEmail />}/>
                    <Input name="senha" errMsg={errors?.senha?.message} control={control} placeholder="Senha" type="password" leftIcon={<MdLock />}/>
                    <Button title="Entrar" variant="secondary" onClick={handleClickSignIn} type="submit" />
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
  