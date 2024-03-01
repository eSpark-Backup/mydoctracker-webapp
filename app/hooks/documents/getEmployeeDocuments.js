import { getCookie } from 'cookies-next';
import { request } from '../../utils/axios-utils'
import { useMutation } from 'react-query'

const getAuthToken = () => getCookie("token");

export async function getEmployeeAllDocuments({ id, page, limit }) {
    const authToken = getAuthToken();

    const res = request({
        method: "GET",
        url: `/document/history/${id}?page=${page}&limit=${limit}`,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken}`,
        },
    });

    return res
}

function useGetEMployeeAllDocuments() {
    const query = useMutation({
        mutationFn: (payload) =>
            getEmployeeAllDocuments(payload),

    })
    return query
}

export default useGetEMployeeAllDocuments