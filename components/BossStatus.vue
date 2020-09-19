<template>
  <div class="flex flex-column justify-between boss-status">
    <div class="boss-name"><span>{{boss.name}}</span></div>
    <div><span>{{boss.health}}%</span></div>
    <div @click="toggleOD" :class="{od: boss.isOverDrive}"><span>OD</span></div>
    <div @click="toggleCT" :class="{ct: boss.isCTMax}"><span>CT</span></div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    name: "BossStatus",
    props: ['boss'],
    methods: {
      toggleOD() {
        this.boss.isOverDrive = !this.boss.isOverDrive;
      },
      toggleCT() {
        this.boss.isCTMax = !this.boss.isCTMax;
      }
    }
  })
</script>

<style scoped lang="scss">
  .boss-status {
    text-align: center;

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
