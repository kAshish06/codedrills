import axios, { AxiosInstance } from "axios";

const baseUrl = process.env.MOCK_XERO_API_URL || "http://localhost:3000";

const apiClient: AxiosInstance = axios.create({
  baseURL: baseUrl,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
