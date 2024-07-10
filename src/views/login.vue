<template>
  <div class="login">
    <div class="login_main">
      <div class="login_main_LB"></div>
      <div class="login_main_RT"></div>
      <div class="login_main_left"></div>
      <div class="login_main_right">
        <div class="loginForm">
          <div class="loginForm_header">
            <div class="loginForm_header_title">{{ title }}</div>
            <div class="loginForm_header_btn" @click="switchLanguage">
              <el-button type="text">
                <span>切换EN</span>
              </el-button>
            </div>
          </div>
          <div class="loginForm_body">
            <el-form ref="form" :model="form" :rules="formRules">
              <el-tabs
                v-if="type === 1"
                v-model="activeName"
                @tab-click="handleClick"
              >
                <el-tab-pane label="账号登录" name="1">
                  <el-form-item label="" prop="name">
                    <el-input
                      v-model="form.name"
                      placeholder="请输入手机号码/电子邮箱"
                    ></el-input>
                  </el-form-item>
                  <el-form-item label="" prop="password">
                    <el-input
                      v-model="form.password"
                      placeholder="请输入密码"
                    ></el-input>
                  </el-form-item>
                  <div class="loginForm_body_password">
                    <!-- <el-form-item label=""> -->
                    <el-checkbox v-model="form.remember"
                      ><span class="loginForm_body_password_text"
                        >记住密码</span
                      ></el-checkbox
                    >
                    <!-- </el-form-item> -->
                    <el-button type="text">
                      <div class="loginForm_body_password_text">忘记密码？</div>
                    </el-button>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="验证码登录" name="2">
                  <el-form-item
                    label=""
                    prop="name"
                    class="loginForm_body_tab2"
                  >
                    <el-input placeholder="请输入手机号码" v-model="form.name">
                      <template slot="prepend">+86</template>
                    </el-input>
                  </el-form-item>
                  <div class="loginForm_body_code">
                    <el-form-item label="" prop="password">
                      <el-input
                        class="loginForm_body_code_input"
                        v-model="form.password"
                        placeholder="请输入验证码"
                      ></el-input>
                    </el-form-item>
                    <el-button class="loginForm_body_code_btn" type="primary"
                      >发送验证码</el-button
                    >
                  </div>
                </el-tab-pane>
              </el-tabs>
              <el-button class="loginForm_body_logOn" type="primary"
                >登录</el-button
              >
              <div class="loginForm_body_noAccount">
                <span>还没账号？</span>
                <el-button type="text">
                  <span style="color: #7a68f1">立即注册</span>
                </el-button>
              </div>
              <div class="loginForm_body_agreement">
                <el-checkbox v-model="form.remember"
                  ><span class="loginForm_body_agreement"
                    >已阅读并同意《智数AI用户协议》和《隐私政策》</span
                  ></el-checkbox
                >
              </div>
            </el-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      // 显示类型 1 登录 2 注册1 3 注册2 4 重置密码
      type: 1,
      activeName: "1",
      form: {
        name: "",
        password: "",
      },
      formRules: {
        name: [
          {
            required: true,
            message: "请输入手机号码/电子邮箱",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur",
          },
        ],
      },
    };
  },
  computed: {
    title() {
      let text = "";
      switch (this.type) {
        case 1:
          text = "欢迎来到智数Ai";
          break;
        case 2:
          text = "欢迎注册智数AI";
          break;
        case 3:
          text = "完善身份信息";
          break;
        default:
          break;
      }
      return text;
    },
  },
  methods: {
    switchLanguage() {
      if (this.$i18n.locale === "zh") {
        this.$i18n.locale = "en";
      } else if (this.$i18n.locale === "en") {
        this.$i18n.locale = "zh";
      }
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep .el-checkbox__inner {
  width: 21px;
  height: 21px;
}
::v-deep .el-checkbox__inner::after {
  width: 6px;
  height: 13px;
  left: 7px;
}
::v-deep .el-tabs__item {
  height: 29px;
  font-family: PingFang SC, PingFang SC;
  font-weight: 600;
  font-size: 21px;
  color: #333333;
  line-height: 25px;
  text-align: left;
  font-style: normal;
  text-transform: none;
  margin-bottom: 15px;
}
::v-deep .el-input__inner {
  height: 64px;
  background: #f3f1ff;
  border-radius: 5px 5px 5px 5px;
  border: none;
  font-family: PingFang SC, PingFang SC;
  font-weight: 400;
  font-size: 19px;
  color: #333333;
  line-height: 22px;
  text-align: left;
  font-style: normal;
  text-transform: none;
}
::v-deep .el-input__inner::placeholder {
  // height: 27px;
  // font-family: PingFang SC, PingFang SC;
  // font-weight: 400;
  // font-size: 19px;
  // color: #333333;
  // line-height: 22px;
  // text-align: left;
  // font-style: normal;
  // text-transform: none;
}
::v-deep .el-form-item__error {
  font-size: 16px;
}
::v-deep .el-input-group__prepend {
  border: none;
  border-right: 1px solid rgba(112, 124, 151, 0.15);
  height: 64px;
  background: #f3f1ff;
  border-radius: 5px 0 0 5px;
  height: 27px;
  font-family: PingFang TC, PingFang TC;
  font-weight: 400;
  font-size: 19px;
  color: #333333;
  line-height: 22px;
  text-align: left;
  font-style: normal;
  text-transform: none;
}
.loginForm_body_tab2 ::v-deep .el-input__inner {
  border-radius: 0 5px 5px 0;
}
.loginForm_body_code ::v-deep .el-form-item {
  width: 100%;
}
::v-deep .el-tabs__header {
  margin-bottom: 32px;
}

.login {
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  height: 100vh;
  &_main {
    width: 1387px;
    height: 800px;
    // width: 72.2%;
    // height: 66.7%;
    display: flex;
    position: relative;
    &_LB {
      position: absolute;
      top: -54px;
      right: -54px;
      width: 108px;
      height: 108px;
      background: linear-gradient(224deg, #9181f4 0%, #5038ed 100%);
      border-radius: 50%;
      z-index: -1;
    }
    &_RT {
      position: absolute;
      bottom: -54px;
      left: -54px;
      width: 108px;
      height: 108px;
      background: #e6e2ff;
      border-radius: 50%;
      z-index: -1;
    }
    &_left {
      width: 50%;
      height: 100%;
      background: linear-gradient(224deg, #9181f4 0%, #5038ed 100%), #7c69f1;
      border-radius: 32px 0 0 32px;
    }
    &_right {
      width: 50%;
      height: 100%;
      background: #ffffff;
      box-shadow: 0px 0 80px 0px rgba(10, 0, 73, 0.2);
      border-radius: 0 32px 32px 0;
      padding: 109px 105px;
      display: flex;
      align-items: center;
      .loginForm {
        width: 100%;
        &_header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          &_title {
            font-family: Poppins, Poppins;
            font-weight: 600;
            font-size: 32px;
            color: #333333;
            text-align: left;
            font-style: normal;
            text-transform: none;
          }
          &_btn {
            span {
              font-family: PingFang SC, PingFang SC;
              font-weight: 400;
              font-size: 21px;
              color: #525252;
              text-align: left;
              font-style: normal;
              text-transform: none;
            }
          }
        }
        &_body {
          margin-top: 53px;
          &_password {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 21px;
            &_text {
              font-family: PingFang SC, PingFang SC;
              font-weight: 400;
              font-size: 16px;
              color: #999999;
              text-align: left;
              font-style: normal;
              text-transform: none;
              vertical-align: bottom;
            }
          }
          &_code {
            display: flex;
            align-items: center;
            justify-content: space-between;
            &_btn {
              width: 203px;
              height: 64px;
              border-radius: 5px;
              background: #6853ef;
              margin-bottom: 22px;
              margin-left: 27px;
              flex-shrink: 0;
              font-size: 18px;
            }
          }
          &_logOn {
            margin-top: 15px;
            width: 100%;
            height: 64px;
            font-family: PingFang SC, PingFang SC;
            font-weight: 400;
            font-size: 24px;
            color: #ffffff;
            line-height: 28px;
            font-style: normal;
            text-transform: none;
            background: linear-gradient(224deg, #5038ed 0%, #9181f4 100%);
            border-radius: 10px;
          }
          &_noAccount {
            margin-top: 21px;
            text-align: center;
            span {
              height: 27px;
              font-family: PingFang SC, PingFang SC;
              font-weight: 400;
              font-size: 19px;
              color: #999999;
              line-height: 22px;
              text-align: left;
              font-style: normal;
              text-transform: none;
            }
          }
          &_agreement {
            margin-top: 43px;
            text-align: left;
            span {
              font-family: PingFang SC, PingFang SC;
              font-weight: 400;
              font-size: 19px;
              color: #999999;
              text-align: left;
              font-style: normal;
              text-transform: none;
              vertical-align: bottom;
            }
          }
        }
      }
    }
  }
}
</style>