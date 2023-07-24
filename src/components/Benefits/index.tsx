import React, { useEffect, useState, useRef } from 'react';

import  CreditCard  from "../../assets/credit-card.svg"
import ShoppingCar from "../../assets/shoppingcar.svg"
import Clock from "../../assets/clock.svg"
import Shield from "../../assets/shield.svg"
import Percent from "../../assets/percent.svg"
import Gift from "../../assets/gift.svg"

import { Container, DivGroup, GroupDivUpper, TitleBenefits } from "./styles"
import { X } from "@phosphor-icons/react"



export function Benefits() {
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
      <TitleBenefits>
      <h6>#INOVAÇÃO</h6>
      <h2>Quais são as vantagens <br />
      de usar <span>TeslaBank</span>?</h2>
      </TitleBenefits>
      <div>
        <GroupDivUpper  >
          <DivGroup>
              <img src={CreditCard} alt="" />

              <h4>Cartão TeslaBank</h4>
              <p>O Cartão TeslaBank é um cartão de crédito exclusivo para clientes da TeslaBank, uma instituição financeira líder em inovação e tecnologia.</p>
              <a href="">VEJA AS OPÇÕES</a>
          </DivGroup>
          <DivGroup>
              <img src={ShoppingCar} alt="" />

              <h4>Investimentos</h4>
              <p>O cartão também oferece diversos benefícios, como descontos em taxas de corretagem, acesso a fundos de investimento exclusivos e cashback em investimentos.</p>
              <a href="">Conheça os investimentos</a>
          </DivGroup>
          <DivGroup>
              <img src={Clock} alt="" />

              <h4>Receba prêmios</h4>
              <p>Os usuários têm acesso a um programa de recompensas que oferece pontos a cada transação realizada com o cartão, que podem ser trocados por diversos prêmios.</p>
              <a href="">VEJA AS OPÇÕES</a>
          </DivGroup>
          <DivGroup>
            
          </DivGroup>
        </GroupDivUpper>
        <GroupDivUpper  >
          <DivGroup>
          </DivGroup>
          <DivGroup>
           <img src={Shield} alt="" />
            <h4>Segurança</h4>
            <p>Os usuários contam com sistemas avançados de segurança, como verificação de identidade, monitoramento de transações e notificações de uso não autorizado.</p>
            <a href="">Conheça as seguranças</a>
          </DivGroup>
          <DivGroup>
            <img src={Percent} alt="" />
            <h4>Sem taxas</h4>
            <p>Com o cartão TeslaBank, os usuários podem aproveitar ao máximo seus recursos financeiros, sem se preocupar com custos adicionais ou taxas escondidas.</p>
            <a href="">como funciona</a>
          </DivGroup>
          <DivGroup>
            <img src={Gift} alt="" />
            <h4>Atendimento 24h</h4>
            <p>No TeslaBank, os usuários têm acesso a um atendimento ao cliente sempre disponível, 24 horas por dia, 7 dias por semana. </p>
            <a href="">VEJA AS OPÇÕES</a>
          </DivGroup>
        </GroupDivUpper>
       
      </div>
    </Container>
  )
}


//
//
//
//