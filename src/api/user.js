import jyRequest from "../request/index";

// 用户注册接口
export function register(data) {
  return jyRequest.post({
    url: "/ai_data/api/user/register/",
    data: data,
  },500);
}

// 邮箱/短信验证码发送
export function sendCode(data) {
  return jyRequest.post({
    url: "/ai_data/api/user/code_send/",
    data: data,
  });
}

// 用户登录接口
export function login(data) {
  return jyRequest.post({
    url: "/ai_data/api/user/login/",
    data: data,
  },500);
}

// 用户信息更新接口
export function updateInfor(data) {
  return jyRequest.post({
    url: "/ai_data/api/user/update/",
    data: data,
  },500);
}

// 重置密码接口
export function resetPassword(data) {
  return jyRequest.post({
    url: "/ai_data/api/user/reset_password/",
    data: data,
  },500);
}