<template>
  <div class="flex justify-between boss-controller">
    <div @click="$emit('target-boss', 'BlackWing')" :class="{targeting: boss.name === 'BlackWing'}">羽</div>
    <div @click="onClickCheckedAction">
      <svg height="100%" viewBox="0 0 24 24" :class="{disabled: !isOnce}">
        <path fill="currentColor" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/>
      </svg>
    </div>
    <div @click="$emit('target-boss', 'Lucilius')" :class="{targeting: boss.name === 'Lucilius'}">ルシ</div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    name: "BossController",
    props: ['boss', 'isOnce'],
    methods: {
      onClickCheckedAction() {
        if (this.isOnce) {
          this.$emit('checked-action');
        }
      }
    }
  })
</script>

<style scoped lang="scss">
  .boss-controller {
    height: 100%;

    .disabled {
      color: rgba(189, 189, 189, 1);
      transform: scale(0.75);
    }

    & > div {
      text-align: center;
      width: calc(100% / 3);
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .targeting {
      font-size: 1.2rem;
      font-weight: bold;
    }
  }
</style>
