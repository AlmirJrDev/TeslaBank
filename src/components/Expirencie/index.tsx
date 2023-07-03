import { Container, DivButton, DivButtonBackground, DivButtonText, Logo } from "./styles";

import GreatLogo from "../../assets/greatlogo.svg"
import AppStore from "../../assets/logoappstorewhite.svg"
import AppleStore from "../../assets/logoapplewhite.svg"

export function Expirence() {
  return(

    <Container>
      <div>
        <h2>Uma nova experiência  <br />
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