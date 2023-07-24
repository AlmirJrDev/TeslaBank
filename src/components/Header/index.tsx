import Logo from '../../assets/logo.svg';
import { ButtonHeader, ButtonHeaderAccount, HeaderContainer } from './styles';

import React, { useState, useEffect } from 'react';
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
      <div>
        <p>Benefícios</p>
        <p>Conta digital</p>
        <p>Suporte</p>
        <p>Blog</p>
      </div>

      <div>
        <ButtonHeader>Entrar</ButtonHeader>
        <ButtonHeaderAccount>Abrir conta</ButtonHeaderAccount>
      </div>

      <div id="topElement" />
    </HeaderContainer>
  );
}
