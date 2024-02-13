"use client"

import Image from "next/image";
import DocButton from "../common/docButton";
import { requests } from "@/app/constant";

const Requests = () => {

  return (
    <div className='h-[60vh] no-scrollbar overflow-y-scroll'>
      {requests?.map((eachRequest, index) => (
                <div className='w-[280px] sm:w-full p-2' key={index}>
                    <div className='flex gap-3 cursor-pointer'>
                        <div className='cursor-pointer'>
                            <Image src={"/icons/userAvatar.svg"} width={60} height={60} alt='User' />
                        </div>
                        <div className='w-full'>
                            <div className='flex justify-between w-full'>
                                <h3 className='text-black text-base font-medium'>{eachRequest?.name}</h3>
                                <p className='text-[11px]'>{eachRequest?.time}</p>
                            </div>
                            <p className='text-greydark text-sm'>{eachRequest?.description}</p>
                            <p className='text-greydark text-xs'>{eachRequest?.group}</p>
                        </div>
                    </div>
                    <div className='flex justify-end gap-3 mt-3'>
                        <DocButton text={"Decline"} className={"bg-white text-xs border-2 rounded-md border-greyBorder"} />
                        <DocButton text={"Approve"} className={"!bg-primary text-xs text-white rounded-md"} />
                    </div>
                    <hr className='mt-2 w-4/5 mx-auto' />
                </div>
            ))}
    </div>
    
  );
};

export default Requests;