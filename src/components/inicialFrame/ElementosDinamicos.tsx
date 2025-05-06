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
export default {};