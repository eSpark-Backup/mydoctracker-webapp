import { getCookie } from 'cookies-next';
import { request } from '../../utils/axios-utils'
import { useMutation } from 'react-query'

const getAuthToken = () => {
    return getCookie("token");
};

export async function userInfo() {

    const authToken = getAuthToken();

    const res = request({
        method: "GET",
        url: "/users/info",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken}`,
        },
    });

    return res
}

function useLoginWithToken() {
    const query = useMutation({
        mutationFn: () =>
            userInfo(),
    })
    return query
}

export default useLoginWithToken