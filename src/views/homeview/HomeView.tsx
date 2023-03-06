import React, { useEffect, useState } from "react";
import { PageWrapper } from "../../components/pagewrapper/PageWrapper";
import CharacterComponent from "../../components/charactercomponent/CharacterCOmponent";
import { ICharacter, ICharactersResponse, IInfo } from "../../types/IndexTypes";
import { PaginationButtons } from "../../components/paginationbuttons/PaginationButtons";

export const HomeView = () => {
  const [character, setCharacter] = useState<ICharactersResponse>();
  const [loading, setLoading] = useState<boolean>(true);
  const [pageNumber, setPageNumber] = useState(1);

  const getCharacters = async (newPage?: number) => {
    setLoading(true);
    try {
      const api = process.env.REACT_APP_API_URL; //deze .env plaats je in de mappenstructuur op rootniveau
      const res = await await fetch(`${api}/character/?page=${newPage}`);
      const resJson: ICharactersResponse = await res.json();
      console.log("res ", resJson);
      setCharacter(resJson);
    } catch (error) {
      console.log("oeps   ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCharacters(pageNumber);
  }, [pageNumber]);
  return (
    <>
      <PaginationButtons
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        totalPages={character?.info.pages}
      />
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
