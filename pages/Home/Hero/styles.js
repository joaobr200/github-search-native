import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-status-bar-height";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-evenly;
  background: ${({ theme }) => theme.background};
  padding-top: ${getStatusBarHeight(false)}px;
`;

export const Title = styled.Text`
  font-size: 46px;
  font-weight: 700;

  color: ${({ theme }) => theme.colors.gray200};
`;

export const ButtonView = styled.View``;

export const Button = styled.TouchableOpacity`
  width: 180px;
  height: 40px;
  margin-bottom: 8px;

  align-items: center;
  justify-content: center;

  border-radius: 12px;
  background: ${({ theme }) => theme.colors.white};
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  font-weight: 500;

  color: ${({ theme }) => theme.colors.gray700};
`;
