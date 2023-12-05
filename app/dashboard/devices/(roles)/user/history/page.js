"use client"

import { Tabs } from 'antd';
import Image from 'next/image';

const History = () => {

const items = [
    {
      key: '1',
      label: 'Active',
      children: 'Content of Tab Pane 1',
    },
    {
      key: '2',
      label: 'Inactive',
      children: 'Content of Tab Pane 2',
    },
];
       
  return (
    <div className="w-[100%] drop-shadow-lg rounded-lg bg-white my-4 flex flex-col">
            <div className='border-[#E4E4E4] border-b-2 py-8 px-8 pb-5'> 
                <h6 className='text-black font-semibold text-lg sm:text-xl'>Location History</h6>
            </div>

            <div className='flex flex-col md:flex-row gap-4 h-[100%]'>

              <div className='relative tabs-image w-[100%] md:w-[30%] border-[#E4E4E4] border-r-0 md:border-r-2 h=[100%]'>
                <Tabs itemActiveColor="#002F49" inkBarColor="#002F49" centered defaultActiveKey="1" items={items} />
                <Image className='absolute top-4 right-4' src="/icons/tabs-Image.svg" width={35} height={35} alt="tabs-image" />
              </div>

              <div className='w-[100%] md:w-[70%] py-5 md:py-10 px-3 md:px-3'>
                
              </div>

            </div>

        </div> 
  )
}

export default History