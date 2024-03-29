import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`

   #root{
    height: 100%;
   }
    :root {
      height: 100%;
      font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
      line-height: normal;
      font-weight: 400;
      color-scheme: light dark;
      color: ${(props) => props.theme.colors.primary};
      background-color: ${(props) => props.theme.colors.backgroundOut};
      font-synthesis: none;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -webkit-text-size-adjust: 100%;
    }
    
    a {
      font-weight: 500;
      text-decoration: inherit;
    }
  
    h1 {
      font-size: 3.2em;
      line-height: 1.1;
    }
    
    button {
      border-radius: 8px;
      border: 1px solid transparent;
      padding: 0.6em 1.2em;
      font-size: 1em;
      font-weight: 500;
      font-family: inherit;
      background-color: #1a1a1a;
      cursor: pointer;
      transition: border-color 0.25s;
    }
    button:hover {
      border-color: #646cff;
    }
    button:focus,
    button:focus-visible {
      outline: 4px auto -webkit-focus-ring-color;
    }
    
    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }
    
    ul[class],
    ol[class] {
      padding: 0;
    }
    
    body,
    h1,
    h2,
    h3,
    h4,
    p,
    ul[class],
    ol[class],
    li,
    figure,
    figcaption,
    blockquote,
    dl,
    dd {
      margin: 0;
    }
    
    body {
      height:100%;
      scroll-behavior: smooth;
      text-rendering: optimizeSpeed;
    }
    
    ul[class],
    ol[class] {
      list-style: none;
    }
    
    a:not([class]) {
      text-decoration-skip-ink: auto;
    }
    
    img {
      max-width: 100%;
    }
    
    article > * + * {
      margin-top: 1em;
    }
    
    input,
    button,
    textarea,
    select {
      font: inherit;
    }
    
    @media (prefers-reduced-motion: reduce) {
      * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
      }
}`;
export default GlobalStyles;
