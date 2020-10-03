import React from "react";
import Spinner from "react-native-loading-spinner-overlay";

import { Container } from "./styles";

const Loading = () => {
  return (
    <Container>
      <Spinner isVisible={true} textContent="Loading..." />
    </Container>
  );
};

export default Loading;
