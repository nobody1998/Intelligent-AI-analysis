<template>
  <div class="KOLDetail">
    <div class="KOLDetail_item">
      <div class="KOLDetail_item_img">
        <img src="../assets/img/illustration1.png" />
      </div>
      <div class="KOLDetail_item_text">
        <div class="main_title">
          汇聚<span class="main_title_keynote">140+</span
          >国家优质KOL资源<br />助力品牌及短剧精准覆盖国际市场
        </div>
        <div class="main_divider"></div>
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
    </div>
    <div class="KOLDetail_item" style="background: #f5f7fb">
      <div class="KOLDetail_item_text">
        <div class="main_title">
          深度剖析短剧场景与国家，<span class="main_title_keynote"
            >精准匹配</span
          ><br />简化合作流程，轻松对接当地达人
        </div>
        <div class="main_divider"></div>
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
      <div class="KOLDetail_item_img">
        <img src="../assets/img/illustration2.png" />
      </div>
    </div>
    <div class="KOLDetail_item">
      <div class="KOLDetail_item_img">
        <img src="../assets/img/illustration3.png" />
      </div>
      <div class="KOLDetail_item_text">
        <div class="main_title">
          低成本高效率，<span class="main_title_keynote">一站式</span
          >达人合作方案<br />轻松实现品牌国际化推广，无忧托付
        </div>
        <div class="main_divider"></div>
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
    </div>
  </div>
</template>

<script>
export default {
  name: "KOLDetail",
  data() {
    return {
      list1: [
        "汇聚全球140多个国家的优质KOL资源，拓展品牌国际影响力。",
        "精准匹配海外达人，让您的产品轻松走向世界。",
        "助力短剧全球化，连接全球观众，讲述精彩故事。",
        "一站式服务，轻松实现品牌与短剧的国际市场覆盖。",
      ],
      list2: [
        "深度洞察，精准匹配短剧与当地达人。",
        "精选达人，为您的短剧量身定制最佳推广方案。",
        "流程简化，让达人合作更加高效顺畅。",
        "无缝对接，轻松管理达人联络与结算。",
      ],
      list3: [
        "低成本高效率，轻松实现品牌国际化推广。",
        "一站式达人合作方案，让您的品牌迅速接轨全球。",
        "无忧托付，简化达人合作流程，专注品牌成长。",
        "高效链接全球达人资源，助力品牌快速扩张。",
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
    display: flex;
    align-items: end;
    justify-content: center;
    padding-top: 70px;
    padding-bottom: 150px;
    gap: 50px;
    &_img {
      img {
      }
    }
    &_text {
      .main {
        &_title {
          font-family: PingFang SC, PingFang SC;
          font-weight: 600;
          font-size: 40px;
          color: #0d1545;
          line-height: 55px;
          text-align: left;
          font-style: normal;
          text-transform: none;
          &_keynote {
            color: #6956e5;
          }
        }
        &_divider {
          margin-top: 20px;
          width: 88px;
          height: 8px;
          background: #6956e5;
        }
        &_content {
          margin-top: 40px;
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
            width: 168px;
            height: 56px;
            background: #6956e5;
            border-radius: 10px 10px 10px 10px;
            font-family: PingFang SC, PingFang SC;
            font-weight: 500;
            font-size: 14px;
            color: #ffffff;
            line-height: 16px;
            text-align: center;
            font-style: normal;
            text-transform: none;
          }
        }
      }
    }
  }
}
</style>