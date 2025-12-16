import axios from "axios";
const API = import.meta.env.VITE_API_URL;

export const registerAPI = async (formData: any) => {
  const res = await axios.post(`${API}/api/auth/register`, formData);
  return res.data;
};

export const loginAPI = async (formData: any) => {
  const res = await axios.post(`${API}/api/auth/login`, formData);
  return res.data;
};
