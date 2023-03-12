import React, { useEffect, useState } from "react";
import { PageWrapper } from "../../components/pagewrapper/PageWrapper";
import EpisodeComponent from "../../components/episodecomponent/EpisodeComponent";
import { IEpisode, IEpisodesResponse } from "../../types/IndexTypes";
import { PaginationButtons } from "../../components/paginationbuttons/PaginationButtons";
import { SearchComponent } from "../../components/searchcomponent/SearchComponent";
export const EpisodeView = () => {
  const [episode, setEpisode] = useState<IEpisode[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [pageNumber, setPageNumber] = useState(1);
  const [search, setSearch] = useState("");

  const getEpisodes = async (newPage?: number, search?: string) => {
    setLoading(true);
    try {
      const api = process.env.REACT_APP_API_URL;
      setLoading(false);
      const res = await await fetch(
        `${api}/episode/?page=${newPage}&name=${search}`
      );
      const resJson: IEpisodesResponse = await res.json();
      console.log("res ", resJson);
      //@ts-ignore
      setEpisode(resJson.results);
    } catch (error) {
      console.log("oeps   ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getEpisodes(pageNumber, search);
  }, [pageNumber, search]);
  useEffect(() => {
    document.title = "Episodes | Rick & Morthy";
  }, []);
  return (
    <>
      <PaginationButtons
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
      <div>
        <SearchComponent setSearch={setSearch} setPageNumber={setPageNumber} />
      </div>
      <PageWrapper isLoading={loading}>
        {episode.map((perEpisode: JSX.IntrinsicAttributes & IEpisode) => (
          <EpisodeComponent {...perEpisode} key={perEpisode.id} />
        ))}{" "}
      </PageWrapper>
    </>
  );
};
