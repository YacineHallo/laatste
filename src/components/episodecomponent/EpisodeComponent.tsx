import "../../App.scss";
import { IEpisode } from "../../types/IndexTypes";
import { useNavigate } from "react-router-dom";
const EpisodeComponent = (results: IEpisode) => {
  const { id, name, episode } = results;
  const navigate = useNavigate();

  return (
    <article className="character" key={id}>
      <div
        className="border episode"
        onClick={() => navigate(`/episode/${id}`)}
      >
        <h3 className="character__header">Episode: {name}</h3>

        <article className="character-component">
          <ul>
            <li className="character-component__eigenschap hover">
              Episodenr: {episode}
            </li>
          </ul>
        </article>
      </div>
    </article>
  );
};

export default EpisodeComponent;
