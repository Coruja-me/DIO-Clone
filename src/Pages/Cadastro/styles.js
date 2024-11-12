import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 128px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Wrapper = styled.article`
    max-width: 300px;
`

export const Column = styled.section`
    flex: 1;
`
export const Row = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`

export const Title = styled.h2`
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    width: 320px;
    margin-bottom: 20px;
    line-height: 44px;

    color: #fff;
`
export const TitleCadastro = styled.h3`
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    margin-bottom: 20px;
    line-height: 44px;
`
export const SubitleCadastro = styled.h4`
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    margin-bottom: 35px;
    line-height: 22px;
`
export const TxtTermos = styled.p`
    font-family: Open Sans;
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
    margin: 12px 0;
`

export const LoginTxt = styled.span`
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    a{
        color: #23DF81;
        text-decoration: none;
    }
    a:hover{
        opacity: 0.8;
    }
`
