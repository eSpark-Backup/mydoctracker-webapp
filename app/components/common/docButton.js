import React from 'react'

const DocButton = ({ className, text, onClick, prefix, suffix }) => {
   return (
      <button
         onClick={onClick} className={`bg-primary rounded-[50px] text-[18px] px-4 h-[40px] flex justify-center items-center ${className}`} type='primary'>
         {
            prefix && prefix
         }
         {text}
         {suffix && (
            <span className="ml-2">
               {suffix}
            </span>
         )}
      </button>
   )
}

export default DocButton