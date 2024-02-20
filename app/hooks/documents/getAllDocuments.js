import { getCookie } from 'cookies-next';
import { request } from '../../utils/axios-utils'
import { useMutation } from 'react-query'

const getAuthToken = () => getCookie("token");

export async function getAllDocuments() {
    const authToken = getAuthToken();

    const res = request({
        method: "GET",
        url: "/document",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken}`,
        },
    });

    return res
}

function useGetAllDocuments() {
    const query = useMutation({
        mutationFn: () =>
        getAllDocuments(),
    })
    return query
}

export default useGetAllDocuments