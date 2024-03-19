import { request } from "@/app/utils/axios-utils";
import { getCookie } from "cookies-next";
import { useMutation } from "react-query";

const getAuthToken = () => getCookie("token");

export const editEmployee = ({id,firstName,lastName,email,contact,profilePicture})=>{
    const authToken = getAuthToken();
    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("email", email);
    formData.append("contact", contact);
    formData.append("profilePicture", profilePicture);
    const res = request({
        method: "PUT",
        url: `/employee/${id}`,
        data: formData,
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${authToken}`,
        },
    });
    return res
}

function useEditEmployee() {
    const query = useMutation({
        mutationFn: (payload) =>
        editEmployee(payload),
    })
    return query
}
export default useEditEmployee
