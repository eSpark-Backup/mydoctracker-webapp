import { getCookie } from 'cookies-next';
import { request } from '../../utils/axios-utils'
import { useMutation } from 'react-query'
import { useState } from 'react';

const getAuthToken = () => getCookie("token");
// services/documents.js

export function useDocumentHistoryState() {
    const [activeItem, setActive] = useState(null);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(1);
    const [limit] = useState(10);

    return { activeItem, setActive, page, setPage, total, setTotal, limit };
}


export async function getEmployeeAllDocuments({ id, page, limit }) {
    const authToken = getAuthToken();

    const res = request({
        method: "GET",
        url: `/document/history/${id}?page=${page}&limit=${limit}`,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken}`,
        },
    });

    return res
}

function useGetEMployeeAllDocuments() {
    const query = useMutation({
        mutationFn: (payload) =>
            getEmployeeAllDocuments(payload),

    })
    return query
}

export default useGetEMployeeAllDocuments