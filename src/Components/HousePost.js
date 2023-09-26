import React from "react";
import "./HousePost.css";

function HousePost(props) {
  const { house, onBgClick } = props;

  return (
    <div className="tattoo-post">
      <div className="tattoo-post-bg" onClick={onBgClick} />
      <div className="tattoo-post-content">
        <img src={house.fullUrl} alt={house.title} />
        <h4>{house.title}</h4>
      </div>
    </div>
  );
}

export default HousePost;
