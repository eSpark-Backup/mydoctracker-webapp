import Image from 'next/image'
import React from 'react'

const FeatureBox = ({currentIndex, id, description, icon, iconfill, revert}) => {
    const selected = currentIndex === id
    return (
        <div className={`transition-all duration-300  ${revert ? "flex-row-reverse" : ""} ${selected ? "shadow-lg drop-shadow-md border-2 border-grey-50": ""} min-h-[155px]  flex p-5 rounded-3xl bg-white`}>
            <div className={`w-[80%] ${selected ? "lg:text-[19px] text-xs" : "lg:text-base text-xs" } flex justify-center items-center text-textPrimary`}>
                {description}
            </div>
            <div className={`w-[20%] flex justify-center ${revert ? "pr-3": "pl-3"}`}>
                <Image src={`/icons/${selected ? iconfill : icon}`} alt="icon" className= {`${selected ? "w-[60px]" :"w-[50px]"}`} width={50} height={50} />
            </div>
        </div>
    )
}

export default FeatureBox