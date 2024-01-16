import axios from "axios";

const client = axios.create({ baseURL: "http://34.234.163.166:3001/api" });

export const request = ({ ...options }) => {
  client.defaults.headers.common.Authorization = `Bearer token`;

  return client(options)
    .then((response) => {
      return response; // Extract data from the response
    })
    .catch((error) => {
      // Optional: Log the error for debugging
      console.error("API request error:", error);

      throw error; // Rethrow the error to trigger the React Query onError callback
    });
};
