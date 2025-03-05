<script setup>
import _ from "lodash"
import Entry from "../components/entry.vue"
</script>

<style lang="scss" scoped></style>

<template>
  <Entry v-for="_n in 5" />
</template>
