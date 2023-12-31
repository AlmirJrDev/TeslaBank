import styled, { keyframes } from "styled-components";
import * as Accordion from '@radix-ui/react-accordion';
import { DeviceMobileCamera } from "@phosphor-icons/react";

interface ContainerProps {
  isVisible: boolean;
}

export const Container = styled.footer<ContainerProps>`
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 1s ease-in-out;
  
max-width: 1216px;
margin: 0 auto;
margin-top: 5rem;
margin-bottom: 3rem;
`
export const HeaderFaq = styled.div`

` 
export const AccordionTest = styled(Accordion.Trigger)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  width: 100%;
  cursor: pointer;
  background: transparent;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;

}
`

export const Subtitle = styled.h6`
  color: #EB3850;
font-size: 18px;
text-align: center;
font-family: DM Sans;
font-weight: 700;
text-transform: uppercase;
`

export const Title = styled.h2`
  color: #1A191E;
  text-align: center;
font-size: 40px;
font-family: DM Sans;
font-weight: 500;
letter-spacing: -0.105rem;
`

export const Paragraph = styled.p`
color: #1A191E;
text-align: center;
font-size: 24px;
font-family: Inter;
margin-bottom: 3rem;
`
export const AccordionDiv = styled.div`

display: flex;
justify-content: center;
align-items: center;
color: #1A191E;
font-size: 1.25rem;
font-family: DM Sans;
font-weight: 500;

button{
  border: none;
  color: #1A191E;
font-size: 1.25rem;
font-family: DM Sans;
font-weight: 500;
display: flex;
align-items: center;
justify-content: space-between;

  text-align: center;
  gap: 3rem;
 

}
@media (max-width: 768px) {
  
    display: flex;
    align-items: center;
    justify-content: space-between;

}


`
export const Content = styled(Accordion.Content)`
display: flex;
align-items: center;
justify-content: center;
text-align: center;
margin-bottom: 2rem;
margin-top: 2rem;
color:  ${(props) => props.theme["$dark-20"]};


`


export const DivGroup = styled.div`


 display: flex;
  align-items: center;
  justify-content: center ;

  
  
`
export const Icon = styled(DeviceMobileCamera)`
margin-right: 2rem;

@media (max-width: 768px) {
display: none;

}

`
export const DownFooter = styled.div`
margin-top: 2rem;
width: 100%;
height: 50px;
`