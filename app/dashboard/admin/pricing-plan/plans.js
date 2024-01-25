"use client"

import Image from "next/image";
import { DocButton } from "@/app/components";

const PackageCardListing = ({ type, packagePlans, handleBuy}) => {
    return (
      <div className='flex flex-col lg:flex-row items-center justify-between mt-5 gap-5 customize-flex'>
          {packagePlans.map((plan, index)=>{
              return(
                  <div key={plan.id} className={`w-[280px] px-5 py-5 bg-[url('/Images/package-card.png')] bg-center bg-no-repeat bg-contain`}>
                    <div className='ml-5 font-semibold text-primary text-[20px]'>{plan.planName} Plan</div>
                    <div className='font-semibold text-white text-center text-[25px] my-4'>Plan {plan.planType}</div>
                    <div className='text-center mt-10'><span className='font-semibold text-[30px] text-white'>$ {plan.price} /</span> <span className="text-[20px] text-[#E4E4E4]">{type}</span></div>
                    <div className='px-8'>
                        {plan.details.map((detail, index)=>{
                            return(
                                <div className='flex flex-row gap-2 items-center justify-start mt-2' key={index}>
                                  <Image className='bg-[#05FF00] rounded-full p-1' src='/icons/check.svg' width={15} height={15} alt='check' />
                                  <div className='text-white text-[12px]'>{detail}</div>
                                </div>
                            )
                        })}
                        <DocButton onClick={() => handleBuy(plan.id)} className={"bg-white !h-[30px] px-3 w-9/12 mx-auto mt-5 text-base"} text={type === "Month" && index === 0?"Current plan":"Upgrade"} />
                    </div>
                  </div>
              )
          })}
      </div>
    )
}

export default PackageCardListing;