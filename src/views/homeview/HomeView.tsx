import frontend from "../../assets/images/FotoBeginFrontend.png";
import ikke from "../../assets/images/ikke.png";
import george4u from "../../assets/images/George4u.png";
import javajack from "../../assets/images/JavaJack.png";
import micha from "../../assets/images/Micha.png";
import bettina from "../../assets/images/bettina.png";
import lesley from "../../assets/images/Lesley.png";
import boas from "../../assets/images/Boas.png";
import salim from "../../assets/images/Salim.png";
import luisa from "../../assets/images/Luisa.png";
import bosko from "../../assets/images/Bosko.png";
export const HomeView = () => {
  return (
    <>
      <div className="main home-container">
        <h1 className="home-container__header grid-header">
          Rick and Morty side als eindopdracht
        </h1>
        <img
          src={frontend}
          alt="foto van frontendteam gemaakt bij de introductie"
          className="frontend"
        />
        <figure className="boas">
          <img src={boas} alt="boas" className="image-persoon" />
          <figcaption>Teacher Boas, wat een geduld!</figcaption>
        </figure>
        <figure className="yacine">
          <img src={ikke} alt="yacine" className="image-persoon" />
          <figcaption>Teacher Boas, wat een geduld!</figcaption>
        </figure>
        <figure className="george">
          <img src={george4u} alt="george4u" className="image-persoon" />
          <figcaption>Teacher Boas, wat een geduld!</figcaption>
        </figure>
        <figure className="jack">
          <img src={javajack} alt="javajack" className="image-persoon" />
          <figcaption>Teacher Boas, wat een geduld!</figcaption>
        </figure>
        <figure className="micha">
          <img src={micha} alt="micha" className="image-persoon" />
          <figcaption>Teacher Boas, wat een geduld!</figcaption>
        </figure>
        <figure className="bettina">
          <img src={bettina} alt="bettina" className="image-persoon" />
          <figcaption>Teacher Boas, wat een geduld!</figcaption>
        </figure>
        <figure className="lesley">
          <img src={lesley} alt="lesley" className="image-persoon" />
          <figcaption>Teacher Boas, wat een geduld!</figcaption>
        </figure>
        <figure className="salim">
          <img src={salim} alt="salim" className="image-persoon" />
          <figcaption>Teacher Boas, wat een geduld!</figcaption>
        </figure>
        <figure className="luisa">
          <img src={luisa} alt="luisa" className="image-persoon" />
          <figcaption>Teacher Boas, wat een geduld!</figcaption>
        </figure>
        <figure className="bosko">
          <img src={bosko} alt="bosko" className="image-persoon" />
          <figcaption>Teacher Boas, wat een geduld!</figcaption>
        </figure>
      </div>
    </>
  );
};
