import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: 'JetBrains Mono';
  src: url('./assets/fonts/static/JetBrainsMono-Bold.ttf') format('truetype');
  font-weight: bold;
}
  :root{
    --color-red:#F64A4A;
    --color-orange:#FB7C58;
    --color-yellow:#F8CD65;
    --color-neon-green:#A4FFAF;
    --color-almost-white:#E6E5EA;
    --color-grey:#817D92;
    --color-dark-grey:#24232C;
    --color-very-dark-grey:#18171F;
  }

*,
*::after,
*::before {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body{
  background-color:var(--color-very-dark-grey);
  font-family: 'JetBrains Mono', monospace;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}


input{
  font: inherit;
}


button{
  cursor: pointer;
}
*:disabled{
  cursor: not-allowed;
  /* opacity: 0.5; */
}
h1{
  color: var(--color-grey);
  font-size: 24px;
  line-height: 31px;
}

`;

export default GlobalStyles;
