<script setup lang="ts">
import { useRoute } from "vue-router"

const route = useRoute()
</script>

<template>
  <ul class="nav flex-column nav-pills left-nav">
    <li class="nav-item">
      <router-link
        class="nav-link"
        :class="{ active: route.name === 'feed' }"
        aria-current="page"
        :to="{ name: 'feed' }"
        >Лента</router-link
      >
    </li>
    <li class="nav-item">
      <router-link
        class="nav-link"
        :to="{ name: 'recommendations' }"
        :class="{ active: ['recommendations', 'new', 'useful'].includes(route.name as string) }"
        >Подборки</router-link
      >
    </li>
    <li class="nav-item">
      <router-link
        class="nav-link"
        :class="{ active: ['users_friends', 'users_trust', 'users_oneminded', 'users_subscribers', 'users_subscriptions', 'users_show'].includes(route.name as string) }"
        :to="{ name: 'users_friends' }"
        >Пользователи</router-link
      >
    </li>
    <li class="nav-item">
      <router-link
        class="nav-link"
        :class="{ active: ['support_faq', 'support', 'support_create'].includes(route.name as string) }"
        :to="{ name: 'support_faq' }"
        >Поддержка</router-link
      >
    </li>
  </ul>
</template>

<style lang="scss">
.left-nav {
  margin-left: -1rem;
  * {
    font-weight: 500 !important;
  }
}
</style>
