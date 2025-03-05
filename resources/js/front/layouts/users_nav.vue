<script setup lang="ts">
import { useRoute } from "vue-router"

// const props = defineProps<{
//   title: string
// }>()

const route = useRoute()
</script>

<template>
  <div class="card shadow-sm">
    <div class="card-body">
      <ul class="nav flex-column nav-pills">
        <li class="nav-item">
          <router-link
            class="nav-link"
            :to="{ name: 'users_friends' }"
            :class="{ active: ['users_friends'].includes(route.name as string) }"
            >Друзья</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link"
            :to="{ name: 'users_trust' }"
            :class="{ active: ['users_trust'].includes(route.name as string) }"
            >Круг доверия</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link"
            :to="{ name: 'users_oneminded' }"
            :class="{ active: ['users_oneminded'].includes(route.name as string) }"
            >Единомышленники</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link"
            :to="{ name: 'users_subscriptions' }"
            :class="{ active: ['users_subscriptions'].includes(route.name as string) }"
            >Я подписан(а)</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link"
            :to="{ name: 'users_subscribers' }"
            :class="{ active: ['users_subscribers'].includes(route.name as string) }"
            >Подписчики</router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>
