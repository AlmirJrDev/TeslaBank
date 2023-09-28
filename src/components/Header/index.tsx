import { List } from '@phosphor-icons/react';
import Logo from '../../assets/logo.svg';
import { ButtonAccordion, ButtonHeader, ButtonHeaderAccount, DivAncor, HeaderContainer } from './styles';

import React, { useState, useEffect } from 'react';
const smoothScroll = (target: string, duration: number) => {
  const targetElement = document.querySelector(target) as HTMLElement;
  const targetPosition = targetElement.getBoundingClientRect().top;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime: number | null = null;

  const animation = (currentTime: number) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const ease = Math.min(1, timeElapsed / duration);
    const newPosition = startPosition + distance * ease;
    window.scrollTo(0, newPosition);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  };

  requestAnimationFrame(animation);
};

const handleSmoothScroll = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
  event.preventDefault();
  const target = (event.currentTarget as HTMLAnchorElement).getAttribute('href');
  if (target) {
    smoothScroll(target, 500); // 1000 é a duração da animação em milissegundos
  }
};
export function Header() {
 
    const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowContent(true);
    }, 100);
  }, []);

  return (
    <HeaderContainer style={{ opacity: showContent ? '1' : '0', transition: 'opacity 1s ease-in-out' }}>
      <div>
        <img src={Logo} alt="" />
      </div>
      <DivAncor>
        <a href="#beneficios"  className="smooth-scroll" onClick={handleSmoothScroll}><p>Benefícios</p></a>
        <a href="#accont" className="smooth-scroll" onClick={handleSmoothScroll}><p>Conta digital</p></a>
        <a href="#faq" className="smooth-scroll" onClick={handleSmoothScroll}><p>Suporte</p></a>
        <a href="#blog" className="smooth-scroll" onClick={handleSmoothScroll}><p>Blog</p></a>
      </DivAncor>

      <div>
        <ButtonHeader>Entrar</ButtonHeader>
        <ButtonHeaderAccount>Abrir conta</ButtonHeaderAccount>
      </div>

      
    </HeaderContainer>
  );
}
