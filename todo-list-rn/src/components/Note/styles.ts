import styled, { css } from "styled-components/native";
import colors from "../../utils/colors";

export const Container = styled.View<{ done: boolean }>`
  background-color: ${colors.gray[500]};
  width: 100%;
  height: 64px;
  flex-direction: row;
  border-radius: 8px;
  padding: 12px 16px;
  align-items: center;
  margin-bottom: 8px;

  border-width: 1px;
  border-color: ${({ done }) => (done ? colors.gray[400] : colors.gray[500])};
`;

export const Circle = styled.View`
  width: 18px;
  height: 18px;
  border-radius: 9px;
  background-color: ${colors.purple.dark};
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text<{ done: boolean }>`
  flex: 1;
  color: ${colors.gray[200]};
  font-size: 14px;
  width: 100%;
  text-align-vertical: center;

  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
    `}
`;

export const ButtonAction = styled.TouchableOpacity<{
  align: "left" | "right";
  main?: boolean;
}>`
  flex: 1;
  align-items: ${({ align }) =>
    align === "right" ? "flex-end" : "flex-start"};
  justify-items: center;

  ${({ main }) =>
    main &&
    css`
      min-width: 60%;
    `};
`;
