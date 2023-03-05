import "../../App.scss";
import { ILocation } from "../../types/IndexTypes";
import { useNavigate } from "react-router-dom";
//import { CharacterStatusComponent } from "./characterstatuscomponent/CharacterStatusComponent";

const LocatieComponent = (results: ILocation) => {
  const { id, type, name, dimension, created } = results;
  const navigate = useNavigate();

  return (
    <div className="border" onClick={() => navigate(`/location/${id}`)}>
      <article className="character" key={id}>
        <h3 className="character__header">{name}</h3>

        {/* <img
          src={image}
          alt={`drawing of ${name}`}
          className="character__img"
        /> */}

        <h4 className="character__header">{type}</h4>

        <article className="character-component">
          <ul>
            <li className="character-component__eigenschap hover">
              Created: {created}
            </li>

            <li className="character-component__eigenschap hover">
              Dimension: {dimension}
            </li>
          </ul>
        </article>
      </article>
    </div>
  );
};

export default LocatieComponent;
