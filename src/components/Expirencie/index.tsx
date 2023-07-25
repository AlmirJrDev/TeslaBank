import { Container, DivButton, DivButtonBackground, DivButtonText, Logo } from "./styles";
import React, { useEffect, useState, useRef } from 'react';
import GreatLogo from "../../assets/greatlogo.svg"
import AppStore from "../../assets/logoappstorewhite.svg"
import AppleStore from "../../assets/logoapplewhite.svg"

export function Expirence() {
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
      <div>
        <h2>Uma nova experiência 
          em <span>serviços financeiros.</span>  </h2>
          <p>Nossa abordagem inovadora e personalizada oferece uma <br />experiência única para atender às suas necessidades.</p>
        <DivButton>
        <DivButtonBackground><img src={AppleStore} alt="" />
            <DivButtonText> 
              Download via
              <span>Apple Store</span>
            </DivButtonText>
        </DivButtonBackground>
        <DivButtonBackground><img src={AppStore} alt="" />
            <DivButtonText>
              Download via
              <span>Google Play</span>
            </DivButtonText>
        </DivButtonBackground>
        </DivButton>
      </div>
      <Logo>
      <img src={GreatLogo} alt="" />
      </Logo>
    </Container>

  )
}