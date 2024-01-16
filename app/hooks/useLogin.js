import { request } from '../utils/axios-utils'
import { useMutation } from 'react-query'

export async function loginUser({
    username,
    password,
    agreement
  }) {
    const res = request({ url: "/users/signin" },{username, password, agreement});
    return res

    // const res = await fetch(`http://34.234.163.166:3001/api/users/signin`, {
    //     method: "POST",
    //     body: JSON.stringify({
    //       username,
    //       password,
    //       agreement
    //     }),
    //     headers: {
    //       "content-type": "application/json",
    //     },
    //   })
    //   return await res.json()
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