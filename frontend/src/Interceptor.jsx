import axios from "axios";
const baseUrl = process.env.BASE_URL;
const AxiosInstance = axios.create({
  baseURL: "http://localhost:2233",
});

export const getAllData = async () => {
  const { data } = await AxiosInstance.get("/get-all-person");
  return data;
};
