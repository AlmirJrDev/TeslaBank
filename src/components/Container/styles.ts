import styled from "styled-components";


export const ContainerMain = styled.section`
        display: flex;
        align-items: center;
        cursor: default;
        justify-content: center;

     /* Efeito de fade-in */

`

export const ContainerCards = styled.div`
display: flex;
align-items: flex-start;
justify-content: center;
margin-top: 5rem;
@media (max-width: 1115px) {
    display: flex;
    align-items: center;
    justify-content: center;
    img{
      width: calc(100% - 10px);
    }
 
  }

@media (max-width: 768px) {
    align-items: center;

    img{
        display: none;
    }
  }
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
font-size: 5.5rem;
line-height: 110%;
margin-right: auto;

}


@media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    
    div h1{
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        font-size: 4rem;
        margin-top: 2rem;
        
@media (max-width: 1115px) {
    div h1{
      font-size: calc(100% - 10px);
    }
    
 
  }
        @media (max-width: 768px) {
            margin-top: 4rem;
    margin-bottom: 5rem;
  }
    }
  }
`

export const PMain = styled.div`


display: flex;
align-items: start;
justify-content: start;
margin-top: 2.5rem;

@media (max-width: 1115px) {
    display: flex;
    align-items: center;
    justify-content: center;

      width: calc(100% - 10px);
    
 
  }
@media (max-width: 768px) {
    display: none;

  
  }
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
@media (max-width: 768px) {
    display: none;

  
  }
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
    @media (max-width: 768px) {


  
  }

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
   
   
    @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    margin-top: 2rem;
    img{
        display: none;
    }
  }
`



