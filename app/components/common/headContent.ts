import React from "react";

const HeadContent = ({ mainHeading, paragraph }) => {
  return (
    <div className="flex flex-col">
      <h2 className="text-black sm:text-[25px] text-lg font-semibold float-left mb-1 sm:mb-3">
        {mainHeading}
      </h2>
      <h2 className="text-greydark sm:text-base text-sm  font-normal mb-3">
        {paragraph}
      </h2>
    </div>
  );
};

export default HeadContent;
