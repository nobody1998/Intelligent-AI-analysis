<template>
  <div class="package">
    <div class="package_top">
      <div class="package_top_title">根据您的运营需要，选择适合的套餐</div>
      <div class="package_top_subTitle">快速充值，把握出海广告红利</div>
    </div>
    <div class="package_main">
      <div class="package_main_top">
        <div
          class="package_main_top_item"
          :class="{
            'package_main_top_item-active': item.value === choosePackage,
          }"
          v-for="(item, index) in packageList"
          :key="index"
        >
          <span>{{ item.label }}</span>
        </div>
      </div>
      <div class="package_main_content">
        <div
          class="package_main_content_item"
          v-for="(item, index) in 5"
          :key="index"
        >
          <div class="packageDetail_title">基础版</div>
          <div class="packageDetail_num">
            <span>$59</span>
            <span>/月</span>
          </div>
          <el-divider></el-divider>
          <div class="packageDetail_equity">
            <div
              class="packageDetail_equity_item"
              v-for="(subItem, subIndex) in 5"
              :key="subIndex"
            >
              <div class="packageDetail_equity_item_text">
                点击广告和商品600次
              </div>
              <i class="el-icon-success"></i>
            </div>
          </div>
          <div class="packageDetail_btn">
            <el-button type="primary" @click="toPayment">升级基础版</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getInfoList } from "../api/payment";

export default {
  name: "Package",
  data() {
    return {
      choosePackage: 1,
      packageList: [
        {
          value: 1,
          label: "月度套餐",
        },
        {
          value: 2,
          label: "季度套餐",
        },
        {
          value: 3,
          label: "年度套餐",
        },
      ],
    };
  },
  created() {
    this.$nextTick(() => {
      this.init();
    });
  },
  methods: {
//     [
//   {
//     "id": 1,
//     "title": "月度套餐",
//     "price": "1.00",
//     "info": "[点击广告和商品600次,搜索、排序和商品,收藏广告素材]",
//     "sku_type": 1,
//     "param": null,
//     "sku_id": 1334
//   }
// ]
    getInfoListFn() {
      getInfoList()
        .then((res) => {
          console.log(res, 777);
        })
        .catch(() => {});
    },
    toPayment() {
      this.$router.push("/payment");
    },
    init() {
      this.getInfoListFn();
    },
  },
};
</script>

<style lang="scss" scoped>
.package {
  width: 100%;
  height: 100%;
  background: #ffffff;
  &_top {
    margin-top: 102px;
    text-align: center;
    &_title {
      font-family: Inter, Inter;
      font-weight: normal;
      font-size: 36px;
      color: #6956e5;
      line-height: 40px;
      font-weight: bold;
      text-align: center;
      font-style: normal;
      text-transform: none;
    }
    &_subTitle {
      font-family: PingFang SC, PingFang SC;
      font-weight: 600;
      font-size: 16px;
      color: #565656;
      line-height: 24px;
      text-align: center;
      font-style: normal;
      text-transform: none;
      margin-top: 33px;
    }
  }
  &_main {
    &_top {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 24px;
      margin-top: 35px;
      margin-bottom: 46px;
      cursor: pointer;
      &_item {
        padding: 11px 32px;
        height: 44px;
        border-radius: 4px 4px 4px 4px;
        border: 1px solid #d1d5da;
        color: #333333;
        span {
          height: 22px;
          font-family: PingFang SC, PingFang SC;
          font-weight: 400;
          font-size: 16px;
          line-height: 19px;
          text-align: left;
          font-style: normal;
          text-transform: none;
        }
        &-active {
          background: #6956e5;
          color: #ffffff;
        }
      }
    }
    &_content {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 24px;
      padding-bottom: 98px;
      &_item {
        padding: 33px 25px 23px;
        width: 260px;
        box-shadow: 0px 20px 20px 0px rgba(0, 0, 0, 0.1);
        border-radius: 10px 10px 10px 10px;
        border: 2px solid #e1e4ed;
        .packageDetail {
          &_title {
            font-family: PingFang SC, PingFang SC;
            font-weight: 600;
            font-size: 20px;
            color: #333333;
            line-height: 40px;
            text-align: left;
            font-style: normal;
            text-transform: none;
          }
          &_num {
            margin-top: 14px;
            display: flex;
            align-items: flex-end;
            span:nth-child(1) {
              font-family: PingFang SC, PingFang SC;
              font-weight: 600;
              font-size: 36px;
              color: #6956e5;
              line-height: 40px;
              text-align: center;
              font-style: normal;
              text-transform: none;
            }
            span:nth-child(2) {
              margin-left: 8px;
              font-family: PingFang SC, PingFang SC;
              font-weight: 500;
              font-size: 16px;
              color: #565656;
              line-height: 24px;
              text-align: center;
              font-style: normal;
              text-transform: none;
            }
          }
          .el-divider--vertical {
            // height: 32px;
          }
          .el-divider {
            margin: 24px 0;
            width: 100%;
            background: #e1e4ed;
          }
          &_equity {
            &_item {
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin-bottom: 24px;
              &_text {
                font-family: PingFang TC, PingFang TC;
                font-weight: 400;
                font-size: 14px;
                color: #565656;
                line-height: 24px;
                text-align: center;
                font-style: normal;
                text-transform: none;
              }
              .el-icon-success {
                color: #6956e5;
                font-size: 14px;
              }
            }
            &_item:last-child {
              margin-bottom: 0;
            }
          }
          &_btn {
            margin-top: 50px;
            .el-button {
              width: 100%;
              height: 36px;
              background: #6956e5;
              border-radius: 4px 4px 4px 4px;
            }
          }
        }
      }
      &_item:hover {
        border: 2px solid #6956e5;
      }
    }
  }
}
</style>