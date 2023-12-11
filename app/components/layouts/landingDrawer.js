import { Drawer } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import { landingRoutes } from "@/app/constant";


const LandingDrawer = ({ open, onClose, activeTab, handleActiveTab }) => {
  return (
    <Drawer className='!bg-primary' placement="left" onClose={onClose} open={open}>
        <div className='flex flex-col justify-between h-[100%]'>
          <div>
              <div className="flex flex-col justify-center items-center mb-3">
                <Image
                  className="w-[50px] mr-2"
                  src={"/Images/logo.svg"}
                  alt="logo"
                  width={10}
                  height={10}
                />
                <h6 className="text-white text-xl font-semibold">My Doc Tracker</h6>
              </div>
              <div className="flex flex-col">
                {landingRoutes?.map((item) => (
                  <Link onClick={()=>handleActiveTab(item.title)} key={item.id} href={item.link} className={`${activeTab === item.title ? 'bg-white !text-primary' : 'bg-primary text-white'} px-10 py-3 my-2 text-white rounded-lg font-semibold`}>
                    <span className=" text-lg ">{item.title}</span>
                  </Link>
                ))}
              </div>
          </div>
          <div className="flex flex-col">
            <Link onClick={()=>handleActiveTab("Privacy")} href='/landing/' className={`${activeTab === "Privacy" ? 'bg-white !text-primary' : 'bg-primary text-white'} rounded-lg px-10 py-3 my-2 text-white font-semibold hover:text-secondary`}>
              <span className=" text-lg ">Privacy</span>
            </Link>
            <div className='bg-[#FFFFFF] w-[100%] h-[1px]'></div>
            <Link onClick={()=>handleActiveTab("Sign Up")} href='/auth/signup' className={`${activeTab === "Sign Up" ? 'bg-white !text-primary' : 'bg-primary text-white'} rounded-lg px-10 py-3 my-2 text-white font-semibold hover:text-secondary`}>
              <span className=" text-lg ">Sign Up</span>
            </Link>
          </div>
        </div>
        </Drawer>
  )
}

export default LandingDrawer