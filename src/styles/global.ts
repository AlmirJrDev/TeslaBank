import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        zoom: 98%;

        
    }

    :focus {
            outline: 0;
         
    }

    body {
        background-color: ${props => props.theme["white"]};
        -webkit-font-smoothing: antialiased;
    }
`