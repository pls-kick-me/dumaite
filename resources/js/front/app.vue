<script setup>
import { computed } from "vue"
import { useRoute } from "vue-router"

const route = useRoute()

</script>

<template>
  <div class="body-container">
    <div id="body" class="body">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped></style>
