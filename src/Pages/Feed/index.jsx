import { Header } from "../../Components/Header";
import { Container, Column, Title, TitleHighlight } from "./styles"
import { Card } from "../../Components/Card";
import { TopUser } from "../../Components/TopUser";

const Feed = () => {
    return ( <>
      <Header auth={true}/>
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1}>
          <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
          <TopUser percentual={80} name="Cauã Vieira" img="https://avatars.githubusercontent.com/u/178964215?v=4" />
          <TopUser percentual={75} name="Cauã Vieira" img="https://avatars.githubusercontent.com/u/178964215?v=4" />
          <TopUser percentual={65} name="Cauã Vieira" img="https://avatars.githubusercontent.com/u/178964215?v=4" />
          <TopUser percentual={50} name="Cauã Vieira" img="https://avatars.githubusercontent.com/u/178964215?v=4" />
          <TopUser percentual={45} name="Cauã Vieira" img="https://avatars.githubusercontent.com/u/178964215?v=4" />
        </Column>
      </Container>
      
    </>);
  }
  
  export { Feed };
  