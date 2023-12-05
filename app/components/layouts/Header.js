import { Avatar, Badge } from "antd";
import { BellOutlined } from "@ant-design/icons";
import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="h-[8vh] sm:h-[7vh] bg-[#FFF] flex justify-end items-center pr-4 gap-3">
      <Badge count={1}>
        <Image src={"/icons/Bell.svg"} width={25} height={25} alt="Bell" />
      </Badge>
      <div className="w-32 border-2 border-greyBorder h-[40px] sm:h-[40px] flex justify-between items-center rounded-[50px] pr-4">
        <Image src={"/icons/userAvatar.svg"} width={30} height={30} alt="avatar" />
        <p className="text-sm font-normal">John Doe</p>
      </div>
    </div>
  );
};

export default Header;
