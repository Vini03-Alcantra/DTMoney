import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    --background: #f0f2f5;
    --red: #e52e4d;
    --blue: #5429cc;
    --green: #34CC96;

    --blue-light: #6933ff;

    --text-title: #363f5f;
    --text-body: #969cb3;

    --background: #f0f2f5;
    --shape: #ffffff;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    @media(max-width: 1080px){
      font-size: 93.75%;
    }

    @media(max-width: 720px){
      font-size: 87.5%;
    }
  }

  body{
    background: var(--background);
    -webkit-font-smooting: antialiased;
  }

  button{
    cursor: pointer;
  }

  [disabled]{
    opacity: .6;
    cursor: pointer;
  }

  .react-modal-overlay{
    background: rgba(0,0,0, .5);

    position: fixed;
    top:0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content{
    width: 100%;
    max-width: 576px;
    background: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: .24rem;
  }

  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;
    transition: filter .5s;

    &:hover {
      filter: brightness(.75  )
    }
  }
`
