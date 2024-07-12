<template>
  <div class="header">
    <div class="header_left">
      <div class="header_left_logo"></div>
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
      <div class="header_middle_tab" v-for="(item, index) in list" :key="index">
        <span>{{ item.label }}</span>
      </div>
    </div>
    <div class="header_right">
      <div class="header_right_btn">
        <el-button>套餐</el-button>
        <img v-if="isLogin" src="../assets/img/login_bg.png" alt="头像" />
        <el-button v-else type="primary" @click="toLogin">登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      isLogin: false,
      value: "CN",
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
      list: [
        {
          value: 1,
          label: "首页",
        },
        {
          value: 2,
          label: "游戏素材",
        },
        {
          value: 3,
          label: "应用素材",
        },
        {
          value: 4,
          label: "短剧素材",
        },
        {
          value: 5,
          label: "投放智能分析",
        },
      ],
    };
  },
  methods: {
    toLogin() {
      this.$router.push("/login");
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
      width: 90px;
      height: 48px;
      background: rgb(194, 191, 196);
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
      span {
        height: 22px;
        font-family: PingFang SC, PingFang SC;
        font-weight: 400;
        font-size: 16px;
        color: #333333;
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
    }
    &_tab:last-child {
      margin-right: 0;
    }
  }
  &_right {
    &_btn {
      display: flex;
      img {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        overflow: hidden;
        margin-left: 24px;
      }
    }
  }
}
</style>