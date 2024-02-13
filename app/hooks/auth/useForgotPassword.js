import { request } from '../../utils/axios-utils'
import { useMutation } from 'react-query'

export async function forgotPassword(payload) {
  const res = request({
    method: "POST",
    url: "/users/password/forget",
    data: payload
  });
  return res

}

function useForgotPassword() {
  const query = useMutation({
    mutationFn: (payload) =>
      forgotPassword(payload),
  })
  return query
}

export default useForgotPassword