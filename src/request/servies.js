import axios from "axios";
// 导入loading Loading 服务
import { Message } from "element-ui";
import { BASE_URL, TIME_OUT } from "./config"; //不同环境的请求配置
export function request(config) {
  const service = axios.create({
    baseURL: BASE_URL, //配置公共接口
    timeout: TIME_OUT, //配置请求超时时间
  });
  // 请求拦截器
  service.interceptors.request.use(
    (config) => {
      //这里可以做token 设置
      if (localStorage.getItem("token") && localStorage.getItem("token") !== null) {
        // 确保在 headers 中设置 Authorization
        config.headers.Authorization = "bearer " + localStorage.getItem("token");
      }
      return config;
    },
    (err) => {}
  );

  // 响应拦截器
  service.interceptors.response.use(
    (response) => {
      // 对响应数据做点什么
      // 检查状态码，这里只处理2xx的情况
      if (response.status >= 200 && response.status < 300) {
        return response.data; // 只返回响应体中的数据
      } else {
        // 状态码不是2xx时，抛出一个错误
        const error = new Error(`HTTP Error ${response.status}`);
        // 你可以将响应对象附加到错误上，以便后续处理
        error.response = response;
        throw error;
      }
    },
    (error) => {
      // 对响应错误做点什么
      console.error("Response Error:", error); // for debug
      // 根据需要返回错误对象或抛出新错误
      return Promise.reject(error);
    }
  );

  return service(config);
}
