import React from "react";
import { ActivityIndicator } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";

import { Container } from "./styles";

const Loading = () => {
  return (
    <Container>
      <ActivityIndicator color="#E1E1E6" size="large" />
    </Container>
  );
};

export default Loading;
