import { Badge } from "antd";
import React from "react";
import Image from "next/image";

const Header = ({ showDrawer }) => {
    return (
        <div className="h-[8vh] sm:h-[7vh] bg-[#FFF] flex justify-between items-center py-7 px-3">
            <div onClick={showDrawer} className="visible xl:invisible">
                <Image src={"/icons/headerhamBurger.svg"} width={50} height={50} alt="menu" />
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