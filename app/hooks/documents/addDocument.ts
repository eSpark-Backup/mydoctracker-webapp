import { getCookie } from 'cookies-next';
import { request } from '../../utils/axios-utils'
import { useMutation } from 'react-query'

const getAuthToken = () => getCookie("token");

export async function addDocument({ deviceId, type, title, creationDate, file, otp, fields, employeeId }) {
    const authToken = getAuthToken();
    const formData = new FormData();
    formData.append("deviceId", deviceId);
    formData.append("type", type);
    formData.append("title", title);
    formData.append("creationDate", creationDate);
    formData.append("file", file);
    formData.append("otp", otp);
    if(employeeId) formData.append("employeeId", employeeId);
    if(fields.length > 0) formData.append("fields", JSON.stringify(fields));
    const res = request({
        method: "POST",
        url: "/document",
        data: formData,
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${authToken}`,
        },
    });

    return res
}

function useAddDocument() {
    const query = useMutation({
        mutationFn: (payload) =>
            addDocument(payload),
    })
    return query
}

export default useAddDocument