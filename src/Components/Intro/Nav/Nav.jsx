import * as styled from "./Styles.Nav";

export default function Nav() {
  return (
    <>
      <NavLg />
      <NavSm />
    </>
  );
}

const NavLg = () => {
  return (
    <styled.NavLg data-testid="nav">
      <styled.Links>
        <li>
          <a href="/">Projects</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Shop</a>
        </li>
        <li>
          <a href="/">Blog</a>
        </li>
      </styled.Links>
      <styled.Contact>Contact</styled.Contact>
    </styled.NavLg>
  );
};

const NavSm = () => {
  return (
    <>
      <p></p>
    </>
  );
};
