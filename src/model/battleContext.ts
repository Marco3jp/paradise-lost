interface bossStatus {
  health: number // percent
  isCTMax: boolean
  isOverDrive: boolean
}

export interface BattleContext {
  boss: {
    Lucilius: bossStatus,
    BlackWing: bossStatus,
    countdown: number
  },
}

export function ct(bs: bossStatus) {
  return bs.isCTMax
}
