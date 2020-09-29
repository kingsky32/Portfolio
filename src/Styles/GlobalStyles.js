import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
  }
  html, body {
    background-color: ${({ theme }) => theme.backgoundColor};
    color: ${({ theme }) => theme.blackColor};
    font-size: 10px;
    font-family: 'Roboto', 'Noto Sans KR', sans-serif;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  input:focus{
    outline: none;
  }
  textarea {
    font: inherit;
    border: none;
    overflow: auto;
    outline: none;
    box-shadow: none;
  }
  button {
    background: 0 0;
    border: 0;
    cursor: pointer;
  }
`;
