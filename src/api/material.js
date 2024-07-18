import jyRequest from "../request/index";

// 获取过滤列表
export function getFilterItems(data) {
  return jyRequest.post({
    url: "/ai_data/api/query/get_filter_items/",
    data: data,
  });
}

// 获取筛选项数据
export function getQueryData(data) {
  return jyRequest.post({
    url: "/ai_data/api/query/get_data/",
    data: data,
  });
}

// 获取详情
export function getDetail(data) {
  return jyRequest.post({
    url: "/ai_data/api/query/detail/",
    data: data,
  });
}