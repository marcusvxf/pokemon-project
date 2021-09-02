import styled from "styled-components";
import Theme from "../../theme";

export const Container = styled.div`
    height:55vh;
    padding:0 6rem 0 6rem;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    h1{
        font-family: ${Theme.fonts.regular};
        font-size:7rem;
        text-transform:uppercase;
    }

    h3{
        font-family: ${Theme.fonts.regular};
        font-size:1.2rem;
        text-transform:uppercase;
        margin:-4rem;
        text-align:center;
        width:60rem
    }
`;