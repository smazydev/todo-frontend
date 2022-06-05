import axiosInstance from "../axiosConfig";

export default {
  signup: async (data) => {
    const res = await axiosInstance.post(
      "http://localhost:4000/api/v1/auth/signup",
      data
    );
    return res.data;
  },
  signin: async (data) => {
    const res = await axiosInstance.post(
      "http://localhost:4000/api/v1/auth/login",
      data
    );
    return res.data;
  },
};
