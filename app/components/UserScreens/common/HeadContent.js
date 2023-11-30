import React from "react";

const HeadContent = ({ mainHeading, paragraph }) => {
  return (
    <div className="flex flex-col">
      <h2 className="text-black sm:text-2xl text-lg font-semibold float-left mb-1 sm:mb-6">
        {mainHeading}
      </h2>
      <h2 className="text-[#666] sm:text-base text-sm  font-normal mb-3">
        {paragraph}
      </h2>
    </div>
  );
};

export default HeadContent;
