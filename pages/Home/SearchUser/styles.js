import styled from "styled-components/native";
import { BorderlessButton } from "react-native-gesture-handler";

export const Container = styled.View`
  flex: 1;
  background: #1c1c1c;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  color: #e1e1e6;
  font-weight: 700;
  font-size: 46px;
`;

export const Wrapper = styled.View`
  align-items: center;
  padding-top: 70px;
`;

export const FormView = styled.View`
  align-items: center;
  justify-content: center;
`;

export const InputReference = styled.Text`
  color: #e1e1e6;
  font-weight: 700;
  font-size: 26px;
`;

export const ErrorMessage = styled.Text`
  align-self: flex-start;

  font-size: 14px;
  font-weight: 500;

  margin-left: 4px;

  color: red;
`;

export const SubmitButton = styled.TouchableOpacity`
  width: 160px;
  height: 40px;
  margin-top: 20px;

  align-items: center;
  justify-content: center;

  background: #fff;
  border-radius: 8px;
`;

export const SubmitButtText = styled.Text`
  font-size: 16px;
  font-weight: 500;
`;
