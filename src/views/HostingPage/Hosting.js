import React from "react";
import ContainerButton from "../../components/Button/ContainedButton";
import HERO3 from "../../utils/assets/images/hero3.png";
import HighLight from "./HighLight";
import { hostingFeatureData } from "../../utils/data/data";
import FeatureContainer from "../../components/FeatureContainer";

const Hosting = () => {
  return (
    <div className="hosting">
      <div className="row hero-section">
        <div className="col-md-6 hero-left">
          <div className="h1 hero-title">
            secure, streamlined, and data-backed: the future of testing
            competitions is here
          </div>
          <div className="text-left hero-desc">
            Interested in learning more about how Education Academy’s software
            can support your organization’s testing goals? Contact us to discuss
            short-term accessibility and long-term expansion.
          </div>
          <div className="hero-button" style={{ width: "40%" }}>
            <ContainerButton text="contact us" />
          </div>
        </div>
        <div className="col-md-6 hero-right p-5">
          <img src={HERO3} alt="hero" />
        </div>
      </div>
      <HighLight />
      <FeatureContainer data={hostingFeatureData} />
    </div>
  );
};

export default Hosting;
