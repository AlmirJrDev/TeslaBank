import App from '../../assets/app.svg'
import React, { useEffect, useState, useRef } from 'react';
import { scroller } from 'react-scroll';

import Dollar from '../../assets/dollar.svg'
import Smile from '../../assets/smile.svg'
import Smartfone from '../../assets/smartfone.svg'

import { ArticleMain, ArticleMid, DivQuality, ImgApp, ParagraphQuality, SectionQuality, SubtitleApp, SubtitleQuality, TitleApp } from './styles'

export function AppView() {
    const [isVisible, setIsVisible] = useState(false);
    const ArticleMainRef = useRef<HTMLElement>(null);
  
    useEffect(() => {
      const handleScroll = () => {
        const elementTop = ArticleMainRef.current?.getBoundingClientRect().top ?? 0;
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
        <ArticleMain ref={ArticleMainRef} isVisible={isVisible}>
            <ImgApp>
            <img src={App} alt="" />
            </ImgApp>
            <ArticleMid>
                <div><TitleApp>Abra sua conta gratuita!</TitleApp></div>
                <div><SubtitleApp> Envie e receba dinheiro de forma mais prática e rápida. Faça Pix,<br /> TEDs e transferências para todos os bancos sem pagar nada.</SubtitleApp></div>
                
                <SectionQuality>
                <DivQuality><img src={Dollar} alt="" /><div><SubtitleQuality>Seu dinheiro rendendo mais</SubtitleQuality><ParagraphQuality>Rendem mais que a poupança e você resgata quando quiser.</ParagraphQuality></div></DivQuality>
                <DivQuality><img src={Smartfone} alt="" /><div><SubtitleQuality>Conta digital 100% grátis</SubtitleQuality><ParagraphQuality>Transferências, boletos de depósito e outros serviços gratuitos.</ParagraphQuality></div></DivQuality>
                <DivQuality><img src={Smile} alt="" /><div  id="beneficios"  ><SubtitleQuality>Cartão sem anuidade</SubtitleQuality><ParagraphQuality>Conta digital com cartão de crédito sem anuidade e sem complicação.</ParagraphQuality></div></DivQuality>
                </SectionQuality>
            </ArticleMid >


        </ArticleMain>
    )
}