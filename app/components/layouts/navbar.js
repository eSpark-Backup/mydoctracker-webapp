"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { landingRoutes } from "@/app/constant";
import { useDispatch, useSelector } from 'react-redux';
import ConfirmModal from "../modals/confirmModal";
import { useRouter } from "next/navigation";
import { authSignOut } from "@/app/redux/store/slices/authSlice";


const Navbar = ({ openDrawer }) => {
    const { role } = useSelector((state) => state.auth)
    const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
    const router = useRouter()
    const dispatch = useDispatch()

    const HandleLogoutSuccess = () => {
        dispatch(authSignOut())
        router.push('/auth/signin')
        setIsLogoutModalOpen(false);
    };

    const HandleLogoutCancel = () => {
        setIsLogoutModalOpen(false);
        setShowButton(false)
    };


    return (
        <>
            <nav
                className={`bg-primary md:block sticky top-0 z-50`}
            >
                <div className="flex justify-between items-center h-[60px] lg:px-[6rem] px-[2rem]">
                    <div className="flex justify-center items-center">
                        <Image
                            className="w-[33px] mr-2"
                            src={"/Images/logo.svg"}
                            alt="logo"
                            width={10}
                            height={10}
                        />
                        <h6 className="text-white text-sm">Mydoctracker</h6>
                    </div>


                    <div className="hidden md:block">
                    <div className="flex space-x-8 ">
                        {landingRoutes?.map((item) => (
                            <Link key={item.id} href={item.link} className="text-white font-semibold hover:text-secondary navbar-link navbar-link-grow-up">
                                <span className=" text-xs ">{item.title}</span>
                            </Link>
                        ))}
                    </div>
                    </div>

                    <div className="hidden md:block">
                        {role === "" ? <div className="flex bg-secondary justify-between px-4 py-2 rounded-full">
                            <Link href={"/auth/signin"}>
                                <button className="text-white font-semibold px-3 text-sm">
                                    Login
                                </button>
                            </Link>

                            <div className="text-white">
                                |
                            </div>

                            <Link href={"/auth/signup"}>
                                <button className="text-white font-semibold px-3 text-sm">
                                    Signup
                                </button>
                            </Link>
                        </div> : <button className="text-white bg-secondary font-semibold px-4 py-2 rounded-full text-sm" onClick={()=>setIsLogoutModalOpen(true)}>
                            Logout
                        </button>}
                    </div>


                    <div onClick={openDrawer} className="md:hidden cursor-pointer">
                        <Image src={"/icons/hamburger.svg"} className="w-[35px]" alt="menu" width={10} height={10} />
                    </div>
                </div>
                <ConfirmModal
                    isModalOpen={isLogoutModalOpen}
                    handleOk={HandleLogoutSuccess}
                    handleCancel={HandleLogoutCancel}
                    cancelButton="Cancel"
                    confirmButton="Yes"
                    description="Are you sure you want to logout?"
                    icon={"confirmBlack.svg"}
                    acceptButtonColor={"bg-primary"}
                    width={450}
                />
            </nav>
        </>
    );
};

export default Navbar;
