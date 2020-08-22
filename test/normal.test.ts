import 'jest'
import {checkAction} from "~/src/checkAction";
import {BattleContext} from "~/src/class/BattleContext";
import {usedParadiseLost} from "~/src/model/battleContext";

test('全体攻撃', () => {
  const bc = new BattleContext();
  usedParadiseLost(bc.boss.Lucilius);

  bc.boss.Lucilius.isCTMax = false;
  bc.boss.BlackWing.health = 100;
  expect(checkAction(bc.boss.Lucilius, bc)).toMatchObject({name: "通常攻撃", description: "全体攻撃(ランダム属性)"});
  bc.boss.BlackWing.health = 51;
  expect(checkAction(bc.boss.Lucilius, bc)).toMatchObject({name: "通常攻撃", description: "全体攻撃(ランダム属性)"});
  bc.boss.BlackWing.health = 50;
  expect(checkAction(bc.boss.Lucilius, bc)).not.toMatchObject({name: "通常攻撃", description: "全体攻撃(ランダム属性)"});
  expect(checkAction(bc.boss.Lucilius, bc)).not.toBeUndefined();
})

test('多段攻撃', () => {
  const bc = new BattleContext();
  usedParadiseLost(bc.boss.Lucilius);

  bc.boss.Lucilius.isCTMax = false;
  bc.boss.BlackWing.health = 51;
  expect(checkAction(bc.boss.Lucilius, bc)).not.toMatchObject({description: "多段攻撃", name: "通常攻撃"});
  expect(checkAction(bc.boss.Lucilius, bc)).not.toBeUndefined();
  bc.boss.BlackWing.health = 50;
  expect(checkAction(bc.boss.Lucilius, bc)).toMatchObject({description: "多段攻撃", name: "通常攻撃"});
  bc.boss.BlackWing.health = 0;
  expect(checkAction(bc.boss.Lucilius, bc)).toMatchObject({description: "多段攻撃", name: "通常攻撃"});
})
