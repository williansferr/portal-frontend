import styled from "styled-components";

// *{
export const BoxSizing = styled.div`
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    `

// body
export const InicialFrame = styled.div`

      font-family: 'Segoe UI', sans-serif;
      min-height: 100vh;
      background-color: #0d0d0d;
      color: #e0e0e0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 40px 20px;
    `

// .titulo-label 
export const LabelTitulo = styled.label`
      background-color: #1e1e1e;
      padding: 15px 30px;
      border-radius: 15px;
      font-size: 1.8em;
      font-weight: 600;
      color: #fff;
      border: 2px solid #555;
      box-shadow: 0 4px 12px rgba(255, 255, 255, 0.05);
      margin-bottom: 40px;
      text-align: center;
    `

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
    `


// .card 
export const ContainerCard = styled.div`
      background: linear-gradient(to bottom, #1f1f1f, #2c2c2c);
      width: 200px;
      height: 300px;
      border-radius: 20px;
      text-align: center;
      padding: 20px;
      color: white;
      transition: all 0.4s ease;
      border: 1px solid transparent;
      text-decoration: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    `

// .card:hover - - MOVIMENTA O CONTAINER DEIXANDO ELE MAIOR E COM SOBRA
export const ContainerCardHover = styled.div`
      transform: scale(1.07);
      box-shadow: 0 0 25px #ffffff20;
      border-color: #ffffff44;
    `

// .card img
export const CardHover = styled.img`
      width: 60px;
      height: 60px;
      margin-bottom: 15px;
      transition: transform 0.3s;
    `



// .card:hover img - REALIZA UMA ROTAÇÃO DE APENAS 10 GRAUS NOS ICONES
export const CardHoverImg = styled.div`
      transform: rotate(10deg) scale(1.1);
    `

// .card span
export const CardSpan = styled.div`
      font-size: 1.1em;
      font-weight: bold;
      background-color: red;
    `

//   .card {
export const Card = styled.div`
        width: 90%;
        max-width: 300px;
      `
