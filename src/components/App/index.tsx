import App from '../../assets/app.svg'

import Dollar from '../../assets/dollar.svg'
import Smile from '../../assets/smile.svg'
import Smartfone from '../../assets/smartfone.svg'

import { ArticleMain, ArticleMid, DivQuality, ParagraphQuality, SectionQuality, SubtitleApp, SubtitleQuality, TitleApp } from './styles'

export function AppView() {
    return(
        <ArticleMain>
            <div>
            <img src={App} alt="" />
            </div>
            <ArticleMid>
                <div><TitleApp>Abra sua conta gratuita!</TitleApp></div>
                <div><SubtitleApp> Envie e receba dinheiro de forma mais prática e rápida. Faça Pix,<br /> TEDs e transferências para todos os bancos sem pagar nada.</SubtitleApp></div>
                
                <SectionQuality>
                <DivQuality><img src={Dollar} alt="" /><div><SubtitleQuality>Seu dinheiro rendendo mais</SubtitleQuality><ParagraphQuality>Rendem mais que a poupança e você resgata quando quiser.</ParagraphQuality></div></DivQuality>
                <DivQuality><img src={Smartfone} alt="" /><div><SubtitleQuality>Conta digital 100% grátis</SubtitleQuality><ParagraphQuality>Transferências, boletos de depósito e outros serviços gratuitos.</ParagraphQuality></div></DivQuality>
                <DivQuality><img src={Smile} alt="" /><div><SubtitleQuality>Cartão sem anuidade</SubtitleQuality><ParagraphQuality>Conta digital com cartão de crédito sem anuidade e sem complicação.</ParagraphQuality></div></DivQuality>
                </SectionQuality>
            </ArticleMid>

        
        </ArticleMain>
    )
}