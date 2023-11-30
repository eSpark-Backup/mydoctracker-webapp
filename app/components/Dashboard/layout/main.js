"use client"

import { Layout } from 'antd';
import React, { useState } from 'react'
import Sidebar from './sidebar';
import Header from './header';
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
                        {children}
                    </div>

                </div>
            </Layout >
        </>
    )
}

export default Main
