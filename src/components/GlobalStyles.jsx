import { createGlobalStyle } from 'styled-components'
const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Roboto:wght@400;500&family=Russo+One&display=swap');
    @import url('https://fonts.cdnfonts.com/css/sf-compact-display');

    :root {
      font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
      line-height: 1.5;
      font-weight: 400;
    
      color-scheme: light dark;
      color: ${props => props.theme.colors.primary};
      background-color: #1E1E1E;
    
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
      min-height: 100vh;
      scroll-behavior: smooth;
      text-rendering: optimizeSpeed;
      line-height: 1.5;
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
}`
export default GlobalStyles;