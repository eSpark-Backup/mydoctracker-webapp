import { getCookie } from 'cookies-next';
import { request } from '../../utils/axios-utils'
import { useMutation } from 'react-query'

const getAuthToken = () => getCookie("token");

export async function getDocumentById(id) {
    const authToken = getAuthToken();

    const res = request({
        method: "GET",
        url: `/document/${id}`,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken}`,
        },
    });

    return res
}

function useGetDocumentById() {
    const query = useMutation({
        mutationFn: (id) =>
        getDocumentById(id),
    })
    return query
}

export default useGetDocumentById