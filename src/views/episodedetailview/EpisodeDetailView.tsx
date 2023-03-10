import { IEpisode } from "../../types/IndexTypes";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
//import { PageWrapper } from "../../components/pagewrapper/PageWrapper";
import { useNavigate } from "react-router-dom";
import { PageWrappernietOverzicht } from "../../components/pagewrapper/PageWrapperNietOverzicht";
//import CharacterComponent from "../../components/charactercomponent/CharacterCOmponent";
import "../../App.scss";
//import CharacterDetailComponent from "../../components/characterdetailcomponent/CharacterDetailComponent";

export const EpisodeDetailView = (results: IEpisode) => {
  let { id } = useParams();
  const [loading, setLoading] = useState<boolean>(true);
  const [episode, setEpisode] = useState<IEpisode>();
  const navigate = useNavigate();
  //const [character, setCharacter] = useState<ICharactersResponse>();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getEpisode = async () => {
    setLoading(true);
    try {
      const api = process.env.REACT_APP_API_URL; //deze .env plaats je in de mappenstructuur op rootniveau
      const res = await fetch(`${api}/episode/${id}`);
      const resJson: IEpisode = await res.json();
      console.log("res ", resJson);

      setEpisode(resJson);
    } catch (e) {
      console.log("oeps   ", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getEpisode();
  }, []);

  return (
    <PageWrappernietOverzicht isLoading={loading}>
      <div className="container">
        <div className="detail">
          <h1 className="episode-detail__header">{episode?.name}</h1>
          {episode?.characters.map(x => {
            return (
              <ul>
                <li className="episode-detail__component">{x}</li>;
              </ul>
            );
          })}
        </div>
      </div>
    </PageWrappernietOverzicht>
  );
};
