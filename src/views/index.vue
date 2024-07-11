<template>
  <div class="homePage">
    <div class="homePage_search">
      <div class="homePage_search_input">
        <div style="margin-top: 15px">
          <el-input placeholder="请输入搜索内容" v-model="input3">
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
            <el-button slot="append" icon="el-icon-search">搜索</el-button>
          </el-input>
        </div>
      </div>
      <div class="homePage_search_keyWords">
        <div class="homePage_search_keyWords_title">热门搜索：</div>
        <div
          class="homePage_search_keyWords_item"
          v-for="(item, index) in keyWordsList"
          :key="index"
        >
          {{ item.label }}
        </div>
      </div>
    </div>
    <div class="homePage_screen"></div>
    <div class="homePage_main"></div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      input3: "",
      keyWordsList: [
        {
          value: 1,
          label: "智能广告",
        },
        {
          value: 2,
          label: "智能广告",
        },
        {
          value: 3,
          label: "智能广告",
        },
        {
          value: 4,
          label: "智能广告",
        },
        {
          value: 5,
          label: "智能广告",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.homePage_search_input ::v-deep .el-input-group {
  width: 640px;
  height: 44px;
}
.homePage_search_input ::v-deep .el-input-group__append {
  background: #6956e5;
  height: 21px;
  font-family: PingFang SC, PingFang SC;
  font-weight: 400;
  font-size: 14px;
  color: #ffffff;
  line-height: 21px;
  text-align: left;
  font-style: normal;
  text-transform: none;
}
.homePage_search_input ::v-deep .el-input__inner {
  height: 44px;
  padding-left: 55px;
  font-family: PingFang SC, PingFang SC;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: left;
  font-style: normal;
  text-transform: none;
}
.homePage_search_input ::v-deep .el-input__inner::placeholder {
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

.homePage {
  height: 100vh;
  background: #f4f4f5;
  &_search {
    &_input {
      display: flex;
      align-items: center;
      justify-content: center;
      .el-icon-search {
        font-size: 20px;
        color: #6956e5;
        padding-left: 13px;
      }
    }
    &_keyWords {
      margin-top: 16px;
      display: flex;
      justify-content: center;
      align-items: center;
      &_title {
        height: 20px;
        font-family: PingFang SC, PingFang SC;
        font-weight: 400;
        font-size: 14px;
        color: #999999;
        line-height: 16px;
        text-align: left;
        font-style: normal;
        text-transform: none;
        margin-right: 12px;
      }
      &_item {
        height: 28px;
        background: #ffffff;
        border-radius: 4px 4px 4px 4px;
        padding: 4px 20px;
        font-family: PingFang SC, PingFang SC;
        font-weight: 400;
        font-size: 14px;
        color: #666666;
        line-height: 16px;
        text-align: left;
        font-style: normal;
        text-transform: none;
        margin-right: 20px;
        border: #ffffff 1px solid;
      }
      &_item:last-child {
        margin-right: 0;
      }
      &_item:hover {
        border: #6956e5 1px solid;
        color: #6956e5;
      }
    }
  }
}
</style>