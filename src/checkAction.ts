import {battleContext, bossStatus, isSkill} from "~/src/model/battleContext";
import {skill} from "~/src/model/skill";
import {action} from "~/src/model/type";


export function checkAction(bs: bossStatus, context: battleContext): action | undefined {
  let expectedAction: action | undefined = undefined;

  for (let i = 0; i < bs.actions.length; i++) {
    if (bs.actions[i].require(context)) {

      // スキルのとき、自動発動系もしくは一度きりのスキルで既に発動している場合に除外する
      if (isSkill(bs.actions[i]) && ((bs.actions[i] as skill).isAuto || ((bs.actions[i] as skill).isOnce && bs.usedSkill.includes(bs.actions[i].id)))) continue;

      if (typeof expectedAction === "undefined" || expectedAction.priority < bs.actions[i].priority) {
        expectedAction = bs.actions[i];
      }
    }
  }

  return expectedAction;
}

export function recordAction(bs: bossStatus, action?: action | number) {
  if (typeof action === "undefined") return
  if (typeof action === "number") {
    bs.usedSkill.push(action);
  } else {
    bs.usedSkill.push(action.id);
  }
}
