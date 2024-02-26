import { getCookie } from "cookies-next";
import { request } from "../../utils/axios-utils";
import { useMutation } from "react-query";

const getAuthToken = () => getCookie("token");

export async function getAllSubsidiaries() {
  const authToken = getAuthToken();

  const res = request({
    method: "GET",
    url: "/subsidiary",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
  });

  return res;
}

function useGetAllSubsidiaries() {
  const query = useMutation({
    mutationFn: () => getAllSubsidiaries(),
  });
  return query;
}

export default useGetAllSubsidiaries;
