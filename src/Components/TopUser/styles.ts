import styled from 'styled-components';
import { iUserInfoStyled } from './types';

export const Container = styled.aside`
    display: flex;
    flex-direction: row;
    margin-bottom: 24px;
`
export const UserPic = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 32px;
    border: 2px solid white;
    margin-right: 12px;
`
export const NameTxt = styled.h3`
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: white;
`
export const Progress = styled.div<iUserInfoStyled>`
    width: 180px;
    height: 6px;
    background-color: white;
    border-radius: 3px;
    position: relative;

    &::after{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: ${({percentual}) => percentual}%;
        height: 6px;
        border-radius: 3px;
        background-color: #23dd7a;
    }
`