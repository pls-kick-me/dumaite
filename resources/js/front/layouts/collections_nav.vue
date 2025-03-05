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
            :to="{ name: 'recommendations' }"
            :class="{ active: ['recommendations'].includes(route.name as string) }"
            >Рекомендации</router-link
          >
          <router-link
            class="nav-link"
            :to="{ name: 'new' }"
            :class="{ active: ['new'].includes(route.name as string) }"
            >Новое</router-link
          >
          <router-link
            class="nav-link"
            :to="{ name: 'useful' }"
            :class="{ active: ['useful'].includes(route.name as string) }"
            >Полезное</router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>
