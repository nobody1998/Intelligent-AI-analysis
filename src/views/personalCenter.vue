<template>
  <div class="personalCenter">
    <div class="personalCenter_tabs">
      <div
        class="personalCenter_tabs_item"
        :class="{ 'personalCenter_tabs_item-active': chooseTab == 1 }"
        @click="chooseTab = 1"
      >
        <div class="personalCenter_tabs_item_icon">
          <i class="el-icon-user-solid"></i>
        </div>
        <div class="personalCenter_tabs_item_label">账号信息</div>
      </div>
      <div
        class="personalCenter_tabs_item"
        :class="{ 'personalCenter_tabs_item-active': chooseTab == 2 }"
        @click="chooseTab = 2"
      >
        <div class="personalCenter_tabs_item_icon">
          <i class="el-icon-s-ticket"></i>
        </div>
        <div class="personalCenter_tabs_item_label">基本信息</div>
      </div>
      <div
        class="personalCenter_tabs_item"
        :class="{ 'personalCenter_tabs_item-active': chooseTab == 3 }"
        @click="chooseTab = 3"
      >
        <div class="personalCenter_tabs_item_icon">
          <i class="el-icon-s-order"></i>
        </div>
        <div class="personalCenter_tabs_item_label">我的订单</div>
      </div>
    </div>
    <div class="personalCenter_main" v-if="chooseTab === 1">
      <div class="personalCenter_main_top">个人信息</div>
      <el-divider></el-divider>
      <div class="personalCenter_main_content">
        <div class="personalCenter_main_content_item">
          <div class="personalItem_title">手机号码：</div>
          <div class="personalItem_content">
            <span>139****6864</span>
          </div>
          <div class="personalItem_right">
            <i class="el-icon-success"></i>
            <span>已验证</span>
          </div>
        </div>
        <div class="personalCenter_main_content_item">
          <div class="personalItem_title">电子邮箱：</div>
          <div class="personalItem_content">
            <span>139****6864</span>
            <div
              class="personalItem_content_btn personalItem_content_btn-active"
              @click="openEmail"
            >
              <i class="el-icon-edit-outline"></i>
              <span>绑定邮箱</span>
            </div>
            <div class="personalItem_right">
              <i class="el-icon-success"></i>
              <span>已验证</span>
            </div>
          </div>
          <el-dialog
            title="邮箱绑定"
            :show-close="false"
            :visible="dialogVisible1"
            width="640px"
          >
            <div class="openEmail_title">
              请填写邮箱，点击“发送验证码”，你将会收到一封带有六位数字验证码邮件
            </div>
            <div class="openEmail_main">
              <el-form ref="form" :model="form2" label-width="92px">
                <el-form-item
                  class="openEmail_main_input1"
                  label="电子邮箱："
                  prop="email"
                >
                  <el-input
                    v-model="form2.email"
                    placeholder="请输入电子邮箱"
                  ></el-input>
                </el-form-item>
                <div class="openEmail_main_code">
                  <el-form-item
                    class="openEmail_main_input2"
                    label="验证码："
                    prop="password"
                  >
                    <el-input
                      class="openEmail_main_code_input"
                      v-model="form2.password"
                      placeholder="请输入验证码"
                    ></el-input>
                  </el-form-item>
                  <el-button class="openEmail_main_code_btn" type="primary"
                    >发送验证码</el-button
                  >
                </div>
              </el-form>
            </div>
            <span slot="footer" class="dialog-footer">
              <el-button type="primary" @click="dialogVisible1 = false"
                >确 定</el-button
              >
              <el-button @click="dialogVisible1 = false">取 消</el-button>
            </span>
          </el-dialog>
        </div>
        <div class="personalCenter_main_content_item">
          <div class="personalItem_title">账号密码：</div>
          <div class="personalItem_content">
            <span>************</span>
            <div class="personalItem_content_btn" @click="changePassword">
              <i class="el-icon-edit-outline"></i>
              <span>修改密码</span>
            </div>
          </div>
          <el-dialog
            title="修改密码"
            :show-close="false"
            :visible="dialogVisible2"
            width="640px"
          >
            <div class="changePassword_main">
              <el-form ref="form" :model="form2" label-width="76px">
                <el-form-item
                  class="changePassword_main_input1"
                  label="原密码："
                  prop="email"
                >
                  <el-input
                    v-model="form2.email"
                    placeholder="请输入原密码"
                  ></el-input>
                </el-form-item>
                <el-form-item
                  class="changePassword_main_input1"
                  label="新密码："
                  prop="email"
                >
                  <el-input
                    v-model="form2.email"
                    placeholder="请输入新密码"
                  ></el-input>
                </el-form-item>
                <el-form-item
                  class="changePassword_main_input1"
                  label="新密码："
                  prop="email"
                >
                  <el-input
                    v-model="form2.email"
                    placeholder="请再次输入新密码"
                  ></el-input>
                </el-form-item>
              </el-form>
            </div>
            <span slot="footer" class="dialog-footer">
              <el-button type="primary" @click="dialogVisible2 = false"
                >确 定</el-button
              >
              <el-button @click="dialogVisible2 = false">取 消</el-button>
            </span>
          </el-dialog>
        </div>
        <div class="personalCenter_main_content_item">
          <div class="personalItem_title">注册时间：</div>
          <div class="personalItem_content">
            <span>139****6864</span>
          </div>
        </div>
        <div class="personalCenter_main_content_item">
          <div class="personalItem_title">VIP到期时间：</div>
          <div class="personalItem_content">
            <span>139****6864</span>
            <img
              src="https://bpic.51yuansu.com/pic3/cover/03/67/79/65be2e88aa2ba_800.jpg?x-oss-process=image/sharpen,100"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="personalCenter_main" v-if="chooseTab === 2">
      <div class="personalCenter_main_top">基本信息</div>
      <el-divider></el-divider>
      <div class="personalCenter_main_content">
        <div class="personalCenter_main_content_item">
          <div class="personalItem_title">用户昵称：</div>
          <div class="personalItem_content">
            <el-input v-model="input1" disabled></el-input>
          </div>
        </div>
        <div class="personalCenter_main_content_item">
          <div class="personalItem_title">所在公司：</div>
          <div class="personalItem_content">
            <el-input v-model="input2" disabled></el-input>
          </div>
        </div>
        <div class="personalCenter_main_content_item">
          <div class="personalItem_title">使用信息：</div>
          <div class="personalItem_content">
            <el-input
              v-model="input3"
              type="textarea"
              :rows="2"
              resize="none"
              disabled
            ></el-input>
          </div>
        </div>
      </div>
    </div>
    <div class="personalCenter_main" v-if="chooseTab === 3">
      <el-form ref="form" :inline="true" :model="form">
        <el-form-item label="选择日期：">
          <el-date-picker
            v-model="value1"
            type="daterange"
            range-separator="~"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">搜索</el-button>
        </el-form-item>
      </el-form>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="日期" width="180">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="address" label="地址"> </el-table-column>
        <el-table-column prop="date" label="日期" width="180">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="address" label="地址"> </el-table-column>
        <el-table-column prop="date" label="日期" width="180">
        </el-table-column>
      </el-table>
      <div class="personalCenter_main_footer">
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PersonalCenter",
  data() {
    return {
      form2: {
        email: "",
        password: "",
      },
      dialogVisible1: false,
      dialogVisible2: false,
      value1: "",
      chooseTab: 1,
      input1: "金果果",
      input2: "深圳智数科技信息有限公司",
      input3: "如何通过ai投放数据分析，进行广告投放",
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    openEmail() {
      this.dialogVisible1 = true;
    },
    changePassword() {
      this.dialogVisible2 = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.personalItem_content ::v-deep .el-textarea {
  width: 300px;
  margin-left: 10px;
}
.personalItem_content ::v-deep .el-input {
  width: 300px;
  margin-left: 10px;
}
.personalItem_content ::v-deep .el-button {
  width: 116px;
  height: 40px;
  line-height: 0;
  margin-left: 24px;
}
.personalCenter_main ::v-deep .el-form-item__label {
  font-family: PingFang SC, PingFang SC;
  font-weight: 400;
  font-size: 16px;
  color: #333333;
  text-align: left;
  font-style: normal;
  text-transform: none;
}
.personalCenter_main ::v-deep .el-table__header-wrapper th {
  height: 56px;
  background: #f4f4f5;
  font-family: PingFang SC, PingFang SC;
  font-weight: 600;
  font-size: 16px;
  color: #333333;
  text-align: left;
  font-style: normal;
  text-transform: none;
}
.personalCenter_main ::v-deep .el-dialog__footer {
  text-align: center;
}
.openEmail_main_input1 ::v-deep .el-input {
  width: 300px;
}
.openEmail_main_input2 ::v-deep .el-input {
  width: 164px;
}
.openEmail_main ::v-deep .el-input__inner {
  height: 40px;
  background: #f4f4f5;
  border-radius: 4px 4px 4px 4px;
  border: none;
}
.changePassword_main_input1 ::v-deep .el-input {
  width: 300px;
}
.changePassword_main_input1 ::v-deep .el-input__inner {
  height: 40px;
  background: #f4f4f5;
  border-radius: 4px 4px 4px 4px;
  border: none;
}
::v-deep .el-dialog__header {
  padding: 25px 37px;
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
::v-deep .el-dialog__body {
  padding: 0;
}
.dialog-footer ::v-deep .el-button {
  width: 116px;
}

.personalCenter {
  width: 100%;
  height: 100%;
  background: #f4f4f5;
  display: flex;
  align-items: center;
  padding: 24px;
  padding-top: 32px;
  padding-top: 38px;
  margin-top: 8px;
  &_tabs {
    width: 212px;
    height: 100vh;
    padding: 24px 0;
    background: white;
    box-shadow: 0px 15px 30px 0px rgba(10, 0, 73, 0.15);
    border-radius: 10px 10px 10px 10px;
    &_item {
      border-left: 2px solid white;
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      color: #565656;
      cursor: pointer;
      &_icon {
        font-size: 20px;
        margin-left: 23px;
        padding: 10px 0;
      }
      &_label {
        margin-left: 15px;
        font-family: PingFang SC, PingFang SC;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        text-align: left;
        font-style: normal;
        text-transform: none;
        padding: 10px 0;
      }
      &-active {
        border-left: 2px solid #6956e5;
        background: rgba(105, 86, 229, 0.1);
        color: #6956e5;
      }
    }
    &_item:last-child {
      margin-bottom: 0;
    }
  }
  &_main {
    width: 100%;
    height: 100vh;
    margin-left: 24px;
    padding: 25px 32px;
    background: white;
    box-shadow: 0px 15px 30px 0px rgba(10, 0, 73, 0.15);
    border-radius: 10px 10px 10px 10px;
    &_top {
      height: 28px;
      font-family: PingFang SC, PingFang SC;
      font-weight: 600;
      font-size: 20px;
      color: #333333;
      line-height: 23px;
      text-align: left;
      font-style: normal;
      text-transform: none;
      padding-left: 5px;
    }
    &_content {
      &_item {
        display: flex;
        align-items: center;
        margin-bottom: 24px;
        position: relative;
        .personalItem {
          &_title {
            font-family: PingFang SC, PingFang SC;
            font-weight: 400;
            font-size: 14px;
            color: #999999;
            line-height: 16px;
            text-align: left;
            font-style: normal;
            text-transform: none;
          }
          &_content {
            font-family: PingFang SC, PingFang SC;
            font-weight: 400;
            font-size: 14px;
            color: #565656;
            line-height: 16px;
            text-align: left;
            font-style: normal;
            text-transform: none;
            display: flex;
            align-items: center;
            span:nth-child(1) {
            }
            &_btn {
              cursor: pointer;
              height: 28px;
              padding: 6px 14px;
              background: #f4f4f5;
              border-radius: 4px 4px 4px 4px;
              display: flex;
              align-items: center;
              font-family: PingFang SC, PingFang SC;
              font-weight: 400;
              font-size: 12px;
              color: #999999;
              line-height: 14px;
              text-align: left;
              font-style: normal;
              text-transform: none;
              margin-left: 9px;
              .el-icon-edit-outline {
                font-size: 14px;
              }
              span {
                margin-left: 9px;
              }
              &-active {
                background: rgba(105, 86, 229, 0.1);
                color: #6956e5;
                .el-icon-edit-outline {
                  color: #6956e5;
                }
              }
            }
            img {
              width: 20px;
              height: 20px;
              margin-left: 10px;
            }
          }
          &_right {
            position: absolute;
            left: 300px;
            display: flex;
            align-items: center;
            .el-icon-success {
              font-size: 14px;
              color: #6956e5;
            }
            span {
              font-family: PingFang SC, PingFang SC;
              font-weight: 400;
              font-size: 12px;
              color: #6956e5;
              line-height: 14px;
              text-align: left;
              font-style: normal;
              text-transform: none;
              margin-left: 9px;
            }
          }
        }
        .openEmail {
          &_title {
            margin-top: 50px;
            margin-bottom: 34px;
            height: 20px;
            font-family: PingFang SC, PingFang SC;
            font-weight: 400;
            font-size: 14px;
            color: #999999;
            line-height: 16px;
            text-align: left;
            font-style: normal;
            text-transform: none;
            padding: 0 80px;
          }
          &_main {
            padding: 0 124px;
            &_code {
              display: flex;
              align-items: center;
              justify-content: space-between;
              &_btn {
                width: 116px;
                height: 40px;
                border-radius: 5px;
                background: #6853ef;
                margin-bottom: 20px;
                margin-left: 20px;
                flex-shrink: 0;
                font-size: 14px;
              }
            }
          }
        }
        .changePassword {
          &_main {
            margin-top: 50px;
            padding: 0 132px;
            &_code {
              display: flex;
              align-items: center;
              justify-content: space-between;
              &_btn {
                width: 116px;
                height: 40px;
                border-radius: 5px;
                background: #6853ef;
                margin-bottom: 20px;
                margin-left: 20px;
                flex-shrink: 0;
                font-size: 14px;
              }
            }
          }
        }
      }
      &_item:last-child {
        margin-bottom: 0;
      }
    }
    &_footer {
      text-align: center;
      margin-top: 22px;
    }
  }
}
</style>