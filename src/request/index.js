//封装post，get,patch 请求
import { request } from "./servies";
const jyRquest = {
  //  post 封装请求
  async post(config) {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return request({ ...config, method: "POST" });
  },
  async get(config) {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return request({ ...config, method: "GET" });
  },
  async patch(config) {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return request({ ...config, method: "PATCH" });
  },
};
export default jyRquest;
