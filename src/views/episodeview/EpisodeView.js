import React, { useState, useEffect } from "react";
import CharacterComponent from "../../components/charactercomponent/CharacterCOmponent";
//import { EpisodeComponent } from "../../components/epsisodecomponent/EpisodeComponent";
import { PageWrapper } from "../../components/pagewrapper/PageWrapper";
import { PaginationButtons } from "../../components/paginationbuttons/PaginationButtons";
export const EpisodeView = () => {
  const [id, setID] = useState(1);
  //const [info, setInfo] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  //console.log("info ", info);
  // const { air_date, name } = info;
  //const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const getCharacters = async newPage => {
    setLoading(true);
    try {
      const api = process.env.REACT_APP_API_URL;
      const res = await fetch(`${api}/episode/${id}`);
      return res.json();
    } catch (e) {
      console.log("oeps   ", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCharacters(pageNumber);
  }, [pageNumber]);
  return (
    <>
      <PaginationButtons
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
      <PageWrapper isLoading={loading}>
        {episodes.map(perCharacter => (
          <CharacterComponent {...perCharacter} key={perCharacter.id} />
        ))}{" "}
      </PageWrapper>
    </>
  );
};

//   useEffect(() => {
//     (async function () {
//       const data = await fetch(epis).then(res => res.json());
//       //console.log("data ", data);
//       setInfo(data);
//       const a = await Promise.all(
//         data.characters.map(x => {
//           return fetch(x).then(res => res.json());
//         })
//       );
//       setResults(a);
//     })();
//   }, [epis]);

//   return (
//     <>
//       <PageWrapper isLoading={loading}>
//         {episodes.map((perCharacter) => (
//           <CharacterComponent {...perCharacter} key={perCharacter.id} />
//         ))}{" "}
//       </PageWrapper>
//       </>
//   );
// };
/* <h1>hallo</h1>

      <div className="container">
        <div className="row mb-4">
          <h1 className="text-center mb-3">
            Episode{" "}
            <span className="text-primary">
              {name === "" ? "Unknown" : name}
            </span>
          </h1>
          <h5 className="text-center">
            Air Date is {air_date === "" ? "Unknown" : air_date}
          </h5>
        </div>
        <div className="row">
          <div className="col-3">
            <h4 className="text-center mb-4">Pick Episodes</h4>
            <InputGroup total={51} name="Episode" setID={setID} />
          </div>
          <div className="col-8">
            <div className="row">
              <Cards results={results} />
            </div>
          </div>
        </div>
      </div> */
