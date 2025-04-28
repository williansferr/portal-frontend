import React from 'react';
import { Container, LabelTitulo, Card, ContainerCard, DivMain, CardHover, CardSpan } from './styled';
import iconGestao from '../../assets/iconGestao.png';
import iconRobotica from '../../assets/iconRobotica.png';
import iconSuporte from '../../assets/iconSuporte.png';



function BodyInicial() {
  return (
    <DivMain>
      <LabelTitulo>Selecione uma Coordenação:</LabelTitulo>

      <Container >
        <a href="gestao.html" className={CardHover}>
          <ContainerCard>
            <img src={iconGestao} alt="Gestão de Sistemas" width={60} height={60} />
            <CardSpan>Gestão de Sistemas</CardSpan>
          </ContainerCard>
        </a>

        <a href="suporte.html" className={CardHover}>
          <ContainerCard>
            <img src={iconRobotica} alt="Suporte Técnico" width={60} height={60} />
            <CardSpan>Suporte Técnico</CardSpan>
            
          </ContainerCard>
        </a>
        <a href="robotica.html" className={Card}>
          <ContainerCard>
            <img src={iconSuporte} alt="Adm Robótica" width={60} height={60} />
            <CardSpan>Adm Robótica</CardSpan>
            
          </ContainerCard>
        </a>
      </Container>

    </DivMain>
  );
}

export default BodyInicial;





