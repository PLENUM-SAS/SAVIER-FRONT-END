import axios from "axios";
const API = import.meta.env.VITE_API_URL;

export const getProductsAPI = async () => {
  const res = await axios.get(`${API}/api/Products`);
  return res.data;
};

export const postProductsAPI = async (data: any) => {
  const res = await axios.post(`${API}/api/Products`, {
    name: "string",
    description: "string",
    originalPrice: 0,
    restaurantId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    categoryId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  });
  return res.data;
};

export const getProductAPI = async (id: number) => {
  const res = await axios.get(`${API}/api/Products/${id}`);
  return res.data;
};

export const putProductAPI = async (id: number, data: any) => {
  const res = await axios.put(`${API}/api/Products/${id}`, {
    name: "string",
    description: "string",
    originalPrice: 0,
    restaurantId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    categoryId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  });
  return res.data;
};

export const deleteProductAPI = async (id: number) => {
  const res = await axios.delete(`${API}/api/Products/${id}`);
  return res.data;
};

export const getProducByRestaurantAPI = async (id: number) => {
  const res = await axios.get(`${API}/api/Products/restaurant/${id}`);
  return res.data;
};
