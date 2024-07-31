<template>
  <div class="homePage">
    <div class="homePage_search">
      <div class="homePage_search_input">
        <div style="margin-top: 15px">
          <el-input
            placeholder="请输入搜索内容"
            v-model="query.keyword"
            clearable
            @keyup.enter.native="search"
          >
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
            <el-button slot="append" icon="el-icon-search" @click="search"
              >搜索</el-button
            >
          </el-input>
        </div>
      </div>
      <!-- <div class="homePage_search_keyWords">
        <div class="homePage_search_keyWords_title">热门搜索：</div>
        <div
          class="homePage_search_keyWords_item"
          v-for="(item, index) in keyWordsList"
          :key="index"
        >
          {{ item.label }}
        </div>
      </div> -->
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
          @click="tabChange(item)"
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
            <!-- <el-button type="primary">保存</el-button> -->
          </div>
        </div>
        <!-- <div class="homePage_screen_main_item">
          <div class="screenItem_title">分类：</div>
          <div class="screenItem_content">
            <div
              class="screenItem_content2_option"
              :class="{
                'screenItem_content2_option-active': item.value === chooseTab,
              }"
              v-for="(item, index) in selectedList"
              :key="index"
            >
              <span>{{ item.label }}</span>
            </div>
          </div>
        </div> -->
        <div class="homePage_screen_main_item">
          <div class="screenItem_title">渠道：</div>
          <div class="screenItem_content">
            <div
              class="screenItem_content3_option"
              :class="{
                'screenItem_content3_option-active': item.value === chooseTab,
              }"
              v-for="(item, index) in filterList.source"
              :key="index"
            >
              <img :src="item.icon" />
              <span>{{ item.name }}</span>
            </div>
          </div>
        </div>
        <div class="homePage_screen_main_item">
          <div class="screenItem_title">基础：</div>
          <div class="screenItem_content">
            <div
              class="screenItem_content4_option"
              v-for="(item, index) in filterList.baseList"
              :key="index"
            >
              <el-select v-model="item.value" :placeholder="item.label">
                <el-option
                  v-for="(subItem, subIndex) in item.list"
                  :key="subIndex"
                  :label="item"
                  :value="item"
                >
                </el-option>
              </el-select>
            </div>
          </div>
        </div>
        <!-- <div class="homePage_screen_main_item">
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
        </div> -->
        <!-- <div class="homePage_screen_main_item">
          <div class="screenItem_title">时间：</div>
          <div class="screenItem_content">
            <div
              class="screenItem_content6_option"
              :class="{
                'screenItem_content6_option-active': item.value === chooseTab,
              }"
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
        </div> -->
      </div>
    </div>
    <div class="homePage_main">
      <div
        class="homePage_main_item"
        v-for="(item, index) in list"
        :key="index"
        @click="toDetail(item)"
      >
        <div class="listItem_top">
          <div class="listItem_top_left">
            <div class="listItem_top_left_img">
              <img
                src="https://bpic.51yuansu.com/pic3/cover/03/67/79/65be2e88aa2ba_800.jpg?x-oss-process=image/sharpen,100"
              />
            </div>
            <div class="listItem_top_left_main">
              <div class="itemTopText_top">{{ item.ad_caption }}</div>
              <div class="itemTopText_main">
                <img
                  v-for="(subItem, subIndex) in item.region"
                  :key="subIndex"
                  src="https://bpic.51yuansu.com/pic3/cover/03/67/79/65be2e88aa2ba_800.jpg?x-oss-process=image/sharpen,100"
                />
              </div>
            </div>
          </div>
          <div class="listItem_top_right">
            <i class="el-icon-more"></i>
          </div>
        </div>
        <div class="listItem_main">
          <div class="listItem_main_content">
            <img src="../assets/img/login_bg.png" />
          </div>
          <div class="listItem_main_footer">
            <div class="listItem_main_footer_title">
              {{ item.ad_caption }}
            </div>
            <div class="listItem_main_footer_attribute">
              <div class="listItem_main_footer_attribute_left">
                {{ item.objective }}
              </div>
              <div class="listItem_main_footer_attribute_right">2024-07-04</div>
            </div>
          </div>
        </div>
        <div class="listItem_foot">
          <div class="listItem_foot_item">
            <div class="listItem_foot_item_num">{{ item.likes }}</div>
            <div class="listItem_foot_item_num">点赞</div>
          </div>
          <el-divider direction="vertical"></el-divider>
          <div class="listItem_foot_item">
            <div class="listItem_foot_item_num">{{ item.comments }}</div>
            <div class="listItem_foot_item_num">评论</div>
          </div>
          <el-divider direction="vertical"></el-divider>
          <div class="listItem_foot_item">
            <div class="listItem_foot_item_num">{{ item.shares }}</div>
            <div class="listItem_foot_item_num">分享</div>
          </div>
          <el-divider direction="vertical"></el-divider>
          <div class="listItem_foot_item">
            <div class="listItem_foot_item_num">{{ item.likes }}</div>
            <div class="listItem_foot_item_num">展示估值</div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="homePage_footer">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="prev, pager, next, sizes, total, jumper"
        :total="400"
      >
      </el-pagination>
    </div> -->
  </div>
</template>

<script>
import { getList, getFilterItems } from "../api/material";

export default {
  name: "HomePage",
  data() {
    return {
      baseField: ["objective", "region", "language"],
      list: [],
      total: 0,
      filterOptions: {
        shortVideoItems: {
          // language: [],
          // objective: [],
          // region: [],
          // source: [],
        },
      },
      query: {
        action: 1,
        page: 1,
        page_size: 20,
        keyword: "",
      },
      filterList: {},
      currentPage4: 4,
      chooseTab: 2,
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
          label: "游戏素材",
        },
        {
          value: 3,
          label: "应用素材",
        },
        {
          value: "shortVideoItems",
          label: "短剧",
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
  watch: {
    chooseTab: {
      handler() {
        this.filterList = this.filterOptions?.[this.chooseTab];
        console.log(this.filterList, "this.filterList");
      },
      // immediate: true,
    },
  },
  created() {
    this.$nextTick(() => {
      this.init();
    });
  },
  methods: {
    tabChange(item) {
      this.chooseTab = item.value;
    },
    getFilterItemsFn() {
      let data = {
        lang: "zh",
      };
      getFilterItems(data)
        .then((res) => {
          console.log(res, 777);
          debugger;
          if (res.data) {
            if (res.data.short_video_items) {
              let shortVideoItemsObj = {};
              console.log(res.data.short_video_items, "short_video_items");
              let baseList = [];
              for (let key in res.data.short_video_items) {
                if (this.baseField.includes(key)) {
                  let obj = {};
                  obj.label = res.data.short_video_items;
                  obj.list = res.data.short_video_items[key];
                  baseList.push(obj);
                } else {
                  shortVideoItemsObj[key] = res.data.short_video_items[key];
                }
                // if (res.data.short_video_items.hasOwnProperty(key)) {
                //   console.log(key, res.data.short_video_items[key], 79789);
                // }
              }
              shortVideoItemsObj.baseList = baseList;
              this.filterOptions.shortVideoItems = shortVideoItemsObj;
              console.log(this.filterOptions, 9999);
            }
            // this.filterOptions = res.data;
            this.chooseTab = "shortVideoItems";
          }
        })
        .catch(() => {});
    },
    search() {
      getList(this.query)
        .then((res) => {
          this.list = res.data.material_list;
          this.total = res.data.total_pages;
        })
        .catch(() => {});
    },
    handleSizeChange(val) {
      //
    },
    handleCurrentChange(val) {
      //
    },
    toDetail(item) {
      this.$router.push({
        path: "/detail",
        query: {
          id: item.id,
        },
      });
    },
    init() {
      this.getFilterItemsFn();
    },
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
  width: 100%;
  height: 100%;
  background: #f4f4f5;
  margin-top: 8px;
  &_search {
    padding-top: 32px;
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
    box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.08);
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
              color: #999999;
              margin-right: 24px;
              span {
                height: 20px;
                font-family: PingFang SC, PingFang SC;
                font-weight: 400;
                font-size: 14px;
                line-height: 16px;
                text-align: left;
                font-style: normal;
                text-transform: none;
              }
              &-active {
                color: #6956e5;
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
              color: #999999;
              span {
                height: 20px;
                font-family: PingFang SC, PingFang SC;
                font-weight: 400;
                font-size: 14px;
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
              &-active {
                color: #6956e5;
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
              color: #999999;
              span {
                height: 20px;
                font-family: PingFang SC, PingFang SC;
                font-weight: 400;
                font-size: 14px;
                line-height: 16px;
                text-align: left;
                font-style: normal;
                text-transform: none;
              }
              &_date {
                width: 230px;
                height: 28px;
              }
              &-active {
                color: #6956e5;
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
  &_main {
    margin: 40px 24px;
    margin-bottom: 16px;
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    &_item {
      flex-shrink: 0;
      // width: 330px;
      width: 312px;
      margin-bottom: 24px;
      background: #ffffff;
      box-shadow: 0px 20px 60px 0px rgba(46, 33, 61, 0.08);
      border-radius: 10px 10px 10px 10px;
      overflow: hidden;
      cursor: pointer;
      .listItem {
        &_top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px;
          padding-top: 23px;
          &_left {
            display: flex;
            &_img {
              width: 40px;
              height: 40px;
              border-radius: 50%;
              overflow: hidden;
              img {
                width: 40px;
                height: 40px;
              }
            }
            &_main {
              margin-left: 12px;
              .itemTopText {
                &_top {
                  height: 18px;
                  font-family: PingFang SC, PingFang SC;
                  font-weight: 500;
                  font-size: 12px;
                  color: #333333;
                  line-height: 14px;
                  text-align: left;
                  font-style: normal;
                  text-transform: none;
                }
                &_main {
                  display: flex;
                  align-items: center;
                  img {
                    width: 18px;
                    height: 18px;
                  }
                  img:not(:last-child) {
                    margin-right: 4px;
                  }
                }
              }
            }
          }
          &_right {
            .el-icon-more {
              color: #999999;
              font-size: 24px;
            }
          }
        }
        &_main {
          &_content {
            width: 100%;
            height: 220px;
            background: rgba(0, 0, 0, 0.5);
            border-radius: 0px 0px 0px 0px;
            filter: blur(3px);
            img {
              width: 100%;
              height: 220px;
            }
          }
          &_footer {
            padding: 20px;
            &_title {
              height: 22px;
              font-family: PingFang SC, PingFang SC;
              font-weight: 600;
              font-size: 16px;
              color: #333333;
              line-height: 19px;
              text-align: left;
              font-style: normal;
              text-transform: none;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
            &_attribute {
              margin-top: 14px;
              display: flex;
              justify-content: space-between;
              align-items: center;
              &_left {
                height: 17px;
                font-family: PingFang SC, PingFang SC;
                font-weight: 400;
                font-size: 12px;
                color: #666666;
                line-height: 14px;
                text-align: left;
                font-style: normal;
                text-transform: none;
              }
              &_right {
                height: 17px;
                font-family: PingFang SC, PingFang SC;
                font-weight: 400;
                font-size: 12px;
                color: #999999;
                line-height: 14px;
                text-align: left;
                font-style: normal;
                text-transform: none;
              }
            }
          }
        }
        &_foot {
          padding: 20px;
          padding-top: 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          &_item {
            &_num {
              height: 17px;
              font-family: PingFang SC, PingFang SC;
              font-weight: 400;
              font-size: 12px;
              color: #666666;
              line-height: 14px;
              text-align: left;
              font-style: normal;
              text-transform: none;
              margin-bottom: 4px;
              text-align: center;
            }
            &_num:last-child {
              margin-bottom: 0;
            }
          }
          .el-divider--vertical {
            height: 32px;
          }
          .el-divider {
            background: rgba(112, 124, 151, 0.15);
          }
        }
      }
    }
  }
  &_footer {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 64px;
  }
}
</style>