import React from 'react'

const SignContainer = ({children}) => {
  return (
    <div className='bg-white flex justify-center h-full'>
    <div className='w-9/12 py-8'>
      <h6 className="text-3xl text-secondary font-semibold text-center">Sign In</h6>
     {children}
    </div>
    </div>
  
  )
}

export default SignContainer