"use client"

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Badge, notification } from "antd";
import DocButton from "../common/docButton";
import { PlusOutlined } from "@ant-design/icons";
import Link from "next/link";
import ConfirmModal from "../modals/confirmModal";
import { useDispatch, useSelector } from "react-redux";
import { useDeleteDocument, useGetAllDocuments } from "@/app/hooks/documents";
import { getErrorFromApi, getMonthDate, getTime } from "@/app/utils";
import { fetchDocuments } from "@/app/redux/store/slices/documents";
import LoadingScreen from "../common/loadingScreen";


const Dashboard = () => {
  const dispatch = useDispatch();
  const { documents } = useSelector((state => state.documents))
  const { role } = useSelector(state=>state.auth)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showEditScreen, setShowEditScreen] = useState(false);

  const { mutate: fetchAllDocuments, isLoading } = useGetAllDocuments()
  const { mutate: deleteDocument } = useDeleteDocument()


  const fetchingDocuments = () => {
    fetchAllDocuments("", {
      onSuccess: (fetchedSuccess) => {
        dispatch(fetchDocuments(fetchedSuccess?.data))
      },
      onError: (error) => {
        notification.error({
          message: 'Error',
          description: getErrorFromApi(error),
        })
      }
    })
  }

  useEffect(() => {
    fetchingDocuments()
  }, [])

  const handleOk = (id) => {
    setIsModalOpen(false);
    deleteDocument(id, {
      onSuccess: (deleteDocumentSuccess) => {
        notification.success({
          message: 'Success',
          description: deleteDocumentSuccess?.message,
        })
        fetchingDocuments()
      },
      onError: (error) => {
        notification.error({
          message: 'Error',
          description: getErrorFromApi(error),
        })
      }
    })
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {isLoading ?
      <div className="w-[100%] h-[50vh] drop-shadow rounded-lg bg-white my-4 flex items-center justify-center">
         <LoadingScreen />
      </div>
      : documents.length <= 0 ? <div className="w-[100%] drop-shadow-lg rounded-lg h-[600px] bg-white my-4 flex justify-center items-center flex-col">
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
        {documents?.map((eachDevice, key) => (
          <div key={eachDevice?.id} className="h-36 w-[100%] px-[20px] sm:px-0 sm:w-[90%]  border-b-2 border-greyBorder">
            <div className="flex gap-5">
              <Link className="leading-7" href={`/dashboard/devices/${eachDevice?.id}`} >
                <h1 className={`${role === "employee"?"text-[20px] lg:mt-0 mt-[2px] text-black cursor-pointer font-normal":"text-[14px] sm:text-[20px] lg:mt-0 mt-[2px] cursor-pointer font-normal"}`}>
                  {`Tracker: ${eachDevice?.id}`}
                </h1>
              </Link>
              <h1 className="!text-lg">
                {eachDevice?.active && eachDevice?.enabled ? (
                  <Badge color="#0DFF25" size="small" text="Active" className="!text-lg" />
                ) : eachDevice?.active && !eachDevice?.enabled ? (
                  <Badge color="#FFCE00" text="Disable" className="!text-lg" />
                ) : (
                  <Badge color="#666" text="Inactive" className="!text-lg" />
                )}
              </h1>
            </div>
            <div className="flex justify-between mt-5">
              <div className="flex flex-col gap-2">
                <h3 className={`${role === "employee"?"text-[16px] text-[#424242] font-medium":"text-[14px] text-[#424242] sm:text-base font-medium"}`}>
                  {eachDevice?.title}
                </h3>
                <p className="text-[12px] md:text-[14px] font-[300] text-greydark">{`${getMonthDate(eachDevice?.creationDate)}, ${getTime(eachDevice?.creationDate)}`}</p>
                <p className="text-[12px] md:text-[14px] font-[300] text-greydark">87% Battery remaining</p>
              </div>
              {role !== "employee" && <div onClick={() => setIsModalOpen(eachDevice?.id)}>
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
