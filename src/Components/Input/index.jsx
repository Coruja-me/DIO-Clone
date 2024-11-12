import React from "react";
import {IconContainer, InputContainer, InputTxt, ErrorTxt} from './styles'
import { Controller } from "react-hook-form";

export const Input = ({leftIcon, name, control, errMsg, ...rest}) => {
    return(<>
        <InputContainer>
            {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
            <Controller 
                name={name}
                control={control}
                rules={{ required: true }}
                render={({ field }) => <InputTxt {...field} {...rest}/>}
            />
        </InputContainer>
        {errMsg ? <ErrorTxt>{errMsg}</ErrorTxt> : null}
    </>)
}