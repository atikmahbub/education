import React from "react";
import AddTitle from "../../components/AddTitle";
import SmallCard from "../../components/SmallCard";
import TIContainer from "../../components/TIContainer";
import CARD_IMAGE1 from "../../utils/assets/images/asset1.jpeg";
import CARD_IMAGE2 from "../../utils/assets/images/asset2.jpeg";
import CARD_IMAGE3 from "../../utils/assets/images/asset3.jpeg";
import {
  STPCardText,
  competitionCardData,
  academicCardData,
} from "../../utils/data/data";
import { FaCalculator } from "react-icons/fa";
import { MdTimer } from "react-icons/md";
import { AiFillBook } from "react-icons/ai";
import ContainerButton from "../../components/Button/ContainedButton";
import HERO2 from "../../utils/assets/images/hero2.png";

const Tutoring = () => {
  return (
    <div className="tutoring">
      <div className="row hero-section">
        <div className="col-md-6 hero-left">
          <div className="h1 hero-title">we are your resources</div>
          <div className="text-left hero-desc">
            The most straight forward path to success is through mentorship. Our
            approach extends beyond the school to help ensure students have the
            necessary support to do their best. Get in touch with us to learn
            about our tutoring services.
          </div>
          <div className="hero-button" style={{ width: "40%" }}>
            <ContainerButton text="contact us" />
          </div>
        </div>
        <div className="col-md-6 hero-right p-5">
          <img src={HERO2} alt="hero" />
        </div>
      </div>
      <div className="row justify-content-center feature-tutoring">
        <div className="col-md-4 sol-sm-10">
          <SmallCard
            text="academic math"
            icon={<AiFillBook fontSize="30px" />}
          />
        </div>
        <div className="col-md-4 sol-sm-10">
          <SmallCard
            text="competition math"
            icon={<MdTimer fontSize="30px" />}
          />
        </div>
        <div className="col-md-4 sol-sm-10">
          <SmallCard
            text="standardized test prep"
            icon={<FaCalculator fontSize="30px" />}
          />
        </div>
      </div>
      <div className="p-4">
        <AddTitle title="academic math" />
        <TIContainer text={academicCardData} image={CARD_IMAGE3} isRight />
      </div>
      <div className="p-4">
        <AddTitle title="competition math" />
        <TIContainer text={competitionCardData} image={CARD_IMAGE2} />
      </div>
      <div className="p-4 mb-5">
        <AddTitle title="standardized test prep" />
        <TIContainer text={STPCardText} image={CARD_IMAGE1} isRight />
      </div>
    </div>
  );
};

export default Tutoring;
