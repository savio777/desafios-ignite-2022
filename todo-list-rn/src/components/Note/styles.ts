import styled from "styled-components/native";
import colors from "../../utils/colors";

export const Container = styled.View`
  background-color: ${colors.gray[500]};
  width: 100%;
  height: 64px;
  flex-direction: row;
  border-radius: 8px;
  padding: 16px;
  align-items: center;
  margin-bottom: 8px;
`;

export const ButtonAction = styled.TouchableOpacity<{ side: "left" | "right" }>`
  flex: 1;

  align-items: ${({ side }) => (side === "right" ? "flex-end" : "flex-start")};
`;

export const Circle = styled.View`
  width: 18px;
  height: 18px;
  border-radius: 9px;
  background-color: ${colors.purple.dark};
`;

export const Title = styled.Text`
  flex: 1;
  min-width: 60%;
  color: ${colors.gray[200]};
  font-size: 14px;
`;
