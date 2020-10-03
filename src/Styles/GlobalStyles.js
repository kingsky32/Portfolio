import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
  }
  html, body {
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.blackColor};
    font-size: 10px;
    font-family: 'Roboto', 'Noto Sans KR', sans-serif;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  svg {
    fill: ${({ theme }) => theme.blackColor};
  }
  input, textarea {
    border-radius: .3rem;
    background-color: transparent;
    padding: .8rem 1.5rem;
    line-height: 1.8;
    border: 1px solid ${({ theme }) => theme.blackColor}10;
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
    outline:none;
  }
  .fade-enter,
  .fade-exit {
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    ${({ theme }) => theme.transition};
  }
  .fade-enter {
    transition-duration: 0;
    transform: translateY(5rem);
    opacity: 0;
  }
  .fade-enter-done {
    ${({ theme }) => theme.transition};
    opacity: 1;
    transform: translateY(0);
  }
  .fade-exit {
    transform: translateY(5rem);
    opacity: 0;
  }
`;
