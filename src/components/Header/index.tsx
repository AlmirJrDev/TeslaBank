import Logo from '../../assets/logo.svg'
import { ButtonHeader, ButtonHeaderAccount, HeaderContainer } from './styles'
export function Header(){
    return(
        <HeaderContainer>
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
            
        </HeaderContainer>
    )
}