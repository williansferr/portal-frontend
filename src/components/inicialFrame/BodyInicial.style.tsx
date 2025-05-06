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
} from "./styled";
import iconGestao from "../../assets/iconGestaoSeguranca.png";
import iconSuporte from "../../assets/iconSuporteTecnico02.png";
import iconRobotica from "../../assets/iconRoboticaFundoEscuro.png";

function BodyInicial() {
  interface Props {
    as?: keyof HTMLElementTagNameMap; //A interface map contém cada nome de tag HTML especificado e seu tipo de interface correspondente
    children: React.ReactNode;
    className?: string;
    [key: string]: any; // Permite passar outras props, incluindo eventos
  }

  const DynamicTag: React.FC<Props> = ({
    as: Element = "p",
    children,
    className,
    ...rest
  }) => {
    switch (Element) {
      case "p":
        return (
          <p className={className} {...rest}>
            {children}
          </p>
        );
      case "span":
        return (
          <span className={className} {...rest}>
            {children}
          </span>
        );
      
      // Adicione mais tags conforme necessário
      default:
        return (
          <ContainerCard className={className} {...rest}>
            {children}
          </ContainerCard>
        );
    }
  };

  interface MeuComponenteProps {
    defaultTag?: any;
    hoverTag?: any;
    children: React.ReactNode;
    className?: string;
  }
  // interface MeuComponenteProps {
  //   defaultTag?: keyof HTMLElementTagNameMap;
  //   hoverTag?: keyof HTMLElementTagNameMap;
  //   children: React.ReactNode;
  //   className?: string;
  // }

  const MeuComponenteInterativo: React.FC<MeuComponenteProps> = ({
    defaultTag = ContainerCard,
    hoverTag = ContainerCardHover,
    children,
    className,
  }) => {
    const [currentTag, setCurrentTag] = useState(hoverTag);
    // const [currentTag, setCurrentTag] = useState<keyof HTMLElementTagNameMap>(defaultTag);

    // const [valor, setValor] = useState(false); //test by Will

    const handleMouseEnter = () => {
      // console.log("entrou");
      console.log(document.getElementsByTagName("ContainerCardHover"));
      setCurrentTag(ContainerCardHover);
    };

    const handleMouseLeave = () => {
      // console.log("saiu");
      setCurrentTag(defaultTag);
    };

    return (
      <DynamicTag
        as={currentTag}
        className={className}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </DynamicTag>
    );
  };

  // const ExemploInterativo: React.FC = () => {
  //   return (
  //     <div>
  //       <MeuComponenteInterativo >
  //         Passe o mouse sobre este parágrafo para transformá-lo em um título!
  //       </MeuComponenteInterativo>
  //       <MeuComponenteInterativo
  //         defaultTag="span"
  //         hoverTag="div"
  //         className="destacado"
  //       >
  //         Passe o mouse sobre este span para transformá-lo em uma div com
  //         estilo.
  //       </MeuComponenteInterativo>
  //     </div>
  //   );
  // };

  return (
    <InicialFrame>
      <LabelTitulo>Selecione a Coordenação:</LabelTitulo>

      <Container>
        <a href="gestao.html">
          <MeuComponenteInterativo>
            <CardHover src={iconGestao} />
            Gestão de Sistemas
          </MeuComponenteInterativo>
        </a>
        {/* <a href="suporte.html" className={Card}> */}
        <a href="suporte.html">
          <MeuComponenteInterativo>
            <CardHover src={iconSuporte} />
            Suporte Técnico
          </MeuComponenteInterativo>
        </a>
        <a href="robotica.html">
          <MeuComponenteInterativo>
            <CardHover src={iconRobotica} />
            Adm Robótica
          </MeuComponenteInterativo>
        </a>
      </Container>
    </InicialFrame>
  );
}

export default BodyInicial;
