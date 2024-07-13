<template>
  <div class="payment">
    <div class="payment_content">
      <div class="payment_content_top">
        <div class="payment_content_top_left">购买账号：+86-139****1105</div>
        <div class="payment_content_top_right">
          创建时间：20:29:30(UTC+8), 2024-07-06
        </div>
      </div>
      <el-divider></el-divider>
      <div class="payment_content_main">
        <div class="payment_content_main_title">
          <div class="payment_content_main_title_left">套餐详情</div>
          <div class="payment_content_main_title_right">价格 / CNY</div>
        </div>
        <el-divider></el-divider>
        <div class="payment_content_main_content">
          <div class="payment_content_main_content_item">
            <div class="payment_content_main_content_item_left">
              智数AI高级版/季度 199元
            </div>
            <div class="payment_content_main_content_item_right">199.00元</div>
          </div>
          <el-divider></el-divider>
          <div class="payment_content_main_content_total">
            <span>总支付：199.00</span>
          </div>
          <el-divider></el-divider>
          <div class="payment_content_main_content_agreement">
            <el-checkbox v-model="isCheck"
              ><span>已阅读并同意</span
              ><span>《智数AI用户支付协议》</span></el-checkbox
            >
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
              <img
                src="https://bpic.51yuansu.com/pic3/cover/03/67/79/65be2e88aa2ba_800.jpg?x-oss-process=image/sharpen,100"
              />
              <span>微信支付</span>
            </div>
            <div class="paymentMainR">
              <div class="paymentMainR_top">
                适用于PC端扫码支付，移动端微信打开直接支付
              </div>
              <div class="paymentMainR_main">
                <div class="paymentMainR_main_code">
                  <img src="../assets/img/login_bg.png" />
                  <span>支付剩余时间：</span>
                  <span>23:59:56</span>
                </div>
              </div>
            </div>
          </div>
        </el-radio>
      </div>
      <div class="payment_footer_btn">
        <el-button type="primary">确认</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Payment",
  data() {
    return {
      isCheck: false,
      radio: "1",
    };
  },
  methods: {},
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
            height: 22px;
            font-family: PingFang TC, PingFang TC;
            font-weight: 400;
            font-size: 16px;
            color: #666666;
            line-height: 19px;
            text-align: left;
            font-style: normal;
            text-transform: none;
          }
        }
        .paymentMainR {
          margin-left: 56px;
          &_top {
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
          &_main {
            margin-top: 31px;
            width: 200px;
            text-align: center;
            &_code {
              img {
                display: block;
                width: 200px;
                height: 200px;
                border-radius: 4px 4px 4px 4px;
                overflow: hidden;
              }
              span {
                display: inline-block;
                margin-top: 20px;
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