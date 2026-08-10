import { getCookie } from 'cookies-next';
import { request } from '../../utils/axios-utils'
import { useMutation } from 'react-query'

const getAuthToken = () => getCookie("token");

export async function deleteDocument(id) {
    const authToken = getAuthToken();

    const res = request({
        method: "DELETE",
        url: `/document/${id}`,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken}`,
        },
    });

    return res
}

function useDeleteDocument() {
    const query = useMutation({
        mutationFn: (payload) =>
            deleteDocument(payload),
    })
    return query
}

export default useDeleteDocument