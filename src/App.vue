<template>
  <a-layout>
    <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
      <div class="logo" />
      <a-menu theme="dark" mode="horizontal" :style="{ lineHeight: '64px' }">
        <a-menu-item key="1">nav 1</a-menu-item>
        <a-menu-item key="2">nav 2</a-menu-item>
        <a-menu-item key="3">nav 3</a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content :style="{ padding: '0 50px', marginTop: '64px' }">
      <div class="container">
        <router-view></router-view>
      </div>
    </a-layout-content>

    <a-layout-footer style="text-align: center">Copyright © 2023 Octavio Corzo. All rights Reserved.</a-layout-footer>
  </a-layout>
</template>


<script setup>

</script>


<style></style>