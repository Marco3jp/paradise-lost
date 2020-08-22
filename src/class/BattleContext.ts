import {battleContext, bossStatus} from "~/src/model/battleContext";
import {BossStatus} from "~/src/class/BossStatus";
import {LuciliusActions} from "~/src/LuciliusActions";

export class BattleContext implements battleContext {
  boss: { Lucilius: bossStatus; BlackWing: bossStatus; countdown: number };

  constructor() {
    this.boss = {
      Lucilius: new BossStatus(LuciliusActions),
      BlackWing: new BossStatus([]),
      countdown: 6
    }
  }
}
