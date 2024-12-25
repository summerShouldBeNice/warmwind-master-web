<script setup>
import { ref, onMounted } from 'vue'
import { GithubOutlined, DingdingOutlined, MobileOutlined } from '@ant-design/icons-vue'
import { getPublicCaptcha } from "@/api/public.js";

const username = ref()
const password = ref()
const captcha = ref()

onMounted(() => {
  getPublicCaptcha().then(res => {
    // console.log(res.base64)
    captcha.value = res.base64
  })
})

// 显示微信登录
function showPhoneLogin() {
}
</script>

<template>
<div class="login-wrapper">
  <div class="login-card">
    <div class="login-card__left">
      <div class="left-bg">
      </div>
      <div class="left-title">
        暖风后台管理
      </div>
    </div>
    <div class="login-card__right">
      <div class="right-title">
        登录进入后台使用完整功能
      </div>
      <div class="right-form">
        <a-input v-model:value="username" placeholder="用户名" style="height: 40px; margin-top: 25px; width: 300px"/>

        <a-input v-model:value="username" placeholder="手机号" style="height: 40px; margin-top: 25px; width: 300px"/>
        <!--<a-input v-model:value="username" placeholder="用户名" style="height: 40px; margin-top: 30px; width: 300px"/>-->

        <!--<a-input v-model:value="username" placeholder="手机号" style="height: 40px; margin-top: 25px; width: 300px"/>-->

        <!--<a-input-password v-model:value="password" placeholder="请输入密码" style="height: 40px; margin-top: 30px; width: 300px"/>-->
        <a-input-password v-model:value="password" placeholder="请输入密码" style="height: 40px; margin-top: 25px; width: 300px"/>

        <!--<a-input v-model:value="captchaCode" style="width: calc(300px - 100px); height: 40px" />-->

        <!--<a-button/>-->

        <!--<a-input-group compact style="width: 300px; height: 40px; margin-top: 30px">-->
        <a-input-group compact style="width: 300px; height: 40px; margin-top: 25px">
          <a-input v-model:value="captchaCode" style="width: calc(300px - 100px); height: 40px" />
          <a-button type="primary" style="width: 100px; height: 40px">发送验证码</a-button>
        </a-input-group>

        <!--<a-input-group style="width: 300px; height: 40px; margin-top: 25px">-->
        <!--  <a-input v-model:value="captchaCode" style="width: 150px; height: 40px" />-->
        <!--  <a-button type="primary" style="width: 100px; height: 40px; margin-left: 40px">发送验证码</a-button>-->
        <!--</a-input-group>-->

        <div style="width: 300px; height: 40px; display: flex; justify-content: space-between; margin-top: 20px">
          <a-input v-model:value="captchaCode" style="width: 160px; height: 40px" />
          <div style="width: 120px; height: 40px; background-color:#fff; border: 1px solid rgba(0, 0, 0, 0.1); box-sizing: border-box; border-radius: 6px">
            <img v-if="captcha" :src="captcha" alt="" style="width: 118px; height: 38px; border-radius: 6px"/>
          </div>
        </div>


        <a-button type="primary" style="height: 40px; margin-top: 25px; width: 300px">登录</a-button>
      </div>
      <a-divider />
      <div class="right-group">
        <span>
          <GithubOutlined  style="font-size: 20px; border: 1px solid #999" />
        </span>
        <span>
          <DingdingOutlined style="font-size: 20px; border: 1px solid #999" />
        </span>
        <span>
          <MobileOutlined style="font-size: 20px; border: 1px solid #999" />
        </span>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped lang="scss">
.login-wrapper {
  height: 100%;
  background: url("@/assets/bg/login-bg.png") no-repeat center/cover;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-card {
  box-sizing: border-box;
  width: 740px;
  height: 420px;

  display: flex;

  &__left {
    width: 370px;
    height: 100%;
    background-color: #BBE0FF;
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;

    .left-bg {
      height: 360px;
      background: url("@/assets/bg/login-container-bg.png") no-repeat center/cover;
    }

    .left-title {
      height: 18px;
      line-height: 18px;
      text-align: center;
      letter-spacing: 1.5px;
      font-weight: bold;
    }
  }

  &__right {
    width: 370px;
    height: 100%;
    padding: 18px;
    background-color: #fff;
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;

    .right-title {
      //margin-top: 35px;
      margin-top: 15px;
      height: 20px;
      line-height: 20px;
      text-align: center;
      letter-spacing: 1.5px;
      font-weight: bold;
    }

    .right-form {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .right-group {
      //height: 40px;
      height: 36px;
      //margin-top: 30px;
      display: flex;
      align-items: center;
      justify-content: space-around;

      span {
        width: 36px;
        height: 36px;
        display: flex;
        justify-content: center;
        align-content: center;
        border-radius: 50%;
      }
    }
  }
}

</style>
