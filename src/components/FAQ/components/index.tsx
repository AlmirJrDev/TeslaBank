import * as Accordion from '@radix-ui/react-accordion';

import { AccordionDiv, AccordionTest, Container, Content, DivGroup, HeaderFaq, Icon, Paragraph, Subtitle, Title } from './style';
import { CaretDown, } from '@phosphor-icons/react';
export function FaqComponent() {
  return(
    <Container>
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