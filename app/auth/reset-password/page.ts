import { ForgetPasswordForm, GIFBanner, ResetPasswordForm, SignContainer, SignInForm } from '@/app/components'
import React from 'react'


export const metadata = {
  title: 'My Doc Tracker - Reset Password',
  description: '...',
}

const ResetPassword = () => {
  return (
    <div className='flex lg:flex-row flex-col min-h-screen' >
      <div className='lg:w-7/12 w-full' >
        <GIFBanner/>
      </div>
      <div className='lg:w-5/12 w-full '>
        <SignContainer> 
          <ResetPasswordForm/>
        </SignContainer>
      </div>
    </div>
  )
}

export default ResetPassword