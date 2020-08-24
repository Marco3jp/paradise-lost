import 'jest'
import {BattleContext} from "~/src/class/BattleContext";
import {usedParadiseLost} from "~/src/model/battleContext";
import {checkAction, recordAction} from "~/src/checkAction";

test('パラダイス・ロスト', () => {
  const bc = new BattleContext();
  const expectAction = {name: "パラダイス・ロスト", description: "無属性全体ダメージ(3万)"};

  bc.boss.Lucilius.isCTMax = true;
  bc.boss.BlackWing.isCTMax = true;

  // ありえないけどCT一致パラロスの優先で発生しない
  expect(checkAction(bc.boss.Lucilius, bc)).not.toMatchObject(expectAction);
  expect(checkAction(bc.boss.Lucilius, bc)).not.toBeUndefined();

  bc.boss.Lucilius.isCTMax = false;
  bc.boss.BlackWing.isCTMax = false;
  bc.boss.countdown = 0;

  // こっちは開幕前にカウントダウンが終わった場合
  expect(checkAction(bc.boss.Lucilius, bc)).not.toMatchObject(expectAction);

  bc.boss.countdown = 6;

  // ほんとに打つ場合
  const usedSkill = checkAction(bc.boss.Lucilius, bc);
  expect(usedSkill).toMatchObject(expectAction);
  recordAction(bc.boss.Lucilius, usedSkill); // はいっ！

  // 二回は発生しない
  expect(checkAction(bc.boss.Lucilius, bc)).not.toMatchObject(expectAction);

  expect(checkAction(bc.boss.Lucilius, bc)).not.toBeUndefined();
})

test('ポースポロス(95%トリガー)', () => {
  const bc = new BattleContext();
  const expectAction = {
    name: "ポースポロス", description: "(ランダム属性)単体特大ダメージ＋強化効果を全て消去\n" +
      "(編成画面で最も攻撃力が高いキャラを狙う)"
  };
  usedParadiseLost(bc.boss.Lucilius);

  bc.boss.Lucilius.isCTMax = true;
  bc.boss.BlackWing.isCTMax = true;

  // CT一致パラロスの優先で発生しない
  expect(checkAction(bc.boss.Lucilius, bc)).not.toMatchObject(expectAction);
  expect(checkAction(bc.boss.Lucilius, bc)).not.toBeUndefined();

  bc.boss.Lucilius.isCTMax = false;
  bc.boss.BlackWing.isCTMax = false;
  bc.boss.countdown = 0;

  // こっちはカウントダウンが終わった場合
  expect(checkAction(bc.boss.Lucilius, bc)).not.toMatchObject(expectAction);
  expect(checkAction(bc.boss.Lucilius, bc)).not.toBeUndefined();

  bc.boss.countdown = 6;

  bc.boss.Lucilius.health = 96;
  expect(checkAction(bc.boss.Lucilius, bc)).not.toMatchObject(expectAction);

  bc.boss.Lucilius.health = 90;
  expect(checkAction(bc.boss.Lucilius, bc)).not.toMatchObject(expectAction);

  bc.boss.Lucilius.health = 95;
  // ほんとに打つ場合
  const usedSkill = checkAction(bc.boss.Lucilius, bc);
  expect(usedSkill).toMatchObject(expectAction);
  recordAction(bc.boss.Lucilius, usedSkill); // はいっ！

  // 二回は発生しない
  expect(checkAction(bc.boss.Lucilius, bc)).not.toMatchObject(expectAction);

  expect(checkAction(bc.boss.Lucilius, bc)).not.toBeUndefined();
})

test('アキシオン(85%トリガー)', () => {
  const bc = new BattleContext();
  const expectAction = {
    name: "アキシオン", description: "(ランダム属性)3回ダメージ\n" +
      "(3回とも現在HPが最も低いキャラを狙う)\n" +
      "この攻撃で戦闘不能キャラが出た場合：全体に無属性30000ダメージ"
  }

  usedParadiseLost(bc.boss.Lucilius);

  bc.boss.Lucilius.isCTMax = true;
  bc.boss.BlackWing.isCTMax = true;

  // CT一致パラロスの優先で発生しない
  expect(checkAction(bc.boss.Lucilius, bc)).not.toMatchObject(expectAction);
  expect(checkAction(bc.boss.Lucilius, bc)).not.toBeUndefined();

  bc.boss.Lucilius.isCTMax = false;
  bc.boss.BlackWing.isCTMax = false;
  bc.boss.countdown = 0;

  // こっちはカウントダウンが終わった場合
  expect(checkAction(bc.boss.Lucilius, bc)).not.toMatchObject(expectAction);
  expect(checkAction(bc.boss.Lucilius, bc)).not.toBeUndefined();

  bc.boss.countdown = 6;

  bc.boss.Lucilius.health = 86;
  expect(checkAction(bc.boss.Lucilius, bc)).not.toMatchObject(expectAction);

  bc.boss.Lucilius.health = 75;
  expect(checkAction(bc.boss.Lucilius, bc)).not.toMatchObject(expectAction);

  bc.boss.Lucilius.health = 76;
  // ほんとに打つ場合
  const usedSkill = checkAction(bc.boss.Lucilius, bc);
  expect(usedSkill).toMatchObject(expectAction);
  recordAction(bc.boss.Lucilius, usedSkill); // はいっ！

  // 二回は発生しない
  expect(checkAction(bc.boss.Lucilius, bc)).not.toMatchObject(expectAction);

  expect(checkAction(bc.boss.Lucilius, bc)).not.toBeUndefined();
})

test('無神論(75%トリガー)', () => {
  const bc = new BattleContext();
  const expectAction = {
    name: "無神論", description: "(※1人目のみ発動)\n" +
      "(ルシファー行動後に黒き羽の特殊行動)\n" +
      "ダメージなし"
  }

  usedParadiseLost(bc.boss.Lucilius);

  bc.boss.Lucilius.isCTMax = true;
  bc.boss.BlackWing.isCTMax = true;

  // CT一致パラロスの優先で発生しない
  expect(checkAction(bc.boss.Lucilius, bc)).not.toMatchObject(expectAction);
  expect(checkAction(bc.boss.Lucilius, bc)).not.toBeUndefined();

  bc.boss.Lucilius.isCTMax = false;
  bc.boss.BlackWing.isCTMax = false;
  bc.boss.countdown = 0;

  // こっちはカウントダウンが終わった場合
  expect(checkAction(bc.boss.Lucilius, bc)).not.toMatchObject(expectAction);
  expect(checkAction(bc.boss.Lucilius, bc)).not.toBeUndefined();

  bc.boss.countdown = 6;

  bc.boss.Lucilius.health = 76;
  expect(checkAction(bc.boss.Lucilius, bc)).not.toMatchObject(expectAction);

  bc.boss.BlackWing.health = 0;
  bc.boss.Lucilius.health = 75;
  expect(checkAction(bc.boss.Lucilius, bc)).not.toMatchObject(expectAction);

  bc.boss.BlackWing.health = 1;
  bc.boss.Lucilius.health = 75;
  // ほんとに打つ場合
  const usedSkill = checkAction(bc.boss.Lucilius, bc);
  expect(usedSkill).toMatchObject(expectAction);
  recordAction(bc.boss.Lucilius, usedSkill); // はいっ！

  // 二回は発生しない
  expect(checkAction(bc.boss.Lucilius, bc)).not.toMatchObject(expectAction);

  expect(checkAction(bc.boss.Lucilius, bc)).not.toBeUndefined();
})

test('チャージターンMAX(70%トリガー)', () => {
  const bc = new BattleContext();
  const expectAction = {
    name: "チャージターンMAX", description: ""
  }

  usedParadiseLost(bc.boss.Lucilius);

  bc.boss.Lucilius.isCTMax = true;
  bc.boss.BlackWing.isCTMax = true;

  // CT一致パラロスの優先で発生しない
  expect(checkAction(bc.boss.Lucilius, bc)).not.toMatchObject(expectAction);
  expect(checkAction(bc.boss.Lucilius, bc)).not.toBeUndefined();

  bc.boss.Lucilius.isCTMax = false;
  bc.boss.BlackWing.isCTMax = false;
  bc.boss.countdown = 0;

  // こっちはカウントダウンが終わった場合
  expect(checkAction(bc.boss.Lucilius, bc)).not.toMatchObject(expectAction);
  expect(checkAction(bc.boss.Lucilius, bc)).not.toBeUndefined();

  bc.boss.countdown = 6;
  bc.boss.BlackWing.health = 0; // 無神論キャンセル

  bc.boss.Lucilius.health = 71;
  expect(checkAction(bc.boss.Lucilius, bc)).not.toMatchObject(expectAction);

  bc.boss.Lucilius.health = 70;
  // ほんとに打つ場合
  const usedSkill = checkAction(bc.boss.Lucilius, bc);
  expect(usedSkill).toMatchObject(expectAction);
  recordAction(bc.boss.Lucilius, usedSkill); // はいっ！

  // 二回は発生しない
  expect(checkAction(bc.boss.Lucilius, bc)).not.toMatchObject(expectAction);

  expect(checkAction(bc.boss.Lucilius, bc)).not.toBeUndefined();
})

test('アキシオン(60%トリガー)', () => {
  const bc = new BattleContext();
  const expectAction = {
    name: "アキシオン", description: "(ランダム属性)全体攻撃×3回ダメージ(かばう不可)\n" +
      "この攻撃で戦闘不能キャラが出た場合：全体に無属性30000ダメージ"
  }

  usedParadiseLost(bc.boss.Lucilius);

  bc.boss.Lucilius.isCTMax = true;
  bc.boss.BlackWing.isCTMax = true;

  // CT一致パラロスの優先で発生しない
  expect(checkAction(bc.boss.Lucilius, bc)).not.toMatchObject(expectAction);
  expect(checkAction(bc.boss.Lucilius, bc)).not.toBeUndefined();

  bc.boss.Lucilius.isCTMax = false;
  bc.boss.BlackWing.isCTMax = false;
  bc.boss.countdown = 0;

  // こっちはカウントダウンが終わった場合
  expect(checkAction(bc.boss.Lucilius, bc)).not.toMatchObject(expectAction);
  expect(checkAction(bc.boss.Lucilius, bc)).not.toBeUndefined();

  bc.boss.countdown = 6;
  bc.boss.BlackWing.health = 0; // 無神論キャンセル
  recordAction(bc.boss.Lucilius, 12) // チャージターンMAX(70%トリガー)キャンセル

  bc.boss.Lucilius.health = 61;
  expect(checkAction(bc.boss.Lucilius, bc)).not.toMatchObject(expectAction);

  bc.boss.Lucilius.health = 55;
  expect(checkAction(bc.boss.Lucilius, bc)).not.toMatchObject(expectAction);

  bc.boss.Lucilius.health = 56;
  // ほんとに打つ場合
  const usedSkill = checkAction(bc.boss.Lucilius, bc);
  expect(usedSkill).toMatchObject(expectAction);
  recordAction(bc.boss.Lucilius, usedSkill); // はいっ！

  // 二回は発生しない
  expect(checkAction(bc.boss.Lucilius, bc)).not.toMatchObject(expectAction);

  expect(checkAction(bc.boss.Lucilius, bc)).not.toBeUndefined();
})

test('チャージターンMAX(55%トリガー)', () => {
  const bc = new BattleContext();
  const expectAction = {
    name: "チャージターンMAX", description: ""
  }

  usedParadiseLost(bc.boss.Lucilius);

  bc.boss.Lucilius.isCTMax = true;
  bc.boss.BlackWing.isCTMax = true;

  // CT一致パラロスの優先で発生しない
  expect(checkAction(bc.boss.Lucilius, bc)).not.toMatchObject(expectAction);
  expect(checkAction(bc.boss.Lucilius, bc)).not.toBeUndefined();

  bc.boss.Lucilius.isCTMax = false;
  bc.boss.BlackWing.isCTMax = false;
  bc.boss.countdown = 0;

  // こっちはカウントダウンが終わった場合
  expect(checkAction(bc.boss.Lucilius, bc)).not.toMatchObject(expectAction);
  expect(checkAction(bc.boss.Lucilius, bc)).not.toBeUndefined();

  bc.boss.countdown = 6;
  bc.boss.BlackWing.health = 0; // 無神論キャンセル
  recordAction(bc.boss.Lucilius, 12) // チャージターンMAX(70%トリガー)キャンセル

  bc.boss.Lucilius.health = 56;
  expect(checkAction(bc.boss.Lucilius, bc)).not.toMatchObject(expectAction);

  bc.boss.Lucilius.health = 55;
  // ほんとに打つ場合
  const usedSkill = checkAction(bc.boss.Lucilius, bc);
  expect(usedSkill).toMatchObject(expectAction);
  recordAction(bc.boss.Lucilius, usedSkill); // はいっ！

  // 二回は発生しない
  expect(checkAction(bc.boss.Lucilius, bc)).not.toMatchObject(expectAction);

  expect(checkAction(bc.boss.Lucilius, bc)).not.toBeUndefined();
})

test('ゴフェル・アーク(25%トリガー)', () => {
  const bc = new BattleContext();
  const expectAction = {
    name: "ゴフェル・アーク", description: "編成内に同じ種族のキャラがいる場合、\n" +
      "種族の被る配置が後ろのキャラに最大HPの100%の無属性ダメージ\n" +
      "※種族被りがない場合はダメージなし\n"
  }

  usedParadiseLost(bc.boss.Lucilius);

  bc.boss.Lucilius.isCTMax = true;
  bc.boss.BlackWing.isCTMax = true;

  // CT一致パラロスの優先で発生しない
  expect(checkAction(bc.boss.Lucilius, bc)).not.toMatchObject(expectAction);
  expect(checkAction(bc.boss.Lucilius, bc)).not.toBeUndefined();

  bc.boss.Lucilius.isCTMax = false;
  bc.boss.BlackWing.isCTMax = false;
  bc.boss.countdown = 0;

  // こっちはカウントダウンが終わった場合
  expect(checkAction(bc.boss.Lucilius, bc)).not.toMatchObject(expectAction);
  expect(checkAction(bc.boss.Lucilius, bc)).not.toBeUndefined();

  bc.boss.countdown = 6;
  bc.boss.BlackWing.health = 0; // 無神論キャンセル
  recordAction(bc.boss.Lucilius, 12) // チャージターンMAX(70%トリガー)キャンセル
  recordAction(bc.boss.Lucilius, 14) // チャージターンMAX(55%トリガー)キャンセル

  bc.boss.Lucilius.health = 26;
  expect(checkAction(bc.boss.Lucilius, bc)).not.toMatchObject(expectAction);

  bc.boss.Lucilius.health = 1;
  // ほんとに打つ場合
  const usedSkill = checkAction(bc.boss.Lucilius, bc);
  expect(usedSkill).toMatchObject(expectAction);
  recordAction(bc.boss.Lucilius, usedSkill); // はいっ！

  // 二回は発生しない
  expect(checkAction(bc.boss.Lucilius, bc)).not.toMatchObject(expectAction);

  expect(checkAction(bc.boss.Lucilius, bc)).not.toBeUndefined();
})

test('アキシオン・アポカリプス(20%トリガー)', () => {
  const bc = new BattleContext();
  const expectAction = {
    name: "アキシオン・アポカリプス", description: "(ランダム属性)3回ダメージ\n" +
      "モードゲージ上昇\n" +
      "福音の赫刃をさらに+1(合計+2)\n" +
      "赫刃II以上…ルシファーの弱体効果回復(1つ)\n" +
      "赫刃III以上…全体の強化効果を全て消去\n" +
      "赫刃IV以上…全体に無属性10000ダメージ\n" +
      "赫刃V…全体に最大HPダウン(累積)\n" +
      "※15%以下で特殊行動無し"
  }

  usedParadiseLost(bc.boss.Lucilius);

  bc.boss.Lucilius.isCTMax = true;
  bc.boss.BlackWing.isCTMax = true;

  // CT一致パラロスの優先で発生しない
  expect(checkAction(bc.boss.Lucilius, bc)).not.toMatchObject(expectAction);
  expect(checkAction(bc.boss.Lucilius, bc)).not.toBeUndefined();

  bc.boss.Lucilius.isCTMax = false;
  bc.boss.BlackWing.isCTMax = false;
  bc.boss.countdown = 0;

  // こっちはカウントダウンが終わった場合
  expect(checkAction(bc.boss.Lucilius, bc)).not.toMatchObject(expectAction);
  expect(checkAction(bc.boss.Lucilius, bc)).not.toBeUndefined();

  bc.boss.countdown = 6;
  bc.boss.BlackWing.health = 0; // 無神論キャンセル
  recordAction(bc.boss.Lucilius, 12) // チャージターンMAX(70%トリガー)キャンセル
  recordAction(bc.boss.Lucilius, 14) // チャージターンMAX(55%トリガー)キャンセル

  bc.boss.Lucilius.health = 20;
  // ゴッフェルアークが優先的に発動する
  const gopherwoodArk = checkAction(bc.boss.Lucilius, bc);
  expect(gopherwoodArk).not.toMatchObject(expectAction);
  recordAction(bc.boss.Lucilius, gopherwoodArk); // はいっ！

  bc.boss.Lucilius.health = 21;
  expect(checkAction(bc.boss.Lucilius, bc)).not.toMatchObject(expectAction);

  bc.boss.Lucilius.health = 15;
  expect(checkAction(bc.boss.Lucilius, bc)).not.toMatchObject(expectAction);

  bc.boss.Lucilius.health = 16;
  // ほんとに打つ場合
  const usedSkill = checkAction(bc.boss.Lucilius, bc);
  expect(usedSkill).toMatchObject(expectAction);
  recordAction(bc.boss.Lucilius, usedSkill); // はいっ！

  // 二回は発生しない
  expect(checkAction(bc.boss.Lucilius, bc)).not.toMatchObject(expectAction);

  expect(checkAction(bc.boss.Lucilius, bc)).not.toBeUndefined();
})

test('アキシオン・アポカリプス(15%トリガー)', () => {
  const bc = new BattleContext();
  const expectAction = {
    name: "アキシオン・アポカリプス", description: "(ランダム属性)3回ダメージ\n" +
      "モードゲージ上昇\n" +
      "福音の赫刃をさらに+1\n" +
      "赫刃II以上…ルシファーの弱体効果回復(1つ)\n" +
      "赫刃III以上…全体の強化効果を全て消去\n" +
      "赫刃IV以上…全体に無属性10000ダメージ\n" +
      "赫刃V…全体に最大HPダウン(累積)\n" +
      "※10%以下で特殊行動無し"
  }

  usedParadiseLost(bc.boss.Lucilius);

  bc.boss.Lucilius.isCTMax = true;
  bc.boss.BlackWing.isCTMax = true;

  // CT一致パラロスの優先で発生しない
  expect(checkAction(bc.boss.Lucilius, bc)).not.toMatchObject(expectAction);
  expect(checkAction(bc.boss.Lucilius, bc)).not.toBeUndefined();

  bc.boss.Lucilius.isCTMax = false;
  bc.boss.BlackWing.isCTMax = false;
  bc.boss.countdown = 0;

  // こっちはカウントダウンが終わった場合
  expect(checkAction(bc.boss.Lucilius, bc)).not.toMatchObject(expectAction);
  expect(checkAction(bc.boss.Lucilius, bc)).not.toBeUndefined();

  bc.boss.countdown = 6;
  bc.boss.BlackWing.health = 0; // 無神論キャンセル
  recordAction(bc.boss.Lucilius, 12) // チャージターンMAX(70%トリガー)キャンセル
  recordAction(bc.boss.Lucilius, 14) // チャージターンMAX(55%トリガー)キャンセル

  bc.boss.Lucilius.health = 15;
  // ゴッフェルアークが優先的に発動する
  const gopherwoodArk = checkAction(bc.boss.Lucilius, bc);
  expect(gopherwoodArk).not.toMatchObject(expectAction);
  recordAction(bc.boss.Lucilius, gopherwoodArk); // はいっ！

  bc.boss.Lucilius.health = 16;
  expect(checkAction(bc.boss.Lucilius, bc)).not.toMatchObject(expectAction);

  bc.boss.Lucilius.health = 10;
  expect(checkAction(bc.boss.Lucilius, bc)).not.toMatchObject(expectAction);

  bc.boss.Lucilius.health = 15;
  // ほんとに打つ場合
  const usedSkill = checkAction(bc.boss.Lucilius, bc);
  expect(usedSkill).toMatchObject(expectAction);
  recordAction(bc.boss.Lucilius, usedSkill); // はいっ！

  // 二回は発生しない
  expect(checkAction(bc.boss.Lucilius, bc)).not.toMatchObject(expectAction);

  expect(checkAction(bc.boss.Lucilius, bc)).not.toBeUndefined();
})

test('パラダイス・ロスト(10%トリガー)', () => {
  const bc = new BattleContext();
  const expectAction = {
    name: "パラダイス・ロスト", description: "(ランダム属性)全体9,999,999ダメージ\n" +
      "(※ダメージカット可能)"
  }

  usedParadiseLost(bc.boss.Lucilius);

  bc.boss.Lucilius.isCTMax = true;
  bc.boss.BlackWing.isCTMax = true;

  // CT一致パラロスの優先で発生しない
  expect(checkAction(bc.boss.Lucilius, bc)).not.toMatchObject(expectAction);
  expect(checkAction(bc.boss.Lucilius, bc)).not.toBeUndefined();

  bc.boss.Lucilius.isCTMax = false;
  bc.boss.BlackWing.isCTMax = false;
  bc.boss.countdown = 0;

  // こっちはカウントダウンが終わった場合
  expect(checkAction(bc.boss.Lucilius, bc)).not.toMatchObject(expectAction);
  expect(checkAction(bc.boss.Lucilius, bc)).not.toBeUndefined();

  bc.boss.countdown = 6;
  bc.boss.BlackWing.health = 0; // 無神論キャンセル
  recordAction(bc.boss.Lucilius, 12) // チャージターンMAX(70%トリガー)キャンセル
  recordAction(bc.boss.Lucilius, 14) // チャージターンMAX(55%トリガー)キャンセル

  bc.boss.Lucilius.health = 10;
  // ゴッフェルアークが優先的に発動する
  const gopherwoodArk = checkAction(bc.boss.Lucilius, bc);
  expect(gopherwoodArk).not.toMatchObject(expectAction);
  recordAction(bc.boss.Lucilius, gopherwoodArk); // はいっ！


  bc.boss.Lucilius.health = 11;
  expect(checkAction(bc.boss.Lucilius, bc)).not.toMatchObject(expectAction);

  bc.boss.Lucilius.health = 10;

  // ほんとに打つ場合
  const usedSkill = checkAction(bc.boss.Lucilius, bc);
  expect(usedSkill).toMatchObject(expectAction);
  recordAction(bc.boss.Lucilius, usedSkill); // はいっ！

  // 二回は発生しない
  expect(checkAction(bc.boss.Lucilius, bc)).not.toMatchObject(expectAction);

  expect(checkAction(bc.boss.Lucilius, bc)).not.toBeUndefined();
})

test('パラダイス・ロスト(3%トリガー)', () => {
  const bc = new BattleContext();
  const expectAction = {
    name: "パラダイス・ロスト", description: "(ランダム属性)全体9,999,999ダメージ\n" +
      "(※ダメージカット可能)"
  }

  usedParadiseLost(bc.boss.Lucilius);

  bc.boss.Lucilius.isCTMax = true;
  bc.boss.BlackWing.isCTMax = true;

  // CT一致パラロスの優先で発生しない
  expect(checkAction(bc.boss.Lucilius, bc)).not.toMatchObject(expectAction);
  expect(checkAction(bc.boss.Lucilius, bc)).not.toBeUndefined();

  bc.boss.Lucilius.isCTMax = false;
  bc.boss.BlackWing.isCTMax = false;
  bc.boss.countdown = 0;

  // こっちはカウントダウンが終わった場合
  expect(checkAction(bc.boss.Lucilius, bc)).not.toMatchObject(expectAction);
  expect(checkAction(bc.boss.Lucilius, bc)).not.toBeUndefined();

  bc.boss.countdown = 6;
  bc.boss.BlackWing.health = 0; // 無神論キャンセル
  recordAction(bc.boss.Lucilius, 12) // チャージターンMAX(70%トリガー)キャンセル
  recordAction(bc.boss.Lucilius, 14) // チャージターンMAX(55%トリガー)キャンセル

  bc.boss.Lucilius.health = 3;
  // ゴッフェルアークが優先的に発動する
  const gopherwoodArk = checkAction(bc.boss.Lucilius, bc);
  expect(gopherwoodArk).not.toMatchObject(expectAction);
  recordAction(bc.boss.Lucilius, gopherwoodArk); // はいっ！


  bc.boss.Lucilius.health = 11;
  expect(checkAction(bc.boss.Lucilius, bc)).not.toMatchObject(expectAction);

  bc.boss.Lucilius.health = 3;

  // 10%トリガーの発生
  const usedSkill_10 = checkAction(bc.boss.Lucilius, bc);
  expect(usedSkill_10).toMatchObject(expectAction);
  recordAction(bc.boss.Lucilius, usedSkill_10); // はいっ！

  // 3%トリガーの発生
  const usedSkill_3 = checkAction(bc.boss.Lucilius, bc);
  expect(usedSkill_3).toMatchObject(expectAction);
  recordAction(bc.boss.Lucilius, usedSkill_3); // はいっ！

  // 三回は発生しない
  expect(checkAction(bc.boss.Lucilius, bc)).not.toMatchObject(expectAction);

  expect(checkAction(bc.boss.Lucilius, bc)).not.toBeUndefined();
})
