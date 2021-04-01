import React from "react";
import AddTitle from "../../components/AddTitle";
import TeamCard from "../../components/TeamCard";
import { teamData } from "../../utils/data/data";

const Team = () => {
  return (
    <div className="team-container">
      <AddTitle title="Our Teams" />
      <TeamCard data={teamData} />
    </div>
  );
};

export default Team;
