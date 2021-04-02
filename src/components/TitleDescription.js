import React from "react";

const TitleDescription = ({ title, description }) => {
  return (
    <div className="d-flex flex-column">
      <div className="h3 mt-3">{title}</div>
      <div className="mt-1 mb-4">{description}</div>
    </div>
  );
};

export default TitleDescription;
