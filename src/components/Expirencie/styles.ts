import styled from "styled-components";
export const Container = styled.div`
 cursor: default;
max-width: 1216px;
display: flex;
align-items: center;
justify-content: center;

margin: 0 auto;
margin-top: 20.188rem;
margin-bottom: 20.188rem;

h2{
  cursor: default;
  font-family: 'DM Sans';
font-style: normal;
font-weight: 500;
font-size: 64px;
margin-bottom: 2rem;
line-height: 110%;
/* or 70px */

letter-spacing: -0.03em;
&:hover span{
  color: #ED2B2A;
}
}

span{
  color: ${(props) => props.theme["$brand-color-red"]};
  transition: 0.3s ease-in-out;
  &:hover{
  color: #ED2B2A;
}
}

p{
  font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 24px;
margin-bottom: 3.875rem;

}

`

export const Logo = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 384px;
height: 378px;
margin-left: 9.125rem;

transition: 0.3s ease-in-out;
background: #EB3850;
border-radius: 80px;
&:hover{
    background: #A7162A;
}
`

export const DivButton = styled.div`
display: flex;
flex-direction: row;

`
export const DivButtonText = styled.div`
display: flex;
margin-left: 1rem;
justify-content: center;
flex-direction: column;
font-family: 'DM Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 18px;

color: #FFFFFF; 

span{
  font-family: 'DM Sans';
  font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 24px;
/* identical to box height */


color: #FFFFFF;
}
&:hover span{
  color: #ED2B2A;
}
`

export const DivButtonBackground = styled.div`  
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
  width: 200px;
  height: 60px;
  color: #fff;
  border: none;
  background: #1A191E;
  border-radius: 5px;
  margin-right: 2.5rem;
  &:hover span{
  color: #ED2B2A;
}
`