"use client"
import { Badge } from "antd";
import React, { useState } from "react";
import Image from "next/image";
import ConfirmModal from "../modals/confirmModal";

const Header = ({ showDrawer }) => {
    const [showButton, setShowButton] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false);


    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        setShowButton(false)
    };
    return (
        <>
            <div className="h-[8vh] sm:h-[7vh] bg-[#FFF] flex justify-between items-center py-7 px-3">
                <div onClick={showDrawer} className="visible xl:invisible">
                    <Image src={"/icons/headerhamBurger.svg"} width={50} height={50} alt="menu" />
                </div>

                <div className="relative">
                    <div className="flex justify-end items-center gap-3 cursor-pointer" onClick={() => setShowButton(!showButton)}>
                        <Badge count={1}>
                            <Image src={"/icons/Bell.svg"} width={25} height={25} alt="bell" />
                        </Badge>
                        <div className="w-32 border-2 border-greyBorder h-[40px] sm:h-[40px] flex justify-between items-center rounded-[50px] pl-1 pr-4">
                            <Image src={"/icons/userAvatar.svg"} width={30} height={30} alt="avatar" />
                            <p className="text-sm font-normal">John Doe</p>
                        </div>
                    </div>

                    {showButton ? <div onClick={()=>setIsModalOpen(true)} className="bg-white absolute left-10 p-2 rounded-b-[10px]  w-[120px] cursor-pointer flex justify-center items-center border-1 border-greyBorder">
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