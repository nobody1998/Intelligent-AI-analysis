//封装post，get,patch 请求
import { request } from "./servies";
const jyRquest = {
  //  post 封装请求
  async post(config, delay = 0) {
    await new Promise((resolve) => setTimeout(resolve, delay));
    return request({ ...config, method: "POST" });
  },
  async get(config, delay = 0) {
    await new Promise((resolve) => setTimeout(resolve, delay));
    return request({ ...config, method: "GET" });
  },
  async patch(config, delay = 0) {
    await new Promise((resolve) => setTimeout(resolve, delay));
    return request({ ...config, method: "PATCH" });
  },
};
export default jyRquest;
