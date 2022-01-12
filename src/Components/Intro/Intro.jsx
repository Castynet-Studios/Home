import * as styled from "./Styles.Intro";
import Nav from "./Nav/Nav";

export default function Intro() {
  return (
    <>
      <styled.Wrapper data-testid="wrapper">
        <Nav />
        <styled.LogoText data-testid="castynet-studios">
          Castynet Studios
          <span className="empowering">Empowering Software</span>
        </styled.LogoText>
        <styled.WhatWeDo data-testid="what-we-do">
          we create elegant, functional web apps
        </styled.WhatWeDo>
        <styled.Description data-testid="description">
          Whether you are looking to put your boutique online or want a chat
          forum for your pals, the Castynet Studios will create your webapp on
          time and within your budget.
        </styled.Description>
        <styled.Objects>
          <div className="one"></div>
          <div className="two"></div>
          <div className="three"></div>
        </styled.Objects>
      </styled.Wrapper>
    </>
  );
}
