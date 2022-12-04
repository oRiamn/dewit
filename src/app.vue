<script setup lang="ts">
import { useappStatusStore } from './stores/app_status'

const appStatus = useappStatusStore()
appStatus.sync()
</script>

<template>
  <div class="appContainer">
    <div class="appHeader">
      <div class="appLogo"> </div>
      <div class="userMenu"> {{ appStatus.isOnline ? 'On' : 'Off' }} Line </div>
    </div>
    <div class="appSubHeader">Sub-Header</div>
    <div class="appContent">
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
@import '@/assets/base.css';

.appContainer {
  height: var(--100vvh);
  max-height: var(--100vvh);
  min-height: var(--100vvh);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
}

.appContainer > * {
  border: 2px solid var(--vt-c-divider-light-1);
}

.appHeader {
  background-color: var(--color-background);
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.appContent {
  flex-grow: 1;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow: auto;
}

.appFooter {
  background-color: var(--color-background);
}

.appLogo {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.userMenu {
  color: var(--color-text);
  border: 1px solid var(--color-border);
  padding: 5px 10px;
}

.footerNav-items {
  display: flex;
  justify-content: space-between;
}

.footerNav-item {
  flex-grow: 1;
}

.footerNav-itemButton {
  display: block;
  padding: 10px;
  color: var(--color-text);
  text-align: center;
}

.footerNav-itemButton:hover,
.router-link-active {
  background-color: var(--color-border-hover);
}
</style>
