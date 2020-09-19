import {battleContext} from "~/src/model/battleContext";

export interface attack {
  type: "attack",
  id: string,
  name: string,
  description: string,
  priority: number,

  require(bc: battleContext): boolean,
}
