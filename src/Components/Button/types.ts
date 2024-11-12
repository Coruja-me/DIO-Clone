export interface iButton extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    title: string
    variant?: string
    onClick?: () => void
}

export interface iButtonStyled{
    variant: string
}