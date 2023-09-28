import styled from "styled-components";
interface ContainerProps {
  isVisible: boolean;
}
export const Container = styled.section<ContainerProps>`
 cursor: default;
max-width: 1216px;
display: flex;
align-items: center;
justify-content: center;

opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 1s ease-in-out;

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

} @media (max-width: 768px) {
  margin-bottom: 2rem;
  margin-top: 2rem;
   h2{
    font-size: 50px;
    margin-left: 1rem;
   }
   p{
    margin-left: 1rem;
    font-size: 20px;
   }
}

`

export const Logo = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 504px;
height: 378px;


transition: 0.3s ease-in-out;
background: #EB3850;
border-radius: 80px;
&:hover{
    background: #A7162A;
}
@media (max-width: 768px) {
   display: none;
}
`

export const DivButton = styled.div`
display: flex;
flex-direction: row;
@media (max-width: 768px) {
  align-items: center;
  justify-content: center ;
  
   flex-direction: column;
}
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
@media (max-width: 768px) {
  margin: 0 auto;
   margin-bottom: 2rem;

}
`