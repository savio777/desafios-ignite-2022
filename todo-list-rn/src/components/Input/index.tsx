import { useState } from "react";
import { TextInputProps } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

import colors from "../../utils/colors";
import { Container, TextInput, Button } from "./styles";

type Props = {
  onAdd: () => void;
} & TextInputProps;

const Input: React.FC<Props> = ({ onAdd, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Container>
      <TextInput
        {...props}
        focus={isFocused}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholderTextColor={colors.gray[300]}
      />
      <Button>
        <Icon name="plus-circle-outline" size={16} color="#fff" />
      </Button>
    </Container>
  );
};

export default Input;
