import * as Accordion from '@radix-ui/react-accordion';

import React, { useEffect, useState, useRef } from 'react';
import { AccordionDiv, AccordionTest, Container, Content, DivGroup, HeaderFaq, Icon, Paragraph, Subtitle, Title } from './style';
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
      <Accordion.Root className="AccordionRoot" type="single" collapsible>  
    <Accordion.Item className="AccordionItem" value="item-1">
      <AccordionTest   className='AccordionTrigger'><div><Icon size={35} color="#EB3850"/>Como posso abrir uma conta bancária?</div> <CaretDown size={35} color="#EB3850"/></AccordionTest>
      <Content>Yes. It adheres to the WAI-ARIA design pattern.</Content>
    </Accordion.Item>

    <Accordion.Item className="AccordionItem" value="item-2">
      <AccordionTest> <div><Icon size={35} color="#EB3850"/> Qual é o meu saldo atual??</div><CaretDown size={35} color="#EB3850"/></AccordionTest>
      <Content>
       Por enquanto nenhum sem a gente :(
      </Content>
    </Accordion.Item>

    <Accordion.Item className="AccordionItem" value="item-3">
      <AccordionTest><div><Icon size={35} color="#EB3850"/>Como faço para transferir dinheiro para outra conta?</div><CaretDown size={35} color="#EB3850"/></AccordionTest>
      <Content className="AccordionContent">
        <div className="AccordionContentText">
          Yes! You can animate the Accordion with CSS or JavaScript.
        </div>
      </Content>
    </Accordion.Item>
  </Accordion.Root>
  </DivGroup>
  </AccordionDiv>
    </Container>
  )
}