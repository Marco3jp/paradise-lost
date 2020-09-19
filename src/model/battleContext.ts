import {action} from "~/src/model/type";
import {BossStatus} from "~/src/class/BossStatus";

export interface bossStatus {
  name: string
  health: number // percent
  isCTMax: boolean
  isOverDrive: boolean
  usedSkill: Array<string>
  actions: Array<action>
}

export interface battleContext {
  boss: {
    Lucilius: bossStatus,
    BlackWing: bossStatus,
    countdown: number
  },
}

export function ct(bs: bossStatus): boolean {
  return bs.isCTMax
}

export function isSkill(action: action): boolean {
  return Object.prototype.hasOwnProperty.call(action, 'isOnce');
}

export function usedParadiseLost(luciliusBossStatus: BossStatus) {
  luciliusBossStatus.usedSkill.push(0);
}
