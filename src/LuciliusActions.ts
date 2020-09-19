import {action} from "~/src/model/type";
import {battleContext, ct} from "~/src/model/battleContext";

// skill_name_od_ct_health
// skill_name_ex -> special trigger

export const LuciliusActions: Array<action> = [
  {
    id: "paradise_lost_100",
    type: "skill",
    name: 'パラダイス・ロスト',
    description: "無属性全体ダメージ(3万)",
    priority: 98,
    effects: [{
      target: "player",
      effect: {
        type: "debuff",
        clearable: false,
        effectTurn: 3,
        name: "召喚不可"
      }
    }],
    isOnce: true,
    require(): boolean {
      return true
    }
  },
  {
    id: "phosphorus_ct_100",
    type: "skill",
    name: 'ポースポロス',
    description: "(ランダム属性)単体特大ダメージ＋強化効果を全て消去\n" +
      "(編成画面で最も攻撃力が高いキャラを狙う)",
    priority: 10,
    require(bc: battleContext): boolean {
      return ct(bc.boss.Lucilius) && bc.boss.BlackWing.health > 50 && !bc.boss.Lucilius.isOverDrive
    }
  },
  {
    id: "iblis_od_ct_100",
    type: "skill",
    name: "イブリース",
    description: "(ランダム属性)3000ダメージ多段+2万ダメージ×2回\n" +
      "全体に恐怖、衰弱、裂傷(1～3T)を付与",
    priority: 10,
    require(bc: battleContext): boolean {
      return ct(bc.boss.Lucilius) && bc.boss.BlackWing.health > 50 && bc.boss.Lucilius.isOverDrive
    }
  },
  {
    id: "axion_apocalypse_ct",
    type: "skill",
    name: "アキシオン・アポカリプス",
    description: "(ランダム属性)3回ダメージ\n" +
      "モードゲージ上昇\n" +
      "福音の赫刃をさらに+1(合計+2)\n" +
      "赫刃II以上…ルシファーの弱体効果回復(1つ)\n" +
      "赫刃III以上…全体の強化効果を全て消去\n" +
      "赫刃IV以上…全体に無属性10000ダメージ\n" +
      "赫刃V…全体に最大HPダウン(累積)",
    priority: 10,
    require(bc: battleContext): boolean {
      return ct(bc.boss.Lucilius) && bc.boss.BlackWing.health <= 50 && bc.boss.BlackWing.health > 0
    }
  },
  {
    id: "phosphorus_ct_bw0",
    type: "skill",
    name: 'ポースポロス',
    description: "(ランダム属性)単体特大ダメージ＋強化効果を全て消去\n" +
      "(現在HPが最も低いキャラを狙う)",
    priority: 10,
    require(bc: battleContext): boolean {
      return ct(bc.boss.Lucilius) && bc.boss.BlackWing.health === 0 && !bc.boss.Lucilius.isOverDrive
    }
  },
  {
    id: "orbital_blackness_od_ct",
    type: "skill",
    name: 'オービタルブラック',
    description: "(ランダム属性)3回ダメージ\n" +
      "全体にハレーション(消去不可、5T)を付与\n" +
      "試練8未達成…全体の攻撃アビリティ2ターン延長\n" +
      "試練9未達成…全体の回復アビリティ2ターン延長\n" +
      "試練10未達成…全体の弱体アビリティ2ターン延長\n" +
      "試練11未達成…全体の強化アビリティ2ターン延長\n" +
      "(それぞれ赤、緑、青、黄色の枠のアビリティ)",
    priority: 10,
    require(bc: battleContext): boolean {
      return ct(bc.boss.Lucilius) && bc.boss.BlackWing.health === 0 && bc.boss.Lucilius.isOverDrive
    }
  },
  {
    id: "paradise_lost_ex",
    type: "skill",
    name: 'パラダイス・ロスト',
    description: "(ランダム属性)全体ダメージ(7～8万程度)\n" +
      "「全属性カット」効果貫通\n" +
      "倒したキャラに「復活不可」付与",
    priority: 100, // MAX
    require(bc: battleContext): boolean {
      return ct(bc.boss.Lucilius) && ct(bc.boss.BlackWing)
    }
  },
  {
    id: "the_end_ex",
    type: "skill",
    description: "強制敗北", name: "ジ・エンド", priority: 99, require(bc: battleContext): boolean {
      return bc.boss.countdown === 0;
    }
  },
  {
    id: "release_true_power",
    type: "skill",
    name: "真の力解放",
    description: "モードゲージリセット\n" +
      "ルシファー&黒き羽の弱体効果リセット\n" +
      "ルシファーが初回の特殊技を使用するまで最大CTが固定\n" +
      "ルシファーの最大CT増加(1→2)",
    priority: 30,
    isOnce: true,
    isAuto: true,
    require(bc: battleContext): boolean {
      return bc.boss.BlackWing.health <= 50;
    }
  },
  {
    id: "phosphorus_95",
    type: "skill",
    name: "ポースポロス",
    description: "(ランダム属性)単体特大ダメージ＋強化効果を全て消去\n" +
      "(編成画面で最も攻撃力が高いキャラを狙う)",
    priority: 30,
    isOnce: true,
    require(bc: battleContext): boolean {
      return bc.boss.Lucilius.health > 90 && bc.boss.Lucilius.health <= 95
    }
  },
  {
    id: "axion_85",
    type: "skill",
    name: "アキシオン",
    description: "(ランダム属性)3回ダメージ\n" +
      "(3回とも現在HPが最も低いキャラを狙う)\n" +
      "この攻撃で戦闘不能キャラが出た場合：全体に無属性30000ダメージ",
    priority: 30,
    isOnce: true,
    require(bc: battleContext): boolean {
      return bc.boss.Lucilius.health > 75 && bc.boss.Lucilius.health <= 85
    }
  },
  {
    id: "atheism",
    type: "skill",
    name: "無神論",
    description: "(※1人目のみ発動)\n" +
      "(ルシファー行動後に黒き羽の特殊行動)\n" +
      "ダメージなし",
    priority: 30,
    isOnce: true,
    effects: [{
      target: "Lucilius",
      effect: {
        clearable: false,
        description: "指定属性(ランダム)以外からのダメージを50%軽減する状態 / 1ターンに10,000,000以上の指定属性ダメージを与えると解除",
        effectTime: 300,
        name: "絶対否定",
        type: "buff"
      }
    }, {
      target: "Lucilius",
      effect: {
        clearable: false,
        description: "指定属性以外からの弱体耐性が上昇している状態 / ターン終了時に6個以上の弱体効果が付与されていると解除",
        effectTime: 300,
        name: "永遠拒絶",
        type: "buff"
      }
    }],
    require(bc: battleContext): boolean {
      return bc.boss.Lucilius.health <= 75 && bc.boss.BlackWing.health !== 0
    }
  },
  {
    id: "charge_max_70",
    type: "skill",
    name: "チャージターンMAX",
    description: "",
    priority: 30,
    isOnce: true,
    require(bc: battleContext): boolean {
      return bc.boss.Lucilius.health <= 70
    }
  },
  {
    id: "axion_60",
    type: "skill",
    name: "アキシオン",
    description: "(ランダム属性)全体攻撃×3回ダメージ(かばう不可)\n" +
      "この攻撃で戦闘不能キャラが出た場合：全体に無属性30000ダメージ",
    priority: 30,
    isOnce: true,
    require(bc: battleContext): boolean {
      return bc.boss.Lucilius.health <= 60 && bc.boss.Lucilius.health > 55
    }
  },
  {
    id: "charge_max_55",
    type: "skill",
    name: "チャージターンMAX",
    description: "",
    priority: 30,
    isOnce: true,
    require(bc: battleContext): boolean {
      return bc.boss.Lucilius.health <= 55
    }
  },
  {
    id: "reinforcement_25",
    type: "skill",
    name: "強化",
    description: "ルシファーの弱体効果リセット\n" +
      "ルシファーの攻撃力約1.3倍",
    priority: 30,
    isOnce: true,
    isAuto: true,
    require(bc: battleContext): boolean {
      return bc.boss.Lucilius.health <= 25
    }
  },
  {
    id: "gopherwood_ark_25",
    type: "skill",
    name: "ゴフェル・アーク",
    description: "編成内に同じ種族のキャラがいる場合、\n" +
      "種族の被る配置が後ろのキャラに最大HPの100%の無属性ダメージ\n" +
      "※種族被りがない場合はダメージなし\n",
    priority: 50,
    isOnce: true,
    effects: [{
      target: "player",
      effect: {
        clearable: false, name: "復活不可", type: "debuff",
      },
    }, {
      target: "player",
      effect: {
        clearable: false, name: "召喚不可", type: "debuff",
      },
    }, {
      target: "field",
      effect: {
        clearable: false, description: "バトルの経過ターンが2～3ターンずつ進む状態\n" +
          "※敵のチャージターンも2～3ずつ増える", name: "天の水門", type: "other",
      },
    }],
    require(bc: battleContext): boolean {
      return bc.boss.Lucilius.health <= 25
    }
  },
  {
    id: "axion_apocalypse_20",
    type: "skill",
    name: "アキシオン・アポカリプス",
    description: "(ランダム属性)3回ダメージ\n" +
      "モードゲージ上昇\n" +
      "福音の赫刃をさらに+1(合計+2)\n" +
      "赫刃II以上…ルシファーの弱体効果回復(1つ)\n" +
      "赫刃III以上…全体の強化効果を全て消去\n" +
      "赫刃IV以上…全体に無属性10000ダメージ\n" +
      "赫刃V…全体に最大HPダウン(累積)\n" +
      "※15%以下で特殊行動無し",
    priority: 30,
    isOnce: true,
    require(bc: battleContext): boolean {
      return bc.boss.Lucilius.health <= 20 && bc.boss.Lucilius.health > 15
    }
  },
  {
    id: "axion_apocalypse_15",
    type: "skill",
    name: "アキシオン・アポカリプス",
    description: "(ランダム属性)3回ダメージ\n" +
      "モードゲージ上昇\n" +
      "福音の赫刃をさらに+1\n" +
      "赫刃II以上…ルシファーの弱体効果回復(1つ)\n" +
      "赫刃III以上…全体の強化効果を全て消去\n" +
      "赫刃IV以上…全体に無属性10000ダメージ\n" +
      "赫刃V…全体に最大HPダウン(累積)\n" +
      "※10%以下で特殊行動無し",
    priority: 30,
    isOnce: true,
    require(bc: battleContext): boolean {
      return bc.boss.Lucilius.health <= 15 && bc.boss.Lucilius.health > 10
    }
  },
  {
    id: "reinforcement_10",
    type: "skill",
    name: "強化",
    description: "ルシファーの弱体効果リセット\n" +
      "ルシファーの攻撃力倍化\n",
    priority: 30,
    isOnce: true,
    isAuto: true,
    require(bc: battleContext): boolean {
      return bc.boss.Lucilius.health <= 10
    }
  },
  {
    id: "paradise_lost_10",
    type: "skill",
    name: "パラダイス・ロスト",
    description: "(ランダム属性)全体9,999,999ダメージ\n" +
      "(※ダメージカット可能)",
    priority: 30,
    isOnce: true,
    require(bc: battleContext): boolean {
      return bc.boss.Lucilius.health <= 10
    }
  },
  {
    id: "paradise_lost_3",
    type: "skill",
    name: "パラダイス・ロスト",
    description: "(ランダム属性)全体9,999,999ダメージ\n" +
      "(※ダメージカット可能)",
    priority: 30,
    isOnce: true,
    require(bc: battleContext): boolean {
      return bc.boss.Lucilius.health <= 3
    }
  },
  {
    id: "normal_attack_100",
    type: "attack",
    description: "全体攻撃(ランダム属性)", name: "通常攻撃", priority: 0, require(bc: battleContext): boolean {
      return !ct(bc.boss.Lucilius) && bc.boss.BlackWing.health > 50;
    }
  },
  {
    id: "normal_attack_50",
    type: "attack",
    description: "多段攻撃", name: "通常攻撃", priority: 0, require(bc: battleContext): boolean {
      return !ct(bc.boss.Lucilius) && bc.boss.BlackWing.health <= 50;
    }
  },
  {
    description: "※黒き羽の50%トリガーだが、ルシファーの特殊行動として発動\n" +
      "※1人目のみ発動\n" +
      "ルシファー&黒き羽の弱体効果リセット\n" +
      "ルシファーが初回の特殊技を使用するまで最大CTが固定\n" +
      "ルシファーの最大CT増加(1→2)",
    effects: undefined,
    id: "seven_trumpets",
    isOnce: true,
    name: "黙示録の喇叭",
    type: "skill",
    priority: 50,
    require(bc: battleContext): boolean {
      return bc.boss.BlackWing.health <= 50;
    },
  }
]
