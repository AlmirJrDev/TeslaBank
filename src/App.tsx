import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { Container } from "./components/Container";
import { AppView } from "./components/App";
import { Benefits } from "./components/Benefits";
import { Depoiments } from "./components/Depoiments";
import { Cards } from "./components/Cards";
import { Expirence } from "./components/Expirencie";
import { Blog } from "./components/Blog";
import { FaqComponent } from "./components/FAQ/components";
import { Main } from "./components/Main/main";

export function App(){
  return(
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
      
 
      <Header/>
      <Main/>
      <FaqComponent/>
    </ThemeProvider>
  )
}