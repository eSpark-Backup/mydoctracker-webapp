import React from "react";
import Image from "next/image";
import { UserDevices } from "@/app/constant";
import { Badge } from "antd";
import ConfirmationModal from "../common/ConfirmationModal";

const Dashboard = ({ noDevices }) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [showEditScreen, setShowEditScreen] = React.useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {noDevices === true && showEditScreen === false ? (
        <div className="w-[100%] drop-shadow-lg rounded-lg h-[600px] bg-white my-4 flex justify-center items-center flex-col">
          <>
            <Image
              className="w-[250px] h-[320px]"
              src={"/Images/UserDashboard.png"}
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
      ) : noDevices === false && showEditScreen === false ? (
        <div className="w-[100%] gap-6 h-auto drop-shadow-lg rounded-lg bg-white my-4 flex py-24 items-center flex-col">
          {UserDevices?.map((eachDevice) => (
            <div className="h-36 w-[90%] border-b-2 border-[#E4E4E4]">
              <div className="flex gap-5">
                <h1 className="text-[14px] sm:text-xl">
                  {eachDevice?.heading}
                </h1>
                <h1>
                  {eachDevice.status === "Active" ? (
                    <Badge color="#0DFF25" text={eachDevice.status} />
                  ) : eachDevice.status === "Disable" ? (
                    <Badge color="#FFCE00" text={eachDevice.status} />
                  ) : (
                    <Badge color="#666" text={eachDevice.status} />
                  )}
                </h1>
              </div>
              <div className="flex justify-between mt-5">
                <div>
                  <h3 className="text-[14px] sm:text-base">
                    {eachDevice?.name}
                  </h3>
                  <p className="text-[12px]">{eachDevice?.date}</p>
                  <p className="text-[12px]">{eachDevice?.battery}</p>
                </div>
                <div onClick={showModal}>
                  <Image
                    src="/icons/vertical-ellipse.svg"
                    width={40}
                    height={30}
                    style={{ cursor: "pointer" }}
                  />
                </div>
              </div>
            </div>
          ))}
          <button class="bg-[#002F49] text-white font-bold py-2 px-6 rounded inline-flex items-center">
            <p>+</p>
            <span className="px-3">Add</span>
          </button>
        </div>
      ) : showEditScreen ? (
        <></>
      ) : <h1>Hello</h1>}
      <ConfirmationModal
        isModalOpen={isModalOpen}
        showModal={showModal}
        handleOk={handleOk}
        handleCancel={handleCancel}
        cancelButton="Cancel"
        confirmButton="Yes"
        description="Are you sure you want to remove this device?"
        icon={"Cancel.svg"}
        acceptButtonColor="#F00"
      />
    </>
  );
};

export default Dashboard;
