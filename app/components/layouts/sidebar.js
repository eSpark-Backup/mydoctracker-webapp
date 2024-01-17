import Image from 'next/image'
import React from 'react'
import SiderbarRoutes from '../common/siderbarRoutes'
import { getFooterRoutesForSidebar, getRoutesForSidebar } from '@/app/utils'
import { useSelector } from 'react-redux'
import { usePathname } from 'next/navigation'

const Sidebar = () => {
    const { role, roleType  } = useSelector((state) => state.auth)
    const pathname = usePathname();
    const routes = getRoutesForSidebar(role, roleType, pathname)
    const footerRoutes = getFooterRoutesForSidebar(role, roleType, pathname)

    return (
        <div className='hidden min-h-screen bg-primary xl:flex flex-col'>
            <div className='flex flex-col justify-center items-center pb-10'>

                <div className='py-5'>
                    <Image src='/Images/logo.svg' width={50} height={50} alt="logo" />
                </div>
                <div className='mb-12'>
                    <h2 className='text-xl lg:text-[25px] text-white'>My Doc Tracker</h2>
                </div>
            </div>

            <div className='flex-1 flex flex-col justify-between'>
                <div>
                    {routes.map((item) => (
                        <SiderbarRoutes key={item.id} title={item.title} link={item.link} icon={item.icon} iconfill={item.iconfill} />
                    ))
                    }
                </div>

                <div>
                    <div>
                        {
                            footerRoutes.map((item) => (
                                <SiderbarRoutes key={item.id} title={item.title} link={item.link} icon={item.icon} iconfill={item.iconfill} />
                            ))
                        }
                        <br />
                    </div>

                    <div className='border-2 border-grey ' />
                    <div>
                        <SiderbarRoutes title={"Logout"} icon={"dashboardlogout.svg"} iconfill={"dashboardlogout.svg"} />
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Sidebar
