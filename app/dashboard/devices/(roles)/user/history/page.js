"use client"

import React, {useState} from "react"
import { Tabs } from 'antd';
import Image from 'next/image';
import LocationDetails from './location-details';
import TrackingMap from '@/app/utils/TrackingMap';
import { containerStyleMd } from '@/app/constant';
import { DocDatePicker } from '@/app/components';

const History = ({ admin }) => {

  const tabs = [
    {
      key: '1',
      label: 'Active',
      children: <LocationDetails active />,
    },
    {
      key: '2',
      label: 'Inactive',
      children: <LocationDetails />,
    },
];

const [datePickerVisible, setDatePickerVisible] = useState(false);

  const handleDatePickerOpen = () => {
    setDatePickerVisible(!datePickerVisible);
  };
       
  return (
    <div className={admin ? "w-[100%] flex flex-col" : "w-[100%] drop-shadow-lg rounded-lg bg-white my-4 flex flex-col"}>
      {admin ? null : <div className='border-[#E4E4E4] border-b-2 py-8 pr-8 pl-[70px] pb-5'>
        <h6 className='text-black font-semibold text-lg sm:text-xl'>Location History</h6>
      </div>}

            <div className='flex flex-col lg:flex-row gap-4 h-[100%]'>

              <div className='history relative tabs-image w-[100%] lg:w-[30%] border-[#E4E4E4] border-r-0 lg:border-r-2 h=[100%]'>
                <Tabs centered defaultActiveKey="1" items={tabs} />
                {<Image onClick={handleDatePickerOpen} className='absolute top-4 right-4 hidden lg:block' src="/icons/tabs-Image.svg" width={35} height={35} alt="tabs-image" />}
                {datePickerVisible && <DocDatePicker open={true} className="absolute top-10 left-4 invisible w-0 h-0 translate-y-full" handleDatePickerOpen={handleDatePickerOpen} onChange={() => {}} />}
              </div>

              <div className='w-[100%] lg:w-[70%] py-5 lg:py-10 px-3 lg:px-3'>
                <div className='flex flex-col gap-2 lg:flex-row items-center lg:items-start justify-around'>
                    <div className='w-[100%] lg:w-fit'>
                      <div className='text-[#002F49] font-bold text-[16px]'>Time</div>
                      <div className='text-[#666666] font-semibold text-[12px]'>1 Hour</div>
                      <div className='text-[#666666] font-semibold text-[12px]'>Start time: <span className='text-sm'>12:00 pm</span> - End time: <span className='text-sm'>01:00 pm</span></div>
                    </div>
                    <div className='w-[100%] lg:w-fit'>
                      <div className='text-[#002F49] font-bold text-[16px]'>Distance</div>
                      <div className='text-[#666666] font-semibold text-[12px]'>20 km</div>
                      <div className='text-[#666666] font-semibold text-[12px]'>Latitude: <span className='text-sm'>-8.957</span> - Longitude: <span className='text-sm'>-100.807</span></div>
                    </div>
                    <div className='w-[100%] lg:w-fit'>
                      <div className='text-[#002F49] font-bold text-[16px]'>Battery</div>
                      <div className='text-[#666666] font-semibold text-[12px]'>0.19% consumed</div>
                      <div className='text-[#666666] font-semibold text-[12px]'>Initial battery percentage: 97.78% <br></br> Ending battery percentage: 97.59%</div>
                    </div>
                </div>
                <div className='pt-5'>
                <TrackingMap containerStyle={containerStyleMd} />
                </div>

              </div>

            </div>

        </div> 
  )
}

export default History