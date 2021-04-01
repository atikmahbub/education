import React from "react";
import ContainerButton from "./Button/ContainedButton";
import { TiTick } from "react-icons/ti";

const TeamCard = ({ data }) => {
  return (
    <>
      {data.map((item, i) => (
        <div className="team-card">
          <div className="team-card-upper">
            <div className="team-card-upper-left">
              <div className="team-member-name">{item.name}</div>
              <div className="team-member-designation">{item.designation}</div>
              {item.intro.map((subitem, subindex) => (
                <div className="team-member-intro">{subitem}</div>
              ))}
            </div>
            <div className="team-card-upper-right">
              <img src={item.image} alt="Team-Member" className="team-image" />
              <div className="team-button">
                <ContainerButton text="Website" />
              </div>
            </div>
          </div>
          <div className="team-card-lower">
            {item.keypoints.map((subitem2, subindex2) => (
              <div className="team-keys">
                <TiTick color="#71C859" size="24px" className="team-tick" />
                <div className="team-keypoints">{subitem2}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default TeamCard;
