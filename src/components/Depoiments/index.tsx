import React, { useEffect, useState, useRef } from 'react';
import { Container, DivGroup, DivTitle, GroupDivUpper } from "./styles";

export function Depoiments() {
  const [isVisible, setIsVisible] = useState(false);
  const ContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const elementTop = ContainerRef.current?.getBoundingClientRect().top ?? 0;
      const offset = window.innerHeight * 0.8; // Ajuste este valor para controlar quando o fade-in deve ocorrer

      if (elementTop < offset) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <Container ref={ContainerRef} isVisible={isVisible}>
      <DivTitle>
        <h6>#DEPOIMENTOS</h6>
          <h2>TeslaBank fora das telinhas: 
            <br /> 
            <span>Veja o que estão falam sobre nós. </span>
          </h2>
      </DivTitle>
      <GroupDivUpper>
        <DivGroup>
              <h4>NIKOLA TESLA</h4>
              <p>Estou realmente impressionado com a qualidade do serviço do TeslaBank. Desde que comecei a usá-lo, todas as minhas transações financeiras ficaram mais fáceis e ágeis.</p>
             
        </DivGroup>
        <DivGroup>
              <h4>STEVE JOBS</h4>
              <p>O TeslaBank é uma verdadeira revolução no mundo financeiro. Eu não preciso mais enfrentar filas em agências bancárias ou lidar com taxas e tarifas absurdas.</p>
            
        </DivGroup>
        <DivGroup>
              <h4>ALAN TURING</h4>
              <p>Eu era bastante cético em relação ao banco digital, mas decidi experimentar por curiosidade. Fiquei surpreso com a facilidade e segurança das transações, além de todas as funcionalidades exclusivas oferecidas.</p>
              
        </DivGroup>
      </GroupDivUpper>

    </Container>
  )
}