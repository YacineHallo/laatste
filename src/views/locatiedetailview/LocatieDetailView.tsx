import { ILocation } from "../../types/IndexTypes";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
//import { PageWrapper } from "../../components/pagewrapper/PageWrapper";
import { useNavigate } from "react-router-dom";
import { PageWrappernietOverzicht } from "../../components/pagewrapper/PageWrapperNietOverzicht";
//import CharacterComponent from "../../components/charactercomponent/CharacterCOmponent";
import "../../App.scss";

//import CharacterDetailComponent from "../../components/characterdetailcomponent/CharacterDetailComponent";

export const LocatieDetailView = (results: ILocation) => {
  let { id } = useParams();
  const [loading, setLoading] = useState<boolean>(true);
  const [locatie, setLocatie] = useState<ILocation>();
  //const navigate = useNavigate();
  //const [character, setCharacter] = useState<ICharactersResponse>();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getLocatie = async () => {
    setLoading(true);
    try {
      const api = process.env.REACT_APP_API_URL; //deze .env plaats je in de mappenstructuur op rootniveau
      const res = await fetch(`${api}/location/${id}`);
      const resJson: ILocation = await res.json();
      console.log("res ", resJson);

      setLocatie(resJson);
    } catch (e) {
      console.log("oeps   ", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getLocatie();
  }, []);

  return (
    <PageWrappernietOverzicht isLoading={loading}>
      <div className="container">
        <div className="detail">
          <h1 className="episode-detail__header">{locatie?.name}</h1>
          {locatie?.residents.map(x => {
            //console.log(x);
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
