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
            :to="{ name: 'support_faq' }"
            :class="{ active: ['support_faq'].includes(route.name as string) }"
            >ЧаВо</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link"
            :to="{ name: 'support' }"
            :class="{ active: ['support'].includes(route.name as string) }"
            >Поддержка</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link"
            :to="{ name: 'support_create' }"
            :class="{ active: ['support_create'].includes(route.name as string) }"
            >Создать вопрос</router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>
