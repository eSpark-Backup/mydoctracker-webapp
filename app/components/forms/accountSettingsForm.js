"use client";

import React, { useEffect, useRef, useState } from "react";
import DocInput from "../common/docInput";
import DocButton from "../common/docButton";
import { handleSubmit } from "@/app/utils/validation";
import { accountSettingChangePass, accountSettingsData } from "@/app/constant";
import DocImgInput from "../common/docImgInput";
import DocDatePicker from "../common/docDatePicker";
import DocTimePicker from "../common/docTimePicker";
import DocDropdown from "../common/docDropdown";
import { PlusOutlined } from "@ant-design/icons";
import { getErrorFromApi, getProps, stringWithoutQuotes } from "@/app/utils";
import { useUpdateProfile, useChangePassword } from "@/app/hooks/auth";
import { Avatar, Button, Radio, notification } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { authSignIn } from "@/app/redux/store/slices/authSlice";
import { BackwardOutlined } from "@ant-design/icons";
import { UploadOutlined } from '@ant-design/icons';
import DocImgUpload from "../common/docImgUpload";


const AccountSettingsForm = () => {
  const Dispatch = useDispatch();
  const { mutate: updateProfile } = useUpdateProfile();
  const { mutate: changePassword } = useChangePassword();
  const { user, role } = useSelector((state) => state.auth);

  const fileInputRef = useRef(null);

  useEffect(() => {
    setProfile({
      firstName: user?.firstName,
      lastName: user?.lastName,
      email: user?.email,
      contact: user?.contact,
      profilePicture: user?.profilePicture,
    });
  }, [user]);

  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    profilePicture: "",
  });
  const [password, setPassword] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleButtonClick = () => {
    if (fileInputRef.current && fileInputRef.current.click) {
      fileInputRef.current.click();
    }
  };
  


  const handleProfileChange = (field, value) => {
    setProfile({
      ...profile,
      [field]: value,
    });
  };

  const handlePasswordChange = (field, value) => {
    setPassword({
      ...password,
      [field]: value,
    });
  };

  const successSubmitProfile = () => {
    console.log("profile", profile);
    updateProfile(
      {
        firstName: profile.firstName,
        lastName: profile.lastName,
        email: profile.email,
        contact: profile.contact,
        profilePicture: profile.profilePicture,
      },
      {
        onSuccess: (updateProfileSuccess) => {
          notification.success({
            message: "Error",
            description: updateProfileSuccess?.message,
          });
          Dispatch(authSignIn({ user: updateProfileSuccess?.data }));
          setProfile({
            firstName: "",
            lastName: "",
            email: "",
            contact: "",
            profilePicture: "",
          });
        },
        onError: (error) => {
          notification.error({
            message: "Error",
            description: getErrorFromApi(error),
          });
        },
      }
    );
  };

  const successSubmitPassword = () => {
    const payload = {
      oldPassword: password.oldPassword,
      newPassword: password.newPassword,
    };
    if (password.newPassword === password.confirmPassword) {
      changePassword(
        { payload, reset: false },
        {
          onSuccess: (changePasswordSuccess) => {
            notification.success({
              message: "Error",
              description: changePasswordSuccess?.message,
            });
            setPassword({
              oldPassword: "",
              newPassword: "",
              confirmPassword: "",
            });
          },
          onError: (error) => {
            notification.error({
              message: "Error",
              description: getErrorFromApi(error),
            });
          },
        }
      );
    } else {
      notification.error({
        message: "Error",
        description: "Password does not match",
      });
    }
  };

  const props = (key) => getProps(setProfile, profile, key);

  return (
    <div className="flex flex-col gap-8">
      <div>
        {accountSettingsData?.map((section, index) => (
          <React.Fragment key={index}>
            <div
              className={
                section?.buttonText ? "flex justify-between flex-wrap mt-3" : ""
              }
            >
              <h2 className="text-black text-sm sm:text-xl font-medium pb-1">
                {section?.heading}
              </h2>
              {section?.buttonText && (
                <DocButton
                  onClick={() => setIsModalOpen(true)}
                  prefix={<PlusOutlined className="mr-2 text-sm text-white" />}
                  text={section?.buttonText}
                  className={"text-white rounded-lg"}
                />
              )}
            </div>

            <div className="mt-3 gap-5 sm:gap-y-4 flex flex-col sm:flex-row flex-wrap">
              {section?.inputs?.map((eachInput, index) => (
                <div key={index} className="w-100% lg:w-[30%] flex flex-col">
                  <label className="text-greydark text-sm pb-1">
                    {eachInput?.label}{" "}
                    {eachInput?.required && (
                      <span className="text-redColor">*</span>
                    )}
                  </label>
                  {eachInput.type === "uploadImage" ? (
                    <div className="flex">
                      {/* <Button onClick={handleButtonClick} size='large' icon={<UploadOutlined />} style={{ color: "#002F49", fontSize: "14px" }}>{profile?.profilePicture?.name ? profile?.profilePicture?.name : "Update Profile Picture"}</Button>

                      <input
                        type="file"
                        ref={fileInputRef}
                        className="hidden"
                        accept="image/*"
                        onChange={(value) =>
                          handleProfileChange(
                            eachInput?.key,
                            value.target.files[0]
                          )
                        }
                        alt="profile"
                      /> */}
                      <DocImgUpload
                        onClick={handleButtonClick}
                        onChange={(value) =>
                          handleProfileChange(eachInput?.key, value.target.files[0])
                        }
                        text={profile?.profilePicture?.name?profile?.profilePicture?.name:"Update Profile Picture"}
                        // fileName={profile?.profilePicture?.name || null}
                        // text={profile?.profilePicture?.name ? '' : 'Update Profile Picture'}
                      />


                    </div>
                  ) : (
                    <DocInput
                      onChange={(value) =>
                        handleProfileChange(eachInput?.key, value)
                      }
                      type={eachInput?.type}
                      value={profile?.[eachInput?.key]}
                      placeholder={eachInput?.placeholder}
                      className={"w-[100%] sm:w-[100%] md:w-[100%] h-[40px]"}
                    />
                  )}
                </div>
              ))}
            </div>
          </React.Fragment>
        ))}
      </div>
      <div>
        <DocButton
          onClick={() => handleSubmit(profile, successSubmitProfile)}
          text={"Update"}
          className={"text-white w-[160px]"}
        />
      </div>
      {accountSettingChangePass?.map((section, index) => (
        <React.Fragment key={index}>
          <div
            className={
              section?.buttonText ? "flex justify-between flex-wrap mt-3" : ""
            }
          >
            <h2 className="text-black text-sm sm:text-xl font-medium pb-1">
              {section?.heading}
            </h2>
            {section?.buttonText && (
              <DocButton
                onClick={() => setIsModalOpen(true)}
                prefix={<PlusOutlined className="mr-2 text-sm text-white" />}
                text={section?.buttonText}
                className={"text-white rounded-lg"}
              />
            )}
          </div>
          <div className="mt-0 md:w-3/4 relative bottom-8">
            {section?.inputs?.map((inputs, index) => (
              <div className="w-100% lg:w-[45%] flex flex-col" key={index}>
                <label className="text-greydark text-sm mt-3">
                  {inputs?.label}
                </label>
                <DocInput
                  onChange={(value) => handlePasswordChange(inputs?.key, value)}
                  type={inputs?.type}
                  placeholder={inputs?.placeholder}
                  className={"h-[40px]"}
                />
              </div>
            ))}
          </div>
        </React.Fragment>
      ))}
      <div>
        <DocButton
          onClick={() => handleSubmit(password, successSubmitPassword)}
          text={"Save changes"}
          className={"text-white w-[160px]"}
        />
      </div>
    </div>
  );
};

export default AccountSettingsForm;
