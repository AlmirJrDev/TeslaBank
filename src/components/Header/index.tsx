import { List } from '@phosphor-icons/react';
import Logo from '../../assets/logo.svg';
import { ButtonAccordion, ButtonHeader, ButtonHeaderAccount, DivAncor, HeaderContainer } from './styles';

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
      <DivAncor>
        <p>Benefícios</p>
        <p>Conta digital</p>
        <p>Suporte</p>
        <p>Blog</p>
      </DivAncor>

      <div>
        <ButtonHeader>Entrar</ButtonHeader>
        <ButtonHeaderAccount>Abrir conta</ButtonHeaderAccount>
        <ButtonAccordion><List size={30} color='#000' weight="regular"/><div>

          </div></ButtonAccordion>
      </div>

      
    </HeaderContainer>
  );
}
