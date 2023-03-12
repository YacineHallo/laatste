import "../../App.scss";
import { ILocation } from "../../types/IndexTypes";
import { useNavigate } from "react-router-dom";

const LocatieComponent = (results: ILocation) => {
  const { id, type, name } = results;
  const navigate = useNavigate();

  return (
    <article className="character" key={id}>
      <div className="border" onClick={() => navigate(`/location/${id}`)}>
        <h3 className="character__header">Locatie: {name}</h3>

        <article className="character-component">
          <ul>
            <li className="character-component__eigenschap hover">
              Waar:{type}
            </li>
          </ul>
        </article>
      </div>
    </article>
  );
};

export default LocatieComponent;
