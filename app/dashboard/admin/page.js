"use client"

import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation'
import Image from 'next/image';
import { DocButton, SearchBar, Table, HeadContent, DocDropdown, RadioFilterPopup, LoadingScreen } from '@/app/components';
import { columns } from '@/app/columns/allUser';
import AddEmployeeModal from '@/app/components/modals/addEmployeeModal';
import AddSubsidiaryModal from '@/app/components/modals/addSubsidiaryModal'
import { debounce, getErrorFromApi, useOutsideClick } from '@/app/utils';
import ProtectedRoute from '@/app/utils/protectedRoutes';
import { useAddSubsidiary, useGetAllSubsidiaries } from '@/app/hooks/subsidiary';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSubsidiaries } from '@/app/redux/store/slices/subsidiary';
import { notification } from 'antd';
import useGetAllTrackers from '@/app/hooks/documents/getAllTrackers';
import { fetchTrackers } from '@/app/redux/store/slices/tracker';

const Admin = () => {
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();
  const { subsidiaries } = useSelector((state) => state.subsidiary);
  const { trackers } = useSelector((state) => state.trackers);
  const options = subsidiaries.map(value => { return { label: value.name, value: value.id} })

  const { mutate: getAllTrackers, isLoading: loading } = useGetAllTrackers();
  const { mutate: addSubsidiary, isLoading } = useAddSubsidiary();
  const { mutate: fetchAllSubsidiaries } = useGetAllSubsidiaries();
  const getAllSubsidiaries = () => {
    fetchAllSubsidiaries('', {
      onSuccess: (fetchedSuccess) => {
        dispatch(fetchSubsidiaries(fetchedSuccess?.data));
      },
      onError: (error) => {
        notification.error({
          message: 'Error',
          description: getErrorFromApi(error),
        });
      },
    });
  };

  useEffect(() => {
    getAllSubsidiaries();
  }, []);

    const router = useRouter();
    const [openModal, setOpenModal] = useState(false)
    const [openSubsidiaryModal, setOpenSubsidiaryModal] = useState(false)
    const [openRadioFilterModal, setOpenRadioFilterModal] = useState(false)
    const [subsidiary, setSubsidiary] = useState('')
    const [filter, setFilter] = useState({
        search: "",
        select: "",
        type: "",
        status: "",
        pageNo: 1,
    })

    const handleFilter = (key, value) => {
        setFilter({
            ...filter,
            [key]: value
        })
    }

    const gotoDetail = (rowId) => {
        router.push(`/dashboard/admin/employee-details/${rowId}`)
    }

    const gotoLocation = (rowId) => {
      //location history page routing
    }

    const handleSwitch = (id, value) => {
      // here api will be hitted for update the status
    }

    const handleAddSubsidiary = () => {
    addSubsidiary(subsidiary, {
      onSuccess: (fetchedSuccess) => {
        notification.success({
            message: 'Success',
            description: 'Subsidiary has been successfully added',
        });
        getAllSubsidiaries()
        setSubsidiary('')
      },
      onError: (error) => {
        notification.error({
          message: 'Error',
          description: getErrorFromApi(error),
        });
      },
    });
        setOpenSubsidiaryModal(false)
    }

    const fetchAllTrackers = () => {
      getAllTrackers(filter, {
        onSuccess: (fetchedSuccess) => {
          dispatch(fetchTrackers(fetchedSuccess?.data?.items));
          setTotal(fetchedSuccess?.meta?.totalItems)
        },
        onError: (error) => {
          notification.error({
            message: 'Error',
            description: getErrorFromApi(error),
          });
        },
      });
    };

    useEffect(() => {
      fetchAllTrackers();
    }, [filter]);

    const filterModal = useRef(null);
    useOutsideClick(filterModal, () => setOpenRadioFilterModal(false))

    return (
        <ProtectedRoute allowedRoles={[{role:"admin",roleType:""}]}>
        <div>
            <div className="w-[100%] sm:w-[100%] flex items-end mt:0 sm:mt-10">
                <HeadContent
                    mainHeading="Admin Panel"
                    paragraph="Lorem ipsum dolor sit amet consectetur. Cursus cras aliquam amet malesuada iaculis habitant. Aliquam faucibus ultricies tincidunt mattis vitae nec nulla sit. A molestie "
                />
            </div>
            <div className="w-[100%] drop-shadow-lg rounded-lg h-[65vh] bg-white my-4 p-3 md:p-8">
                <div>
                    <div className='flex flex-col md:flex-row items-start bd:items-center justify-between gap-3 w-[94%] m-auto'>
                        <SearchBar handleChange={(value) => debounce(() => handleFilter('search', value))} className='!w-[100%] sm:mr-2 md:!w-[300px]' placeholder="Search by name or tracker ID..." />
                        <div className='relative flex flex-row items-center justify-start md:justify-center gap-1 md:gap-3'>
                            <DocDropdown value={filter.select?.name} onChange={(value) => handleFilter('select', value.value)} className={"w-[120%] md:w-40 md:ml-2"} options={options} placeholder="Select group" defaultValue={filter.select?.name} />
                                <Image className='cursor-pointer ml-8  md:ml-0 md:mr-0' onClick={()=>setOpenRadioFilterModal(!openRadioFilterModal)} src="/icons/tabs-Image.svg" width={40} height={40} alt="tabs-image" />
                                {openRadioFilterModal && <RadioFilterPopup forwardedRef={filterModal} filter={filter} handleFilter={handleFilter} />}
                            <DocButton onClick={() => setOpenModal(true)} prefix={<Image className="mr-2" src={"/icons/AddWhite.svg"} width={15} height={15} alt="plus" />} className={"rounded-md !bg-primary text-white h-[100%] px-4 w-4/12 md:w-6/12"} text="Add" />
                        </div>
                    </div>
                    {loading ?
                      <div className='flex flex-row items-center justify-center h-[calc(65vh-100px)] text-[20px]'><LoadingScreen /></div>
                      : trackers?.length > 0 ?
                      <div className='mt-5 p-0 md:p-10 flex items-center justify-center h-[50vh] md:h-[55vh] no-scrollbar'>
                        <Table
                            total={total}
                            data={trackers}
                            columns={columns({ gotoDetail, handleSwitch, gotoLocation })}
                            currentPage={filter.pageNo}
                            handlePagination={handleFilter}
                        />
                      </div>
                      :
                      <div className='flex flex-col items-center justify-center w-[100%] h-[calc(65vh-100px)]'>
                        <Image src="/images/no-data.svg" width={150} height={200} alt="no-data-image" />
                        <div className='w-[100%] text-center text-[16px] text-[#838383] font-[400] mt-[32px]'>You don’t have any employee. Please add  to continue further.</div>
                      </div>
                    }
                </div>
            </div>
            <AddEmployeeModal
                showModal={openModal}
                onCancel={() => setOpenModal(false)}
                onSuccess={(type) => {
                    setOpenModal(false)
                    if (type === "Subsidiary") {
                        setOpenSubsidiaryModal(type)
                    } else {
                        if (subsidiaries.length > 0) {
                          router.push('/dashboard/admin/add-employee');
                        } else {
                          notification.error({
                            message: 'Error',
                            description: 'Please add subsidiary first',
                          });
                        }
                    }
                }}
            />
            <AddSubsidiaryModal
                subsidiary={subsidiary}
                setSubsidiary={setSubsidiary}
                loading={isLoading}
                showModal={openSubsidiaryModal}
                onCancel={() => setOpenSubsidiaryModal(false)}
                onSuccess={handleAddSubsidiary}
            />
        </div>
        </ProtectedRoute>
    )
}

export default Admin
