<script setup lang="ts">
const props = defineProps<{
  title: string
}>()
</script>

<template>
  <div class="card shadow-sm mt-3">
    <div class="card-body">
      <h6 class="mb-3">{{ props.title }}</h6>
      <div class="d-flex justify-content-between gap-2">
        <div class="d-flex flex-column">
          <div class="ta-center">
            <router-link to="/users/2">
              <img class="rounded-circle wh-48" src="@/front/assets/img/avatars/300-1.jpg" alt="" />
            </router-link>
          </div>
          <div class="ta-center cut-text maxw-50">
            <span class="fs-07">
              <router-link to="/users/2">Марина</router-link>
            </span>
          </div>
        </div>
        <div class="d-flex flex-column">
          <div class="ta-center">
            <router-link to="/users/2">
              <img class="rounded-circle wh-48" src="@/front/assets/img/avatars/300-1.jpg" alt="" />
            </router-link>
          </div>
          <div class="ta-center cut-text maxw-50">
            <span class="fs-07">
              <router-link to="/users/2">Николай</router-link>
            </span>
          </div>
        </div>
        <div class="d-flex flex-column">
          <div class="ta-center">
            <router-link to="/users/2">
              <img class="rounded-circle wh-48" src="@/front/assets/img/avatars/300-1.jpg" alt="" />
            </router-link>
          </div>
          <div class="ta-center cut-text maxw-50">
            <span class="fs-07">
              <router-link to="/users/2">Длиннофамилийский</router-link>
            </span>
          </div>
        </div>
        <div class="d-flex flex-column">
          <div class="ta-center">
            <router-link to="/users/2">
              <img class="rounded-circle wh-48" src="@/front/assets/img/avatars/300-1.jpg" alt="" />
            </router-link>
          </div>
          <div class="ta-center cut-text maxw-50">
            <span class="fs-07">
              <router-link to="/users/2">Ян</router-link>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
