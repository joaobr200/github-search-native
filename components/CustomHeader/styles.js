import styled from "styled-components/native";

export const Container = styled.View`
  padding: 8px;

  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  background: ${({ theme }) => theme.colors.gray700};
`;

export const Image = styled.Image`
  width: 26px;
  height: 26px;
`;
