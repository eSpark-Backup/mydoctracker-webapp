import { GIFBanner, SignContainer, SingUpForm } from '@/app/components'
import React from 'react'


export const metadata = {
  title: 'My Doc Tracker - Sign Up',
  description: '...',
}


const SignUp = () => {
  return (
    <div className='flex lg:flex-row flex-col min-h-screen' >
      <div className='lg:w-7/12 w-full' >
        <GIFBanner buttonTitle={"Sign In"} description="Already have an account?" redirect={"signin"}/>
      </div>
      <div className='lg:w-5/12 w-full'>
        <SignContainer> 
          <SingUpForm/>
        </SignContainer>
      </div>
    </div>
  )
}

export default SignUp