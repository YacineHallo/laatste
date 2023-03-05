import React from "react";
import { NavLink } from "react-router-dom";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import "../../App.scss";
//@ts-ignore
export const SearchComponent = ({ setSearch, setPageNumber }) => {
  return (
    <form action="">
      <input
        onChange={e => {
          setPageNumber(1);
          setSearch(e.target.value);
        }}
        placeholder="Zoek Characters op naam"
        type="text"
        className="input"
      />
      <NavLink to="/zoekresultaat" className="navigation__link">
        <button
          onClick={e => {
            e.preventDefault();
          }}
          className="btn"
        >
          Search
        </button>
      </NavLink>
    </form>
  );
};
