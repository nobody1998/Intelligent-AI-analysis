<template>
  <div class="pageDetail">
    <div class="pageDetail_main">
      <div class="pageDetail_main_left">
        <!-- <img src="../assets/img/login_bg.png" /> -->
        <!-- <video controls width="420" height="560">
          <source src="https://ai-data.tos-cn-guangzhou.volces.com/tiktok/01addb3c-36b1-4bbb-9308-e4c26b6c7458.mp4" type="video/mp4" />
        </video> -->
        <video controls width="100%" height="560">
          <source
            v-if="form.video_download_url"
            :src="form.video_download_url"
            type="video/mp4"
          />
        </video>
      </div>
      <div class="pageDetail_main_right">
        <!-- <div class="pageDetail_main_right_title">
          {{ form.ad_caption }}
        </div>
        <div class="pageDetail_main_right_subTitle">
          {{ form.ad_caption }}
        </div>
        <el-divider></el-divider>
        <div class="detailAttribute">
          <div class="detailAttribute_item">
            <div class="detailAttribute_item_title">投放平台：</div>
            <div class="detailAttribute_item_content">
              {{ form.source }}
            </div>
          </div>
          <div
            class="detailAttribute_item"
          >
            <div class="detailAttribute_item_title">类别</div>
            <div class="detailAttribute_item_content">
              <span>{{ form.product_class }}</span>
            </div>
          </div>
          <div class="detailAttribute_foot">
            <el-button type="primary" @click="downloadFn">下载素材</el-button>
          </div>
        </div> -->
        <div class="pageDetail_main_right_title">基本信息</div>
        <div class="pageDetail_main_right_content">
          <div class="content_left">
            <div class="content_left_item">
              <div class="content_left_item_title">广告标题</div>
              <div
                class="content_left_item_content"
                style="padding-right: 27px"
              >
                {{ form.ad_caption }}
              </div>
            </div>
            <div class="content_left_item">
              <div class="content_left_item_title">投放国家/地区</div>
              <div
                v-if="form.region && form.region.length"
                class="content_left_item_content moreBox"
                style="padding-right: 95px; display: flex"
              >
                <span class="moreBox_content">{{
                  regionTranslate(form.region)
                }}</span>
                <span
                  class="moreBox_text"
                  v-show="!regionShowMore"
                  @click="regionShowMore = true"
                  >更多</span
                >
                <span
                  class="moreBox_text"
                  v-show="regionShowMore"
                  @click="regionShowMore = false"
                  >收起</span
                >
              </div>
              <div class="moreBox_showBox" v-if="regionShowMore">
                <span>{{ regionTranslate(form.region) }}</span>
              </div>
            </div>
            <div class="content_left_item">
              <div class="content_left_item_title">落地页</div>
              <div
                class="content_left_item_content link"
                style="display: flex"
                @click="openlandingPage"
              >
                <span class="link_text">{{ form.landing_page }}</span>
                <img class="link_img" src="../assets/img/u_link-alt.png" />
              </div>
            </div>
          </div>
          <div class="content_right">
            <div class="content_right_item">
              <div class="content_right_item_title">渠道媒体</div>
              <div
                class="content_right_item_content"
                style="display: flex; align-items: center"
              >
                <img src="../assets/img/Tiktok.png" />
                <span>{{ form.source }}</span>
              </div>
            </div>
            <div class="content_right_item">
              <div class="content_right_item_title">投放目标</div>
              <div class="content_right_item_content">
                {{ objectiveTranslate(form.objective) }}
              </div>
            </div>
            <div class="content_right_item">
              <div class="content_right_item_title">广告主名称</div>
              <div class="content_right_item_content">
                {{ form.brand_name }}
              </div>
            </div>
          </div>
        </div>
        <div class="pageDetail_main_right_title">广告投放效果</div>
        <div
          class="pageDetail_main_right_content"
          style="
            justify-content: space-between;
            padding-left: 48px;
            padding-right: 48px;
          "
        >
          <div class="contentItem">
            <div class="contentItem_num">{{ form.likes }}</div>
            <div class="contentItem_title">点赞数</div>
          </div>
          <el-divider direction="vertical"></el-divider>
          <div class="contentItem">
            <div class="contentItem_num">{{ form.comments }}</div>
            <div class="contentItem_title">评论数</div>
          </div>
          <el-divider direction="vertical"></el-divider>
          <div class="contentItem">
            <div class="contentItem_num">{{ form.shares }}</div>
            <div class="contentItem_title">转发数</div>
          </div>
          <el-divider direction="vertical"></el-divider>
          <div class="contentItem">
            <div class="contentItem_num">{{ form.CTR }}</div>
            <div class="contentItem_title">CTR</div>
          </div>
        </div>
        <div class="detailAttribute_foot">
          <el-button type="primary" @click="downloadFn">下载素材</el-button>
        </div>
      </div>
    </div>
    <div class="pageDetail_foot">
      <div class="pageDetail_foot_title">更多相似内容推荐</div>
      <div class="pageDetail_foot_content">
        <div
          class="homePage_main_list_item"
          v-for="(item, index) in list"
          :key="index"
          @click="toDetail(item)"
        >
          <div class="listItem_top">
            <div class="listItem_top_left">
              <div class="listItem_top_left_img">
                <img src="../assets/img/list_icon.png" />
              </div>
              <div class="listItem_top_left_main">
                <div class="itemTopText_top">{{ item.brand_name }}</div>
                <div class="itemTopText_main">
                  <img src="../assets/img/Tiktok.png" />
                  <!-- <img
                    v-for="(subItem, subIndex) in item.source.split(',')"
                    :key="subIndex"
                    :src="subItem || sourceImg"
                  /> -->
                </div>
              </div>
            </div>
            <div class="listItem_top_right">
              <i class="el-icon-more"></i>
            </div>
          </div>
          <div class="listItem_main">
            <div class="listItem_main_content">
              <!-- <img src="../assets/img/login_bg.png" /> -->
              <video controls width="100%" height="220">
                <source :src="item.video_download_url" type="video/mp4" />
              </video>
            </div>
            <div class="listItem_main_footer">
              <div class="listItem_main_footer_title">
                {{ item.ad_caption }}
              </div>
              <!-- <div class="listItem_main_footer_attribute">
                <div class="listItem_main_footer_attribute_left">
                  {{ item.objective }}
                </div>
                <div class="listItem_main_footer_attribute_right">
                  2024-07-04
                </div>
              </div> -->
            </div>
          </div>
          <div class="listItem_foot">
            <div class="listItem_foot_item">
              <div class="listItem_foot_item_num">{{ item.likes }}</div>
              <div class="listItem_foot_item_text">点赞数</div>
            </div>
            <el-divider direction="vertical"></el-divider>
            <div class="listItem_foot_item">
              <div class="listItem_foot_item_num">{{ item.comments }}</div>
              <div class="listItem_foot_item_text">评论数</div>
            </div>
            <el-divider direction="vertical"></el-divider>
            <div class="listItem_foot_item">
              <div class="listItem_foot_item_num">{{ item.shares }}</div>
              <div class="listItem_foot_item_text">转发数</div>
            </div>
            <!-- <el-divider direction="vertical"></el-divider>
            <div class="listItem_foot_item">
              <div class="listItem_foot_item_num">{{ item.likes }}</div>
              <div class="listItem_foot_item_text">展示估值</div>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getDetail, getList } from "../api/material";
import { COUNTRY, OBJECTIVES } from "../../src/const/index";
import functions from "../../src/functions/index";

export default {
  name: "PageDetail",
  data() {
    return {
      regionShowMore: false,
      list: [],
      form: {},
    };
  },
  watch: {
    $route(to, from) {
      this.init();
    },
  },
  created() {
    this.$nextTick(() => {
      this.init();
    });
  },
  methods: {
    openlandingPage() {
      window.open(this.form.landing_page);
    },
    objectiveTranslate(val) {
      if (val) {
        return functions.mappingFn(OBJECTIVES, val);
      } else {
        return "";
      }
    },
    regionTranslate(val) {
      if (val && val.length) {
        return val
          .map((item) => {
            return functions.mappingFn(COUNTRY, item);
          })
          .join(",");
      } else {
        return "";
      }
    },
    init() {
      if (this.$route.query.id) {
        this.getDetailFn(this.$route.query.id);
        this.getListFn();
      }
    },
    toDetail(item) {
      window.scrollTo(0, 0);
      if (this.$route.query.id !== item.id) {
        this.$router.push({
          path: "/detail",
          query: {
            id: item.id,
          },
        });
      }
    },
    downloadFn() {
      window.open(this.form.video_download_url);
    },
    getListFn() {
      let data = {
        action: 1,
        page: 1,
        size: 20,
        keyword: "",
      };
      getList(data).then((res) => {
        this.$nextTick(() => {
          this.list = res.data.material_list.splice(0, 4);
        });
      });
    },
    getDetailFn(id) {
      let data = {
        object_id: id,
      };
      getDetail(data).then((res) => {
        this.$nextTick(() => {
          this.form = res.data;
        });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
// a:link {
//   color: #6956e5; /* 未访问链接的颜色 */
// }
// a {
//   display: -webkit-box;
//   -webkit-box-orient: vertical;
//   -webkit-line-clamp: 1;
//   overflow: hidden;
//   text-overflow: ellipsis;
//   white-space: normal;
//   word-break: break-all;
// }

.pageDetail_foot ::v-deep video::-internal-media-controls-download-button {
  display: none;
}

.pageDetail_foot ::v-deep video::-webkit-media-controls-enclosure {
  overflow: hidden;
  width: 0px;
  height: 0px;
}

.pageDetail_foot ::v-deep video::-webkit-media-controls {
  display: none !important;
}

.detailAttribute_foot ::v-deep .el-button {
  width: 188px;
  height: 44px;
  font-family: PingFang SC, PingFang SC;
  font-weight: 400;
  font-size: 14px;
  font-style: normal;
  text-transform: none;
  line-height: 0;
}
.detailAttribute_foot ::v-deep .el-button + .el-button {
  margin-left: 20px;
}

.pageDetail {
  width: 100%;
  height: 100%;
  background: #f5f7fb;
  .moreBox {
    position: relative;
    &_content {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: normal;
      word-break: break-all;
    }
    &_text {
      color: #6956e5;
      flex-shrink: 0;
      cursor: pointer;
    }
    &_showBox {
      position: absolute;
      top: 38px;
      padding: 12px 16px;
      width: 216px;
      background: #ffffff;
      box-shadow: 0px 0 40px 0px rgba(0, 0, 0, 0.1);
      border-radius: 8px 8px 8px 8px;
      z-index: 1;
      span {
        font-family: PingFang SC, PingFang SC;
        font-weight: 400;
        font-size: 12px;
        color: #565656;
        line-height: 20px;
        text-align: left;
        font-style: normal;
        text-transform: none;
      }
    }
  }
  .link {
    cursor: pointer;
    &_text {
      font-family: PingFang SC, PingFang SC;
      font-weight: 500;
      font-size: 14px;
      color: #6956e5;
      line-height: 16px;
      text-align: left;
      font-style: normal;
      text-transform: none;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: normal;
      word-break: break-all;
    }
    &_img {
      width: 18px;
      height: 18px;
      padding-left: 10px;
      flex-shrink: 0;
    }
  }
  &_main {
    margin: 8px 206px 59px 206px;
    padding-top: 60px;
    display: flex;
    &_left {
      width: 360px;
      height: 560px;
      border-radius: 10px;
      overflow: hidden;
      flex-shrink: 0;
      img {
        width: 100%;
        height: 100%;
      }
    }
    &_right {
      width: 100%;
      margin-left: 68px;
      overflow: hidden;
      &_title {
        font-family: PingFang SC, PingFang SC;
        font-weight: bold;
        font-size: 24px;
        color: #333333;
        line-height: 28px;
        text-align: left;
        font-style: normal;
        text-transform: none;
      }
      &_content {
        margin-top: 20px;
        background: #ffffff;
        border-radius: 10px 10px 10px 10px;
        padding: 24px;
        margin-bottom: 24px;
        display: flex;
        .content {
          &_left {
            width: 57%;
            padding-right: 50px;
            flex-shrink: 0;
            &_item {
              min-height: 37px;
              position: relative;
              &_title {
                font-family: PingFang SC, PingFang SC;
                font-weight: 500;
                font-size: 14px;
                color: #999999;
                line-height: 16px;
                text-align: left;
                font-style: normal;
                text-transform: none;
              }
              &_content {
                font-family: PingFang SC, PingFang SC;
                font-weight: 500;
                font-size: 14px;
                color: #565656;
                line-height: 16px;
                text-align: left;
                font-style: normal;
                text-transform: none;
                margin-top: 5px;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 1;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: normal;
                word-break: break-all;
              }
            }
            &_item:not(:last-child) {
              margin-bottom: 24px;
            }
          }
          &_right {
            &_item {
              min-height: 37px;
              position: relative;
              &_title {
                font-family: PingFang SC, PingFang SC;
                font-weight: 500;
                font-size: 14px;
                color: #999999;
                line-height: 16px;
                text-align: left;
                font-style: normal;
                text-transform: none;
              }
              &_content {
                font-family: PingFang SC, PingFang SC;
                font-weight: 500;
                font-size: 14px;
                color: #565656;
                line-height: 16px;
                text-align: left;
                font-style: normal;
                text-transform: none;
                margin-top: 5px;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 1;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: normal;
                word-break: break-all;
              }
            }
            &_item:not(:last-child) {
              margin-bottom: 24px;
            }
          }
        }
        .contentItem {
          &_num {
            font-family: PingFang SC, PingFang SC;
            font-weight: bold;
            font-size: 16px;
            color: #565656;
            line-height: 19px;
            text-align: left;
            font-style: normal;
            text-transform: none;
            height: 22px;
            text-align: center;
          }
          &_title {
            font-family: PingFang SC, PingFang SC;
            font-weight: 400;
            font-size: 14px;
            color: #565656;
            line-height: 16px;
            text-align: center;
            font-style: normal;
            text-transform: none;
            margin-top: 4px;
          }
        }
        .el-divider--vertical {
          height: 32px;
          margin-top: 5px;
        }
        .el-divider {
          background: rgba(112, 124, 151, 0.15);
        }
      }
      // &_title {
      //   height: 34px;
      //   font-family: PingFang SC, PingFang SC;
      //   font-weight: 600;
      //   font-size: 24px;
      //   color: #333333;
      //   line-height: 28px;
      //   text-align: left;
      //   font-style: normal;
      //   text-transform: none;
      //   max-width: 850px;
      //   white-space: nowrap;
      //   overflow: hidden;
      //   text-overflow: ellipsis;
      // }
      // &_subTitle {
      //   height: 25px;
      //   font-family: PingFang SC, PingFang SC;
      //   font-weight: 400;
      //   font-size: 18px;
      //   color: #999999;
      //   line-height: 21px;
      //   text-align: left;
      //   font-style: normal;
      //   text-transform: none;
      //   margin-top: 14px;
      //   max-width: 850px;
      //   white-space: nowrap;
      //   overflow: hidden;
      //   text-overflow: ellipsis;
      // }
      // .el-divider--vertical {
      //   // height: 32px;
      // }
      // .el-divider {
      //   background: rgba(112, 124, 151, 0.1);
      //   margin: 24px 0;
      // }
      // .detailAttribute {
      //   &_item {
      //     display: flex;
      //     margin-bottom: 24px;
      //     &_title {
      //       height: 22px;
      //       font-family: PingFang SC, PingFang SC;
      //       font-weight: 400;
      //       font-size: 16px;
      //       color: #999999;
      //       line-height: 19px;
      //       text-align: left;
      //       font-style: normal;
      //       text-transform: none;
      //     }
      //     &_content {
      //       display: flex;
      //       align-items: center;
      //       gap: 24px;
      //       margin-left: 20px;
      //       &_item {
      //         display: flex;
      //         align-items: center;
      //         img {
      //           width: 18px;
      //           height: 18px;
      //         }
      //         span {
      //           margin-left: 2px;
      //           height: 20px;
      //           font-family: PingFang SC, PingFang SC;
      //           font-weight: 400;
      //           font-size: 14px;
      //           color: #565656;
      //           line-height: 16px;
      //           text-align: left;
      //           font-style: normal;
      //           text-transform: none;
      //         }
      //       }
      //     }
      //   }
      //   &_foot {
      //     margin-top: 8px;
      //   }
      // }
    }
  }
  &_foot {
    padding: 0 22px 54px;
    &_title {
      height: 28px;
      font-family: PingFang SC, PingFang SC;
      font-weight: 600;
      font-size: 20px;
      color: #333333;
      line-height: 23px;
      text-align: left;
      font-style: normal;
      text-transform: none;
    }
    &_content {
      margin-top: 24px;
      // display: flex;
      // flex-wrap: wrap;
      // gap: 24px;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 24px;
      .homePage_main_list_item {
        // flex-shrink: 0;
        // width: 330px;
        // width: 312px;
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
              align-items: center;
              &_img {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                overflow: hidden;
                flex-shrink: 0;
                img {
                  width: 40px;
                  height: 40px;
                }
              }
              &_main {
                margin-left: 12px;
                .itemTopText {
                  &_top {
                    // height: 18px;
                    font-family: PingFang SC, PingFang SC;
                    font-weight: 600;
                    font-size: 12px;
                    color: #333333;
                    line-height: 14px;
                    text-align: left;
                    font-style: normal;
                    // text-transform: none;
                    // width: 200px;
                    // white-space: nowrap;
                    // overflow: hidden;
                    // text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 1; /* 显示的行数 */
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: normal;
                    word-break: break-all;
                  }
                  &_main {
                    display: flex;
                    align-items: center;
                    margin-top: 2px;
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
              position: relative;
              background: url(../assets/img/listItemBg.png) no-repeat;
              background-size: cover;
              img {
                width: 100%;
                height: 220px;
                position: absolute;
              }
            }
            &_footer {
              padding: 20px;
              padding-bottom: 24px;
              &_title {
                font-family: PingFang SC, PingFang SC;
                font-weight: bold;
                font-size: 16px;
                color: #333333;
                line-height: 28px;
                text-align: left;
                font-style: normal;
                text-transform: none;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2; /* 显示的行数 */
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: normal;
                word-break: break-all;
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
            padding: 20px 36px;
            padding-top: 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            &_item {
              font-family: PingFang SC, PingFang SC;
              font-size: 12px;
              color: #666666;
              line-height: 14px;
              text-align: left;
              font-style: normal;
              text-transform: none;
              text-align: center;
              &_num {
                height: 17px;
                font-weight: 600;
                font-size: 14px;
                margin-bottom: 4px;
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
  }
}
</style>