import { getCookie } from 'cookies-next';
import { request } from '../../utils/axios-utils'
import { useMutation } from 'react-query'

const getAuthToken = () => {

  return getCookie("token");
};

export async function updateProfile({ firstName, lastName, email, contact, profilePicture }) {
  const authToken = getAuthToken();
  const formData = new FormData();
  formData.append("firstName", firstName);
  formData.append("lastName", lastName);
  formData.append("email", email);
  formData.append("contact", contact);
  formData.append("profilePicture", profilePicture);

  const res = await request({
    method: "PUT",
    url: "/users/update",
    data: formData,
    headers: {
      'Content-Type': 'multipart/form-data',
      'Authorization': `Bearer ${authToken}`,
    },
  });

  return res
}

function useUpdateProfile() {
  const query = useMutation({
    mutationFn: (payload) =>
      updateProfile(payload),
  })
  return query
}

export default useUpdateProfile