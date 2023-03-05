import { NavLink } from "react-router-dom";

//import { ZoekComponent } from "../zoekcomponent/ZoekComponent";
import { SearchBarToggle } from "@amsterdam/asc-ui";
import "../../App.scss";

export const Navigatie = () => {
  return (
    <header className="header">
      <NavLink to="/">
        <div className="header__logo">
          <img
            src="https://www.amsterdam.nl/views/core/images/logos/andreas.svg"
            className="logo__img"
            alt="Logo van de gemeente amsterdam"
          />

          <span className="logotexts">
            <span className="logotext">Gemeente</span>
            <span className="logotext">Amsterdam</span>
          </span>
        </div>
      </NavLink>
      <nav className="header__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <NavLink to="/" className="navigation__link">
              Characters
            </NavLink>
          </li>
          <li className="navigation__item">
            <NavLink to="#" className="navigation__link">
              Episodes
            </NavLink>
          </li>
          <li className="navigation__item">
            <NavLink to="/zoekresultaat" className="navigation__link">
              Location
            </NavLink>
          </li>
          <li className="navigation__item">
            <NavLink to="/contact" className="navigation__link">
              Contact
            </NavLink>
          </li>
        </ul>

        <ul className="navigation__zoek">
          <li className="navigation__item">
            <SearchBarToggle
              align="left"
              onOpen={function noRefCheck() {}}
              onSubmit={function noRefCheck() {}}
            />
          </li>
        </ul>
      </nav>
    </header>
  );
};
