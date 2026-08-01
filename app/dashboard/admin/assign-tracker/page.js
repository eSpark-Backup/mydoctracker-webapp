"use client"

import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { notification } from 'antd'
import Image from 'next/image'
import { DocButton, DocDatePicker, AutoCompleteInput, DocInput, DocTimePicker, DocDropdown, HeadContent } from '@/app/components'
import { form2 } from '@/app/constant'
import { camelize, getErrorFromApi } from '@/app/utils'
import { handleSubmit } from '@/app/utils/validation'
import AddFieldModal from '../../../components/modals/addFieldModal'
import { useGetAllEmployee } from '@/app/hooks/employees'
import DocImgUpload from "@/app/components/common/docImgUpload";
import ConfirmModal from "@/app/components/modals/confirmModal";
import { useAddDocument, useGetDocumentOtp } from "@/app/hooks/documents";
import InputModal from "@/app/components/common/InputModal";
import VerificationForm from "@/app/components/Forms/OtpForm";
import moment from "moment";

const AssignTracker = () => {
  const router = useRouter();
  const fileInputRef = useRef(null);
  const handleButtonClick = () => {
    fileInputRef?.current?.click();
  };
  const { mutate: documentOtp } = useGetDocumentOtp();
  const { mutate: addDocument } = useAddDocument();
  const [employeeOptions, setEmployeeOptions] = useState([]);
  const [search, setSearch] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [isVerificationModalOpen, setIsVerificationModalOpen] = useState(false);
  const [addFieldModal, setAddFieldModal] = useState(false);
  const [otp, setOtp] = useState(null);
  const [dynamicInputs, setDynamicInputs] = useState({
    label: "",
    value: "",
  });
  const [addEmployeeForm, setAddEmployeeForm] = useState({
    trackerId: "",
    type: "",
    documentTitle: "",
    creationDate: "",
    creationTime: "",
    employeeId: "",
    docImage: "",
    dynamicInputs: [],
  });

  const handleModalForm = (key, value) => {
    setDynamicInputs({
      ...dynamicInputs,
      [key]: value,
    });
  };

  const handleAddField = (key) => {
    setDynamicInputs({
      label: "",
      value: "",
    });
    setAddFieldModal(false);
    const dynamicObj = {
      ...dynamicInputs,
      key: camelize(dynamicInputs.label),
      required: false,
      type: "textInput",
      custom: true,
    };
    form2.map((item) => {
      if (item.title === key) {
        item.inputs.push(dynamicObj);
      }
    });
    addEmployeeForm.dynamicInputs.push(dynamicInputs);
    setAddEmployeeForm({ ...addEmployeeForm });
  };

  const handleRemoveField = (label) => {
    form2[1].inputs = form2[1]?.inputs.filter((item) => item.label !== label);
    setAddEmployeeForm({
      ...addEmployeeForm,
      dynamicInputs: addEmployeeForm?.dynamicInputs.filter(
        (item) => item.label !== label
      ),
    });
    setOpenModal(false);
  };

  const handleCancelField = () => {
    setOpenModal(false);
  };

  const successSubmit = () => {
    setIsVerificationModalOpen(true);
    documentOtp();
  };

  const HandleVerificationCancel = () => {
    setIsVerificationModalOpen(false);
  };

  const handleOtp = (value) => {
    setOtp(value);
  };

  const handleForm = (key, value) => {
    if (key === "employeeId") {
      const searchStr = employeeOptions.find((val) => val.value === value);
      setAddEmployeeForm({
        ...addEmployeeForm,
        [key]: searchStr?.id,
      });
    } else {
      setAddEmployeeForm({
        ...addEmployeeForm,
        [key]: value,
      });
    }
  };

  const { mutate: getAllEmployee } = useGetAllEmployee();
  const fetchAllEmployee = () => {
    getAllEmployee(search, {
      onSuccess: (fetchedSuccess) => {
        setEmployeeOptions(
          fetchedSuccess?.data?.items?.map((value) => {
            return {
              label: value.username,
              value: value.username,
              id: value.id,
            };
          })
        );
      },
      onError: (error) => {
        notification.error({
          message: "Error",
          description: getErrorFromApi(error),
        });
      },
    });
  };
  
  useEffect(() => {
    fetchAllEmployee();
  }, [search]);

  const handleResend = () => {
    documentOtp();
  };

  const HandleVerificationSuccess = () => {
    setIsVerificationModalOpen(false);
    const formattedResult = moment(
      `${addEmployeeForm?.creationDate} ${addEmployeeForm?.creationTime}`
    ).format("YYYY-MM-DDTHH:mm:ss.SSS[Z]");
    const payload = {
      deviceId: addEmployeeForm?.trackerId,
      type: addEmployeeForm?.type,
      title: addEmployeeForm?.documentTitle,
      creationDate: formattedResult,
      employeeId: addEmployeeForm?.employeeId,
      file: addEmployeeForm?.docImage,
      otp,
      fields: addEmployeeForm?.dynamicInputs.map(({ label, value }) => {
        return { name: label, value };
      }),
    };
    addDocument(payload, {
      onSuccess: (addedSuccess) => {
        notification.success({
          message: "Success",
          description: addedSuccess?.message,
        });
        setOtp(null);
        router.push(
          `/dashboard/admin/add-geofence/${addEmployeeForm?.trackerId}`
        );
      },
      onError: (error) => {
        notification.error({
          message: "Error",
          description: getErrorFromApi(error),
        });
        setOtp(null);
      },
    });
  };

  return (
    <>
      <div>
        <div className="w-[100%] sm:w-[100%] flex items-end mt:0 sm:mt-10">
          <HeadContent
            mainHeading="Assign Tracker"
            paragraph="Lorem ipsum dolor sit amet consectetur. Cursus cras aliquam amet malesuada iaculis habitant. Aliquam faucibus ultricies tincidunt mattis vitae nec nulla sit. A molestie "
          />
        </div>
        {/* {steps === 1 ? */}
        <div className="overflow-y-auto no-scrollbar flex flex-col gap-12 w-[100%] drop-shadow-lg rounded-lg h-[65vh] bg-white my-4 p-4 md:p-10">
          {form2.map((section, index) => {
            return (
              <div key={index}>
                <div className="flex flex-row items-center justify-between flex-wrap">
                  <h2 className="text-black font-medium text-xl">
                    {section.title}
                  </h2>
                  {section.buttonText && (
                    <DocButton
                      onClick={() => setAddFieldModal(section.title)}
                      prefix={
                        <Image
                          className="mr-2"
                          src={"/icons/AddWhite.svg"}
                          width={15}
                          height={15}
                          alt="plus"
                        />
                      }
                      className={
                        "rounded-md !bg-primary text-white h-[100%] px-4 w-[150px]"
                      }
                      text={section.buttonText}
                    />
                  )}
                </div>
                <div className="flex gap-5 sm:gap-x-14 flex-col sm:flex-row flex-wrap">
                  {section.inputs.map((input, index) => {
                    return (
                      <div className="lg:w-[30%] sm:w-[100%]" key={index}>
                        <div className="flex flex-col">
                          <div className="flex flex-row items-center justify-between">
                            <label className="text-greydark text-sm pb-1">
                              {input?.label}{" "}
                              {input?.required && (
                                <span className="text-redColor">*</span>
                              )}
                            </label>
                            {input?.custom && (
                              <div
                                onClick={() => setOpenModal(input?.label)}
                                className="text-greydark text-sm underline cursor-pointer"
                              >
                                remove
                              </div>
                            )}
                          </div>
                          {input.type === "autoComplete" ? (
                            <AutoCompleteInput
                              onSelect={(e) => handleForm(input.key, e)}
                              handleSearch={(e) => setSearch(e)}
                              className={"w-[100%]"}
                              options={employeeOptions}
                              placeholder={input.placeholder}
                            />
                          ) : input.type === "select" ? (
                            <DocDropdown
                              onChange={(e) => handleForm(input.key, e.value)}
                              className={"w-[100%]"}
                              options={input.options}
                              placeholder={input.placeholder}
                            />
                          ) : input.type === "uploadImage" ? (
                            <DocImgUpload
                              onClick={handleButtonClick}
                              onChange={(value) =>
                                handleForm(input?.key, value.target.files[0])
                              }
                              text={"Upload Image"}
                            />
                          ) : input.type === "datePicker" ? (
                            <DocDatePicker
                              onChange={(_, value) =>
                                handleForm(input.key, value)
                              }
                            />
                          ) : input.type === "timePicker" ? (
                            <DocTimePicker
                              onChange={(_, value) =>
                                handleForm(input.key, value)
                              }
                            />
                          ) : (
                            <DocInput
                              value={input.value || addEmployeeForm[input.key]}
                              onChange={(value) => handleForm(input.key, value)}
                              type={
                                input.type === "textNumber" ? "number" : "text"
                              }
                              placeholder={input.placeholder}
                              className={"h-[40px]"}
                            />
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
          <div className="flex flex-row items-center gap-5">
            <DocButton
              onClick={() => handleSubmit(addEmployeeForm, successSubmit)}
              text={"Next"}
              suffix={
                <Image
                  className="text-white"
                  src={"/icons/rightArrowWhite.svg"}
                  width={22}
                  height={22}
                  alt="arrow"
                />
              }
              className={"w-[150px] bg-secondary text-white"}
            />
          </div>
        </div>
      </div>
      <AddFieldModal
        showModal={addFieldModal}
        onCancel={() => setAddFieldModal(false)}
        onSuccess={handleAddField}
        form={dynamicInputs}
        handleModalForm={handleModalForm}
      />
      <ConfirmModal
        isModalOpen={openModal}
        handleOk={handleRemoveField}
        handleCancel={handleCancelField}
        cancelButton="Cancel"
        confirmButton="Yes"
        description="Are you sure you want to remove this field?"
        icon={"Cancel.svg"}
        acceptButtonColor={"bg-[#ff0000]"}
        width={450}
      />
      <InputModal
        isModalOpen={isVerificationModalOpen}
        handleOk={HandleVerificationSuccess}
        width={450}
        handleCancel={HandleVerificationCancel}
      >
        <VerificationForm
          handleOtp={handleOtp}
          handleOk={HandleVerificationSuccess}
          handleResend={handleResend}
          handleCancel={HandleVerificationCancel}
          auth={false}
        />
      </InputModal>
    </>
  );
};

export default AssignTracker;
