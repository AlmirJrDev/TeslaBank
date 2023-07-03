import styled from "styled-components";

export const ContainerMain = styled.main`
        display: flex;
        align-items: center;
        cursor: default;
        justify-content: center;
`

export const ContainerCards = styled.div`
display: flex;
align-items: flex-start;
justify-content: center;
margin-top: 5rem;
`
export const ContainerItens = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
margin-right: 10rem;

div h1{
    cursor: default;
    font-family: 'DM Sans';
font-style: normal;
font-weight: 500;
font-size: 88px;
line-height: 110%;
margin-right: auto;


}
`

export const PMain = styled.div`

display: flex;
align-items: start;
justify-content: start;
margin-top: 2.5rem;

margin-right: auto;

 p{
    font-family: 'Inter';
    font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 170%;  

 }

`




export const SpanMain = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-right: auto;
margin-top: 2rem;
 
`
export const SpanList = styled.div`


display: flex;
flex-direction: column;

padding: 0px;
gap: 16px;



span{
    display: flex;
    align-items: center;
    margin-right: 1.25rem;
    font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 180%;
gap: 1rem;
}

 
`
export const SpanList01 = styled.div`


display: flex;
flex-direction: column;

padding: 0px;
gap: 16px;


span{
    display: flex;
    align-items: center;
    margin-right: 1.25rem;
    font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 180%;
gap: 1rem;
}
 
`

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 2.5rem;
    margin-right: auto;

    gap: 2.5rem;
   

    button{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        border: NONE;
        background: ${props => props.theme["$brand-color-red"]};
        border-radius: 4px;
        width: 274px;
    height: 60px;

font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 24px;
transition: 0.2S ease-in;
cursor: pointer;

color: white;
&:hover {
    
    
    background-color: #A7162A;
   
  }
   
   
   }

  
    img{
        cursor: pointer;
        transition: 0.4s all ease;
        width: 32px;
        &:hover{
            transition: 0.4s all ease;
            width: 50px;
        }
    }
   
`



