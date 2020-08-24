<template>
  <div class="flex flex-column justify-between boss-status">
    <div><span>{{boss.name}}</span></div>
    <div :class="{od: boss.isOverDrive}"><span>OD</span></div>
    <div :class="{ct: boss.isCTMax}"><span>CT</span></div>
    <div><span>{{boss.health}}%</span></div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    name: "BossStatus",
    props: ['boss']
  })
</script>

<style scoped lang="scss">
  .boss-status {
    text-align: center;
    border-bottom: 1px solid black;

    & > div {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .od, .ct {
      color: red;
    }
  }
</style>
