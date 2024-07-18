import jyRequest from "../request/index";

// 获取支付套餐接口
export function getInfoList() {
  return jyRequest.get({
    url: "/ai_data/api/pay/payment_info/list/",
  });
}

// 获取支付二维码接口
export function createOrder(data) {
  return jyRequest.post({
    url: "/ai_data/api/pay/payment_info/create_order/",
    data: data,
  });
}

// 支付回调通知
export function getNotify(data) {
  return jyRequest.post({
    url: "/ai_data/api/pay/payment_info/notify/",
    data: data,
  });
}
