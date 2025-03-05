<script setup lang="ts">
import lightning from "../assets/icons/lightning-charge.svg"
import feather from "../assets/icons/feather.svg"
import feather2 from "../assets/icons/feather2.svg"
import person from "../assets/icons/person.svg"
import cursor from "../assets/icons/cursor.svg"
import universalAccessCircle from "../assets/icons/universal-access-circle.svg"
import atom from "../assets/icons/tabler/atom.vue"
</script>

<template>
  <div class="d-flex justify-content-between">
    <div class="wh-100 position-relative">
      <img class="rounded-circle wh-100" src="@/front/assets/img/avatars/300-1.jpg" alt="" />
      <div class="badge py-0 px-1 bg-secondary rounded-pill position-absolute fs-07"
        style="right: -5px; bottom: -5px; border: 3px solid white">
        24 мин
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
        class="text-success position-absolute" viewBox="0 0 16 16" style="top: 0px; right: 0px">
        <path
          d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708">
        </path>
      </svg>
    </div>

    <div class="d-flex justify-content-between flex-column flex-grow-1 ms-4">
      <div class="d-flex justify-content-between">
        <h4 class="mb-2">
          <router-link :to="{ name: 'users_show', params: { id: 1 } }">Анна Коновалова</router-link>
        </h4>
      </div>
      <div class="hstack gap-4">
        <div>
          <img class="wh-22" :src="lightning" />
          91%
        </div>
        <div>
          <img class="wh-22" :src="feather2" />
          632
        </div>
        <div>
          <img class="wh-22" :src="person" />
          3.4к
        </div>
        <div>
          <img class="wh-22" :src="universalAccessCircle" />
          17
        </div>
        <div>
          154
          <img class="wh-22" :src="feather" />
          32
        </div>
      </div>
      <div class="hstack gap-2 mb-2 mt-3">
        <div>
          <span class="support-label silver rounded-pill">Уровень 3 в категории
            <atom :stroke_width="1.6" />
            <span class="inner ms-1">x2</span>
          </span>
        </div>
        <div>
          <span class="support-label thankful rounded-pill">Я подписан</span>
        </div>
        <div>
          <span class="support-label question rounded-pill">В моём кругу доверия</span>
        </div>
      </div>
      <div class="hstack gap-3">
        <div><img class="mb-1 me-1" :src="cursor" />Политика</div>
        <div><img class="mb-1 me-1" :src="cursor" />Животные</div>
        <div><img class="mb-1 me-1" :src="cursor" />Питомцы</div>
        <div><img class="mb-1 me-1" :src="cursor" />Кино</div>
        <div><img class="mb-1 me-1" :src="cursor" />Наука</div>
      </div>
      <div class="d-flex justify-content-between"></div>
    </div>

    <div>
      <div class="vstack gap-1">
        <div style="width: 50px; height: 4px" class="progress" role="progressbar" aria-label="Example with label"
          aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
          <div class="progress-bar bg-success" style="width: 85%"></div>
        </div>
        <h5 class="mb-0">95%</h5>
        <div>2.1к</div>
      </div>
    </div>
  </div>
</template>
