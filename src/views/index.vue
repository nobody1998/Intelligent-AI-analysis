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
      <div
        class="homePage_screen_main"
        v-if="JSON.stringify(filterList) !== '{}'"
      >
        <div class="homePage_screen_main_item" v-show="selectedList.length">
          <div class="screenItem_title">已选：</div>
          <div class="screenItem_content">
            <div
              class="screenItem_content1_option"
              v-for="(item, index) in selectedList"
              :key="index"
            >
              <span>{{ item.label }}</span>
              <i class="el-icon-close" @click="delSelect(item, index)"></i>
            </div>
            <el-button @click="clearChoose">清除</el-button>
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
            <!-- <el-checkbox-group
              :max="filterList.source.isMultiple ? undefined : 1"
              v-model="filterList.source.value"
            >
              <el-checkbox
                v-for="(item, index) in filterList.source.list"
                :key="index"
                :label="item.name"
              >
                <div class="screenItem_content3_option">
                  <img v-show="item.icon" :src="item.icon" />
                  <span>{{ item.name }}</span>
                </div>
              </el-checkbox>
            </el-checkbox-group> -->
            <div
              class="screenItem_content3_option"
              v-for="(item, index) in filterList.source.list"
              :key="index"
              :class="{
                'screenItem_content3_option-active':
                  filterList.source.value.includes(item.name),
              }"
              @click="textChoose('source', item, 'name')"
            >
              <img v-show="item.icon" :src="item.icon" />
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
              <el-select
                v-model="item.value"
                :placeholder="item.label"
                :multiple="item.isMultiple"
                collapse-tags
                clearable
                @change="selectChoose($event, item)"
              >
                <el-option
                  v-for="(subItem, subIndex) in item.list"
                  :key="subIndex"
                  :label="subItem"
                  :value="subItem"
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
              <!-- <div class="itemTopText_main">
                <img
                  v-for="(subItem, subIndex) in item.region"
                  :key="subIndex"
                  src="https://bpic.51yuansu.com/pic3/cover/03/67/79/65be2e88aa2ba_800.jpg?x-oss-process=image/sharpen,100"
                />
              </div> -->
            </div>
          </div>
          <div class="listItem_top_right">
            <i class="el-icon-more"></i>
          </div>
        </div>
        <div class="listItem_main">
          <div class="listItem_main_content">
            <!-- <img src="../assets/img/login_bg.png" /> -->
            <video controls width="312" height="220">
              <source :src="item.video_download_url" type="video/mp4" />
            </video>
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
      baseFieldIsMultiple: ["region", "language"],
      fieldChinese: {
        objective: "目标",
        region: "国家/地区",
        language: "语言",
        source: "渠道",
      },
      baseField: ["objective", "region", "language"],
      list: [],
      total: 0,
      filterOptions: {
        shortVideoItems: {},
      },
      query: {
        action: 1,
        page: 1,
        // size: 20,
        keyword: "",
        source: [],
        country: [],
      },
      filterList: {},
      currentPage4: 4,
      chooseTab: null,
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
          value: 4,
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
      selectedList: [],
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
        if (this.chooseTab === 1 || this.chooseTab === 4) {
          this.filterList = this.filterOptions.shortVideoItems
            ? this.filterOptions.shortVideoItems
            : {};
        } else {
          this.filterList = {};
        }
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
    delSelect(item, index) {
      this.selectedList.splice(index, 1);
      if (item.id !== "baseList") {
        if (this.filterList[item.id].isMultiple) {
          this.filterList[item.id].value.splice(
            this.filterList[item.id].value.indexOf(item.label),
            1
          );
        } else {
          this.filterList[item.id].value = undefined;
        }
      } else {
        this.filterList.baseList.forEach((baseItem) => {
          if (baseItem.key === item.subId) {
            if (baseItem.isMultiple) {
              baseItem.value.splice(baseItem.value.indexOf(item.label), 1);
            } else {
              baseItem.value = undefined;
            }
          }
        });
      }
    },
    clearChoose() {
      this.$nextTick(() => {
        this.selectedList = [];
        for (let key in this.filterList) {
          if (key !== "baseList") {
            this.filterList[key].value = this.filterList[key].isMultiple
              ? []
              : undefined;
          } else {
            this.filterList[key].forEach((item) => {
              item.value = undefined;
            });
          }
        }
      });
    },
    selectChoose(val, item) {
      let newVal = JSON.parse(JSON.stringify(val));
      // 目前只做含在baseList里面的
      if (item.isMultiple) {
        const filterList = this.selectedList.filter(
          (selectedItem) => selectedItem.subId === item.key
        );
        filterList.map((filterItem) => {
          const index = newVal.indexOf(filterItem.label);
          if (index === -1) {
            this.selectedList.splice(
              this.selectedList.findIndex(
                (selectedItem) => selectedItem.label === filterItem.label
              ),
              1
            );
          } else {
            newVal.splice(index, 1);
          }
        });
        if (newVal.length === 0) {
          return;
        }
        newVal.map((newValItem) => {
          this.selectedList.push({
            id: "baseList",
            subId: item.key,
            label: newValItem,
          });
        });
      } else {
        const index = this.selectedList.findIndex(
          (selectedItem) => selectedItem.subId === item.key
        );
        if (index > -1) {
          this.selectedList.splice(index, 1);
        }
        if (!newVal) {
          return;
        }
        this.selectedList.push({
          id: "baseList",
          subId: item.key,
          label: newVal,
        });
      }
    },
    textChoose(type, item, valueField = "value") {
      if (this.chooseTab === 1 || this.chooseTab === 4) {
        if (this.baseField.includes(type)) {
        } else {
          if (this.filterList[type].isMultiple) {
            if (this.filterList[type].value.indexOf(item[valueField]) > -1) {
              this.filterList[type].value.splice(
                this.filterList[type].value.indexOf(item[valueField]),
                1
              );
              this.selectedListDeal(2, type, item[valueField]);
            } else {
              this.filterList[type].value.push(item[valueField]);
              this.selectedListDeal(1, type, item[valueField]);
            }
          } else {
            this.selectedListDeal(2, type, this.filterList[type].value);
            this.filterList[type].value = item[valueField];
            this.selectedListDeal(1, type, item[valueField]);
          }
        }
      } else {
        //
      }
    },
    selectedListDeal(operationType, type, value) {
      // operationType: 1 添加 2 删除
      if (operationType === 1) {
        this.selectedList.push({
          id: this.baseField.includes(type) ? "baseList" : type,
          subId: this.baseField.includes(type) ? type : "",
          label: value,
        });
      } else if (operationType === 2) {
        this.selectedList.splice(
          this.selectedList.findIndex((item) => item.label === value),
          1
        );
      }
    },
    tabChange(item) {
      this.chooseTab = item.value;
    },
    getFilterItemsFn() {
      let data = {
        lang: this.$i18n.locale,
      };
      getFilterItems(data)
        .then((res) => {
          if (res.data) {
            if (res.data.short_video_items) {
              let shortVideoItemsObj = {};
              let baseList = [];
              for (let key in res.data.short_video_items) {
                let obj = {};
                obj.key = key;
                obj.label = this.fieldChinese[key];
                obj.list = res.data.short_video_items[key];
                if (this.baseField.includes(key)) {
                  obj.value = undefined;
                  if (this.baseFieldIsMultiple.includes(key)) {
                    obj.isMultiple = true;
                  } else {
                    obj.isMultiple = false;
                  }
                  baseList.push(obj);
                } else {
                  obj.value = [];
                  obj.isMultiple = true;
                  shortVideoItemsObj[key] = obj;
                }
              }
              shortVideoItemsObj.baseList = baseList;
              this.filterOptions.shortVideoItems = JSON.parse(
                JSON.stringify(shortVideoItemsObj)
              );
            }
            this.chooseTab = 1;
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
      this.search();
    },
  },
};
</script>

<style lang="scss" scoped>
video::-internal-media-controls-download-button {  
  display:none;  
}  

video::-webkit-media-controls-enclosure {  
  overflow:hidden;  
  width: 0px;  
  height: 0px;  
}  

video::-webkit-media-controls {  
  display:none !important;  
}
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
  width: 80px;
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
  width: 163px;
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
.screenItem_content ::v-deep .el-checkbox__input {
  display: none;
}
.screenItem_content ::v-deep .el-checkbox {
  margin-right: 20px;
}
.screenItem_content ::v-deep .el-checkbox__label {
  padding-left: 0;
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
                  width: 200px;
                  white-space: nowrap;
                  overflow: hidden;
                  text-overflow: ellipsis;
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
            // background: rgba(0, 0, 0, 0.5);
            border-radius: 0px 0px 0px 0px;
            // filter: blur(3px);
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