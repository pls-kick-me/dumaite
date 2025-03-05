<script setup></script>

<template>
  <header class="py-3 bg-light">
    <div class="container-xxl">
      <div class="layout-container-3-141 w-100">
        <div class="align-items-center d-flex">
          <router-link class="navbar-brand" to="/">Думайте</router-link>
        </div>
        <main class="">
          <form class="d-flex me-auto" role="search">
            <input style="max-width: 400px; background-color: #e3e3e3" class="form-control" type="search"
              placeholder="Поиск" aria-label="Search" />
          </form>
        </main>
        <div class="d-flex justify-content-end align-items-center">
          <ul class="nav align-items-center justify-content-end">
            <li class="nav-item me-4">
              <a class="nav-link p-0" aria-current="page" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="text-success"
                  viewBox="0 0 16 16">
                  <animate attributeName="opacity" dur="1.2s" values="0;1;0" repeatCount="indefinite" begin="0.1" />
                  <path
                    d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6" />
                </svg>
              </a>
            </li>
            <li class="nav-item dropdown me-4">
              <router-link class="nav-link p-0 border-0" to="/entries/create">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                  class="bi bi-plus-square" viewBox="0 0 16 16">
                  <path
                    d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                  <path
                    d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                </svg>
              </router-link>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle dropdown-wo-arrow p-0" href="#" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                <img class="rounded-circle wh-2" src="@/front/assets/img/avatars/blank.png" alt="" />
              </a>
              <ul class="dropdown-menu dropdown-menu-end border-0 shadow-sm">
                <li>
                  <router-link to="/profile" class="dropdown-item">Профиль</router-link>
                </li>
                <li>
                  <router-link to="/profile/entries" class="dropdown-item">Записи</router-link>
                </li>
                <li>
                  <router-link to="/profile/comments" class="dropdown-item">Комментарии</router-link>
                </li>
                <li>
                  <router-link to="/profile/favourite" class="dropdown-item">Избранное</router-link>
                </li>
                <li>
                  <router-link to="/profile/stat" class="dropdown-item">Статистика</router-link>
                </li>
                <li>
                  <router-link to="/settings" class="dropdown-item">Настройки</router-link>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a href="#" class="dropdown-item" onclick="document.forms['logout-form-id'].submit();">Выйти</a>
                  <form id="logout-form-id" action="/auth/logout" method="post"></form>
                </li>
              </ul>
            </li>
          </ul>
          <!-- <router-link class="" aria-current="page" to="/login">
            Войти
          </router-link>
          <router-link class="ms-3" aria-current="page" to="/register">
            Регистрация
          </router-link> -->
        </div>
      </div>
    </div>
  </header>
</template>
