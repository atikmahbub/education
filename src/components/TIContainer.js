import React from "react";

const TIContainer = ({ text, image, isRight }) => {
  return (
    <div className="row ti">
      {!isRight && (
        <div className="col-md-6 col-sm-12 card-image-div">
          <img src={image} alt="Card-Image" className="ticard-image" />
        </div>
      )}
      <div className="col-md-6 col-sm-12">
        {text.map((item) => (
          <div className="card-desc">{item}</div>
        ))}
      </div>
      {isRight && (
        <div className="col-md-6 col-sm-12 card-image-div">
          <img src={image} alt="Card-Image" className="ticard-image" />
        </div>
      )}
    </div>
  );
};

export default TIContainer;
