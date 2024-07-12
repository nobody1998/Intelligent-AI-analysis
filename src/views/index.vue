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
    <div class="homePage_screen">
      <div class="homePage_screen_top">
        <div
          class="homePage_screen_top_item"
          :class="{
            'homePage_screen_top_item-active': item.value === chooseTab,
          }"
          v-for="(item, index) in tabList"
          :key="index"
        >
          {{ item.label }}
        </div>
      </div>
      <div class="homePage_screen_main">
        <div class="homePage_screen_main_item">
          <div class="screenItem_title">已选：</div>
          <div class="screenItem_content">
            <div
              class="screenItem_content1_option"
              v-for="(item, index) in selectedList"
              :key="index"
            >
              <span>{{ item.label }}</span>
              <i class="el-icon-close"></i>
            </div>
            <el-button>清除</el-button>
            <el-button type="primary">保存</el-button>
          </div>
        </div>
        <div class="homePage_screen_main_item">
          <div class="screenItem_title">分类：</div>
          <div class="screenItem_content">
            <div
              class="screenItem_content2_option"
              v-for="(item, index) in selectedList"
              :key="index"
            >
              <span>{{ item.label }}</span>
            </div>
          </div>
        </div>
        <div class="homePage_screen_main_item">
          <div class="screenItem_title">渠道：</div>
          <div class="screenItem_content">
            <div
              class="screenItem_content3_option"
              v-for="(item, index) in channelList"
              :key="index"
            >
              <img :src="item.img" alt="渠道" />
              <span>{{ item.label }}</span>
            </div>
          </div>
        </div>
        <div class="homePage_screen_main_item">
          <div class="screenItem_title">基础：</div>
          <div class="screenItem_content">
            <div
              class="screenItem_content4_option"
              v-for="(item, index) in baseList"
              :key="index"
            >
              <el-select v-model="item.value" :placeholder="item.label">
                <el-option
                  v-for="item in item.list"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </div>
          </div>
        </div>
        <div class="homePage_screen_main_item">
          <div class="screenItem_title">高级：</div>
          <div class="screenItem_content">
            <div
              class="screenItem_content5_option"
              v-for="(item, index) in seniorList"
              :key="index"
            >
              <el-select v-model="item.value" :placeholder="item.label">
                <el-option
                  v-for="item in item.list"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </div>
          </div>
        </div>
        <div class="homePage_screen_main_item">
          <div class="screenItem_title">时间：</div>
          <div class="screenItem_content">
            <div
              class="screenItem_content6_option"
              v-for="(item, index) in timeList"
              :key="index"
            >
              <span v-if="item.value !== 5">{{ item.label }}</span>
              <el-date-picker
                class="screenItem_content6_option_date"
                v-else
                v-model="value1"
                type="daterange"
                range-separator="~"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
              >
              </el-date-picker>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="homePage_main"></div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      chooseTab: 2,
      input3: "",
      value1: "",
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
      tabList: [
        {
          value: 1,
          label: "全部分类",
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
      typeList: [
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
      selectedList: [
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
      channelList: [
        {
          value: 1,
          label: "智能广告",
          img: "https://bpic.51yuansu.com/pic3/cover/03/67/79/65be2e88aa2ba_800.jpg?x-oss-process=image/sharpen,100",
        },
        {
          value: 2,
          label: "智能广告",
          img: "https://bpic.51yuansu.com/pic3/cover/03/67/79/65be2e88aa2ba_800.jpg?x-oss-process=image/sharpen,100",
        },
        {
          value: 3,
          label: "智能广告",
          img: "https://bpic.51yuansu.com/pic3/cover/03/67/79/65be2e88aa2ba_800.jpg?x-oss-process=image/sharpen,100",
        },
        {
          value: 4,
          label: "智能广告",
          img: "https://bpic.51yuansu.com/pic3/cover/03/67/79/65be2e88aa2ba_800.jpg?x-oss-process=image/sharpen,100",
        },
        {
          value: 5,
          label: "智能广告",
          img: "https://bpic.51yuansu.com/pic3/cover/03/67/79/65be2e88aa2ba_800.jpg?x-oss-process=image/sharpen,100",
        },
      ],
      baseList: [
        {
          label: "国家/地区",
          value: null,
          list: [
            {
              value: 1,
              label: "中国",
            },
            {
              value: 2,
              label: "美国",
            },
            {
              value: 3,
              label: "英国",
            },
          ],
        },
        {
          label: "语言",
          value: null,
          list: [
            {
              value: 1,
              label: "汉语",
            },
            {
              value: 2,
              label: "英语",
            },
            {
              value: 3,
              label: "西班牙语",
            },
          ],
        },
      ],
      seniorList: [
        {
          label: "国家/地区1",
          value: null,
          list: [
            {
              value: 1,
              label: "中国",
            },
            {
              value: 2,
              label: "美国",
            },
            {
              value: 3,
              label: "英国",
            },
          ],
        },
        {
          label: "语言",
          value: null,
          list: [
            {
              value: 1,
              label: "汉语",
            },
            {
              value: 2,
              label: "英语",
            },
            {
              value: 3,
              label: "西班牙语",
            },
          ],
        },
      ],
      timeList: [
        {
          value: 1,
          label: "最近7天",
        },
        {
          value: 2,
          label: "最近30天",
        },
        {
          value: 3,
          label: "最近90天",
        },
        {
          value: 4,
          label: "最近180天",
        },
        {
          value: 5,
          label: "自定义",
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
.screenItem_content ::v-deep .el-button {
  height: 28px;
  border-radius: 4px 4px 4px 4px;
  line-height: 0;
  border: 1px solid #6956e5;
}
.screenItem_content ::v-deep .el-button:nth-of-type(1) {
  color: #6956e5;
}
.screenItem_content4_option ::v-deep .el-select {
  margin-right: 20px;
}
.screenItem_content5_option ::v-deep .el-select {
  margin-right: 20px;
}
.screenItem_content4_option ::v-deep .el-input__inner {
  width: 136px;
  height: 28px;
  border-radius: 4px 4px 4px 4px;
  border: 1px solid #d9d9d9;
}
.screenItem_content5_option ::v-deep .el-input__inner {
  width: 136px;
  height: 28px;
  border-radius: 4px 4px 4px 4px;
  border: 1px solid #d9d9d9;
}
.screenItem_content4_option ::v-deep .el-input__icon {
  line-height: 0;
}
.screenItem_content5_option ::v-deep .el-input__icon {
  line-height: 0;
}
.screenItem_content6_option ::v-deep .el-date-editor .el-range__icon {
  line-height: 0;
}
.screenItem_content6_option ::v-deep .el-date-editor .el-range-separator {
  line-height: 1;
}
.screenItem_content6_option ::v-deep .el-date-editor .el-range__close-icon {
  line-height: 1;
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
  &_screen {
    margin: 39px 24px 40px;
    background: white;
    box-shadow: 0px 10 20px 0px rgba(0, 0, 0, 0.08);
    border-radius: 10px 10px 10px 10px;
    &_top {
      display: flex;
      align-items: center;
      padding: 18px 28px;
      border-bottom: 2px solid rgba(112, 124, 151, 0.1);
      &_item {
        padding: 6px 16px 8px;
        background: #f5f5f6;
        font-family: PingFang SC, PingFang SC;
        font-weight: 400;
        font-size: 16px;
        color: #565656;
        line-height: 22px;
        text-align: left;
        font-style: normal;
        text-transform: none;
        margin-right: 24px;
        border-radius: 4px;
        cursor: pointer;
        &-active {
          background: #6956e5;
          color: #ffffff;
        }
      }
      &_item:last-child {
        margin-right: 0;
      }
    }
    &_main {
      padding: 24px 28px;
      &_item {
        display: flex;
        align-items: center;
        margin-bottom: 24px;
        .screenItem {
          &_title {
            height: 20px;
            font-family: PingFang SC, PingFang SC;
            font-weight: 400;
            font-size: 14px;
            color: #565656;
            line-height: 16px;
            text-align: left;
            font-style: normal;
            text-transform: none;
            margin-right: 12px;
          }
          &_content {
            display: flex;
            align-items: center;
          }
          &_content1 {
            &_option {
              cursor: pointer;
              display: flex;
              align-items: center;
              margin-right: 20px;
              background: #f4f4f5;
              padding: 4px 12px;
              height: 28px;
              border-radius: 4px 4px 4px 4px;
              span {
                font-family: PingFang SC, PingFang SC;
                font-weight: 400;
                font-size: 14px;
                color: #6956e5;
                line-height: 28px;
                text-align: left;
                font-style: normal;
                text-transform: none;
              }
              .el-icon-close {
                margin-left: 14px;
                font-size: 16px;
                color: #999999;
              }
            }
            &_option:last-child {
              margin-right: 0;
            }
          }
          &_content2 {
            &_option {
              cursor: pointer;
              display: flex;
              align-items: center;
              margin-right: 24px;
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
            }
            &_option:last-child {
              margin-right: 0;
            }
          }
          &_content3 {
            &_option {
              cursor: pointer;
              display: flex;
              align-items: center;
              margin-right: 22px;
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
                margin-left: 3px;
              }
              img {
                width: 14px;
                height: 14px;
              }
            }
            &_option:last-child {
              margin-right: 0;
            }
          }
          &_content6 {
            &_option {
              cursor: pointer;
              display: flex;
              align-items: center;
              margin-right: 24px;
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
              &_date {
                width: 230px;
                height: 28px;
              }
            }
            &_option:last-child {
              margin-right: 0;
            }
          }
        }
      }
      &_item:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>