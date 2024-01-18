import { request } from '../../utils/axios-utils'
import { useMutation } from 'react-query'

export async function forgotPassword({
    username,
    password,
    agreement
  }) {
    const res = request({ url: "/users/signin" },{username, password, agreement});
    return res

  }

function useForgotPassword() {
    const query = useMutation({
      mutationFn: ({ username, password, agreement }) =>
        forgotPassword({
          username,
          password,
          agreement
        }),
    })
    return query
  }

  export default useForgotPassword