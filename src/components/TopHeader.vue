<script setup>
import { UserOutlined } from '@ant-design/icons-vue'
</script>

<template>
  <a-row align="middle" class="header">
    <a-col :span="21"></a-col>
    <a-col :span="3" class="header__right">
      <a-row justify="space-around">
        <a-col :spam="8">
          <a-avatar :size="32">
            <UserOutlined/>
          </a-avatar>
        </a-col>
        <a-col :spam="8">
          <a-avatar :size="32">
            <UserOutlined/>
          </a-avatar>
        </a-col>
        <a-col :spam="8">
          <a-avatar :size="32">
            <UserOutlined/>
          </a-avatar>
        </a-col>
      </a-row>
    </a-col>
  </a-row>

</template>

<style scoped lang="scss">
.header {
  height: 70px;
  background-color: #fff;
}
</style>