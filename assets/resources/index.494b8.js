window.__require = function e(t, o, i) {
	function n(r, l) {
		if (!o[r]) {
			if (!t[r]) {
				var s = r.split("/");
				if (s = s[s.length - 1], !t[s]) {
					var c = "function" == typeof __require && __require;
					if (!l && c) return c(s, !0);
					if (a) return a(s, !0);
					throw new Error("Cannot find module '" + r + "'")
				}
				r = s
			}
			var h = o[r] = {
				exports: {}
			};
			t[r][0].call(h.exports, function (e) {
				return n(t[r][1][e] || e)
			}, h, h.exports, e, t, o, i)
		}
		return o[r].exports
	}
	for (var a = "function" == typeof __require && __require, r = 0; r < i.length; r++) n(i[r]);
	return n
}({
	en: [function (e, t) {
		"use strict";
		cc._RF.push(t, "ca21aUgHudFZKJ4cz/fdIqc", "en"), window.i18n || (window.i18n = {}), window.i18n.languages || (window.i18n.languages = {}), window.i18n.languages.en = {
			login: {
				noAccount: "No account,please create!"
			},
			sign: {
				"double rewards": "Sharing Award X2",
				"day%{value}": "Day%{value}"
			},
			fight: {
				fightStartAdAsk: "Watch ads to get bonuses?",
				fightOverAdAsk: "watch ads to get 5 extra steps?",
				highest: "highest: ",
				propExceedMaxTimes: "Reach the limit. No more effects for this round.",
				propNoEnough: "The props have been used up!",
				needCollect: "You still need to collect"
			},
			lottery: {
				lotteryNotEnoughGetLotteries: "No enough tickets! Click the button below to get more tickets.",
				noChargePleaseWait: "Coming soon",
				waitForLoadingAds: "Ads loading...",
				"still%{value}winLottery": "<color=#ffffff>\u8fd8\u6709<color=#7dd5ff>%{value}</color>\u6b21\u83b7\u5f97\u5956\u5238\u7684\u673a\u4f1a</color>"
			},
			pve: {
				cannotSkipLastLevel: "Please finish the previous checkpoints first!",
				highest: "Highest",
				title: "UNLOCK",
				unLockProp: "Congratulations on unlocking the prop."
			},
			task: {
				notExist: "Task not existed",
				succeed: "Task completed",
				fail: "Task not completed"
			},
			prop: {
				prop: "Get props",
				lackGold: "lack of gold",
				hammer: "hammer",
				magic: "magic",
				refresh: "refresh",
				infinite: "infinite",
				get: "obtain %{name} x%{num}"
			},
			table_prop: {
				"\u9524\u5b50": "Hammer",
				"\u9b54\u6cd5\u68d2": "Magic",
				"\u5237\u65b0": "Refresh",
				"\u65e0\u9650": "infinite",
				"\u6d88\u9664\u9009\u62e9\u76841\u4e2a\u86cb\u7cd5\uff0c\u6bcf\u5c40\u9650\u75283\u4e2a.": "Remove the selected cake. 3 times each game.",
				"\u8d4b\u4e88\u9009\u62e9\u76841\u4e2a\u86cb\u7cd5\u76f4\u7ebf\u7279\u6548\uff0c\u6bcf\u5c40\u9650\u75281\u4e2a.": "Give the cake a straight line effect. 1 times each game.",
				"\u91cd\u65b0\u6392\u5217\u6e38\u620f\u533a\u5185\u6240\u6709\u86cb\u7cd5\uff0c\u6bcf\u5c40\u9650\u75283\u6b21.": "Refresh. 3 times each game.",
				"\u4f7f\u7528\u540e\u672c\u5173\u4e0d\u518d\u9650\u5236\u6e38\u620f\u6b65\u6570,\u6bcf\u5c40\u9650\u75281\u4e2a.": "The steps will be infinite, 1 times each game."
			},
			rank: {
				shareTitle: "Cake Crush"
			},
			onlineReward: {
				receive: "Receive it",
				welcomeBack: "Welcome Back"
			},
			shop: {
				receive: "Receive it"
			},
			daily: {
				claim: "Claim",
				doubleBtn: "Double Claim",
				close: "Quit"
			},
			unlock: {
				start: "Start"
			}
		}, cc._RF.pop()
	}, {}],
	zh: [function (e, t) {
		"use strict";
		cc._RF.push(t, "f5034jWLxVDm6kdhgPzlihH", "zh"), window.i18n || (window.i18n = {}), window.i18n.languages || (window.i18n.languages = {}), window.i18n.languages.zh = {
			login: {
				noAccount: "\u6ca1\u6709\u8d26\u6237,\u8bf7\u521b\u5efa"
			},
			sign: {
				"double rewards": "\u5206\u4eab\u5956\u52b1\u6570\u91cfX2",
				"day%{value}": " \u7b2c%{value}\u5929"
			},
			fight: {
				fightStartAdAsk: "\u89c2\u770b\u5e7f\u544a\u53ef\u83b7\u5f972\u4e2a\u968f\u673a\u6548\u679c\uff0c\u662f\u5426\u89c2\u770b\uff1f",
				fightOverAdAsk: "\u6b65\u6570\u4e0d\u8db3!\u89c2\u770b\u5e7f\u544a\u53ef\u989d\u5916\u83b7\u5f975\u6b65\uff0c\u662f\u5426\u89c2\u770b\uff1f",
				highest: "\u6700\u9ad8\u5206: ",
				propExceedMaxTimes: "\u8be5\u9053\u5177\u5df2\u7ecf\u8d85\u8fc7\u672c\u5c40\u6700\u5927\u53ef\u7528\u6b21\u6570",
				propNoEnough: "\u8be5\u9053\u5177\u5df2\u7528\u5b8c\uff0c\u5feb\u53bb\u8d2d\u4e70\u5427!",
				needCollect: "\u4f60\u8fd8\u9700\u6536\u96c6"
			},
			lottery: {
				lotteryNotEnoughGetLotteries: "\u5956\u5238\u4e0d\u8db3!\u70b9\u51fb\u4e0b\u65b9\u6309\u94ae\u83b7\u5f97\u66f4\u591a\u5956\u5238",
				noChargePleaseWait: "\u6682\u672a\u5f00\u653e\u5145\u503c\u529f\u80fd\uff0c\u656c\u8bf7\u671f\u5f85",
				waitForLoadingAds: "\u6b63\u5728\u52a0\u8f7d\u5e7f\u544a\uff0c\u8bf7\u9a9a\u7b49",
				"still%{value}winLottery": "<color=#ffffff>\u8fd8\u6709<color=#7dd5ff>%{value}</color>\u6b21\u83b7\u5f97\u5956\u5238\u7684\u673a\u4f1a</color>"
			},
			pve: {
				cannotSkipLastLevel: "\u4e0d\u80fd\u8df3\u8fc7\u672a\u901a\u5173\u7684\u5173\u5361",
				highest: "\u6700\u9ad8\u5206",
				title: "\u89e3\u9501\u9053\u5177",
				unLockProp: "\u606d\u559c\u89e3\u9501\u9053\u5177"
			},
			task: {
				notExist: "\u4efb\u52a1\u4e0d\u5b58\u5728",
				succeed: "\u4efb\u52a1\u9886\u53d6\u6210\u529f",
				fail: "\u4efb\u52a1\u672a\u5b8c\u6210"
			},
			prop: {
				prop: "\u9053\u5177",
				lackGold: "\u91d1\u5e01\u4e0d\u8db3",
				hammer: "\u9524\u5b50",
				magic: "\u9b54\u6cd5\u68d2",
				refresh: "\u5237\u65b0",
				infinite: "\u65e0\u9650",
				get: "\u83b7\u5f97%{name}x%{num}"
			},
			table_prop: {
				"\u9524\u5b50": "\u9524\u5b50",
				"\u9b54\u6cd5\u68d2": "\u9b54\u6cd5\u68d2",
				"\u5237\u65b0": "\u5237\u65b0",
				"\u65e0\u9650": "\u65e0\u9650",
				"\u6d88\u9664\u9009\u62e9\u76841\u4e2a\u86cb\u7cd5\uff0c\u6bcf\u5c40\u9650\u75283\u4e2a.": "\u6d88\u9664\u9009\u62e9\u76841\u4e2a\u86cb\u7cd5\uff0c\u6bcf\u5c40\u9650\u75283\u4e2a.",
				"\u8d4b\u4e88\u9009\u62e9\u76841\u4e2a\u86cb\u7cd5\u76f4\u7ebf\u7279\u6548\uff0c\u6bcf\u5c40\u9650\u75281\u4e2a.": "\u8d4b\u4e88\u9009\u62e9\u76841\u4e2a\u86cb\u7cd5\u76f4\u7ebf\u7279\u6548\uff0c\u6bcf\u5c40\u9650\u75281\u4e2a.",
				"\u91cd\u65b0\u6392\u5217\u6e38\u620f\u533a\u5185\u6240\u6709\u86cb\u7cd5\uff0c\u6bcf\u5c40\u9650\u75283\u6b21.": "\u91cd\u65b0\u6392\u5217\u6e38\u620f\u533a\u5185\u6240\u6709\u86cb\u7cd5\uff0c\u6bcf\u5c40\u9650\u75283\u6b21.",
				"\u4f7f\u7528\u540e\u672c\u5173\u4e0d\u518d\u9650\u5236\u6e38\u620f\u6b65\u6570,\u6bcf\u5c40\u9650\u75281\u4e2a.": "\u4f7f\u7528\u540e\u672c\u5173\u4e0d\u518d\u9650\u5236\u6e38\u620f\u6b65\u6570,\u6bcf\u5c40\u9650\u75281\u4e2a."
			},
			rank: {
				shareTitle: "\u86cb\u7cd5\u8fde\u63a5"
			},
			onlineReward: {
				receive: "\u7acb\u5373\u9886\u53d6",
				welcomeBack: "\u6b22\u8fce\u56de\u6765"
			},
			shop: {
				receive: "\u7acb\u5373\u9886\u53d6"
			},
			daily: {
				claim: "\u666e\u901a\u9886\u53d6",
				doubleBtn: "\u53cc\u500d\u9886\u53d6",
				close: "\u5173\u95ed"
			},
			unlock: {
				start: "\u76f4\u63a5\u5f00\u59cb"
			}
		}, cc._RF.pop()
	}, {}]
}, {}, ["en", "zh"]);