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
      const user = JSON.parse(localStorage.getItem("user"));
      if (user) {
        // 确保在 headers 中设置 Authorization
        config.headers.Authorization = user.token_type + user.access_token;
      }
      return config;
    },
    (err) => {}
  );

  // 响应拦截器
  service.interceptors.response.use(
    (res) => {
      if (res.status === 200) {
        // Message({
        //   message: "请求成功",
        //   center: true,
        // });
      } else if (res.status === 401) {
        Message({
          message: "未授权，请重新登录",
          center: true,
        });
      }
      console.log(res);
      return res.data;
    },
    (err) => {
      return err;
    }
  );
  return service(config);
}
