import Logo from "../../assets/Logo.png";
import Input from "../../components/Input";
import {
  Container,
  Content,
  WrapperLogo,
  LogoImage,
  WrapperRow,
  TitleCounter,
  WrapperCounter,
  Counter,
} from "./styles";

const Home = () => {
  return (
    <Container>
      <WrapperLogo>
        <LogoImage source={Logo} />
      </WrapperLogo>
      <Content>
        <Input onAdd={() => {}} placeholder="Adicione uma nova tarefa" />

        <WrapperRow>
          <WrapperCounter>
            <TitleCounter type="created">Criadas</TitleCounter>
            <Counter>0</Counter>
          </WrapperCounter>

          <WrapperCounter>
            <TitleCounter type="done">Concluídas</TitleCounter>
            <Counter>0</Counter>
          </WrapperCounter>
        </WrapperRow>
      </Content>
    </Container>
  );
};

export default Home;
