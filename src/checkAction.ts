import {battleContext, bossStatus, isSkill} from "~/src/model/battleContext";
import {skill} from "~/src/model/skill";
import {action} from "~/src/model/type";


export function checkAction(bs: bossStatus, context: battleContext): action | undefined {
  for (let i = 0; i < bs.actions.length; i++) {
    if (bs.actions[i].require(context)) {

      if (isSkill(bs.actions[i]) && (bs.actions[i] as skill).isAuto) continue;

      if (isSkill(bs.actions[i]) && (bs.actions[i] as skill).isOnce) {
        if (bs.usedSkill.includes(i)) {
          continue;
        } else {
          bs.usedSkill.push(i);
        }
      }
      return bs.actions[i];
    }
  }

  return undefined; // 理論上undefinedに入ることはないはずだが……
}
