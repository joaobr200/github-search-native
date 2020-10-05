import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-status-bar-height";

export const Container = styled.View`
  padding: ${getStatusBarHeight(false)}px 8px 8px 8px;

  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  background: ${({ theme }) => theme.colors.gray700};
`;

export const Image = styled.Image`
  width: 26px;
  height: 26px;
`;
