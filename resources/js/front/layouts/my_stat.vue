<script setup lang="ts">
// const props = defineProps<{
//   title: string
// }>()
</script>

<template>
  <div class="card shadow-sm">
    <div class="card-body">
      <!-- activityModal -->
      <div
        class="modal fade"
        id="activityModal"
        tabindex="-1"
        aria-labelledby="activityModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="activityModalLabel">
                Активность
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <h6>
                Шкала процентов, которая отражает уровень активности
                пользователя на сайте.
              </h6>
              <h6 class="text-muted mb-0">
                Регулярное посещение сайта и совершение действий повышает
                уровень активности. Длительное отсутствие - снижает.
              </h6>
            </div>
            <div class="modal-footer justify-content-start">
              <a href="#">Подробнее</a>
              /
              <a href="#">Статистика</a>
            </div>
          </div>
        </div>
      </div>

      <!-- knowledgesModal -->
      <div
        class="modal fade"
        id="knowledgesModal"
        tabindex="-1"
        aria-labelledby="knowledgesModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="knowledgesModalLabel">
                Все знания
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <h6>
                Баллы знаний начисляются по каждой категории знаний отдельно.
              </h6>
              <div class="hstack gap-3 justify-content-between">
                <div>
                  <span class="text-muted">Сумма всех баллов</span>
                </div>
                <div><span class="fw-bold fs-13">203</span></div>
              </div>

              <div class="hstack gap-3 justify-content-between">
                <div>
                  <span class="text-muted">Здоровье и среда обитания</span>
                </div>
                <div><span class="fw-bold fs-13">28</span></div>
              </div>

              <div class="hstack gap-3 justify-content-between">
                <div>
                  <span class="text-muted">Семья и отношения</span>
                </div>
                <div><span class="fw-bold fs-13">51</span></div>
              </div>

              <div class="hstack gap-3 justify-content-between">
                <div>
                  <span class="text-muted">Экономика и труд</span>
                </div>
                <div><span class="fw-bold fs-13">12</span></div>
              </div>

              <div class="hstack gap-3 justify-content-between">
                <div>
                  <span class="text-muted">Политика и общество</span>
                </div>
                <div><span class="fw-bold fs-13">12</span></div>
              </div>

              <div class="hstack gap-3 justify-content-between">
                <div>
                  <span class="text-muted">Наука и технологии</span>
                </div>
                <div><span class="fw-bold fs-13">12</span></div>
              </div>

              <div class="hstack gap-3 justify-content-between">
                <div>
                  <span class="text-muted">Культура и искусство</span>
                </div>
                <div><span class="fw-bold fs-13">12</span></div>
              </div>

              <div class="hstack gap-3 justify-content-between">
                <div>
                  <span class="text-muted">Прошлое и будущее</span>
                </div>
                <div><span class="fw-bold fs-13">12</span></div>
              </div>

              <div class="hstack gap-3 justify-content-between">
                <div>
                  <span class="text-muted">Мировоззрение и духовность</span>
                </div>
                <div><span class="fw-bold fs-13">12</span></div>
              </div>
            </div>
            <div class="modal-footer justify-content-start">
              <a href="#">Подробнее</a>
              /
              <a href="#">Статистика</a>
            </div>
          </div>
        </div>
      </div>

      <!-- subscribersModal -->
      <div
        class="modal fade"
        id="subscribersModal"
        tabindex="-1"
        aria-labelledby="subscribersModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="subscribersModalLabel">
                Подписчики
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <h6>
                Баллы знаний начисляются по каждой категории знаний отдельно.
              </h6>
              <div class="hstack gap-3 justify-content-between">
                <div>
                  <span class="text-muted">Сумма всех баллов</span>
                </div>
                <div><span class="fw-bold fs-13">203</span></div>
              </div>

              <div class="hstack gap-3 justify-content-between">
                <div>
                  <span class="text-muted">Здоровье и среда обитания</span>
                </div>
                <div><span class="fw-bold fs-13">28</span></div>
              </div>

              <div class="hstack gap-3 justify-content-between">
                <div>
                  <span class="text-muted">Семья и отношения</span>
                </div>
                <div><span class="fw-bold fs-13">51</span></div>
              </div>

              <div class="hstack gap-3 justify-content-between">
                <div>
                  <span class="text-muted">Экономика и труд</span>
                </div>
                <div><span class="fw-bold fs-13">12</span></div>
              </div>

              <div class="hstack gap-3 justify-content-between">
                <div>
                  <span class="text-muted">Политика и общество</span>
                </div>
                <div><span class="fw-bold fs-13">12</span></div>
              </div>

              <div class="hstack gap-3 justify-content-between">
                <div>
                  <span class="text-muted">Наука и технологии</span>
                </div>
                <div><span class="fw-bold fs-13">12</span></div>
              </div>

              <div class="hstack gap-3 justify-content-between">
                <div>
                  <span class="text-muted">Культура и искусство</span>
                </div>
                <div><span class="fw-bold fs-13">12</span></div>
              </div>

              <div class="hstack gap-3 justify-content-between">
                <div>
                  <span class="text-muted">Прошлое и будущее</span>
                </div>
                <div><span class="fw-bold fs-13">12</span></div>
              </div>

              <div class="hstack gap-3 justify-content-between">
                <div>
                  <span class="text-muted">Мировоззрение и духовность</span>
                </div>
                <div><span class="fw-bold fs-13">12</span></div>
              </div>
            </div>
            <div class="modal-footer justify-content-start">
              <a href="#">Подробнее</a>
              /
              <a href="#">Статистика</a>
            </div>
          </div>
        </div>
      </div>

      <!-- entriesModal -->
      <div
        class="modal fade"
        id="entriesModal"
        tabindex="-1"
        aria-labelledby="entriesModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="entriesModalLabel">Записи</h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <h6>Описание записей.</h6>
              <h6 class="text-muted mb-0">
                Описание цифр. 123 - всего записей. 17 - сегодня. 58% - качество
                записей.
              </h6>
            </div>
            <div class="modal-footer justify-content-start">
              <a href="#">Подробнее</a>
              /
              <a href="#">Статистика</a>
            </div>
          </div>
        </div>
      </div>

      <!-- commentsModal -->
      <div
        class="modal fade"
        id="commentsModal"
        tabindex="-1"
        aria-labelledby="commentsModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="commentsModalLabel">
                Комментарии
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <h6>Описание комментариев.</h6>
              <h6 class="text-muted mb-0">
                Описание цифр. 123 - всего комментариев. 72% - качество
                комментариев.
              </h6>
            </div>
            <div class="modal-footer justify-content-start">
              <a href="#">Подробнее</a>
              /
              <a href="#">Статистика</a>
            </div>
          </div>
        </div>
      </div>

      <div class="hstack gap-3 justify-content-between">
        <div>
          <span
            class="has-popover"
            data-bs-toggle="modal"
            data-bs-target="#activityModal"
            >Активность</span
          >
        </div>
        <div>79%</div>
      </div>
      <div class="hstack gap-3 justify-content-between">
        <div>
          <span
            class="has-popover"
            data-bs-toggle="modal"
            data-bs-target="#knowledgesModal"
            >Все знания</span
          >
        </div>
        <div>1.4к</div>
      </div>
      <div class="hstack gap-3 justify-content-between">
        <div>
          <span
            class="has-popover"
            data-bs-toggle="modal"
            data-bs-target="#subscribersModal"
            >Подписчики</span
          >
        </div>
        <div>15к</div>
      </div>
      <div class="hstack gap-3 justify-content-between">
        <div>
          <span
            class="has-popover"
            data-bs-toggle="modal"
            data-bs-target="#entriesModal"
          >
            Записи</span
          >
        </div>
        <div class="ws-nw">123 / 17 / 58%</div>
      </div>
      <div class="hstack gap-3 justify-content-between">
        <div>
          <span
            class="has-popover"
            data-bs-toggle="modal"
            data-bs-target="#commentsModal"
            >Комментарии</span
          >
        </div>
        <div class="ws-nw">1.2к / 72%</div>
      </div>
    </div>
  </div>
</template>
