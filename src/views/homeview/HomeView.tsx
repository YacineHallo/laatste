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
        <div className="grid-header">
          <h1 className="grid-header__header">
            Rick and Morty side als eindopdracht
          </h1>
          <p className="grid-header__intro">
            wat text overr het een en anderwat text overr het een en anderwat
            text overr het een en anderwat text overr het een en anderwat text
            overr het een en anderwat text overr het een en anderwat text overr
            het een en anderwat text overr het een en anderwat text overr het
            een en anderwat text overr het een en ander wat text overr het een
            en anderwat text overr het een en anderwat text overr het een en
            ander wat text overr het een en anderwat text overr het een en
            anderwat text overr het een en anderwat text overr het een en
            anderwat text overr het een en anderwat text overr het een en
            anderwat text overr het een en anderwat text overr het een en
            anderwat text overr het een en anderwat text overr het een en ander
            wat text overr het een en anderwat text overr het een en anderwat
            text overr het een en ander
          </p>
        </div>
        <div className="frontend">
          <img
            src={frontend}
            alt="foto van frontendteam gemaakt bij de introductie"
            className="frontend__img"
          />
        </div>
        <div className="boas persoon">
          <p className="persoon__naam">Boas</p>
          <figure>
            <img src={boas} alt="boas" className="image-persoon" />
            <figcaption className="persoon__bijschrift">
              Teacher Boas, wat een geduld en kunde!
            </figcaption>
          </figure>
        </div>
        <div className="yacine persoon">
          <p className="persoon__naam">Yacine</p>
          <figure>
            <img src={ikke} alt="yacine" className="image-persoon" />
            <figcaption className="persoon__bijschrift">Tja..;-)</figcaption>
          </figure>
        </div>
        <div className="george persoon">
          <p className="persoon__naam">George</p>
          <figure>
            <img src={george4u} alt="george4u" className="image-persoon" />
            <figcaption className="persoon__bijschrift">
              George4u, altijd gezellig en blijft toch een echte ICT'er
              &#128522;
            </figcaption>
          </figure>
        </div>
        <div className="jack persoon">
          <p className="persoon__naam">Jack</p>
          <figure>
            <img src={javajack} alt="javajack" className="image-persoon" />
            <figcaption className="persoon__bijschrift">
              JavaJack jullie weten inmiddels waarom..
            </figcaption>
          </figure>
        </div>
        <div className="micha persoon">
          <p className="persoon__naam">Micha</p>
          <figure>
            <img src={micha} alt="micha" className="image-persoon" />
            <figcaption className="persoon__bijschrift">
              Erg veel overzicht en structuur, daar heb je een goeie aan!
            </figcaption>
          </figure>
        </div>
        <div className="bettina persoon">
          <p className="persoon__naam">Bettina</p>
          <figure>
            <img src={bettina} alt="bettina" className="image-persoon" />
            <figcaption className="persoon__bijschrift">
              Wat een energie en enthousiasme!
            </figcaption>
          </figure>
        </div>
        <div className="lesley persoon">
          <p className="persoon__naam">Lesley</p>
          <figure>
            <img src={lesley} alt="lesley" className="image-persoon" />
            <figcaption className="persoon__bijschrift">
              Wat een rust, heerlijk
            </figcaption>
          </figure>
        </div>
        <div className="salim persoon">
          <p className="persoon__naam">Salim</p>
          <figure>
            <img src={salim} alt="salim" className="image-persoon" />
            <figcaption className="persoon__bijschrift">
              Wat ben jij goed en snel!
            </figcaption>
          </figure>
        </div>
        <div className="luisa persoon">
          <p className="persoon__naam">Luisa</p>
          <figure>
            <img src={luisa} alt="luisa" className="image-persoon" />
            <figcaption className="persoon__bijschrift">
              Jammer dat je wegging..
            </figcaption>
          </figure>
        </div>
        <div className="bosko persoon">
          <p className="persoon__naam">Bosko</p>
          <figure>
            <img src={bosko} alt="bosko" className="image-persoon" />
            <figcaption className="persoon__bijschrift">
              Shit Bosko, ik hoop dat het goed met je gaat.
            </figcaption>
          </figure>
        </div>
      </div>
    </>
  );
};
