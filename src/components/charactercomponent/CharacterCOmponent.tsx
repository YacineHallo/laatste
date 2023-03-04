//import "./CharacterComponent.scss";
//import hart from "./hartje.jpg";
import "../../App.scss";
import { ICharacter } from "../../types/IndexTypes";
import { useNavigate } from "react-router-dom";
import { CharacterStatusComponent } from "./characterstatuscomponent/CharacterStatusComponent";

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
        />

        <article className="character-component">
          <ul>
            <li className="character-component__eigenschap hover">
              Species: {species}
            </li>
            <CharacterStatusComponent status={status} />
            {/* {(() => {
              if (status === "Dead") {
                return (
                  <li className="character-component__eigenschap__dead hover">
                    Status: {status}
                  </li>
                );
              } else if (status === "Alive") {
                return (
                  <li className="character-component__eigenschap__alive hover ">
                    Status: {status}
                  </li>
                );
              } else {
                return (
                  <li className="character-component__eigenschap__unknown hover">
                    Status: {status}
                  </li>
                );
              }
            })()} */}
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
