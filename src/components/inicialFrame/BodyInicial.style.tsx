import React, { CSSProperties, useState } from "react";
import { Children } from "react";
import {
  Container,
  LabelTitulo,
  Card,
  ContainerCard,
  InicialFrame,
  CardHoverImg,
  CardHover,
  ContainerCardHover,
  CardSpan,
  DivCentralize,
  LabelCoordenacao,
  LogParanaSEED,
} from "./styled";
import iconGestao from "../../assets/iconGestaoSeguranca.png";
import iconSuporte from "../../assets/iconSuporteTecnico02.png";
import iconRobotica from "../../assets/iconRoboticaFundoEscuro.png";
import LogoSecretariaPR from "../../assets/iconGovEstadualSEED.png";

function BodyInicial() {
  function selectElement() {
    const effect = ContainerCardHover;
    console.log("Entrou!");
    console.log(effect);
    return effect;
  }

  const estiloInicial = ContainerCard;
  const [enterHover, setEnterHover] = useState(false);

  return (
    <InicialFrame>
      <LogParanaSEED src={LogoSecretariaPR} />
      <DivCentralize>
        <LabelTitulo>Selecione a Coordenação:</LabelTitulo>

        <Container>
          <a href="gestao.html">
            <ContainerCard>
              <CardHover src={iconGestao} />
              <LabelCoordenacao>Gestão de Sistemas</LabelCoordenacao>
            </ContainerCard>
          </a>
          {/* <a href="suporte.html" className={Card}> */}
          <a href="suporte.html">
            <ContainerCard>
              <CardHover src={iconSuporte} />
              <LabelCoordenacao>Suporte Técnico</LabelCoordenacao>
            </ContainerCard>
          </a>
          <a href="robotica.html">
            <ContainerCard>
              <CardHover src={iconRobotica} />
              <LabelCoordenacao>Robótica</LabelCoordenacao>
            </ContainerCard>
          </a>
        </Container>
      </DivCentralize>
    </InicialFrame>
  );
}

export default BodyInicial;
