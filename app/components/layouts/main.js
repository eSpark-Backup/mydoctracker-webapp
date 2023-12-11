"use client"

import { Layout } from 'antd';
import React, { useState } from 'react'
import Sidebar from './sidebar';
import Header from './landingHeader';
import MobileDrawer from './mobileDrawer';

const Main = ({ children }) => {
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };


    return (
        <>
            <Layout>
                <div className='flex'>
                    <div className='hidden xl:block w-2/12 min-h-screen'>
                        <Sidebar />
                    </div>
                    <div className='xl:w-10/12 w-full  min-h-screen bg-slate-400'>
                        <MobileDrawer open={open} showDrawer={showDrawer} onClose={onClose} />
                        <Header showDrawer={showDrawer} />
                        <div className="flex flex-col min-h-[93vh] p-3 sm:p-0 bg-[#F7F7F7]">
                            <div className="w-[100%] mx-auto sm:w-[85%] h-[100%] ">
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </Layout >
        </>
    )
}

export default Main
