import styled from "styled-components";


export const HeaderContainer = styled.header`
 /* Estilos comuns do header */
 display: flex;
  cursor: default;
  justify-content: space-around;
  align-items: center;
  margin-top: 2rem;
  font-family: Inter;
  font-weight: 500;
  font-size: 1rem;



  @media (max-width: 768px) {
    
  }

 
`

export const DivAncor = styled.div`
    
    display: flex;
    justify-content: space-around;
    gap: 1rem;
    
  @media (max-width: 768px) {
    display: none;
  }
  
`


export const ButtonHeader = styled.button`
margin-right: 1rem;
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

  @media (max-width: 768px) {
    display: none;
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
  @media (max-width: 768px) {
    display: none;
  }
`
export const ButtonAccordion = styled.button`
  border: none;
background: transparent;
color: #fff;
border-radius: 4px;
width: 3rem;
height: 3rem;
text-align: center;
display: flex;
align-items: center;
justify-content: center;
@media (min-width: 768px) {
    display: none;
  }
`