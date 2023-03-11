import React from "react";
import { NavLink } from "react-router-dom";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import "../../App.scss";
//@ts-ignore
export const SearchComponent = ({ setSearch, setPageNumber }) => {
  return (
    <form action="" className="container-zoek">
      <input
        onChange={e => {
          setPageNumber(1);
          setSearch(e.target.value);
        }}
        placeholder="Zoek op naam"
        type="text"
        className="input"
      />
      <NavLink to="/zoekresultaat" className="navigation__link">
        <button
          onClick={e => {
            e.preventDefault();
          }}
          className="button-search"
        >
          Zoek
        </button>
      </NavLink>
      <NavLink to="/" className="navigation__link">
        <button type="reset" className="button-search">
          Leeg
        </button>
      </NavLink>

      {/* <button
        type="reset"
        onChange={e => {
          setPageNumber(1);
        }}
      >
        clear
      </button> */}
    </form>
  );
};
