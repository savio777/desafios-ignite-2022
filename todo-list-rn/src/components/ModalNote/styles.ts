import styled from "styled-components/native";
import colors from "../../utils/colors";

export const Container = styled.View`
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  top: 0;
  background-color: ${colors.transparent};
`;

export const Content = styled.View`
  background-color: ${colors.gray[500]};
  width: 80%;
  height: 71%;
  max-height: 700px;
  padding: 24px;
  border-radius: 8px;
  elevation: 5;
  shadow-color: #000;
  shadow-opacity: 0.25;
  shadow-radius: 4px;
  shadow-offset: 5px 10px;
  margin: auto;
`;

export const Text = styled.Text`
  text-align: justify;
  width: 100%;
  color: ${colors.gray[200]};
  font-size: 18px;
`;

export const WrapperButtons = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const ButtonExlude = styled.TouchableOpacity`
  align-self: flex-end;
`;
