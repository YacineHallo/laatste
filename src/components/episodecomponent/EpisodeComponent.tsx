import "../../App.scss";
import { IEpisode } from "../../types/IndexTypes";
import { useNavigate } from "react-router-dom";
//import { CharacterStatusComponent } from "./characterstatuscomponent/CharacterStatusComponent";

const EpisodeComponent = (results: IEpisode) => {
  const { id, air_date, name, episode, created } = results;
  const navigate = useNavigate();

  return (
    <div className="border" onClick={() => navigate(`/episode/${id}`)}>
      <article className="character" key={id}>
        <h3 className="character__header">Episode: {name}</h3>

        {/* <img
          src={image}
          alt={`drawing of ${name}`}
          className="character__img"
        /> */}

        <article className="character-component">
          <ul>
            <li className="character-component__eigenschap hover">
              Episodenr: {episode}
            </li>
          </ul>
        </article>
      </article>
    </div>
  );
};

export default EpisodeComponent;
