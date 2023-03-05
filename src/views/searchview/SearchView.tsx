import React, { useEffect, useState } from "react";
import { PageWrapper } from "../../components/pagewrapper/PageWrapper";
import CharacterComponent from "../../components/charactercomponent/CharacterCOmponent";
import { ICharacter, ICharactersResponse } from "../../types/IndexTypes";
import { PaginationButtons } from "../../components/paginationbuttons/PaginationButtons";
import { SearchComponent } from "../../components/searchcomponent/SearchComponent";
export const SearchView = () => {
  const [character, setCharacter] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [pageNumber, setPageNumber] = useState(1);
  const [search, setSearch] = useState("");

  const getCharacters = async (newPage?: number, search?: string) => {
    setLoading(true);
    try {
      const api = process.env.REACT_APP_API_URL; //deze .env plaats je in de mappenstructuur op rootniveau
      const res = await await fetch(`${api}/?page=${newPage}&name=${search}`);
      const resJson: ICharactersResponse = await res.json();
      console.log("res ", resJson);
      //@ts-ignore
      setCharacter(resJson.results);
    } catch (e) {
      console.log("oeps   ", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCharacters(pageNumber, search);
  }, [pageNumber, search]);
  return (
    <>
      <PaginationButtons
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
      <div className="container__main">
        <SearchComponent setSearch={setSearch} setPageNumber={setPageNumber} />
      </div>
      <PageWrapper isLoading={loading}>
        {character.map((perCharacter: JSX.IntrinsicAttributes & ICharacter) => (
          <CharacterComponent {...perCharacter} key={perCharacter.id} />
        ))}{" "}
      </PageWrapper>
    </>
  );
};
//
