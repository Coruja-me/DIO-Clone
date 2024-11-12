import styled from "styled-components";

export const CardContainer = styled.article`
    width: 100%;
    background-color: #3b4651;
    position: relative;
    margin-bottom: 24px;
`
export const ImgBg = styled.img`
    width: 100%;
    height: 180px;
`
export const Content = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 12px;
`
export const UserInfo = styled.header`
    display: flex;
    flex-direction: row;
    margin-bottom: 12px;

    div{
        margin-left: 12px;
    }
    h4{
        font-family: "Open Sans";
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 25px;
        color: white;
    }
    p{
        font-family: "Open Sans";
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        color: white;
    }
`
export const UserPic = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 32px;
    border: 2px solid white;
`
export const PostInfo = styled.main`
    margin-bottom: 12px;

    h4{
        font-family: "Open Sans";
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 25px;
        color: white;
    }
    p{
        font-family: "Open Sans";
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        color: white;
    }
`
export const HasInfo = styled.footer`
    margin-bottom: 12px;

    h4{
        font-family: "Open Sans";
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 25px;
        color: #FFF8;
    }
    p{
        font-family: "Open Sans";
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
    }
`