import { getCookie } from 'cookies-next';
import { request } from '../../utils/axios-utils'
import { useMutation } from 'react-query'


const getAuthToken = () => {

  return getCookie("token");
};

export async function changePassword(payload) {
  const authToken = getAuthToken();

  const res = await request({
    method: "PUT",
    url: "/users/change-password",
    data: payload,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken}`,
    },
  });

  return res
}
function useChangePassword() {
    const query = useMutation({
      mutationFn: (payload) =>
        changePassword(payload),
    })
    return query
  }

  export default useChangePassword