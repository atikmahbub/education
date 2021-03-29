import React from "react";
import AddTitle from "../../components/AddTitle";
import { FaCalculator } from "react-icons/fa";
import { MdTimer } from "react-icons/md";
import { AiFillBook } from "react-icons/ai";
import SmallCard from "../../components/SmallCard";

const HighLight = () => {
  return (
    <div className="highlight">
      <AddTitle
        title="how our software works"
        description="Keep scrolling to learn more about the process and benefits of working with Education Academy— from beginning to end."
        descColor="white"
        color="white"
      />
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
    </div>
  );
};

export default HighLight;
