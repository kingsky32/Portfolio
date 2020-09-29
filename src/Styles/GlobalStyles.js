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
  input, textarea {
    border-radius: .3rem;
    background-color: transparent;
    padding: .8rem 1.5rem;
    line-height: 1.8;
    border: 1px solid rgba(24, 28, 33, .1);
    color: inherit;
    font-size: 1.43rem;
    &::placeholder {
      color: #BABBBC;
    }
    &:focus {
      outline: none;
    }
  }
  textarea {
    font-family: inherit;
    overflow: auto;
    outline: none;
    box-shadow: none;
    resize: none;
  }
  button {
    background: 0 0;
    border: 0;
    cursor: pointer;
  }
`;
