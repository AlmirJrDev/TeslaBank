import { DivCenter } from "./styles";
import React, { useEffect, useState, useRef } from 'react';
import Crd from "../../assets/cards.svg"

export function Cards() {
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
    <DivCenter ref={ContainerRef} isVisible={isVisible}>
      <div>
      <h6>#UTILIDADE</h6>
          <h2>Cartão perfeito
            <br /> 
          <h2>para suas necessidades. </h2>
          </h2>
          <p>Encontre o cartão perfeito para suas necessidades financeiras. Seja para <br /> viagens ou compras do dia a dia, temos uma opção que se adapta a você.</p>
          <img src={Crd} alt="" />
          <div>
            <button>Abrir uma Conta</button>
            <a href="">Comparar Cartões</a>
          </div>
      </div>
    </DivCenter>
  )
}