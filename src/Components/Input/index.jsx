import React from "react";
import {IconContainer, InputContainer, InputTxt} from './styles'

export const Input = ({leftIcon, name, ...rest}) => {
    return(
        <InputContainer>
            {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
            <InputTxt {...rest}/>
        </InputContainer>
    )
}