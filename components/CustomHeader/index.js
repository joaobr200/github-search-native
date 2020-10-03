import React from "react";
import { useNavigation } from "@react-navigation/native";
import AntDesign from "@expo/vector-icons/AntDesign";

import logo from "../../assets/logo.png";
import { Container, Image } from "./styles";

const CustomHeader = () => {
  const navigation = useNavigation();

  function handleClickGoBack() {
    navigation.goBack();
  }
  return (
    <Container>
      <AntDesign
        name="left"
        size={26}
        color="#fff"
        onPress={handleClickGoBack}
      />
      <Image source={{ uri: logo }} />
    </Container>
  );
};

export default React.memo(CustomHeader);
