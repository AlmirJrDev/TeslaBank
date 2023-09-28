import { Container, DivGroup, GroupDivUpper, HeaderBlog } from "./style";
import {  ArrowRight } from "@phosphor-icons/react";

import React, { useEffect, useState, useRef } from 'react';

import Blog01 from "../../assets/blog01.svg"
import Blog02 from "../../assets/blog02.svg"
import Blog03 from "../../assets/blog03.svg"


export function Blog(){
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
    <Container  ref={ContainerRef} isVisible={isVisible}>
      <HeaderBlog><h2>Blog</h2><h6>Todas as postagens <ArrowRight size={23} weight="bold" /></h6></HeaderBlog>
      <GroupDivUpper>
        <DivGroup>
          <img src={Blog01} alt="" />
          <h4>Como começar a usar o TeslaBank para sua startup</h4>
          <p>Descubra como a sua startup pode se beneficiar dos serviços financeiros do TeslaBank. Nesta postagem, apresentamos um guia fácil para ajudá-lo a começar a usar o TeslaBank.</p>
        </DivGroup>
        <DivGroup>
          <img src={Blog02} alt="" />
          <h4>10 coisas que ninguém te contou sobre o TeslaBank</h4>
          <p>Você está pensando em usar o TeslaBank para gerenciar suas finanças pessoais? Antes de decidir, confira esta postagem para descobrir 10 coisas que ninguém te contou sobre o TeslaBank.</p>
        </DivGroup>
        <DivGroup>
            <img src={Blog03} alt="" />
          <h4>7 maneiras de melhorar seus hábitos de poupança</h4>
          <p>Você deseja economizar dinheiro, mas acha difícil manter bons hábitos de poupança? Confira esta postagem para descobrir sete maneiras eficazes de melhorar seus hábitos de poupança.</p>
        </DivGroup>
      </GroupDivUpper>

    </Container>
  )
}