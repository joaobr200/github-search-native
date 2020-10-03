import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background: ${({ theme }) => theme.background};
`;

export const Title = styled.Text`
  font-size: 46px;
  font-weight: 700;

  color: ${({ theme }) => theme.colors.gray200};
`;

export const ButtonView = styled.View`
  padding-top: 150px;
`;

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
  font-size: 16px;
  font-weight: 500;

  color: ${({ theme }) => theme.colors.gray700};
`;
