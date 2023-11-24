import React from 'react'

const SignContainer = ({children}) => {
  return (
    <div className='bg-white flex justify-center h-full'>
    <div className='w-9/12 py-8'>   
     {children}
    </div>
    </div>
  
  )
}

export default SignContainer