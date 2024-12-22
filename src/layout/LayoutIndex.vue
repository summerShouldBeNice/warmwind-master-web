<script setup>
import { ref } from 'vue';
import { MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined } from '@ant-design/icons-vue'
const selectedKeys2 = ref(['1']);
const openKeys = ref(['sub1']);
const preOpenKeys = ref(['sub1']);


const appName = import.meta.env.VITE_APP_NAME;

/**
 * 侧边栏缩进
 * @type {Ref<UnwrapRef<boolean>, UnwrapRef<boolean> | boolean>}
 */
const collapsed = ref(false);

/**
 * 改变侧边栏
 */
function toggleCollapsed() {
  collapsed.value = !collapsed.value;
  openKeys.value = collapsed.value ? [] : preOpenKeys.value;
}
</script>

<template>
  <a-layout class="layout">
    <a-layout-sider width="280" class="layout__sider" :collapsed="collapsed">
      <div class="layout__logo" v-if="!collapsed">
        <a-row :gutter="[8,16]" justify="center" class="layout__logo__inner">
          <a-col :span="5">
            <img
                :width="45"
                src="/logo.png"
            />
          </a-col>
          <a-col :span="14">
            {{ appName }}
          </a-col>
          <a-col :span="5">
            <a-button type="link" style="margin-bottom: 16px" @click="toggleCollapsed">
              <MenuFoldOutlined style="font-size: 20px"/>
            </a-button>
          </a-col>
        </a-row>
      </div>
      <a-menu
          v-model:selectedKeys="selectedKeys2"
          v-model:openKeys="openKeys"
          mode="inline"
          :inline-collapsed="collapsed"
      >
        <a-sub-menu @click="toggleCollapsed" v-if="collapsed">
          <template #title>
                <span>
                  <MenuUnfoldOutlined style="font-size: 20px"/>
                </span>
          </template>
        </a-sub-menu>
        <a-sub-menu key="sub1">
          <template #title>
                <span>
                  <user-outlined />
                  <span>生活</span>
                </span>
          </template>
          <a-menu-item key="1">相册管理</a-menu-item>
          <a-menu-item key="2">记事线管理</a-menu-item>
          <a-menu-item key="3">preview</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <template #title>
                <span>
                  <laptop-outlined />
                  <span>我们</span>
                </span>
          </template>
          <a-menu-item key="5">option5</a-menu-item>
          <a-menu-item key="6">option6</a-menu-item>
          <a-menu-item key="7">option7</a-menu-item>
          <a-menu-item key="8">option8</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub3">
          <template #title>
                <span>
                  <notification-outlined />
                  <span>待办</span>
                </span>
          </template>
          <a-menu-item key="9">option9</a-menu-item>
          <a-menu-item key="10">option10</a-menu-item>
          <a-menu-item key="11">option11</a-menu-item>
          <a-menu-item key="12">option12</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub4">
          <template #title>
                <span>
                  <notification-outlined />
                  <span>ces</span>
                </span>
          </template>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout class="layout__content-wrapper">
      <a-layout-content class="layout__content">
        <div class="layout__content-inner">
          <MenuFoldOutlined />
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<style lang="scss" scoped>
.layout {
  height: 100vh;
  display: flex;

  &__sider {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    height: 100%;
    background-color: #fff;
    border-right: 1px solid #e4e4e4;
    overflow-y: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  &__logo {
    height: 70px;
    padding: 15px;

    &__inner {
      height: 100%;
      line-height: 45px;
      text-align: center;
      font-weight: bold;
      letter-spacing: 1px;
      margin: auto;
    }
  }

  &__menu {
    // 如果需要特定的菜单样式
  }

  &__content-wrapper {
    margin-left: 280px;
    flex: 1;
    overflow-y: auto;
  }

  &__content {
    min-height: 100%;
  }

  &__content-inner {
    padding: 24px;
  }
}

.ant-menu-item-selected {
  background-color: #1890ff !important; // 修改背景色
  color: white !important; // 修改文字颜色
}
</style>
