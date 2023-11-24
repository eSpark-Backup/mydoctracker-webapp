import { GIFBanner, SignContainer, SignInForm } from '@/app/components'
import React from 'react'


const SignIn = () => {
  return (
    <div className='flex lg:flex-row flex-col min-h-screen' >
      <div className='lg:w-7/12 w-full' >
        <GIFBanner buttonTitle={"Sign Out"} redirect={"signup"}/>
      </div>
      <div className='lg:w-5/12 w-full'>
        <SignContainer> 
          <SignInForm/>
        </SignContainer>
      </div>
    </div>
  )
}

export default SignIn