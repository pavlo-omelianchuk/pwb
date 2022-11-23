import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  div.MuiClock-wrapper {
    position: relative !important;
    top: 3px !important;
  }
 .MuiGrid-root.MuiGrid-container.MuiPickersToolbar-content{
  
  justify-content: center;
    svg {
     display: none;
    }
  }
 `;
