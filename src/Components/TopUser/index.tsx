import React from 'react'
import { Container, NameTxt, Progress, UserPic } from './styles'
import { iTopUser } from './types'

export const TopUser = ({name, img, percentual}: iTopUser) => {
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
