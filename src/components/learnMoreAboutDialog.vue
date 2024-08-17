<template>
  <el-dialog
    width="640px"
    :visible="dialogVisible"
    :close-on-press-escape="false"
    :close-on-click-modal="false"
    top="20vh"
    @close="dialogVisible = false"
  >
    <div class="learnMoreAbout">
      <div class="learnMoreAbout_title">
        了解相关推广方案，请联系我们的客服人员！
      </div>
      <div class="learnMoreAbout_content">
        <div class="learnMoreAbout_content_text">客服电话：0755-86002348</div>
        <div class="learnMoreAbout_content_text">客服微信：sz_aidata@8220</div>
        <div class="learnMoreAbout_content_text">
          电子邮箱：sz_aidata8600@163.com
        </div>
      </div>
      <div class="learnMoreAbout_footer">
        <div class="learnMoreAbout_footer_code">
          <div class="learnMoreAbout_footer_code_main">
            <img src="../assets/img/wx_code.png" />
          </div>
          <div class="learnMoreAbout_footer_code_text">客服微信</div>
        </div>
      </div>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: "LearnMoreAboutDialog",
  data() {
    return {
      dialogVisible: false,
    };
  },
  computed: {},
  methods: {
    show() {
      this.dialogVisible = true;
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep .el-dialog {
  border-radius: 10px;
}
::v-deep .el-dialog__headerbtn {
  font-size: 24px;
}
::v-deep .el-dialog__body {
  padding: 55px;
  padding-top: 7px;
}
.learnMoreAbout {
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
    margin-top: 32px;
    &_text {
      font-family: PingFang SC, PingFang SC;
      font-weight: 400;
      font-size: 14px;
      color: #565656;
      line-height: 16px;
      text-align: left;
      font-style: normal;
      text-transform: none;
    }
    &_text:not(:last-child) {
      margin-bottom: 20px;
    }
  }
  &_footer {
    margin-top: 32px;
    display: flex;
    &_code {
      &_main {
        width: 120px;
        height: 120px;
        background: #ffffff;
        border-radius: 10px 10px 10px 10px;
        border: 1.5px solid #6956e5;
        padding: 10px;
        img {
          width: 100px;
          height: 100px;
        }
      }
      &_text {
        margin-top: 12px;
        font-family: PingFang SC, PingFang SC;
        font-weight: 400;
        font-size: 12px;
        color: #565656;
        line-height: 14px;
        font-style: normal;
        text-transform: none;
        text-align: center;
      }
    }
  }
}
</style>