<template>
  <div class="header">
    <div class="header_left">
      <div class="header_left_logo">
        <router-link to="/">
          <img src="../assets/img/logo.png" />
        </router-link>
      </div>
      <div class="header_left_language">
        <el-select v-model="value">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
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
        <div class="header_right_btn_usage">
          <div class="usage_icon">
            <img src="../assets/img/download.png" />
          </div>
          <div class="usage_title">剩余下载次数：</div>
          <div class="usage_times">{{ times }}</div>
        </div>
        <el-dropdown @command="handleCommand">
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      value: "CN",
      value1: null,
      options: [
        {
          value: "CN",
          label: "中国版CN",
        },
        {
          value: "EN",
          label: "国际版EN",
        },
      ],
      options1: [
        {
          value: 1,
          label: "个人中心",
        },
        {
          value: 2,
          label: "我的订单",
        },
        {
          value: 3,
          label: "升级套餐",
        },
        {
          value: 4,
          label: "修改密码",
        },
        {
          value: 5,
          label: "退出登录",
        },
      ],
      list: [
        {
          value: 1,
          label: "首页",
          path: "/",
        },
        // {
        //   value: 2,
        //   label: "游戏素材",
        // },
        // {
        //   value: 3,
        //   label: "应用素材",
        // },
        // {
        //   value: 4,
        //   label: "短剧素材",
        // },
        // {
        //   value: 5,
        //   label: "投放智能分析",
        // },
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
  },
  methods: {
    handleCommand(type) {
      if (type === 1) {
        this.$router.push({
          path: "/personalCenter",
          query: {
            tab: 1,
          },
        });
      } else if (type === 2) {
        this.$router.push({
          path: "/personalCenter",
          query: {
            tab: 3,
          },
        });
      } else if (type === 3) {
        this.$router.push("/setMeal");
      } else if (type === 4) {
        this.$router.push({
          path: "/personalCenter",
          query: {
            tab: 1,
            action: 1,
          },
        });
      } else if (type === 5) {
        this.$store.dispatch("user/logout");
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
.header_right_btn ::v-deep .el-button {
  width: 88px;
  height: 36px;
  font-family: PingFang SC, PingFang SC;
  font-weight: 400;
  font-size: 14px;
  font-style: normal;
  text-transform: none;
  line-height: 0;
}
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
  height: 72px;
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
        font-weight: 600;
        color: #6956e5;
      }
      &-active {
        cursor: pointer;
        font-weight: 600;
        color: #6956e5;
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
    }
  }
}
</style>