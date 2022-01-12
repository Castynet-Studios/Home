import styled from "styled-components";

export const NavLg = styled.nav`
  height: 120px;
  margin: 0 0 50px 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 50px;
  max-width: 100vw;
  overflow: hidden;
`;

export const Links = styled.ul`
  display: flex;
  li {
    padding: 0 10px;
    margin: 0 20px;
    list-style: none;
    &:after {
      content: "";
      display: block;
      width: 0%;
      margin-left: -10px;
      padding: 0;
      height: 2px;
      transition: all 0.5s ease;
      background: var(--accentTwo);
    }
    &:hover:after {
      width: 100%;
      padding: 0 10px;
    }
  }
`;

export const Contact = styled.button`
  padding: 10px 40px;
  right: 80px;
  top: 56px;
  background: var(--accentOne);
  border-radius: 16px;
  border: none;
  box-shadow: var(--boxShadow);
`;
