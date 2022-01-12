import styled from "styled-components";

export const Wrapper = styled.div`
  text-align: center;
`;

export const LogoText = styled.h1`
  margin: 0 0 100px 0;

  .empowering {
    font-size: 0.6em;
    line-height: normal;
    display: block;
  }

  @media (max-width: 426px) {
    font-size: 50px;
    line-height: 60px;
    margin: -30px 0 30px;
  }
`;

export const WhatWeDo = styled.h3`
  margin: 0 0 20px 0;
`;

export const Description = styled.p`
  text-align: justify;
  max-width: 500px;
  margin: 0 auto;
`;

export const Objects = styled.div`
  div {
    position: absolute;
    background: var(--whiteTwo);
    box-shadow: var(--boxShadow);
    border-radius: var(--radius);
  }

  .one {
    left: 10vw;
    top: 70vh;
    height: 8vw;
    width: 8vw;
  }

  .two {
    left: 74vw;
    top: 15vh;
    height: 5vw;
    width: 5vw;
  }

  .three {
    top: 80vh;
    left: 80vw;
    height: 8vw;
    width: 8vw;
    background-color: var(--darkTwo);
  }
`;
