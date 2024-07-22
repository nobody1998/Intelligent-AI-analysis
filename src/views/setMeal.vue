<template>
  <div class="setMeal" v-loading="setMealLoading">
    <div class="setMeal_top">
      <div class="setMeal_top_title">
        {{ $t("gen-ju-nin-de-yun-ying-xu-yao-xuan-ze-shi-he-de-tao-can") }}
      </div>
      <div class="setMeal_top_subTitle">
        {{ $t("kuai-su-chong-zhi-ba-wo-chu-hai-guang-gao-hong-li") }}
      </div>
    </div>
    <div class="setMeal_main">
      <div class="setMeal_main_top">
        <div
          class="setMeal_main_top_item"
          :class="{
            'setMeal_main_top_item-active': index === chooseSetMeal,
          }"
          @click="chooseSetMeal = index"
          v-for="(item, index) in setMealList"
          :key="index"
        >
          <span>{{ item[0].sku_type | skuTypeTranslate }}</span>
        </div>
      </div>
      <div class="setMeal_main_content">
        <div
          class="setMeal_main_content_item"
          v-for="(subItem, subIndex) in setMealList[chooseSetMeal]"
          :key="subIndex"
        >
          <div class="setMealDetail_title">{{ subItem.title }}</div>
          <div class="setMealDetail_num">
            <span>${{ subItem.price }}</span>
            <span>/{{ subItem.unit }}</span>
          </div>
          <el-divider></el-divider>
          <div class="setMealDetail_equity">
            <div
              class="setMealDetail_equity_item"
              v-for="(infoItem, infoIndex) in subItem.info"
              :key="infoIndex"
            >
              <i class="el-icon-success"></i>
              <div class="setMealDetail_equity_item_text">
                {{ infoItem }}
              </div>
            </div>
          </div>
          <div class="setMealDetail_btn">
            <el-button type="primary" @click="toPayment(subItem.id)"
              >{{ $t("sheng-ji")
              }}{{ subItem.title }}</el-button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getInfoList, createOrder } from "../api/payment";

let that;
export default {
  name: "SetMeal",
  data() {
    return {
      setMealLoading: false,
      chooseSetMeal: 0,
      setMealList: [],
      setMealNameList: [
        {
          value: 1,
          label: this.$t("yue-du-tao-can-0"),
        },
        {
          value: 2,
          label: this.$t("ji-du-tao-can"),
        },
        {
          value: 3,
          label: this.$t("nian-du-tao-can"),
        },
      ],
    };
  },
  filters: {
    skuTypeTranslate(val) {
      const arr = JSON.parse(
        JSON.stringify(
          that.setMealNameList.filter((item) => item.value === val)
        )
      );
      return arr.length ? arr[0].label : "";
    },
  },
  beforeCreate() {
    that = this;
  },
  created() {
    this.$nextTick(() => {
      this.init();
    });
  },
  methods: {
    getInfoListFn() {
      getInfoList()
        .then((res) => {
          const groupedItems = {};
          res.data.forEach((item) => {
            if (!groupedItems[item.sku_type]) {
              groupedItems[item.sku_type] = [];
            }
            item.info = item.info.slice(1, -1).split(",");
            item.unit =
              item.sku_type === 1
                ? this.$t("yue")
                : item.sku_type === 2
                ? this.$t("ji")
                : item.sku_type === 3
                ? this.$t("nian")
                : "";
            groupedItems[item.sku_type].push(item);
          });
          const data = Object.values(groupedItems).sort(
            (a, b) => a[0].sku_type - b[0].sku_type
          );
          this.setMealList = data;
        })
        .catch(() => {});
    },
    toPayment(payment_id) {
      this.setMealLoading = true;
      const data = {
        action: 1,
        payment_id,
      };
      createOrder(data)
        .then((res) => {
          this.setMealLoading = false;
          this.$router.push({
            path: "/payment",
            query: {
              parameter: JSON.stringify(data),
              info: JSON.stringify(res.data),
            },
          });
        })
        .catch(() => {
          this.setMealLoading = false;
        });
    },
    init() {
      this.getInfoListFn();
    },
  },
};
</script>

<style lang="scss" scoped>
.setMeal {
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
        width: 354px;
        box-shadow: 0px 20px 20px 0px rgba(0, 0, 0, 0.1);
        border-radius: 10px 10px 10px 10px;
        border: 2px solid #e1e4ed;
        .setMealDetail {
          &_title {
            font-family: PingFang SC, PingFang SC;
            font-weight: 600;
            font-size: 20px;
            color: #333333;
            // line-height: 40px;
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