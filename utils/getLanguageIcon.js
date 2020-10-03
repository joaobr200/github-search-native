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
`

function generateRandomColor(){
  const hexadecimal = Math.floor(Math.random()*16777215).toString(16);;

  return hexadecimal;
}

const DefaultIcon = styled.View`
    width: 18px;
    height: 18px;
    border-radius:50%;
    background: #${generateRandomColor()};
`


function getLanguageIcon({lang}) {
  const formatLang = lang.toLowerCase();
    switch(formatLang) {
      case "typescript":
        return (
          <LangIcon source={{uri: TSIcon}}/>
        )
        case "javascript":
        return (
          <LangIcon source={{uri: JSIcon}}/>
        )
        case "css":
        return (
          <LangIcon source={{uri: CSSIcon}}/>
        )
        case "html":
        return (
          <LangIcon source={{uri: HTMLIcon}}/>
        )
        case "php":
        return (
          <LangIcon source={{uri: PHPIcon}}/>
        )
    default:
      return <DefaultIcon source={{uri: TSIcon}}/>
    }
}

export default getLanguageIcon;
