import React, { useState, useEffect } from "react";
//import Cards from "../components/Cards/Cards";
import { EpisodeComponent } from "../../components/epsisodecomponent/EpisodeComponent";

export const EpisodeView = () => {
  const [id, setID] = useState(1);
  const [info, setInfo] = useState([]);
  const api = process.env.REACT_APP_API_URL;

  const epis = `${api}/episode/${id}`;
  //console.log("info ", info);
  // const { air_date, name } = info;
  // const [results, setResults] = useState([]);

  useEffect(() => {
    (async function () {
      const data = await fetch(epis).then(res => res.json());
      //console.log("data ", data);
      setInfo(data);
      const a = await Promise.all(
        data.characters.map(x => {
          return fetch(x).then(res => res.json());
        })
      );
      setResults(a);
    })();
  }, [epis]);

  return (
    <>
      <h1>hallo</h1>
      <EpisodeComponent total={51} name="Episode" setID={setID} />
    </>
    // <div className="container">
    //   <div className="row mb-4">
    //     <h1 className="text-center mb-3">
    //       Episode{" "}
    //       <span className="text-primary">{name === "" ? "Unknown" : name}</span>
    //     </h1>
    //     <h5 className="text-center">
    //       Air Date is {air_date === "" ? "Unknown" : air_date}
    //     </h5>
    //   </div>
    //   <div className="row">
    //     <div className="col-3">
    //       <h4 className="text-center mb-4">Pick Episodes</h4>
    //       <InputGroup total={51} name="Episode" setID={setID} />
    //     </div>
    //     <div className="col-8">
    //       <div className="row">
    //         <Cards results={results} />
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};
