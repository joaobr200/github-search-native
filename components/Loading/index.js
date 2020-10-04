import React from "react";
import Spinner from "react-native-loading-spinner-overlay";

import { Container } from "./styles";

const Loading = () => {
  return (
    <Container>
      <Spinner color="#E1E1E6"  animation="slide"  />
    </Container>
  );
};

export default Loading;
