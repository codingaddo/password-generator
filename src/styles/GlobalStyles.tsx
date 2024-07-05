import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
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
}

input{
  font: inherit;
}

button{
  cursor: pointer;
}

h1,h2,h3,h4,h5,h6{
  color: var(--color-grey);
}

`;

export default GlobalStyles;
