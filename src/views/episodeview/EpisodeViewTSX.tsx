import React, { useEffect, useState } from "react";
import { PageWrapper } from "../../components/pagewrapper/PageWrapper";
import EpisodeComponent from "../../components/episodecomponent/EpisodeComponent";
import { IEpisode, IEpisodesResponse } from "../../types/IndexTypes";
import { PaginationButtons } from "../../components/paginationbuttons/PaginationButtons";

export const EpisodeView = () => {
  const [character, setCharacter] = useState<IEpisode[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [pageNumber, setPageNumber] = useState(1);

  const getCharacters = async (newPage?: number) => {
    setLoading(true);
    try {
      const api = process.env.REACT_APP_API_URL;
      const res = await await fetch(`${api}/episode/?page=${newPage}`);
      const resJson: IEpisodesResponse = await res.json();
      console.log("res ", resJson);
      //@ts-ignore
      setCharacter(resJson.results);
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
      />
      <PageWrapper isLoading={loading}>
        {character.map((perCharacter: JSX.IntrinsicAttributes & IEpisode) => (
          <EpisodeComponent {...perCharacter} key={perCharacter.id} />
        ))}{" "}
      </PageWrapper>
    </>
  );
};
