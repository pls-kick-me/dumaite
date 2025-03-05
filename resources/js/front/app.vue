<script setup>
import { computed } from "vue"
import { useRoute } from "vue-router"
import MyHeader from "./layouts/header.vue"
import leftCol from "./layouts/left_col.vue"
import rightCol from "./layouts/right_col.vue"

const route = useRoute()

</script>

<template>
  <div class="body-container">
    <div id="body" class="body">
      <div>
        <my-header />
        <div class="container-xxl layout-container-3-141">
          <div class="mt-3">
            <leftCol />
          </div>
          <main>
            <router-view></router-view>
          </main>
          <rightCol />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
