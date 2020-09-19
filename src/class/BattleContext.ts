import {battleContext, bossStatus} from "~/src/model/battleContext";
import {BossStatus} from "~/src/class/BossStatus";
import {LuciliusActions} from "~/src/LuciliusActions";
import {BlackWingActions} from "~/src/BlackWingActions";

export class BattleContext implements battleContext {
  boss: { Lucilius: bossStatus; BlackWing: bossStatus; countdown: number };

  constructor() {
    this.boss = {
      Lucilius: new BossStatus("Lucilius", LuciliusActions),
      BlackWing: new BossStatus("BlackWing", BlackWingActions),
      countdown: 6
    }
  }
}
