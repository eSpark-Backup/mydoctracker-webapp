"use client"

import { Layout } from 'antd';
import React, { useState } from 'react'
import Sidebar from './sidebar';
import Header from './Header';
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
                    <div className='hidden xl:block w-2/12 h-screen overflow-y-scroll no-scrollbar'>
                        <Sidebar />
                    </div>
                    <div className='xl:w-10/12 w-full  min-h-screen bg-slate-400'>
                        <MobileDrawer open={open} showDrawer={showDrawer} onClose={onClose} />
                        <Header showDrawer={showDrawer} />
                        <div className="flex flex-col overflow-y-scroll no-scrollbar h-[calc(100vh-60px)] p-3 !pb-0 bg-[#F7F7F7]">
                            <div className="w-[100%] overflow-y-scroll no-scrollbar mx-auto sm:w-[90%] h-[98%] p-3">
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
