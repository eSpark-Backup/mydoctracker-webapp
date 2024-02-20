import { getCookie } from 'cookies-next';
import { request } from '../../utils/axios-utils'
import { useMutation } from 'react-query'

const getAuthToken = () => getCookie("token");

export async function editDocument({ id, title, creationDate, file, fields }) {
    const authToken = getAuthToken();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("creationDate", creationDate);
    formData.append("file", file);
    formData.append("fields", JSON.stringify(fields));
    const res = request({
        method: "PUT",
        url: `/document/${id}`,
        data: formData,
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${authToken}`,
        },
    });

    return res
}

function useEditDocument() {
    const query = useMutation({
        mutationFn: (payload) =>
            editDocument(payload),
    })
    return query
}

export default useEditDocument