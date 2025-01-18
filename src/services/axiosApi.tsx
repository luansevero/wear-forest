import axios, { AxiosRequestConfig } from "axios";

const axiosBase = () => {
  const configs: Omit<AxiosRequestConfig, "headers"> = {
    baseURL: import.meta.env.VITE_SERVER_URL,
  };

  const instance = axios.create(configs);

  instance.interceptors.request.use(
    (config) => {
      return config;
    },
    (error) => Promise.reject(error)
  );

  return instance;
};

const api = axiosBase();

export { api };
