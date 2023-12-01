"use client"

import React, { useState } from "react";
import Image from "next/image";
import { UserDevices } from "@/app/constant";
import { Badge, DatePicker, TimePicker } from "antd";
import ConfirmationModal from "../common/ConfirmationModal";
import DocInput from "../common/docInput";
import DocDropdown from "../common/docDropdown";
import DocImgInput from "../common/docImgInput";
import DocButton from "../common/docButton";

const Dashboard = ({ noDevices }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showEditScreen, setShowEditScreen] = useState(false);

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
            <DocButton text={"+ Add"} className={"text-white rounded-lg"} onClick={() => setShowEditScreen(!showEditScreen)} />
          </>
        </div>
      ) : noDevices === false && showEditScreen === false ? (
        <div className="w-[100%] gap-6 h-auto drop-shadow-lg rounded-lg bg-white my-4 flex py-12 items-center flex-col">
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
                    alt="Ellipse"
                  />
                </div>
              </div>
            </div>
          ))}
          <DocButton text={"+ Add"} className={"text-white rounded-lg"} onClick={() => setShowEditScreen(!showEditScreen)} />
        </div>
      ) : showEditScreen ? (
        <>
          <div className="w-[100%] gap-12 h-auto lg:min-h-[650px] drop-shadow-lg rounded-lg bg-white my-4 flex p-8 flex-col">
            <div>

              <h2 className="mb-4 text-black text-sm sm:text-xl font-medium">Tracker Details</h2>
              <div className="flex gap-14 flex-col sm:flex-row">
                <div className="w-100% lg:w-[30%] flex flex-col">
                  <label className="text-[#666] text-sm">Tracker ID <span className="text-red-600">*</span></label>
                  <DocInput type={"text"} placeholder={"Enter tracker id..."} className={"h-[40px]"} />
                </div>
                <div className="w-100% sm:w-[30%] flex flex-col">
                  <label className="text-[#666] text-sm">Select Type <span className="text-red-600">*</span></label>
                  <DocDropdown placeholder={"a1"} className={"w-[100%]"} options={[{ label: 'a1', value: 'a1' }, { label: 'a2', value: 'a2' }]} />
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-between flex-wrap">
                <h2 className="mb-4 text-black text-sm sm:text-xl font-medium">Document Details</h2>
                <DocButton text={"+ Add"} className={"text-white rounded-lg"} />
              </div>
              <div className="flex gap-14 flex-col sm:flex-row flex-wrap">
                <div className="w-100% lg:w-[30%] flex flex-col">
                  <label className="text-[#666] text-sm">Document Title <span className="text-red-600">*</span></label>
                  <DocInput type={"text"} placeholder={"Enter tracker id..."} className={"h-[40px]"} />
                </div>
                <div className="w-100% sm:w-[30%] flex flex-col">
                  <label className="text-[#666] text-sm">Date Of Creation <span className="text-red-600">*</span></label>
                  <DatePicker placeholder={"DD--MM--YYY"} className="h-[40px]" suffixIcon={<Image src={"/icons/Calender.svg"} width={30} height={30} alt="Calender" />} />
                </div>
                <div className="w-100% sm:w-[30%] flex flex-col">
                  <label className="text-[#666] text-sm">Time Of Creation <span className="text-red-600">*</span></label>
                  <TimePicker placeholder="00:00" className="h-[40px]" suffixIcon={<Image src={"/icons/Time.svg"} width={30} height={30} alt="Calender" />} />
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-[#666] text-sm">Upload Doc Image  (Optional)</h2>
              <DocImgInput placeholder={"Upload Image"} className="mt-3" />
            </div>
            <div className="flex gap-6">
              <DocButton text={"Cancel"} onClick={() => setShowEditScreen(!showEditScreen)} className={"border-2 border-[#E4E4E4] bg-transparent text-primary"} />
              <DocButton text={"Submit"} className={"bg-transparent border-2 border-primary"} />
            </div>
          </div>
        </>
      ) : (
        <h1>Hello</h1>
      )}
      <ConfirmationModal
        isModalOpen={isModalOpen}
        showModal={showModal}
        handleOk={handleOk}
        handleCancel={handleCancel}
        cancelButton="Cancel"
        confirmButton="Yes"
        description="Are you sure you want to remove this device?"
        icon={"Cancel.svg"}
        acceptButtonColor="red"
      />
    </>
  );
};

export default Dashboard;
