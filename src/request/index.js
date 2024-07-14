//封装post，get,patch 请求
import { request } from "./servies";
const jyRquest = {
  //  post 封装请求
  post(config) {
    return request({ ...config, method: "POST" });
  },
  get(config) {
    return request({ ...config, method: "GET" });
  },
  patch(config) {
    return request({ ...config, method: "PATCH" });
  },
};
export default jyRquest;
