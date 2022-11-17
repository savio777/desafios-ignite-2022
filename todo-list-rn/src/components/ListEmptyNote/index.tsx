import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import colors from "../../utils/colors";

import { Container, Text, Title } from "./styles";

const ListEmptyNote = () => (
  <Container>
    <Icon name="clipboard-text" size={56} color={colors.gray[300]} />

    <Title>Você ainda não tem tarefas cadastradas</Title>
    <Text>Crie tarefas e organize seus itens a fazer</Text>
  </Container>
);

export default ListEmptyNote;
