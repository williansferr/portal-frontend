import React , { useState } from 'react';
import { Container, LabelTitulo, Card, ContainerCard, InicialFrame, CardHoverImg, CardHover, ContainerCardHover } from './styled';
import iconGestao from '../../assets/iconGestao.png';
import iconSuporte from '../../assets/iconSuporte.png';
import iconRobotica from '../../assets/iconRobotica.png';




function BodyInicial() {

  // ### OUTRA FORMA DE DINAMIZAR AS TAG'S 

  // interface Props {
  //   elementType: 'ContainerCardHover' | 'ContainerCard' | 'CardHover'; // Restringindo os tipos de tag permitidos
  //   children: React.ReactNode;
  //   className?: string;
  //   // Outras props
  // }
  
  // const ElementoDinamico: React.FC<Props> = ({ elementType, children, className, ...rest }) => {
  //   switch (elementType) {
  //     case 'ContainerCardHover':
  //       return <ContainerCardHover className={className} {...rest}>{children}</ContainerCardHover>;
  //     case 'ContainerCard':
  //       return <ContainerCard className={className} {...rest}>{children}</ContainerCard>;
  //     case 'CardHover':
  //     default:
  //       return <CardHover className={className} {...rest}>{children}</CardHover>;
  //   }
  // };
  
  // const OutroComponente: React.FC = () => {
  //   return (
  //     <div>
  //       <ElementoDinamico elementType="CardHover" className="img">Meu Título</ElementoDinamico>
  //       <ElementoDinamico elementType="ContainerCard" className="div">Este é um parágrafo.</ElementoDinamico>
  //       <ElementoDinamico elementType="ContainerCardHover" className="div">Isto está destacado.</ElementoDinamico>
  //     </div>
  //   );
  // };

  interface Props {
    as?: keyof HTMLElementTagNameMap; //A interface map contém cada nome de tag HTML especificado e seu tipo de interface correspondente
    children: React.ReactNode;
    className?: string;
    [key: string]: any; // Permite passar outras props, incluindo eventos
  }
  
  const DynamicTag: React.FC<Props> = ({ as: Element = 'ContainerCardHover', children, className, ...rest }) => {
    switch (Element) {
      case 'p':
        return <p className={className} {...rest}>{children}</p>;
      case 'span':
        return <span className={className} {...rest}>{children}</span>;
      case 'h1':
        return <h1 className={className} {...rest}>{children}</h1 >;
      case 'h2':
        return <h2 className={className} {...rest}>{children}</h2>;
      // Adicione mais tags conforme necessário
      default:
        return <ContainerCardHover className={className} {...rest}>{children}</ContainerCardHover>;
    }
  };
  
  interface MeuComponenteProps {
    defaultTag?: keyof HTMLElementTagNameMap;
    hoverTag?: keyof HTMLElementTagNameMap;
    children: React.ReactNode;
    className?: string;
  }
  
  const MeuComponenteInterativo: React.FC<MeuComponenteProps> = ({
    defaultTag = 'div',
    hoverTag = 'span',
    children,
    className,
  }) => {
    const [currentTag, setCurrentTag] = useState<keyof HTMLElementTagNameMap>(defaultTag);
    const [valor, setValor] = useState(false); //test
  
    const handleMouseEnter = () => {
      setCurrentTag(hoverTag);
    };
  
    const handleMouseLeave = () => {
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
  
  const ExemploInterativo: React.FC = () => {
    return (
      <div>
        <MeuComponenteInterativo defaultTag="p" hoverTag="h1">
          Passe o mouse sobre este parágrafo para transformá-lo em um título!
        </MeuComponenteInterativo>
        <MeuComponenteInterativo defaultTag="span" hoverTag="div" className="destacado">
          Passe o mouse sobre este span para transformá-lo em uma div com estilo.
        </MeuComponenteInterativo>
      </div>
    );
  };



  return (
    <InicialFrame>
      <LabelTitulo>Selecione uma Coordenação:</LabelTitulo>

      <Container >
        <a href="gestao.html" className={Card}>
          <ContainerCard>Gestão de Sistemas
            <CardHover src={iconGestao} />
          </ContainerCard>
        </a>
        <a href="suporte.html" className={Card}>
          <ContainerCard>
            Suporte Técnico
            <CardHover src={iconSuporte} />
          </ContainerCard>
        </a>
        <a href="robotica.html" className={Card}>
          <ContainerCard>
            Adm Robótica
            <CardHover src={iconRobotica} />
          </ContainerCard>
        </a>
      </Container>

    </InicialFrame>
  );
}

export default BodyInicial;





