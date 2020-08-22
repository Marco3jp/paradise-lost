interface bossStatus {
  health: number // percent
  isCTMax: boolean
  isOverDrive: boolean
}

export interface battleContext {
  boss: {
    Lucilius: bossStatus,
    BlackWing: bossStatus,
    countdown: number
  },
}

export function ct(bs: bossStatus): boolean {
  return bs.isCTMax
}
