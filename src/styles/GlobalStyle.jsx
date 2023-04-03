import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    main{
        display:flex;
        align-items:center;
        justify-content:center;
        min-height:100vh;
    }
    h2{
        text-align: center;
    }
    button{
        width: 96px;
        height: 36px;
        background-color: white;
        border-radius: 4px;
    }

    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        space-between: 20px;
      
    }

    input{
        font-size: 24px;
        margin: 0.4rem;
        border: 1px solid #eee;
        border-radius: 12px;
        padding: 0 20px 0;
        height: 40px;
    }

`;

export default GlobalStyle;
