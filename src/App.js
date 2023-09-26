// App.js
import React, { useState } from "react";
import "./App.css";
import AppHeader from "./Components/AppHeader";
import HouseLogo from "./Components/HouseLogo";
import houses from "./Data/Houses";
import HousePost from "./Components/HousePost";
import AppSearch from "./Components/Search";

function App() {
  const [selectedLogo, setSelectedLogo] = useState(null);
  const [searchText, setSearchText] = useState("");

  function onHouseOpenClick(thelogo) {
    setSelectedLogo(thelogo);
  }

  function onHouseCloseClick() {
    setSelectedLogo(null);
  }
  const housesElements = houses
    .filter((house) => house.title.toLowerCase().includes(searchText))
    .map((house, index) => {
      return (
        <HouseLogo key={index} house={house} onHouseClick={onHouseOpenClick} />
      );
    });

  let housePost = null;
  if (!!selectedLogo) {
    housePost = (
      <HousePost house={selectedLogo} onBgClick={onHouseCloseClick} />
    );
  }

  return (
    <div className="App">
      <AppHeader />
      <section className="app-section">
        <div className="app-container">
          <AppSearch value={searchText} onValueChange={setSearchText} />
          <div className="app-grid">{housesElements}</div>
        </div>
      </section>
      {housePost}
    </div>
  );
}

export default App;
