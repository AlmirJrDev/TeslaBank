import { DivCenter } from "./styles";

import Crd from "../../assets/cards.svg"

export function Cards() {
  return(
    <DivCenter>
      <div>
      <h6>#DEPOIMENTOS</h6>
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