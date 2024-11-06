import styled, { css } from "styled-components";

export const BtnContainer = styled.button`
    background: #565656;
    border-radius: 24px;
    position: relative;

    color: #FFF;
    padding: 2px 12px;
    min-width: 120px;
    width: 100%;

    ${({variant}) => variant !== "primary" && css `
        min-width: 168px;
        heigth: 34px;

        background: #E4105D;

        &::after{
            content: '',
            position: absolute;
            border: 1px solid #e4105D;
            top: -5px;
            left: -6px;
            width: calc(100% + 10px);
            height: calc(100% + 10px);
            border-radius: 24px
        }
    ` }
`