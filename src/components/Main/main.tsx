import { AppView } from "../App";
import { Benefits } from "../Benefits";
import { Blog } from "../Blog";
import { Cards } from "../Cards";
import { Container } from "../Container";
import { Depoiments } from "../Depoiments";
import { Expirence } from "../Expirencie";
import { FaqComponent } from "../FAQ/components";
import { DivMain } from "./styles";

export function Main() {
  return(
    <DivMain>
      <Container/>
      <AppView />
      <Benefits />
      <Depoiments/>
      <Cards/>
      <Expirence/>
      <Blog />
    </DivMain>
  )
}