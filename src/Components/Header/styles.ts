import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    max-width: 80%;
    height: 50px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
`
export const Row = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
`
export const Column = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const Wrapper = styled.section`
    background-color: #151515;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const SearchInput = styled.div`
    width: 175px;
    height: 30px;
    background: #2D2D37;
    border-radius: 8px;
    padding: 2px 5px;
    margin: 0 12px;

    display: flex;
    align-items: center;
    justify-content: center;
`
export const Menu = styled.a`
    font-family: 'Open Sans';
    font-style: normal;
    font-size: 18px;
    line-height: 25px;
    color: white;
    margin-right: 12px;
    text-decoration: none;
`
export const MenuRight = styled.a`
    font-family: 'Open Sans';
    font-style: normal;
    font-size: 18px;
    line-height: 25px;
    color: white;
    margin-right: 12px;
    text-decoration: none;

    &:hover{
        opacity: 0.4;
    }
`
export const UserPic = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 22px;
    border: 2px solid #FFF;
`
export const Input = styled.input`
    background: transparent;
    flex: 1;
    height: 100%;
    border: 0;
    color: #fff;
`
export const Logo = styled.img`
    width: 8%;
    height: 8%;
    margin: 0 5px;
`