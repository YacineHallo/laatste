//import "./CharacterComponent.scss";
//import hart from "./hartje.jpg";
import "../../App.scss";
import { ICharacter } from "../../types/IndexTypes";
import { useNavigate } from "react-router-dom";

const CharacterComponent = (results: ICharacter) => {
  const { id, image, name, status, species, gender } = results;
  const navigate = useNavigate();

  return (
    <div className="border" onClick={() => navigate(`/characters/${id}`)}>
      <article className="character" key={id}>
        <h3 className="character__header">{name}</h3>

        <img
          src={image}
          alt={`drawing of ${name}`}
          className="character__img"
          width="300"
          height="300"
        />

        <article className="character-component">
          <ul>
            <li className="character-component__eigenschap hover">
              Species: {species}
            </li>
            <li className="character-component__eigenschap hover">
              Status: {status}
            </li>
            <li className="character-component__eigenschap hover">
              Gender: {gender}
            </li>
          </ul>
        </article>
      </article>
    </div>
  );
};

export default CharacterComponent;
