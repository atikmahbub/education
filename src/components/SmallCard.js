import React from "react";

const SmallCard = ({ icon, text }) => {
  return (
    <div className="small-card">
      <div>{icon}</div>
      <div className="small-card-text">{text}</div>
    </div>
  );
};

export default SmallCard;
