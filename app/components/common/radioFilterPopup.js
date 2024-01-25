import { Radio, Space } from "antd"

const RadioFilterPopup = ({ forwardedRef, filter, handleFilter, className }) => {
    return(
       <div ref={forwardedRef} className={`${className} radio-modal w-[208px] absolute top-[60px] right-[50px] md:right-[100px] bg-[#F5F6FA] rounded-lg shadow-2xl p-5 z-10`}>
        <div className='text-primary border-[#E4E4E4] border-b-[1px] pb-1 font-semibold'>Type</div>
        <Radio.Group value={filter.type} onChange={(e)=>handleFilter("type", e.target.value)} >
            <Space direction="vertical">
                <Radio value={'single'}><div className='text-primary p-1 font-semibold'>Single page</div></Radio>
                <Radio value={'multi'}><div className='text-primary p-1 font-semibold'>Multi page</div></Radio>
            </Space>
        </Radio.Group>
        <div className='text-primary border-[#E4E4E4] border-b-[1px] mt-3 pb-1 font-semibold'>Requests</div>
        <Radio.Group value={filter.requests} onChange={(e)=>handleFilter("requests", e.target.value)}>
            <Space direction="vertical">
                <Radio value={"new"}><div className='text-primary p-1 font-semibold'>New requests</div></Radio>
                <Radio value={"pending"}><div className='text-primary p-1 font-semibold'>Pending requests</div></Radio>
            </Space>
        </Radio.Group>
        <div className='text-primary border-[#E4E4E4] border-b-[1px] mt-3 pb-1 font-semibold'>Devices</div>
        <Radio.Group value={filter.devices} onChange={(e)=>handleFilter("devices", e.target.value)}>
            <Space direction="vertical">
                <Radio value={"on"}><div className='text-primary p-1 font-semibold'>On devices</div></Radio>
                <Radio value={"off"}><div className='text-primary p-1 font-semibold'>Off devices</div></Radio>
            </Space>
        </Radio.Group>
       </div>
    )
}

export default RadioFilterPopup