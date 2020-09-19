<template>
  <div class="container flex flex-column">
    <div class="flex justify-between status">
      <boss-status :boss="battleContext.boss.BlackWing"></boss-status>
      <boss-status :boss="battleContext.boss.Lucilius"></boss-status>
    </div>
    <div class="action">
      <boss-action :action="expectedAction"></boss-action>
    </div>
    <div class="status-controller">
      <boss-status-controller :boss="currentBoss" @toggle-od="onToggleOD" @toggle-ct="onToggleCT" @increase="onIncrease"
                              @decrease="onDecrease"></boss-status-controller>
    </div>
    <div class="controller">
      <boss-controller :boss="currentBoss" :is-once="isOnce" @target-boss="onTargetBoss"
                       @checked-action="onCheckedAction"></boss-controller>
    </div>

    <div class="checked-modal" v-show="checkActionSafety">
      <h2>ちゃんと見た？</h2>
      <div class="flex justify-around">
        <div @click="onTrulyCheckedAction">はいっ！</div>
        <div @click="onMistakeCheckedAction">押し間違えた</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import {BattleContext} from "~/src/class/BattleContext";
  import BossStatus from "~/components/BossStatus.vue";
  import BossAction from "~/components/BossAction.vue";
  import BossStatusController from "~/components/BossStatusController.vue";
  import BossController from "~/components/BossController.vue";
  import {checkAction, recordAction} from "~/src/checkAction";
  import {action} from "~/src/model/type";
  import {bossStatus, isSkill} from "~/src/model/battleContext";
  import {skill} from "~/src/model/skill";

  export default Vue.extend({
    components: {BossStatus, BossAction, BossStatusController, BossController},
    data() {
      return {
        battleContext: new BattleContext(),
        currentBossName: 'Lucilius',
        checkActionSafety: false,
      }
    },
    methods: {
      onTargetBoss(evt: 'Lucilius' | 'BlackWing') {
        this.currentBossName = evt;
      },
      onCheckedAction() {
        this.checkActionSafety = true;
      },
      onMistakeCheckedAction() {
        this.checkActionSafety = false;
      },
      onTrulyCheckedAction() {
        recordAction(this.currentBoss, this.expectedAction);
        this.checkActionSafety = false;
      },
      onToggleOD() {
        this.currentBoss.isOverDrive = !this.currentBoss.isOverDrive;
      },
      onToggleCT() {
        this.currentBoss.isCTMax = !this.currentBoss.isCTMax;
      },
      onIncrease(value: number) {
        this.currentBoss.health = this.currentBoss.health + value >= 100 ? 100 : this.currentBoss.health + value;
      },
      onDecrease(value: number) {
        this.currentBoss.health = this.currentBoss.health - value <= 0 ? 0 : this.currentBoss.health - value;
      }
    },
    computed: {
      expectedAction: function (): action | undefined {
        return checkAction(this.currentBoss, this.battleContext)
      },
      currentBoss: function (): bossStatus {
        if (this.currentBossName === 'Lucilius') {
          return this.battleContext.boss.Lucilius;
        } else {
          return this.battleContext.boss.BlackWing;
        }
      },
      isOnce: function (): boolean {
        return typeof this.expectedAction !== "undefined" && isSkill(this.expectedAction) && typeof this.expectedAction.isOnce !== "undefined" && this.expectedAction.isOnce
      }
    }
  })
</script>

<style lang="scss">
  .container {
    height: 95vh;
    overflow: hidden;

    .status {
      height: 40%;

      & > div {
        width: 50%
      }
    }

    .action {
      height: 30%;
    }

    .status-controller {
      height: 20%;
    }

    .controller {
      height: 10%;
    }

    .checked-modal {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      position: fixed;
      text-align: center;
      top: 0;
      left: 0;
      height: 100vh;
      width: 100vw;
      background: rgba(96, 125, 139, .75);

      & > div > div {
        padding: 24px;
        background: white;
        border: 1px solid black;
      }
    }

  }

  .title {
    font-family: 'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
    display: block;
    font-weight: 300;
    font-size: 3rem;
    color: #35495e;
    letter-spacing: 1px;
  }
</style>
