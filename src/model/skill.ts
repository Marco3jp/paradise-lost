import {enemies} from "~/src/model/type";
import {effect} from "~/src/model/effect";
import {battleContext, bossStatus} from "~/src/model/battleContext";

export interface skill {
  type: "skill",
  id: string,
  name: string,
  description: string,
  priority: number,
  isOnce?: boolean, // Arrayからpopさせることでスキル自体消す？
  isAuto?: boolean, // 勝手にステータス上がったりするやつ

  effects?: Array<{
    target: enemies | "player" | "field",
    effect: effect
  }>,

  require(bc: battleContext): boolean,

  afterEffect?: { (bs: bossStatus): void }
}
