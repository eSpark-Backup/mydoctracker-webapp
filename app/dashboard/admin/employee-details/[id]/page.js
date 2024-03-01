"use client";
import { DocButton, NavigatorHeader } from "@/app/components";
import { Tabs, notification } from "antd";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { SettingOutlined } from "@ant-design/icons";
import AdminTrackerDetails from "@/app/components/Forms/adminTrackerDetails";
import AdminEmployeeDetails from "@/app/components/Forms/adminEmployeeDetails";
import AdminDocumentDetails from "@/app/components/Forms/adminDocumentDetails";
import { useDispatch, useSelector } from "react-redux";
import { useGetDocumentById } from "@/app/hooks/documents";
import { fetchCurrentDocument } from "@/app/redux/store/slices/documents";
import { getErrorFromApi } from "@/app/utils";

const EmployeDetail = () => {
  const { currentDocument } = useSelector((state) => state.documents);
  console.log(currentDocument, "currentDocument");
  const pathname = usePathname();
  const id = pathname.split("/")[4];

  const dispatch = useDispatch();

  const { mutate: getDocumentById } = useGetDocumentById();
  useEffect(() => {
    if (id) {
      getDocumentById(id, {
        onSuccess: (fetchedSuccess) => {
          dispatch(fetchCurrentDocument(fetchedSuccess?.data));
        },
        onError: (error) => {
          notification.error({
            message: "Error",
            description: getErrorFromApi(error),
          });
        },
      });
    }
  }, [id]);

  const router = useRouter();

  const handleSettings = () => {
    router.push("/dashboard/admin/employee-settings");
  };

  const operations = (
    <DocButton
      onClick={handleSettings}
      prefix={<SettingOutlined className="mr-3" />}
      className={"bg-transparent text-primary font-medium"}
      text={"Settings"}
    />
  );
  const items = [
    {
      key: "1",
      label: "Employee Details",
      children: <AdminEmployeeDetails employeeData={currentDocument?.assignee} />,
    },
    {
      key: "2",
      label: "Tracker Details",
      children: <AdminTrackerDetails trackerData={{ tracker: currentDocument?.tracker, type: currentDocument?.type }} />,
    },
    {
      key: "3",
      label: "Document Details",
      children: <AdminDocumentDetails documentData={currentDocument} />,
    },
  ];

  const [copy, setCopy] = useState("Copy");
  const handleCopy = () => {
    setCopy("Copied!");
    setTimeout(() => {
      setCopy("Copy");
    }, 1000);
  };

  return (
    <div>
      <NavigatorHeader
        previousPage={["Admin Panel"]}
        currentPage="Employee Credentials"
      />
      <div className="mt-14 flex flex-col gap-8">
        {/* <div className="sm:px-8  py-5 bg-white rounded-md shadow-md">
          <div>
            <h2 className="text-black text-xl font-medium pl-2 md:pl-0">
              Employee Credentials
            </h2>
          </div>
          <div className="sm:pl-11 pl-2 my-2 flex justify-between">
            <div className="flex flex-col gap-3 mt-3">
              {[1, 2].map((eachItem, index) => (
                <div className="flex gap-4" key={index}>
                  <p className="text-greydark text-base font-medium">
                    {eachItem === 1 ? "Username:" : "Password:"}
                  </p>
                  <p className="text-primary text-base font-medium">
                    johndoe_123
                  </p>
                </div>
              ))}
            </div>
            <div
              className="pr-2 md:pr-9 cursor-pointer mt-4 md:mt-0"
              onClick={handleCopy}
            >
              <Image
                src={"/icons/copyLinear.svg"}
                alt="Copy"
                width={30}
                height={30}
                className="w-[30px] md:w-[40px]"
              />
              <p className="transition-all duration-500 ease-in-out text-greydark text-normal font-medium ">
                {copy}
              </p>
            </div>
          </div>
        </div> */}
        <div>
          <div className="flex justify-end md:hidden mb-4">
            <DocButton
              onClick={handleSettings}
              prefix={<SettingOutlined className="mr-3" />}
              className={"bg-transparent text-primary font-medium text-xl"}
              text={"Settings"}
            />
          </div>
          <div className="min-h-[64vh] hidden md:block bg-white rounded-md shadow-md p-5 mb-3">
            <Tabs
              tabBarExtraContent={operations}
              size="large"
              defaultActiveKey="1"
              items={items}
              className="specific-tabs"
            />
          </div>
          <div className="min-h-[64vh] block md:hidden bg-white rounded-md shadow-md p-5 mb-3">
            <Tabs size="large" defaultActiveKey="1" items={items} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeDetail;
