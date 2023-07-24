import { ButtonContainer, ContainerCards, ContainerItens, ContainerMain, PMain, SpanList, SpanList01, SpanMain } from "./styles";

import React, { useState, useEffect } from 'react';
import Cards from '../../assets/card.svg'
import LogoApple from '../../assets/logoapple.svg'
import LogoAppStore from '../../assets/logoappstore.svg'

import { Check, ArrowRight   } from "@phosphor-icons/react";

export function Container() {

    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
      setTimeout(() => {
        setShowContent(true);
      }, 100);
    }, []); 
    return (
        <ContainerMain style={{ opacity: showContent ? '1' : '0', transition: 'opacity 1s ease-in-out' }}>
            <ContainerItens>
                <div>
                  <h1> TeslaBank 
                    <br /> seu banco digital.</h1>      
                </div>
                <PMain>
                <p>Com TeslaBank, você pode realizar transferências <br /> bancárias com zero taxa e pagar suas contas.</p>
                </PMain>
                <SpanMain>
                <SpanList>
                    <span><Check size={20}  color='#EB3850' />Transferência instantânea</span>
                    <span><Check size={20}  color='#EB3850' />Pagamentos em todo o mundo</span>
                </SpanList>
                <SpanList01>
                    <span><Check size={20}  color='#EB3850' />Sem taxas absurdas</span>
                    <span><Check size={20}  color='#EB3850' />100% pensando em você</span>
                </SpanList01>
                </SpanMain>
          
                <ButtonContainer>
                <button>Abrir uma conta <ArrowRight size={24} weight="bold" /></button>
                 <img src={LogoApple} alt="" />
                    <img src={LogoAppStore} alt="" />
                </ButtonContainer>
            </ContainerItens>
            <ContainerCards>
                <img src={Cards} alt="" />
            </ContainerCards>
        </ContainerMain>
    )
}