import { createGlobalStyle } from "styled-components";
import { Color } from "./colors";

export const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    
}

body {
    font-family: Poppins, sans-serif;
    background: ${Color.White};
    color: ${Color.Black};
}

li{
    list-style-type: none;
}

button {
    font-size: inherit;
    font-family: inherit;
}`;
