import React from "react";
import ContainedButton from "./Button/ContainedButton";

const LeftTitle = ({
  header,
  description,
  buttonText,
  hideButton,
  headerColor,
  descColor,
}) => {
  return (
    <>
      <div
        className="h1 mb-4 font-weight-bold"
        style={{ color: `${headerColor}` }}
      >
        {header}
      </div>
      <div className="text-justify">
        {description.map((item, i) => (
          <>
            <span
              className="d-block mb-4 pr-2"
              style={{ color: `${descColor}` }}
            >
              {item}
            </span>
          </>
        ))}
      </div>
      {!hideButton && (
        <div className="w-50">
          <ContainedButton size="lg" text={buttonText} />
        </div>
      )}
    </>
  );
};

export default LeftTitle;
