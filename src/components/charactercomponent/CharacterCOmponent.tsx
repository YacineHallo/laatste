import "../../App.scss";
import { ICharacter } from "../../types/IndexTypes";
import { useNavigate } from "react-router-dom";
import { CharacterStatusComponent } from "./characterstatuscomponent/CharacterStatusComponent";

const CharacterComponent = (results: ICharacter) => {
  const { id, image, name, status, species, gender } = results;
  const navigate = useNavigate();

  return (
    <article className="character" key={id}>
      <div className="border" onClick={() => navigate(`/characters/${id}`)}>
        <h3 className="character__header">{name}</h3>

        <img
          src={image}
          alt={`drawing of ${name}`}
          className="character__img"
        />

        <article className="character-component">
          <ul>
            <li className="character-component__eigenschap hover">
              Species: {species}
            </li>
            <CharacterStatusComponent status={status} />

            <li className="character-component__eigenschap hover">
              Gender: {gender}
            </li>
          </ul>
        </article>
      </div>
    </article>
  );
};

export default CharacterComponent;
