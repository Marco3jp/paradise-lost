import {action} from "~/src/model/type";
import {BossStatus} from "~/src/class/BossStatus";
import {skill} from "~/src/model/skill";

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

export function isSkill(action: action): action is skill {
  return action.type === "skill";
}
