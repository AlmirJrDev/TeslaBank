import styled from "styled-components";
interface ContainerProps {
  isVisible: boolean;
}

export const DivCenter = styled.section<ContainerProps>`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 1s ease-in-out;


text-align: center;

h6{
  font-family: 'DM Sans';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 26px;
cursor: default;

color: ${(props) => props.theme["$brand-color-red"]};
}

h2{
  font-family: 'DM Sans';
font-style: normal;
font-weight: 500;
font-size: 56px;
line-height: 110%;
cursor: default;
}


p{
 
  width: 50%;
  margin-top: 2rem;
  margin-bottom: 3rem;
  font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 24px;
cursor: default;
line-height: 160%;

}


button{
  &:hover {
    

    background-color: #A7162A;
   
  }
  cursor: pointer;
  transition: 0.2s ease-in;
margin-right: 2rem;

width: 193px;
height: 52px;

background: #EB3850;
border-radius: 6px;

border: none;

font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 100%;
/* identical to box height, or 20px */



color: #FFFFFF;

}

a{
  font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 100%;
/* identical to box height, or 20px */

letter-spacing: -0.03em;

color: #1A191E;

text-decoration: none;

}

@media (max-width: 768px) {
   display: none;
}

`
export const DivButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-top: 2rem;
`

export const DivContent = styled.div`

  margin-top: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

`