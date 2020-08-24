<template>
  <div class="flex flex-column justify-between boss-status-controller">
    <div class="flex justify-around od-ct-controller">
      <div @click="$emit('toggle-od')" :class="{od: boss.isOverDrive}">OD</div>
      <div @click="$emit('toggle-ct')" :class="{ct: boss.isCTMax}">CT</div>
    </div>
    <div class="flex justify-between health-controller">
      <div @click="$emit('decrease', 5)">
        <svg class="icon" viewBox="0 0 24 24">
          <path fill="currentColor"
                d="M18.41,7.41L17,6L11,12L17,18L18.41,16.59L13.83,12L18.41,7.41M12.41,7.41L11,6L5,12L11,18L12.41,16.59L7.83,12L12.41,7.41Z"/>
        </svg>
      </div>
      <div @click="$emit('decrease', 1)">
        <svg class="icon" viewBox="0 0 24 24">
          <path fill="currentColor" d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"/>
        </svg>
      </div>
      <div @click="$emit('increase', 1)">
        <svg class="icon" viewBox="0 0 24 24">
          <path fill="currentColor" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/>
        </svg>
      </div>
      <div @click="$emit('increase', 5)">
        <svg class="icon" viewBox="0 0 24 24">
          <path fill="currentColor"
                d="M5.59,7.41L7,6L13,12L7,18L5.59,16.59L10.17,12L5.59,7.41M11.59,7.41L13,6L19,12L13,18L11.59,16.59L16.17,12L11.59,7.41Z"/>
        </svg>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    name: "BossStatusController",
    props: ['boss']
  })
</script>

<style scoped lang="scss">
  .boss-status-controller {
    height: 100%;

    .od-ct-controller {
      height: 40%;

      .od, .ct {
        color: red;
      }
    }

    .health-controller {
      height: 60%;
      text-align: center;

      .icon {
        height: 100%;
        width: 100%;
      }
    }
  }

</style>
