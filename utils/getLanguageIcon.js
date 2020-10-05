import React from "react";
import styled from "styled-components/native";

import TSIcon from "../assets/lang-icons/ts-icon.svg";
import JSIcon from "../assets/lang-icons/js-icon.svg";
import HTMLIcon from "../assets/lang-icons/html-icon.svg";
import CSSIcon from "../assets/lang-icons/css-icon.svg";
import PHPIcon from "../assets/lang-icons/php-icon.svg";

const LangIcon = styled.Image`
  width: 18px;
  height: 18px;
`;

function generateRandomColor() {
  const hexadecimal = Math.floor(Math.random() * 16777215).toString(16);

  return hexadecimal;
}

const DefaultIcon = styled.View`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #${generateRandomColor()};
`;

function getLanguageIcon({ lang }) {
  const formatLang = lang.toLowerCase();
  switch (formatLang) {
    case "typescript":
      return <LangIcon source={TSIcon} />;
    case "javascript":
      return <LangIcon source={JSIcon} />;
    case "css":
      return <LangIcon source={CSSIcon} />;
    case "html":
      return <LangIcon source={HTMLIcon} />;
    case "php":
      return <LangIcon source={PHPIcon} />;
    default:
      return <DefaultIcon />;
  }
}

export default getLanguageIcon;
