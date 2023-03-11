import { NavLink } from "react-router-dom";

export const Navigatie = () => {
  const links = document.querySelectorAll("navigation__link");

  links.forEach(link => {
    link.addEventListener("click", function () {
      links.forEach(link => {
        link.classList.remove("active");
      });
      this.classList.add("active");
    });
  });

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
            <NavLink to="/characters" className="navigation__link">
              Characters
            </NavLink>
          </li>
          <li className="navigation__item">
            <NavLink to="/episode" className="navigation__link">
              Episodes
            </NavLink>
          </li>
          <li className="navigation__item">
            <NavLink to="/locatie" className="navigation__link">
              Locaties
            </NavLink>
          </li>
        </ul>

        <ul className="navigation__contact">
          <li className="navigation__item">
            <NavLink to="/contact" className="navigation__link">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
