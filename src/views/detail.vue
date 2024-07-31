<template>
  <div class="pageDetail">
    <div class="pageDetail_main">
      <div class="pageDetail_main_left">
        <img src="../assets/img/login_bg.png" />
      </div>
      <div class="pageDetail_main_right">
        <div class="pageDetail_main_right_title">
          旅游vlog白船在水面上白船在水面上漂泊
        </div>
        <div class="pageDetail_main_right_subTitle">
          白船在水面上白船在水面上白船在水面上白船在水面上白船在水面上
        </div>
        <el-divider></el-divider>
        <div class="detailAttribute">
          <div class="detailAttribute_item">
            <div class="detailAttribute_item_title">投放平台：</div>
            <div class="detailAttribute_item_content">
              <div
                class="detailAttribute_item_content_item"
                v-for="(item, index) in 4"
                :key="index"
              >
                <img
                  src="https://bpic.51yuansu.com/pic3/cover/03/67/79/65be2e88aa2ba_800.jpg?x-oss-process=image/sharpen,100"
                />
                <span>facebook</span>
              </div>
            </div>
          </div>
          <div
            class="detailAttribute_item"
            v-for="(item, index) in 5"
            :key="index"
          >
            <div class="detailAttribute_item_title">开始投放时间：</div>
            <div class="detailAttribute_item_content">
              <span>2024.07.01 ~ 2024.07.10</span>
            </div>
          </div>
          <div class="detailAttribute_foot">
            <!-- <el-button>收藏</el-button> -->
            <el-button type="primary">下载素材</el-button>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="pageDetail_foot">
      <div class="pageDetail_foot_title">更多相似内容推荐</div>
      <div class="pageDetail_foot_content">
        <div
          class="homePage_main_item"
          v-for="(item, index) in 5"
          :key="index"
          @click="toDetail()"
        >
          <div class="listItem_top">
            <div class="listItem_top_left">
              <div class="listItem_top_left_img">
                <img
                  src="https://bpic.51yuansu.com/pic3/cover/03/67/79/65be2e88aa2ba_800.jpg?x-oss-process=image/sharpen,100"
                />
              </div>
              <div class="listItem_top_left_main">
                <div class="itemTopText_top">Chris evans</div>
                <div class="itemTopText_main">
                  <img
                    v-for="(item, index) in 2"
                    :key="index"
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
                游戏vlog白船在水面上白船在水面上漂立法上的控件撒反对
              </div>
              <div class="listItem_main_footer_attribute">
                <div class="listItem_main_footer_attribute_left">游戏素材</div>
                <div class="listItem_main_footer_attribute_right">
                  2024-07-04
                </div>
              </div>
            </div>
          </div>
          <div class="listItem_foot">
            <div class="listItem_foot_item">
              <div class="listItem_foot_item_num">1.6k</div>
              <div class="listItem_foot_item_num">点赞</div>
            </div>
            <el-divider direction="vertical"></el-divider>
            <div class="listItem_foot_item">
              <div class="listItem_foot_item_num">1.6k</div>
              <div class="listItem_foot_item_num">点赞</div>
            </div>
            <el-divider direction="vertical"></el-divider>
            <div class="listItem_foot_item">
              <div class="listItem_foot_item_num">1.6k</div>
              <div class="listItem_foot_item_num">点赞</div>
            </div>
            <el-divider direction="vertical"></el-divider>
            <div class="listItem_foot_item">
              <div class="listItem_foot_item_num">1.6k</div>
              <div class="listItem_foot_item_num">点赞</div>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import { getDetail } from "../api/material";

export default {
  name: "PageDetail",
  data() {
    return {};
  },
  created() {
    this.$nextTick(() => {
      this.init();
    });
  },
  methods: {
    init() {
      if (this.$route.query.id) {
        this.getDetailFn(this.$route.query.id);
      }
    },
    getDetailFn(id) {
      let data = {
        object_id: id,
      };
      getDetail(data).then((res) => {
        //
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.detailAttribute_foot ::v-deep .el-button {
  width: 136px;
  height: 40px;
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
  background: #ffffff;
  &_main {
    margin: 68px 25px 59px 206px;
    display: flex;
    &_left {
      width: 420px;
      height: 560px;
      border-radius: 0px 0px 0px 0px;
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
      &_title {
        height: 34px;
        font-family: PingFang SC, PingFang SC;
        font-weight: 600;
        font-size: 24px;
        color: #333333;
        line-height: 28px;
        text-align: left;
        font-style: normal;
        text-transform: none;
      }
      &_subTitle {
        height: 25px;
        font-family: PingFang SC, PingFang SC;
        font-weight: 400;
        font-size: 18px;
        color: #999999;
        line-height: 21px;
        text-align: left;
        font-style: normal;
        text-transform: none;
        margin-top: 14px;
      }
      .el-divider--vertical {
        // height: 32px;
      }
      .el-divider {
        background: rgba(112, 124, 151, 0.1);
        margin: 24px 0;
      }
      .detailAttribute {
        &_item {
          display: flex;
          margin-bottom: 24px;
          &_title {
            height: 22px;
            font-family: PingFang SC, PingFang SC;
            font-weight: 400;
            font-size: 16px;
            color: #999999;
            line-height: 19px;
            text-align: left;
            font-style: normal;
            text-transform: none;
          }
          &_content {
            display: flex;
            align-items: center;
            gap: 24px;
            margin-left: 20px;
            &_item {
              display: flex;
              align-items: center;
              img {
                width: 18px;
                height: 18px;
              }
              span {
                margin-left: 2px;
                height: 20px;
                font-family: PingFang SC, PingFang SC;
                font-weight: 400;
                font-size: 14px;
                color: #565656;
                line-height: 16px;
                text-align: left;
                font-style: normal;
                text-transform: none;
              }
            }
          }
        }
        &_foot {
          margin-top: 8px;
        }
      }
    }
  }
  &_foot {
    padding: 0 22px 54px;
    &_title {
      height: 45px;
      font-family: PingFang SC, PingFang SC;
      font-weight: 600;
      font-size: 32px;
      color: #333333;
      line-height: 38px;
      text-align: left;
      font-style: normal;
      text-transform: none;
    }
    &_content {
      margin-top: 44px;
      display: flex;
      flex-wrap: wrap;
      gap: 24px;
      .homePage_main_item {
        flex-shrink: 0;
        // width: 330px;
        width: 312px;
        margin-bottom: 24px;
        background: #ffffff;
        box-shadow: 0px 20px 60px 0px rgba(46, 33, 61, 0.08);
        border-radius: 10px 10px 10px 10px;
        overflow: hidden;
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
  }
}
</style>