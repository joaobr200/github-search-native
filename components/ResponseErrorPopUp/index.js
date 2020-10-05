import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

import { Container, PopUpView, PopUpText } from "./styles";

const ResponseErrorPopUp = ({ text }) => {
  return (
    <Container>
      <PopUpView>
        <PopUpText>
          <AntDesign name="close" size={16} />
          {text}
        </PopUpText>
      </PopUpView>
    </Container>
  );
};

export default ResponseErrorPopUp;
