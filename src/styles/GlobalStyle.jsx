import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body{
        background-color:#B0C4DE;
    }

    h2{
        text-align: center;
    }
    button{
        min-width:64px;
        height: 36px;
        background-color: white;
        border-radius: 4px;
        margin: 8px;
        &:hover && !disabled{
            cursor: pointer;
        }
    }

    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        space-between: 20px;
    }

    input{
        font-size: 24px;
        margin: 0.2rem;
        border: 1px solid #eee;
        border-radius: 8px;
        padding: 0.5rem;
    }

`;

export default GlobalStyle;
