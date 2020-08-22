import {bossStatus} from "~/src/model/battleContext";
import {action} from "~/src/model/type";

export class BossStatus implements bossStatus {
  actions: Array<action>;
  health: number;
  isCTMax: boolean;
  isOverDrive: boolean;
  usedSkill: Array<number>;

  constructor(actions: Array<action>) {
    this.actions = actions;
    this.health = 100;
    this.isCTMax = false;
    this.isOverDrive = false;
    this.usedSkill = [];
  }
}
