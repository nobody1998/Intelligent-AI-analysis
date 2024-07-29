import jyRequest from "../request/index";

// 获取过滤列表
export function getFilterItems(data) {
  return jyRequest.get({
    url: "/ai_data/api/query/get_filter_items/",
    params: data,
  });
}

// 获取数据
export function getList(data) {
  return jyRequest.post({
    url: "/ai_data/api/query/get_list/",
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