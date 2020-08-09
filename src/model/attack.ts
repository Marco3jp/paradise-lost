import {BattleContext} from "~/src/model/battleContext";

export interface Attack {
  name: string,
  description: string,
  priority: number,
  require(bc: BattleContext): boolean,
}
