import styled from "styled-components";

interface ContainerProps {
  isVisible: boolean;
}


export const Container = styled.div<ContainerProps>`
max-width: 1216px;
margin: 0 auto;

opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 1s ease-in-out;

`

export const TitleBenefits = styled.div`
margin-left: 2rem;

cursor: default;
margin-top: 18.75rem;



h6{
  cursor: default;
font-family: 'DM Sans';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 26px;

color: ${(props) => props.theme["$brand-color-red"]};
}

h2{
  font-family: 'DM Sans';
font-style: normal;
font-weight: 500;
font-size: 56px;
line-height: 110%;
}

span{
  font-family: 'DM Sans';
font-style: normal;
font-weight: 500;
font-size: 56px;
line-height: 110%;
color: ${(props) => props.theme["$brand-color-red"]};
}
`
export const GroupDivUpper = styled.div`
 cursor: default;
    margin: 32px 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
` 

export const DivGroup = styled.div`
  
  cursor: default;
width: 25%;
padding: 32px 24px;

img{
        cursor: pointer;
        transition: 0.4s all ease;
        width: 32px;
       
    }

h4 {
  margin-top: 1rem;
  font-family: 'DM Sans';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 32px;
}

p{
  margin-top: 2rem;
  margin-bottom: 2rem;
  font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 14;
line-height: 160%;
}

a{
font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 17px;
color: ${(props) => props.theme["$brand-color-red"]};
text-transform: uppercase;
}

&:hover img{
            transition: 0.4s all ease;
            width: 38px;
        }
`
