import axios from 'axios';

const axiosConfig = {
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'Content-type': 'application/json',
  },
  timeout: 15000,
};

const apiClient = axios.create(axiosConfig);

export async function get<T>(url: string): Promise<T> {
  const { data } = await apiClient.get<T>(url);
  return data;
}
