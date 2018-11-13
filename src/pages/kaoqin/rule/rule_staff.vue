<template>
  <div class="rule-staff">
    <van-nav-bar
      :title="$route.meta.title"
      left-text="返回"
      left-arrow
      @click-left="$router.back()"
    >
      <template slot="right">
        <van-icon name="search" />
        <van-icon name="passed" />
      </template>
    </van-nav-bar>
  </div>
</template>
