import React from "react";

import { BtnContainer } from "./styles";

export const Button = ({title, variant="primary", onClick}) => {
    return(
        <BtnContainer variant={variant} onClick={onClick}>
            {title}
        </BtnContainer>
    )
}