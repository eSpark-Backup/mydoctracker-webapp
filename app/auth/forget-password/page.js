import { ForgetPasswordForm, GIFBanner, SignContainer, SignInForm } from '@/app/components'
import React from 'react'


export const metadata = {
  title: 'My Doc Tracker - Forget Password',
  description: '...',
}

const ForgetPassword = () => {
  return (
    <div className='flex lg:flex-row flex-col min-h-screen' >
      <div className='lg:w-7/12 w-full' >
        <GIFBanner/>
      </div>
      <div className='lg:w-5/12 w-full '>
        <SignContainer> 
          <ForgetPasswordForm/>
        </SignContainer>
      </div>
    </div>
  )
}

export default ForgetPassword