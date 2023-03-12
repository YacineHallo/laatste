import React, { useEffect, useState } from "react";
import { PageWrapper } from "../../components/pagewrapper/PageWrapper";
import CharacterComponent from "../../components/charactercomponent/CharacterCOmponent";
import { ICharacter, ICharactersResponse } from "../../types/IndexTypes";
import { PaginationButtons } from "../../components/paginationbuttons/PaginationButtons";
import { SearchComponent } from "../../components/searchcomponent/SearchComponent";
export const CharacterView = () => {
  const [character, setCharacter] = useState<ICharactersResponse>();
  const [loading, setLoading] = useState<boolean>(true);
  const [pageNumber, setPageNumber] = useState(1);
  const [search, setSearch] = useState("");

  const getCharacters = async (newPage?: number, search?: string) => {
    setLoading(true);
    try {
      const api = process.env.REACT_APP_API_URL; //deze .env plaats je in de mappenstructuur op rootniveau
      const res = await await fetch(
        `${api}/character/?page=${newPage}&name=${search}`
      );
      const resJson: ICharactersResponse = await res.json();
      console.log("res ", resJson);
      setCharacter(resJson);
    } catch (e) {
      console.log("oeps   ", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCharacters(pageNumber, search);
  }, [pageNumber, search]);

  useEffect(() => {
    document.title = "Characters | Rick & Morthy";
  }, []);

  return (
    <>
      <PaginationButtons
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        totalPages={character?.info.pages}
      />
      <div>
        <SearchComponent setSearch={setSearch} setPageNumber={setPageNumber} />
      </div>
      <PageWrapper isLoading={loading}>
        {character?.results.map(
          (perCharacter: JSX.IntrinsicAttributes & ICharacter) => (
            <CharacterComponent {...perCharacter} key={perCharacter.id} />
          )
        )}{" "}
      </PageWrapper>
    </>
  );
};
