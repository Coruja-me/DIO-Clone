import React from 'react'
import { Container, NameTxt, Progress, UserPic } from './styles'

export const TopUser = ({name, img, percentual}) => {
  return (
    <Container>
        <UserPic src={img} />
        <div>
            <NameTxt>{name}</NameTxt>
            <Progress percentual={percentual} />
        </div>
    </Container>
  )
}
