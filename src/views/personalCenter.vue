<template>
  <div class="personalCenter" v-loading="personalCenterLoading">
    <div class="personalCenter_tabs">
      <div
        class="personalCenter_tabs_item"
        :class="{ 'personalCenter_tabs_item-active': chooseTab == 1 }"
        @click="chooseTab = 1"
      >
        <div class="personalCenter_tabs_item_icon">
          <i class="el-icon-user-solid"></i>
        </div>
        <div class="personalCenter_tabs_item_label">{{ $t('zhang-hao-xin-xi') }}</div>
      </div>
      <div
        class="personalCenter_tabs_item"
        :class="{ 'personalCenter_tabs_item-active': chooseTab == 2 }"
        @click="chooseTab = 2"
      >
        <div class="personalCenter_tabs_item_icon">
          <i class="el-icon-s-ticket"></i>
        </div>
        <div class="personalCenter_tabs_item_label">{{ $t('ji-ben-xin-xi') }}</div>
      </div>
      <!-- <div
        class="personalCenter_tabs_item"
        :class="{ 'personalCenter_tabs_item-active': chooseTab == 3 }"
        @click="chooseTab = 3"
      >
        <div class="personalCenter_tabs_item_icon">
          <i class="el-icon-s-order"></i>
        </div>
        <div class="personalCenter_tabs_item_label">{{ $t('wo-de-ding-dan') }}</div>
      </div> -->
    </div>
    <div class="personalCenter_main" v-if="chooseTab === 1">
      <div class="personalCenter_main_top">{{ $t('ge-ren-xin-xi') }}</div>
      <el-divider></el-divider>
      <div class="personalCenter_main_content">
        <div class="personalCenter_main_content_item">
          <div class="personalItem_title">{{ $t('shou-ji-hao-ma') }}</div>
          <div class="personalItem_content">
            <span v-if="form.phone">{{ form.phone }}</span>
            <div
              v-if="!form.phone"
              class="personalItem_content_btn"
              :class="{ 'personalItem_content_btn-active': phoneDialog }"
              @click="openPhone"
            >
              <i class="el-icon-edit-outline"></i>
              <span>{{ $t('bang-ding-shou-ji') }}</span>
            </div>
          </div>
          <div class="personalItem_right" v-if="form.phone">
            <i class="el-icon-success"></i>
            <span>{{ $t('yi-yan-zheng') }}</span>
          </div>
          <el-dialog
            :title="$t('shou-ji-bang-ding')"
            :show-close="false"
            :visible="phoneDialog"
            width="640px"
          >
            <div class="openEmail_title" style="padding: 0 68px">
              {{ $t('qing-tian-xie-shou-ji-hao-ma-dian-ji-fa-song-yan-zheng-ma-ni-jiang-hui-shou-dao-yi-feng-dai-you-liu-wei-shu-zi-yan-zheng-ma-duan-xin') }}
            </div>
            <div class="openEmail_main">
              <el-form ref="phoneForm" :model="phoneForm" label-width="108px">
                <el-form-item
                  class="openEmail_main_input1"
                  :label="$t('shou-ji-hao-ma-0')"
                  prop="phone"
                  :rules="[{ required: true, message: `${$t('qing-shu-ru-shou-ji-hao-ma')}` }]"
                >
                  <el-input
                    v-model="phoneForm.phone"
                    :placeholder="$t('qing-shu-ru-shou-ji-hao-ma-0')"
                  ></el-input>
                </el-form-item>
                <div class="openEmail_main_code">
                  <el-form-item
                    class="openEmail_main_input2"
                    :label="$t('yan-zheng-ma')"
                    prop="code"
                    :rules="[{ required: true, message: `${$t('qing-shu-ru-yan-zheng-ma-3')}` }]"
                  >
                    <el-input
                      class="openEmail_main_code_input"
                      v-model="phoneForm.code"
                      :placeholder="$t('qing-shu-ru-yan-zheng-ma-3')"
                    ></el-input>
                  </el-form-item>
                  <el-button
                    class="openEmail_main_code_btn"
                    type="primary"
                    :disabled="sendCodeStatus === 1"
                    @click="sendCodeFn(1)"
                    >{{
                      sendCodeStatus === 1
                        ? `${countdown}${$t('miao')}`
                        : sendCodeStatus === 2
                        ? `${$t('chong-xin-fa-song')}`
                        : `${$t('fa-song-yan-zheng-ma')}`
                    }}</el-button
                  >
                </div>
              </el-form>
            </div>
            <span slot="footer" class="dialog-footer">
              <el-button
                type="primary"
                :loading="phoneFormLoading"
                @click="emailFormSubmit(1)"
                >{{ $t('que-ding') }}</el-button
              >
              <el-button @click="phoneDialog = false">{{ $t('qu-xiao') }}</el-button>
            </span>
          </el-dialog>
        </div>
        <div class="personalCenter_main_content_item">
          <div class="personalItem_title">{{ $t('dian-zi-you-xiang') }}</div>
          <div class="personalItem_content">
            <span v-if="form.email">{{ form.email }}</span>
            <div
              v-if="!form.email"
              class="personalItem_content_btn"
              :class="{ 'personalItem_content_btn-active': emailDialog }"
              @click="openEmail"
            >
              <i class="el-icon-edit-outline"></i>
              <span>{{ $t('bang-ding-you-xiang') }}</span>
            </div>
          </div>
          <div class="personalItem_right" v-if="form.email">
            <i class="el-icon-success"></i>
            <span>{{ $t('yi-yan-zheng-0') }}</span>
          </div>
          <el-dialog
            :title="$t('you-xiang-bang-ding')"
            :show-close="false"
            :visible="emailDialog"
            width="640px"
          >
            <div class="openEmail_title">
              {{ $t('qing-tian-xie-you-xiang-dian-ji-fa-song-yan-zheng-ma-ni-jiang-hui-shou-dao-yi-feng-dai-you-liu-wei-shu-zi-yan-zheng-ma-you-jian') }}
            </div>
            <div class="openEmail_main">
              <el-form ref="emailForm" :model="emailForm" label-width="108px">
                <el-form-item
                  class="openEmail_main_input1"
                  :label="$t('dian-zi-you-xiang-0')"
                  prop="email"
                  :rules="[{ required: true, message: `${$t('qing-shu-ru-dian-zi-you-xiang')}` }]"
                >
                  <el-input
                    v-model="emailForm.email"
                    :placeholder="$t('qing-shu-ru-dian-zi-you-xiang')"
                  ></el-input>
                </el-form-item>
                <div class="openEmail_main_code">
                  <el-form-item
                    class="openEmail_main_input2"
                    :label="$t('yan-zheng-ma-0')"
                    prop="code"
                    :rules="[{ required: true, message: `${$t('qing-shu-ru-yan-zheng-ma-2')}}` }]"
                  >
                    <el-input
                      class="openEmail_main_code_input"
                      v-model="emailForm.code"
                      :placeholder="$t('qing-shu-ru-yan-zheng-ma-3')"
                    ></el-input>
                  </el-form-item>
                  <el-button
                    class="openEmail_main_code_btn"
                    type="primary"
                    :disabled="sendCodeStatus === 1"
                    @click="sendCodeFn(2)"
                    >{{
                      sendCodeStatus === 1
                        ? `${countdown}${$t('miao')}`
                        : sendCodeStatus === 2
                        ? `${$t('chong-xin-fa-song')}`
                        : `${$t('fa-song-yan-zheng-ma')}`
                    }}</el-button
                  >
                </div>
              </el-form>
            </div>
            <span slot="footer" class="dialog-footer">
              <el-button
                type="primary"
                :loading="emailFormLoading"
                @click="emailFormSubmit(2)"
                >{{ $t('que-ding-0') }}</el-button
              >
              <el-button @click="emailDialog = false">{{ $t('qu-xiao-0') }}</el-button>
            </span>
          </el-dialog>
        </div>
        <div class="personalCenter_main_content_item">
          <div class="personalItem_title">{{ $t('zhang-hao-mi-ma') }}</div>
          <div class="personalItem_content">
            <span>********</span>
            <div
              class="personalItem_content_btn"
              :class="{ 'personalItem_content_btn-active': passwordDialog }"
              @click="changePassword"
            >
              <i class="el-icon-edit-outline"></i>
              <span>{{ $t('xiu-gai-mi-ma') }}</span>
            </div>
          </div>
          <el-dialog
            :title="$t('xiu-gai-mi-ma')"
            :show-close="false"
            :visible="passwordDialog"
            width="640px"
          >
            <div class="changePassword_main">
              <el-form
                ref="passwordForm"
                :model="passwordForm"
                label-width="auto"
              >
                <el-form-item
                  class="changePassword_main_input1"
                  :label="$t('yuan-mi-ma')"
                  prop="password"
                  :rules="[{ required: true, message: `${$t('qing-shu-ru-yuan-mi-ma')}` }]"
                >
                  <el-input
                    v-model="passwordForm.password"
                    show-password
                    :placeholder="$t('qing-shu-ru-yuan-mi-ma')"
                  ></el-input>
                </el-form-item>
                <el-form-item
                  class="changePassword_main_input1"
                  :label="$t('xin-mi-ma')"
                  prop="newPassword"
                  :rules="[{ required: true, message: `${$t('qing-shu-ru-xin-mi-ma-0')}` }]"
                >
                  <el-input
                    v-model="passwordForm.newPassword"
                    show-password
                    :placeholder="$t('qing-shu-ru-xin-mi-ma-0')"
                  ></el-input>
                </el-form-item>
                <el-form-item
                  class="changePassword_main_input1"
                  :label="$t('xin-mi-ma-0')"
                  prop="newPassword2"
                  :rules="[{ validator: checkPassword2, required: true, }]"
                >
                  <el-input
                    v-model="passwordForm.newPassword2"
                    show-password
                    :placeholder="$t('qing-zai-ci-shu-ru-xin-mi-ma-0')"
                  ></el-input>
                </el-form-item>
              </el-form>
            </div>
            <span slot="footer" class="dialog-footer">
              <el-button
                type="primary"
                :loading="passwordFormLoading"
                @click="passwordFormSubmit"
                >{{ $t('que-ding-1') }}</el-button
              >
              <el-button @click="passwordDialog = false">{{ $t('qu-xiao-1') }}</el-button>
            </span>
          </el-dialog>
        </div>
        <div class="personalCenter_main_content_item">
          <!-- <div class="personalItem_title">{{ $t('zhu-ce-shi-jian') }}</div> -->
          <div class="personalItem_content">
            <!-- <span>139****6864</span> -->
          </div>
        </div>
        <!-- <div class="personalCenter_main_content_item">
          <div class="personalItem_title">{{ $t('vip-dao-qi-shi-jian') }}</div>
          <div class="personalItem_content"> -->
            <!-- <span>139****6864</span> -->
            <!-- <img v-if="form.vip_status" src="../assets/img/vip.png" /> -->
          <!-- </div>
        </div> -->
      </div>
    </div>
    <div class="personalCenter_main" v-if="chooseTab === 2">
      <div class="personalCenter_main_top">{{ $t('ji-ben-xin-xi-0') }}</div>
      <el-divider></el-divider>
      <div class="personalCenter_main_content">
        <div class="personalCenter_main_content_item">
          <div class="personalItem_title">{{ $t('yong-hu-ni-cheng') }}</div>
          <div class="personalItem_content">
            <el-input v-model="form.nick_name" :disabled="!isEdit"></el-input>
          </div>
        </div>
        <div class="personalCenter_main_content_item">
          <div class="personalItem_title">{{ $t('suo-zai-gong-si') }}</div>
          <div class="personalItem_content">
            <el-input v-model="form.company_name" :disabled="!isEdit"></el-input>
          </div>
        </div>
        <div class="personalCenter_main_content_item">
          <div class="personalItem_title">使用信息：</div>
          <div class="personalItem_content">
            <el-input
              v-model="form.user_needs"
              type="textarea"
              :rows="2"
              resize="none"
              :disabled="!isEdit"
            ></el-input>
          </div>
        </div>
        <div class="personalCenter_main_content_foot">
          <el-button @click="toChangeIsEdit">{{ isEdit ? '取消' : '修改' }}</el-button>
          <el-button type="primary" :loading="updateInforLoading" @click="updateInforFn">保存</el-button>
        </div>
      </div>
    </div>
    <div class="personalCenter_main" v-if="chooseTab === 3">
      <el-form ref="form" :inline="true" :model="form">
        <el-form-item :label="$t('xuan-ze-ri-qi')">
          <el-date-picker
            v-model="form.date"
            type="daterange"
            range-separator="~"
            :start-placeholder="$t('kai-shi-ri-qi')"
            :end-placeholder="$t('jie-shu-ri-qi')"
            value-format="yyyy-MM-dd"
            @change="dateChange"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button class="orderListBtn" type="primary" @click="getOrderList"
            >{{ $t('sou-suo') }}</el-button
          >
        </el-form-item>
      </el-form>
      <el-table :data="orderList" style="width: 100%">
        <el-table-column prop="order_no">
          <template slot="header" slot-scope="scope">{{ $t('ding-dan-hao') }}</template>
        </el-table-column>
        <el-table-column prop="sku_name">
          <template slot="header" slot-scope="scope">{{ $t('tao-can-xiang-qing') }}</template>
        </el-table-column>
        <el-table-column prop="amount">
          <template slot="header" slot-scope="scope">{{ $t('zong-zhi-fu') }}</template>
          <template slot-scope="scope">
            <span>{{ scope.row.amount }}/{{ scope.row.currency }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="create_datetime">
          <template slot="header" slot-scope="scope">{{ $t('chuang-jian-shi-jian') }}</template>
        </el-table-column>
        <el-table-column prop="update_datetime">
          <template slot="header" slot-scope="scope">{{ $t('geng-xin-shi-jian') }}</template>
        </el-table-column>
        <el-table-column prop="days">
          <template slot="header" slot-scope="scope">{{ $t('you-xiao-qi-tian') }}</template>
        </el-table-column>
        <el-table-column prop="download_times">
          <template slot="header" slot-scope="scope">{{ $t('xia-zai-ci-shu-ci') }}</template>
        </el-table-column>
        <el-table-column prop="status">
          <template slot="header" slot-scope="scope">{{ $t('zong-zhi-fu') }}</template>
          <template slot-scope="scope">
            <span
              class="statusIcon"
              :style="{
                'backgroundColor':
                  scope.row.status === 1
                    ? '#FFC327'
                    : scope.row.status === 2
                    ? '#1CDA96'
                    : scope.row.status === 3
                    ? '#FF6B53'
                    : 'black',
              }"
            ></span>
            <!-- | statusTranslate -->
            <span>{{ scope.row.status }}</span>
          </template>
        </el-table-column>
      </el-table>
      <!-- <div class="personalCenter_main_footer">
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
  </div>
</template>

<script>
import { getOrderList, sendCode, updateInfor } from "../api/user";
import { getUserInfo } from "../api/payment";

export default {
  name: "PersonalCenter",
  data() {
    return {
      isEdit: false,
      updateInforLoading: false,
      passwordFormLoading: false,
      phoneFormLoading: false,
      emailFormLoading: false,
      sendCodeStatus: 0,
      countdown: 60, // 倒计时初始值
      timer: null, // 存储定时器的引用
      personalCenterLoading: false,
      currentPage4: 1,
      phoneForm: {
        phone: "",
        code: "",
      },
      emailForm: {
        email: "",
        code: "",
      },
      passwordForm: {
        password: "",
        newPassword: "",
        newPassword2: "",
      },
      form: {
        date: "",
        start_time: "",
        end_datetime: "",
      },
      temForm: {
        nick_name: '',
        company_name: '',
        user_needs: '',
      },
      phoneDialog: false,
      emailDialog: false,
      passwordDialog: false,
      chooseTab: 1,
      input1: this.$t('jin-guo-guo'),
      input2: this.$t('shen-zhen-zhi-shu-ke-ji-xin-xi-you-xian-gong-si'),
      input3: this.$t('ru-he-tong-guo-ai-tou-fang-shu-ju-fen-xi-jin-hang-guang-gao-tou-fang'),
      orderList: [],
    };
  },
  filters: {
    statusTranslate(status) {
      // 状态：1未付款、2已付款 3已取消
      let statusName = "";
      switch (status) {
        case 1:
          statusName = this.$t('wei-fu-kuan');
          break;
        case 2:
          statusName = this.$t('yi-fu-kuan');
          break;
        case 3:
          statusName = this.$t('yi-qu-xiao');
          break;
        default:
          break;
      }
      return statusName;
    },
  },
  watch: {
    chooseTab(newVal, oldVal) {
      if (newVal === 3) {
        this.getOrderList();
      }
    },
    $route() {
      this.$nextTick(() => {
        this.init();
      });
    },
  },
  created() {
    this.$nextTick(() => {
      this.init();
    });
  },
  beforeDestroy() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  },
  methods: {
    toChangeIsEdit() {
      if (this.isEdit) {
        this.form.nick_name = this.temForm.nick_name;
        this.form.company_name = this.temForm.company_name;
        this.form.user_needs = this.temForm.user_needs;
      } else {
        this.temForm.nick_name = this.form.nick_name;
        this.temForm.company_name = this.form.company_name;
        this.temForm.user_needs = this.form.user_needs;
      }
      this.isEdit = !this.isEdit;
    },
    updateInforFn() {
      this.updateInforLoading = !this.updateInforLoading;
      let data = {
        company_name: this.form.company_name,
        name: this.form.nick_name,
        user_needs: this.form.user_needs
      }
      updateInfor(data)
        .then((res) => {
          this.updateInforLoading = !this.updateInforLoading;
          this.$message({
            type: "success",
            message: '修改成功',
          });
          this.isEdit = !this.isEdit;
        }).catch((err) => {
          this.updateInforLoading = !this.updateInforLoading;
        });
    },
    checkPassword2(rule, value, callback) {
      if (value !== this.passwordForm.newPassword) {
        callback(new Error(this.$t('liang-ci-shu-ru-mi-ma-bu-yi-zhi')));
      } else {
        callback();
      }
    },
    passwordFormSubmit() {
      this.$refs.passwordForm.validate((valid) => {
        if (valid) {
          if (
            this.passwordForm.password !==
            JSON.parse(localStorage.getItem("accountInfor")).password
          ) {
            return this.$message({
              type: "error",
              message: this.$t('yuan-mi-ma-cuo-wu'),
            });
          }
          this.passwordFormLoading = !this.passwordFormLoading;
          const data = {
            password: this.passwordForm.newPassword,
          };
          updateInfor(data)
            .then(() => {
              this.passwordFormLoading = !this.passwordFormLoading;
              this.passwordDialog = false;
              this.$message({
                type: "success",
                message: this.$t('xiu-gai-mi-ma-cheng-gong-qing-zhong-xin-deng-lu'),
              });
              this.$store.dispatch("user/logout");
            })
            .catch(() => {
              this.passwordFormLoading = !this.passwordFormLoading;
            });
        } else {
          return false;
        }
      });
    },
    emailFormSubmit(type) {
      let refString = "";
      let loadingType = "";
      let dialogType = "";
      if (type === 1) {
        refString = "phoneForm";
        loadingType = "phoneFormLoading";
        dialogType = "phoneDialog";
      } else if (type === 2) {
        refString = "emailForm";
        loadingType = "emailFormLoading";
        dialogType = "emailDialog";
      }
      this.$refs[refString].validate((valid) => {
        if (valid) {
          this[loadingType] = !this[loadingType];
          let data = {};
          if (type === 1) {
            data = {
              phone: this.phoneForm.phone,
              code: this.phoneForm.code,
            };
          } else if (type === 2) {
            data = {
              email: this.emailForm.email,
              code: this.emailForm.code,
            };
          }
          updateInfor(data)
            .then(() => {
              this[loadingType] = !this[loadingType];
              this[dialogType] = false;
              this.getUserInfoFn();
              this.$message({
                message:
                  type === 1
                    ? this.$t('shou-ji-bang-ding-cheng-gong')
                    : type === 2
                    ? this.$t('you-xiang-bang-ding-cheng-gong')
                    : "",
                type: "success",
              });
            })
            .catch(() => {
              this[loadingType] = !this[loadingType];
            });
        } else {
          return false;
        }
      });
    },
    // 开始倒计时
    startCountdown() {
      if (this.countdown > 0) {
        this.timer = setTimeout(() => {
          this.countdown--;
          this.startCountdown(); // 递归调用，直到countdown为0
        }, 1000);
      } else {
        this.sendCodeStatus = 2; // 倒计时结束，恢复发送状态
        this.countdown = 60; // 重置倒计时
        // 可以选择清除定时器，但在这个递归结构中，定时器会在最后一轮自动停止
      }
    },
    sendCodeFn(type) {
      if (type === 1) {
        if (!this.phoneForm.phone) {
          return this.$message({
            message: this.$t('qing-shu-ru-shou-ji-hao-ma-0'),
            type: "warning",
          });
        }
      } else if (type === 2) {
        if (!this.emailForm.email) {
          return this.$message({
            message: this.$t('qing-shu-ru-dian-zi-you-xiang'),
            type: "warning",
          });
        }
      }
      const data = {
        account:
          type === 1
            ? this.phoneForm.phone
            : type === 2
            ? this.emailForm.email
            : "",
        code:
          type === 1
            ? this.phoneForm.code
            : type === 2
            ? this.emailForm.code
            : "",
      };
      sendCode(data).then((res) => {
        this.sendCodeStatus = 1;
        this.startCountdown();
      });
    },
    getUserInfoFn() {
      getUserInfo()
        .then((res) => {
          this.personalCenterLoading = false;
          this.form = res.data;
        })
        .catch(() => {
          this.personalCenterLoading = false;
        });
    },
    dateChange(val) {
      if (val) {
        this.form.start_time = val[0];
        this.form.end_datetime = val[1];
      } else {
        this.form.start_time = "";
        this.form.end_datetime = "";
      }
    },
    getOrderList() {
      this.personalCenterLoading = true;
      const data = {
        start_time: this.form.start_time,
        end_datetime: this.form.end_datetime,
      }
      getOrderList(data)
        .then((res) => {
          this.personalCenterLoading = false;
          this.orderList = res.data;
        })
        .catch(() => {
          this.personalCenterLoading = false;
        });
    },
    handleSizeChange(val) {
      //
    },
    handleCurrentChange(val) {
      //
    },
    openPhone() {
      this.phoneDialog = true;
      this.$nextTick(() => {
        this.$refs.phoneForm.resetFields();
      })
    },
    openEmail() {
      this.emailDialog = true;
      this.$nextTick(() => {
        this.$refs.emailForm.resetFields();
      })
    },
    changePassword() {
      this.passwordDialog = true;
      this.$nextTick((() => {
        this.$refs.passwordForm.resetFields();
      }))
    },
    init() {
      this.chooseTab = this.$route.query.tab
        ? Number(this.$route.query.tab)
        : 1;
      if (this.$route.query.action) {
        if (Number(this.$route.query.action) === 1) {
          this.passwordDialog = true;
        }
      }
      this.getUserInfoFn();
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
    .orderListBtn {
      width: 116px;
    }
    .statusIcon {
      display: inline-block;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      margin-right: 8px;
    }
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
              margin-right: 9px;
            }
            &_btn {
              cursor: pointer;
              height: 28px;
              padding: 6px 14px;
              border-radius: 4px 4px 4px 4px;
              display: flex;
              align-items: center;
              font-family: PingFang SC, PingFang SC;
              font-weight: 400;
              font-size: 12px;
              color: #999999;
              background: #f4f4f5;
              line-height: 14px;
              text-align: left;
              font-style: normal;
              text-transform: none;
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
            padding: 0 118px;
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
            padding: 0 126px;
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
      &_foot {
        margin-left: 80px;
        .el-button {
          width: 116px;
          height: 40px;
          font-size: 14px;
        }
        .el-button:first-child {
          margin-right: 24px;
        }
      }
    }
    &_footer {
      text-align: center;
      margin-top: 22px;
    }
  }
}
</style>