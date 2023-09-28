import styled from "styled-components";

interface ContainerProps {
  isVisible: boolean;
}
export const Container = styled.section<ContainerProps>`
max-width: 1216px;
margin: 0 auto;
opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 1s ease-in-out;

`
export const DivTitle = styled.div`
margin-top: 18.75rem;
h6{
  font-family: 'DM Sans';
font-style: normal;
font-weight: bold;
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

span{
  cursor: default;
  font-family: 'DM Sans';
font-style: normal;
font-weight: 300;
font-size: 56px;
line-height: 110%;
}


@media (max-width: 768px) {
  margin-bottom: 2rem;
  margin-top: 4rem;
      display: flex;
      flex-direction: column;

      margin-left: 2rem;
      width: 80%;
          h2{
            font-size: 30px;
          }

          span{
            font-size: 30px;
          }
  }
`

export const GroupDivUpper = styled.div`
    margin: 32px 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    
    @media (max-width: 768px) {
          margin: 0 auto;
          flex-direction: column;
          align-items: center;
          justify-content: center;
         
  }
` 

export const DivGroup = styled.div`
  

width: 25%;
padding: 32px 24px;

h4 {
  margin-top: 1rem;
  font-family: 'DM Sans';
font-style: normal;
font-size: 18px;
line-height: 32px;
transition: border 0.2s;
    border-left: 3px solid #e51d37;
    text-transform: uppercase;
    color: #333;
      font-weight: 700;
      cursor: default;
    padding-left: 16px;
}


p{
  margin-top: 2rem;
  margin-bottom: 2rem;
  font-family: 'Inter';
font-style: italic;
font-weight: 500;
font-size: 14px;
cursor: default;
line-height: 160%;
}


&:hover h4{
  border-left: 6px solid #e51d37;
  cursor: default;
        }
        
        @media (max-width: 768px) {
          margin: 0 auto;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 0 auto;
          
          width: 100%;
  }
`