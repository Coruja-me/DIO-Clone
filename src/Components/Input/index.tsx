import React from "react";
import {IconContainer, InputContainer, InputTxt, ErrorTxt} from './styles'
import { Controller } from "react-hook-form";
import { iInput } from "./types";

export const Input = ({leftIcon, name, control, errMsg, ...rest}:iInput) => {
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