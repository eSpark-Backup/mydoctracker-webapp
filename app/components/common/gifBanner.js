import Image from 'next/image'
import React from 'react'
import DocButton from './docButton'
import Link from 'next/link'

const GIFBanner = ({ buttonTitle, redirect }) => {
  return (
    <div className="min-h-full flex justify-center items-center relative">
      <div className="absolute w-full h-full bg-cover bg-center bg-no-repeat z-0 background-image">
        {/* Your GIF Image */}
      </div>

      <div className="content z-10 flex flex-col items-center min-h-[280px] lg:justify-between justify-center ">
        <div className='flex gap-5 items-center'>
          <div className={'absolute left-4 top-4 lg:hidden'  } >
            <Image className='md:w-[35px] w-[25px]' src={"/icons/backArrow.svg"} alt="logo" width={20} height={20} />
          </div>
          <div>
            <Image className='lg:w-[100px] w-[60px]' src={"/images/logo.svg"} alt="logo" width={100} height={100} />
          </div>
          <h3 className='lg:text-4xl text-2xl text-white font-semibold'>
            Mydoctracker
          </h3>
        </div>


        <div className='lg:flex flex-col items-center hidden'>
          <p className='text-white text-4xl pb-5'>
            Don’t Have an Account yet?
          </p>

          <Link className='w-full flex justify-center' href={`/auth/${redirect}`}>
            <DocButton className={"bg-secondary h-[52px] px-4 w-6/12"} text={buttonTitle} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default GIFBanner