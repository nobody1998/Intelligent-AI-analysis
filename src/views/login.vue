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
              <el-button class="nopadding" type="text">
                <span>{{ $t('qie-huan-en') }}</span>
              </el-button>
            </div>
          </div>
          <div class="loginForm_body">
            <el-form ref="form" :model="form" :rules="formRules">
              <el-tabs
                v-if="type === 1"
                v-model="type1Active"
                @tab-click="handleClick1"
              >
                <el-tab-pane :label="$t('zhang-hao-deng-lu')" name="1">
                  <div v-if="type1Active === '1'">
                    <el-form-item label="" prop="account">
                      <el-input
                        v-model="form.account"
                        :placeholder="$t('qing-shu-ru-shou-ji-hao-ma-dian-zi-you-xiang')"
                      ></el-input>
                    </el-form-item>
                    <el-form-item label="" prop="password">
                      <el-input
                        v-model="form.password"
                        show-password
                        :placeholder="$t('qing-shu-ru-mi-ma')"
                        @keyup.enter.native="submitForm"
                      ></el-input>
                    </el-form-item>
                    <div class="loginForm_body_password">
                      <!-- <el-form-item label=""> -->
                      <el-checkbox v-model="form.isRemember"
                        ><span class="loginForm_body_password_text"
                          >{{ $t('ji-zhu-mi-ma') }}</span
                        ></el-checkbox
                      >
                      <!-- </el-form-item> -->
                      <el-button
                        class="nopadding"
                        type="text"
                        @click="changeType(4)"
                      >
                        <div class="loginForm_body_password_text">
                          {{ $t('wang-ji-mi-ma') }}
                        </div>
                      </el-button>
                    </div>
                  </div>
                </el-tab-pane>
                <el-tab-pane :label="$t('yan-zheng-ma-deng-lu')" name="2">
                  <div v-if="type1Active === '2'">
                    <el-form-item
                      label=""
                      prop="account"
                      class="loginForm_body_tab2"
                    >
                      <el-input
                        :placeholder="$t('qing-shu-ru-shou-ji-hao-ma')"
                        v-model="form.account"
                      >
                        <template slot="prepend">+86</template>
                      </el-input>
                    </el-form-item>
                    <div class="loginForm_body_code">
                      <el-form-item label="" prop="code">
                        <el-input
                          class="loginForm_body_code_input"
                          v-model="form.code"
                          :placeholder="$t('qing-shu-ru-yan-zheng-ma')"
                          @keyup.enter.native="submitForm"
                        ></el-input>
                      </el-form-item>
                      <el-button
                        class="loginForm_body_code_btn"
                        type="primary"
                        :disabled="sendCodeStatus === 1"
                        @click="sendCodeFn"
                        >{{
                          sendCodeStatus === 1
                            ? `${countdown}${$t('miao')}`
                            : sendCodeStatus === 2
                            ? `${$t('chong-xin-fa-song')}`
                            : `${$t('fa-song-yan-zheng-ma')}`
                        }}</el-button
                      >
                    </div>
                  </div>
                </el-tab-pane>
              </el-tabs>
              <div v-if="type === 2">
                <el-form-item label="" prop="account">
                  <el-input
                    v-model="form.account"
                    :placeholder="$t('qing-shu-ru-shou-ji-hao-ma-dian-zi-you-xiang-0')"
                  ></el-input>
                </el-form-item>
                <el-form-item label="" prop="password">
                  <el-input
                    v-model="form.password"
                    :placeholder="$t('qing-shu-ru-mi-ma-0')"
                    show-password
                  ></el-input>
                </el-form-item>
                <div class="loginForm_body_code">
                  <el-form-item label="" prop="code">
                    <el-input
                      class="loginForm_body_code_input"
                      v-model="form.code"
                      :placeholder="$t('qing-shu-ru-yan-zheng-ma-0')"
                      @keyup.enter.native="submitForm"
                    ></el-input>
                  </el-form-item>
                  <el-button
                    class="loginForm_body_code_btn"
                    type="primary"
                    :disabled="sendCodeStatus === 1"
                    @click="sendCodeFn"
                    >{{
                      sendCodeStatus === 1
                        ? `${countdown}${$t('miao')}`
                        : sendCodeStatus === 2
                        ? `${$t('chong-xin-fa-song')}`
                        : `${$t('fa-song-yan-zheng-ma')}`
                    }}</el-button
                  >
                </div>
              </div>
              <div v-if="type === 3">
                <el-form-item label="" prop="name">
                  <el-input
                    v-model="form.name"
                    :placeholder="$t('qing-shu-ru-yong-hu-ni-cheng')"
                  ></el-input>
                </el-form-item>
                <el-form-item label="" prop="company_name">
                  <el-input
                    v-model="form.company_name"
                    :placeholder="$t('qing-shu-ru-suo-zai-gong-si-ming-cheng')"
                  ></el-input>
                </el-form-item>
                <el-form-item label="" prop="user_needs">
                  <el-input
                    v-model="form.user_needs"
                    type="textarea"
                    :rows="4"
                    resize="none"
                    :placeholder="$t('nin-xi-wang-cong-zhe-li-huo-qu-dao-shi-mo-bang-zhu-xin-xi')"
                    @keyup.enter.native="submitForm"
                  ></el-input>
                </el-form-item>
              </div>
              <el-tabs
                v-if="type === 4"
                v-model="type4Active"
                @tab-click="handleClick4"
              >
                <el-tab-pane :label="$t('shou-ji-yan-zheng')" name="1">
                  <div v-if="type4Active === '1'">
                    <el-form-item label="" prop="account">
                      <el-input
                        v-model="form.account"
                        :placeholder="$t('qing-shu-ru-shou-ji-hao-ma-0')"
                      ></el-input>
                    </el-form-item>
                    <el-form-item label="" prop="password">
                      <el-input
                        v-model="form.password"
                        show-password
                        :placeholder="$t('qing-shu-ru-xin-mi-ma')"
                      ></el-input>
                    </el-form-item>
                    <el-form-item label="" prop="password2">
                      <el-input
                        v-model="form.password2"
                        show-password
                        :placeholder="$t('qing-zai-ci-shu-ru-xin-mi-ma')"
                      ></el-input>
                    </el-form-item>
                    <div class="loginForm_body_code">
                      <el-form-item label="" prop="code">
                        <el-input
                          class="loginForm_body_code_input"
                          v-model="form.code"
                          :placeholder="$t('qing-shu-ru-yan-zheng-ma-1')"
                          @keyup.enter.native="submitForm"
                        ></el-input>
                      </el-form-item>
                      <el-button
                        class="loginForm_body_code_btn"
                        type="primary"
                        @click="sendCodeFn"
                        >{{ $t('fa-song-yan-zheng-ma') }}</el-button
                      >
                    </div>
                  </div>
                </el-tab-pane>
                <el-tab-pane :label="$t('you-xiang-yan-zheng')" name="2">
                  <div v-if="type4Active === '2'">
                    <el-form-item label="" prop="account">
                      <el-input
                        v-model="form.account"
                        :placeholder="$t('qing-shu-ru-dian-zi-you-xiang')"
                      ></el-input>
                    </el-form-item>
                    <el-form-item label="" prop="password">
                      <el-input
                        v-model="form.password"
                        show-password
                        :placeholder="$t('qing-shu-ru-xin-mi-ma-0')"
                      ></el-input>
                    </el-form-item>
                    <el-form-item label="" prop="password2">
                      <el-input
                        v-model="form.password2"
                        show-password
                        :placeholder="$t('qing-zai-ci-shu-ru-xin-mi-ma-0')"
                      ></el-input>
                    </el-form-item>
                    <div class="loginForm_body_code">
                      <el-form-item label="" prop="code">
                        <el-input
                          class="loginForm_body_code_input"
                          v-model="form.code"
                          :placeholder="$t('qing-shu-ru-yan-zheng-ma-2')"
                          @keyup.enter.native="submitForm"
                        ></el-input>
                      </el-form-item>
                      <el-button
                        class="loginForm_body_code_btn"
                        type="primary"
                        @click="sendCodeFn"
                        >{{ $t('fa-song-yan-zheng-ma-0') }}</el-button
                      >
                    </div>
                  </div>
                </el-tab-pane>
              </el-tabs>
              <el-button
                class="loginForm_body_logOn"
                type="primary"
                :loading="submitBtnLoading"
                @click="submitForm"
                >{{
                  type === 1
                    ? `${$t('deng-lu')}`
                    : type === 2
                    ? `${$t('zhu-ce')}`
                    : type === 3
                    ? `${$t('li-ji-shi-yong')}`
                    : type === 4
                    ? `${$t('zhong-zhi-mi-ma')}`
                    : ""
                }}</el-button
              >
              <div class="loginForm_body_noAccount">
                <span>{{
                  type === 1
                    ? `${$t('hai-mei-zhang-hao')}`
                    : [2, 4].indexOf(type) !== -1
                    ? `${$t('yi-you-zhang-hao')}`
                    : ""
                }}</span>
                <el-button class="nopadding" type="text" @click="changeType">
                  <span style="color: #7a68f1">{{
                    type === 1
                      ? `${$t('li-ji-zhu-ce')}`
                      : [2, 4].indexOf(type) !== -1
                      ? `${$t('zhi-jie-deng-lu')}`
                      : ""
                  }}</span>
                </el-button>
              </div>
              <el-form-item
                class="loginForm_body_agreement"
                label=""
                prop="isRead"
                v-if="[1, 2].indexOf(type) !== -1"
              >
                <el-checkbox v-model="form.isRead" style="display: flex;"
                  ><span class="loginForm_body_agreement"
                    >{{ $t('yi-yue-du-bing-tong-yi-zhi-shu-ai-yong-hu-xie-yi-he-yin-si-zheng-ce') }}</span
                  ></el-checkbox
                >
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  register,
  sendCode,
  updateInfor,
  login,
  resetPassword,
} from "../api/user";

export default {
  name: "Login",
  data() {
    var checkIsRead = (rule, value, callback) => {
      if (!value) {
        callback(new Error(this.$t('qing-yue-du-bing-tong-yi-zhi-shu-ai-yong-hu-xie-yi-he-yin-si-zheng-ce')));
      } else {
        callback();
      }
    };
    var checkPassword2 = (rule, value, callback) => {
      if (value !== this.form.password) {
        callback(new Error(this.$t('liang-ci-shu-ru-mi-ma-bu-yi-zhi')));
      } else {
        callback();
      }
    };

    return {
      sendCodeStatus: null,
      countdown: 60, // 倒计时初始值
      timer: null, // 存储定时器的引用
      updateInforObj: {
        // phone: "13286497393",
      },
      submitBtnLoading: false,
      // 显示类型 1 登录 2 注册1 3 注册2 4 重置密码
      type: 1,
      type1Active: "1",
      type4Active: "1",
      form: {
        account: "",
        password: "",
        password2: "",
        code: "",
        isRead: false,
        isRemember: false,
        name: "",
        company_name: "",
        user_needs: "",
      },
      formRules: {
        account: [
          {
            required: true,
            message: this.$t('qing-shu-ru-shou-ji-hao-ma-dian-zi-you-xiang-1'),
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: this.$t('qing-shu-ru-mi-ma-1'),
            trigger: "blur",
          },
        ],
        password2: [{ validator: checkPassword2, trigger: "blur" }],
        code: [
          {
            required: true,
            message: this.$t('qing-shu-ru-yan-zheng-ma-3'),
            trigger: "blur",
          },
        ],
        isRead: [{ validator: checkIsRead, trigger: "blur" }],
      },
    };
  },
  computed: {
    title() {
      let text = "";
      switch (this.type) {
        case 1:
          text = this.$t('huan-ying-lai-dao-zhi-shu-ai');
          break;
        case 2:
          text = this.$t('huan-ying-zhu-ce-zhi-shu-ai');
          break;
        case 3:
          text = this.$t('wan-shan-shen-fen-xin-xi');
          break;
        case 4:
          text = this.$t('zhong-zhi-mi-ma');
          break;
        default:
          break;
      }
      return text;
    },
  },
  created() {
    this.$nextTick(() => {
      this.getInfo();
    });
  },
  beforeDestroy() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  },
  methods: {
    getInfo() {
      this.form.isRemember = localStorage.getItem("isRemember") ? true : false;
      if (this.form.isRemember) {
        this.form.account = localStorage.getItem("accountInfor")
          ? JSON.parse(localStorage.getItem("accountInfor")).account
          : "";
        this.form.password = localStorage.getItem("accountInfor")
          ? JSON.parse(localStorage.getItem("accountInfor")).password
          : "";
        this.form.isRead = localStorage.getItem("accountInfor") ? true : false;
      }
    },
    // 开始倒计时
    startCountdown() {
      if (this.countdown > 0) {
        this.timer = setTimeout(() => {
          this.countdown--;
          this.startCountdown(); // 递归调用，直到countdown为0
        }, 1000);
      } else {
        this.sendCodeStatus = 2; // 倒计时结束，恢复发送状态
        this.countdown = 60; // 重置倒计时
        // 可以选择清除定时器，但在这个递归结构中，定时器会在最后一轮自动停止
      }
    },
    sendCodeFn() {
      if (!this.form.account) {
        return this.$message({
          message: this.$t('qing-shu-ru-shou-ji-hao-ma-dian-zi-you-xiang-2'),
          type: "warning",
        });
      }
      const data = {
        account: this.form.account,
      };
      sendCode(data).then((res) => {
        this.sendCodeStatus = 1;
        this.startCountdown();
      });
    },
    submitForm() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.submitBtnLoading = !this.submitBtnLoading;
          if (this.type === 1) {
            let data = {};
            if (this.type1Active === "1") {
              data.account = this.form.account;
              data.password = this.form.password;
              data.code = this.form.code;
              data.login_type = Number(this.type1Active);
            } else if (this.type1Active === "2") {
              data.account = this.form.account;
              data.code = this.form.code;
              data.login_type = Number(this.type1Active);
            }
            login(data)
              .then((res) => {
                localStorage.setItem("user", JSON.stringify(res.data));
                localStorage.setItem("token", res.data.access_token);
                localStorage.setItem(
                  "accountInfor",
                  JSON.stringify({
                    account: this.form.account,
                    password: this.form.password,
                  })
                );
                if (this.form.isRemember) {
                  localStorage.setItem("isRemember", 1);
                } else {
                  localStorage.removeItem("isRemember");
                }
                this.$message({
                  message: this.$t('deng-lu-cheng-gong'),
                  type: "success",
                });
                this.submitBtnLoading = !this.submitBtnLoading;
                if (this.$route.query.redirect && this.$route.query.redirect !== '/personalCenter?tab=1&action=1') {
                  this.$router.push(this.$route.query.redirect);
                } else {
                  this.$router.push("/");
                }
              })
              .catch(() => {
                this.submitBtnLoading = !this.submitBtnLoading;
              });
          } else if (this.type === 2) {
            const data = {
              account: this.form.account,
              password: this.form.password,
              code: this.form.code,
            };
            register(data)
              .then((res) => {
                this.$message({
                  message: this.$t('zhu-ce-cheng-gong'),
                  type: "success",
                });
                this.submitBtnLoading = !this.submitBtnLoading;
                this.updateInforObj = res.data;
                localStorage.setItem("token", this.updateInforObj.token);
                this.type++;
              })
              .catch(() => {
                this.submitBtnLoading = !this.submitBtnLoading;
              });
          } else if (this.type === 3) {
            // 邮箱
            // const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            // const phoneNumberPattern = /^1[3-9]\d{9}$/;
            // const isPhone = phoneNumberPattern.test(this.form.account);
            delete this.updateInforObj.phone;
            if (!this.updateInforObj.token) {
              this.updateInforObj.token = JSON.parse(
                localStorage.getItem("token")
              );
            }
            this.updateInforObj.company_name = this.form.company_name;
            this.updateInforObj.name = this.form.name;
            this.updateInforObj.user_needs = this.form.user_needs;
            updateInfor(this.updateInforObj)
              .then((res) => {
                this.submitBtnLoading = !this.submitBtnLoading;
                this.type = 1;
              })
              .catch(() => {
                this.submitBtnLoading = !this.submitBtnLoading;
              });
          } else if (this.type === 4) {
            const data = {
              account: this.form.account,
              password: this.form.password,
              code: this.form.code,
            };
            resetPassword(data)
              .then((res) => {
                this.$message({
                  message: this.$t('zhong-zhi-mi-ma-cheng-gong'),
                  type: "success",
                });
                this.submitBtnLoading = !this.submitBtnLoading;
                this.type = 1;
              })
              .catch(() => {
                this.submitBtnLoading = !this.submitBtnLoading;
              });
          }
        } else {
          return false;
        }
      });
    },
    changeType(type) {
      this.$nextTick(() => {
        if (typeof type === "number") {
          this.type = type;
          this.resetForm(type);
        } else {
          if (this.type === 1) {
            this.type = 2;
          this.resetForm(2);
          } else if ([2, 4].indexOf(this.type) !== -1) {
            this.type = 1;
          this.resetForm(1);
          }
        }
      });
    },
    resetForm(type) {
      this.$nextTick(() => {
        switch (type) {
          case 1:
            this.type1Active === "1";
            this.form.account = "";
            this.form.password = "";
            this.getInfo();
            break;
          case 2:
            this.form.account = "";
            this.form.password = "";
            this.form.code = "";
            this.form.isRead = false;
            break;
          case 3:
            this.form.name = "";
            this.form.company_name = "";
            this.form.user_needs = "";
            break;
          case 4:
            this.form.account = "";
            this.form.password = "";
            this.form.password2 = "";
            this.form.code = "";
            break;
          default:
            break;
        }
        this.$refs.form.clearValidate();
      })
    },
    switchLanguage() {
      if (this.$i18n.locale === "zh") {
        this.$i18n.locale = "en";
      } else if (this.$i18n.locale === "en") {
        this.$i18n.locale = "zh";
      }
    },
    handleClick1() {
      this.$nextTick(() => {
        if (this.type1Active === "1") {
          this.form.account = "";
          this.form.password = "";
          this.getInfo();
        } else if (this.type1Active === "2") {
          this.form.account = "";
          this.form.code = "";
        }
        this.$refs.form.clearValidate();
      });
    },
    handleClick4() {
      this.$nextTick(() => {
        this.form.account = "";
        this.form.password = "";
        this.form.password2 = "";
        this.form.code = "";
        this.$refs.form.clearValidate();
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.nopadding {
  padding: 0;
}

::v-deep .el-checkbox__inner {
  width: 16px;
  height: 16px;
}
::v-deep .el-checkbox__inner::after {
  width: 4px;
  height: 9px;
  left: 5px;
}
::v-deep .el-tabs__item {
  height: 22px;
  font-family: PingFang SC, PingFang SC;
  font-weight: 600;
  font-size: 16px;
  color: #333333;
  line-height: 19px;
  text-align: left;
  font-style: normal;
  text-transform: none;
  margin-bottom: 11px;
}
::v-deep .el-input__inner {
  height: 48px;
  background: #f3f1ff;
  border-radius: 4px 4px 4px 4px;
  border: none;
  font-family: PingFang SC, PingFang SC;
  font-weight: 400;
  font-size: 14px;
  color: #333333;
  line-height: 16px;
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
::v-deep .el-textarea__inner {
  background: #f3f1ff;
  border-radius: 4px 4px 4px 4px;
  border: none;
  font-family: PingFang SC, PingFang SC;
  font-weight: 400;
  font-size: 14px;
  color: #333333;
  line-height: 16px;
  text-align: left;
  font-style: normal;
  text-transform: none;
  padding: 16px;
}
::v-deep .el-form-item__error {
  font-size: 12px;
}
::v-deep .el-input-group__prepend {
  border: none;
  border-right: 1px solid rgba(112, 124, 151, 0.15);
  height: 48px;
  background: #f3f1ff;
  border-radius: 4px 0 0 4px;
  font-family: PingFang TC, PingFang TC;
  font-weight: 400;
  font-size: 14px;
  color: #333333;
  line-height: 16px;
  text-align: left;
  font-style: normal;
  text-transform: none;
}
.loginForm_body_tab2 ::v-deep .el-input__inner {
  border-radius: 0 4px 4px 0;
}
.loginForm_body_code ::v-deep .el-form-item {
  width: 100%;
}
::v-deep .el-tabs__header {
  margin-bottom: 24px;
}
::v-deep .el-tabs__active-bar {
  height: 2px;
}
::v-deep .el-form-item {
  margin-bottom: 20px;
}
.loginForm_body_agreement ::v-deep .el-form-item__content {
  line-height: 0;
}
::v-deep .el-tabs__nav-prev {
  line-height: 20px;
}
::v-deep .el-tabs__nav-next {
  line-height: 20px;
}
.loginForm_body_agreement ::v-deep .el-checkbox__label {  
  white-space: normal !important; /* 允许文本换行 */  
  word-break: break-all; /* 在必要时打断单词以换行 */  
  display: block; /* 如果需要的话，使标签成为块级元素以占用整行 */  
  /* 可能还需要设置一些宽度、内边距等属性来适应你的布局 */  
}  
  
/* 如果你的 span 有一个特定的类，也可以直接对这个类应用样式 */  
.loginForm_body_agreement {  
  white-space: normal; /* 允许文本换行 */  
  word-break: break-all; /* 在必要时打断单词以换行 */  
  /* 其他样式 */  
}

.login {
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  height: 100vh;
  &_main {
    width: 1040px;
    height: 600px;
    // width: 72.2%;
    // height: 66.7%;
    display: flex;
    position: relative;
    &_LB {
      position: absolute;
      top: -48px;
      right: -56px;
      width: 96px;
      height: 96px;
      background: linear-gradient(224deg, #9181f4 0%, #5038ed 100%);
      border-radius: 50%;
      z-index: -1;
    }
    &_RT {
      position: absolute;
      bottom: -40px;
      left: -41px;
      width: 96px;
      height: 96px;
      background: #e6e2ff;
      border-radius: 50%;
      z-index: -1;
    }
    &_left {
      width: 50%;
      height: 100%;
      // background: linear-gradient(224deg, #9181f4 0%, #5038ed 100%), #7c69f1;
      background: no-repeat url("../assets/img/login_bg.png");
      border-radius: 24px 0 0 24px;
    }
    &_right {
      width: 50%;
      height: 100%;
      background: #ffffff;
      box-shadow: 0px 0 60px 0px rgba(10, 0, 73, 0.2);
      border-radius: 0 24px 24px 0;
      // padding: 82px 79px;
      padding: 82px 72px;
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
            font-size: 24px;
            color: #333333;
            text-align: left;
            font-style: normal;
            text-transform: none;
          }
          &_btn {
            span {
              font-family: PingFang SC, PingFang SC;
              font-weight: 400;
              font-size: 16px;
              color: #525252;
              text-align: left;
              font-style: normal;
              text-transform: none;
            }
          }
        }
        &_body {
          margin-top: 39px;
          &_password {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 21px;
            &_text {
              font-family: PingFang SC, PingFang SC;
              font-weight: 400;
              font-size: 12px;
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
              width: 152px;
              height: 48px;
              border-radius: 5px;
              background: #6853ef;
              margin-bottom: 20px;
              margin-left: 20px;
              flex-shrink: 0;
              font-size: 14px;
            }
          }
          &_logOn {
            margin-top: 6px;
            width: 100%;
            height: 48px;
            font-family: PingFang SC, PingFang SC;
            font-weight: 400;
            font-size: 18px;
            color: #ffffff;
            line-height: 21px;
            font-style: normal;
            text-transform: none;
            background: linear-gradient(224deg, #5038ed 0%, #9181f4 100%);
            border-radius: 6px;
          }
          &_noAccount {
            margin-top: 16px;
            text-align: center;
            span {
              height: 20px;
              font-family: PingFang SC, PingFang SC;
              font-weight: 400;
              font-size: 16px;
              color: #999999;
              line-height: 16px;
              text-align: left;
              font-style: normal;
              text-transform: none;
            }
          }
          &_agreement {
            margin-top: 32px;
            text-align: left;
            span {
              font-family: PingFang SC, PingFang SC;
              font-weight: 400;
              font-size: 14px;
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