"use client"

import React, { useState } from "react";
import Image from "next/image";
import { UserDevices } from "@/app/constant";
import { Badge } from "antd";
import DocButton from "../common/docButton";
import { PlusOutlined } from "@ant-design/icons";
import Link from "next/link";
import ConfirmModal from "../modals/confirmModal";
import { useSelector } from "react-redux";


const Dashboard = ({ noDevices }) => {
  const { role } = useSelector(state=>state.auth)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showEditScreen, setShowEditScreen] = useState(false);

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {noDevices ? <div className="w-[100%] drop-shadow-lg rounded-lg h-[600px] bg-white my-4 flex justify-center items-center flex-col">
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
          <Link href={"/dashboard/devices/add-device"}>
            <DocButton prefix={<PlusOutlined className='mr-2 text-sm text-white' />} text={"Add"} className={"text-white !bg-primary rounded-lg"} onClick={() => setShowEditScreen(!showEditScreen)} />
          </Link>
        </>
      </div> : <div className="w-[100%] gap-6 min-h-[70vh] drop-shadow-lg rounded-lg bg-white my-4 flex py-12 items-center flex-col border-[2px] border-[#E4E4E4] md:border-none">
        {UserDevices?.map((eachDevice, key) => (
          <div key={key} className="h-36 w-[100%] px-[20px] sm:px-0 sm:w-[90%]  border-b-2 border-greyBorder">
            <div className="flex gap-5">
              <Link className="leading-7" href={"/dashboard/devices/user"} >
                <h1 className="text-[14px] sm:text-[20px] cursor-pointer font-normal">
                  {eachDevice?.heading}
                </h1>
              </Link>
              <h1 className="!text-lg hidden md:block">
                {eachDevice?.status === "Active" ? (
                  <Badge color="#0DFF25" text={eachDevice?.status} className="!text-lg" />
                ) : eachDevice?.status === "Disable" ? (
                  <Badge color="#FFCE00" text={eachDevice?.status} className="!text-lg" />
                ) : (
                  <Badge color="#666" text={eachDevice?.status} className="!text-lg" />
                )}
              </h1>
            </div>
            <div className="flex justify-between mt-5">
              <div className="flex flex-col gap-2">
                <h3 className="text-[14px] text-[#424242] sm:text-base font-medium">
                  {eachDevice?.name}
                </h3>
                <p className="text-[12px] md:text-[14px] font-[300] text-greydark">{eachDevice?.date}</p>
                <p className="text-[12px] md:text-[14px] font-[300] text-greydark">{eachDevice?.battery}</p>
              </div>
              {role !== "employee" && <div onClick={() => setIsModalOpen(true)}>
                <Image
                  src="/icons/vertical-ellipse.svg"
                  width={40}
                  height={30}
                  style={{ cursor: "pointer" }}
                  alt="Ellipse"
                />
              </div>}
            </div>
          </div>
        ))}
        {role !== "employee" && <Link href={"/dashboard/devices/add-device"}>
          <DocButton prefix={<PlusOutlined className='mr-2 text-sm text-white' />} text={"Add"} className={"text-white !bg-primary rounded-lg"} onClick={() => setShowEditScreen(!showEditScreen)} />
        </Link>}
      </div>}
      <ConfirmModal
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
        cancelButton="Cancel"
        confirmButton="Yes"
        description="Are you sure you want to remove this device?"
        icon={"Cancel.svg"}
        width={450}
        acceptButtonColor={"bg-redColor"}
      />
    </>
  );
};

export default Dashboard;
