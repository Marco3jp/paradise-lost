import {enemies} from "~/src/model/type";
import {Effect} from "~/src/model/effect";
import {BattleContext} from "~/src/model/battleContext";

export interface Skill {
  name: string,
  description: string,
  priority: number,
  isOnce: boolean, // Arrayからpopさせることでスキル自体消す？
  isAuto: boolean, // 勝手にステータス上がったりするやつ

  effects: Array<{
    target: enemies | "player" | "field",
    effect: Effect
  }>,

  require(bc: BattleContext): boolean,
}
