import styled from "styled-components/native";
import colors from "../../utils/colors";

export const Container = styled.View`
  align-items: center;
  padding: 48px 20px 20px;

  border-top-width: 1px;
  border-top-color: ${colors.gray[400]};
`;

export const Text = styled.Text`
  font-size: 14px;
  color: ${colors.gray[300]};
`;

export const Title = styled(Text)`
  font-weight: bold;
  margin-top: 16px;
`;
