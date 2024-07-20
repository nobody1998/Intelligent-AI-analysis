<template>
  <div class="payment" v-loading="paymentLoading">
    <div class="payment_content">
      <div class="payment_content_top">
        <div class="payment_content_top_left">购买账号：{{ form.account }}</div>
        <div class="payment_content_top_right">
          创建时间：{{ form.create_datetime }}
        </div>
      </div>
      <el-divider></el-divider>
      <div class="payment_content_main">
        <div class="payment_content_main_title">
          <div class="payment_content_main_title_left">套餐详情</div>
          <div class="payment_content_main_title_right">
            价格 / {{ form.currency }}
          </div>
        </div>
        <el-divider></el-divider>
        <div class="payment_content_main_content">
          <div class="payment_content_main_content_item">
            <div class="payment_content_main_content_item_left">
              {{ form.sku_name }}
            </div>
            <div class="payment_content_main_content_item_right">
              {{ form.amount }}元
            </div>
          </div>
          <el-divider></el-divider>
          <div class="payment_content_main_content_total">
            <span>总支付：{{ form.amount }}</span>
          </div>
          <el-divider></el-divider>
          <div class="payment_content_main_content_agreement">
            <el-form
              ref="submitForm"
              :model="submitForm"
              :rules="submitFormRules"
            >
              <el-form-item label="" prop="isRead">
                <el-checkbox v-model="submitForm.isRead"
                  ><span>已阅读并同意</span
                  ><span>《智数AI用户支付协议》</span></el-checkbox
                >
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
    </div>
    <div class="payment_footer">
      <div class="payment_footer_top">
        <span>微信扫码支付</span>
      </div>
      <el-divider></el-divider>
      <div class="payment_footer_main">
        <el-radio v-model="radio" label="1">
          <div class="payment_footer_main_left">
            <div class="paymentMainL">
              <img src="../assets/img/WeChatPay.png" />
              <span>微信支付</span>
            </div>
            <div class="paymentMainR">
              <div class="paymentMainR_top">
                适用于PC端扫码支付，移动端微信打开直接支付
              </div>
              <div class="paymentMainR_main">
                <div class="paymentMainR_main_code">
                  <vue-qr
                    v-if="form.qr_code"
                    class="qr-code"
                    :logoSrc="imageUrl"
                    :text="form.qr_code"
                    :size="216"
                  />
                  <span>支付剩余时间：</span>
                  <span>{{ countdown }}</span>
                </div>
              </div>
            </div>
          </div>
        </el-radio>
      </div>
      <div class="payment_footer_btn">
        <el-button type="primary" @click="paymentCompleted">支付完成</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import vueQr from "vue-qr";
import { getUserInfo } from "../api/payment";

export default {
  name: "Payment",
  components: {
    vueQr,
  },
  data() {
    var checkIsRead = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请阅读并同意《智数AI用户支付协议》"));
      } else {
        callback();
      }
    };
    return {
      paymentLoading: false,
      timerId: null, // 用于存储定时器的ID，以便之后可以清除它
      // 初始倒计时时间，单位秒
      countdownSeconds: 4 * 60 + 59,
      // 格式化后的倒计时显示
      countdown: "04:59",
      imageUrl: require("../assets/img/WeChatPay_whiteEdge.png"), // icon路径
      submitForm: {
        isRead: false,
      },
      radio: "1",
      form: {},
      submitFormRules: {
        isRead: [{ validator: checkIsRead, trigger: "change" }],
      },
    };
  },
  created() {
    this.$nextTick(() => {
      this.init();
    });
  },
  beforeDestroy() {
    // 组件销毁前清除定时器
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    // 组件销毁时停止轮询，防止内存泄漏
    this.stopPolling();
  },
  methods: {
    getUserInfoFn() {
      getUserInfo()
        .then((res) => {
          if (res.data.vip_status) {
            this.paymentLoading = false;
            this.stopPolling();
            this.$message({
              message: "用户支付完成",
              type: "success",
            });
            this.$router.push({
              path: "/",
            });
          } else {
            this.startPolling();
          }
        })
        .catch(() => {
          this.startPolling();
        });
    },
    // 开始轮询
    startPolling() {
      // 清除之前的定时器（如果有）
      if (this.timerId) {
        clearInterval(this.timerId);
      }
      // 设置新的定时器，每隔一定时间调用fetchData
      this.timerId = setInterval(this.getUserInfoFn(), 1000); // 每1秒调用一次
    },
    // 停止轮询
    stopPolling() {
      if (this.timerId) {
        clearInterval(this.timerId);
        this.timerId = null;
      }
    },
    // 更新倒计时显示
    updateCountdown() {
      // 当倒计时小于等于0时停止
      if (this.countdownSeconds <= 0) {
        clearInterval(this.intervalId);
        this.countdown = "0:00";
        return;
      }
      // 计算剩余分钟和秒
      const minutes = Math.floor(this.countdownSeconds / 60);
      const seconds = this.countdownSeconds % 60;
      // 更新倒计时显示
      this.countdown = `${minutes.toString().padStart(2, "0")}:${seconds
        .toString()
        .padStart(2, "0")}`;
      // 倒计时递减
      this.countdownSeconds--;
    },
    paymentCompleted() {
      this.$refs["submitForm"].validate((valid, errorList) => {
        if (valid) {
          this.paymentLoading = true;
          // 操作完成后开始轮询
          this.startPolling();
        } else {
          if (errorList.isRead) {
            this.$message({
              message: errorList.isRead[0].message,
              type: "error",
            });
          }
          return false;
        }
      });
    },
    getUserInfo() {
      this.form = JSON.parse(this.$route.query.info);
      this.intervalId = setInterval(this.updateCountdown, 1000);
    },
    init() {
      this.getUserInfo();
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep .el-radio__inner {
  width: 18px;
  height: 18px;
}
::v-deep .el-radio__inner::after {
  width: 8px;
  height: 8px;
}

.payment {
  height: 100%;
  background: #ffffff;
  padding: 0px 24px 52px;
  margin-top: 40px;
  .el-divider {
    background: rgba(112, 124, 151, 0.1);
  }
  .el-divider--horizontal {
    margin: 0;
  }
  &_content {
    background: #ffffff;
    box-shadow: 0px 15px 30px 0px rgba(10, 0, 73, 0.15);
    border-radius: 10px 10px 10px 10px;
    &_top {
      padding: 25px 28px 21px 37px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      &_left {
        height: 28px;
        font-family: PingFang SC, PingFang SC;
        font-weight: 500;
        font-size: 20px;
        color: #333333;
        line-height: 23px;
        text-align: left;
        font-style: normal;
        text-transform: none;
      }
      &_right {
        height: 22px;
        font-family: PingFang SC, PingFang SC;
        font-weight: 400;
        font-size: 16px;
        color: #565656;
        line-height: 19px;
        text-align: left;
        font-style: normal;
        text-transform: none;
      }
    }
    &_main {
      padding: 20px 28px 40px 36px;
      &_title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 21px;
        &_left {
          height: 25px;
          font-family: PingFang TC, PingFang TC;
          font-weight: 600;
          font-size: 18px;
          color: #565656;
          line-height: 21px;
          text-align: left;
          font-style: normal;
          text-transform: none;
        }
        &_right {
          height: 25px;
          font-family: PingFang TC, PingFang TC;
          font-weight: 600;
          font-size: 18px;
          color: #565656;
          line-height: 21px;
          text-align: left;
          font-style: normal;
          text-transform: none;
        }
      }
      &_content {
        &_item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 20px 0;
          &_left {
            height: 22px;
            font-family: PingFang SC, PingFang SC;
            font-weight: 500;
            font-size: 16px;
            color: #565656;
            line-height: 19px;
            text-align: left;
            font-style: normal;
            text-transform: none;
          }
          &_right {
            height: 22px;
            font-family: PingFang SC, PingFang SC;
            font-weight: 400;
            font-size: 16px;
            color: #565656;
            line-height: 19px;
            text-align: left;
            font-style: normal;
            text-transform: none;
          }
        }
        &_total {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          span {
            margin: 20px 0;
            height: 28px;
            font-family: PingFang SC, PingFang SC;
            font-weight: 500;
            font-size: 20px;
            color: #6956e5;
            line-height: 23px;
            text-align: left;
            font-style: normal;
            text-transform: none;
          }
        }
        &_agreement {
          margin-top: 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          span {
            height: 20px;
            font-family: PingFang SC, PingFang SC;
            font-weight: 400;
            font-size: 14px;
            color: #999999;
            line-height: 16px;
            text-align: left;
            font-style: normal;
            text-transform: none;
          }
          span:nth-child(2) {
            color: #6956e5;
          }
        }
      }
    }
  }
  &_footer {
    margin-top: 20px;
    background: #ffffff;
    box-shadow: 0px 15px 30px 0px rgba(10, 0, 73, 0.15);
    border-radius: 10px 10px 10px 10px;
    overflow: hidden;
    &_top {
      padding: 25px 28px 21px 37px;
      span {
        height: 28px;
        font-family: PingFang SC, PingFang SC;
        font-weight: 500;
        font-size: 20px;
        color: #333333;
        line-height: 23px;
        text-align: left;
        font-style: normal;
        text-transform: none;
      }
    }
    &_main {
      padding: 25px 28px 21px 37px;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      &_left {
        display: flex;
        margin-top: -21px;
        align-items: flex-start;
        margin-left: 66px;
        .paymentMainL {
          display: flex;
          align-items: center;
          img {
            width: 24px;
            height: 24px;
          }
          span {
            margin-left: 12px;
            // height: 22px;
            font-family: PingFang TC, PingFang TC;
            font-weight: 400;
            font-size: 16px;
            color: #666666;
            // line-height: 19px;
            text-align: left;
            font-style: normal;
            text-transform: none;
          }
        }
        .paymentMainR {
          margin-left: 56px;
          &_top {
            height: 24px;
            font-family: PingFang TC, PingFang TC;
            font-weight: 400;
            font-size: 16px;
            color: #999999;
            line-height: 24px;
            text-align: left;
            font-style: normal;
            text-transform: none;
          }
          &_main {
            margin-top: 31px;
            width: 216px;
            text-align: center;
            margin-left: -16px;
            &_code {
              width: 216px;
              display: flex;
              flex-wrap: wrap;
              align-items: center;
              justify-content: center;
              img {
                display: block;
                width: 216px;
                height: 216px;
                border-radius: 4px 4px 4px 4px;
                overflow: hidden;
              }
              span {
                display: inline-block;
                // margin-top: 20px;
                height: 22px;
                font-family: PingFang TC, PingFang TC;
                font-weight: 400;
                font-size: 16px;
                color: #999999;
                line-height: 19px;
                text-align: left;
                font-style: normal;
                text-transform: none;
              }
              span:nth-child(3) {
                color: #6956e5;
              }
            }
          }
        }
      }
    }
    &_btn {
      float: right;
      margin-right: 28px;
      margin-bottom: 37px;
      .el-button {
        width: 136px;
        height: 40px;
      }
    }
  }
}
</style>