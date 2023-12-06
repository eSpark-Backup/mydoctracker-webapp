import { Badge } from "antd";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import DocButton from "../common/docButton";

const Header = ({ showDrawer }) => {
    return (
        <div className="h-[8vh] sm:h-[7vh] bg-[#FFF] flex justify-between items-center py-7 px-3">
            <div onClick={showDrawer} className="block xl:hidden">
                <Image src={"/icons/headerhamBurger.svg"} width={50} height={50} alt="menu" />
            </div>
            <div className="hidden xl:block flex justify-start">
                <Link href={"/dashboard/devices"}>
                    <DocButton prefix={<Image className="mr-1" src={"/icons/AddWhite.svg"} width={13} height={13} alt="plus" />} text={"Add Device"} className={"!bg-[#FCBF4A] text-white min-w-[125px]"} />
                </Link>
            </div>

            <div className="flex justify-end items-center gap-3">
                <Badge count={1}>
                    <Image src={"/icons/Bell.svg"} width={25} height={25} alt="bell" />
                </Badge>
                <div className="w-32 border-2 border-greyBorder h-[40px] sm:h-[40px] flex justify-between items-center rounded-[50px] pr-4">
                    <Image src={"/icons/userAvatar.svg"} width={30} height={30} alt="avatar" />
                    <p className="text-sm font-normal">John Doe</p>
                </div>
            </div>
        </div>
    );
};

export default Header;