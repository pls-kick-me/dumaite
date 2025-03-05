<script setup lang="ts">
// const props = defineProps<{
//   title: string
// }>()
</script>

<template>
  <div class="card shadow-sm mt-3">
    <div class="card-body">
      <div class="hstack gap-3 align-items-start">
        <div class="v-stack">
          <div class="hstack gap-3">
            <div>
              <img
                class="rounded-circle wh-40"
                src="/src/assets/img/avatars/300-3.jpg"
                alt=""
              />
            </div>
            <div>Алёна</div>
          </div>
          <div class="hstack gap-3" style="margin-top: -12px">
            <div>
              <img
                style="border: 2px solid white"
                class="rounded-circle wh-40"
                src="/src/assets/img/avatars/300-4.jpg"
                alt=""
              />
            </div>
            <div>Алекснадра</div>
          </div>
        </div>
        <div>
          <div class="vstack gap-1 tac">
            <div
              style="width: 50px; height: 4px"
              class="progress"
              role="progressbar"
              aria-label="Example with label"
              aria-valuenow="85"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div class="progress-bar bg-success" style="width: 85%"></div>
            </div>
            <h5 class="mb-0">95%</h5>
            <div>2.1к</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
