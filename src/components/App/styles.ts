import styled from "styled-components";

interface ArticleMainProps {
  isVisible: boolean;
}

export const ArticleMain = styled.article<ArticleMainProps>`
 cursor: default;
display: flex;
justify-content: center;
align-items: center;
margin-top: 18.75rem;

    /* Efeito de fade-in */
    opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 1s ease-in-out;

  
  @media (max-width: 768px) {
    flex-direction: column;


    h1{
      font-size: 2.5rem;
      text-align: center;
    }

  }

`
export const ImgApp = styled.div`
  @media (max-width: 768px) {
    img{
      width: 50vw;
      margin-bottom: 3rem;
    }
  }
`
export const TitleApp = styled.h1`
font-family: 'DM Sans';
font-style: normal;
font-weight: 500;
font-size: 56px;
line-height: 110%;
/* identical to box height, or 62px */

letter-spacing: -3px;

color: #1A191E;
`

export const SubtitleApp = styled.p`
font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 22px;
line-height: 160%;
/* or 35px */


color: #1A191E;

margin-top: 1.563rem;
margin-bottom: 3.375rem;
`

export const ArticleMid = styled.div`
 cursor: default;
margin-left: 8.75rem;
 
@media (max-width: 768px) {
    margin: auto 0;  
    font-size: 2.5rem;
      text-align: center;
 
  }
`

export const SubtitleQuality = styled.h3`
font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 22px;
line-height: 160%;
margin-bottom: 1.563rem;
`

export const ParagraphQuality = styled.p`
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
@media (max-width: 768px) {
          margin: 0 auto;
          margin-bottom: 
          2.5rem;
}
`

export const SectionQuality = styled.section`
  display: flex;  

  flex-direction: column;
  @media (max-width: 768px) {
          margin: 0 auto;
            align-items: center;
      
}

 
`

export const DivQuality = styled.div`
  display: flex;
  cursor: default;
margin-left: 2rem;
margin-bottom: 5.188rem;
gap: 2rem;
  flex-direction: row;
  
  img{
    width: 2.188rem;
    transition: 0.4s all ease;
  }

  &:hover img{
            transition: 0.4s all ease;
            width: 40px;
        }

        @media (max-width: 768px) {
          margin: 0 auto;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          img{
            width: 2rem;
            
          }
          
  }
`