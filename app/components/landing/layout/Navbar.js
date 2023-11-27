"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { landingRoutes } from "@/app/constant";

const Navbar = () => {

    return (
        <>
            <nav
                className={`bg-primary md:block sticky top-0 z-50`}
            >
                <div className="flex justify-between items-center h-[60px] lg:px-[5rem] px-[2rem]">
                    {/* logo section   */}
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


                    {/* Routes  */}
                    <div className="hidden md:block">
                    <div className="flex space-x-8 ">
                        {landingRoutes?.map((item) => (
                            <Link key={item.id} href={item.link} className="text-white font-semibold hover:text-secondary navbar-link navbar-link-grow-up">
                                <span className=" text-xs ">{item.title}</span>
                            </Link>
                        ))}
                    </div>
                    </div>

                    {/* button section  */}
                    <div className="hidden md:block">
                        <div className="flex bg-secondary justify-between px-4 py-2 rounded-full">
                            <button className="text-white hover:text-primary font-semibold px-3 text-sm">
                                Login
                            </button>

                            <div className="text-white">
                                |
                            </div>
                            <button className="text-white hover:text-primary font-semibold px-3 text-sm">
                                Signup
                            </button>
                        </div>
                    </div>


                    <div className="md:hidden cursor-pointer">
                        <Image src={"/icons/hamburger.svg"} className="w-[35px]" alt="menu" width={10} height={10} />
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
