import { getCookie } from 'cookies-next';
import { request } from '../../utils/axios-utils'
import { useMutation } from 'react-query'

const getAuthToken = () => getCookie("token");

export async function addEmployee({ firstName, lastName, address, username, email, password, contact, role, subsidiary, accessibility }) {
    const authToken = getAuthToken();
    // const formData = new FormData();
    // formData.append("deviceId", deviceId);
    // formData.append("type", type);
    // formData.append("title", title);
    // formData.append("creationDate", creationDate);
    // formData.append("file", file);
    // formData.append("otp", otp);
    // formData.append("fields", JSON.stringify(fields));


    const formData = {
        firstName,
        lastName,
        address,
        username,
        email,
        password,
        contact,
        role,
        subsidiary,
        ...(role === "BCU" && { accessibility })
    }

    const res = request({
        method: "POST",
        url: "/employee",
        data: formData,
        headers: {
            // 'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${authToken}`,
        },
    });

    return res
}

function useAddEmployee() {
    const query = useMutation({
        mutationFn: (payload) =>
            addEmployee(payload),
    })
    return query
}

export default useAddEmployee