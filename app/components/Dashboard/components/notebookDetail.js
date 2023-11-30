import React from 'react'

const NoteBookDetail = ({ field, value }) => {
    return (
        <div className='flex gap-8'>
            <p className='text-grey font-semibold'>{field}</p>
            <p className='text-primary font-semibold'>{value}</p>
        </div>
    )
}

export default NoteBookDetail
