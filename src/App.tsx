import React from "react";
import { Route, Routes } from "react-router-dom";
//import logo from "./logo.svg";
import "./App.scss";

import { HomeView } from "./views/homeview/HomeView";
import { Navigatie } from "./components/navigatie/Navigatie";
import Footer1 from "./components/footer/Footer";
import { CharacterDetailView } from "./views/characterdetailview/CharacterDetailView";
import { ContactViewJS } from "./views/contactview/ContactViewJS";
//import { SearchView } from "./views/searchview/SearchView";
import { EpisodeView } from "./views/episodeview/EpisodeViewTSX";
import { LocatieView } from "./views/locatieview/LocatieView";
import { EpisodeDetailView } from "./views/episodedetailview/EpisodeDetailView";

function App() {
  return (
    <div className="App">
      <Navigatie />
      <Routes>
        <Route element={<HomeView />} path="/" />
        <Route
          element={
            <CharacterDetailView
              id={""}
              name={""}
              status={""}
              species={""}
              type={""}
              gender={""}
              image={""}
              episode={[]}
            />
          }
          path="/characters/:id"
        />
        <Route
          element={
            <EpisodeDetailView
              id={""}
              name={""}
              air_date={""}
              episode={""}
              created={""}
              url={""}
              //@ts-ignore
              characters={[]}
            />
          }
          path="/episode/:id"
        />

        <Route element={<ContactViewJS />} path="/contact" />
        <Route element={<EpisodeView />} path="/episode" />
        <Route element={<LocatieView />} path="/locatie" />
      </Routes>
      <Footer1 />
    </div>
  );
}

export default App;
