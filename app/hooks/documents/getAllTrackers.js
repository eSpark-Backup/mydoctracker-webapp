import { getCookie } from 'cookies-next';
import { request } from '../../utils/axios-utils'
import { useMutation } from 'react-query'

const getAuthToken = () => getCookie("token");

export async function getAllTrackers({ search, pageNo, select, type, status  }) {
    const authToken = getAuthToken();

    let url =  `/document/employee/subsidiary?page=${pageNo}&limit=10`
    if(select) url = `/document/employee/subsidiary/${select}?page=${pageNo}&limit=10`
    if(search.trim() !== '') url += `&search=${search}`
    if(type) url += `&type=${type}`
    if(status) url += `&status=${status}`

    const res = request({
        method: "GET",
        url,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken}`,
        },
    });

    return res
}

function useGetAllTrackers() {
    const query = useMutation({
        mutationFn: (filter) =>
        getAllTrackers(filter),
    })
    return query
}

export default useGetAllTrackers