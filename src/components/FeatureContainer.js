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
                <div>
                  <img src={item.image} alt="image" className="hosting-image" />
                </div>
              </div>
              <div className="feature-details">
                {item.features.map((subitem, subindex) => (
                  <div className="feature-main-content">
                    <div className="feature-main-heading">
                      {subitem.heading}
                    </div>
                    <div className="feature-main-desc">
                      {subitem.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        } else {
          return (
            <div className="feature-container">
              <div className="feature-details">
                {item.features.map((subitem, subindex) => (
                  <div className="feature-main-content">
                    <div className="feature-main-heading">
                      {subitem.heading}
                    </div>
                    <div className="feature-main-desc">
                      {subitem.description}
                    </div>
                  </div>
                ))}
              </div>
              <div className="feature-info">
                <div className="feature-title-text">{item.title}</div>
                <div className="feature-desc-text">{item.description}</div>
                <div>
                  <img src={item.image} alt="image" className="hosting-image" />
                </div>
              </div>
            </div>
          );
        }
      })}
    </>
  );
};

export default FeatureContainer;
