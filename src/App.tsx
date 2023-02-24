import React from "react";
import { Route, Routes } from "react-router-dom";
//import logo from "./logo.svg";
import "./App.scss";

import { HomeView } from "./views/homeview/HomeView";
import { Navigatie } from "./components/navigatie/Navigatie";
import Footer1 from "./components/footer/Footer";
import { CharacterDetailView } from "./views/characterdetailview/CharacterDetailView";
import { ContactView } from "./views/contactview/ContactView";

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
        <Route element={<ContactView />} path="/contact" />
      </Routes>
      <Footer1 />
    </div>
  );
}

export default App;
