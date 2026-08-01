import { getCookie } from "cookies-next";
import { request } from "../../utils/axios-utils";
import { useMutation } from "react-query";

const getAuthToken = () => getCookie("token");

export async function otpForReset(id) {
  const authToken = getAuthToken();

  const res = request({
    method: "GET",
    url: `/employee/reset-password/${id}`,
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });

  return res;
}

function useResetPwEmployeeOtp() {
  const query = useMutation({
    mutationFn: (payload) => otpForReset(payload),
  });
  return query;
}

export async function resetEmployeePassword({id, payload}) {
    const authToken = getAuthToken();
  
    const res = request({
      method: "PUT",
      url: `/employee/reset-password/${id}`,
      data: payload,
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
  
    return res;
  }
  
  function useResetEmployeePassword() {
    const query = useMutation({
      mutationFn: (payload) => resetEmployeePassword(payload),
    });
    return query;
  }

export { useResetPwEmployeeOtp, useResetEmployeePassword };
