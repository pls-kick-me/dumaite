<template>
  <div class="card mt-3 border-0">
    <div class="card-body py-3 pe-3 ps-0">
      <div class="d-flex justify-content-between gap-3" style="">
        <div class="flex-grow-0 d-flex justify-content-center align-items-center rounded-end-3"
          style="flex-basis: 50%; overflow: hidden; max-height: 220px">
          <img src="@/front/assets/img/tmp/img-1.jpg" class="w-100 flex-shrink-0"
            style="min-width: 100%; min-height: 100%" />
        </div>
        <div class="flex-grow-0 d-flex flex-column justify-content-between" style="flex-basis: 50%">
          <div>
            <h5 class="card-title">
              <router-link to="/entries/1">entry.name</router-link>
            </h5>
          </div>
          <div>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in. is a wider card with supporting text below as a natural
              lead-in. is a wider card with supporting text below as a natural
              lead-in.
            </p>
          </div>
          <div>
            <div class="d-flex justify-content-between mt-2">
              <div>
                <div class="d-flex">
                  <div class="pe-3">
                    <img class="rounded-circle wh-2" src="@/front/assets/img/avatars/300-7.jpg" alt="" />
                  </div>
                  <div>
                    <router-link to="/users/1">Имя пользователя</router-link>
                  </div>
                </div>
              </div>
              <div>
                <span class="text-muted">1 час назад</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="hstack gap-3 justify-content-between">
        <div class="ms-3 mt-3 hstack gap-4 align-items-center">
          <div class="d-flex align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="me-1"
              viewBox="0 0 16 16">
              <path
                d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
            </svg>
            <span class="lh-1">79%</span>
          </div>
          <div class="d-flex align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="me-1"
              viewBox="0 0 16 16">
              <path
                d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
              <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
            </svg>
            <span class="lh-1">84</span>
          </div>
          <div class="d-flex align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="me-1"
              viewBox="0 0 16 16">
              <path
                d="M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105" />
            </svg>
            <span class="lh-1">0</span>
          </div>
        </div>
        <div class="hstack gap-2 align-items-center">
          <div>Высоко оценили</div>
          <div>
            <span class="badge bg-secondary rounded-pill vam lh-6">128</span>
          </div>
          <div>
            <div class="dropdown">
              <router-link class="dropdown-toggle dropdown-wo-arrow" to="#" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                  class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                  <path
                    d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                </svg>
              </router-link>

              <ul class="dropdown-menu dropdown-menu-end shadow-sm">
                <li>
                  <router-link class="dropdown-item" to="/entries/1/edit">Редактировать</router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
