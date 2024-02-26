import { getCookie } from "cookies-next";
import { request } from "../../utils/axios-utils";
import { useMutation } from "react-query";

const getAuthToken = () => getCookie("token");

export async function addSubsidiary(name) {
  const authToken = getAuthToken();

  const res = request({
    method: "POST",
    url: "/subsidiary",
    data: { name },
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
  });

  return res;
}

function useAddSubsidiary() {
  const query = useMutation({
    mutationFn: (name) => addSubsidiary(name),
  });
  return query;
}

export default useAddSubsidiary;
