import axios from "axios";

const apiInstance = axios.create({
  baseURL: "http://localhost:3001/api/v1",
  headers: {
    Accept: "multipart/form-data",
  },
});

export default apiInstance;
