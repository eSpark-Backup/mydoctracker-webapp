import React from "react";
import UserDashboard from "../../../public/Images/UserDashboard.png";
import Image from "next/image";

const Dashboard = () => {
  return (
    <>
      <div className="w-[100%] drop-shadow-lg  rounded-lg h-[95%] bg-white my-4 flex justify-center items-center flex-col">
        <>
          <Image
            className="w-[250px] h-[320px]"
            src={UserDashboard}
            width={20}
            height={20}
            alt="Empty"
          />
          <h1 className="m-3 text-center">
            You don’t have any device. Please add your device to continue
            further.
          </h1>
          <button class="bg-[#002F49] text-white font-bold py-2 px-6 rounded inline-flex items-center">
            <p>+</p>
            <span className="px-3">Add</span>
          </button>
        </>
      </div>
    </>
  );
};

export default Dashboard;
