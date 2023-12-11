"use client"

import Image from "next/image";

const Notifications = () => {

  return (
    <div className='h-[60vh] no-scrollbar overflow-y-scroll'>
      {Array.from({length: 10}).map((_, ind)=>{
        return(
          <div key={ind} className='flex flex-row items-start justify-start w-[280px] sm:w-full p-2 gap-2'>
            <div className='w-[15%]'>
              <Image src="/icons/dashboardDocument.svg" width={30} height={30} alt="avatar" />
            </div>
            <div className='w-[80%] flex flex-row items-start justify-between'>
              <div>
                <div className='text-black text-sm font-bold'>Alex Dave</div>
                <div className='text-grey text-[10px] font-semibold'>Group: 1</div>
                <div className='text-grey text-[10px] font-semibold'>Tracker ID: 12345</div>
                <div className="mt-2 text-grey text-[12px] font-bold">Message to be displayed</div>
              </div>
              <div className='text-grey font-semibold text-[10px]'>9:00pm</div>
            </div>
          </div>
        )
      })}
    </div>
    
  );
};

export default Notifications;