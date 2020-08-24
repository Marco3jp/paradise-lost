(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{158:function(t,e,n){var content=n(168);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("d01ecd3c",content,!0,{sourceMap:!1})},159:function(t,e,n){var content=n(170);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("608db57e",content,!0,{sourceMap:!1})},160:function(t,e,n){var content=n(172);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("0cf4d8e3",content,!0,{sourceMap:!1})},161:function(t,e,n){var content=n(174);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("e6e3465c",content,!0,{sourceMap:!1})},162:function(t,e,n){var content=n(176);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("28f1127f",content,!0,{sourceMap:!1})},163:function(t,e,n){"use strict";n.r(e);var o=n(1).a.extend({name:"BossStatus",props:["boss"]}),r=(n(167),n(20)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-column justify-between boss-status"},[n("div",[n("span",[t._v(t._s(t.boss.name))])]),t._v(" "),n("div",{class:{od:t.boss.isOverDrive}},[n("span",[t._v("OD")])]),t._v(" "),n("div",{class:{ct:t.boss.isCTMax}},[n("span",[t._v("CT")])]),t._v(" "),n("div",[n("span",[t._v(t._s(t.boss.health)+"%")])])])}),[],!1,null,"a56094e8",null);e.default=component.exports},164:function(t,e,n){"use strict";n.r(e);n(29);var o=n(1).a.extend({name:"BossAction",props:["action"],computed:{actionName:function(){var t,e;return null!==(e=null===(t=this.action)||void 0===t?void 0:t.name)&&void 0!==e?e:"不明(未実装か不具合です)"},actionDescription:function(){var t,e;return null!==(e=null===(t=this.action)||void 0===t?void 0:t.description)&&void 0!==e?e:"不明(未実装か不具合です)"}}}),r=(n(169),n(20)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-column justify-between boss-action"},[n("div",{staticClass:"boss-action-detail"},[n("h3",[t._v(t._s(t.actionName))]),t._v(" "),n("span",[t._v(t._s(t.actionDescription))])]),t._v(" "),t._e()])}),[],!1,null,"1110f296",null);e.default=component.exports},165:function(t,e,n){"use strict";n.r(e);var o=n(1).a.extend({name:"BossStatusController",props:["boss"]}),r=(n(171),n(20)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-column justify-between boss-status-controller"},[n("div",{staticClass:"flex justify-around od-ct-controller"},[n("div",{class:{od:t.boss.isOverDrive},on:{click:function(e){return t.$emit("toggle-od")}}},[t._v("OD")]),t._v(" "),n("div",{class:{ct:t.boss.isCTMax},on:{click:function(e){return t.$emit("toggle-ct")}}},[t._v("CT")])]),t._v(" "),n("div",{staticClass:"flex justify-between health-controller"},[n("div",{on:{click:function(e){return t.$emit("decrease",5)}}},[n("svg",{staticClass:"icon",attrs:{viewBox:"0 0 24 24"}},[n("path",{attrs:{fill:"currentColor",d:"M18.41,7.41L17,6L11,12L17,18L18.41,16.59L13.83,12L18.41,7.41M12.41,7.41L11,6L5,12L11,18L12.41,16.59L7.83,12L12.41,7.41Z"}})])]),t._v(" "),n("div",{on:{click:function(e){return t.$emit("decrease",1)}}},[n("svg",{staticClass:"icon",attrs:{viewBox:"0 0 24 24"}},[n("path",{attrs:{fill:"currentColor",d:"M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"}})])]),t._v(" "),n("div",{on:{click:function(e){return t.$emit("increase",1)}}},[n("svg",{staticClass:"icon",attrs:{viewBox:"0 0 24 24"}},[n("path",{attrs:{fill:"currentColor",d:"M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"}})])]),t._v(" "),n("div",{on:{click:function(e){return t.$emit("increase",5)}}},[n("svg",{staticClass:"icon",attrs:{viewBox:"0 0 24 24"}},[n("path",{attrs:{fill:"currentColor",d:"M5.59,7.41L7,6L13,12L7,18L5.59,16.59L10.17,12L5.59,7.41M11.59,7.41L13,6L19,12L13,18L11.59,16.59L16.17,12L11.59,7.41Z"}})])])])])}),[],!1,null,"6881e838",null);e.default=component.exports},166:function(t,e,n){"use strict";n.r(e);var o=n(1).a.extend({name:"BossController",props:["boss","isOnce"],methods:{onClickCheckedAction:function(){this.isOnce&&this.$emit("checked-action")}}}),r=(n(173),n(20)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex justify-between boss-controller"},[n("div",{class:{targeting:"BlackWing"===t.boss.name},on:{click:function(e){return t.$emit("target-boss","BlackWing")}}},[t._v("羽")]),t._v(" "),n("div",{on:{click:t.onClickCheckedAction}},[n("svg",{class:{disabled:!t.isOnce},attrs:{height:"100%",viewBox:"0 0 24 24"}},[n("path",{attrs:{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}})])]),t._v(" "),n("div",{class:{targeting:"Lucilius"===t.boss.name},on:{click:function(e){return t.$emit("target-boss","Lucilius")}}},[t._v("ルシ")])])}),[],!1,null,"1aa80e59",null);e.default=component.exports},167:function(t,e,n){"use strict";var o=n(158);n.n(o).a},168:function(t,e,n){(e=n(41)(!1)).push([t.i,".boss-status[data-v-a56094e8]{text-align:center;border-bottom:1px solid #000}.boss-status>div[data-v-a56094e8]{flex-grow:1;display:flex;flex-direction:column;justify-content:center}.boss-status .ct[data-v-a56094e8],.boss-status .od[data-v-a56094e8]{color:red}",""]),t.exports=e},169:function(t,e,n){"use strict";var o=n(159);n.n(o).a},170:function(t,e,n){(e=n(41)(!1)).push([t.i,".boss-action[data-v-1110f296]{height:100%}.boss-action .boss-action-detail[data-v-1110f296]{height:60%}.boss-action .boss-action-tools[data-v-1110f296]{height:40%}",""]),t.exports=e},171:function(t,e,n){"use strict";var o=n(160);n.n(o).a},172:function(t,e,n){(e=n(41)(!1)).push([t.i,".boss-status-controller[data-v-6881e838]{height:100%}.boss-status-controller .od-ct-controller[data-v-6881e838]{height:40%}.boss-status-controller .od-ct-controller .ct[data-v-6881e838],.boss-status-controller .od-ct-controller .od[data-v-6881e838]{color:red}.boss-status-controller .health-controller[data-v-6881e838]{height:60%;text-align:center}.boss-status-controller .health-controller .icon[data-v-6881e838]{height:100%;width:100%}",""]),t.exports=e},173:function(t,e,n){"use strict";var o=n(161);n.n(o).a},174:function(t,e,n){(e=n(41)(!1)).push([t.i,".boss-controller[data-v-1aa80e59]{height:100%}.boss-controller .disabled[data-v-1aa80e59]{color:#bdbdbd;transform:scale(.75)}.boss-controller>div[data-v-1aa80e59]{text-align:center;width:33.33333%;display:flex;flex-direction:column;justify-content:center}.boss-controller .targeting[data-v-1aa80e59]{font-size:1.2rem;font-weight:700}",""]),t.exports=e},175:function(t,e,n){"use strict";var o=n(162);n.n(o).a},176:function(t,e,n){(e=n(41)(!1)).push([t.i,'.container{height:95vh;overflow:hidden}.container .status{height:40%}.container .status>div{width:50%}.container .action{height:30%}.container .status-controller{height:20%}.container .controller{height:10%}.container .checked-modal{display:flex;flex-direction:column;justify-content:space-evenly;position:fixed;text-align:center;top:0;left:0;height:100vh;width:100vw;background:rgba(96,125,139,.75)}.container .checked-modal>div>div{padding:24px;background:#fff;border:1px solid #000}.title{font-family:"Quicksand","Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:block;font-weight:300;font-size:3rem;color:#35495e;letter-spacing:1px}',""]),t.exports=e},177:function(t,e,n){"use strict";n.r(e);var o=n(1),r=n(156),c=(n(29),function t(e,n){Object(r.a)(this,t),this.name=e,this.actions=n,this.health=100,this.isCTMax=!1,this.isOverDrive=!1,this.usedSkill=[]});function l(t){return t.isCTMax}function d(t){return Object.prototype.hasOwnProperty.call(t,"isOnce")}var f=[{id:0,name:"パラダイス・ロスト",description:"無属性全体ダメージ(3万)",priority:98,effects:[{target:"player",effect:{type:"debuff",clearable:!1,effectTurn:3,name:"召喚不可"}}],isOnce:!0,require:function(){return!0}},{id:1,name:"ポースポロス",description:"(ランダム属性)単体特大ダメージ＋強化効果を全て消去\n(編成画面で最も攻撃力が高いキャラを狙う)",priority:10,require:function(t){return l(t.boss.Lucilius)&&t.boss.BlackWing.health>50&&!t.boss.Lucilius.isOverDrive}},{id:2,name:"イブリース",description:"(ランダム属性)3000ダメージ多段+2万ダメージ×2回\n全体に恐怖、衰弱、裂傷(1～3T)を付与",priority:10,require:function(t){return l(t.boss.Lucilius)&&t.boss.BlackWing.health>50&&t.boss.Lucilius.isOverDrive}},{id:3,name:"アキシオン・アポカリプス",description:"(ランダム属性)3回ダメージ\nモードゲージ上昇\n福音の赫刃をさらに+1(合計+2)\n赫刃II以上…ルシファーの弱体効果回復(1つ)\n赫刃III以上…全体の強化効果を全て消去\n赫刃IV以上…全体に無属性10000ダメージ\n赫刃V…全体に最大HPダウン(累積)",priority:10,require:function(t){return l(t.boss.Lucilius)&&t.boss.BlackWing.health<=50&&t.boss.BlackWing.health>0}},{id:4,name:"ポースポロス",description:"(ランダム属性)単体特大ダメージ＋強化効果を全て消去\n(現在HPが最も低いキャラを狙う)",priority:10,require:function(t){return l(t.boss.Lucilius)&&0===t.boss.BlackWing.health&&!t.boss.Lucilius.isOverDrive}},{id:5,name:"オービタルブラック",description:"(ランダム属性)3回ダメージ\n全体にハレーション(消去不可、5T)を付与\n試練8未達成…全体の攻撃アビリティ2ターン延長\n試練9未達成…全体の回復アビリティ2ターン延長\n試練10未達成…全体の弱体アビリティ2ターン延長\n試練11未達成…全体の強化アビリティ2ターン延長\n(それぞれ赤、緑、青、黄色の枠のアビリティ)",priority:10,require:function(t){return l(t.boss.Lucilius)&&0===t.boss.BlackWing.health&&t.boss.Lucilius.isOverDrive}},{id:6,name:"パラダイス・ロスト",description:"(ランダム属性)全体ダメージ(7～8万程度)\n「全属性カット」効果貫通\n倒したキャラに「復活不可」付与",priority:100,require:function(t){return l(t.boss.Lucilius)&&l(t.boss.BlackWing)}},{id:7,description:"強制敗北",name:"ジ・エンド",priority:99,require:function(t){return 0===t.boss.countdown}},{id:8,name:"真の力解放",description:"モードゲージリセット\nルシファー&黒き羽の弱体効果リセット\nルシファーが初回の特殊技を使用するまで最大CTが固定\nルシファーの最大CT増加(1→2)",priority:30,isOnce:!0,isAuto:!0,require:function(t){return t.boss.BlackWing.health<=50}},{id:9,name:"ポースポロス",description:"(ランダム属性)単体特大ダメージ＋強化効果を全て消去\n(編成画面で最も攻撃力が高いキャラを狙う)",priority:30,isOnce:!0,require:function(t){return t.boss.Lucilius.health>90&&t.boss.Lucilius.health<=95}},{id:10,name:"アキシオン",description:"(ランダム属性)3回ダメージ\n(3回とも現在HPが最も低いキャラを狙う)\nこの攻撃で戦闘不能キャラが出た場合：全体に無属性30000ダメージ",priority:30,isOnce:!0,require:function(t){return t.boss.Lucilius.health>75&&t.boss.Lucilius.health<=85}},{id:11,name:"無神論",description:"(※1人目のみ発動)\n(ルシファー行動後に黒き羽の特殊行動)\nダメージなし",priority:30,isOnce:!0,effects:[{target:"Lucilius",effect:{clearable:!1,description:"指定属性(ランダム)以外からのダメージを50%軽減する状態 / 1ターンに10,000,000以上の指定属性ダメージを与えると解除",effectTime:300,name:"絶対否定",type:"buff"}},{target:"Lucilius",effect:{clearable:!1,description:"指定属性以外からの弱体耐性が上昇している状態 / ターン終了時に6個以上の弱体効果が付与されていると解除",effectTime:300,name:"永遠拒絶",type:"buff"}}],require:function(t){return t.boss.Lucilius.health<=75&&0!==t.boss.BlackWing.health}},{id:12,name:"チャージターンMAX",description:"",priority:30,isOnce:!0,require:function(t){return t.boss.Lucilius.health<=70}},{id:13,name:"アキシオン",description:"(ランダム属性)全体攻撃×3回ダメージ(かばう不可)\nこの攻撃で戦闘不能キャラが出た場合：全体に無属性30000ダメージ",priority:30,isOnce:!0,require:function(t){return t.boss.Lucilius.health<=60&&t.boss.Lucilius.health>55}},{id:14,name:"チャージターンMAX",description:"",priority:30,isOnce:!0,require:function(t){return t.boss.Lucilius.health<=55}},{id:15,name:"強化",description:"ルシファーの弱体効果リセット\nルシファーの攻撃力約1.3倍",priority:30,isOnce:!0,isAuto:!0,require:function(t){return t.boss.Lucilius.health<=25}},{id:16,name:"ゴフェル・アーク",description:"編成内に同じ種族のキャラがいる場合、\n種族の被る配置が後ろのキャラに最大HPの100%の無属性ダメージ\n※種族被りがない場合はダメージなし\n",priority:50,isOnce:!0,effects:[{target:"player",effect:{clearable:!1,name:"復活不可",type:"debuff"}},{target:"player",effect:{clearable:!1,name:"召喚不可",type:"debuff"}},{target:"field",effect:{clearable:!1,description:"バトルの経過ターンが2～3ターンずつ進む状態\n※敵のチャージターンも2～3ずつ増える",name:"天の水門",type:"other"}}],require:function(t){return t.boss.Lucilius.health<=25}},{id:17,name:"アキシオン・アポカリプス",description:"(ランダム属性)3回ダメージ\nモードゲージ上昇\n福音の赫刃をさらに+1(合計+2)\n赫刃II以上…ルシファーの弱体効果回復(1つ)\n赫刃III以上…全体の強化効果を全て消去\n赫刃IV以上…全体に無属性10000ダメージ\n赫刃V…全体に最大HPダウン(累積)\n※15%以下で特殊行動無し",priority:30,isOnce:!0,require:function(t){return t.boss.Lucilius.health<=20&&t.boss.Lucilius.health>15}},{id:18,name:"アキシオン・アポカリプス",description:"(ランダム属性)3回ダメージ\nモードゲージ上昇\n福音の赫刃をさらに+1\n赫刃II以上…ルシファーの弱体効果回復(1つ)\n赫刃III以上…全体の強化効果を全て消去\n赫刃IV以上…全体に無属性10000ダメージ\n赫刃V…全体に最大HPダウン(累積)\n※10%以下で特殊行動無し",priority:30,isOnce:!0,require:function(t){return t.boss.Lucilius.health<=15&&t.boss.Lucilius.health>10}},{id:19,name:"強化",description:"ルシファーの弱体効果リセット\nルシファーの攻撃力倍化\n",priority:30,isOnce:!0,isAuto:!0,require:function(t){return t.boss.Lucilius.health<=10}},{id:20,name:"パラダイス・ロスト",description:"(ランダム属性)全体9,999,999ダメージ\n(※ダメージカット可能)",priority:30,isOnce:!0,require:function(t){return t.boss.Lucilius.health<=10}},{id:21,name:"パラダイス・ロスト",description:"(ランダム属性)全体9,999,999ダメージ\n(※ダメージカット可能)",priority:30,isOnce:!0,require:function(t){return t.boss.Lucilius.health<=3}},{id:22,description:"全体攻撃(ランダム属性)",name:"通常攻撃",priority:0,require:function(t){return!l(t.boss.Lucilius)&&t.boss.BlackWing.health>50}},{id:23,description:"多段攻撃",name:"通常攻撃",priority:0,require:function(t){return!l(t.boss.Lucilius)&&t.boss.BlackWing.health<=50}}],h=function t(){Object(r.a)(this,t),this.boss={Lucilius:new c("Lucilius",f),BlackWing:new c("BlackWing",[]),countdown:6}},v=n(163),m=n(164),L=n(165),x=n(166);n(61),n(62);var y=o.a.extend({components:{BossStatus:v.default,BossAction:m.default,BossStatusController:L.default,BossController:x.default},data:function(){return{battleContext:new h,currentBossName:"Lucilius",checkActionSafety:!1}},methods:{onTargetBoss:function(t){this.currentBossName=t},onCheckedAction:function(){this.checkActionSafety=!0},onMistakeCheckedAction:function(){this.checkActionSafety=!1},onTrulyCheckedAction:function(){var t,e;t=this.currentBoss,void 0!==(e=this.expectedAction)&&("number"==typeof e?t.usedSkill.push(e):d(e)&&e.isOnce&&t.usedSkill.push(e.id)),this.checkActionSafety=!1},onToggleOD:function(){this.currentBoss.isOverDrive=!this.currentBoss.isOverDrive},onToggleCT:function(){this.currentBoss.isCTMax=!this.currentBoss.isCTMax},onIncrease:function(t){this.currentBoss.health=this.currentBoss.health+t>=100?100:this.currentBoss.health+t},onDecrease:function(t){this.currentBoss.health=this.currentBoss.health-t<=0?0:this.currentBoss.health-t}},computed:{expectedAction:function(){return function(t,e){for(var n=void 0,i=0;i<t.actions.length;i++)if(t.actions[i].require(e)){if(d(t.actions[i])&&(t.actions[i].isAuto||t.actions[i].isOnce&&t.usedSkill.includes(t.actions[i].id)))continue;(void 0===n||n.priority<t.actions[i].priority)&&(n=t.actions[i])}return n}(this.currentBoss,this.battleContext)},currentBoss:function(){return"Lucilius"===this.currentBossName?this.battleContext.boss.Lucilius:this.battleContext.boss.BlackWing},isOnce:function(){return void 0!==this.expectedAction&&d(this.expectedAction)&&this.expectedAction.isOnce}}}),k=(n(175),n(20)),component=Object(k.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container flex flex-column"},[n("div",{staticClass:"flex justify-between status"},[n("boss-status",{attrs:{boss:t.battleContext.boss.BlackWing}}),t._v(" "),n("boss-status",{attrs:{boss:t.battleContext.boss.Lucilius}})],1),t._v(" "),n("div",{staticClass:"action"},[n("boss-action",{attrs:{action:t.expectedAction}})],1),t._v(" "),n("div",{staticClass:"status-controller"},[n("boss-status-controller",{attrs:{boss:t.currentBoss},on:{"toggle-od":t.onToggleOD,"toggle-ct":t.onToggleCT,increase:t.onIncrease,decrease:t.onDecrease}})],1),t._v(" "),n("div",{staticClass:"controller"},[n("boss-controller",{attrs:{boss:t.currentBoss,"is-once":t.isOnce},on:{"target-boss":t.onTargetBoss,"checked-action":t.onCheckedAction}})],1),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.checkActionSafety,expression:"checkActionSafety"}],staticClass:"checked-modal"},[n("h2",[t._v("ちゃんと見た？")]),t._v(" "),n("div",{staticClass:"flex justify-around"},[n("div",{on:{click:t.onTrulyCheckedAction}},[t._v("はいっ！")]),t._v(" "),n("div",{on:{click:t.onMistakeCheckedAction}},[t._v("押し間違えた")])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BossStatus:n(163).default,BossAction:n(164).default,BossStatusController:n(165).default,BossController:n(166).default})}}]);