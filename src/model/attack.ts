import {battleContext} from "~/src/model/battleContext";

export interface attack {
  id: number,
  name: string,
  description: string,
  priority: number,

  require(bc: battleContext): boolean,
}
