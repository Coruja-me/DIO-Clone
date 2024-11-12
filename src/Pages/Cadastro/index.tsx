import { Header } from "../../Components/Header";
import { Container, Title, Column, SubitleCadastro, TitleCadastro, Wrapper, LoginTxt, TxtTermos } from "./styles"
import { Button } from "../../Components/Button";
import { Input } from "../../Components/Input";
import { MdEmail, MdLock } from "react-icons/md"
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"
import { api } from "../../Services/api";
import { BiUser } from "react-icons/bi";
import { iFData } from "./types";

const schema = yup.object({
    name: yup.string().nullable().required('Nome requirido!'),
    email: yup.string().nullable().email('Email inválido!').required('Email requirido!'),
    senha: yup.string().nullable().min(3, 'Senha curta, deve ser no mínimo 3 caracteres').required('Senha requirida!'),
    senhaVerif: yup.string().nullable().oneOf([yup.ref('senha'), null], 'As senhas precisam ser iguais!').required('Confirmação de senha requirida!')
}).required()

const Cadastro = () => {
    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors } } = useForm<iFData>({
        resolver: yupResolver(schema),
        mode: "onChange"
    })

    const onSubmit = async (fData:iFData) => {
        try{
            if(fData.senhaVerif === fData.senha){
                await api.post(`users`, {
                    name: fData.name,
                    email: fData.email,
                    senha: fData.senha
                })
                alert("Cadastro realizado com sucesso!")
                navigate('/Login')
            }
            else{
                alert("As senhas não coincidem!")
            }
        }catch{
            alert("Ocorreu um erro, tente novamente")
        }
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
                <TitleCadastro>Faça seu cadastro</TitleCadastro>
                <SubitleCadastro>Faça seu Cadastro e make the change._</SubitleCadastro>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input name="name" errMsg={errors?.name?.message} control={control} placeholder="Nome Completo" leftIcon={<BiUser />}/>
                    <Input name="email" errMsg={errors?.email?.message} control={control} placeholder="Email" leftIcon={<MdEmail />}/>
                    <Input name="senha" errMsg={errors?.senha?.message} control={control} placeholder="Senha" type="password" leftIcon={<MdLock />}/>
                    <Input name="senhaVerif" errMsg={errors?.senhaVerif?.message} control={control} placeholder="Confirme a Senha" type="password" leftIcon={<MdLock />}/>
                    <Button title="Entrar" variant="secondary" type="submit" />
                </form>
                <Column>
                    <TxtTermos>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</TxtTermos>
                    <LoginTxt>
                        Já tenho conta. <a href="/Login">Fazer login</a>
                    </LoginTxt>
                </Column>
            </Wrapper>
        </Column>
      </Container>
    </>);
  }
  
  export {Cadastro};
  