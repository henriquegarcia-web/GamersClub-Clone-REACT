import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    font-family: 'Roboto', sans-serif;
  }
`

export const TextPoppins = styled.p`
  font-family: 'Poppins', sans-serif;
` 

export default GlobalStyle;