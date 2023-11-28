import Image from 'next/image'
import React from 'react'
import StoreBox from '../components/storeBox'
import { footerRoutes1, footerRoutes2, storeBoxs } from '@/app/constant'
import Link from 'next/link'

const Footer = () => {
  return (
    <>
      <footer className='lg:px-[6rem]  px-[2rem] py-[4rem] bg-cover bg-repeat footer-bg flex lg:flex-row flex-col justify-between'>
        <div className='lg:w-[50%] w-full '>
          <div className='flex justify-start flex-col xl:w-[50%] pb-8'>
            <div className="flex items-center pb-5">
              <Image
                className="w-[71px] mr-4"
                src={"/Images/logo.svg"}
                alt="logo"
                width={10}
                height={10}
              />
              <h6 className="text-white text-3xl">Mydoctracker</h6>
            </div>

            <div className='text-white'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua sed do eiusmod tem labore.
            </div>
          </div>


          <div>
            <h6 className='text-white text-xl pb-5'>Get the free app</h6>

            <div className='flex sm:justify-start justify-center gap-5 flex-wrap'>
              {
                storeBoxs?.map((item, index) => (
                  <StoreBox key={index} heading={item.heading} title={item.title} icon={item.icon} link={item.link} />
                ))
              }
            </div>
          </div>
        </div>

        <div className='lg:w-[50%] w-full lg:pt-0 pt-10 flex justify-end'>
          <div className='xl:w-[50%] w-[100%] pb-8 justify-center flex flex-col'>
            <div className='h-[128px] flex justify-around items-center'>
              <div>


                {
                  footerRoutes1?.map((item, index) => (
                    <Link href={item.link} key={index}>
                      <p className='text-white text-md pb-4'>{item.title}</p>
                    </Link>
                  ))
                }
              </div>

              <div>
                {
                  footerRoutes2?.map((item, index) => (
                    <Link href={item.link} key={index}>
                      <p className='text-white text-md pb-4'>{item.title}</p>
                    </Link>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className='flex justify-center items-center bg-white  h-[50px]'>
        <p className='text-primary text-md font-semibold'>© Copyright | 2023 All Rights Reserved</p>
      </footer>
    </>
  )
}

export default Footer