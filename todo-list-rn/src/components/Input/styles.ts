import styled from "styled-components/native";
import colors from "../../utils/colors";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  height: 54px;
  border-width: 1px;
  margin: -27px 0 32px;
`;

export const TextInput = styled.TextInput<{ focus: boolean }>`
  flex: 1;
  height: 100%;
  color: #fff;
  background-color: ${colors.gray[500]};
  margin-right: 4px;
  border-radius: 6px;
  padding: 16px;
  font-size: 16px;

  border-width: 1px;
  border-color: ${({ focus }) =>
    focus ? colors.purple.dark : colors.gray[700]};
`;

export const Button = styled.TouchableOpacity`
  background-color: ${colors.blue.dark};
  height: 100%;
  align-items: center;
  justify-content: center;
  width: 52px;
  border-radius: 6px;
`;
