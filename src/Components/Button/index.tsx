import React from "react";
import { BtnContainer } from "./styles";
import { iButton } from "./types";

export const Button = ({title, variant="primary", onClick}: iButton) => {
    return(
        <BtnContainer variant={variant} onClick={onClick}>
            {title}
        </BtnContainer>
    )
}