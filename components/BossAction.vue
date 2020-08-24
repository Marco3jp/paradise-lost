<template>
  <div class="flex flex-column justify-between boss-action">
    <div class="boss-action-detail">
      <h3>{{actionName}}</h3>
      <span>{{actionDescription}}</span>
    </div>
    <div class="flex justify-between boss-action-tools" v-if="false">
      <div>Coming Soon...</div>
      <div @click="$emit('checked-action')">はいっ！</div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {action} from "~/src/model/type";

  export default Vue.extend({
    name: "BossAction",
    props: ['action'],
    computed: {
      actionName: function () {
        return (this.action as action | undefined)?.name ?? '不明(未実装か不具合です)'
      },
      actionDescription: function () {
        return (this.action as action | undefined)?.description ?? '不明(未実装か不具合です)'
      }
    }
  })
</script>

<style scoped lang="scss">
  .boss-action{
    height: 100%;
  .boss-action-detail {
    height: 60%;
  }

  .boss-action-tools {
    height: 40%;
  }
  }

</style>
