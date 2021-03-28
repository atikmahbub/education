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

const Tutoring = () => {
  return (
    <div className="tutoring">
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
      <div className="p-4">
        <AddTitle title="standardized test prep" />
        <TIContainer text={STPCardText} image={CARD_IMAGE1} isRight />
      </div>
    </div>
  );
};

export default Tutoring;
