//2.根据process.env.NODE_ENV
//开发环境：development;
//生产环境：production ;
//测试环境：test ;
let BASE_URL = "";
let TIME_OUT = 60000;
if (process.env.NODE_ENV === "development") {
  BASE_URL = "https://aidata.aiprom.cn";
} else if (process.env.NODE_ENV === "production") {
  BASE_URL = "https://aidata.aiprom.cn";
} else {
  BASE_URL = "https://aidata.aiprom.cn";
}
//在将这两个东西导出
export { BASE_URL, TIME_OUT };
