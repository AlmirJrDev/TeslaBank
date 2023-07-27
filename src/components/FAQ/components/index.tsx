import * as Accordion from '@radix-ui/react-accordion';

import React, { useEffect, useState, useRef } from 'react';
import { AccordionDiv, AccordionTest, Container, Content, DivGroup, Footer, HeaderFaq, Icon, Paragraph, Subtitle, Title } from './style';
import { CaretDown, } from '@phosphor-icons/react';

export function FaqComponent() {
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

  return(
    <Container ref={ContainerRef} isVisible={isVisible}>
      <HeaderFaq>
        <Subtitle>
        #ajuda
        </Subtitle>
        <Title>
        Ficou alguma dúvida?
        </Title>
        <Paragraph>
        Confira nossa lista de perguntas frequentes que recebemos
        </Paragraph>
      </HeaderFaq>
      <AccordionDiv>
      <DivGroup>
      <Accordion.Root className="AccordionRoot" type="single" defaultValue="item-1" collapsible>  
    <Accordion.Item className="AccordionItem" value="item-1">
      <AccordionTest><div><Icon size={35} color="#EB3850"/></div>Como posso abrir uma conta bancária?<CaretDown size={35} color="#EB3850"/></AccordionTest>
      <Content> Este site é apenas uma demonstração. Não oferece funcionalidades bancárias reais.</Content>
    </Accordion.Item>

    <Accordion.Item className="AccordionItem" value="item-2">
      <AccordionTest> <div><Icon size={35} color="#EB3850"/> </div> Qual é o meu saldo atual?<CaretDown size={35} color="#EB3850"/></AccordionTest>
      <Content>
      Este site é apenas uma demonstração. Não oferece funcionalidades bancárias reais.
      </Content>
    </Accordion.Item>

    <Accordion.Item className="AccordionItem" value="item-3">
      <AccordionTest><div><Icon size={35} color="#EB3850"/> </div>Como faço para transferir dinheiro para outra conta?<CaretDown size={35} color="#EB3850"/></AccordionTest>
      <Content>
    
        Este site é apenas uma demonstração. Não oferece funcionalidades bancárias reais.
   
      </Content>
    </Accordion.Item>
  </Accordion.Root>
  </DivGroup>
  </AccordionDiv>
  <Footer/>
    </Container>
  )
}