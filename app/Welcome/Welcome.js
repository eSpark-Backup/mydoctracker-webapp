import React from "react";
import { Dashboard } from "../components";
import HeadContent from "../components/UserScreens/common/HeadContent";

function Welcome() {
  return (
    <>
      <div className="flex flex-col min-h-screen px-3 py-3 sm:py-0 sm:px-0 justify-start items-start sm:justify-center sm:items-center bg-[#F7F7F7]">
        <div className="w-[100%] sm:w-[75%] flex items-end mt:0 sm:mt-10">
          <HeadContent
            mainHeading="Devices"
            paragraph="Lorem ipsum dolor sit amet consectetur. Cursus cras aliquam amet malesuada iaculis habitant. Aliquam faucibus ultricies tincidunt mattis vitae nec nulla sit. A molestie "
          />
        </div>
        <div className="w-[100%] mx-auto sm:w-[75%] h-[100%] ">
          <Dashboard noDevices={false}  />
        </div>
      </div>
    </>
  );
}

export default Welcome;
