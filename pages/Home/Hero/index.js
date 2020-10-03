import React from "react";

import { Container, Title, ButtonView, Button, ButtonText } from "./styles";

const Hero = ({ navigation }) => {
  function handleClickNavigate(name) {
    navigation.navigate(name);
  }
  return (
    <Container>
      <Title>Github Search</Title>
      <ButtonView>
        <Button onPress={() => handleClickNavigate("SearchUser")}>
          <ButtonText>Search User</ButtonText>
        </Button>
        <Button onPress={() => handleClickNavigate("SearchRepo")}>
          <ButtonText>Search Repositories</ButtonText>
        </Button>
        <Button onPress={() => handleClickNavigate("Favorites")}>
          <ButtonText>Favorites</ButtonText>
        </Button>
      </ButtonView>
    </Container>
  );
};

export default Hero;
