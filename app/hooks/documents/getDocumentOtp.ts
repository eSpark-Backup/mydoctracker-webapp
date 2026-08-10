import { getCookie } from 'cookies-next';
import { request } from '../../utils/axios-utils'
import { useMutation } from 'react-query'

const getAuthToken = () => getCookie("token")

export async function documentOtp() {
    const authToken = getAuthToken();
    const res = request({
        method: "Get",
        url: "/document/otp",
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${authToken}`,
        },
    });

    return res
}

function useGetDocumentOtp() {
    const query = useMutation({
        mutationFn: () => documentOtp(),
    })
    return query
}

export default useGetDocumentOtp