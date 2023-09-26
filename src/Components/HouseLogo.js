import React from "react";
import "./HouseLogo.css";

function HouseLogo(props) {
  const { house, onHouseClick } = props;
  return (
    <div className="tattoo-items">
      <img src={house.thumbnailUrl} onClick={() => onHouseClick(house)} />
      <h4>{house.title}</h4>
    </div>
  );
}

export default HouseLogo;
