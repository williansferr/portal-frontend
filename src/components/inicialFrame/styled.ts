import styled from "styled-components";

// *{
export const BoxSizing = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
`;

// body
export const InicialFrame = styled.div`
  font-family: "Segoe UI", sans-serif;
  min-height: 90vh;
  border: 30px;
  background-color: rgb(231, 252, 251);
  /* background-color:rgb(54, 180, 174); */
  /* color: #e0e0e0; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
`;

export const LabelCoordenacao = styled.label`
  padding: 15px 30px;
  font-size: 1em;
  font-weight: 600;
`;

export const DivCentralize = styled.div`
  font-family: "Segoe UI", sans-serif;
  min-height: 50vh;
  background-color: #00984b;
  color: #e0e0e0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 55px 40px;
  border-radius: 20px;
`;

// .titulo-label
export const LabelTitulo = styled.label`
  background-color: #0072bb;
  padding: 15px 30px;
  /* border-radius: 15px; */
  font-size: 1.8em;
  font-weight: 600;
  color: #fff;
  /* border: 1.5px solid #555; */
  box-shadow: 0 4px 12px rgba(255, 255, 255, 0.05);
  margin-bottom: 40px;
  text-align: center;
`;

// .container
export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;

  @media (max-width: 600px) {
    .container {
      flex-direction: column;
      align-items: center;
    }
  }
`;

// .card
export const ContainerCard = styled.div`
  background: #a5cda6;
  background-color: rgb(214, 243, 242);
  width: 200px;
  height: 300px;
  border-radius: 20px;
  text-align: center;
  padding: 20px;
  color: black;
  transition: all 0.4s ease;
  border: 1px solid transparent;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: scale(1.07);
    box-shadow: 0 0 25pxrgba(281, 200, 200, 2.7);
    border-color: #ffffff44;
    transition: all 0.4s ease;

    /* $CardHover}} {    
    transform: rotate(10deg) scale(1.1);
    }  */
    
    
  }
`;

// .card:hover - - MOVIMENTA O CONTAINER DEIXANDO ELE MAIOR E COM SOBRA
export const ContainerCardHover = styled.div`
  transform: scale(1.07);
  box-shadow: 0 0 25px #ffffff20;
  border-color: #ffffff44;
  transition: all 0.4s ease;
`;

// .card img
export const CardHover = styled.img`
  // MOVIMENTA A IMAGEM
  width: 80px;
  height: 80px;
  margin-bottom: 15px;
  transition: transform 0.3s;
 &:hover {
    transform: rotate(10deg) scale(1.1);
  }
`;

export const LogParanaSEED = styled.img`
  width: 450px;
  margin-top: auto;
  height: 200px;
  margin-bottom: 15px;
  transition: transform 0.3s;
  
`;

// .card:hover img - REALIZA UMA ROTAÇÃO DE APENAS 10 GRAUS NOS ICONES
export const CardHoverImg = styled.div`
  transform: rotate(10deg) scale(1.1);
`;

// .card span
export const CardSpan = styled.div`
  font-size: 1.1em;
  font-weight: bold;
  background-color: red;
`;

//   .card {
export const Card = styled.div`
  width: 90%;
  max-width: 300px;
`;
