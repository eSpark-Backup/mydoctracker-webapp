import { Radio, Space } from "antd"

const RadioFilterPopup = ({ forwardedRef, filter, handleFilter, className }) => {
    return(
       <div ref={forwardedRef} className={`${className} radio-modal w-[208px] absolute top-[60px] right-[50px] md:right-[100px] bg-[#F5F6FA] rounded-lg shadow-2xl p-5 z-10`}>
        <div className='text-primary border-[#E4E4E4] border-b-[1px] pb-1 font-semibold'>Type</div>
        <Radio.Group value={filter.type} onChange={(e)=>handleFilter("type", e.target.value)} >
            <Space direction="vertical">
                <Radio value={'SINGLE'}><div className='text-primary p-1 font-semibold'>Single page</div></Radio>
                <Radio value={'MULTIPLE'}><div className='text-primary p-1 font-semibold'>Multi page</div></Radio>
            </Space>
        </Radio.Group>
        <div className='text-primary border-[#E4E4E4] border-b-[1px] mt-3 pb-1 font-semibold'>Devices</div>
        <Radio.Group value={filter.status} onChange={(e)=>handleFilter("status", e.target.value)}>
            <Space direction="vertical">
                <Radio value={"ACTIVE"}><div className='text-primary p-1 font-semibold'>On devices</div></Radio>
                <Radio value={"INACTIVE"}><div className='text-primary p-1 font-semibold'>Off devices</div></Radio>
            </Space>
        </Radio.Group>
       </div>
    )
}

export default RadioFilterPopup