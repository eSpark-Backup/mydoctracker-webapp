"use client"
import { Row, Input, Col, Button, Select, Pagination, Switch, Modal } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import React, { Fragment, useState } from 'react'
import { useQuery } from 'react-query';
import axios from 'axios';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import "./style.css"


const SwitchRenderer = ({ value, rowIndex }) => {
    // Assuming value is a boolean, you can customize this based on your data structure
    return <Switch style={{ backgroundColor: !!value ? '#FCBF4A' : '#ccc' }} defaultChecked={value} />;
};
const NameRenderer = ({ value, rowIndex }) => {
    const td = {
        overflow: 'hidden',
        flex: 1
    }
    // Assuming value is a boolean, you can customize this based on your data structure
    return (
        <div className='flex items-center' style={td}>
            <img src='/assets/images/ProfilePic.png' />
            <p className='ml-2'>{value}</p>
        </div>)
};
const LocationRenderer = ({ value, rowIndex }) => {
    const td = {
        overflow: 'hidden',
        flex: 1
    }
    // Assuming value is a boolean, you can customize this based on your data structure
    return <div className='' style={td}>
        <a>View</a>
    </div>
};

const Admin = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const table = {
        borderCollapse: 'collapse',
        width: '100%',
        overflow: 'hidden'
    }
    const input_container = {
        position: 'relative',
        width: '300px', /* Set your desired width */
    }

    const triangle = {
        position: 'absolute',
        top: '50%',
        right: '10px',
        width: 0,
        height: 0,
        borderRight: '20px solid red',
        borderTop: '20px solid #fff',
        transform: 'translateY(-50%) rotate(45deg)',
        display: 'inline-block',
    }

    const checkmark = {
        position: 'absolute',
        top: '50%',
        right: '6px',
        transform: 'translateY(-50%)',
        fontSize: '10px', /* Adjust the font size of the check mark */
        color: '#fff', /* Set the color of the check mark */
    }

    const input_field = {
        width: '100%',
        padding: '8px',
        boxSizing: 'border-box',
    }
    const fetchPosts = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=20');
        return response.data;
    };
    const usePosts = () => {
        return useQuery('posts', fetchPosts, {
            // React Query options
            staleTime: 60000, // 1 minute (time before considering data as stale and refetching)
        });
    };
    const { data, error, isLoading } = usePosts();
    const finalData = () => {
        const tempData = []
        !!data?.length && data.map((item, i) => {
            tempData.push({
                name:i % 2 === 0 ? 'Jon Doe' : 'Iron Man',
                status: i % 2 === 0 ? true : false,
                tracker_ID: '0123456789',
                type: i % 2 === 0 ? 'Single Page' : 'Multiple Page',
                requests: i % 2 === 0 ? '00' : i % 3 === 0 ? '02' : '01',
            })
        })
        return tempData
    }
    const columnDefs = [
        { headerName: 'Name', field: 'name', width: 194, lockPosition: true, pinned: 'left', cellRenderer: NameRenderer },
        { headerName: 'Tracker ID', field: 'tracker_ID', width: 194 },
        { headerName: 'Type', field: 'type', width: 194 },
        { headerName: 'Requests', field: 'requests', width: 194 },
        { headerName: 'Location', width: 194,cellRenderer: LocationRenderer  },
        { headerName: 'Status', field: 'status',width: 194,cellRenderer: SwitchRenderer, },
    ];

    return (
        <>
            <div className='p-5 bg-white mt-5 rounded flex flex-col' style={{
                minHeight: 'calc(100vh - 116px)'
            }}>
                <Row className='items-center'>
                    <Col span={12}>
                        <Input size="large" placeholder="large size" prefix={<SearchOutlined style={{ color: "#666" }} />} />
                    </Col>
                    <Col span={12}>
                        <Row className='justify-end'>
                            <Button size="large" style={{ background: '#002F49' }}>
                                <img src='/assets/icons/Filter.svg' style={{ width: 16, height: 20 }} />
                            </Button>
                            <Select size="large"
                                defaultValue="lucy"
                                style={{ width: 120, margin: '0 15px' }}
                                options={[
                                    { value: 'jack', label: 'Jack' },
                                    { value: 'lucy', label: 'Lucy' },
                                    { value: 'Yiminghe', label: 'yiminghe' },
                                    { value: 'disabled', label: 'Disabled', disabled: true },
                                ]}
                            />
                            <Button onClick={showModal} size="large" type="primary" style={{ background: '#002F49' }} icon={<img src='/assets/icons/PlusIcon.svg' style={{ height: 14 }} />}>
                                Add
                            </Button>
                        </Row>
                    </Col>
                </Row>
                <Row className={['p-20', !isLoading && !data?.length && 'flex', !isLoading && !data?.length && 'justify-center', !isLoading && !data?.length && 'items-center'].join(' ')} style={{ flex: 1 }}>
                    <Col span={24}>
                        <div style={table}>

                            {
                                !!isLoading && <p>Loading...</p>
                            }
                            {
                                !!error && <p>Error: {error.message}</p>
                            }
                            {
                                (!isLoading && !data?.length) && <div className='flex flex-col justify-center items-center'>
                                    <img src='/assets/images/NoData.png' />
                                    <p className='mt-4'>You don’t have any employee. Please add  to continue further.</p>
                                </div>
                            }
                            {/* {
                                (!isLoading && !!data?.length) && (
                                    <div className='flex'>
                                        <div className='text-center' style={{ ...th, ...th_first_child }}>Name</div>
                                        <div className='text-center' style={th}>Tracker ID</div>
                                        <div className='text-center' style={th}>Type</div>
                                        <div className='text-center' style={th}>Requests</div>
                                        <div className='text-center' style={th}>Location</div>
                                        <div className='text-center' style={{ ...th, ...th_last_child }}>Status</div>
                                    </div>
                                )
                            }
                            {
                                data?.map((item, i) => (
                                    <Fragment>
                                        <div className='flex' key={i}>
                                            <div className='text-center flex justify-center items-center' style={td}>
                                                <img src='/assets/images/ProfilePic.png' />
                                                <p className='ml-2'>John Doe</p>
                                            </div>
                                            <div className='text-center' style={td}>0123456789</div>
                                            <div className='text-center' style={td}>Single Page</div>
                                            <div className='text-center' style={td}>00</div>
                                            <div className='text-center' style={td}>
                                                <a>View</a>
                                            </div>
                                            <div className='text-center' style={td}>
                                                <Switch defaultChecked />
                                            </div>
                                        </div>
                                    </Fragment>
                                ))
                            } */}
                            {
                                (!isLoading && data?.length) && (
                                    <div className="ag-theme-custom" style={{ height: 560 }}>
                                        <AgGridReact columnDefs={columnDefs} rowData={finalData()} />
                                    </div>
                                )
                            }
                        </div>
                    </Col>
                </Row>
                {
                    (!isLoading && !!data?.length) &&
                    <Row className='items-center justify-center'>
                        <Pagination
                            showSizeChanger={false}
                            defaultCurrent={2}
                            total={500}
                        />
                    </Row>}
            </div>
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <div style={input_container}>
                    <div style={triangle}>
                        <div style={checkmark}>&#10003;</div>
                    </div>
                    <input type="text" style={input_field} placeholder="Type something..." />
                </div>
            </Modal>
        </>
    )
}

export default Admin
