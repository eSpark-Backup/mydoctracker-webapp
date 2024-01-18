import axios from "axios";

const client = axios.create({ baseURL: "http://34.234.163.166:3001" });

export const request = async ({ method = "GET", url, data, ...rest }) => {
  client.defaults.headers.common.Authorization = `Bearer token`;

  return client({
    method,
    url,
    data,
    ...rest
  })
    .then((response) => {
      return response.data; // Extract data from the response
    })
    .catch((error) => {
      // Optional: Log the error for debugging
      console.error("API request error:", error);

      throw error; // Rethrow the error to trigger the React Query onError callback
    });
};
