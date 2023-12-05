"use client"
import { Row, Input, Col, Button, Select, Pagination, Switch, Modal } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import React, { Fragment, useState } from 'react'
import { useQuery } from 'react-query';
import axios from 'axios';

const Admin = () => {
    const [isModalOpen, setIsModalOpen] = useState(true);
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

    const td = {
        border: '1px solid #ddd',
        padding: '11.5px 8px',
        overflow: 'hidden',
        flex: 1
    }
    const th = {
        border: '1px solid #ddd',
        padding: '11.5px 8px',
        backgroundColor: "#002F49",
        overflow: 'hidden',
        flex: 1,
        color: '#fff'
    }

    const th_first_child = {
        borderTopLeftRadius: '8px',
        overflow: 'hidden'
    }

    const th_last_child = {
        borderTopRightRadius: '8px',
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
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
        return response.data;
    };
    const usePosts = () => {
        return useQuery('posts', fetchPosts, {
            // React Query options
            staleTime: 60000, // 1 minute (time before considering data as stale and refetching)
        });
    };
    const { data, error, isLoading } = usePosts();

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
                            {
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
