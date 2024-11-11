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

const Header = ({auth}) => {
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
                <MenuRight href='#'>Home</MenuRight>
                <Button title="Entrar" />
                <Button title="Cadastrar" />
            </>)}
            </Row>
        </HeaderContainer>
    </Wrapper>
  )
}

export {Header}