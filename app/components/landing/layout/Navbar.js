"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { landingRoutes } from "@/app/constant";

const Navbar = () => {
    const [navColor, setNavcolor] = useState(false);

    useEffect(() => {
        const changeColor = () => {
            if (window.scrollY >= 90) {
                setNavcolor(true);
            } else {
                setNavcolor(false);
            }
        };
        window.addEventListener("scroll", changeColor);
    }, []);

    return (
        <>
            <nav
                className={`${navColor ? "bg-white" : "bg-primary"} md:block sticky top-0 z-50`}
            >
                <div className="flex justify-between items-center h-[60px] px-[5rem]">
                    {/* logo section   */}
                    <div className="flex justify-center items-center">
                        <Image
                            className="w-[33px] mr-2"
                            src={"/Images/logo.svg"}
                            alt="logo"
                            width={10}
                            height={10}
                        />
                        <h6 className="text-white">Mydoctracker</h6>
                    </div>


                    {/* Routes  */}
                    <div className="flex space-x-6 ">
                        {landingRoutes?.map((item) => (
                            <Link key={item.id} href={item.link}>
                                <span className="text-white text-sm hover:text-secondary">{item.title}</span>
                            </Link>
                        ))}
                    </div>

                    {/* button section  */}
                    <div>
                        <Link href="/contact">
                            <button className="flex items-center bg-primary py-2 px-7 text-white rounded font-semibold hover:bg-secondary">
                                <span>Let&apos;s Talk</span>
                                <span className="ml-1">
                                    {/* <HiArrowNarrowRight /> */}
                                </span>
                            </button>
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
