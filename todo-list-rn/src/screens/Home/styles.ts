import styled from "styled-components/native";
import colors from "../../utils/colors";

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.gray[600]};
`;

export const WrapperLogo = styled.View`
  background-color: ${colors.gray[700]};
  height: 25%;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.View`
  padding: 0 24px 0;
`;

export const LogoImage = styled.Image`
  min-width: 30%;
  height: 32px;
`;

export const WrapperRow = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const WrapperCounter = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TitleCounter = styled.Text<{ type: "created" | "done" }>`
  font-size: 14px;
  font-weight: bold;
  margin-right: 8px;

  color: ${({ type }) =>
    type === "created" ? colors.blue.main : colors.purple.main};
`;

export const Counter = styled.Text`
  text-align: center;
  font-size: 12px;
  font-weight: bold;
  color: ${colors.gray[200]};

  background-color: ${colors.gray[400]};
  width: 25px;
  height: 19px;
  border-radius: 22px;
`;

export const FloatButton = styled.TouchableOpacity`
  background-color: ${colors.gray[500]};
  width: 40px;
  height: 40px;
  border-radius: 20px;

  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 24px;
  right: 24px;

  border-width: 1px;
  border-color: ${colors.purple.dark};
`;
