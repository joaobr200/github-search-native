import styled from 'styled-components/native';

export const Container = styled.View`
  
`;

export const PopUpView = styled.View`

      display:flex;
      align-items:center;
      justify-content: center;

      padding:8px;

      background: red;

`

export const PopUpText = styled.Text`
      font-weight:500;
      font-size:16px;

      color: ${({theme}) => theme.colors.gray200};
`
