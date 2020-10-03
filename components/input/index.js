import React from "react";

import { CustomInput } from "./styles";

const Input = ({ children, ...props }) => {
  return <CustomInput {...props} />;
};

export default Input;
