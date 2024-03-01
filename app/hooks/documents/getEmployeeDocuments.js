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
            'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImRlYzI4OGMxLWE5NGYtNDQ5Yi1iZTY3LTMyMzYyZjkwOGQyZiIsImVtYWlsIjoiemFoZWVyYmFiYXI5NTVAZ21haWwuY29tIiwiaWF0IjoxNzA5MjA4MDIxfQ._gkJ8qCQC2CnoL5HX5ayNf1MrpM_X4uW8UKNFfZ69LM`,
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