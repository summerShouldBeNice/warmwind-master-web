<script setup>
import { ref, onMounted, computed } from 'vue'
import { GithubOutlined, DingdingOutlined, MobileOutlined, UserOutlined } from '@ant-design/icons-vue'
import { getPublicCaptcha } from "@/api/public.js";

const captchaBase64 = ref()
// 是否是密码登录
const isPasswordLogin = ref(true)
// 登录表单
const loginForm = ref({
  username: "",
  password: "",
  phone: "",
  captchaKey: "",
  captcha: "",
  phoneCaptcha: "",
  loginType: 1,
})

const switchLoginIcon = computed(() => {
  return isPasswordLogin.value? MobileOutlined : UserOutlined
})

const switchLoginTip = computed(() => {
  return isPasswordLogin.value? '手机号登录' : '账号密码登录'
})

onMounted(() => {
  // 获取验证码
  getPublicCaptcha().then(res => {
    captchaBase64.value = res.base64
  })
})

// 改变登录方式
function changeLoginType() {
  isPasswordLogin.value = !isPasswordLogin.value
}

// 获取验证码
function getCaptcha() {

}

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

const onFinish = values => {
  console.log('Success:', values);
};
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
      <a-form :model="loginForm" class="right-form">

        <a-form-item class="form-item" v-if="isPasswordLogin" name="username">
          <a-input v-model:value="loginForm.username" placeholder="请输入用户名" class="form-input"/>
        </a-form-item>

        <a-form-item class="form-item" v-if="!isPasswordLogin" name="phone">
          <a-input v-model:value="loginForm.phone" placeholder="请输入手机号" class="form-input"/>
        </a-form-item>

        <a-form-item class="form-item" v-if="isPasswordLogin" name="password">
          <a-input-password v-model:value="loginForm.password" placeholder="请输入密码" class="form-input"/>
        </a-form-item>

        <a-form-item class="form-item">
          <div class="form-item captcha-wrapper">
            <a-input v-model:value="loginForm.captcha" placeholder="请输入验证码" class="form-input" style="width: 160px"/>
            <div class="captcha-wrapper__div">
              <img v-if="captchaBase64" :src="captchaBase64" alt="" class="captcha-img" />
            </div>
          </div>
        </a-form-item>

        <a-form-item class="form-item" v-if="!isPasswordLogin">
          <a-input-group compact class="form-item"  v-if="!isPasswordLogin">
            <a-input v-model:value="loginForm.phoneCaptcha" style="width: 200px; height: 40px" />
            <a-button type="primary" style="width: 100px; height: 40px">发送验证码</a-button>
          </a-input-group>
        </a-form-item>

        <a-button type="primary" style="height: 40px;  width: 300px">登录</a-button>
      </a-form>

      <a-divider style="margin: 15px 0px"/>

      <div class="right-group">
        <span title="Github授权登录">
          <GithubOutlined class="form-icon" />
        </span>
        <span title="钉钉授权登录">
          <DingdingOutlined class="form-icon" />
        </span>
        <span :title="switchLoginTip">
          <component :is="switchLoginIcon" class="form-icon" @click="changeLoginType"/>
        </span>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped lang="scss">
$formItemWidth: 300px;
$inputHeight: 40px;

.form-item {
  width: $formItemWidth;
}
.form-input {
  height: $inputHeight;
}

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
    padding: 15px;
    background-color: #fff;
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;

    .right-title {
      margin-top: 15px;
      height: 20px;
      line-height: 20px;
      text-align: center;
      letter-spacing: 1.5px;
      font-weight: bold;
    }

    .right-form {
      margin-top: 25px;
      height: 260px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
    }

    .right-group {
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: space-around;

      span {
        width: 30px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-content: center;
        border-radius: 50%;
      }
    }
  }
}

.captcha-wrapper {
  display: flex;
  justify-content: space-between;

  &__input {
    width: 160px;
    height: 40px
  }

  &__div {
    width: 120px;
    height: 40px;
    background-color:#fff;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    border-radius: 6px
  }
  .captcha-img {
    width: 118px;
    height: 38px;
    border-radius: 6px
  }

}


.form-icon {
  font-size: 20px;
  border: 1px solid #999
}

</style>
