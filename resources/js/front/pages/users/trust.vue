<script setup lang="ts">
import _ from "lodash"
import user from "../../components/user.vue"
</script>

<template>
  <div class="card shadow-sm mt-3">
    <div class="card-body">
      <div v-for="_n in 5">
        <user />
        <hr />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
