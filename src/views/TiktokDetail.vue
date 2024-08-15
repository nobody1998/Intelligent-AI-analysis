<template>
  <div class="KOLDetail">
    <div class="KOLDetail_item1">
      <div class="KOLDetail_item1_box">
        <div class="KOLDetail_item_text" style="padding: 60px 280px 64px 48px">
          <div class="main_logo">
            <div class="main_logo-1">
              <img src="../assets/img/logo.png" />
            </div>
            <div class="main_logo-2">
              <img src="../assets/img/tiktok_btn.png" />
            </div>
          </div>
          <div class="main_title">
            全球多地区tiktok等账号提供<br />形成短视频矩阵推广您的短剧
          </div>
          <div class="main_content">
            <div
              class="main_content_item"
              v-for="(item, index) in list1"
              :key="index"
            >
              <div class="main_content_item_icon">
                <img src="../assets/img/target.png" />
              </div>
              <div class="main_content_item_text">
                {{ item }}
              </div>
            </div>
          </div>
          <div class="main_foot">
            <el-button>了解更多</el-button>
          </div>
        </div>
        <div class="KOLDetail_item_img">
          <img src="../assets/img/illustration4.png" />
        </div>
      </div>
    </div>
    <div class="KOLDetail_item2" style="background: #f5f7fb">
      <div class="KOLDetail_item2_box">
        <div class="KOLDetail_item_img">
          <img src="../assets/img/illustration5.png" />
        </div>
        <div class="KOLDetail_item_text">
          <div class="main_title">
            无需提供账号，仅需授权短剧，<br />以视频发布量结算，轻松实现大量引流
          </div>
          <div class="main_content">
            <div
              class="main_content_item"
              v-for="(item, index) in list2"
              :key="index"
            >
              <div class="main_content_item_icon">
                <img src="../assets/img/target.png" />
              </div>
              <div class="main_content_item_text">
                {{ item }}
              </div>
            </div>
          </div>
          <div class="main_foot">
            <el-button>了解更多</el-button>
          </div>
        </div>
      </div>
    </div>
    <div class="KOLDetail_item3">
      <div class="KOLDetail_item_text">
        <div class="main_title">多账号运营,支持多种短剧出海方案</div>
        <div class="main_content">
          <div
            class="main_content_item"
            v-for="(item, index) in list3"
            :key="index"
          >
            <div class="main_content_item_icon">
              <img src="../assets/img/target.png" />
            </div>
            <div class="main_content_item_text">
              {{ item }}
            </div>
          </div>
        </div>
        <div class="main_foot">
          <el-button>了解更多</el-button>
        </div>
      </div>
      <div class="KOLDetail_item_img">
        <img src="../assets/img/illustration6.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "KOLDetail",
  data() {
    return {
      list1: [
        "全球多地区TikTok账号支持，构建强大短视频矩阵",
        "利用短视频矩阵，全方位推广您的短剧",
        "跨越国界，让您的短剧触达全球每一个角落",
      ],
      list2: [
        "无需提供账号，只需授权短剧即可",
        "视频发布量结算，轻松透明",
        "快速引流，轻松扩大影响力",
      ],
      list3: [
        "多账号运营，助力短剧全球覆盖",
        "支持多种出海方案，轻松拓展海外市场",
      ],
    };
  },
  created() {
    this.$nextTick(() => {
      this.init();
    });
  },
  methods: {
    init() {
      //
    },
  },
};
</script>

<style lang="scss" scoped>
.KOLDetail {
  &_item {
    &_img {
      img {
        height: 100%;
      }
    }
    &_text {
      flex-shrink: 0;
      .main {
        &_logo {
          display: flex;
          align-items: center;
          &-1 {
            img {
              width: 34px;
              height: 34px;
            }
          }
          &-2 {
            margin-left: 12px;
            img {
              width: 128px;
              height: 36px;
            }
          }
        }
        &_title {
          margin-top: 30px;
          font-family: PingFang SC, PingFang SC;
          font-weight: 600;
          font-size: 36px;
          color: #0d1545;
          line-height: 55px;
          text-align: left;
          font-style: normal;
          text-transform: none;
          &_keynote {
            color: #6956e5;
          }
        }
        &_content {
          margin-top: 24px;
          &_item {
            display: flex;
            align-items: center;
            &_icon {
              width: 18px;
              height: 18px;
              img {
                width: 18px;
                height: 18px;
              }
            }
            &_text {
              margin-left: 10px;
              font-family: PingFang SC, PingFang SC;
              font-weight: 600;
              font-size: 14px;
              color: #333333;
              line-height: 16px;
              text-align: left;
              font-style: normal;
              text-transform: none;
            }
          }
          &_item:not(:last-child) {
            margin-bottom: 24px;
          }
        }
        &_foot {
          margin-top: 48px;
          .el-button {
            height: 48px;
            padding: 14px 48px;
            box-sizing: border-box;
            border-radius: 30px 30px 30px 30px;
            border: 2px solid #6956e5;
            font-family: PingFang SC, PingFang SC;
            font-weight: 500;
            font-size: 14px;
            color: #6956e5;
            line-height: 16px;
            text-align: left;
            font-style: normal;
            text-transform: none;
          }
        }
      }
    }
  }
  &_item1 {
    display: flex;
    justify-content: center;
    padding-top: 110px;
    padding-bottom: 110px;
    &_box {
      display: flex;
      justify-content: center;
      box-shadow: 0px 0 40px 0px rgba(46, 33, 61, 0.15);
      border-radius: 20px 20px 20px 20px;
      overflow: hidden;
    }
  }
  &_item2 {
    display: flex;
    justify-content: center;
    padding-top: 110px;
    padding-bottom: 110px;
    &_box {
      display: flex;
      justify-content: center;
      box-shadow: 0px 0 40px 0px rgba(46, 33, 61, 0.15);
      border-radius: 20px 20px 20px 20px;
      overflow: hidden;
    }
  }
}
</style>