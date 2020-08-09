export interface Effect {
  name: string,
  type: "buff" | "debuff" | "other",
  description?: string,
  clearable: boolean,
  effectTime?: number // second
  effectTurn?: number
}
