<template>
  <div class="header">
    <div class="header_left">
      <div class="header_left_logo">
        <router-link to="/">
          <img src="../assets/img/logo.png" />
        </router-link>
      </div>
      <div class="header_left_language">
        <el-select v-model="languageValue" @change="languageChange">
          <el-option
            v-for="item in languageOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            disabled
          >
          </el-option>
        </el-select>
      </div>
    </div>
    <div class="header_middle">
      <div
        class="header_middle_tab"
        :class="{ 'header_middle_tab-active': item.path === routePath }"
        v-for="(item, index) in list"
        :key="index"
        @click="toJump(item)"
      >
        <span>{{ item.label }}</span>
      </div>
    </div>
    <div class="header_right">
      <div class="header_right_btn">
        <!-- <el-button @click="toSetMeal">套餐</el-button> -->
        <!-- <el-button v-else type="primary" @click="toLogin">登录</el-button> -->
        <!-- <div class="header_right_btn_usage">
          <div class="usage_icon">
            <img src="../assets/img/download.png" />
          </div>
          <div class="usage_title">{{ $t("sheng-yu-xia-zai-ci-shu") }}</div>
          <div class="usage_times">{{ times }}</div>
        </div> -->
        <el-dropdown @command="handleCommand" v-if="isLogin">
          <span class="el-dropdown-link">
            <img src="../assets/img/defaultAvatar.png" />
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item
              v-for="(item, index) in options1"
              :command="item.value"
              :key="index"
              >{{ item.label }}</el-dropdown-item
            >
          </el-dropdown-menu>
        </el-dropdown>
        <div v-else class="header_right_btn_login" @click="toLogin">
          登录/注册
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      headerKey: 1,
      languageValue: "zh",
      value1: null,
      languageOptions: [
        {
          value: "zh",
          label: this.$t("zhong-guo-ban-cn"),
        },
        {
          value: "en",
          label: this.$t("guo-ji-ban-en"),
        },
      ],
      options1: [
        {
          value: 1,
          label: this.$t("ge-ren-zhong-xin"),
        },
        // {
        //   value: 2,
        //   label: this.$t("wo-de-ding-dan"),
        // },
        // {
        //   value: 3,
        //   label: this.$t("sheng-ji-tao-can"),
        // },
        {
          value: 4,
          label: this.$t("xiu-gai-mi-ma"),
        },
        {
          value: 5,
          label: this.$t("tui-chu-deng-lu"),
        },
      ],
      list: [
        // {
        //   value: 1,
        //   label: this.$t("shou-ye"),
        //   path: "/",
        // },
        {
          value: 2,
          label: "短剧素材",
        },
        {
          value: 3,
          label: "AI工具",
        },
        {
          value: 4,
          label: "海外短剧KOL推广方案",
          path: "/KOLDetail",
        },
        {
          value: 5,
          label: "海外短剧Tiktok矩阵推广方案",
          path: "/TiktokDetail",
        },
      ],
    };
  },
  computed: {
    routePath() {
      return this.$route.path;
    },
    times() {
      return localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user")).download_times
        : 0;
    },
    isLogin() {
      return localStorage.getItem("token");
    },
  },
  methods: {
    languageChange() {
      this.$i18n.locale = this.languageValue;
    },
    handleCommand(type) {
      if (type === 1) {
        if (this.$route.fullPath !== "/personalCenter?tab=1") {
          this.$router.push({
            path: "/personalCenter?tab=1",
          });
        }
      } else if (type === 2) {
        if (this.$route.fullPath !== "/personalCenter?tab=3") {
          this.$router.push({
            path: "/personalCenter?tab=3",
          });
        }
      } else if (type === 3) {
        if (this.$route.path !== "/setMeal") {
          this.$router.push("/setMeal");
        }
      } else if (type === 4) {
        if (this.$route.fullPath !== "/personalCenter?tab=1&&action=1") {
          this.$router.push({
            path: "/personalCenter?tab=1&&action=1",
          });
        }
      } else if (type === 5) {
        this.$store.dispatch("user/logout");
        window.location.reload();
      }
    },
    toJump(item) {
      if (item.path) {
        const url = item.path;
        if (this.$route.path !== url) {
          this.$router.push({ path: url });
        }
      }
    },
    toLogin() {
      this.$router.push("/login");
    },
    toSetMeal() {
      this.$router.push("/setMeal");
    },
  },
};
</script>

<style lang="scss" scoped>
// .header_right_btn ::v-deep .el-button {
//   width: 88px;
//   height: 36px;
//   font-family: PingFang SC, PingFang SC;
//   font-weight: 400;
//   font-size: 14px;
//   font-style: normal;
//   text-transform: none;
//   line-height: 0;
// }
.header_right_btn ::v-deep .el-button:last-child {
  margin-left: 24px;
}
::v-deep .el-input__inner {
  border: none;
  font-family: PingFang SC, PingFang SC;
  font-weight: 500;
  font-size: 14px;
  color: #999999;
  text-align: left;
  font-style: normal;
  text-transform: none;
  padding-left: 0;
}
::v-deep .el-input {
  width: 95px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 64px;
  padding: 12px 24px;
  background: #ffffff;
  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.08);
  border-radius: 0px 0px 0px 0px;
  &_left {
    display: flex;
    align-items: center;
    &_logo {
      img {
        width: 36px;
        height: 36px;
      }
    }
    &_language {
      margin-left: 24px;
    }
  }
  &_middle {
    display: flex;
    align-items: center;
    &_tab {
      margin-right: 40px;
      color: #333333;
      font-weight: 400;
      padding-bottom: 22px;
      margin-top: 21px;
      border-bottom: 2px solid white;
      span {
        height: 22px;
        font-family: PingFang SC, PingFang SC;
        font-size: 16px;
        line-height: 19px;
        text-align: left;
        font-style: normal;
        text-transform: none;
      }
      span:hover {
        cursor: pointer;
        // font-weight: 400;
        // color: #6956e5;
      }
      &-active {
        cursor: pointer;
        font-weight: 600;
        color: #6956e5;
        padding-bottom: 22px;
        margin-top: 21px;
        border-bottom: 2px solid #6956e5;
      }
    }
    &_tab:last-child {
      margin-right: 0;
    }
  }
  &_right {
    &_btn {
      display: flex;
      .el-dropdown-link {
        img {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          overflow: hidden;
          margin-left: 24px;
          cursor: pointer;
        }
      }
      &_usage {
        display: flex;
        align-items: center;
        .usage {
          &_icon {
            width: 20px;
            height: 20px;
            img {
              width: 20px;
              height: 20px;
            }
          }
          &_title {
            margin-left: 8px;
            font-family: PingFang SC, PingFang SC;
            font-weight: 400;
            font-size: 14px;
            color: #565656;
            line-height: 16px;
            text-align: left;
            font-style: normal;
            text-transform: none;
          }
          &_times {
            color: #6956e5;
          }
        }
      }
      &_login {
        width: 96px;
        height: 36px;
        background: #6956e5;
        border-radius: 4px 4px 4px 4px;
        text-align: center;
        font-family: PingFang SC, PingFang SC;
        font-weight: 500;
        font-size: 14px;
        color: #ffffff;
        line-height: 21px;
        font-style: normal;
        text-transform: none;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
      }
    }
  }
}
</style>