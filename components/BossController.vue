<template>
  <div class="flex justify-between boss-controller">
    <div @click="$emit('target-boss', 'BlackWing')">羽</div>
    <div @click="$emit('checked-action')">
      <svg height="100%" viewBox="0 0 24 24">
        <path fill="currentColor" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/>
      </svg>
    </div>
    <div @click="$emit('target-boss', 'Lucilius')">ルシ</div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    name: "BossController"
  })
</script>

<style scoped lang="scss">
  .boss-controller {
    height: 100%;

    & > div {
      text-align: center;
      width: calc(100% / 3);
    }
  }
</style>
