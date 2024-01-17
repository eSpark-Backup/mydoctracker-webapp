"use client"

import { Badge, Popover } from "antd";
import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import DocButton from "../common/docButton";
import Notifications from "./notifications";
import ConfirmModal from "../modals/confirmModal";
import { authSignOut } from "@/app/redux/store/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from 'next/navigation'
import { useOutsideClick } from "@/app/utils";
import Requests from "./request";

const Header = ({ showDrawer }) => {
    const { role } = useSelector((state)=>state.auth)
    const router = useRouter()
    const dispatch = useDispatch()

    const [openNotification, setOpenNotification] = useState(false);
    const [openRequest, setOpenRequest] = useState(false);
    const [showButton, setShowButton] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOk = () => {
        dispatch(authSignOut())
        router.push('/auth/signin')
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        setShowButton(false)
    };

    const logoutRef = useRef(null);
    useOutsideClick(logoutRef, () => setShowButton(false))

    return (
        <>
            <div className={`${role === "user" && !showDrawer ? 'justify-end' : 'justify-between'}  h-[60px] bg-[#FFF] flex items-center py-7 px-3`}>
                <div className="flex flex-row items-center justify-center gap-3">
                {showDrawer && <div onClick={showDrawer} className="block xl:hidden">
                    <Image src={"/icons/headerhamBurger.svg"} width={50} height={50} alt="menu" />
                </div>}
                {role === "user" && showDrawer && <div className="flex justify-start">
                    <Link href={"/dashboard/devices"}>
                        <DocButton prefix={<Image className="!mr-0 xl:!mr-2" src={"/icons/AddWhite.svg"} width={13} height={13} alt="plus" />} text={"Add Device"} className={"!text-[0px] xl:!text-[18px] !bg-[#FCBF4A] text-white"} />
                    </Link>
                </div>}
                </div>

                <div className="relative">
                    <div className="flex justify-end items-center py-3 gap-4">
                        {role === "admin" &&
                        <>
                        <Link href={"/dashboard/admin/pricing-plan"}>
                            <DocButton text={"Pricing plan"} className={"text-white !bg-primary !text-[12px] md:!text-[15px] lg:w-[160px]"} />
                        </Link>
                        <Badge count={1}>
                            <Popover
                                content={<Requests />}
                                trigger="click"
                                open={openRequest}
                                onOpenChange={(newOpen) => setOpenRequest(newOpen)}
                            >
                                <Image className="cursor-pointer" src={"/icons/user.svg"} width={25} height={25} alt="user" />
                            </Popover>
                        </Badge>
                        </>
                        }
                        <Badge count={1}>
                            <Popover
                                content={<Notifications />}
                                trigger="click"
                                open={openNotification}
                                onOpenChange={(newOpen) => setOpenNotification(newOpen)}
                            >
                                <Image className="cursor-pointer" src={"/icons/Bell.svg"} width={25} height={25} alt="bell" />
                            </Popover>
                        </Badge>
                        <div className={`${role === "admin" ? "xl:w-[180px] sm:h-[50px]" : "sm:h-[40px] xl:w-[128px]"} w-max border-0 xl:border-2 border-greyBorder h-[40px]  flex justify-between items-center rounded-[50px] px-1  ${role !== "admin" && 'pr-4'}`} onClick={() => setShowButton(!showButton)}>
                            <Image src={"/icons/userAvatar.svg"} width={30} height={30} alt="avatar" />
                            <p className="hidden xl:block text-center text-sm font-normal">John Doe</p>
                            {role === "admin" && <DocButton text={"Basic"} className={"text-primary hidden xl:block bg-secondary text-[10px] !my-4"} />}
                        </div>
                    </div>

                    {showButton ?
                    <div ref={logoutRef} onClick={() => setIsModalOpen(true)} className={`shadow-lg z-10 bg-white absolute ${role === "admin"?"top-[65px]":"top-[55px] "} right-0 p-2 rounded-b-[10px]  w-[120px] cursor-pointer flex justify-center items-center border-1 border-greyBorder`}>
                        <p className="text-primary">Logout</p>
                    </div> : null}
                </div>
                <ConfirmModal
                    isModalOpen={isModalOpen}
                    handleOk={handleOk}
                    handleCancel={handleCancel}
                    cancelButton="Cancel"
                    confirmButton="Yes"
                    description="Are you sure you want to logout?"
                    icon={"confirmBlack.svg"}
                    acceptButtonColor={"bg-primary"}
                    width={450}
                />
            </div>

        </>
    );
};

export default Header;
