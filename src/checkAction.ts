import {battleContext, bossStatus, isSkill} from "~/src/model/battleContext";
import {skill} from "~/src/model/skill";
import {action} from "~/src/model/type";


export function checkAction(bs: bossStatus, context: battleContext): action | undefined {
  let expectedAction: action | undefined = undefined;

  for (let i = 0; i < bs.actions.length; i++) {
    if (bs.actions[i].require(context)) {
      const action = bs.actions[i];

      // スキルのとき、自動発動系もしくは一度きりのスキルで既に発動している場合に除外する
      if (isSkill(action) && (action.isAuto || (action.isOnce && bs.usedSkill.includes(action.id)))) continue;

      if (typeof expectedAction === "undefined" || expectedAction.priority < action.priority) {
        expectedAction = action;
      }
    }
  }

  return expectedAction;
}

export function recordAction(bs: bossStatus, action?: action | string) {
  if (typeof action === "undefined") return
  if (typeof action === "string") {
    bs.usedSkill.push(action);
  } else if (isSkill(action) && (action as skill).isOnce) {
    bs.usedSkill.push(action.id);
  }
}
