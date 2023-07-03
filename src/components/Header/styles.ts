import styled from "styled-components";

export const HeaderContainer = styled.header`
display: flex;
cursor: default;
justify-content: space-around;
align-items: center;
margin-top: 2rem;
font-family: Inter;
font-weight: 500;
font-size: 1rem;


div{
    display: flex;
    justify-content: space-around;
    gap: 1rem;
}
`

export const ButtonHeader = styled.button`
border: none;
background: transparent;
color: ${(props) => props.theme["$brand-color-red"]};
font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 18px;
cursor: pointer;
&:hover {
  
   color: black;
  }

`


export const ButtonHeaderAccount = styled.button`
border: none;
background: ${(props) => props.theme["$brand-color-red"]};
color: #fff;
border-radius: 4px;
width: 144px;
height: 42px;
font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 18px;
cursor: pointer;
transition: 0.2s ease-in;

&:hover {
    
    border-radius: 20px;
    background-color: #A7162A;
   
  }
`