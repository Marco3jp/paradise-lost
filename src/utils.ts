import {BossStatus} from "~/src/class/BossStatus";

function toggleMarkAction(bossStatus: BossStatus, skillId: string) {
  const index = bossStatus.usedSkill.findIndex((skillId) => skillId === skillId);
  if (index === -1) {
    bossStatus.usedSkill.push(skillId);
  } else {
    bossStatus.usedSkill.splice(index, 1);
  }
}

export function toggleMarkParadiseLost100(luciliusBossStatus: BossStatus) {
  toggleMarkAction(luciliusBossStatus, "paradise_lost_100")
}

// ポースポロス
export function toggleMarkPhosphorus(luciliusBossStatus: BossStatus) {
  toggleMarkAction(luciliusBossStatus, "phosphorus_95")
}

// アキシオン at 85%
export function toggleMarkAxion85(luciliusBossStatus: BossStatus) {
  toggleMarkAction(luciliusBossStatus, "axion_85")
}

// 無神論
export function toggleMarkAtheism(luciliusBossStatus: BossStatus) {
  toggleMarkAction(luciliusBossStatus, "atheism")
}

// チャージターンMAX at 70%
export function toggleMarkChargeMax70(luciliusBossStatus: BossStatus) {
  toggleMarkAction(luciliusBossStatus, "charge_max_70")
}

// アキシオン at 60%
export function toggleMarkAxion60(luciliusBossStatus: BossStatus) {
  toggleMarkAction(luciliusBossStatus, "axion_60")
}

// チャージターンMAX at 55%
export function toggleMarkChargeMax55(luciliusBossStatus: BossStatus) {
  toggleMarkAction(luciliusBossStatus, "charge_max_55")
}

// ゴッフェルアーク
export function toggleMarkGopherwoodArk(luciliusBossStatus: BossStatus) {
  toggleMarkAction(luciliusBossStatus, "gopherwood_ark_25")
}

// アキシオン・アポカリプス at 20%
export function toggleMarkAxionApocalypse20(luciliusBossStatus: BossStatus) {
  toggleMarkAction(luciliusBossStatus, "axion_apocalypse_20")
}

// アキシオン・アポカリプス at 15%
export function toggleMarkAxionApocalypse15(luciliusBossStatus: BossStatus) {
  toggleMarkAction(luciliusBossStatus, "axion_apocalypse_15")
}

// パラダイス・ロスト at 10%
export function toggleMarkParadiseLost10(luciliusBossStatus: BossStatus) {
  toggleMarkAction(luciliusBossStatus, "paradise_lost_10")
}

// パラダイス・ロスト at 3%
export function toggleMarkParadiseLost3(luciliusBossStatus: BossStatus) {
  toggleMarkAction(luciliusBossStatus, "paradise_lost_3")
}

// 黙示録の喇叭 ( Black Wings at 50% )
export function toggleMarkSevenTrumpets(luciliusBossStatus: BossStatus) {
  toggleMarkAction(luciliusBossStatus, "seven_trumpets")
}
