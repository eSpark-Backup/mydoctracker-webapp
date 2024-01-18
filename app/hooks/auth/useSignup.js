import { request } from '../../utils/axios-utils'
import { useMutation } from 'react-query'

export async function signupUser(payload) {
  const res = request({
    method: "POST",
    url: "/users/signup",
    data: payload
  });

  return res
}

function useSignup() {
  const query = useMutation({
    mutationFn: (payload) =>
      signupUser(payload),
  })
  return query
}

export default useSignup