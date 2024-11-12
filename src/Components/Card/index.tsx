import React from 'react'
import { CardContainer, Content, HasInfo, ImgBg, PostInfo, UserInfo, UserPic } from './styles'
import { FiThumbsUp } from 'react-icons/fi'

export const Card = () => {
  return (
    <CardContainer>
        <ImgBg />
        <Content>
            <UserInfo>
                <UserPic src='https://avatars.githubusercontent.com/u/178964215?v=4'/>
                <div>
                    <h4>Cauã Vieira</h4>
                    <p>Lorem</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>RepoGities</h4>
                <p>Projeto de repositórios do GitHub</p>
            </PostInfo>
            <HasInfo>
                <h4>#React</h4>
                <p>
                    <FiThumbsUp /> 10
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
}
