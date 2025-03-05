<script setup lang="ts">
import _ from "lodash"
import Entry from "../../components/entry.vue"
</script>

<style lang="scss" scoped></style>

<template>
  <div class="card shadow-sm mt-3">
    <div class="card-body">
      <div class="hstack gap-3">
        <div class="btn-group" role="group" aria-label="Basic outlined example">
          <a
            href="/new"
            class="btn btn-outline-primary {% if request.GET.type == None %}active{% endif %}"
            >Всё</a
          >
          <a
            href="/new?type=video"
            class="btn btn-outline-primary {% if request.GET.type == 'video' %}active{% endif %}"
            >Видео</a
          >
          <a
            href="/new?type=articles"
            class="btn btn-outline-primary {% if request.GET.type == 'articles' %}active{% endif %}"
            >Статьи</a
          >
        </div>
        <div>
          <a
            href="#"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
            >Параметры поиска</a
          >
        </div>
      </div>

      <div class="collapse" id="collapseExample">
        <div class="mt-3">
          <h5>Качество записей</h5>

          <div class="mt-2">
            <input
              type="radio"
              class="btn-check"
              name="options-quality"
              id="option5"
              autocomplete="off"
              checked
            />
            <label class="btn" for="option5">Все</label>

            <input
              type="radio"
              class="btn-check"
              name="options-quality"
              id="option6"
              autocomplete="off"
            />
            <label class="btn" for="option6">От 20%</label>

            <input
              type="radio"
              class="btn-check"
              name="options-quality"
              id="option7"
              autocomplete="off"
            />
            <label class="btn" for="option7">От 40%</label>

            <input
              type="radio"
              class="btn-check"
              name="options-quality"
              id="option8"
              autocomplete="off"
            />
            <label class="btn" for="option8">От 60%</label>

            <input
              type="radio"
              class="btn-check"
              name="options-quality"
              id="option9"
              autocomplete="off"
            />
            <label class="btn" for="option9">От 80%</label>
          </div>
        </div>

        <div class="mt-3">
          <h5>Количество голосов</h5>

          <div class="mt-2">
            <input
              type="radio"
              class="btn-check"
              name="options-count"
              id="option10"
              autocomplete="off"
              checked
            />
            <label class="btn" for="option10">Любое</label>

            <input
              type="radio"
              class="btn-check"
              name="options-count"
              id="option11"
              autocomplete="off"
            />
            <label class="btn" for="option11">От 10</label>

            <input
              type="radio"
              class="btn-check"
              name="options-count"
              id="option12"
              autocomplete="off"
            />
            <label class="btn" for="option12">От 25</label>

            <input
              type="radio"
              class="btn-check"
              name="options-count"
              id="option13"
              autocomplete="off"
            />
            <label class="btn" for="option13">От 50</label>

            <input
              type="radio"
              class="btn-check"
              name="options-count"
              id="option14"
              autocomplete="off"
            />
            <label class="btn" for="option14">От 100</label>
          </div>
        </div>

        <button class="btn btn-primary mt-3">Применить</button>
      </div>
    </div>
  </div>

  <Entry v-for="_n in 5" />
</template>
