import { getCookie } from 'cookies-next';
import { request } from '../../utils/axios-utils'
import { useMutation } from 'react-query'


const getAuthToken = () => {

  return getCookie("token");
};

export async function changePassword(payload, token, reset) {
  const authToken = getAuthToken();

  const res = await request({
    method: "PUT",
    url: reset ? `/users/change-password/?token=${token}` : "/users/change-password",
    data: payload,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': reset ? `Bearer ${token}` : `Bearer ${authToken}`,
      key: process.env.NEXT_PUBLIC_APIKEY
    },
  });

  return res
}
function useChangePassword() {
    const query = useMutation({
      mutationFn: ({ payload, token, reset }) =>
        changePassword(payload, token, reset),
    })
    return query
  }

  export default useChangePassword