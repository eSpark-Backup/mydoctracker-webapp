import Image from 'next/image'
import React from 'react'
import DocButton from '../../common/docButton'

const GIFBanner = () => {
  return (
    <div className="min-h-full flex justify-center items-center relative">
    <div className="absolute w-full h-full bg-cover bg-center bg-no-repeat z-0 background-image">
      {/* Your GIF Image */}
    </div>
    <div className="content z-10 flex flex-col items-center min-h-[280px] justify-between">
      <div className='flex gap-5 items-center'>
        <div>
            <Image src={"/Images/logo.svg"} alt="logo" width={100} height={100} />
        </div>
        <h3 className='text-4xl text-white font-semibold'>
        Mydoctracker
        </h3>
      </div>


      <div className='flex flex-col items-center '>
        <p className='text-white text-4xl pb-5'>
        Don’t Have an Account yet?
        </p> 

      <DocButton className={"bg-secondary h-[52px] px-4 w-6/12"} text={"Sign Up"}/>

      </div>
    </div>
  </div>
  )
}

export default GIFBanner