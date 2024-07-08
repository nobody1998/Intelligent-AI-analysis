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
              {{ $t("qie-huan-en") }}
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
                <el-tab-pane :label="$t('zhang-hao-deng-lu')" name="1">
                  <el-form-item label="" prop="name">
                    <el-input
                      v-model="form.name"
                      :placeholder="
                        $t('qing-shu-ru-shou-ji-hao-ma-dian-zi-you-xiang')
                      "
                    ></el-input>
                  </el-form-item>
                  <el-form-item label="" prop="password">
                    <el-input
                      v-model="form.password"
                      :placeholder="$t('qing-shu-ru-mi-ma')"
                    ></el-input>
                  </el-form-item>
                  <el-form-item label="">
                    <el-checkbox v-model="form.remember">{{
                      $t("ji-zhu-mi-ma")
                    }}</el-checkbox>
                  </el-form-item>
                  {{ $t("wang-ji-mi-ma") }}
                </el-tab-pane>
                <el-tab-pane :label="$t('yan-zheng-ma-deng-lu')" name="2">
                  <el-form-item label="" prop="name">
                    <el-input
                      v-model="form.name"
                      :placeholder="
                        $t('qing-shu-ru-shou-ji-hao-ma-dian-zi-you-xiang')
                      "
                    ></el-input>
                  </el-form-item>
                  <el-form-item label="" prop="password">
                    <el-input
                      v-model="form.password"
                      :placeholder="$t('qing-shu-ru-mi-ma')"
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
  // name: "Login",
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
            message: this.$t("qing-shu-ru-yong-hu-ming"),
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: this.$t("qing-shu-ru-yong-hu-ming-0"),
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