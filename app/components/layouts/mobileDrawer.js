import React from 'react';
import { Drawer } from 'antd';
import SiderbarRoutes from '../common/siderbarRoutes';
import { SidebarFooterRoutes, UserRoutes } from '@/app/constant';
import Image from 'next/image';
import { CloseOutlined } from '@ant-design/icons';

const MobileDrawer = ({ open, onClose }) => {

    return (
        <>
            <Drawer className='p-0' closable={false} placement="left" onClose={onClose} open={open}>
                <div className='min-h-screen bg-primary flex flex-col'>

                    <div onClick={onClose} className='flex justify-end pr-4 pt-4 text-white'>
                        <CloseOutlined />
                    </div>
                    <div className='flex flex-col justify-center items-center pb-10'>
                        <div className='py-5'>
                            <Image src='/images/logo.svg' width={50} height={50} alt="Logo" />
                        </div>
                        <div>
                            <h2 className='text-xl text-white'>My Doc Tracker</h2>
                        </div>
                    </div>

                    <div className='flex-1 flex flex-col justify-between'>
                        <div>
                            {
                                UserRoutes
                                    ?.map((item) => (
                                        <SiderbarRoutes key={item.id} title={item.title} link={item.link} icon={item.icon} iconfill={item.iconfill} />
                                    ))
                            }
                        </div>

                        <div>
                            <div>
                                {
                                    SidebarFooterRoutes.map((item) => (
                                        <SiderbarRoutes key={item.id} title={item.title} link={item.link} icon={item.icon} iconfill={item.iconfill} />
                                    ))
                                }
                                <br />
                            </div>

                            <div className='border-2 border-grey ' />
                            <div>
                                <SiderbarRoutes title={"Logout"} link={"dashboard"} icon={"dashboardLogout.svg"} iconfill={"dashboardLogout.svg"} />
                            </div>


                        </div>
                    </div>
                </div>
            </Drawer >
        </>
    );
};

export default MobileDrawer;