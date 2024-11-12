import React from 'react'
import logo from "../../Assets/logo.png";
import { useNavigate } from "react-router-dom";
import {
    HeaderContainer,
    Row,
    Wrapper,
    SearchInput,
    Menu,
    MenuRight,
    UserPic,
    Input,
    Logo
} from "./styles"
import { Button } from '../Button'
import { iHeader } from './types';

const Header = ({auth} : iHeader) => {
    const navigate = useNavigate();

    const handleCadastro = () => {
        navigate('/Cadastro')
    }
    const handleLogin = () => {
        navigate('/Login')
    }
    return (
        <Wrapper>
            <HeaderContainer>
                <Row>
                    <Logo src={logo}/>
                    {auth ? (<>
                        <SearchInput>
                            <Input placeholder='Buscar...' />
                        </SearchInput>
                        <Menu>Live Code</Menu>
                        <Menu>Global</Menu>
                    </>) : null}
                </Row>
                <Row>
                {auth ? (
                    <UserPic src='https://avatars.githubusercontent.com/u/178964215?v=4' />
                ) : (<>
                    <MenuRight href='/'>Home</MenuRight>
                    <Button title="Entrar" onClick={handleLogin}/>
                    <Button title="Cadastrar" onClick={handleCadastro}/>
                </>)}
                </Row>
            </HeaderContainer>
        </Wrapper>
    )
}

export {Header}