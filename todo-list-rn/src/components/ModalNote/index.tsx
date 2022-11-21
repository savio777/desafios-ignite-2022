import {
  Modal,
  ModalProps,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

import {
  ButtonExlude,
  Container,
  Content,
  Text,
  WrapperButtons,
} from "./styles";
import { INote } from "../../stores/note";
import colors from "../../utils/colors";
import { Circle } from "../Note/styles";

type Props = {
  note?: INote;
  onChangeStatus: () => void;
  onExclude: () => void;
} & ModalProps;

const ModalNote: React.FC<Props> = ({
  note,
  onExclude,
  onChangeStatus,
  onRequestClose,
  ...props
}) => (
  <Modal onRequestClose={onRequestClose} {...props}>
    <TouchableWithoutFeedback onPress={onRequestClose}>
      <Container />
    </TouchableWithoutFeedback>

    <Content>
      <WrapperButtons>
        <TouchableOpacity onPress={onChangeStatus}>
          {note?.done ? (
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
        </TouchableOpacity>

        <ButtonExlude onPress={onExclude}>
          <Icon name="trash-can-outline" size={18} color={colors.gray[300]} />
        </ButtonExlude>
      </WrapperButtons>

      <ScrollView>
        <Text>{note?.text}</Text>
      </ScrollView>
    </Content>
  </Modal>
);

export default ModalNote;
