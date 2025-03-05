<template>
  <!-- Меню  -->
  <ul class="nav nav-underline mt-2">
    <li class="nav-item">
      <router-link class="nav-link active" aria-current="page" to="#"
        >Профиль</router-link
      >
    </li>
    <li class="nav-item">
      <router-link class="nav-link" to="#">Записи</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" to="#">Комментарии</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" to="#">Избранное</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" to="#">Статистика</router-link>
    </li>
    <li class="nav-item dropdown">
      <router-link
        class="nav-link dropdown-toggle"
        data-bs-toggle="dropdown"
        to="#"
        role="button"
        aria-expanded="false"
        >Ещё</router-link
      >
      <ul class="dropdown-menu dropdown-menu-end shadow-sm">
        <li>
          <router-link class="dropdown-item" to="#">Статистика</router-link>
        </li>
        <li>
          <router-link class="dropdown-item" to="#">Another action</router-link>
        </li>
        <li>
          <router-link class="dropdown-item" to="#"
            >Something else here</router-link
          >
        </li>
        <li>
          <hr class="dropdown-divider" />
        </li>
        <li>
          <router-link class="dropdown-item" to="#">Separated link</router-link>
        </li>
      </ul>
    </li>
  </ul>
  <!-- Конец Меню  -->
</template>
