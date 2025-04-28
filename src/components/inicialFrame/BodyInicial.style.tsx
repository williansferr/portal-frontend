import React from 'react';
import { Container, LabelTitulo, Card, ContainerCard, Body, CardHover } from './styled';
// import {iconGestao} from '.../assets/iconGestao.png';
// import {iconRobotica} from '.../assets/iconRobotica.png';
// import {iconSuporte} from '.../assets/iconSuporte.png';


function BodyInicial() {
  return(
  <Body>
    <LabelTitulo>Selecione uma Coordenação:</LabelTitulo>

    <Container >
      <a href="gestao.html" className={Card}>
        <img src="iconGestao.png" alt="Gestão de Sistemas" />
        <ContainerCard>Gestão de Sistemas</ContainerCard>
      </a>
      <a href="suporte.html" className={CardHover}>
        <img src="iconSuporte.png" alt="Suporte Técnico" />
        <ContainerCard>Suporte Técnico</ContainerCard>
      </a>
      <a href="robotica.html" className={Card}>
        <img src="iconRobotica.png" alt="Adm Robótica" />
        <ContainerCard>Adm Robótica</ContainerCard>
      </a>
    </Container>

  </Body>
  );
}

export default BodyInicial;





