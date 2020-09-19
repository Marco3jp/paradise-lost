import {action} from "~/src/model/type";
import {battleContext, bossStatus, ct} from "~/src/model/battleContext";

export const BlackWingActions: Array<action> = [{
  description: "闇属性全体小ダメージ\n" +
    "全体に「禁断の果実」を付与(1回/2T)\n" +
    "ルシファーの「福音の黒翼」を消去",
  effects: undefined,
  id: "mars_ct_100",
  isOnce: true,
  type: "skill",
  name: "マルス",
  priority: 50,
  require(bc: battleContext): boolean {
    return ct(bc.boss.BlackWing) && bc.boss.BlackWing.health > 50;
  },
  afterEffect(bs: bossStatus) {
    const theFigIndex = bs.usedSkill.findIndex(skillId => {
      return skillId === "fig_ct_100"
    });
    if (theFigIndex !== -1) {
      bs.usedSkill.splice(theFigIndex, 1);
    }
  }
}, {
  description: "闇属性全体小ダメージ\n" +
    "全体に「生命の果実」を付与(1回/2T)\n" +
    "ルシファーに「福音の黒翼」を付与",
  effects: undefined,
  id: "fig_ct_100",
  isOnce: true,
  name: "フィークス",
  type: "skill",
  priority: 25,
  require(bc: battleContext): boolean {
    return ct(bc.boss.BlackWing) && bc.boss.BlackWing.health > 50;
  },
  afterEffect(bs: bossStatus) {
    const marsIndex = bs.usedSkill.findIndex(skillId => {
      return skillId === "mars_ct_100"
    });
    if (marsIndex !== -1) {
      bs.usedSkill.splice(marsIndex, 1);
    }
  }
}, {
  description: "闇属性全体小ダメージ\n" +
    "全体に「禁断の果実」を付与(1回/2T)\n" +
    "ルシファーの「福音の黒翼」を消去\n" +
    "攻撃DOWN(2T)を付与",
  effects: undefined,
  id: "mars_ct_50",
  isOnce: true,
  name: "マルス",
  type: "skill",
  priority: 50,
  require(bc: battleContext): boolean {
    return ct(bc.boss.BlackWing) && bc.boss.BlackWing.health <= 50;
  },
  afterEffect(bs: bossStatus) {
    const theFigIndex = bs.usedSkill.findIndex(skillId => {
      return skillId === "fig_ct_50"
    });
    if (theFigIndex !== -1) {
      bs.usedSkill.splice(theFigIndex, 1);
    }
  }
}, {
  description: "闇属性全体小ダメージ\n" +
    "全体に「生命の果実」を付与(1回/2T)\n" +
    "アンデッド(2T)を付与",
  effects: undefined,
  id: "fig_ct_50",
  isOnce: true,
  name: "フィークス",
  type: "skill",
  priority: 25,
  require(bc: battleContext): boolean {
    return ct(bc.boss.BlackWing) && bc.boss.BlackWing.health <= 50;
  },
  afterEffect(bs: bossStatus) {
    const marsIndex = bs.usedSkill.findIndex(skillId => {
      return skillId === "mars_ct_50"
    });
    if (marsIndex !== -1) {
      bs.usedSkill.splice(marsIndex, 1);
    }
  }
}, {
  description: "※1人目のみ発動\n" +
    "(ルシファー行動後、黒き羽の特殊行動)\n" +
    "ダメージなし\n" +
    "ルシファー&黒き羽の弱体効果リセット\n" +
    "モードゲージ上昇\n" +
    "ルシファーに「終末へのカウントダウン」を付与",
  effects: undefined,
  id: "sephiroth_70",
  isOnce: true,
  name: "セフィロト",
  type: "skill",
  priority: 50,
  require(bc: battleContext): boolean {
    return bc.boss.BlackWing.health <= 70;
  },
}]
