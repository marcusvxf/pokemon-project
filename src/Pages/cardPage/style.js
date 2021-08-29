import Slider from "react-slick";
import styled from "styled-components";

export const Carrousel = styled(Slider)`
    width:100rem;
    margin-left:3rem;
`

export const Image = styled.img`
    height:20rem;
    transition: transform .2s;
    &:hover{
 
        border-radius: 0.6rem;
        transform: scale(1.1);
    }
`

export const Constainer = styled.div`
    margin-left:2rem;
    margin-right:2rem;
    margin-bottom:3rem;
    display:inline-block;

`

export const Display = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content: space-around;
    overflow-y: scroll;
    height:75vh;
    width:95vw;
    margin-left:2.4vw;
    border:5px solid black;
    border-radius:0.6rem;
    background-color:white;
    padding-top:1rem;

`

export const Title = styled.h2`
    font-family: 'Helvetica Neue', sans-serif;
    font-size: 40px; 
    font-weight: 1000; 
    letter-spacing: 2px;
    color:white;
    margin:0em 0 0.5rem 2.4vw;
    border:2px solid black;
    width:12rem;
    text-align:center;
    border-radius: 2rem;
    background-color:rgba(255, 140, 100, 1)

`

export const HeaderCardPage = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
`

export const Nothing = styled.div`
    display:flex;
    justify-content: center;
    align-items:center;
    font-family: 'Helvetica Neue', sans-serif;
    font-weight:800;
    font-size:3rem;
    text-transform:uppercase;
    text-align:center;
    width:100vw;
    margin-top:30vh;

`