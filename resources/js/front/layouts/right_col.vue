<script setup lang="ts">
import { useRoute } from "vue-router"
import usersNav from "./users_nav.vue"
import collectionsNav from "./collections_nav.vue"
import supportNav from "./support_nav.vue"
import Faces4 from "./faces4.vue"
import myStat from "./my_stat.vue"

const route = useRoute()
</script>

<template>
  <div class="mt-3 right-nav">
    <!-- USERS -->
    <usersNav v-if="
      [
        'users_friends',
        'users_trust',
        'users_oneminded',
        'users_subscriptions',
        'users_subscribers',
      ].includes(route.name as string)
    " />

    <!-- MAIN -->

    <myStat v-if="[
      'feed',
      'users_show',
    ].includes(route.name as string)" />

    <faces4 v-if="route.name === 'users_show'" title="Круг доверия" />
    <faces4 v-if="route.name === 'users_show'" title="Общие подписки 5" />
    <faces4 v-if="route.name === 'users_show'" title="Подписки 125" />
    <faces4 v-if="route.name === 'users_show'" title="Пришли от Анны" />

    <!-- COLLECTIONS -->

    <collectionsNav v-if="
      [
        'recommendations',
        'new',
        'useful',
      ].includes(route.name as string)
    " />

    <!-- SUPPORT -->

    <supportNav v-if="
      [
        'support',
        'support_faq',
        'support_create',
      ].includes(route.name as string)
    " />
  </div>
</template>
