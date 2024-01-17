import { request } from '../../utils/axios-utils'
import { useMutation } from 'react-query'

export async function loginUser({
  username,
  password,
  agreement
}) {
  const res = request({
    method: "POST",
    url: "/users/signin",
    data: {
      username,
      password,
      rememberMe: agreement
    }
  });

  return res
}

function useLogin() {
  const query = useMutation({
    mutationFn: ({ username, password, agreement }) =>
      loginUser({
        username,
        password,
        agreement
      }),
  })
  return query
}

export default useLogin