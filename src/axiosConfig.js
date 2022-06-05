import axios from "axios";

const axiosInstance = axios.create();

const headers = {
  Authorization: `Bearer ${localStorage.getItem("token")}`,
};

axiosInstance.interceptors.request.use(
  (req) => {
    req.headers = headers;
    console.log(headers);
    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);
axiosInstance.interceptors.response.use(
  (res) => {
    res.headers = headers;
    if (res.status === 200) {
      console.log("success");
    }
    return res;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default axiosInstance;