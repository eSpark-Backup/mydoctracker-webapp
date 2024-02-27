import { getCookie } from "cookies-next";
import { request } from "../../utils/axios-utils";
import { useMutation } from "react-query";

const getAuthToken = () => getCookie("token");

export async function getAllEmployee() {
  const authToken = getAuthToken();

  const res = request({
    method: "GET",
    url: "/employee?page=1&limit=100",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
  });

  return res;
}

function useGetAllEmployee() {
  const query = useMutation({
    mutationFn: (payload) => getAllEmployee(payload),
  });
  return query;
}

export default useGetAllEmployee;
