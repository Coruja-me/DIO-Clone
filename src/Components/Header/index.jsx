import React from 'react'
import logo from "../../Assets/logo.png"
import {
    HeaderContainer,
    Row,
    Column,
    Wrapper,
    SearchInput,
    Menu,
    MenuRight,
    UserPic,
    Input,
    Logo
} from "./styles"
import { Button } from '../Button'

const Header = () => {
  return (
    <Wrapper>
        <HeaderContainer>
            <Row>
                <Logo src={logo}/>
                <SearchInput>
                    <Input placeholder='Buscar...' />
                </SearchInput>
                <Menu>Live Code</Menu>
                <Menu>Global</Menu>
            </Row>
            <Row>
                <MenuRight href='#'>Home</MenuRight>
                <Button title="Entrar" />
                <Button title="Cadastrar" />
            </Row>
        </HeaderContainer>
    </Wrapper>
  )
}

export {Header}