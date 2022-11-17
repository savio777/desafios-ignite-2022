import Icon from "@expo/vector-icons/MaterialCommunityIcons";

import { INote } from "../../screens/Home";
import colors from "../../utils/colors";
import { Container, ButtonAction, Circle, Title } from "./styles";

type Props = {
  onDone: () => void;
  onExclude: () => void;
} & INote;

const Note: React.FC<Props> = ({ done, onDone, onExclude, text }) => (
  <Container>
    <ButtonAction side="left" onPress={onDone}>
      {done ? (
        <Circle>
          <Icon name="check" color={colors.gray[100]} size={8} />
        </Circle>
      ) : (
        <Icon
          name="checkbox-blank-circle-outline"
          color={colors.blue.main}
          size={18}
        />
      )}
    </ButtonAction>

    <Title numberOfLines={2}>{text}</Title>

    <ButtonAction side="right" onPress={onExclude}>
      <Icon name="trash-can-outline" size={18} color={colors.gray[300]} />
    </ButtonAction>
  </Container>
);

export default Note;
