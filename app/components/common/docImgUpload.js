import React, { useRef, useEffect } from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Button } from 'antd';

const DocImgUpload = ({ onClick, text, onChange }) => {
    const fileInputRef = useRef(null);

    useEffect(() => {
        // Ensure that the ref is assigned before using it
        fileInputRef.current = fileInputRef.current || {};
    }, [fileInputRef]);

    return (
        <div>
            <Button
                onClick={() => {
                    onClick();
                    fileInputRef.current.click();
                }}
                size='large'
                icon={<UploadOutlined />}
                style={{ color: '#002F49', fontSize: '14px' }}
            >
                {text?text:"Upload"}
            </Button>
            {/* {console.log(fileName, 'File Name')}
            {console.log(text, 'Text')} */}
            <input
                type='file'
                ref={fileInputRef}
                className='hidden'
                accept='.png, .jpg, .jpeg'
                onChange={onChange}
                alt='profile'
            />
        </div>
    );
};

export default DocImgUpload;
