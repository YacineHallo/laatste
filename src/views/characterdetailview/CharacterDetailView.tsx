import { ICharacter } from "../../types/IndexTypes";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { PageWrappernietOverzicht } from "../../components/pagewrapper/PageWrapperNietOverzicht";
import { CharacterStatusComponent } from "../../components/charactercomponent/characterstatuscomponent/CharacterStatusComponent";
import "../../App.scss";
//import CharacterDetailComponent from "../../components/characterdetailcomponent/CharacterDetailComponent";

export const CharacterDetailView = (results: ICharacter) => {
  let { id } = useParams();
  const [loading, setLoading] = useState<boolean>(true);
  const [character, setCharacter] = useState<ICharacter>();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getCharacter = async () => {
    setLoading(true);
    try {
      const api = process.env.REACT_APP_API_URL; //deze .env plaats je in de mappenstructuur op rootniveau
      const res = await fetch(`${api}/character/${id}`);
      const resJson: ICharacter = await res.json();
      console.log("res ", resJson);

      setCharacter(resJson);
    } catch (e) {
      console.log("oeps   ", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCharacter();
  }, []);
  return (
    <PageWrappernietOverzicht isLoading={loading}>
      {character && (
        <div className="container">
          <div className="detail-character">
            <img
              src={character.image}
              alt=""
              className="detail-character__img"
            />
            <div>
              <div className="character-detail">
                <h1 className="character-detail__header">{character.name}</h1>
                {/* <img
              src={character.image}
              alt={`drawing of ${character.name}`}
              className="character-detail__img"
              width="600"
              height="600"
            /> */}
                <ul className="character-detail__component">
                  <CharacterStatusComponent status={character.status} />
                  <li> Species: {character.species}</li>
                  <li> Gender: {character.gender}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </PageWrappernietOverzicht>
  );
};
