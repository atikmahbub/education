import React from "react";
import STORE_HERO from "../../utils/assets/images/teamhero.png";
import ContainerButton from "../../components/Button/ContainedButton";
import TabPage from "./TabPage";

const Store = () => {
  return (
    <>
      <div className="row hero-section">
        <div className="col-md-6 hero-left">
          <div className="h1 hero-title">
            take your math game to the next level
          </div>
          <div className="text-left hero-desc">
            The tools you need to enhance your math skills— tailored to you and
            all in one place.
          </div>
          <div className="hero-button" style={{ width: "40%" }}>
            <ContainerButton text="browse" />
          </div>
        </div>
        <div className="col-md-6 hero-right p-5">
          <img src={STORE_HERO} alt="hero" />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-4  mt-3 mb-3 text-center store-desc">
          Maybe you want practice with entire math tests. Maybe you just want to
          focus on individual topics. Or maybe you’re mainly looking to
          experience Education Academy’s virtual testing environment. Whether
          you’re just looking for one of these tools or a combination, we have
          the right resources for you for you. And when you’ve finished your
          practice, remember to schedule a meeting with one of our tutors for
          even more support. Keep scrolling to see more.
        </div>
      </div>
      <div className="tab-page">
        <TabPage />
      </div>
    </>
  );
};

export default Store;
