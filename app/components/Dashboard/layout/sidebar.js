import Image from 'next/image'
import React from 'react'
import SiderbarRoutes from '../components/siderbarRoutes'
import { SidebarFooterRoutes, UserRoutes } from '../../../constant'

const Sidebar = () => {
    return (
        <div className='hidden min-h-screen bg-primary xl:flex flex-col'>
            <div className='flex flex-col justify-center items-center pb-10'>

                <div className='py-5'>
                    <Image src='/Images/logo.svg' width={50} height={50} alt="logo" />
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
    )
}

export default Sidebar
