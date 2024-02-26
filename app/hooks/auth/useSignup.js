import { request } from '../../utils/axios-utils'
import { useMutation } from 'react-query'



//Single User Signup
export async function signupUser(payload) {
  const res = request({
    method: "POST",
    url: "/users/signup/su",
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


// Corporate Signup 
export async function signupCorporate(payload) {
  const res = request({
    method: "POST",
    url: "/users/signup/cu",
    data: payload
  });

  return res
}

function useCorporateSignup() {
  const query = useMutation({
    mutationFn: (payload) =>
      signupCorporate(payload),
  })
  return query
}




export {
  useSignup,
  useCorporateSignup
}