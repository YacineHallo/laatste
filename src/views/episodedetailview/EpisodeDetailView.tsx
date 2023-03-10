// import "../../App.scss";
// import { IEpisode } from "../../types/IndexTypes";
// import { useNavigate } from "react-router-dom";
// //import { CharacterStatusComponent } from "./characterstatuscomponent/CharacterStatusComponent";

// export const EpisodeDetailView = (results: IEpisode) => {
//   const { id, air_date, name, episode, created, characters } = results;
//   const navigate = useNavigate();
//   //eslint-disable-next-line @typescript-eslint/no-unused-vars

//   return (
//     <div className="border" onClick={() => navigate(`/characters/${id}`)}>
//       <article className="character" key={id}>
//         <h3 className="character__header">{name}</h3>

//         <h4 className="character__header">{air_date}</h4>

//         <article className="character-component">
//           <ul>
//             <li className="character-component__eigenschap hover">
//               Species: {created}
//             </li>
//             <li className="character-component__eigenschap hover">
//               Episode: {episode}
//             </li>
//             {results.characters.map(
//               <ul>
//                 <li>ID {characters.id}</li>
//                 <li>Name{characters.name}</li>
//               </ul>
//             )}
//             ;
//           </ul>
//         </article>
//       </article>
//     </div>
//   );
// };

import { IEpisode } from "../../types/IndexTypes";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { PageWrappernietOverzicht } from "../../components/pagewrapper/PageWrapperNietOverzicht";

import { PageWrapper } from "../../components/pagewrapper/PageWrapper";
//import CharacterComponent from "../../components/charactercomponent/CharacterCOmponent";
import "../../App.scss";
//import CharacterDetailComponent from "../../components/characterdetailcomponent/CharacterDetailComponent";

export const EpisodeDetailView = (results: IEpisode) => {
  let { id } = useParams();
  const [loading, setLoading] = useState<boolean>(true);
  const [episode, setEpisode] = useState<IEpisode>();
  //const [character, setCharacter] = useState<ICharactersResponse>();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getEpisode = async () => {
    setLoading(true);
    try {
      const api = process.env.REACT_APP_API_URL; //deze .env plaats je in de mappenstructuur op rootniveau
      const res = await fetch(`${api}/episode/${id}`);
      const resJson: IEpisode = await res.json();
      console.log("res ", resJson);

      setEpisode(resJson);
    } catch (e) {
      console.log("oeps   ", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getEpisode();
  }, [getEpisode]);

  return (
    <>
      <PageWrapper isLoading={loading}>
        <div className="container">
          <div className="detail">
            <h1>{episode?.name}</h1>
            <h2>ttttt</h2>
            {episode?.characters.map(() => {
              return <p>{episode?.characters}</p>;
            })}
          </div>
        </div>
      </PageWrapper>
    </>
  );
};

//   {/* <PageWrapper isLoading={loading}>
//     {character?.results.map(
//       (perCharacter: JSX.IntrinsicAttributes & ICharactersResponse) => (
//         <CharacterComponent
//           id={""}
//           name={""}
//           status={""}
//           species={""}
//           type={""}
//           gender={""}
//           image={""}
//           episode={[]}
//           {...perCharacter}
//         />
//       )
//     )}{" "}
//     {/* else {(resultaat = "No Characters found:/")}
//     return <>{resultaat}</>; */}

//   {/* // <PageWrappernietOverzicht isLoading={loading}>
// //   {episode && ( */}
//   {/* //     <div className="border">
// //       <h4 className="character__header">hallo</h4>

// //       <article className="character-component">
// //         <ul>
// //           <li className="character-component__eigenschap hover">hallo</li>

// //           <li>hallo</li>
// //           {characters.map(x => { */}
//   {/* //             return <li>x</li>;
// //           })}
// //         </ul> */}
//   {/* //       </article> */}
//   {/* //     </div> */}
//   {/* //   )}
// // </PageWrappernietOverzicht> */
