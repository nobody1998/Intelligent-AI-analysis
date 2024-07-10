<template>
  <div class="login">
    <div class="login_main">
      <div class="login_main_LB"></div>
      <div class="login_main_RT"></div>
      <div class="login_main_left"></div>
      <div class="login_main_right">
        <div class="loginForm">
          <div class="loginForm_header">
            <div class="loginForm_header_title"></div>
            <div class="loginForm_header_btn" @click="switchLanguage">
              切换En
            </div>
          </div>
          <div class="loginForm_body">
            <el-form
              ref="form"
              :model="form"
              :rules="formRules"
              label-width="80px"
            >
              <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="账号登录" name="1">
                  <el-form-item label="" prop="name">
                    <el-input
                      v-model="form.name"
                      placeholder="
                       请输入手机号码/电子邮箱
                      "
                    ></el-input>
                  </el-form-item>
                  <el-form-item label="" prop="password">
                    <el-input
                      v-model="form.password"
                      placeholder="请输入密码"
                    ></el-input>
                  </el-form-item>
                  <el-form-item label="">
                    <el-checkbox v-model="form.remember">记住密码</el-checkbox>
                  </el-form-item>
                  忘记密码？
                </el-tab-pane>
                <el-tab-pane label="验证码登录" name="2">
                  <el-form-item label="" prop="name">
                    <el-input
                      v-model="form.name"
                      placeholder="
                        请输入手机号码
                      "
                    ></el-input>
                  </el-form-item>
                  <el-form-item label="" prop="password">
                    <el-input
                      v-model="form.password"
                      placeholder="请输入验证码"
                    ></el-input>
                  </el-form-item>
                </el-tab-pane>
              </el-tabs>
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
.login {
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  height: 100vh;
  &_main {
    // width: 1387px;
    width: 72.2%;
    height: 800px;
    background: gray;
  }
}
</style>