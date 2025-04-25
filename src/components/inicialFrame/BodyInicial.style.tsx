import React from 'react';
import { Container, LabelTitulo, Card, ContainerCard, Body } from './styled';


function BodyInicial() {
  return(
  <Body>
    <LabelTitulo>Selecione uma Coordenação:</LabelTitulo>

    <Container >
      <a href="gestao.html" className={Card}>
        <img src="icon_gestao.png" alt="Gestão de Sistemas" />
        <ContainerCard>Gestão de Sistemas</ContainerCard>
      </a>
      <a href="suporte.html" className={Card}>
        <img src="./assets/icon_suporte.png" alt="Suporte Técnico" />
        <ContainerCard>Suporte Técnico</ContainerCard>
      </a>
      <a href="robotica.html" className={Card}>
        <img src="icon_robotica.png" alt="Adm Robótica" />
        <ContainerCard>Adm Robótica</ContainerCard>
      </a>
    </Container>

  </Body>
  );
}

export default BodyInicial;





