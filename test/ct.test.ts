import 'jest'
import {BattleContext} from "~/src/class/BattleContext";
import {toggleMarkParadiseLost100} from "~/src/utils";
import {checkAction} from "~/src/checkAction";

test('ポースポロス', () => {
  const bc = new BattleContext();
  toggleMarkParadiseLost100(bc.boss.Lucilius);

  bc.boss.Lucilius.isCTMax = true;
  bc.boss.Lucilius.isOverDrive = false;

  bc.boss.BlackWing.health = 100;
  expect(checkAction(bc.boss.Lucilius, bc)).toMatchObject({name: "ポースポロス", description: "(ランダム属性)単体特大ダメージ＋強化効果を全て消去\n" +
      "(編成画面で最も攻撃力が高いキャラを狙う)"});

  bc.boss.BlackWing.health = 51;
  expect(checkAction(bc.boss.Lucilius, bc)).toMatchObject({name: "ポースポロス", description: "(ランダム属性)単体特大ダメージ＋強化効果を全て消去\n" +
      "(編成画面で最も攻撃力が高いキャラを狙う)"});

  bc.boss.BlackWing.health = 50;
  expect(checkAction(bc.boss.Lucilius, bc)).not.toMatchObject({name: "ポースポロス", description: "(ランダム属性)単体特大ダメージ＋強化効果を全て消去\n" +
      "(編成画面で最も攻撃力が高いキャラを狙う)"});

  expect(checkAction(bc.boss.Lucilius, bc)).not.toBeUndefined();
})

test('イブリース', () => {
  const bc = new BattleContext();
  toggleMarkParadiseLost100(bc.boss.Lucilius);

  bc.boss.Lucilius.isCTMax = true;
  bc.boss.Lucilius.isOverDrive = true;

  bc.boss.BlackWing.health = 100;
  expect(checkAction(bc.boss.Lucilius, bc)).toMatchObject({name: "イブリース", description: "(ランダム属性)3000ダメージ多段+2万ダメージ×2回\n" +
      "全体に恐怖、衰弱、裂傷(1～3T)を付与"});

  bc.boss.BlackWing.health = 51;
  expect(checkAction(bc.boss.Lucilius, bc)).toMatchObject({name: "イブリース", description: "(ランダム属性)3000ダメージ多段+2万ダメージ×2回\n" +
      "全体に恐怖、衰弱、裂傷(1～3T)を付与"});

  bc.boss.BlackWing.health = 50;
  expect(checkAction(bc.boss.Lucilius, bc)).not.toMatchObject({name: "イブリース", description: "(ランダム属性)3000ダメージ多段+2万ダメージ×2回\n" +
      "全体に恐怖、衰弱、裂傷(1～3T)を付与"});

  expect(checkAction(bc.boss.Lucilius, bc)).not.toBeUndefined();
})

test('アキシオン・アポカリプス', () => {
  const bc = new BattleContext();
  toggleMarkParadiseLost100(bc.boss.Lucilius);

  bc.boss.Lucilius.isCTMax = true;

  bc.boss.Lucilius.isOverDrive = true;
  bc.boss.BlackWing.health = 50;
  expect(checkAction(bc.boss.Lucilius, bc)).toMatchObject({name: "アキシオン・アポカリプス", description: "(ランダム属性)3回ダメージ\n" +
      "モードゲージ上昇\n" +
      "福音の赫刃をさらに+1(合計+2)\n" +
      "赫刃II以上…ルシファーの弱体効果回復(1つ)\n" +
      "赫刃III以上…全体の強化効果を全て消去\n" +
      "赫刃IV以上…全体に無属性10000ダメージ\n" +
      "赫刃V…全体に最大HPダウン(累積)"});

  bc.boss.BlackWing.health = 1;
  expect(checkAction(bc.boss.Lucilius, bc)).toMatchObject({name: "アキシオン・アポカリプス", description: "(ランダム属性)3回ダメージ\n" +
      "モードゲージ上昇\n" +
      "福音の赫刃をさらに+1(合計+2)\n" +
      "赫刃II以上…ルシファーの弱体効果回復(1つ)\n" +
      "赫刃III以上…全体の強化効果を全て消去\n" +
      "赫刃IV以上…全体に無属性10000ダメージ\n" +
      "赫刃V…全体に最大HPダウン(累積)"});

  bc.boss.Lucilius.isOverDrive = false;
  bc.boss.BlackWing.health = 50;
  expect(checkAction(bc.boss.Lucilius, bc)).toMatchObject({name: "アキシオン・アポカリプス", description: "(ランダム属性)3回ダメージ\n" +
      "モードゲージ上昇\n" +
      "福音の赫刃をさらに+1(合計+2)\n" +
      "赫刃II以上…ルシファーの弱体効果回復(1つ)\n" +
      "赫刃III以上…全体の強化効果を全て消去\n" +
      "赫刃IV以上…全体に無属性10000ダメージ\n" +
      "赫刃V…全体に最大HPダウン(累積)"});

  bc.boss.BlackWing.health = 1;
  expect(checkAction(bc.boss.Lucilius, bc)).toMatchObject({name: "アキシオン・アポカリプス", description: "(ランダム属性)3回ダメージ\n" +
      "モードゲージ上昇\n" +
      "福音の赫刃をさらに+1(合計+2)\n" +
      "赫刃II以上…ルシファーの弱体効果回復(1つ)\n" +
      "赫刃III以上…全体の強化効果を全て消去\n" +
      "赫刃IV以上…全体に無属性10000ダメージ\n" +
      "赫刃V…全体に最大HPダウン(累積)"});


  bc.boss.BlackWing.health = 0;
  expect(checkAction(bc.boss.Lucilius, bc)).not.toMatchObject({name: "アキシオン・アポカリプス", description: "(ランダム属性)3回ダメージ\n" +
      "モードゲージ上昇\n" +
      "福音の赫刃をさらに+1(合計+2)\n" +
      "赫刃II以上…ルシファーの弱体効果回復(1つ)\n" +
      "赫刃III以上…全体の強化効果を全て消去\n" +
      "赫刃IV以上…全体に無属性10000ダメージ\n" +
      "赫刃V…全体に最大HPダウン(累積)"});

  expect(checkAction(bc.boss.Lucilius, bc)).not.toBeUndefined();
})

test('ポースポロス(羽撃破後)', () => {
  const bc = new BattleContext();
  toggleMarkParadiseLost100(bc.boss.Lucilius);

  bc.boss.Lucilius.isCTMax = true;
  bc.boss.Lucilius.isOverDrive = false;

  bc.boss.BlackWing.health = 0;
  expect(checkAction(bc.boss.Lucilius, bc)).toMatchObject({name: "ポースポロス", description: "(ランダム属性)単体特大ダメージ＋強化効果を全て消去\n" +
      "(現在HPが最も低いキャラを狙う)"});

  bc.boss.BlackWing.health = 1;
  expect(checkAction(bc.boss.Lucilius, bc)).not.toMatchObject({name: "ポースポロス", description: "(ランダム属性)単体特大ダメージ＋強化効果を全て消去\n" +
      "(現在HPが最も低いキャラを狙う)"});

  expect(checkAction(bc.boss.Lucilius, bc)).not.toBeUndefined();
})

test('オービタルブラック', () => {
  const bc = new BattleContext();
  toggleMarkParadiseLost100(bc.boss.Lucilius);

  bc.boss.Lucilius.isCTMax = true;
  bc.boss.Lucilius.isOverDrive = true;

  bc.boss.BlackWing.health = 0;
  expect(checkAction(bc.boss.Lucilius, bc)).toMatchObject({name: "オービタルブラック", description: "(ランダム属性)3回ダメージ\n" +
      "全体にハレーション(消去不可、5T)を付与\n" +
      "試練8未達成…全体の攻撃アビリティ2ターン延長\n" +
      "試練9未達成…全体の回復アビリティ2ターン延長\n" +
      "試練10未達成…全体の弱体アビリティ2ターン延長\n" +
      "試練11未達成…全体の強化アビリティ2ターン延長\n" +
      "(それぞれ赤、緑、青、黄色の枠のアビリティ)"});

  bc.boss.BlackWing.health = 1;
  expect(checkAction(bc.boss.Lucilius, bc)).not.toMatchObject({name: "オービタルブラック", description: "(ランダム属性)3回ダメージ\n" +
      "全体にハレーション(消去不可、5T)を付与\n" +
      "試練8未達成…全体の攻撃アビリティ2ターン延長\n" +
      "試練9未達成…全体の回復アビリティ2ターン延長\n" +
      "試練10未達成…全体の弱体アビリティ2ターン延長\n" +
      "試練11未達成…全体の強化アビリティ2ターン延長\n" +
      "(それぞれ赤、緑、青、黄色の枠のアビリティ)"});

  expect(checkAction(bc.boss.Lucilius, bc)).not.toBeUndefined();
})

test('パラダイス・ロスト(CT一致)', () => {
  const bc = new BattleContext();
  toggleMarkParadiseLost100(bc.boss.Lucilius);

  bc.boss.Lucilius.isCTMax = true;
  bc.boss.BlackWing.isCTMax = true;

  bc.boss.Lucilius.isOverDrive = false;
  bc.boss.BlackWing.health = 100;
  bc.boss.Lucilius.health = 100;
  expect(checkAction(bc.boss.Lucilius, bc)).toMatchObject({name: "パラダイス・ロスト", description: "(ランダム属性)全体ダメージ(7～8万程度)\n" +
      "「全属性カット」効果貫通\n" +
      "倒したキャラに「復活不可」付与"});

  bc.boss.Lucilius.isOverDrive = true;
  bc.boss.BlackWing.health = 50;
  bc.boss.Lucilius.health = 50;
  expect(checkAction(bc.boss.Lucilius, bc)).toMatchObject({name: "パラダイス・ロスト", description: "(ランダム属性)全体ダメージ(7～8万程度)\n" +
      "「全属性カット」効果貫通\n" +
      "倒したキャラに「復活不可」付与"});

  bc.boss.BlackWing.health = 49;
  bc.boss.Lucilius.health = 49;
  expect(checkAction(bc.boss.Lucilius, bc)).toMatchObject({name: "パラダイス・ロスト", description: "(ランダム属性)全体ダメージ(7～8万程度)\n" +
      "「全属性カット」効果貫通\n" +
      "倒したキャラに「復活不可」付与"});

  bc.boss.BlackWing.health = 1;
  bc.boss.Lucilius.health = 1;
  expect(checkAction(bc.boss.Lucilius, bc)).toMatchObject({name: "パラダイス・ロスト", description: "(ランダム属性)全体ダメージ(7～8万程度)\n" +
      "「全属性カット」効果貫通\n" +
      "倒したキャラに「復活不可」付与"});
})

test('ジ・エンド', () => {
  const bc = new BattleContext();
  toggleMarkParadiseLost100(bc.boss.Lucilius);

  bc.boss.countdown = 0;

  bc.boss.Lucilius.isCTMax = true;
  bc.boss.Lucilius.isOverDrive = true;
  bc.boss.BlackWing.health = 100;
  bc.boss.Lucilius.health = 100;
  expect(checkAction(bc.boss.Lucilius, bc)).toMatchObject({name: "ジ・エンド", description: "強制敗北"});

  bc.boss.BlackWing.health = 50;
  bc.boss.Lucilius.health = 50;
  expect(checkAction(bc.boss.Lucilius, bc)).toMatchObject({name: "ジ・エンド", description: "強制敗北"});

  bc.boss.BlackWing.health = 49;
  bc.boss.Lucilius.health = 49;
  expect(checkAction(bc.boss.Lucilius, bc)).toMatchObject({name: "ジ・エンド", description: "強制敗北"});

  // パラロスのチェック
  bc.boss.Lucilius.isCTMax = true;
  bc.boss.BlackWing.isCTMax = true;
  expect(checkAction(bc.boss.Lucilius, bc)).not.toMatchObject({name: "ジ・エンド", description: "強制敗北"});
  expect(checkAction(bc.boss.Lucilius, bc)).not.toBeUndefined();
})
