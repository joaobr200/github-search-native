import React from "react";''
import { AppContext } from '../../../context/AppContext';
import { useNavigation } from "@react-navigation/native";

import Input from "../../../components/input";
import { Container, Title, Wrapper, InputReference } from "./styles";

function SearchRepo() {
  const ctx = React.useContext(AppContext);
  const navigation = useNavigation();
  
  return (
    <Container>
      <Title>Github Search</Title>
      <Wrapper>
        <InputReference>Repositorie</InputReference>
        <Input placeholder="Search for specific github repositorie" />
      </Wrapper>
    </Container>
  );
}

export default SearchRepo;
