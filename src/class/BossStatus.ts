import {bossStatus} from "~/src/model/battleContext";
import {action} from "~/src/model/type";

export class BossStatus implements bossStatus {
  name: string;
  actions: Array<action>;
  health: number;
  isCTMax: boolean;
  isOverDrive: boolean;
  usedSkill: Array<string>;

  constructor(name: string, actions: Array<action>) {
    this.name = name;
    this.actions = actions;
    this.health = 100;
    this.isCTMax = false;
    this.isOverDrive = false;
    this.usedSkill = [];
  }
}
