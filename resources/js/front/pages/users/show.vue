<script setup lang="ts">
import _ from "lodash"
import Entry from "../../components/entry.vue"
import TopMenu from "../../layouts/users_top_menu.vue"
import cursor from "../../assets/icons/cursor.svg"
</script>

<template>
  <div class="mt-3">
    <TopMenu />
    <!-- User Card -->
    <div class="card shadow-sm mt-3">
      <div class="card-body">
        <div class="d-flex justify-content-between">
          <div class="wh-100 position-relative">
            <img class="rounded-circle wh-100" src="@/front/assets/img/avatars/300-1.jpg" alt="" />
            <div style="right: -5px; bottom: -5px; border: 3px solid white"
              class="badge py-0 px-1 bg-secondary rounded-pill position-absolute fs-07">
              24 мин
            </div>
            <svg style="top: 0; right: 0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
              class="text-success position-absolute" viewBox="0 0 16 16">
              <path
                d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708" />
            </svg>
          </div>
          <div class="d-flex justify-content-between flex-column flex-grow-1 ms-4">
            <div class="d-flex justify-content-between">
              <h4 class="mb-0">Анна Коновалова</h4>
              <div class="btn-group" role="group" aria-label="Basic outlined example">
                <button type="button" class="btn btn-sm btn-outline-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path
                      d="M14 19h-4a8 8 0 0 1 -8 -8v-5h4v5a4 4 0 0 0 4 4h0v-9h4v4.5l.03 0a4.531 4.531 0 0 0 3.97 -4.496h4l-.342 1.711a6.858 6.858 0 0 1 -3.658 4.789h0a5.34 5.34 0 0 1 3.566 4.111l.434 2.389h0h-4a4.531 4.531 0 0 0 -3.97 -4.496v4.5z" />
                  </svg>
                </button>
                <button type="button" class="btn btn-sm btn-outline-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
                  </svg>
                </button>
                <button class="btn btn-outline-primary btn-sm dropdown-toggle dropdown-wo-arrow" type="button"
                  data-bs-toggle="dropdown" aria-expanded="false">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                    <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                    <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                  </svg>
                </button>
                <ul class="dropdown-menu dropdown-menu-end shadow-sm">
                  <li>
                    <router-link class="dropdown-item" to="#">Action</router-link>
                  </li>
                  <li>
                    <router-link class="dropdown-item" to="#">Another action</router-link>
                  </li>
                  <li>
                    <router-link class="dropdown-item" to="#">Something else here</router-link>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <span class="text-muted">@konovanya</span>
            </div>
            <div class="d-flex justify-content-between">
              <button class="btn fw-300 btn-sm btn-primary mt-2">
                Подписаться
              </button>
              <div>
                Уровень 4 [
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path
                    d="M5.333 6l3.334 3.25l3.333 -3.25l3.333 3.25l3.334 -3.25l3.333 3.25l-3.333 3.25l-3.334 -3.25l-3.333 3.25l3.333 3.25l-3.333 3.25l-3.333 -3.25l3.333 -3.25l-3.333 -3.25l-3.334 3.25l-3.333 -3.25z" />
                </svg>
                Мировоззрение и духовность]
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- END User Card -->

    <!-- About -->
    <div class="card shadow-sm mt-3">
      <div class="card-body">
        <div class="d-flex justify-content-between">
          <div class="flex-grow-1">
            <div>В рейтинге 149</div>
            <div>На сайте 2 года и 4 месяца</div>
            <div>Возраст 29 лет</div>
            <div>Санкт-Петербург</div>
          </div>
          <div>
            <router-link to="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-bar-chart"
                viewBox="0 0 16 16">
                <path
                  d="M4 11H2v3h2zm5-4H7v7h2zm5-5v12h-2V2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1z" />
              </svg>
            </router-link>
          </div>
          <div class="ps-2">
            <router-link to="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-gear"
                viewBox="0 0 16 16">
                <path
                  d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0" />
                <path
                  d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z" />
              </svg>
            </router-link>
          </div>
        </div>
        <div class="mt-3">
          Красивые, заброшенные и необычные места. Только личный опыт и
          авторские фотографии. Лучший блогер в категории "Внутренний туризм".
          <div><router-link to="#">Подробнее</router-link></div>
        </div>

        <ul class="nav nav-tabs mt-3" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="specialist-tab" data-bs-toggle="tab"
              data-bs-target="#specialist-tab-pane" type="button" role="tab" aria-controls="specialist-tab-pane"
              aria-selected="true">
              Специалист
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="write-about-tab" data-bs-toggle="tab" data-bs-target="#write-about-tab-pane"
              type="button" role="tab" aria-controls="write-about-tab-pane" aria-selected="false">
              Пишу
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="read-about-tab" data-bs-toggle="tab" data-bs-target="#read-about-tab-pane"
              type="button" role="tab" aria-controls="read-about-tab-pane" aria-selected="false">
              Читаю
            </button>
          </li>
        </ul>
        <div class="tab-content">
          <div class="tab-pane fade show active ps-0" id="specialist-tab-pane" role="tabpanel"
            aria-labelledby="specialist-tab" tabindex="0">
            <div class="d-flex flex-wrap">
              <router-link class="ms-3" to="#">
                <img class="mb-1 me-1" :src="cursor" />Кулинария
              </router-link>
              <router-link class="ms-3" to="#">Медицина</router-link>
              <router-link class="ms-3" to="#">Вегетарианство</router-link>
              <router-link class="ms-3" to="#">Кошки</router-link>
              <router-link class="ms-3" to="#">ЗОЖ</router-link>
              <router-link class="ms-3" to="#">Животные</router-link>
              <router-link class="ms-3" to="#">Рисование</router-link>
              <router-link class="ms-3" to="#">Политика</router-link>
              <router-link class="ms-3" to="#">Изобретения</router-link>
              <router-link class="ms-3" to="#">Растения</router-link>
            </div>
          </div>
          <div class="tab-pane fade ps-0" id="write-about-tab-pane" role="tabpanel" aria-labelledby="write-about-tab"
            tabindex="1">
            <div class="d-flex flex-wrap">
              <router-link class="ms-3" to="#">Кошки</router-link>
              <router-link class="ms-3" to="#">ЗОЖ</router-link>
              <router-link class="ms-3" to="#">Животные</router-link>
              <router-link class="ms-3" to="#">Рисование</router-link>
              <router-link class="ms-3" to="#">Кулинария</router-link>
              <router-link class="ms-3" to="#">Медицина</router-link>
              <router-link class="ms-3" to="#">Вегетарианство</router-link>
              <router-link class="ms-3" to="#">Политика</router-link>
              <router-link class="ms-3" to="#">Изобретения</router-link>
              <router-link class="ms-3" to="#">Растения</router-link>
            </div>
          </div>
          <div class="tab-pane fade ps-0" id="read-about-tab-pane" role="tabpanel" aria-labelledby="read-about-tab"
            tabindex="2">
            <div class="d-flex flex-wrap">
              <router-link class="ms-3" to="#">Животные</router-link>
              <router-link class="ms-3" to="#">Рисование</router-link>
              <router-link class="ms-3" to="#">Политика</router-link>
              <router-link class="ms-3" to="#">Изобретения</router-link>
              <router-link class="ms-3" to="#">Растения</router-link>
              <router-link class="ms-3" to="#">Кулинария</router-link>
              <router-link class="ms-3" to="#">Медицина</router-link>
              <router-link class="ms-3" to="#">Вегетарианство</router-link>
              <router-link class="ms-3" to="#">Кошки</router-link>
              <router-link class="ms-3" to="#">ЗОЖ</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- END About -->

    <div class="mt-4">
      <h5 class="mb-3">Закреплённое</h5>

      <Entry v-for="_n in 5" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
