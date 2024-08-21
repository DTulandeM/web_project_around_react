import logo from "../images/logo_aroundUSA.svg";

function Header() {
  return (
    <header className="header">
      <img
        src={logo}
        alt="Logo de Alredero de EE.UU."
        className="header__logo"
        id="header-logo"
      />
    </header>
  );
}
export default Header;
