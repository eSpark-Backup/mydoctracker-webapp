import { getCookie } from "cookies-next";
import { request } from "../../utils/axios-utils";
import { useMutation } from "react-query";

const getAuthToken = () => getCookie("token");

export async function AddReport({ email, description, reportPicture }) {
    const authToken = getAuthToken();
    const formData = new FormData();
    formData.append("email", email);
    formData.append("description", description);
    formData.append("reportPicture", reportPicture);
    const res = request({
      method: "POST",
      url: `/report`,
      data: formData,
      headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${authToken}`,
      },
    });
  
    return res;
}
  

function useAddReport() {
    const query = useMutation({
      mutationFn: (data) => AddReport(data),
    });
    return query;
}
  
  

export default useAddReport;
