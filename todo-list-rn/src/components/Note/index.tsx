import Icon from "@expo/vector-icons/MaterialCommunityIcons";

import { INote } from "../../stores/note";
import colors from "../../utils/colors";
import { Container, ButtonAction, Circle, Title } from "./styles";

type Props = {
  onDone: () => void;
  onExclude: () => void;
  onPressText: () => void;
} & INote;

const Note: React.FC<Props> = ({
  done,
  onDone,
  onExclude,
  onPressText,
  text,
}) => (
  <Container done={done}>
    <ButtonAction align="left" onPress={onDone}>
      {done ? (
        <Circle>
          <Icon name="check" color={colors.gray[100]} size={12.5} />
        </Circle>
      ) : (
        <Icon
          name="checkbox-blank-circle-outline"
          color={colors.blue.main}
          size={18}
        />
      )}
    </ButtonAction>

    <ButtonAction align="left" main onPress={onPressText}>
      <Title done={done} numberOfLines={2}>
        {text}
      </Title>
    </ButtonAction>

    <ButtonAction align="right" onPress={onExclude}>
      <Icon name="trash-can-outline" size={18} color={colors.gray[300]} />
    </ButtonAction>
  </Container>
);

export default Note;
