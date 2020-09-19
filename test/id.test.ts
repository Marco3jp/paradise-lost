import {LuciliusActions} from "~/src/LuciliusActions";
import {BlackWingActions} from "~/src/BlackWingActions";

test('ルシ行動IDチェック', () => {
  const idList: Array<string> = [];
  LuciliusActions.forEach(action => {
    expect(idList).not.toContain(action.id);
    idList.push(action.id);
  })
});

test('黒き羽行動IDチェック', () => {
  const idList: Array<string> = [];
  BlackWingActions.forEach(action => {
    expect(idList).not.toContain(action.id);
    idList.push(action.id);
  })
});
