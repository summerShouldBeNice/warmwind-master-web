<script setup>
import { ref } from 'vue'
const value1 = ref()
const value2 = ref()
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
        <a-input v-model:value="value1" placeholder="用户名" style="height: 40px; margin-top: 30px; width: 300px"/>
        <a-input v-model:value="value2" placeholder="密码" style="height: 40px; margin-top: 30px; width: 300px"/>
        <a-button type="primary" style="height: 40px; margin-top: 30px; width: 300px">登录</a-button>
      </div>
      <a-divider />
      <div class="right-group">

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
      margin-top: 35px;
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

    .right-btn-group {
      margin-top: 30px;
      display: flex;
      align-items: center;
    }
  }
}

</style>