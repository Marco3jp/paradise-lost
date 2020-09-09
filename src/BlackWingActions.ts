import {action} from "~/src/model/type";
import {battleContext, ct} from "~/src/model/battleContext";

export const BlackWingActions: Array<action> = [{
  description: "闇属性全体小ダメージ\n" +
    "全体に「禁断の果実」を付与(1回/2T)\n" +
    "ルシファーの「福音の黒翼」を消去",
  effects: undefined,
  id: 0,
  isOnce: true,
  name: "マルス",
  priority: 50,
  require(bc: battleContext): boolean {
    return ct(bc.boss.BlackWing) && bc.boss.BlackWing.health > 50;
  },
  afterEffect(bc: battleContext) {
    const theFigIndex = bc.boss.BlackWing.usedSkill.findIndex(skillId => {
      return skillId === 1
    });
    if (theFigIndex !== -1) {
      bc.boss.BlackWing.usedSkill.splice(theFigIndex, 1);
    }
  }
}, {
  description: "闇属性全体小ダメージ\n" +
    "全体に「生命の果実」を付与(1回/2T)\n" +
    "ルシファーに「福音の黒翼」を付与",
  effects: undefined,
  id: 1,
  isOnce: true,
  name: "フィークス",
  priority: 25,
  require(bc: battleContext): boolean {
    return ct(bc.boss.BlackWing) && bc.boss.BlackWing.health > 50;
  },
  afterEffect(bc: battleContext) {
    const marsIndex = bc.boss.BlackWing.usedSkill.findIndex(skillId => {
      return skillId === 0
    });
    if (marsIndex !== -1) {
      bc.boss.BlackWing.usedSkill.splice(marsIndex, 1);
    }
  }
}, {
  description: "闇属性全体小ダメージ\n" +
    "全体に「禁断の果実」を付与(1回/2T)\n" +
    "ルシファーの「福音の黒翼」を消去\n" +
    "攻撃DOWN(2T)を付与",
  effects: undefined,
  id: 2,
  isOnce: true,
  name: "マルス",
  priority: 50,
  require(bc: battleContext): boolean {
    return ct(bc.boss.BlackWing) && bc.boss.BlackWing.health <= 50;
  },
  afterEffect(bc: battleContext) {
    const theFigIndex = bc.boss.BlackWing.usedSkill.findIndex(skillId => {
      return skillId === 3
    });
    if (theFigIndex !== -1) {
      bc.boss.BlackWing.usedSkill.splice(theFigIndex, 1);
    }
  }
}, {
  description: "闇属性全体小ダメージ\n" +
    "全体に「生命の果実」を付与(1回/2T)\n" +
    "アンデッド(2T)を付与",
  effects: undefined,
  id: 3,
  isOnce: true,
  name: "フィークス",
  priority: 25,
  require(bc: battleContext): boolean {
    return ct(bc.boss.BlackWing) && bc.boss.BlackWing.health <= 50;
  },
  afterEffect(bc: battleContext) {
    const marsIndex = bc.boss.BlackWing.usedSkill.findIndex(skillId => {
      return skillId === 2
    });
    if (marsIndex !== -1) {
      bc.boss.BlackWing.usedSkill.splice(marsIndex, 1);
    }
  }
},{
  description: "闇属性全体小ダメージ\n" +
    "全体に「生命の果実」を付与(1回/2T)\n" +
    "アンデッド(2T)を付与",
  effects: undefined,
  id: 4,
  isOnce: true,
  name: "フィークス",
  priority: 25,
  require(bc: battleContext): boolean {
    return ct(bc.boss.BlackWing) && bc.boss.BlackWing.health <= 50;
  },
  afterEffect(bc: battleContext) {
    const marsIndex = bc.boss.BlackWing.usedSkill.findIndex(skillId => {
      return skillId === 2
    });
    if (marsIndex !== -1) {
      bc.boss.BlackWing.usedSkill.splice(marsIndex, 1);
    }
  }]
