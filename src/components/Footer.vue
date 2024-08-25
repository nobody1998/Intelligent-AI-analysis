<template>
  <div class="footer">
    <div class="footer_main">
      <div class="footer_main_logo">
        <img src="../assets/img/LOGO-NAME.png" alt="" />
      </div>
      <div class="footer_main_text">
        低成本高效率，一站式达人合作方案，轻松实现品牌国际化推广，无忧托付
      </div>
      <div class="footer_main_content">
        <div class="link">
          <div class="link_item" v-for="(item, index) in footList" :key="index">
            <div class="link_item_title">{{ item.title }}</div>
            <div
              class="link_item_text"
              v-for="(subItem, subIndex) in item.list"
              :key="subIndex"
            >
              {{ subItem.text }}
            </div>
          </div>
        </div>
        <div class="code">
          <!-- <div class="code_item">
            <div class="code_item_main">
              <img src="../assets/img/wx_code.png" />
            </div>
            <div class="code_item_text">客服微信</div>
          </div> -->
          <div class="code_item">
            <div class="code_item_main">
              <img src="../assets/img/wx_code.png" />
            </div>
            <div class="code_item_text">客服微信</div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer_foot">
      Copyright©2024 智数ai.data 版权所有 粤ICP备2024168407号
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      footList: [
        {
          title: "首页",
          list: [{}],
        },
        {
          title: "创意短剧",
          list: [
            {
              text: "短剧素材",
              // url: "/"
            },
            {
              text: "短剧投放榜单",
              // url: "/"
            },
          ],
        },
        {
          title: "AI工具",
          list: [
            {
              text: "视频翻译",
              // url: "/"
            },
            {
              text: "智能去文字",
              // url: "/"
            },
            {
              text: "字幕提取",
              // url: "/"
            },
          ],
        },
        {
          title: "海外短剧推广方案",
          list: [
            {
              text: "海外短剧KOL推广方案",
              // url: "/"
            },
            {
              text: "海外短剧Tiktok矩阵推广方案",
              // url: "/"
            },
          ],
        },
        {
          title: "联系我们",
          list: [
            {
              text: "联系电话：18676740509",
              // url: "/"
            },
            {
              text: "电子邮箱：870795800@qq.com",
              // url: "/"
            },
            {
              text: "客服微信：18676740509",
              // url: "/"
            },
          ],
        },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.footer {
  background: #f5f7fb;
  &_main {
    padding: 68px 52px 50px;
    border-bottom: 1px solid #e0e5fe;
    &_logo {
      img {
      }
    }
    &_text {
      margin-top: 10px;
      font-family: PingFang SC, PingFang SC;
      font-weight: 400;
      font-size: 14px;
      color: #565656;
      line-height: 16px;
      text-align: left;
      font-style: normal;
      text-transform: none;
    }
    &_content {
      margin-top: 48px;
      display: flex;
      justify-content: space-between;
      .link {
        display: flex;
        gap: 60px;
        &_item {
          flex-shrink: 0;
          &_title {
            font-family: PingFang SC, PingFang SC;
            font-weight: bold;
            font-size: 14px;
            color: #333333;
            line-height: 16px;
            text-align: left;
            font-style: normal;
            text-transform: none;
            margin-bottom: 12px;
          }
          &_text {
            font-family: PingFang SC, PingFang SC;
            font-weight: 400;
            font-size: 12px;
            color: #565656;
            line-height: 14px;
            text-align: left;
            font-style: normal;
            text-transform: none;
          }
          &_text:not(:last-child) {
            margin-bottom: 12px;
          }
        }
      }
      .code {
        display: flex;
        gap: 24px;
        &_item {
          &_main {
            width: 120px;
            height: 120px;
            background: #ffffff;
            border-radius: 10px 10px 10px 10px;
            border: 1.5px solid #6956e5;
            padding: 10px;
            img {
              width: 100px;
              height: 100px;
            }
          }
          &_text {
            margin-top: 12px;
            font-family: PingFang SC, PingFang SC;
            font-weight: 400;
            font-size: 12px;
            color: #565656;
            line-height: 14px;
            font-style: normal;
            text-transform: none;
            text-align: center;
          }
        }
      }
    }
  }
  &_foot {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 14px 0;
    font-family: PingFang SC, PingFang SC;
    font-weight: 300;
    font-size: 12px;
    color: #666666;
    line-height: 14px;
    text-align: center;
    font-style: normal;
    text-transform: none;
  }
}
</style>