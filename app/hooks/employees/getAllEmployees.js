import { getCookie } from "cookies-next";
import { request } from "../../utils/axios-utils";
import { useMutation } from "react-query";

const getAuthToken = () => getCookie("token");

export async function getAllEmployee(search) {
  const authToken = getAuthToken();

  let url = "/employee?page=1&limit=20"
  if (search) url += `&search=${search}`

  const res = request({
    method: "GET",
    url,
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
