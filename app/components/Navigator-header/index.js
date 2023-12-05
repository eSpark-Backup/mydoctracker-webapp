import Image from 'next/image'
import { useRouter } from 'next/navigation'

const NavigatorHeader = ({previousPage, currentPage}) => {
  const router = useRouter()
  return (
    <div onClick={() => router.back()} className='cursor-pointer mt-4 flex flex-row items-center gap-1'>
        <div className='text-[12px] font-semibold text-[#424242]'>{previousPage}</div>
        <Image src="/icons/rightArrowOutline.svg" width={5} height={5} alt="right-arrow" />
        <div className='text-[12px] font-semibold text-[#002F49]'>{currentPage}</div>
    </div>
  )
}

export default NavigatorHeader