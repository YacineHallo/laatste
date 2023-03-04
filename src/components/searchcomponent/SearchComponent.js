import React from "react";
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
        placeholder="Search for Characters"
        type="text"
        className="input"
      />
      <button
        onClick={e => {
          e.preventDefault();
        }}
        className="btn"
      >
        Search
      </button>
    </form>
  );
};
