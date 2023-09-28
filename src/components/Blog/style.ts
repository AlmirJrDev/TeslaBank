import styled from "styled-components";

interface ContainerProps {
  isVisible: boolean;
}
export const Container = styled.section<ContainerProps>`
max-width: 1216px;
margin: 0 auto;

 /* Efeito de fade-in */
 opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 1s ease-in-out;
  @media (max-width: 768px) {
   display: none;
}
`

export const HeaderBlog = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 4rem;

h2{
  font-family: 'DM Sans';
font-style: normal;
font-weight: 500;
font-size: 64px;

}

h6{
  cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
gap: 0.5rem;
  font-family: 'DM Sans';
font-style: normal;
font-weight: 500;
font-size: 18px;

transition: 0.3s ease-in-out;

color: #EB3850;
&:hover{
  gap: 1.5rem
  
}
}

`
export const DivGroup = styled.div`
  
    cursor: pointer;
width: 25%;


img{
        cursor: pointer;
        transition: 0.2s all ease;
        width: 325px;
        

    }

h4 {
  margin-top: 1rem;
  font-family: 'DM Sans';
font-style: normal;
font-weight: 500;
font-size: 28px;
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
&:hover img{
 filter: brightness(50%); 
}
`
export const GroupDivUpper = styled.div`
 cursor: default;

    display: flex;
    align-items: center;
    justify-content: space-between;

` 

