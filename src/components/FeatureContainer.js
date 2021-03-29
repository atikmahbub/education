import React from "react";

const FeatureContainer = ({ data }) => {
  return (
    <>
      {data?.map((item, i) => {
        if (i % 2 === 0) {
          return (
            <div className="feature-container">
              <div className="feature-info">
                <div className="feature-title-text">{item.title}</div>
                <div className="feature-desc-text">{item.description}</div>
              </div>
              <div className="feature-details"></div>
            </div>
          );
        } else {
          return (
            <div className="feature-container">
              <div className="feature-details"></div>
              <div className="feature-info">
                <div className="feature-title-text">{item.title}</div>
                <div className="feature-desc-text">{item.description}</div>
              </div>
            </div>
          );
        }
      })}
    </>
  );
};

export default FeatureContainer;
