import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native";

import { Container, Title, Button } from "./styles";

function SearchUser() {
  const navigation = useNavigation();
  function NavigateUser() {
    navigation.navigate("UserInfo");
  }
  return (
    <Container>
      <Title>SearchUser</Title>
      <Button onPress={NavigateUser}>
        <Text>Navigate</Text>
      </Button>
    </Container>
  );
}

export default SearchUser;
