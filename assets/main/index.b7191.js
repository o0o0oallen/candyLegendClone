window.__require = function e(t, n, i) {
    function a(s, r) {
        if (!n[s]) {
            if (!t[s]) {
                var c = s.split("/");
                if (c = c[c.length - 1],
                    !t[c]) {
                    var h = "function" == typeof __require && __require;
                    if (!r && h)
                        return h(c, !0);
                    if (o)
                        return o(c, !0);
                    throw new Error("Cannot find module '" + s + "'")
                }
                s = c
            }
            var l = n[s] = {
                exports: {}
            };
            t[s][0].call(l.exports, function (e) {
                return a(t[s][1][e] || e)
            }, l, l.exports, e, t, n, i)
        }
        return n[s].exports
    }
    for (var o = "function" == typeof __require && __require, s = 0; s < i.length; s++)
        a(i[s]);
    return a
}({
    1: [function (e, t, n) {
        (function (e) {
            function t(e, t) {
                for (var n = 0, i = e.length - 1; i >= 0; i--) {
                    var a = e[i];
                    "." === a ? e.splice(i, 1) : ".." === a ? (e.splice(i, 1),
                        n++) : n && (e.splice(i, 1),
                            n--)
                }
                if (t)
                    for (; n--; n)
                        e.unshift("..");
                return e
            }
            function i(e) {
                "string" != typeof e && (e += "");
                var t, n = 0, i = -1, a = !0;
                for (t = e.length - 1; t >= 0; --t)
                    if (47 === e.charCodeAt(t)) {
                        if (!a) {
                            n = t + 1;
                            break
                        }
                    } else
                        -1 === i && (a = !1,
                            i = t + 1);
                return -1 === i ? "" : e.slice(n, i)
            }
            function a(e, t) {
                if (e.filter)
                    return e.filter(t);
                for (var n = [], i = 0; i < e.length; i++)
                    t(e[i], i, e) && n.push(e[i]);
                return n
            }
            n.resolve = function () {
                for (var n = "", i = !1, o = arguments.length - 1; o >= -1 && !i; o--) {
                    var s = o >= 0 ? arguments[o] : e.cwd();
                    if ("string" != typeof s)
                        throw new TypeError("Arguments to path.resolve must be strings");
                    s && (n = s + "/" + n,
                        i = "/" === s.charAt(0))
                }
                return (i ? "/" : "") + (n = t(a(n.split("/"), function (e) {
                    return !!e
                }), !i).join("/")) || "."
            }
                ,
                n.normalize = function (e) {
                    var i = n.isAbsolute(e)
                        , s = "/" === o(e, -1);
                    return (e = t(a(e.split("/"), function (e) {
                        return !!e
                    }), !i).join("/")) || i || (e = "."),
                        e && s && (e += "/"),
                        (i ? "/" : "") + e
                }
                ,
                n.isAbsolute = function (e) {
                    return "/" === e.charAt(0)
                }
                ,
                n.join = function () {
                    var e = Array.prototype.slice.call(arguments, 0);
                    return n.normalize(a(e, function (e) {
                        if ("string" != typeof e)
                            throw new TypeError("Arguments to path.join must be strings");
                        return e
                    }).join("/"))
                }
                ,
                n.relative = function (e, t) {
                    function i(e) {
                        for (var t = 0; t < e.length && "" === e[t]; t++)
                            ;
                        for (var n = e.length - 1; n >= 0 && "" === e[n]; n--)
                            ;
                        return t > n ? [] : e.slice(t, n - t + 1)
                    }
                    e = n.resolve(e).substr(1),
                        t = n.resolve(t).substr(1);
                    for (var a = i(e.split("/")), o = i(t.split("/")), s = Math.min(a.length, o.length), r = s, c = 0; c < s; c++)
                        if (a[c] !== o[c]) {
                            r = c;
                            break
                        }
                    var h = [];
                    for (c = r; c < a.length; c++)
                        h.push("..");
                    return (h = h.concat(o.slice(r))).join("/")
                }
                ,
                n.sep = "/",
                n.delimiter = ":",
                n.dirname = function (e) {
                    if ("string" != typeof e && (e += ""),
                        0 === e.length)
                        return ".";
                    for (var t = e.charCodeAt(0), n = 47 === t, i = -1, a = !0, o = e.length - 1; o >= 1; --o)
                        if (47 === (t = e.charCodeAt(o))) {
                            if (!a) {
                                i = o;
                                break
                            }
                        } else
                            a = !1;
                    return -1 === i ? n ? "/" : "." : n && 1 === i ? "/" : e.slice(0, i)
                }
                ,
                n.basename = function (e, t) {
                    var n = i(e);
                    return t && n.substr(-1 * t.length) === t && (n = n.substr(0, n.length - t.length)),
                        n
                }
                ,
                n.extname = function (e) {
                    "string" != typeof e && (e += "");
                    for (var t = -1, n = 0, i = -1, a = !0, o = 0, s = e.length - 1; s >= 0; --s) {
                        var r = e.charCodeAt(s);
                        if (47 !== r)
                            -1 === i && (a = !1,
                                i = s + 1),
                                46 === r ? -1 === t ? t = s : 1 !== o && (o = 1) : -1 !== t && (o = -1);
                        else if (!a) {
                            n = s + 1;
                            break
                        }
                    }
                    return -1 === t || -1 === i || 0 === o || 1 === o && t === i - 1 && t === n + 1 ? "" : e.slice(t, i)
                }
                ;
            var o = "b" === "ab".substr(-1) ? function (e, t, n) {
                return e.substr(t, n)
            }
                : function (e, t, n) {
                    return t < 0 && (t = e.length + t),
                        e.substr(t, n)
                }
        }
        ).call(this, e("_process"))
    }
        , {
        _process: 2
    }],
    2: [function (e, t) {
        var n, i, a = t.exports = {};
        function o() {
            throw new Error("setTimeout has not been defined")
        }
        function s() {
            throw new Error("clearTimeout has not been defined")
        }
        function r(e) {
            if (n === setTimeout)
                return setTimeout(e, 0);
            if ((n === o || !n) && setTimeout)
                return n = setTimeout,
                    setTimeout(e, 0);
            try {
                return n(e, 0)
            } catch (t) {
                try {
                    return n.call(null, e, 0)
                } catch (t) {
                    return n.call(this, e, 0)
                }
            }
        }
        function c(e) {
            if (i === clearTimeout)
                return clearTimeout(e);
            if ((i === s || !i) && clearTimeout)
                return i = clearTimeout,
                    clearTimeout(e);
            try {
                return i(e)
            } catch (t) {
                try {
                    return i.call(null, e)
                } catch (t) {
                    return i.call(this, e)
                }
            }
        }
        (function () {
            try {
                n = "function" == typeof setTimeout ? setTimeout : o
            } catch (e) {
                n = o
            }
            try {
                i = "function" == typeof clearTimeout ? clearTimeout : s
            } catch (e) {
                i = s
            }
        }
        )();
        var h, l = [], u = !1, d = -1;
        function p() {
            u && h && (u = !1,
                h.length ? l = h.concat(l) : d = -1,
                l.length && f())
        }
        function f() {
            if (!u) {
                var e = r(p);
                u = !0;
                for (var t = l.length; t;) {
                    for (h = l,
                        l = []; ++d < t;)
                        h && h[d].run();
                    d = -1,
                        t = l.length
                }
                h = null,
                    u = !1,
                    c(e)
            }
        }
        function g(e, t) {
            this.fun = e,
                this.array = t
        }
        function m() { }
        a.nextTick = function (e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++)
                    t[n - 1] = arguments[n];
            l.push(new g(e, t)),
                1 !== l.length || u || r(f)
        }
            ,
            g.prototype.run = function () {
                this.fun.apply(null, this.array)
            }
            ,
            a.title = "browser",
            a.browser = !0,
            a.env = {},
            a.argv = [],
            a.version = "",
            a.versions = {},
            a.on = m,
            a.addListener = m,
            a.once = m,
            a.off = m,
            a.removeListener = m,
            a.removeAllListeners = m,
            a.emit = m,
            a.prependListener = m,
            a.prependOnceListener = m,
            a.listeners = function () {
                return []
            }
            ,
            a.binding = function () {
                throw new Error("process.binding is not supported")
            }
            ,
            a.cwd = function () {
                return "/"
            }
            ,
            a.chdir = function () {
                throw new Error("process.chdir is not supported")
            }
            ,
            a.umask = function () {
                return 0
            }
    }
        , {}],
    LanguageData: [function (e, t) {
        "use strict";
        cc._RF.push(t, "61de062n4dJ7ZM9/Xdumozn", "LanguageData");
        var n = e("polyglot.min")
            , i = null;
        function a(e) {
            return window.i18n.languages[e]
        }
        function o(e) {
            e && (i ? i.replace(e) : i = new n({
                phrases: e,
                allowMissing: !0
            }))
        }
        window.i18n || (window.i18n = {
            languages: {},
            curLang: ""
        }),
            t.exports = {
                init: function (e) {
                    if (e !== window.i18n.curLang) {
                        var t = a(e) || {};
                        window.i18n.curLang = e,
                            o(t),
                            this.inst = i
                    }
                },
                t: function (e, t) {
                    if (i)
                        return i.t(e, t)
                },
                inst: i,
                updateSceneRenderers: function () {
                    for (var e = cc.director.getScene().children, t = [], n = 0; n < e.length; ++n) {
                        var i = e[n].getComponentsInChildren("LocalizedLabel");
                        Array.prototype.push.apply(t, i)
                    }
                    for (var a = 0; a < t.length; ++a) {
                        var o = t[a];
                        o.node.active && o.updateLabel()
                    }
                    for (var s = [], r = 0; r < e.length; ++r) {
                        var c = e[r].getComponentsInChildren("LocalizedSprite");
                        Array.prototype.push.apply(s, c)
                    }
                    for (var h = 0; h < s.length; ++h) {
                        var l = s[h];
                        l.node.active && l.updateSprite(window.i18n.curLang)
                    }
                }
            },
            cc._RF.pop()
    }
        , {
        "polyglot.min": "polyglot.min"
    }],
    LocalizedLabel: [function (e, t) {
        "use strict";
        cc._RF.push(t, "744dcs4DCdNprNhG0xwq6FK", "LocalizedLabel");
        var n = e("LanguageData");
        cc.Class({
            extends: cc.Component,
            editor: {
                executeInEditMode: !0,
                menu: "i18n/LocalizedLabel"
            },
            properties: {
                dataID: {
                    get: function () {
                        return this._dataID
                    },
                    set: function (e) {
                        this._dataID !== e && (this._dataID = e,
                            this.updateLabel())
                    }
                },
                _dataID: ""
            },
            onLoad: function () {
                n.inst || n.init(),
                    this.fetchRender()
            },
            fetchRender: function () {
                var e = this.getComponent(cc.Label);
                if (e)
                    return this.label = e,
                        void this.updateLabel()
            },
            updateLabel: function () {
                this.label ? n.t(this.dataID) && (this.label.string = n.t(this.dataID)) : cc.error("Failed to update localized label, label component is invalid!")
            }
        }),
            cc._RF.pop()
    }
        , {
        LanguageData: "LanguageData"
    }],
    LocalizedSprite: [function (e, t) {
        "use strict";
        cc._RF.push(t, "f34ac2GGiVOBbG6XlfvgYP4", "LocalizedSprite");
        var n = e("SpriteFrameSet");
        cc.Class({
            extends: cc.Component,
            editor: {
                executeInEditMode: !0,
                inspector: "packages://i18n/inspector/localized-sprite.js",
                menu: "i18n/LocalizedSprite"
            },
            properties: {
                spriteFrameSet: {
                    default: [],
                    type: n
                }
            },
            onLoad: function () {
                this.fetchRender()
            },
            fetchRender: function () {
                var e = this.getComponent(cc.Sprite);
                if (e)
                    return this.sprite = e,
                        void this.updateSprite(window.i18n.curLang)
            },
            getSpriteFrameByLang: function (e) {
                for (var t = 0; t < this.spriteFrameSet.length; ++t)
                    if (this.spriteFrameSet[t].language === e)
                        return this.spriteFrameSet[t].spriteFrame
            },
            updateSprite: function (e) {
                if (this.sprite) {
                    var t = this.getSpriteFrameByLang(e);
                    !t && this.spriteFrameSet[0] && (t = this.spriteFrameSet[0].spriteFrame),
                        this.sprite.spriteFrame = t
                } else
                    cc.error("Failed to update localized sprite, sprite component is invalid!")
            }
        }),
            cc._RF.pop()
    }
        , {
        SpriteFrameSet: "SpriteFrameSet"
    }],
    Platform: [function (e, t) {
        "use strict";
        cc._RF.push(t, "6df2fXh83hHZqqvnWWMzG8B", "Platform");
        var n, i, a = ["zh", "en"], o = ("lang",
            (n = window.location.href.split("?")[1],
                i = {},
                n && (n.indexOf("#") > -1 && (n = n.split(/\/?#/)[0]),
                    n.split("&").forEach(function (e) {
                        var t = e.split("=");
                        i[t[0]] = t[1]
                    })),
                i).lang), s = "undefined" != typeof tgaGameSDK, r = "undefined" != typeof minigame;
        t.exports = {
            getLang: function () {
                return a.indexOf(o) < 0 ? "en" : o
            },
            reportProgress: function (e) {
                s ? tgaGameSDK.reportProgress(e) : r && minigame.setLoadingProgress(100 * e)
            },
            closeLoadingModal: function () {
                s && tgaGameSDK.closeLoadingModal()
            },
            login: function (e) {
                s ? tgaGameSDK.isLogin(function (t) {
                    var n = t.code
                        , i = t.payload;
                    1e3 === n ? i ? tgaGameSDK.getUserInfo(function (t) {
                        var n = t.code
                            , i = t.payload;
                        if (1e3 === n) {
                            var a = i.avatar
                                , o = i.nickname
                                , s = i.openId;
                            e({
                                avatar: a,
                                nickname: o,
                                openId: s
                            })
                        } else
                            e(null)
                    }) : tgaGameSDK.login(function (t) {
                        var n = t.code
                            , i = t.payload;
                        if (1e3 === n) {
                            var a = i.avatar
                                , o = i.nickname
                                , s = i.openId;
                            e({
                                avatar: a,
                                nickname: o,
                                openId: s
                            })
                        } else
                            e(null)
                    }) : e(null)
                }) : (console.warn("\u672a\u63a5\u5165\u4efb\u4f55\u5e73\u53f0\uff0c\u8fd4\u56de\u4e00\u4e2a\u4e34\u65f6\u7528\u6237"),
                    e({
                        avatar: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic_360_360%2F72%2F2e%2F7a%2F722e7a8d2f8e6da91f683313a1cf1258.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1656145207&t=2cbf57955a1d78176ba134d547de8ca3",
                        nickname: "Test User",
                        openId: "1ddf6d57e49944dc97e446a7901de0fe"
                    }))
            },
            reportLevelPassed: function (e) {
                s && tgaGameSDK.reportLevelPassed({
                    level: e,
                    levelTitle: "\u7b2c" + e + "\u5173"
                })
            },
            reportClearGame: function () {
                s && tgaGameSDK.reportClearGame()
            },
            reportRankScore: function (e, t) {
                if (void 0 === t && (t = function () { }
                ),
                    s) {
                    var n = e.rankId
                        , i = e.score;
                    tgaGameSDK.reportRankScore({
                        scoreInfo: {
                            rankId: n,
                            score: i
                        },
                        callback: function (e) {
                            1e3 === e.code ? t({
                                code: 1e3
                            }) : (console.warn("\u4e0a\u62a5\u6392\u884c\u6570\u636e\u5931\u8d25\uff01", e),
                                t({
                                    code: 1e3
                                }))
                        }
                    })
                } else
                    console.warn("\u672a\u63a5\u5165\u4efb\u4f55\u6e38\u620f\u5e73\u53f0\uff0c\u4e0a\u62a5\u6392\u884c\u699c\u6570\u636e\u5931\u8d25\uff01"),
                        t({
                            code: 1e3
                        })
            },
            showRankModal: function () {
                s && tgaGameSDK.showRankModal()
            },
            share: function () {
                s && tgaGameSDK.share()
            },
            reportSoundStatus: function (e) {
                s && tgaGameSDK.reportSoundStatus(e)
            },
            showTitleAd: function (e) {
                void 0 === e && (e = {});
                var t = e
                    , n = t.onPlay
                    , i = void 0 === n ? function () { }
                        : n
                    , a = t.onFinish
                    , o = void 0 === a ? function () { }
                        : a;
                s ? tgaGameSDK.showTitleAd({
                    onPlay: i,
                    onFinish: o
                }) : (i(),
                    setTimeout(o, 50))
            },
            showSlotAd: function (e) {
                void 0 === e && (e = {});
                var t = e
                    , n = t.onPlay
                    , i = void 0 === n ? function () { }
                        : n
                    , a = t.onFinish
                    , o = void 0 === a ? function () { }
                        : a
                    , c = t.onError
                    , h = void 0 === c ? function () { }
                        : c;
                s ? tgaGameSDK.showSlotAd({
                    onPlay: i,
                    onFinish: o
                }) : r
            },
            showRewardAd: function (e) {
                void 0 === e && (e = {});
                var t = e
                    , n = t.onPlay
                    , i = void 0 === n ? function () { }
                        : n
                    , a = t.onReward
                    , o = void 0 === a ? function () { }
                        : a
                    , c = t.onFinish
                    , h = void 0 === c ? function () { }
                        : c
                    , l = t.onError
                    , u = void 0 === l ? function () { }
                        : l;
                s ? tgaGameSDK.showRewardAd({
                    beforePlay: function (e) {
                        e()
                    },
                    onPlay: i,
                    onReward: o,
                    onFinish: h,
                    onError: u
                }) :
                    o()
                    /*MiniGameAds.isRewardvideoReady() && (i(),
                    cc.gameSpace.audioManager.pauseAll(),
                    MiniGameAds.showRewardedVideo().then(function () {
                        o(),
                            console.info("====> show RewardedVideo success")
                    }).catch(function (e) {
                        console.error("====> show RewardedVideo error: " + e.message),
                            u({
                                code: "AD/UNKNOWN_ERROR",
                                message: e.message
                            })
                    }).finally(function () {
                        h(),
                            cc.gameSpace.audioManager.resumeAll()
                    })) : (i(),
                        setTimeout(function () {
                            o(),
                                h()
                        }, 50))*/
            },
            showBannerAd: function () {
                s && tgaGameSDK.showBannerAd()
            },
            hideBannerAd: function () {
                s && tgaGameSDK.hideBannerAd()
            }
        },
            cc._RF.pop()
    }
        , {}],
    SpriteFrameSet: [function (e, t) {
        "use strict";
        cc._RF.push(t, "97019Q80jpE2Yfz4zbuCZBq", "SpriteFrameSet");
        var n = cc.Class({
            name: "SpriteFrameSet",
            properties: {
                language: "",
                spriteFrame: cc.SpriteFrame
            }
        });
        t.exports = n,
            cc._RF.pop()
    }
        , {}],
    adProp: [function (e, t) {
        "use strict";
        cc._RF.push(t, "b82eaehqfxOHIyJ+LFuGZ1c", "adProp"),
            e("playerData");
        var n = e("constants");
        cc.Class({
            extends: cc.Component,
            properties: {
                imgAd: cc.SpriteFrame,
                imgShare: cc.SpriteFrame,
                ndBtnGoStart: cc.Node,
                spBtn: cc.Sprite
            },
            start: function () { },
            show: function (e) {
                var t = this;
                this.callback = e,
                    this.rewardType = n.OPEN_REWARD_TYPE.AD,
                    cc.gameSpace.gameLogic.getOpenRewardType(n.SHARE_FUNCTION.START_REWARD, function (e, i) {
                        if (!e)
                            switch (t.rewardType = i,
                            i) {
                                case n.OPEN_REWARD_TYPE.AD:
                                    t.spBtn.spriteFrame = t.imgAd;
                                    break;
                                case n.OPEN_REWARD_TYPE.SHARE:
                                    t.spBtn.spriteFrame = t.imgShare;
                                    break;
                                case n.OPEN_REWARD_TYPE.NULL:
                                    t.onBtnCloseClick()
                            }
                    }),
                    this.ndBtnGoStart.active = !1,
                    this.scheduleOnce(function () {
                        t.ndBtnGoStart.active = !0
                    }, n.NORMAL_SHOW_TIME)
            },
            onBtnCloseClick: function () {
                this.callback && this.callback("close"),
                    this.close()
            },
            onBtnPlayClick: function () {
                var e = this;
                this.rewardType === n.OPEN_REWARD_TYPE.AD ? cc.gameSpace.gameLogic.showRewardAd(function (t) {
                    t ? e.callback && e.callback("failed", t) : (e.close(),
                        e.callback && e.callback(null))
                }) : cc.gameSpace.gameLogic.share(n.SHARE_FUNCTION.START_REWARD, {}, function (t) {
                    t || e.close(),
                        e.callback && e.callback(t)
                })
            },
            close: function () {
                cc.gameSpace.uiManager.hideSharedDialog("fight/adProp")
            }
        }),
            cc._RF.pop()
    }
        , {
        constants: "constants",
        playerData: "playerData"
    }],
    adStepItem: [function (e, t) {
        "use strict";
        cc._RF.push(t, "7bc1e52TulKuq/projnBb/o", "adStepItem");
        var n = e("resourceUtil");
        cc.Class({
            extends: cc.Component,
            properties: {
                spPropIcon: cc.Sprite,
                lbPropNum: cc.Label,
                ndFinishedIcon: cc.Node
            },
            start: function () { },
            setInfo: function (e) {
                this.cakeInfo = e,
                    n.setCakeIcon(e.name, this.spPropIcon, function () { }),
                    this.lbPropNum.string = e.num ? e.num : "",
                    this.ndFinishedIcon.active = !e.num,
                    e.num > 0 ? this.spPropIcon.setState(cc.Sprite.State.NORMAL) : this.spPropIcon.setState(cc.Sprite.State.GRAY)
            }
        }),
            cc._RF.pop()
    }
        , {
        resourceUtil: "resourceUtil"
    }],
    adStep: [function (e, t) {
        "use strict";
        cc._RF.push(t, "85a6dBiKRxKkILjS8dfOBYF", "adStep");
        var n = e("playerData")
            , i = (e("utils"),
                e("constants"));
        cc.Class({
            extends: cc.Component,
            properties: {
                ndContent: cc.Node,
                pbAdStepItem: cc.Prefab,
                imgAd: cc.SpriteFrame,
                imgShare: cc.SpriteFrame,
                spBtn: cc.Sprite,
                ndBtnPlayAgain: cc.Node
            },
            show: function (e) {
                var t = this;
                this.callback = e,
                    cc.gameSpace.gameLogic.getOpenRewardType(i.SHARE_FUNCTION.LACK_STEP, function (e, n) {
                        if (!e)
                            switch (t.rewardType = n,
                            n) {
                                case i.OPEN_REWARD_TYPE.AD:
                                    t.spBtn.spriteFrame = t.imgAd;
                                    break;
                                case i.OPEN_REWARD_TYPE.SHARE:
                                    t.spBtn.spriteFrame = t.imgShare;
                                    break;
                                case i.OPEN_REWARD_TYPE.NULL:
                                    t.onBtnCloseClick()
                            }
                    });
                var a = n.dictTargets;
                for (var o in this.ndContent.removeAllChildren(),
                    a) {
                    var s = {
                        name: o,
                        num: a[o]
                    }
                        , r = cc.instantiate(this.pbAdStepItem);
                    r.parent = this.ndContent,
                        r.getComponent("adStepItem").setInfo(s)
                }
                this.ndBtnPlayAgain.active = !1,
                    this.scheduleOnce(function () {
                        t.ndBtnPlayAgain.active = !0
                    }, i.NORMAL_SHOW_TIME)
            },
            onBtnCloseClick: function () {
                this.callback && this.callback("close"),
                    this.close()
            },
            onBtnPlayClick: function () {
                var e = this;
                this.rewardType === i.OPEN_REWARD_TYPE.AD ? cc.gameSpace.gameLogic.showRewardAd(function (t) {
                    t || (e.close(),
                        e.callback && e.callback(null))
                }) : cc.gameSpace.gameLogic.share(i.SHARE_FUNCTION.START_REWARD, {}, function (t) {
                    t || (e.close(),
                        e.callback && e.callback(t))
                })
            },
            close: function () {
                cc.gameSpace.uiManager.hideSharedDialog("fight/adStep")
            },
            onBtnPlayAgain: function () {
                this.close(),
                    cc.gameSpace.gameLogic.resetLevel()
            }
        }),
            cc._RF.pop()
    }
        , {
        constants: "constants",
        playerData: "playerData",
        utils: "utils"
    }],
    animationUI: [function (e, t) {
        "use strict";
        cc._RF.push(t, "4deb69dGUBOpb+oc1zl98nw", "animationUI"),
            e("LanguageData");
        var n = e("clientEvent");
        cc.Class({
            extends: cc.Component,
            properties: {
                isPlayEnableAnimation: {
                    default: !1,
                    tooltip: "Whether to play enable animation"
                },
                enableAnimationName: {
                    default: "",
                    tooltip: "The name of enable animation"
                },
                isPlayDisableAnimation: {
                    default: !1,
                    tooltip: "Whether to play disable animation"
                },
                disableAnimationName: {
                    default: "",
                    tooltip: "The name of disable animation"
                },
                disableAnimationReverse: {
                    default: !1,
                    tooltip: "Whether to reverse disable animation"
                },
                disableAnimationSpeed: {
                    default: 0,
                    tooltip: "The speed of disable animation"
                }
            },
            onLoad: function () {
                if (this.animation = this.node.getComponent(cc.Animation),
                    this.animation) {
                    this.clips = this.animation.getClips();
                    var e = this.isAnimationExist(this.disableAnimationName);
                    e && (this.disableAnimationWrapMode = e.wrapMode,
                        this.disableAnimationDefaultSpeed = e.speed)
                }
            },
            onEnable: function () {
                if (this.animation && this.isPlayEnableAnimation && this.isAnimationExist(this.enableAnimationName)) {
                    var e = this.animation.play(this.enableAnimationName);
                    this.enableAnimationName === this.disableAnimationName && (e.wrapMode = this.disableAnimationWrapMode,
                        e.speed = this.disableAnimationDefaultSpeed),
                        this.enableAnimationState = e
                }
            },
            close: function (e) {
                if (this.closeCallback = e,
                    this.animation) {
                    var t = this.isAnimationExist(this.disableAnimationName);
                    if (this.isPlayDisableAnimation && t) {
                        this.animation.once("finished", this.closeFinish, this);
                        var n = this.animation.play(this.disableAnimationName);
                        this.disableAnimationReverse && (n.wrapMode = cc.WrapMode.Reverse),
                            0 !== this.disableAnimationSpeed && (n.speed = this.disableAnimationSpeed),
                            this.disableAnimationState = n
                    } else
                        this.closeFinish()
                } else
                    this.closeFinish()
            },
            closeFinish: function () {
                this.closeCallback ? this.closeCallback() : this.node.active = !1
            },
            isAnimationExist: function (e) {
                return _.find(this.clips, function (t) {
                    return t.name === e
                })
            },
            clickFinish: function (e) {
                n.dispatchEvent("finishClickAnimation", e)
            }
        }),
            cc._RF.pop()
    }
        , {
        LanguageData: "LanguageData",
        clientEvent: "clientEvent"
    }],
    audioManager: [function (e, t) {
        "use strict";
        cc._RF.push(t, "c9f43FU0BVFQrUrfYurIJ+y", "audioManager");
        var n = e("configuration")
            , i = e("resourceUtil")
            , a = e("../frameworks/Platform")
            , o = new (cc.Class({
                properties: {
                    musicVolume: 1,
                    soundVolume: 1
                },
                onLoad: function () {
                    this.audios = {},
                        this.arrSound = [],
                        this.musicVolume = this.getConfiguration(!0) ? .8 : 0,
                        this.soundVolume = this.getConfiguration(!1) ? 1 : 0,
                        a.reportSoundStatus(this.getConfiguration(!0))
                },
                playMusic: function (e, t) {
                    this.play(e, t, !0)
                },
                playSound: function (e, t) {
                    var n = this;
                    if (this.soundVolume)
                        if (t)
                            this.play(e, t, !1);
                        else {
                            var a = "audios/sound/";
                            "click" !== e && (a = "gamePackages/" + a),
                                i.loadRes(a + e, cc.AudioClip, function (e, i) {
                                    var a = {};
                                    a.clip = i,
                                        a.loop = t,
                                        a.isMusic = !1;
                                    var o = cc.audioEngine.play(i, !1, n.soundVolume);
                                    a.audioId = o,
                                        n.arrSound.push(a),
                                        cc.audioEngine.setFinishCallback(o, function () {
                                            _.remove(n.arrSound, function (e) {
                                                return e.audioId === o
                                            })
                                        })
                                })
                        }
                },
                play: function (e, t, n) {
                    var a = this
                        , o = this.audios[e];
                    if (o && (o.isManualStop = !1),
                        o) {
                        if (this.isAudioStarting(o.audioId) && n)
                            return;
                        this.playClip(e, n)
                    } else {
                        var s = "audios/";
                        n ? (s += "music/",
                            "bgm" !== e && (s = "gamePackages/" + s)) : (s += "sound/",
                                "click" !== e && (s = "gamePackages/" + s)),
                            i.loadRes(s + e, cc.AudioClip, function (i, o) {
                                var s = {};
                                s.clip = o,
                                    s.loop = t,
                                    s.isMusic = n,
                                    a.audios[e] = s,
                                    a.playClip(e, n)
                            })
                    }
                },
                playClip: function (e, t) {
                    var n = this.audios[e];
                    if ("number" != typeof n.audioId || cc.audioEngine.getState(n.audioId) !== cc.audioEngine.AudioState.PLAYING || !n.loop) {
                        var i = this.musicVolume;
                        t || (i = this.soundVolume);
                        var a = cc.audioEngine.play(n.clip, n.loop, i);
                        n.audioId = a
                    }
                },
                stop: function (e) {
                    if (this.audios.hasOwnProperty(e)) {
                        var t = this.audios[e].audioId;
                        void 0 !== t && cc.audioEngine.stop(t),
                            this.audios[e].isManualStop = !0
                    }
                },
                setMusic: function (e) {
                    for (var t in "number" != typeof e && (e = e ? 1 : 0),
                        this.musicVolume = e,
                        this.audios)
                        if (this.audios.hasOwnProperty(t) && this.audios[t].isMusic) {
                            var n = this.audios[t];
                            this.setVolume(n.audioId, this.musicVolume)
                        }
                },
                pauseAll: function () {
                    console.log("pause all music!!!"),
                        cc.audioEngine.pauseAll()
                },
                resumeAll: function () {
                    cc.audioEngine.resumeAll()
                },
                openMusic: function () {
                    this.setMusic(.8),
                        n.setGlobalData("music", "true"),
                        a.reportSoundStatus(!0)
                },
                closeMusic: function () {
                    this.setMusic(0),
                        n.setGlobalData("music", "false"),
                        a.reportSoundStatus(!1)
                },
                openSound: function () {
                    this.setSound(1),
                        n.setGlobalData("sound", "true")
                },
                closeSound: function () {
                    this.setSound(0),
                        n.setGlobalData("sound", "false")
                },
                setSound: function (e) {
                    for (var t in this.soundVolume = e,
                        this.audios)
                        if (this.audios.hasOwnProperty(t) && !this.audios[t].isMusic) {
                            var n = this.audios[t];
                            this.setVolume(n.audioId, this.soundVolume)
                        }
                    for (var i = 0; i < this.arrSound.length; i++) {
                        var a = this.arrSound[i];
                        this.setVolume(a.audioId, this.soundVolume)
                    }
                },
                changeState: function (e, t) {
                    var n = this.audios[e];
                    if (t && n.loop && !n.isManualStop) {
                        if ("number" == typeof n.audioId && this.isAudioStarting(n.audioId))
                            return;
                        this.playClip(e)
                    } else
                        t || "number" == typeof n.audioId && this.isAudioStarting(n.audioId) && cc.audioEngine.stop(n.audioId)
                },
                getConfiguration: function (e) {
                    var t;
                    return !(t = e ? n.getGlobalData("music") : n.getGlobalData("sound")) || "true" === t
                },
                isAudioStarting: function (e) {
                    var t = !1;
                    if ("number" == typeof e) {
                        var n = cc.audioEngine.getState(e);
                        t = n === cc.audioEngine.AudioState.PLAYING || n === cc.audioEngine.AudioState.INITIALZING,
                            cc.sys.browserType === cc.sys.BROWSER_TYPE_WECHAT_GAME && (t = t || n === cc.audioEngine.AudioState.PAUSED)
                    }
                    return t
                },
                setVolume: function (e, t) {
                    var n = cc.audioEngine.getState(e);
                    console.log("### audioId " + e + " state is: " + n),
                        cc.audioEngine.setVolume(e, t)
                }
            }));
        o.onLoad(),
            t.exports = o,
            cc._RF.pop()
    }
        , {
        "../frameworks/Platform": "Platform",
        configuration: "configuration",
        resourceUtil: "resourceUtil"
    }],
    balanceFailed: [function (e, t) {
        "use strict";
        cc._RF.push(t, "e4928/nKARPlqGf+IiCXcgK", "balanceFailed");
        var n = e("playerData");
        e("constants"),
            cc.Class({
                extends: cc.Component,
                properties: {
                    lbLevel: cc.Label
                },
                start: function () { },
                show: function () {
                    this.lbLevel.string = n.level
                },
                onBtnRetryClick: function () {
                    cc.gameSpace.uiManager.hideSharedDialog("fight/balanceFailed"),
                        cc.gameSpace.gameLogic.resetLevel()
                },
                onBtnCloseClick: function () {
                    cc.gameSpace.uiManager.hideSharedDialog("fight/balanceFailed"),
                        cc.find("loading").getComponent("sceneManager").loadScene("pve", [], function (e) {
                            e && cc.error(e.message || e)
                        })
                }
            }),
            cc._RF.pop()
    }
        , {
        constants: "constants",
        playerData: "playerData"
    }],
    balance: [function (e, t) {
        "use strict";
        cc._RF.push(t, "22cecTzEh5L6o8yC7/SYP4X", "balance");
        var n = e("playerData")
            , i = e("clientEvent")
            , a = e("LanguageData")
            , o = e("constants")
            , s = e("../../frameworks/Platform");
        cc.Class({
            extends: cc.Component,
            properties: {
                lbLevel: cc.Label,
                lbScore: cc.Label,
                lbHighest: cc.Label,
                lbGold: cc.Label,
                arrStar: [cc.Node],
                arrStarLight: [cc.Node],
                ndBtnDouble: cc.Node,
                spBtnDouble: cc.Sprite,
                ani: cc.Animation,
                aniGold: cc.Animation,
                sfAd: cc.SpriteFrame,
                sfShare: cc.SpriteFrame,
                nextBtn: cc.Node
            },
            onLoad: function () { },
            start: function () { },
            show: function () {
                var e = this;
                n.getNextLevelInfo() ? this.nextBtn.active = !0 : (this.nextBtn.active = !1,
                    s.reportClearGame()),
                    this.aniGold.node.active = !0,
                    this.isFirstInvite = !1;
                var t = n.finishLevel(n.level, n.score);
                n.getCurrentLevel().ID,
                    this.goldNum = t.gold,
                    this.isOver = !1,
                    this.lbGold.string = t.gold,
                    this.lbLevel.string = t.levelId,
                    this.lbScore.string = t.score,
                    this.lbHighest.string = a.t("fight.highest") + n.getHighestScoreByLevel(t.levelId),
                    this.soundStar = 0,
                    n.arrStars,
                    this.arrStar[0].active = t.star > 0,
                    this.arrStarLight[0].active = t.star > 0,
                    this.arrStar[1].active = t.star > 1,
                    this.arrStarLight[1].active = t.star > 1,
                    this.arrStar[2].active = t.star > 2,
                    this.arrStarLight[2].active = t.star > 2,
                    this.ani.play("balanceShow"),
                    this.ani.once("finished", function () {
                        e.ani.play("balanceIdle")
                    }, this),
                    this.goldNum > 0 ? cc.gameSpace.gameLogic.getOpenRewardType(o.SHARE_FUNCTION.FILL_SIGN, function (t, n) {
                        if (t)
                            e.close();
                        else
                            switch (e.openRewardType = n,
                            n) {
                                case o.OPEN_REWARD_TYPE.AD:
                                    e.ndBtnDouble.active = !0,
                                        e.spBtnDouble.spriteFrame = e.sfAd,
                                        e.aniGold.play();
                                    break;
                                case o.OPEN_REWARD_TYPE.SHARE:
                                    e.ndBtnDouble.active = !0,
                                        e.aniGold.play(),
                                        e.spBtnDouble.spriteFrame = e.sfShare;
                                    break;
                                case o.OPEN_REWARD_TYPE.NULL:
                                    e.ndBtnDouble.active = !1
                            }
                    }) : this.ndBtnDouble.active = !1
            },
            onShowStar: function () {
                this.arrStar[this.soundStar].active && cc.gameSpace.audioManager.playSound(o.AUDIO_SOUND.FINISH_STAR, !1),
                    this.soundStar++
            },
            onDisable: function () { },
            onBtnNextClick: function () {
                cc.gameSpace.gameLogic.customEventStatistics(o.ANALYTICS_TYPE.BALANCE_NEXT),
                    this.isOver || (this.isOver = !0,
                        n.nextLevel(),
                        this.close(),
                        i.dispatchEvent("newLevel"))
            },
            onBtnRetryClick: function () {
                this.close(),
                    cc.gameSpace.gameLogic.customEventStatistics(o.ANALYTICS_TYPE.BALANCE_PLAY_AGAIN),
                    cc.gameSpace.gameLogic.resetLevel()
            },
            onBtnCloseClick: function () {
                cc.gameSpace.gameLogic.customEventStatistics(o.ANALYTICS_TYPE.BALANCE_CLOSE),
                    this.close(),
                    cc.find("loading").getComponent("sceneManager").loadScene("pve", [], function (e) {
                        e && cc.error(e.message || e)
                    })
            },
            onBtnDoubleClick: function () {
                var e = this;
                this.openRewardType === o.OPEN_REWARD_TYPE.SHARE ? (cc.gameSpace.gameLogic.share(o.SHARE_FUNCTION.BALANCE, {}, function (t) {
                    t || e.showReward()
                }),
                    cc.gameSpace.gameLogic.customEventStatistics(o.ANALYTICS_TYPE.BALANCE_SHARE)) : cc.gameSpace.gameLogic.showRewardAd(function (t) {
                        t || e.showReward()
                    })
            },
            showReward: function () {
                if (!this.isFirstInvite) {
                    this.isFirstInvite = !0;
                    var e = {};
                    e.itemType = o.REWARD_TYPE.GOLD,
                        e.itemSubType = 0,
                        e.itemAmount = this.goldNum,
                        this.aniGold.node.active = !1,
                        cc.gameSpace.uiManager.showSharedDialog("lottery/reward", "reward", [e, !1, o.SHARE_FUNCTION.BALANCE])
                }
            },
            close: function () {
                cc.gameSpace.uiManager.hideSharedDialog("fight/balance")
            }
        }),
            cc._RF.pop()
    }
        , {
        "../../frameworks/Platform": "Platform",
        LanguageData: "LanguageData",
        clientEvent: "clientEvent",
        constants: "constants",
        playerData: "playerData"
    }],
    buttonEx: [function (e, t) {
        "use strict";
        cc._RF.push(t, "e122fG1ssFILIO3WiAvp7JK", "buttonEx");
        var n = e("audioManager")
            , i = e("constants");
        cc.Class({
            extends: cc.Button,
            properties: {
                isPreventSecondClick: !1,
                preventTime: 2,
                _N$transition: {
                    override: !0,
                    default: 3
                },
                zoomScale: {
                    override: !0,
                    default: .85
                },
                isPlaySound: !0
            },
            start: function () {
                var e = this.node.getComponent(cc.Button);
                this.node.on("click", function () {
                    this.isPreventSecondClick && (e.interactable = !1,
                        this.scheduleOnce(function () {
                            e.node && (e.interactable = !0)
                        }, this.preventTime)),
                        this.isPlaySound && n.playSound(i.AUDIO_SOUND.CLICK, !1)
                }, this)
            }
        }),
            cc._RF.pop()
    }
        , {
        audioManager: "audioManager",
        constants: "constants"
    }],
    buy: [function (e, t) {
        "use strict";
        cc._RF.push(t, "1f6e9kNl7VAkLVmkwCJLBL2", "buy");
        var n = e("resourceUtil")
            , i = e("localConfig")
            , a = e("LanguageData")
            , o = e("playerData")
            , s = e("clientEvent")
            , r = e("utils")
            , c = e("constants");
        cc.Class({
            extends: cc.Component,
            properties: {
                lbTitle: cc.Label,
                lbNum: cc.Label,
                lbDesc: cc.Label,
                lbGold: cc.Label,
                lbGoldNum: cc.Label,
                lbAd: cc.Label,
                spProp: cc.Sprite,
                spAdIcon: cc.Sprite,
                btnBuy: cc.Button,
                nodeBtnBuy: cc.Node,
                nodeBtnAd: cc.Node,
                imgShare: cc.SpriteFrame,
                imgAd: cc.SpriteFrame
            },
            start: function () { },
            onEnable: function () {
                s.on("updateGold", this.updateGold, this),
                    s.on("updateInfiniteShareTimes", this.updateBuyBtn, this)
            },
            onDisable: function () {
                s.off("updateGold", this.updateGold, this),
                    s.off("updateInfiniteShareTimes", this.updateBuyBtn, this)
            },
            showBuy: function (e) {
                this.nodeBtnBuy.active = e,
                    this.nodeBtnAd.active = !e
            },
            show: function (e, t) {
                this.propId = e,
                    this.eventType = t;
                var s = i.queryByID("prop", e);
                if (!s)
                    return console.error("prop was error!", e),
                        void this.close();
                this.countPerBuy = s.countPerBuy,
                    this.lbTitle.string = a.t("table_prop." + s.name),
                    this.propNum = s.countPerBuy,
                    this.lbNum.string = "X " + this.propNum,
                    this.lbDesc.string = a.t("table_prop." + s.desc),
                    this.cost = s.countPerBuy * s.price,
                    this.lbGold.string = this.cost,
                    this.cost > o.getGold() ? (this.btnBuy.interactable = !1,
                        this.lbGold.node.color = cc.Color.RED) : (this.btnBuy.interactable = !0,
                            this.lbGold.node.color = cc.Color.WHITE),
                    n.setPropIcon(s.icon, this.spProp, function () { });
                var r = this.node.getComponent(cc.Animation);
                r.once("finished", function () {
                    r.play("buy")
                }),
                    this.updateGold(),
                    this.updateBuyBtn()
            },
            updateBuyBtn: function () {
                var e = this;
                this.propId === c.PROP_ID.INFINITE ? (this.showBuy(!1),
                    cc.gameSpace.gameLogic.getOpenRewardType(c.SHARE_FUNCTION.BUY_INFINITE, function (t, n) {
                        switch (e.getPropType = n,
                        n) {
                            case c.OPEN_REWARD_TYPE.AD:
                                e.spAdIcon.spriteFrame = e.imgAd;
                                break;
                            case c.OPEN_REWARD_TYPE.SHARE:
                                e.spAdIcon.spriteFrame = e.imgShare;
                                break;
                            case c.OPEN_REWARD_TYPE.NULL:
                                e.showBuy(!0)
                        }
                        var i = o.getInfiniteTimes();
                        i >= c.MAX_INFINITE_TIMES ? (e.spAdIcon.node.active = !1,
                            e.lbAd.string = a.t("shop.receive")) : (e.spAdIcon.node.active = !0,
                                e.lbAd.string = i + "/" + c.MAX_INFINITE_TIMES)
                    })) : this.showBuy(!0)
            },
            onBtnCloseClick: function () {
                this.close()
            },
            onBtnBuyClick: function () {
                cc.gameSpace.gameLogic.addGold(-this.cost),
                    s.dispatchEvent("updateInfiniteShareTimes"),
                    this.rewardProp(),
                    this.close()
            },
            rewardProp: function () {
                var e = {};
                e.itemType = c.REWARD_TYPE.PROP,
                    e.itemSubType = this.propId,
                    e.itemAmount = this.countPerBuy,
                    cc.gameSpace.uiManager.pushToPopupSeq("lottery/reward", "reward", [e, !1, c.SHARE_FUNCTION.BUY_INFINITE])
            },
            onBtnReceiveClick: function () {
                o.getInfiniteTimes() >= c.MAX_INFINITE_TIMES && (o.exchangeInfiniteProp(),
                    this.rewardProp())
            },
            close: function () {
                cc.gameSpace.uiManager.hideSharedDialog("props/buy")
            },
            updateGold: function () {
                this.lbGoldNum.string = r.formatMoney(o.getGold())
            }
        }),
            cc._RF.pop()
    }
        , {
        LanguageData: "LanguageData",
        clientEvent: "clientEvent",
        constants: "constants",
        localConfig: "localConfig",
        playerData: "playerData",
        resourceUtil: "resourceUtil",
        utils: "utils"
    }],
    clientEventOne: [function (e, t) {
        "use strict";
        cc._RF.push(t, "06366gXcOBLXrCGRfvxAYam", "clientEventOne");
        var n = e("eventListener").getBaseClass("one")
            , i = e("LanguageData")
            , a = new (cc.Class({
                extends: n,
                properties: {},
                onLoad: function () {
                    this._EVENT_TYPE = [],
                        this.setSupportEventList(this._EVENT_TYPE)
                },
                showTipByTextKey: function (e) {
                    return this.dispatchEvent("showTips", i.t(e))
                }
            }));
        a.onLoad(),
            t.exports = a,
            cc._RF.pop()
    }
        , {
        LanguageData: "LanguageData",
        eventListener: "eventListener"
    }],
    clientEvent: [function (e, t) {
        "use strict";
        cc._RF.push(t, "f05bfUMhdZGbbpVMOC9RRj7", "clientEvent");
        var n = e("eventListener").getBaseClass("multi")
            , i = new (cc.Class({
                extends: n,
                properties: {},
                onLoad: function () {
                    this._EVENT_TYPE = ["testEvent", "onAppShow", "onNetworkConnect", "hideNetLoading", "showNetLoading", "showWaiting", "hideWaiting", "showSharedDialog", "hideSharedDialog", "showTips", "showGetMoneyTips", "activeScene", "pushToPopupSeq", "shiftFromPopupSeq", "onSceneChanged", "newLevel", "updateTargets", "updateStep", "updateScore", "levelFinished", "gameOver", "showTargetCake", "updateLotterySpareTimes", "updateDiamond", "updateGold", "useProp", "taskFinished", "updateTask", "updateProp", "updateSignIn", "updateInfiniteShareTimes", "updateShopPropInfo", "updateUnlockProp"],
                        this.setSupportEventList(this._EVENT_TYPE)
                }
            }));
        i.onLoad(),
            t.exports = i,
            cc._RF.pop()
    }
        , {
        eventListener: "eventListener"
    }],
    configManager: [function (e, t) {
        "use strict";
        cc._RF.push(t, "c5719ULXgRP3qBwOIsXzy7L", "configManager");
        var n = [",", ";", "\t", "|", "^"]
            , i = ["\r\n", "\r", "\n"]
            , a = function (e, t, n, i) {
                return n instanceof Array ? "number" === n[t] ? Number(i[t]) : "boolean" === n[t] ? "true" === i[t] || "t" === i[t] || "1" === i[t] : i[t] : isNaN(Number(e)) ? "false" == e || "true" == e || "t" == e || "f" == e ? "true" === i[t] || "t" === i[t] || "1" === i[t] : i[t] : Number(i[t])
            }
            , o = {
                STANDARD_DECODE_OPTS: {
                    skip: 0,
                    limit: !1,
                    header: !1,
                    cast: !1,
                    comment: ""
                },
                STANDARD_ENCODE_OPTS: {
                    delimiter: n[0],
                    newline: i[0],
                    skip: 0,
                    limit: !1,
                    header: !1
                },
                quoteMark: '"',
                doubleQuoteMark: '""',
                quoteRegex: /"/g,
                assign: function () {
                    for (var e = Array.prototype.slice.call(arguments), t = e[0], n = e.slice(1), i = 0, a = n.length; i < a; i++)
                        for (var o in n[i])
                            t[o] = n[i][o];
                    return t
                },
                map: function (e, t) {
                    for (var n = [], i = 0, a = e.length; i < a; i++)
                        n[i] = t(e[i], i);
                    return n
                },
                getType: function (e) {
                    return Object.prototype.toString.call(e).slice(8, -1)
                },
                getLimit: function (e, t) {
                    return !1 === e ? t : e
                },
                buildObjectConstructor: function (e, t, n) {
                    return function (i) {
                        var o = new Object
                            , s = function (e, t) {
                                return o[e] = t
                            };
                        return n ? e.forEach(function (e, o) {
                            s(e, a(t[o], o, n, i))
                        }) : e.forEach(function (e, n) {
                            s(e, a(t[n], n, null, i))
                        }),
                            o
                    }
                },
                buildArrayConstructor: function (e, t) {
                    return function (n) {
                        var i = new Array(e.length)
                            , o = function (e, t) {
                                return i[e] = t
                            };
                        return t ? fields.forEach(function (i, s) {
                            o(i, a(e[s], s, t, n))
                        }) : fields.forEach(function (t, i) {
                            o(t, a(e[i], i, null, n))
                        }),
                            i
                    }
                },
                frequency: function (e, t, n) {
                    void 0 === n && (n = !1);
                    for (var i = 0, a = 0, o = this.getLimit(n, e.length); a < o && -1 !== (a = e.indexOf(t, a));)
                        a += 1,
                            i++;
                    return i
                },
                mostFrequent: function (e, t, n) {
                    for (var i, a = t.length - 1; a >= 0; a--)
                        this.frequency(e, t[a], n) > 0 && (i = t[a]);
                    return i || t[0]
                },
                unsafeParse: function (e, t, n) {
                    var i, a, o = e.split(t.newline);
                    function s(e) {
                        var n = e.shift();
                        if (n.indexOf('"') >= 0) {
                            for (var i = 0, a = 0, o = 0; e.length > 0 && (-1 !== (i = n.indexOf('"', a)) || o % 2 != 0);)
                                -1 !== i ? (a = i + 1,
                                    o++) : n = n + t.newline + e.shift();
                            var s, r = [], c = 0, h = 0, l = 0, u = n.length;
                            for (var d in n)
                                if (n.hasOwnProperty(d)) {
                                    var p = n[d = parseInt(d)];
                                    0 === d && '"' === p && (c++,
                                        h = 1),
                                        '"' === p && (c++,
                                            n[d - 1] === t.delimiter && h === d && h++),
                                        '"' === p && c % 2 == 0 && (n[d + 1] !== t.delimiter && d + 1 !== u || (l = d,
                                            s = n.substring(h, l),
                                            r.push(s),
                                            l = h = l + 2)),
                                        p === t.delimiter && c % 2 == 0 && ((l = d) > h ? (s = n.substring(h, l),
                                            r.push(s),
                                            l = h = l + 1) : l === h && (r.push(""),
                                                l = h = l + 1))
                                }
                            return (l = u) >= h && (s = n.substring(h, l),
                                r.push(s)),
                                r
                        }
                        return n.split(t.delimiter)
                    }
                    for (t.skip > 0 && o.splice(t.skip),
                        t.header ? (!0 === t.header ? (t.comment = s(o),
                            t.cast = s(o),
                            i = s(o)) : "Array" === this.getType(t.header) && (i = t.header),
                            a = this.buildObjectConstructor(i, o[0].split(t.delimiter), t.cast)) : a = this.buildArrayConstructor(o[0].split(t.delimiter), t.cast); o.length > 0;) {
                        var r = s(o);
                        r.length > 1 && n(a(r), i[0])
                    }
                    return !0
                },
                safeParse: function (e, t) {
                    t.delimiter;
                    var n = t.newline
                        , i = e.split(n);
                    return t.skip > 0 && i.splice(t.skip),
                        !0
                },
                encodeCells: function (e, t, n) {
                    for (var i = e.slice(0), a = 0, o = i.length; a < o; a++)
                        -1 !== i[a].indexOf(this.quoteMark) && (i[a] = i[a].replace(this.quoteRegex, this.doubleQuoteMark)),
                            -1 === i[a].indexOf(t) && -1 === i[a].indexOf(n) || (i[a] = this.quoteMark + i[a] + this.quoteMark);
                    return i.join(t)
                },
                encodeArrays: function (e, t, n) {
                    var i = t.delimiter
                        , a = t.newline;
                    t.header && "Array" === this.getType(t.header) && n(this.encodeCells(t.header, i, a));
                    for (var o = 0, s = this.getLimit(t.limit, e.length); o < s; o++)
                        n(this.encodeCells(e[o], i, a));
                    return !0
                },
                encodeObjects: function (e, t, n) {
                    var i, a, o = t.delimiter, s = t.newline;
                    for (var r in i = [],
                        a = [],
                        e[0])
                        i.push(r),
                            a.push(e[0][r]);
                    !0 === t.header ? n(this.encodeCells(i, o, s)) : "Array" === this.getType(t.header) && n(this.encodeCells(t.header, o, s)),
                        n(this.encodeCells(a, o));
                    for (var c = 1, h = this.getLimit(t.limit, e.length); c < h; c++) {
                        a = [];
                        for (var l = 0, u = i.length; l < u; l++)
                            a.push(e[c][i[l]]);
                        n(this.encodeCells(a, o, s))
                    }
                    return !0
                },
                parse: function (e, t, a) {
                    var o;
                    if ("Function" === this.getType(t) ? (a = t,
                        t = {}) : "Function" !== this.getType(a) ? a = (o = []).push.bind(o) : o = [],
                        t = this.assign({}, this.STANDARD_DECODE_OPTS, t),
                        this.opts = t,
                        !t.delimiter || !t.newline) {
                        var s = Math.min(48, Math.floor(e.length / 20), e.length);
                        t.delimiter = t.delimiter || this.mostFrequent(e, n, s),
                            t.newline = t.newline || this.mostFrequent(e, i, s)
                    }
                    return this.unsafeParse(e, t, a) && (!(o.length > 0) || o)
                },
                encode: function (e, t, n) {
                    var i;
                    return "Function" === this.getType(t) ? (n = t,
                        t = {}) : "Function" !== this.getType(n) && (n = (i = []).push.bind(i)),
                        (t = this.assign({}, this.STANDARD_ENCODE_OPTS, t)).skip > 0 && (e = e.slice(t.skip)),
                        ("Array" === this.getType(e[0]) ? this.encodeArrays : this.encodeObjects)(e, t, n) && (!(i.length > 0) || i.join(t.newline))
                }
            }
            , s = {
                init: function () {
                    this.csvTables = {},
                        this.csvTableForArr = {},
                        this.tableCast = {},
                        this.tableComment = {}
                },
                addTable: function (e, t, n) {
                    if (!this.csvTables[e] || n) {
                        var i = {}
                            , a = [];
                        o.parse(t, {
                            header: !0
                        }, function (e, t) {
                            i[e[t]] = e,
                                a.push(e)
                        }),
                            this.tableCast[e] = o.opts.cast,
                            this.tableComment[e] = o.opts.comment,
                            this.csvTables[e] = i,
                            this.csvTableForArr[e] = a
                    }
                },
                getTableArr: function (e) {
                    return this.csvTableForArr[e]
                },
                getTable: function (e) {
                    return this.csvTables[e]
                },
                queryOne: function (e, t, n) {
                    var i = this.getTable(e);
                    if (!i)
                        return null;
                    if (!t)
                        return i[n];
                    for (var a in i)
                        if (i.hasOwnProperty(a) && i[a][t] === n)
                            return i[a]
                },
                queryByID: function (e, t) {
                    return this.queryOne(e, null, t)
                },
                queryAll: function (e, t, n) {
                    var i = this.getTable(e);
                    if (!i || !t)
                        return null;
                    var a = {};
                    for (var o in i)
                        i.hasOwnProperty(o) && i[o][t] === n && (a[o] = i[o]);
                    return a
                },
                queryIn: function (e, t, n) {
                    if (n.constructor !== Array)
                        return null;
                    var i = this.getTable(e);
                    if (!i || !t)
                        return null;
                    for (var a = {}, o = Object.keys(i), s = o.length, r = 0; r < s; r++) {
                        var c = i[o[r]];
                        n.indexOf(c[t]) > -1 && (a[o[r]] = c)
                    }
                    return a
                },
                queryByCondition: function (e, t) {
                    if (t.constructor !== Object)
                        return null;
                    var n = this.getTable(e);
                    if (!n)
                        return null;
                    for (var i = {}, a = Object.keys(n), o = a.length, s = Object.keys(t), r = s.length, c = 0; c < o; c++) {
                        for (var h = n[a[c]], l = !0, u = 0; u < r; u++) {
                            var d = s[u];
                            l = l && t[d].indexOf(h[d]) > -1 && !i[a[c]]
                        }
                        l && (i[a[c]] = h)
                    }
                    return i
                }
            };
        s.init(),
            t.exports = s,
            cc._RF.pop()
    }
        , {}],
    configuration: [function (e, t) {
        "use strict";
        cc._RF.push(t, "eec23YA39dCLqNg6zDnqLhV", "configuration"),
            e("utils");
        var n = new (cc.Class({
            onLoad: function () {
                var e, t = this;
                if (this.jsonData = {
                    userId: ""
                },
                    this.path = this.getConfigPath(),
                    (e = cc.sys.isNative ? jsb.fileUtils.getValueMapFromFile(this.path).LinkConfig : cc.sys.localStorage.getItem("LinkConfig")) && e.length) {
                    e.startsWith("@") && (e = e.substring(1));
                    try {
                        var n = JSON.parse(e);
                        this.jsonData = n
                    } catch (i) { }
                }
                this.markSave = !1,
                    this.saveTimer = setInterval(function () {
                        t.scheduleSave()
                    }, 500)
            },
            setConfigDataWithoutSave: function (e, t) {
                var n = this.jsonData.userId;
                this.jsonData[n] ? this.jsonData[n][e] = t : console.error("no account can not save")
            },
            setConfigData: function (e, t) {
                this.setConfigDataWithoutSave(e, t),
                    this.markSave = !0
            },
            getConfigData: function (e) {
                var t = this.jsonData.userId;
                return this.jsonData[t] ? this.jsonData[t][e] || "" : (cc.log("no account can not load"),
                    "")
            },
            setGlobalData: function (e, t) {
                this.jsonData[e] = t,
                    this.save()
            },
            getGlobalData: function (e) {
                return this.jsonData[e]
            },
            setUserId: function (e) {
                this.jsonData.userId = e,
                    this.jsonData[e] || (this.jsonData[e] = {}),
                    this.save()
            },
            getUserId: function () {
                return this.jsonData.userId
            },
            scheduleSave: function () {
                this.markSave && this.save()
            },
            markModified: function () {
                this.markSave = !0
            },
            save: function () {
                var e = JSON.stringify(this.jsonData);
                if (this.markSave = !1,
                    cc.sys.isNative) {
                    var t = {};
                    t.LinkConfig = e,
                        jsb.fileUtils.writeToFile(t, n.path)
                } else
                    cc.sys.localStorage.setItem("LinkConfig", e)
            },
            getConfigPath: function () {
                var e = cc.sys.platform
                    , t = "";
                return e === cc.sys.OS_WINDOWS ? t = "src/conf" : e === cc.sys.OS_LINUX ? t = "./conf" : cc.sys.isNative ? (t = jsb.fileUtils.getWritablePath(),
                    t += "conf") : t = "src/conf",
                    t
            },
            parseUrl: function (e) {
                if (e && !("string" == typeof e && e.length <= 0)) {
                    var t = {};
                    "string" == typeof e ? (e = e.split("?")[1]).split("&").forEach(function (e) {
                        var n = e.indexOf("=");
                        if (-1 !== n) {
                            var i = e.substring(0, n);
                            t[i] = e.substring(n + 1)
                        }
                    }) : t = e,
                        t.action && this.setGlobalData("urlParams", t),
                        t.source && this.setGlobalData("source", t.source),
                        t.adchannelid && this.setGlobalData("adchannelid", t.adchannelid)
                }
            },
            generateGuestAccount: function () {
                return "" + Date.now() + (0 | (Math.random(),
                    10))
            }
        }));
        n.onLoad(),
            t.exports = n,
            cc._RF.pop()
    }
        , {
        utils: "utils"
    }],
    constants: [function (e, t) {
        "use strict";
        cc._RF.push(t, "f4f59qgd1lA2aWdYY7JPEm/", "constants"),
            t.exports = {
                VERSION: "1.4.7",
                LOCAL_CACHE: {
                    PLAYER: "player",
                    SETTINGS: "settings",
                    DATA_VERSION: "dataVersion",
                    ACCOUNT: "account",
                    PASSWORD: "password",
                    PRIVATE_KEY: "privateKey",
                    HISTORY: "history",
                    BAG: "bag"
                },
                SETTINGS_KEY: {
                    LOTTERY: "lottery",
                    MOREGAME_FIRSTCLICK: "moreGameFirstClick"
                },
                TMP_DATA_KEY: {
                    AD_TIMES: "adTimes"
                },
                PROP_ID: {
                    HAMMER: 1,
                    MAGIC: 2,
                    REFRESH: 3,
                    INFINITE: 4
                },
                GUIDE_TYPE: {
                    SPACE: 0,
                    GUIDE_ANI: 1,
                    TRIGGER_EVENT: 2,
                    WAIT_EVENT: 3,
                    GUIDE: 4
                },
                GUIDE_TIPS_DIRECTION: {
                    TOP: 0,
                    RIGHT: 1,
                    BOTTOM: 2,
                    LEFT: 3
                },
                SHARE_TYPE: {
                    SHARE_GAME: 0,
                    GROUP_RANK: 1
                },
                SHARE_FUNCTION: {
                    BALANCE: "balance",
                    PVE: "pve",
                    START_REWARD: "startReward",
                    LACK_STEP: "lackStep",
                    FILL_SIGN: "fillSign",
                    OFFLINE: "offline",
                    RANK: "rank",
                    BUY_INFINITE: "buyInfinite",
                    LOTTERY: "lottery",
                    LOTTERY_REWARD: "lotteryReward",
                    ONLINE: "online",
                    SHOP_PROP: "shopprop",
                    FIGHT: "fight",
                    SIGN: "sign"
                },
                WATCH_AD_MAX_TIMES: {
                    LOTTERY: 10
                },
                ZORDER: {
                    LINK_ITEM_NORMAL: 0,
                    LINK_ITEM_SKILL: 1,
                    FIGHT_NUM: 20,
                    DIALOG: 100,
                    REWARD: 900,
                    WAITING: 998,
                    TIPS: 999
                },
                STAT_EVENT_TYPE: {},
                LINK_ROWS_COUNT: 8,
                LINK_COLS_COUNT: 8,
                SPECIAL_EFFECT: {
                    HORIZONTAL: 1,
                    VERTICAL: 2,
                    PLUS: 3,
                    CENTER: 4
                },
                SIGN_REWARD_STATUS: {
                    RECEIVED: 0,
                    RECEIVABLE: 1,
                    UNRECEIVABLE: 2,
                    FILLSIGNIN: 3,
                    AFTER_FILLSIGNIN: 4
                },
                MAX_SIGN_IN_REWARDS_DAY: 7,
                MAX_INFINITE_TIMES: 10,
                AUDIO_MUSIC: {
                    BACKGROUND: "bgm",
                    FIGHT: "fight"
                },
                AUDIO_SOUND: {
                    CLICK: "click",
                    BONUS_TIME: "bonusTime",
                    FINISH_LINK: "finishLink",
                    CLICK_CAKE: "clickCake",
                    FINISH_STAR: "finishStar",
                    FLY_STAR: "flyStar",
                    LINE_BOMB: "lineBomb",
                    PLUS_BOMB: "plusBomb",
                    RANGE_BOMB: "rangeBomb",
                    SPARE_STEP: "spareStep",
                    GOOD: "good",
                    GREAT: "great",
                    EXCELLENT: "excellent",
                    AMAZING: "amazing",
                    UNBELIEVABLE: "unbelievable"
                },
                MAX_GRADE_OF_EACH_PVE_LEVEL: 3,
                PVE_LEVEL_STATUS: {
                    DONE: 0,
                    UNDONE: 1,
                    DOING: 2
                },
                SCENE_MANAGER_TYPE: {
                    LOAD: 0,
                    LOAD_SCENE: 1
                },
                REWARD_TYPE: {
                    DIAMOND: 1,
                    GOLD: 2,
                    PROP: 3,
                    GIFT: 4
                },
                LOTTERY_MAX_TIMES: 3,
                LOTTERY_AD_MAX_TIMES: 10,
                TASK_RESET_TIME: 4,
                TASK_MAX_NUM: 4,
                MOREGAME_MAIN: "1001",
                TASK_STATE: {
                    UNRECEIVABLE: 0,
                    RECEIVABLE: 1,
                    RECEIVED: 2
                },
                ANALYTICS_TYPE: {
                    ON_LOGIN: "onLogin",
                    START_LEVEL: "levelStart",
                    END_LEVEL: "levelOver",
                    ASK_WATCH_ADS_GET_EFFECT: "askWatchAdForEffect",
                    WATCH_ADS_GET_EFFECT: "watchAdForEffect",
                    ASK_WATCH_ADS_ADD_STEP: "askWatchAdForAddStep",
                    WATCH_ADS_ADD_STEP: "watchAdForAddStep",
                    SCORE_OF_LEVEL: "scoreOfLevel",
                    ASK_LOTTERY: "askWatchAdForLottery",
                    LOTTERY: "watchAdForLottery",
                    SHARE: "share",
                    ASK_GET_INFINITE: "askWatchAdForInfinite",
                    GET_INFINITE: "watchAdForInfinite",
                    SIGNIN_RECEIVE: "signinReceive",
                    SIGNIN_FILL: "signinFill",
                    SIGNIN_CLOSE: "signinClose",
                    OFFLINE_REWARD_SHARE: "offlineRewardShare",
                    OFFLINE_REWARD_SHARE_SUCCESS: "offlineRewardShareSuccess",
                    OFFLINE_REWARD_CLOSE: "offlineRewardClose",
                    OPEN_PANEL: "openPanel",
                    START_GAME: "startGame",
                    START_GAME_SUCCESS: "startGameSuccess",
                    PLAYER_STAY_TIME: "playerStayTime",
                    BALANCE_USED_STEP: "balanceUsedStep",
                    BALANCE_GAIN_SCORE: "balanceGainScore",
                    SIGNIN_ENTRANCE: "signinEntrance",
                    LOTTERY_ENTRANCE: "lotteryEntrance",
                    LOTTERY_TOTAL_TIMES: "lotteryTotalTimes",
                    LOTTERY_WATCH_AD: "lotteryWatchAd",
                    LOTTERY_SHARE: "lotteryShare",
                    LOTTERY_WATCH_AD_SUCCESS: "lotteryWatchAdSuccess",
                    LOTTERY_SHARE_SUCCESS: "lotteryShareSuccess",
                    ONLINE_REWARD_ENTRANCE: "onlineRewardEntrance",
                    ONLINE_REWARD_SUCCESS: "onlineRewardSuccess",
                    SHOP_ENTRANCE: "shopEntrance",
                    SHOP_PROP_PER_BUY: "shopPropPerBuy",
                    SHOP_RAND_PROP_SHARE: "shopRandPropShare",
                    SHOP_PLAYER_GOLD: "shopPlayerGold",
                    SETTING_MUSIC_ON: "settingMusicOn",
                    SETTING_MUSIC_OFF: "settingMusicOff",
                    SETTING_SOUND_ON: "settingSoundOn",
                    SETTING_SOUND_OFF: "settingSoundOff",
                    RANK_ENTRANCE: "rankEntrance",
                    RANK_SHARE: "rankShare",
                    SHARE_CLICK: "shareClick",
                    SHARE_SUCCESS: "shareSuccess",
                    MOREGAME_ENTRANCE: "moregameEntrance",
                    MOREGAME_SINGLE: "\u4e92\u63a8\u5899-\u5356\u91cf",
                    MAIN_PUSH_GAME: "\u4e3b\u754c\u9762-\u5356\u91cf",
                    CHECKPOINT_PROP_BUY_NUM: "checkpointPropBuyNum",
                    GAME_PROP_SUCCESS_NUM: "gamePropSuccessNum",
                    GAME_PROP_BUY_NUM: "gamePropSuccessNum",
                    BALANCE_NEXT: "balanceNext",
                    BALANCE_PLAY_AGAIN: "balancePlayAgain",
                    BALANCE_SHARE: "balanceShare",
                    BALANCE_CLOSE: "balanceClose",
                    GAME_BAR_CLICK: "\u5bfc\u6d41\u6761-\u5356\u91cf",
                    CHANNEL: "channel",
                    WATCH_AD_BTN_SHOW_TIMES: "\u89c6\u9891\u6309\u94ae\u5c55\u793a\u6b21\u6570",
                    WATCH_AD_BTN_CLICK_TIMES: "\u89c6\u9891\u6309\u94ae\u70b9\u51fb\u6b21\u6570",
                    WATCH_AD_BTN_SUCCESS_TIMES: "\u89c6\u9891\u6309\u94ae\u6210\u529f\u70b9\u51fb\u6b21\u6570"
                },
                ONLINE_REWARD_INTERVAL: [0, 3, 5, 10, 30],
                REWARD_STATUS: {
                    UNRECEIVABLE: 0,
                    RECEIVABLE: 1,
                    RECEIVED: 2
                },
                OPEN_REWARD_TYPE: {
                    AD: 0,
                    SHARE: 1,
                    NULL: 2
                },
                SHOP_COUNTDOWN_HOURS: 4,
                UNLOCK_HIGEST_LEVEl: 5,
                UNLOCK_PROP_ID: [1, 2, 3, 4],
                OFFLINE_REWARD: 10,
                WX_BANNER_ADS: {
                    BALANCE: 0,
                    PVE_PAGE: 1,
                    GAME: 2
                },
                WX_REWARD_ADS: {
                    VIDEO: 0
                },
                WX_ADS_TYPE: {
                    BANNER: 0,
                    VIDEO: 4
                },
                WX_ADS_RESP_CODE: {
                    kAdsReceived: 0,
                    kAdsShown: 1,
                    kAdsDismissed: 2,
                    kUnknownError: 6
                },
                NORMAL_SHOW_TIME: .2
            },
            cc._RF.pop()
    }
        , {}],
    effectGroup: [function (e, t) {
        "use strict";
        cc._RF.push(t, "97452hq2+JOY4wRZ0jvZvzu", "effectGroup");
        var n = e("resourceUtil")
            , i = e("poolManager")
            , a = e("clientEvent")
            , o = e("constants");
        cc.Class({
            extends: cc.Component,
            properties: {},
            start: function () { },
            show: function (e) {
                this._fightScene = e
            },
            showStarFlyEffect: function (e, t, a, s) {
                var r = this
                    , c = this.node.convertToNodeSpaceAR(e);
                n.getEffectPrefab("fight/linkStar/linkStar", function (e, n) {
                    if (e)
                        a.apply(s, [e]);
                    else {
                        var h = i.getNode(n, r.node);
                        h.position = c;
                        var l = h.getComponent(cc.Animation);
                        l.once("finished", function () {
                            var e = r._fightScene.linkContent.getNoEffectLinkItemIndex();
                            if (!e)
                                return i.putNode(h),
                                    void a.apply(s, ["error"]);
                            r._fightScene.linkContent.markLinkItemEffect(e, t);
                            var n = r._fightScene.linkContent.getItemWorldPosByIndex(e)
                                , l = r.node.convertToNodeSpaceAR(n);
                            cc.gameSpace.audioManager.playSound(o.AUDIO_SOUND.FLY_STAR, !1),
                                h.stopActionByTag(1e4);
                            var u = l.sub(c).mag() / 1200
                                , d = cc.moveTo(u, l).easing(cc.easeIn(1))
                                , p = cc.sequence(d, cc.callFunc(function (n) {
                                    var o = n.getComponent(cc.Animation);
                                    o.once("finished", function () {
                                        i.putNode(n)
                                    }),
                                        o.play("linkStarOver"),
                                        a.apply(s, [null, e, t])
                                }, r));
                            p.setTag(1e4),
                                h.runAction(p)
                        }),
                            l.play("linkStarFly")
                    }
                }, this.node)
            },
            showStarAfterLevelFinished: function (e, t, a, s, r) {
                var c = this
                    , h = this.node.convertToNodeSpaceAR(e);
                n.getEffectPrefab("fight/linkStar/linkStar", function (e, n) {
                    if (e)
                        a.apply(s, [e]);
                    else {
                        var l = i.getNode(n, c.node);
                        if (l.position = h,
                            l.getComponent(cc.Animation).play("linkStarScale"),
                            r || (r = c._fightScene.linkContent.getNoEffectLinkItemIndex()),
                            !r)
                            return i.putNode(l),
                                void a.apply(s, ["error"]);
                        c._fightScene.linkContent.markLinkItemEffect(r, t);
                        var u = c._fightScene.linkContent.getItemWorldPosByIndex(r)
                            , d = c.node.convertToNodeSpaceAR(u);
                        cc.gameSpace.audioManager.playSound(o.AUDIO_SOUND.SPARE_STEP, !1),
                            l.stopActionByTag(1e4);
                        var p = [h, cc.v2((d.x - h.x) / 2 + h.x, h.y + 500), d]
                            , f = cc.bezierTo(1, p)
                            , g = cc.sequence(f, cc.callFunc(function (e) {
                                var n = e.getComponent(cc.Animation);
                                n.once("finished", function () {
                                    i.putNode(e)
                                }),
                                    n.play("linkStarOver"),
                                    a.apply(s, [null, r, t])
                            }, c));
                        g.setTag(1e4),
                            l.runAction(g)
                    }
                }, this.node)
            },
            showLinkItemDestroyEffect: function (e, t) {
                var a = this
                    , o = this.node.convertToNodeSpaceAR(e);
                n.getEffectPrefab("fight/effectHide/effectHide", function (e, n) {
                    if (!e) {
                        var s = i.getNode(n, a.node);
                        s.position = o;
                        var r = s.getComponent(cc.Animation);
                        r.once("finished", function () {
                            i.putNode(s),
                                a.showAfterDestroyEffect(o)
                        }, a),
                            r.play("effectHide"),
                            a.showLinkItemScore(o, t)
                    }
                })
            },
            showLinkItemScore: function (e, t) {
                var a = this;
                n.loadRes("prefabs/fight/fightNum", cc.Prefab, function (n, s) {
                    if (!n) {
                        var r = i.getNode(s, a.node);
                        r.position = cc.v2(e.x, e.y + 40),
                            r.zIndex = o.ZORDER.FIGHT_NUM,
                            r.getComponent("fightNum").show(t, function () {
                                i.putNode(r)
                            })
                    }
                })
            },
            showAfterDestroyEffect: function (e) {
                var t = this
                    , o = this._fightScene.fightUI.getProgressBarWorldPos()
                    , s = this.node.convertToNodeSpaceAR(o);
                s && n.getEffectPrefab("fight/eliminate/eliminate", function (n, o) {
                    if (!n) {
                        var r = i.getNode(o, t.node);
                        r.position = e;
                        var c = s.sub(e).mag() / 1e3
                            , h = cc.moveTo(c, s)
                            , l = cc.sequence(h, cc.callFunc(function (e) {
                                i.putNode(e),
                                    a.dispatchEvent("updateScore")
                            }, t));
                        r.runAction(l)
                    }
                })
            },
            showSkillLineEffect: function (e, t) {
                var a = this
                    , o = this.node.convertToNodeSpaceAR(e);
                n.getEffectPrefab("fight/effectSkillLine/effectSkillLine", function (e, n) {
                    if (!e) {
                        var s = i.getNode(n, a.node);
                        s.position = o,
                            s.rotation = 0,
                            t || (s.rotation = 90);
                        var r = s.getComponent(cc.Animation);
                        r.play("effectSkillLine"),
                            r.once("finished", function () {
                                i.putNode(s)
                            }, a)
                    }
                })
            },
            showSkillRangeEffect: function (e) {
                var t = this
                    , a = this.node.convertToNodeSpaceAR(e);
                n.getEffectPrefab("fight/effectSkillRange/effectSkillRange", function (e, n) {
                    if (!e) {
                        var s = i.getNode(n, t.node);
                        s.position = a,
                            cc.gameSpace.audioManager.playSound(o.AUDIO_SOUND.RANGE_BOMB, !1);
                        var r = s.getComponent(cc.Animation);
                        r.play("effectSkillRange"),
                            r.once("finished", function () {
                                i.putNode(s)
                            }, t)
                    }
                })
            },
            playTargetCakeFlyEffect: function (e, t, i, a) {
                var o = this;
                n.createUI("fight/showTargetCake", function (n, s) {
                    if (n)
                        a(n, s);
                    else {
                        var r = o.node.convertToNodeSpaceAR(t)
                            , c = o.node.convertToNodeSpaceAR(i);
                        s.position = r,
                            s.getComponent("showTargetCake").onlyShowCake(e);
                        var h = c.sub(r).mag() / 1e3
                            , l = cc.moveTo(h, c)
                            , u = cc.sequence(l, cc.callFunc(function (e) {
                                e.destroy(),
                                    a()
                            }, o));
                        s.runAction(u)
                    }
                }, this.node)
            },
            showBonusTime: function (e) {
                var t = this;
                n.createEffect("fight/bonusTime/bonusTime", function (n, i) {
                    if (n)
                        e(n, i);
                    else {
                        var a = i.getComponent(cc.Animation);
                        a.play("bonusTime"),
                            a.once("finished", function () {
                                i.destroy(),
                                    e(null)
                            }, t)
                    }
                }, this.node)
            },
            useInfiniteProp: function (e, t) {
                var i = this
                    , a = this.node.convertToNodeSpaceAR(e);
                n.createEffect("fight/propUse/propUse", function (e, n) {
                    if (!e) {
                        n.position = a;
                        var o = n.getComponent(cc.Animation);
                        o.play("propUse"),
                            o.on("finished", function () {
                                n.destroy(),
                                    i.showUnlimitedOrNumber(t, !0, null)
                            })
                    }
                }, this.node)
            },
            showUnlimitedOrNumber: function (e, t, i) {
                var o = this.node.convertToNodeSpaceAR(e);
                n.createEffect("fight/unlimited/unlimited", function (e, n) {
                    if (!e) {
                        n.position = o;
                        var s = n.getComponent(cc.Animation)
                            , r = n.getChildByName("homeIcon")
                            , c = r.getChildByName("homeIconUnlimited")
                            , h = r.getChildByName("txt");
                        c.active = t,
                            h.active = !t,
                            !t && i > 0 && (h.getComponent(cc.Label).string = i),
                            s.play("unlimitedStart"),
                            s.on("finished", function () {
                                t ? s.play("unlimitedIdle") : (n.destroy(),
                                    a.dispatchEvent("updateStep"))
                            })
                    }
                }, this.node)
            },
            removeLastEffect: function () {
                var e = []
                    , t = this.node.getChildByName("unlimited");
                t && e.push(t),
                    0 !== e.length && e.forEach(function (e) {
                        e.removeFromParent()
                    })
            },
            showUnlockProp: function (e, t, i) {
                var a = this;
                n.getEffectPrefab("fight/propGet/propGet", function (o, s) {
                    if (!o) {
                        var r = cc.instantiate(s);
                        r.parent = a.node;
                        var c = a.node.convertToNodeSpaceAR(e)
                            , h = "00" + t
                            , l = r.getChildByName("prop");
                        n.setPropIcon(h, l.getComponent(cc.Sprite), function () { });
                        var u = r.getComponent(cc.Animation);
                        u.play("propGetStart");
                        var d = c.sub(r.position).mag() / 500
                            , p = cc.moveTo(d, c).easing(cc.easeCubicActionOut())
                            , f = cc.sequence(p, cc.callFunc(function () {
                                u.play("propGetOver"),
                                    u.on("finished", function () {
                                        r.destroy()
                                    }, a),
                                    i && i()
                            }));
                        u.on("finished", function () {
                            r.runAction(f)
                        }, a)
                    }
                }, this.node)
            }
        }),
            cc._RF.pop()
    }
        , {
        clientEvent: "clientEvent",
        constants: "constants",
        poolManager: "poolManager",
        resourceUtil: "resourceUtil"
    }],
    elasticLimit: [function (e, t) {
        "use strict";
        cc._RF.push(t, "cad33aLu5lGpY9kxRqQAXUn", "elasticLimit"),
            cc.Class({
                extends: cc.ScrollView,
                properties: {
                    elasticValueX: .5,
                    elasticValueY: .5
                },
                onLoad: function () {
                    this.node.on(cc.Node.EventType.TOUCH_MOVE, this._onTouchMoved, this, !0)
                },
                _onTouchMoved: function (e, t) {
                    if (this.enabledInHierarchy && !this._hasNestedViewGroup(e, t)) {
                        var n = e.touch;
                        if (this.content && this._handleMoveLogic(n),
                            this.cancelInnerEvents) {
                            if (n.getLocation().sub(n.getStartLocation()).mag() > 7 && !this._touchMoved && e.target !== this.node) {
                                var i = new cc.Event.EventTouch(e.getTouches(), e.bubbles);
                                i.type = cc.Node.EventType.TOUCH_CANCEL,
                                    i.touch = e.touch,
                                    i.simulate = !0,
                                    e.target.dispatchEvent(i),
                                    this._touchMoved = !0
                            }
                            this._stopPropagationIfTargetIsMe(e)
                        }
                    }
                },
                _handleMoveLogic: function (e) {
                    var t = e.getDelta();
                    this._processDeltaMove(t)
                },
                _processDeltaMove: function (e) {
                    this._scrollChildren(e),
                        this._gatherTouchMove(e)
                },
                _scrollChildren: function (e) {
                    var t, n = e = this._clampDelta(e);
                    this.elastic && (t = this._getHowMuchOutOfBoundary(),
                        n.x *= 0 === t.x ? 1 : this.elasticValueX,
                        n.y *= 0 === t.y ? 1 : this.elasticValueY),
                        this.elastic || (t = this._getHowMuchOutOfBoundary(n),
                            n = n.add(t));
                    var i = -1;
                    n.y > 0 ? this.content.y - this.content.anchorY * this.content.height + n.y > this._bottomBoundary && (i = "scroll-to-bottom") : n.y < 0 ? this.content.y - this.content.anchorY * this.content.height + this.content.height + n.y <= this._topBoundary && (i = "scroll-to-top") : n.x < 0 ? this.content.x - this.content.anchorX * this.content.width + this.content.width + n.x <= this._rightBoundary && (i = "scroll-to-right") : n.x > 0 && this.content.x - this.content.anchorX * this.content.width + n.x >= this._leftBoundary && (i = "scroll-to-left"),
                        this._moveContent(n, !1),
                        0 === n.x && 0 === n.y || (this._scrolling || (this._scrolling = !0,
                            this._dispatchEvent("scroll-began")),
                            this._dispatchEvent("scrolling")),
                        -1 !== i && this._dispatchEvent(i)
                }
            }),
            cc._RF.pop()
    }
        , {}],
    eventListener: [function (e, t) {
        "use strict";
        cc._RF.push(t, "52af6tRwp9Od5G0CUJ6MP/R", "eventListener");
        var n = cc.Class({
            ctor: function () {
                this.supportEvent = null
            },
            on: function (e, t, n) {
                this[e] = {
                    handler: t,
                    target: n
                }
            },
            off: function (e, t) {
                var n = this[e];
                n && n.handler && n.handler === t && (this[e] = null)
            },
            dispatchEvent: function (e) {
                if (null === this.supportEvent || this.supportEvent.hasOwnProperty(e)) {
                    for (var t = this[e], n = [], i = 1; i < arguments.length; i++)
                        n.push(arguments[i]);
                    t.handler ? t.handler.apply(t.target, n) : cc.log("not register " + e + "    callback func")
                } else
                    cc.error("please add the event into clientEvent.js")
            },
            setSupportEventList: function (e) {
                if (!(e instanceof Array))
                    return cc.error("supportEvent was not array"),
                        !1;
                for (var t in this.supportEvent = {},
                    e) {
                    var n = e[t];
                    this.supportEvent[n] = t
                }
                return !0
            }
        })
            , i = cc.Class({
                ctor: function () {
                    this.handlers = {},
                        this.supportEvent = null
                },
                on: function (e, t, n) {
                    var i = {
                        handler: t,
                        target: n
                    }
                        , a = this.handlers[e];
                    a || (a = [],
                        this.handlers[e] = a);
                    for (var o = 0; o < a.length; o++)
                        if (!a[o])
                            return a[o] = i,
                                o;
                    return a.push(i),
                        a.length
                },
                off: function (e, t, n) {
                    var i = this.handlers[e];
                    if (i)
                        for (var a = 0; a < i.length; a++) {
                            var o = i[a];
                            if (o.handler === t && (!n || n === o.target)) {
                                i.splice(a, 1);
                                break
                            }
                        }
                },
                dispatchEvent: function (e) {
                    if (null === this.supportEvent || this.supportEvent.hasOwnProperty(e)) {
                        var t, n = this.handlers[e], i = [];
                        for (t = 1; t < arguments.length; t++)
                            i.push(arguments[t]);
                        if (n)
                            for (t = 0; t < n.length; t++) {
                                var a = n[t];
                                a.handler && a.handler.apply(a.target, i)
                            }
                    } else
                        cc.error("please add the event into clientEvent.js")
                },
                setSupportEventList: function (e) {
                    if (!(e instanceof Array))
                        return cc.error("supportEvent was not array"),
                            !1;
                    for (var t in this.supportEvent = {},
                        e) {
                        var n = e[t];
                        this.supportEvent[n] = t
                    }
                    return !0
                }
            })
            , a = {
                getBaseClass: function (e) {
                    return "multi" === e ? i : n
                }
            };
        t.exports = a,
            cc._RF.pop()
    }
        , {}],
    fightGuide: [function (e, t) {
        "use strict";
        cc._RF.push(t, "0c335oC9Y9Fc5YWelPxejg7", "fightGuide"),
            e("constants"),
            cc.Class({
                extends: cc.Component,
                properties: {},
                start: function () { },
                show: function (e) {
                    this.startTime = Date.now(),
                        this.closeCb = e
                },
                onBtnCloseClick: function () {
                    var e = this
                        , t = (Date.now(),
                            this.startTime,
                            this.node.getComponent("animationUI"));
                    t ? t.close(function () {
                        e.node.destroy()
                    }) : this.node.destroy(),
                        this.closeCb && this.closeCb()
                }
            }),
            cc._RF.pop()
    }
        , {
        constants: "constants"
    }],
    fightHandGuide: [function (e, t) {
        "use strict";
        cc._RF.push(t, "b57f2U4+lFHWYmyeEfh9N8U", "fightHandGuide"),
            cc.Class({
                extends: cc.Component,
                properties: {
                    ani: cc.Animation
                },
                start: function () { },
                moveOverCallback: function (e, t) {
                    t.callback && t.callback(t.index)
                },
                showGuide: function (e, t) {
                    var n = this;
                    this.node.setPosition(e[0]),
                        this.node.stopActionByTag(1e4),
                        t && t(0),
                        this.ani.play("handDown"),
                        this.ani.once("finished", function () {
                            for (var i = [], a = 1; a < e.length; a++) {
                                var o = e[a]
                                    , s = e[a - 1]
                                    , r = o.sub(s).mag()
                                    , c = cc.moveTo(r / 150, o);
                                i.push(c, cc.callFunc(n.moveOverCallback, n, {
                                    index: a,
                                    callback: t
                                }))
                            }
                            i.push(cc.callFunc(function () {
                                n.ani.play("handUp"),
                                    n.ani.once("finished", function () {
                                        n.scheduleOnce(function () {
                                            n.showGuide(e, t)
                                        }, .5)
                                    }, n)
                            }, n));
                            var h = cc.sequence(i);
                            h.setTag(1e4),
                                n.node.runAction(h)
                        }, this)
                }
            }),
            cc._RF.pop()
    }
        , {}],
    fightNum: [function (e, t) {
        "use strict";
        cc._RF.push(t, "0e8531febFP+ojrUxtAih7t", "fightNum"),
            cc.Class({
                extends: cc.Component,
                properties: {
                    lbNum: cc.Label,
                    ani: cc.Animation,
                    font1: cc.Font,
                    font2: cc.Font
                },
                start: function () { },
                show: function (e, t) {
                    this.lbNum.string = e,
                        e <= 50 ? (this.lbNum.font = this.font1,
                            this.node.scale = 1) : (this.lbNum.font = this.font2,
                                this.node.scale = 1.2),
                        this.ani.once("finished", t),
                        this.ani.play("fightNum")
                }
            }),
            cc._RF.pop()
    }
        , {}],
    fightPropsOperation: [function (e, t) {
        "use strict";
        cc._RF.push(t, "01774upBQlPPZbPTE42gyAF", "fightPropsOperation");
        var n = e("clientEvent")
            , i = e("LanguageData")
            , a = e("resourceUtil");
        cc.Class({
            extends: cc.Component,
            properties: {
                nodeMask: cc.Node,
                nodeTouch: cc.Node,
                nodeBg: cc.Node,
                nodeProp: cc.Node,
                lbTips: cc.Label,
                lbName: cc.Label,
                spProp: cc.Sprite,
                arrSfTip: [cc.SpriteFrame]
            },
            start: function () { },
            onEnable: function () {
                this.nodeTouch.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this),
                    this.nodeTouch.on(cc.Node.EventType.TOUCH_END, this.onTouchEnded, this),
                    this.nodeTouch.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this)
            },
            onDisable: function () {
                this.nodeTouch.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this),
                    this.nodeTouch.off(cc.Node.EventType.TOUCH_END, this.onTouchEnded, this),
                    this.nodeTouch.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this)
            },
            show: function (e, t, n, o, s) {
                var r = this;
                this.propId = e.ID,
                    a.setPropIcon(e.icon, this.spProp, function () { });
                var c = this.node.convertToNodeSpaceAR(t);
                this.closeCallback = s,
                    this.nodeProp.position = c,
                    this.nodeProp.getComponent("fightProp").show(e),
                    this.lbTips.string = i.t("table_prop." + e.desc),
                    this.lbName.string = i.t("table_prop." + e.name),
                    this._fightScene = o,
                    this.nodeMask.position = cc.v2(n.x + n.width / 2, n.y + n.height / 2),
                    this.nodeTouch.position = this.nodeMask.position,
                    this.nodeMask.width = n.width,
                    this.nodeMask.height = n.height,
                    this.nodeTouch.width = n.width,
                    this.nodeTouch.height = n.height,
                    this.scheduleOnce(function () {
                        r.nodeBg.width = r.node.width,
                            r.nodeBg.height = r.node.height,
                            r.nodeBg.position = cc.v2(-r.nodeMask.position.x, -r.nodeMask.position.y)
                    }, .1)
            },
            onTouchStart: function (e) {
                this._fightScene.linkContent.onPropTouchStart(e)
            },
            onTouchEnded: function (e) {
                var t = this._fightScene.linkContent.onPropTouchEnd(e);
                -1 !== t && (n.dispatchEvent("useProp", this.propId, t),
                    this.close())
            },
            onTouchCancel: function (e) {
                this._fightScene.linkContent.onPropTouchCancel(e)
            },
            onBtnCloseClick: function () {
                this.close()
            },
            close: function () {
                cc.gameSpace.uiManager.hideSharedDialog("fight/fightPropsOperation"),
                    this.closeCallback && this.closeCallback()
            }
        }),
            cc._RF.pop()
    }
        , {
        LanguageData: "LanguageData",
        clientEvent: "clientEvent",
        resourceUtil: "resourceUtil"
    }],
    fightProp: [function (e, t) {
        "use strict";
        cc._RF.push(t, "fe8afmT+lpEBr/zkz0jwl9D", "fightProp");
        var n = e("resourceUtil")
            , i = e("playerData")
            , a = e("clientEvent")
            , o = e("constants");
        cc.Class({
            extends: cc.Component,
            properties: {
                spProp: cc.Sprite,
                lbNum: cc.Label
            },
            start: function () {
                this.updateUnlockProp()
            },
            onEnable: function () {
                a.on("updateProp", this.updateProp, this),
                    a.on("updateUnlockProp", this.updateUnlockProp, this)
            },
            onDisable: function () {
                a.off("updateProp", this.updateProp, this),
                    a.off("updateUnlockProp", this.updateUnlockProp, this)
            },
            show: function (e) {
                this.prop = e,
                    n.setPropIcon(e.icon, this.spProp, function () { });
                var t = i.getPropAmount(e.ID);
                t <= 0 && (t = "+"),
                    this.lbNum.string = t
            },
            updateProp: function (e) {
                e === this.prop.ID && this.show(this.prop)
            },
            setClickListener: function (e) {
                this.clickCallback = e
            },
            onItemClick: function () {
                i.getPropAmount(this.prop.ID) <= 0 ? cc.gameSpace.uiManager.showSharedDialog("props/buy", "buy", [this.prop.ID, o.ANALYTICS_TYPE.GAME_PROP_BUY_NUM]) : this.clickCallback && this.clickCallback(this.prop, this.node.convertToWorldSpaceAR(cc.v2(0, 0)))
            },
            updateUnlockProp: function () {
                var e = i.isPropUnlock(this.prop.ID);
                this.node.getComponent("buttonEx").interactable = e,
                    n.setGray(this.node, !e)
            }
        }),
            cc._RF.pop()
    }
        , {
        clientEvent: "clientEvent",
        constants: "constants",
        playerData: "playerData",
        resourceUtil: "resourceUtil"
    }],
    fightScene: [function (e, t) {
        "use strict";
        cc._RF.push(t, "aa4e3RbxGxHyqBA31aqKi9Q", "fightScene");
        var n = e("playerData")
            , i = e("clientEvent")
            , a = e("constants")
            , o = (e("LanguageData"),
                e("localConfig"))
            , s = e("../../frameworks/Platform");
        cc.Class({
            extends: cc.Component,
            properties: {
                nodeLinkContent: cc.Node,
                nodeFightUI: cc.Node,
                nodeEffectGroup: cc.Node
            },
            start: function () {
                cc.debug.setDisplayStats(!1);
                var e = cc.winSize;
                e.width > e.height && (cc.find("Canvas").getComponent(cc.Canvas).fitHeight = !0),
                    n.startNewLevel(),
                    this.linkContent = this.nodeLinkContent.getComponent("linkContent"),
                    this.fightUI = this.nodeFightUI.getComponent("fightUI"),
                    this.effectGroup = this.nodeEffectGroup.getComponent("effectGroup"),
                    this.effectGroup.show(this),
                    this.onNewLevel(),
                    cc.gameSpace.audioManager.stop(a.AUDIO_MUSIC.BACKGROUND),
                    cc.gameSpace.audioManager.playMusic(a.AUDIO_MUSIC.FIGHT, !0)
            },
            onEnable: function () {
                i.on("levelFinished", this.onLevelFinished, this),
                    i.on("gameOver", this.onGameOver, this),
                    i.on("newLevel", this.onNewLevel, this),
                    i.on("useProp", this.useProp, this)
            },
            onDisable: function () {
                i.off("levelFinished", this.onLevelFinished, this),
                    i.off("gameOver", this.onGameOver, this),
                    i.off("newLevel", this.onNewLevel, this),
                    i.off("useProp", this.useProp, this),
                    cc.gameSpace.audioManager.stop(a.AUDIO_MUSIC.FIGHT),
                    cc.gameSpace.audioManager.playMusic(a.AUDIO_MUSIC.BACKGROUND, !0)
            },
            onLevelFinished: function () {
                var e = this;
                this.isLevelOver = !0,
                    s.reportLevelPassed(n.level),
                    s.reportRankScore({
                        rankId: "1571f0f1a3de4071980f3809a9576d41",
                        score: n.level
                    }),
                    n.spareStep > 0 && !n.curLevelInfo.infinite ? this.showBonusTime(function () {
                        var t = n.spareStep;
                        if (e.spareStar = t,
                            t > 0) {
                            e.allFlyFinishCb = e.triggerAllSpecialEffect;
                            for (var o = 0; o < t; o++)
                                e.scheduleOnce(function () {
                                    n.reduceStep(),
                                        i.dispatchEvent("updateStep");
                                    var t = e.fightUI.getStepWorldPos()
                                        , o = _.random(0, 1) ? a.SPECIAL_EFFECT.HORIZONTAL : a.SPECIAL_EFFECT.VERTICAL;
                                    e.effectGroup.showStarAfterLevelFinished(t, o, e.showFlyEffectOver, e)
                                }, .2 * o)
                        } else
                            e.triggerAllSpecialEffect()
                    }) : this.triggerAllSpecialEffect()
            },
            showBonusTime: function (e) {
                var t = this;
                cc.gameSpace.audioManager.playSound(a.AUDIO_SOUND.BONUS_TIME, !1),
                    this.scheduleOnce(function () {
                        t.effectGroup.showBonusTime(function () {
                            t.linkContent.showLinkFinishEffect(e)
                        })
                    }, .2)
            },
            onGameOver: function () {
                var e = this;
                this.isLevelOver || (this.isLevelOver = !0,
                    this.reliveByAd ? this.showGameOverUI() : (this.reliveByAd = !0,
                        cc.gameSpace.uiManager.showSharedDialog("fight/adStep", "adStep", [function (t) {
                            t ? e.showGameOverUI() : (n.addStep(5),
                                e.isLevelOver = !1,
                                i.dispatchEvent("updateStep", !1))
                        }
                        ])))
            },
            showGameOverUI: function () {
                cc.gameSpace.uiManager.showSharedDialog("fight/balanceFailed", "balanceFailed")
            },
            onNewLevel: function () {
                var e = this;
                this.isLevelStart = !1,
                    this.isLevelOver = !1,
                    this.reliveByAd = !1,
                    this.dictPropsUseTimes = {},
                    this.effectGroup.removeLastEffect(),
                    this.linkContent.dictCakes ? this.linkContent.showAllLinkItem(!1, function () {
                        e.linkContent.show(e),
                            e.fightUI.show(e),
                            n.isNeedOpenUnlockPanel() ? cc.gameSpace.uiManager.showSharedDialog("fight/unLockProp", "unLockProp", [e.showTargets.bind(e), e.fightUI]) : e.showTargets()
                    }) : (this.linkContent.show(this),
                        this.fightUI.show(this),
                        n.hasSeenGuide() ? n.isNeedOpenUnlockPanel() ? cc.gameSpace.uiManager.showSharedDialog("fight/unLockProp", "unLockProp", [this.showTargets.bind(this), this.fightUI]) : this.showTargets() : cc.gameSpace.uiManager.showSharedDialog("fight/fightGuide", "fightGuide", [function () {
                            n.finishSeenGuide(),
                                n.isNeedOpenUnlockPanel() ? cc.gameSpace.uiManager.showSharedDialog("fight/unLockProp", "unLockProp", [e.showTargets.bind(e), e.fightUI]) : e.showTargets()
                        }
                        ])),
                    this.linkContent.stopGuideHand()
            },
            showTargets: function () {
                var e = this;
                this.fightUI.showTargetsAni(function () {
                    e.showAdRewardAsk(),
                        e.isLevelStart = !0
                })
            },
            showAdRewardAsk: function () {
                var e = this;
                n.level > 3 ? cc.gameSpace.uiManager.showSharedDialog("fight/adProp", "adProp", [function (t) {
                    t ? e.showAdRewardOver(!1) : e.showAdRewardOver(!0)
                }
                ]) : this.showAdRewardOver(!1)
            },
            showAdRewardOver: function (e) {
                var t = this;
                if (e) {
                    this.spareStar = 2,
                        this.allFlyFinishCb = null;
                    for (var n = 0; n < 2; n++)
                        this.scheduleOnce(function () {
                            var e = t.fightUI.getStepWorldPos()
                                , n = _.random(0, 1) ? a.SPECIAL_EFFECT.HORIZONTAL : a.SPECIAL_EFFECT.VERTICAL;
                            t.effectGroup.showStarAfterLevelFinished(e, n, t.showFlyEffectOver, t)
                        }, .2 * n)
                }
            },
            showFlyEffect: function (e, t) {
                for (var n in this.allFlyFinishCb = t,
                    this.spareStar = 0,
                    e) {
                    var i = this.linkContent.getItemWorldPosByIndex(n);
                    this.spareStar++,
                        this.effectGroup.showStarFlyEffect(i, e[n], this.showFlyEffectOver, this)
                }
            },
            showFlyEffectOver: function (e, t, n) {
                this.spareStar--,
                    e || (this.spareStar = this.spareStar < 0 ? 0 : this.spareStar,
                        this.linkContent.addEffect(t, n),
                        0 === this.spareStar && this.allFlyFinishCb && this.allFlyFinishCb())
            },
            triggerAllSpecialEffect: function () {
                var e = this;
                this.linkContent.triggerAllSpecialEffect(function () {
                    e.scheduleOnce(function () {
                        e.linkContent.fillEmptyCell()
                    }, .3),
                        e.scheduleOnce(function () {
                            n.balanceOverAdTimes || (n.balanceOverAdTimes = 1),
                                n.balanceOverAdTimes++,
                                n.balanceOverAdTimes > 2 ? (cc.gameSpace.gameLogic.showInterStitialAd(function () {
                                    cc.gameSpace.uiManager.showSharedDialog("fight/balance", "balance")
                                }),
                                    n.balanceOverAdTimes = 1) : cc.gameSpace.uiManager.showSharedDialog("fight/balance", "balance")
                        }, 2)
                })
            },
            getLinkContentRect: function () {
                var e = this.nodeLinkContent.position;
                return new cc.Rect(e.x, e.y, this.nodeLinkContent.width, this.nodeLinkContent.height)
            },
            isPropCanUse: function (e) {
                var t = o.queryByID("prop", e);
                return !t || !(this.dictPropsUseTimes.hasOwnProperty(e) && this.dictPropsUseTimes[e] >= t.limit)
            },
            showPropOperationUI: function (e, t) {
                var n = this;
                this.linkContent.stopGuideHand(),
                    this.isShowOperationUI = !0,
                    cc.gameSpace.uiManager.showSharedDialog("fight/fightPropsOperation", "fightPropsOperation", [e, t, this.getLinkContentRect(), this, function () {
                        n.isShowOperationUI = !1
                    }
                    ])
            },
            useProp: function (e, t) {
                switch (e) {
                    case a.PROP_ID.HAMMER:
                        if (!t || t < 0)
                            return;
                        this.linkContent.destoryCake(t);
                        break;
                    case a.PROP_ID.MAGIC:
                        if (!t || t < 0)
                            return;
                        var o = this.fightUI.getStepWorldPos();
                        this.spareStar = 1;
                        var s = _.random(0, 1) ? a.SPECIAL_EFFECT.HORIZONTAL : a.SPECIAL_EFFECT.VERTICAL;
                        this.allFlyFinishCb = null,
                            this.effectGroup.showStarAfterLevelFinished(o, s, this.showFlyEffectOver, this, t);
                        break;
                    case a.PROP_ID.REFRESH:
                        if (this.linkContent.stopGuideHand(),
                            !this.linkContent.refreshLinkItems())
                            return;
                        break;
                    case a.PROP_ID.INFINITE:
                        n.curLevelInfo.infinite = !0,
                            this.fightUI.showInfinite()
                }
                this.dictPropsUseTimes.hasOwnProperty(e) ? this.dictPropsUseTimes[e]++ : this.dictPropsUseTimes[e] = 1,
                    n.costProp(e),
                    i.dispatchEvent("updateProp", e)
            }
        }),
            cc._RF.pop()
    }
        , {
        "../../frameworks/Platform": "Platform",
        LanguageData: "LanguageData",
        clientEvent: "clientEvent",
        constants: "constants",
        localConfig: "localConfig",
        playerData: "playerData"
    }],
    fightTarget: [function (e, t) {
        "use strict";
        cc._RF.push(t, "01817VhYV5BoLEoEhl13On0", "fightTarget");
        var n = e("clientEvent")
            , i = e("resourceUtil")
            , a = e("playerData");
        cc.Class({
            extends: cc.Component,
            properties: {
                spCake: cc.Sprite,
                lbTargetValue: cc.Label,
                nodeCustomer: cc.Node,
                nodeNeed: cc.Node,
                nodeCake: cc.Node,
                nodeYes: cc.Node,
                aniCake: cc.Animation
            },
            start: function () { },
            onEnable: function () {
                n.on("updateTargets", this.updateTarget, this),
                    n.on("showTargetCake", this.showTargetCake, this)
            },
            onDisable: function () {
                n.off("updateTargets", this.updateTarget, this),
                    n.off("showTargetCake", this.showTargetCake, this)
            },
            show: function (e, t) {
                var n = this;
                if (this.cake = e,
                    i.setCakeIcon(this.cake, this.spCake, function () { }),
                    this.updateTagetValue(),
                    t)
                    if (this.customer)
                        this.customer.active = !0;
                    else {
                        var a = _.random(0, 1)
                            , o = "role/man01/man01"
                            , s = 0;
                        a && (o = "role/woman01/woman01",
                            s = 15),
                            i.createEffect(o, function (e, t) {
                                e || (n.customer = t,
                                    n.customer.position = cc.v2(0, s))
                            }, this.nodeCustomer)
                    }
                else
                    this.customer && (this.customer.active = !1);
                this.nodeNeed.active = !1,
                    this.nodeCake.active = !1
            },
            showTargetCake: function (e) {
                "all" !== e && e !== this.cake || (this.nodeNeed.active = !0,
                    this.nodeCake.active = !0,
                    this.node.getComponent(cc.Animation).play("linkItemShowTarget"))
            },
            updateTagetValue: function () {
                var e = a.getTargetValue(this.cake);
                this.lbTargetValue.string = e,
                    this.nodeYes.active = e <= 0
            },
            updateTarget: function (e) {
                this.cake === e && this.updateTagetValue()
            },
            playIdle: function () {
                this.customer && this.customer.getComponent(cc.Animation).play("idle")
            },
            getCakeWorldPos: function () {
                return this.spCake.node.convertToWorldSpaceAR(cc.v2(0, 0))
            }
        }),
            cc._RF.pop()
    }
        , {
        clientEvent: "clientEvent",
        playerData: "playerData",
        resourceUtil: "resourceUtil"
    }],
    fightUI: [function (e, t) {
        "use strict";
        cc._RF.push(t, "b70bahPE9BEa6kDxgxn3iLv", "fightUI");
        var n = e("playerData")
            , i = e("clientEvent")
            , a = e("uiManager")
            , o = e("resourceUtil")
            , s = e("localConfig")
            , r = e("constants")
            , c = e("LanguageData");
        cc.Class({
            extends: cc.Component,
            properties: {
                nodeTargets: cc.Node,
                pfTarget: cc.Prefab,
                lbStep: cc.Label,
                lbLevel: cc.Label,
                lbScore: cc.Label,
                progress: cc.ProgressBar,
                nodeProBar: cc.Node,
                arrStars: [cc.Node],
                arrStarsBg: [cc.Node],
                nodePropGroup: cc.Node,
                pfFightProp: cc.Prefab,
                nodeInfinite: cc.Node
            },
            start: function () {
                this.startCustomerRandAction()
            },
            onEnable: function () {
                i.on("updateStep", this.updateStepInfo, this),
                    i.on("updateScore", this.updateScore, this)
            },
            onDisable: function () {
                i.off("updateStep", this.updateStepInfo, this),
                    i.off("updateScore", this.updateScore, this)
            },
            show: function (e) {
                this.targetProgress = null,
                    this._fightScene = e,
                    this.initTargets(),
                    this.updateLevelInfo(),
                    this.updateStepInfo(),
                    this.updateScore(),
                    this.initProps(),
                    this.showInfinite(),
                    0 === n.score && this.progress.progress > 0 && (this.progress.progress = 0,
                        this.arrStars[0].active = !1,
                        this.arrStars[1].active = !1,
                        this.arrStars[2].active = !1)
            },
            updateLevelInfo: function () {
                this.lbLevel.string = n.level
            },
            updateStepInfo: function (e) {
                !1 === e ? (this.lbStep.node.active = !1,
                    this._fightScene.effectGroup.showUnlimitedOrNumber(this.nodeInfinite.convertToWorldSpaceAR(cc.v2(0, 0)), !1, n.spareStep)) : n.curLevelInfo.infinite || void 0 !== e || (this.lbStep.node.active = !0,
                        this.lbStep.string = n.spareStep)
            },
            updateScore: function () {
                var e = n.score;
                this.lbScore.string = e;
                var t = 0
                    , i = n.arrStars;
                e < i[0] ? t = e / i[0] * .33 : e < i[1] ? t = .33 + (e - i[0]) / (i[1] - i[0]) * .33 : (t = .67 + (e - i[1]) / (i[2] - i[1]) * .33) >= 1 && (t = 1),
                    this.targetProgress = t
            },
            initTargets: function () {
                for (var e in this.nodeTargets.removeAllChildren(!0),
                    this.arrTargetNode = [],
                    n.dictTargets) {
                    var t = cc.instantiate(this.pfTarget);
                    t.parent = this.nodeTargets,
                        t.getComponent("fightTarget").show(e, !0),
                        this.arrTargetNode.push(t)
                }
            },
            getTargetWorldPos: function (e) {
                for (var t = 0; t < this.arrTargetNode.length; t++) {
                    var n = this.arrTargetNode[t].getComponent("fightTarget");
                    if (n.cake === e)
                        return n.getCakeWorldPos()
                }
                return null
            },
            showTargetsAni: function (e) {
                var t = this;
                o.createUI("fight/showTarget", function (n, a) {
                    n ? i.dispatchEvent("showTargetCake", "all") : a.getComponent("showTarget").show(t, e)
                }, this.node)
            },
            getStepWorldPos: function () {
                return this.lbStep.node.convertToWorldSpaceAR(cc.v2(0, 0))
            },
            getProgressBarWorldPos: function () {
                return this.nodeProBar.convertToWorldSpaceAR(cc.v2(this.nodeProBar.width, 0))
            },
            onBtnSettingClick: function () {
                a.showSharedDialog("dialog/gameSetting", "gameSetting")
            },
            onBtnQuestionClick: function () {
                a.showSharedDialog("fight/fightGuide", "fightGuide", [function () { }
                ])
            },
            startCustomerRandAction: function () {
                var e = this
                    , t = 3 + 3 * Math.random();
                this.scheduleOnce(function () {
                    if (e.arrTargetNode.length <= 0)
                        e.startCustomerRandAction();
                    else {
                        var t = Math.floor(Math.random() * e.arrTargetNode.length);
                        e.arrTargetNode[t].getComponent("fightTarget").playIdle(),
                            e.startCustomerRandAction()
                    }
                }, t)
            },
            update: function (e) {
                if (null !== this.targetProgress) {
                    var t = this.progress.progress;
                    if (this.targetProgress !== t) {
                        var n = t;
                        this.targetProgress > t ? t += e : t -= e,
                            t = this.targetProgress > 0 ? t > this.targetProgress ? this.targetProgress : t : t < 0 ? 0 : t,
                            this.progress.progress = t,
                            t >= 1 && n < 1 ? this.showStar(2) : n >= 1 && t < 1 ? this.arrStars[2].active = !1 : t >= .66 && (n < .66 || n >= 1) ? (this.arrStars[0].active = !0,
                                n < .66 && this.showStar(1)) : t >= .33 && t < .66 && (n < .33 || n >= .66) ? (this.arrStars[1].active = !1,
                                    n < .33 && this.showStar(0)) : t < .33 && n >= .33 && (this.arrStars[0].active = !1,
                                        this.arrStars[1].active = !1,
                                        this.arrStars[2].active = !1)
                    }
                }
            },
            showStar: function (e) {
                var t = this;
                this.arrStars[e].active || o.createEffect("fight/homeStar/homeStar", function (n, i) {
                    if (n)
                        t.arrStars[e].active = !0;
                    else {
                        cc.gameSpace.audioManager.playSound(r.AUDIO_SOUND.FINISH_STAR, !1);
                        var a = i.getComponent(cc.Animation);
                        a.play("homeStarShow"),
                            a.once("finished", function () {
                                i.destroy(),
                                    t.arrStars[e].active = !0
                            })
                    }
                }, this.arrStarsBg[e])
            },
            initProps: function () {
                this.nodePropGroup.removeAllChildren(!0),
                    this.onItemClick = this.onItemClick.bind(this);
                var e = s.getTable("prop");
                for (var t in e) {
                    var n = cc.instantiate(this.pfFightProp);
                    n.parent = this.nodePropGroup;
                    var i = n.getComponent("fightProp");
                    i.show(e[t]),
                        i.setClickListener(this.onItemClick)
                }
            },
            onItemClick: function (e, t) {
                n.getPropAmount(e.ID) <= 0 ? cc.gameSpace.showTips(c.t("fight.propNoEnough")) : this._fightScene.isPropCanUse(e.ID) ? (e.ID === r.PROP_ID.INFINITE && this._fightScene.effectGroup.useInfiniteProp(t, this.nodeInfinite.convertToWorldSpaceAR(cc.v2(0, 0))),
                    e.ID === r.PROP_ID.HAMMER || e.ID === r.PROP_ID.MAGIC ? this._fightScene.showPropOperationUI(e, t) : i.dispatchEvent("useProp", e.ID)) : cc.gameSpace.showTips(c.t("fight.propExceedMaxTimes"))
            },
            showInfinite: function () {
                if (n.curLevelInfo && n.curLevelInfo.infinite)
                    return this.lbStep.node.active = !1,
                        void (this.nodeInfinite.active = !0);
                this.lbStep.node.active = !0,
                    this.nodeInfinite.active = !1
            },
            showUnlockProp: function (e, t) {
                var n = this.nodePropGroup.children[e - 1].convertToWorldSpaceAR(cc.v2(0, 0));
                this._fightScene.effectGroup.showUnlockProp(n, e, t)
            }
        }),
            cc._RF.pop()
    }
        , {
        LanguageData: "LanguageData",
        clientEvent: "clientEvent",
        constants: "constants",
        localConfig: "localConfig",
        playerData: "playerData",
        resourceUtil: "resourceUtil",
        uiManager: "uiManager"
    }],
    formula: [function (e, t) {
        "use strict";
        cc._RF.push(t, "06834Y7hPVJHJbD0xseqH0Q", "formula"),
            "undefined" != typeof cc ? e("constants") : e("./constants");
        var n = {
            isHit: function (e) {
                return Math.floor(100 * Math.random()) < 100 * e
            },
            isHitWithPercent: function (e) {
                return this.isHit(e / 100)
            },
            getRequirementByLevel: function (e) {
                switch (e) {
                    case 1:
                        return 0;
                    case 2:
                        return 5e3;
                    case 3:
                        return 1e5;
                    case 4:
                        return 5e6
                }
                return 0
            },
            getChipsAmountByLevel: function (e) {
                switch (e) {
                    case 1:
                        return [10, 20, 50, 100];
                    case 2:
                        return [500, 1e3, 2500, 5e3];
                    case 3:
                        return [1e4, 2e4, 5e4, 1e5];
                    case 4:
                        return [5e5, 1e6, 25e5, 5e6]
                }
                return [10, 20, 50, 100]
            },
            getChipAmount: function (e, t) {
                return this.getChipsAmountByLevel(e)[t]
            }
        };
        t.exports = n,
            cc._RF.pop()
    }
        , {
        "./constants": "constants",
        constants: "constants"
    }],
    gameLogic: [function (e, t) {
        "use strict";
        cc._RF.push(t, "72a86eT/GZB8K0okUbOBKut", "gameLogic");
        var n = e("playerData")
            , i = e("clientEvent")
            , a = e("constants")
            , o = new (cc.Class({
                properties: {
                    isConnect: !1
                },
                start: function () {
                    this.channel = ""
                },
                onAppShow: function (e) {
                    if (console.log("onAppShow", e),
                        1037 === e.scene && e.query) {
                        if (e.query.hasOwnProperty("game_id")) {
                            var t = e.query.game_id;
                            this.channel = t,
                                t && this.customEventStatistics(a.ANALYTICS_TYPE.CHANNEL, {
                                    channel: t
                                })
                        }
                    } else
                        1044 === e.scene ? this.channel = "share" : e.scene && (this.channel = e.scene + "")
                },
                afterLogin: function () {
                    var e = this;
                    this.startTick(),
                        setTimeout(function () {
                            n.isOpenOffLineReward() && cc.gameSpace.uiManager.pushToPopupSeq("pve/offLineReward", "offLineReward", [{
                                itemType: a.REWARD_TYPE.GOLD,
                                itemAmount: 500,
                                itemSubType: 0
                            }]),
                                e.convertSignInDataFormat(),
                                n.isNewBee || e.checkSignIn()
                        }, 1e3)
                },
                startTick: function () {
                    this.timer && clearInterval(this.timer),
                        this.timer = setInterval(this.onTick.bind(this), 1e3)
                },
                onTick: function () {
                    cc.gameSpace.isStop || (n.getOnlineRewardInfo().value.receiveStatus === a.REWARD_STATUS.UNRECEIVABLE && this.addUsedTime(),
                        this.checkShopPropInfo())
                },
                checkShopPropInfo: function () {
                    if (n.playerInfo.hasOwnProperty("shopPropInfo")) {
                        var e = n.playerInfo.shopPropInfo
                            , t = e.createDate
                            , o = e.receiveStatus;
                        e.isReceived,
                            Date.now() - t >= 36e5 * a.SHOP_COUNTDOWN_HOURS && o !== a.REWARD_STATUS.RECEIVABLE && (n.updateShopPropInfo(!1),
                                i.dispatchEvent("updateShopPropInfo"))
                    } else
                        n.resetShopPropInfo(),
                            n.updateShopPropInfo(!1)
                },
                checkSignIn: function () {
                    n.updateSignInCurrentDay(),
                        n.getSignInReceivedInfo().isTodayReceived || cc.gameSpace.uiManager.pushToPopupSeq("signIn/signIn", "signIn")
                },
                addUsedTime: function () {
                    var e = n.getOnlineRewardInfo().usedTime;
                    6e4 * n.getCountdownTime() - 1e3 * e <= 0 && n.updateOnlineRewardInfo(!1),
                        n.addUsedTime()
                },
                convertSignInDataFormat: function () {
                    n.playerInfo.hasOwnProperty("signInInfo") && n.playerInfo.signInInfo.hasOwnProperty("value") && n.convertSignInDataFormat(n.playerInfo.signInInfo)
                },
                finishLink: function (e, t) {
                    n.finishLink(e, t),
                        i.dispatchEvent("updateTargets", e),
                        i.dispatchEvent("updateStep")
                },
                checkGame: function () {
                    n.isLevelFinish() ? i.dispatchEvent("levelFinished") : n.isGameOver() && i.dispatchEvent("gameOver")
                },
                resetLevel: function () {
                    n.startNewLevel(),
                        i.dispatchEvent("newLevel")
                },
                showRewardAd: function (e) {
                    e && e(null)
                },
                showInterStitialAd: function (e) {
                    e(null)
                },
                share: function (e, t, n) {
                    n()
                },
                addDiamond: function (e) {
                    n.addDiamond(e),
                        i.dispatchEvent("updateDiamond")
                },
                addGold: function (e) {
                    n.addGold(e),
                        i.dispatchEvent("updateGold")
                },
                addProp: function (e, t) {
                    n.addProp(e, t),
                        i.dispatchEvent("updateProp", e)
                },
                getOpenRewardType: function (e, t) {
                    t(null, a.OPEN_REWARD_TYPE.NULL)
                },
                customEventStatistics: function () { },
                requestWithPost: function (e, t, n) {
                    var i = new XMLHttpRequest;
                    i.onreadystatechange = function () {
                        if (4 == i.readyState)
                            if (i.status >= 200 && i.status < 400) {
                                var e = i.responseText;
                                try {
                                    e = JSON.parse(i.responseText)
                                } catch (t) {
                                    console.error(i.responseText)
                                }
                                n(null, e)
                            } else
                                n("failed", i.status)
                    }
                        ,
                        i.open("POST", e, !0),
                        i.setRequestHeader("Content-Type", "application/json"),
                        i.send(JSON.stringify(t))
                }
            }));
        o.start(),
            t.exports = o,
            cc._RF.pop()
    }
        , {
        clientEvent: "clientEvent",
        constants: "constants",
        playerData: "playerData"
    }],
    gameSetting: [function (e, t) {
        "use strict";
        cc._RF.push(t, "c0ebf+rxRpMory9l2TqXwQ/", "gameSetting");
        var n = e("uiManager")
            , i = e("audioManager");
        e("localConfig"),
            cc.Class({
                extends: cc.Component,
                properties: {
                    ndMusicOpen: cc.Node,
                    ndMusicClose: cc.Node,
                    ndSoundOpen: cc.Node,
                    ndSoundClose: cc.Node
                },
                start: function () { },
                show: function () {
                    var e = i.getConfiguration(!0)
                        , t = i.getConfiguration(!1);
                    this.ndMusicOpen.active = !e,
                        this.ndMusicClose.active = e,
                        this.ndSoundOpen.active = !t,
                        this.ndSoundClose.active = t
                },
                onBtnHomeClick: function () {
                    cc.find("loading").getComponent("sceneManager").loadScene("pve", [], function (e) {
                        e && cc.error(e.message || e)
                    })
                },
                onBtnPlayAgainBtn: function () {
                    this.onBtnCloseClick(),
                        cc.gameSpace.gameLogic.resetLevel()
                },
                onBtnMusicOpenClick: function () {
                    i.openMusic(),
                        this.show()
                },
                onBtnMusicCloseClick: function () {
                    i.closeMusic(),
                        this.show()
                },
                onBtnSoundOpenClick: function () {
                    i.openSound(),
                        this.show()
                },
                onBtnSoundCloseClick: function () {
                    i.closeSound(),
                        this.show()
                },
                onBtnCloseClick: function () {
                    n.hideSharedDialog("dialog/gameSetting")
                }
            }),
            cc._RF.pop()
    }
        , {
        audioManager: "audioManager",
        localConfig: "localConfig",
        uiManager: "uiManager"
    }],
    gridView: [function (e, t) {
        "use strict";
        cc._RF.push(t, "b8fe1IpNE9FwKoarsDMqTYX", "gridView");
        var n = cc.Enum({
            HORIZONTAL: 1,
            VERTICAL: 2
        });
        cc.Class({
            extends: cc.Component,
            properties: {
                prefab: {
                    default: null,
                    type: cc.Prefab
                },
                scrollView: {
                    default: null,
                    type: cc.Node
                },
                type: {
                    default: n.VERTICAL,
                    type: n
                },
                prefabScale: 1,
                paddingLeft: 10,
                paddingRight: 10,
                paddingTop: 10,
                paddingBottom: 10,
                spacingX: 5,
                spacingY: 5,
                countPerRow: 5
            },
            onLoad: function () {
                this.updateTimer = 0,
                    this.updateInterval = .2,
                    this.pool = new cc.NodePool;
                for (var e = this.countPerRow, t = 0; t < e; ++t) {
                    var n = cc.instantiate(this.prefab);
                    this.pool.put(n)
                }
                this.contents = []
            },
            init: function (e) {
                this.isChange = !0,
                    this.positions = [],
                    this.contents = e instanceof Array ? e : [];
                var t = this.node.getContentSize();
                this.type === n.HORIZONTAL && (this.countPerCol = this.countPerRow);
                for (var i = 0; i < this.contents.length; i++) {
                    var a, o;
                    this.type === n.VERTICAL ? (a = i % this.countPerRow,
                        o = Math.floor(i / this.countPerRow)) : (a = Math.floor(i / this.countPerCol),
                            o = i % this.countPerCol);
                    var s = this.getPrefabWidth()
                        , r = this.getPrefabHeight();
                    this.positions.push(cc.v2(this.paddingLeft + this.spacingX * a + s * (a + .5), -(this.paddingTop + this.spacingY * o + r * (o + .5))))
                }
                var c = Math.ceil(i / this.countPerCol)
                    , h = this.getPrefabWidth()
                    , l = Math.ceil(i / this.countPerRow)
                    , u = this.getPrefabHeight();
                this.type === n.VERTICAL ? this.node.setContentSize(cc.size(t.width, this.paddingTop + this.spacingY * l + u * l)) : this.node.setContentSize(cc.size(this.paddingLeft + this.spacingX * c + h * c, t.height))
            },
            addNode: function () {
                for (var e, t = [], n = 0; n < this.contents.length; n++) {
                    var i = this.getPositionInView(this.positions[n]);
                    this.isOverBorder(i) ? (e = this.node.getChildByTag(n)) && this.remove(e) : (t.push(n),
                        (e = this.node.getChildByTag(n)) ? this.isChange && (this.node.emit("show", {
                            index: n,
                            node: e,
                            content: this.contents[n]
                        }),
                            e.setPosition(this.positions[n]),
                            e.tag = n) : this.create(e, n))
                }
                if (this.isChange) {
                    var a = this.node.children;
                    for (cc.log("num" + t),
                        n = 0; n < a.length;)
                        e = a[n],
                            -1 === t.indexOf(e.tag) ? (cc.log("remove" + e.tag),
                                this.remove(e)) : n++
                }
                this.isChange = !1
            },
            create: function (e, t) {
                (e = this.pool.size() > 0 ? this.pool.get() : cc.instantiate(this.prefab)).setScale(this.prefabScale, this.prefabScale),
                    this.node.emit("show", {
                        index: t,
                        node: e,
                        content: this.contents[t]
                    }),
                    e.setPosition(this.positions[t]),
                    this.node.addChild(e, 0, t)
            },
            remove: function (e) {
                this.pool.put(e),
                    this.node.removeChild(e, !1)
            },
            getPositionInView: function (e) {
                var t = this.node.convertToWorldSpaceAR(e);
                return this.scrollView.convertToNodeSpaceAR(t)
            },
            getPrefabHeight: function () {
                return this.prefab.data.height * this.prefabScale
            },
            getPrefabWidth: function () {
                return this.prefab.data.width * this.prefabScale
            },
            isOverBorder: function (e) {
                var t = this.scrollView.height / 2 + this.getPrefabHeight() / 2
                    , i = this.scrollView.width + this.getPrefabWidth() / 2;
                return this.type === n.VERTICAL ? e.y > t || e.y < -t : e.x > i
            },
            update: function (e) {
                this.updateTimer += e,
                    this.updateTimer < this.updateInterval || (this.updateTimer = 0,
                        this.addNode())
            },
            onDestory: function () {
                this.pool.clear()
            }
        }),
            cc._RF.pop()
    }
        , {}],
    levelPanel: [function (e, t) {
        "use strict";
        cc._RF.push(t, "8622524wZFNZK4SKvWm789R", "levelPanel");
        var n = e("uiManager")
            , i = e("playerData")
            , a = e("localConfig")
            , o = e("utils")
            , s = e("constants")
            , r = (e("clientEvent"),
                e("LanguageData"));
        cc.Class({
            extends: cc.Component,
            properties: {
                arrStarList: [cc.Node],
                lbHighScore: cc.Label,
                lbLevelNum: cc.Label,
                pbPropItem: cc.Prefab,
                pbTargetCake: cc.Prefab,
                ndStartList: cc.Node,
                ndPropList: cc.Node,
                ndCakeList: cc.Node
            },
            start: function () { },
            show: function (e, t) {
                this.levelInfo = e,
                    this.callback = t,
                    this.lbLevelNum.string = e.name,
                    this.lbHighScore.string = r.t("pve.highest") + " " + i.getHighestScoreByLevel(e.name);
                for (var n = e.targets.split("|"), c = this.ndCakeList.children, h = 0; h < n.length; h++) {
                    var l = n[h]
                        , u = null;
                    h < c.length ? u = c[h] : (u = cc.instantiate(this.pbTargetCake)).parent = this.ndCakeList,
                        u.getComponent("targetCake").setInfo(l)
                }
                for (var d = a.getTable("prop"), p = o.objectToArray(d), f = this.ndPropList.children, g = 0; g < p.length; g++) {
                    var m = null
                        , v = p[g];
                    g < f.length ? m = f[g] : (m = cc.instantiate(this.pbPropItem)).parent = this.ndPropList,
                        m.getComponent("propItem").setInfo(v)
                }
                var S = i.history;
                if (S[this.levelInfo.ID])
                    for (var I = S[this.levelInfo.ID].star, C = 0; C < s.MAX_GRADE_OF_EACH_PVE_LEVEL; C++)
                        this.arrStarList[C].active = C < I;
                else
                    this.arrStarList.forEach(function (e) {
                        e.active = !1
                    })
            },
            onBtnStartClick: function () {
                this.callback()
            },
            onBtnCloseClick: function () {
                n.hideSharedDialog("pve/levelPanel")
            }
        }),
            cc._RF.pop()
    }
        , {
        LanguageData: "LanguageData",
        clientEvent: "clientEvent",
        constants: "constants",
        localConfig: "localConfig",
        playerData: "playerData",
        uiManager: "uiManager",
        utils: "utils"
    }],
    levelUI: [function (e, t) {
        "use strict";
        cc._RF.push(t, "09faeI+TthOKbk54kKEeYOU", "levelUI");
        var n = e("constants")
            , i = e("playerData")
            , a = e("uiManager")
            , o = e("LanguageData")
            , s = e("resourceUtil");
        e("configuration"),
            cc.Class({
                extends: cc.Component,
                properties: {
                    nStars: {
                        default: null,
                        type: cc.Node
                    },
                    nCurrentLevel: {
                        default: null,
                        type: cc.Node
                    },
                    nLevelNotPassed: {
                        default: null,
                        type: cc.Node
                    },
                    nLevelPassed: {
                        default: null,
                        type: cc.Node
                    },
                    lbLevel: {
                        default: null,
                        type: cc.Label
                    },
                    aniTips: {
                        default: null,
                        type: cc.Animation
                    },
                    spAvatar: {
                        default: null,
                        type: cc.Sprite
                    },
                    arrStarNode: [cc.Node]
                },
                onLoad: function () {
                    this.aniTips.once("finished", this.onAniTipsFinished, this)
                },
                onDisable: function () {
                    this.aniTips.once("finished", this.onAniTipsFinished, this)
                },
                onAniTipsFinished: function () {
                    this.aniTips.play("pveLevelTipsIdle")
                },
                init: function (e) {
                    this.levelInfo = e,
                        this.setLevelNum(e.name),
                        this.setLevelStatus(e.status),
                        this.setStars(e.star),
                        i.playerInfo.avatarUrl && s.setAvatar(i.playerInfo.avatarUrl, this.spAvatar, function () { })
                },
                setLevelNum: function (e) {
                    this.lbLevel.string = e
                },
                setLevelStatus: function (e) {
                    e === n.PVE_LEVEL_STATUS.DONE ? (this.nCurrentLevel.active = !1,
                        this.nLevelNotPassed.active = !1,
                        this.nLevelPassed.active = !0) : e === n.PVE_LEVEL_STATUS.DOING ? (this.nCurrentLevel.active = !0,
                            this.nLevelNotPassed.active = !1,
                            this.nLevelPassed.active = !1) : (this.nCurrentLevel.active = !1,
                                this.nLevelNotPassed.active = !0,
                                this.nLevelPassed.active = !1)
                },
                setStars: function (e) {
                    if (e) {
                        this.nStars.active = !0;
                        for (var t = 0; t < n.MAX_GRADE_OF_EACH_PVE_LEVEL; t++) {
                            var i = !1;
                            t <= e - 1 && (i = !0),
                                this.arrStarNode[t].active = i
                        }
                    } else
                        this.nStars.active = !1
                },
                onBtnLevelChallenge: function () {
                    this.levelInfo.status !== n.PVE_LEVEL_STATUS.UNDONE ? a.showSharedDialog("pve/levelPanel", "levelPanel", [this.levelInfo, this.levelCallback]) : a.showTips(o.t("pve.cannotSkipLastLevel"))
                },
                levelCallback: function () {
                    Date.now(),
                        i.level = this.levelInfo.ID,
                        cc.find("loading").getComponent("sceneManager").loadScene("fight", [function (e) {
                            e()
                        }
                        ], function (e) {
                            e && cc.error(e.message || e)
                        })
                }
            }),
            cc._RF.pop()
    }
        , {
        LanguageData: "LanguageData",
        configuration: "configuration",
        constants: "constants",
        playerData: "playerData",
        resourceUtil: "resourceUtil",
        uiManager: "uiManager"
    }],
    linkContent: [function (e, t) {
        "use strict";
        cc._RF.push(t, "4f6b3WtEbBAH4oYBaofOW/U", "linkContent");
        var n = e("poolManager")
            , i = e("constants")
            , a = e("playerData")
            , o = e("gameLogic")
            , s = e("clientEvent")
            , r = e("resourceUtil")
            , c = 80
            , h = 80
            , l = 60
            , u = 60;
        cc.Class({
            extends: cc.Component,
            properties: {
                pfCake: cc.Prefab,
                pfLine: cc.Prefab,
                nodeLineGroup: cc.Node,
                nodeLinkOverEffect: cc.Node,
                nodeLinkGroup: cc.Node
            },
            start: function () { },
            show: function (e) {
                c = this.node.width / 8,
                    h = this.node.height / 8,
                    l = c - 25,
                    u = h - 25,
                    this.lastOperationTime = 0,
                    this.isShowHandGuide = !1,
                    this._fightScene = e,
                    this.dictCakes = {},
                    this.arrLinks = [],
                    this.arrLines = [],
                    this.levelInfo = a.getCurrentLevelInfo(),
                    this.initCake()
            },
            createCake: function (e, t, i) {
                var a = n.getNode(this.pfCake, this.nodeLinkGroup);
                return a.position = this.getScreenPosByIndex(e),
                    a.opacity = 255,
                    a.getComponent("linkItem").show(e, t, i, this),
                    this.dictCakes[e] = a,
                    a
            },
            initCake: function (e) {
                for (var t = this, n = this.levelInfo.cakes.split("|"), a = 0; a < i.LINK_ROWS_COUNT; a++)
                    for (var o = 0; o < i.LINK_COLS_COUNT; o++) {
                        var s = o + a * i.LINK_COLS_COUNT
                            , r = n[_.random(0, n.length - 1)];
                        this.createCake(s, r, !1)
                    }
                this.showAllLinkItem(!0, function () {
                    e && e(),
                        t.lastOperationTime = 0
                })
            },
            showAllLinkItem: function (e, t) {
                for (var n = i.LINK_ROWS_COUNT + i.LINK_ROWS_COUNT, a = 0; a < n; a++)
                    for (var o = 0; o < i.LINK_COLS_COUNT && !(o > a); o++)
                        for (var s = 0; s < i.LINK_ROWS_COUNT && !(s > a); s++)
                            if (s + o === a) {
                                var r = this.getIndexByPos(o, s);
                                this.dictCakes.hasOwnProperty(r) && (e ? this.dictCakes[r].getComponent("linkItem").playShowAction(.05 * a) : this.dictCakes[r].getComponent("linkItem").playHideAction(.05 * a, !1))
                            }
                t && this.scheduleOnce(t, .05 * n + .5)
            },
            onEnable: function () {
                this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this),
                    this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this),
                    this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnded, this),
                    this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this)
            },
            onDisable: function () {
                this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this),
                    this.node.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this),
                    this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchEnded, this),
                    this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this)
            },
            getCakeNodeByTouchPos: function (e) {
                var t = this.nodeLinkGroup.convertToWorldSpaceAR(cc.v2(0, 0))
                    , n = e.sub(t)
                    , a = Math.floor(n.x / c) + Math.floor(n.y / h) * i.LINK_COLS_COUNT
                    , o = this.dictCakes[a];
                return o && (Math.abs(n.x - o.x) > l / 2 || Math.abs(n.y - o.y) > u / 2) && (o = null),
                    o
            },
            drawLine: function () {
                var e = 0;
                if (this.arrLinks.length > 1) {
                    for (var t = this.arrLinks[0].getComponent("linkItem"), i = this.getPosByIndex(t.index), a = cc.v2((i.x + .5) * c, (i.y + .5) * h), o = [], s = 1; s < this.arrLinks.length; s++) {
                        var r = this.arrLinks[s].getComponent("linkItem")
                            , l = this.getPosByIndex(r.index)
                            , u = cc.v2((l.x + .5) * c, (l.y + .5) * h);
                        o.push({
                            start: a,
                            end: u
                        }),
                            a = u
                    }
                    for (; e < o.length; e++) {
                        var d = o[e]
                            , p = null;
                        e < this.arrLines.length ? (p = this.arrLines[e]).getComponent("linkLine") : (p = n.getNode(this.pfLine, this.nodeLineGroup),
                            this.arrLines.push(p),
                            p.getComponent("linkLine").show()),
                            p.getComponent("linkLine").setLinePosition(d.start, d.end)
                    }
                }
                if (e < this.arrLines.length) {
                    for (var f = e; f < this.arrLines.length; f++)
                        n.putNode(this.arrLines[f]);
                    this.arrLines.splice(e, this.arrLines.length)
                }
            },
            clearLine: function () {
                for (var e = 0; e < this.arrLines.length; e++)
                    n.putNode(this.arrLines[e]);
                this.arrLines = []
            },
            hideDiffCake: function () {
                for (var e in this.dictCakes) {
                    var t = this.dictCakes[e];
                    t.getComponent("linkItem").cake !== this.currentCake && (t.opacity = 50)
                }
            },
            showAllCake: function () {
                for (var e in this.dictCakes)
                    this.dictCakes[e].opacity = 255
            },
            checkStep: function () { },
            onTouchStart: function (e) {
                if (this._fightScene.isLevelOver || !this._fightScene.isLevelStart)
                    return this.currentNode = null,
                        void (this.arrLinks = []);
                var t = this.getCakeNodeByTouchPos(e.getLocation());
                if (t) {
                    this.stopGuideHand(),
                        this.arrLinks = [t],
                        this.currentNode = t;
                    var n = this.currentNode.getComponent("linkItem");
                    this.currentCake = n.cake,
                        this.preNode = null,
                        n.showSelect(!0),
                        cc.gameSpace.audioManager.playSound(i.AUDIO_SOUND.CLICK_CAKE, !1),
                        this.drawLine(),
                        this.hideDiffCake()
                }
            },
            getScreenPosByIndex: function (e) {
                var t = this.getPosByIndex(e);
                return cc.v2((t.x + .5) * c, (t.y + .5) * h)
            },
            getPosByIndex: function (e) {
                return cc.v2(e % i.LINK_COLS_COUNT, Math.floor(e / i.LINK_COLS_COUNT))
            },
            getIndexByPos: function (e, t) {
                return t * i.LINK_COLS_COUNT + e
            },
            onTouchMove: function (e) {
                if (this.currentNode) {
                    var t = this.getCakeNodeByTouchPos(e.getLocation());
                    if (t && t !== this.currentNode) {
                        var n = t.getComponent("linkItem");
                        if (this.currentCake === n.cake) {
                            if (this.preNode === t) {
                                var a = this.currentNode.getComponent("linkItem");
                                return a.showSelect(!1),
                                    a.isSpecial && a.showSpecial(!1),
                                    this.currentNode = this.preNode,
                                    this.arrLinks.pop(),
                                    this.preNode = this.arrLinks[this.arrLinks.length - 2],
                                    void this.drawLine()
                            }
                            if (-1 !== this.arrLinks.indexOf(t))
                                return;
                            var o = this.getPosByIndex(n.index)
                                , s = this.currentNode.getComponent("linkItem")
                                , r = this.getPosByIndex(s.index);
                            if (Math.abs(o.x - r.x) <= 1 && Math.abs(o.y - r.y) <= 1) {
                                this.preNode = this.currentNode,
                                    this.currentNode = t,
                                    this.arrLinks.push(t),
                                    n.showSelect(!0),
                                    cc.gameSpace.audioManager.playSound(i.AUDIO_SOUND.CLICK_CAKE, !1);
                                var c = this.arrLinks.length;
                                c >= 6 && (6 === c || (c - 6) % 4 == 0) && n.showSpecial(!0),
                                    this.drawLine()
                            }
                        }
                    }
                }
            },
            onTouchEnded: function () {
                this.touchOver()
            },
            onTouchCancel: function () {
                this.touchOver()
            },
            touchOver: function () {
                if (!this.isShowHandGuide) {
                    if (this.arrLinks.length >= 3)
                        cc.gameSpace.audioManager.playSound(i.AUDIO_SOUND.FINISH_LINK, !1),
                            this.clearLinks();
                    else {
                        for (var e = 0; e < this.arrLinks.length; e++)
                            this.arrLinks[e].getComponent("linkItem").showSelect(!1);
                        this.arrLinks = [],
                            this.preNode = null
                    }
                    this.currentNode = null,
                        this.clearLine(),
                        this.showAllCake(),
                        this.checkStep()
                }
            },
            clearItemByEffect: function (e, t, n, a) {
                var o = this.getPosByIndex(e);
                switch (t) {
                    case i.SPECIAL_EFFECT.HORIZONTAL:
                        this.clearScore += 500,
                            a || cc.gameSpace.audioManager.playSound(i.AUDIO_SOUND.LINE_BOMB, !1),
                            this._fightScene.effectGroup.showSkillLineEffect(this.getItemWorldPosByIndex(e), !0);
                        for (var s = 0; s < i.LINK_COLS_COUNT; s++)
                            if (s !== o.x || n) {
                                var r = this.getIndexByPos(s, o.y);
                                if (this.dictCakes.hasOwnProperty(r)) {
                                    var c = this.dictCakes[r].getComponent("linkItem");
                                    this.clearCake.hasOwnProperty(c.cake) ? this.clearCake[c.cake] += 1 : this.clearCake[c.cake] = 1,
                                        c.showDestory(),
                                        delete this.dictCakes[r],
                                        c.index !== e && (c.getEffect() ? this.clearItemByEffect(c.index, c.getEffect(), n) : this.clearScore += 50)
                                }
                            }
                        break;
                    case i.SPECIAL_EFFECT.VERTICAL:
                        this.clearScore += 500,
                            a || cc.gameSpace.audioManager.playSound(i.AUDIO_SOUND.LINE_BOMB, !1),
                            this._fightScene.effectGroup.showSkillLineEffect(this.getItemWorldPosByIndex(e), !1);
                        for (var h = 0; h < i.LINK_ROWS_COUNT; h++)
                            if (h !== o.y || n) {
                                var l = this.getIndexByPos(o.x, h);
                                if (this.dictCakes.hasOwnProperty(l)) {
                                    var u = this.dictCakes[l].getComponent("linkItem");
                                    this.clearCake.hasOwnProperty(u.cake) ? this.clearCake[u.cake] += 1 : this.clearCake[u.cake] = 1,
                                        u.showDestory(),
                                        delete this.dictCakes[l],
                                        u.index !== e && (u.getEffect() ? this.clearItemByEffect(u.index, u.getEffect(), n) : this.clearScore += 50)
                                }
                            }
                        break;
                    case i.SPECIAL_EFFECT.PLUS:
                        cc.gameSpace.audioManager.playSound(i.AUDIO_SOUND.PLUS_BOMB, !1),
                            this.clearItemByEffect(e, i.SPECIAL_EFFECT.HORIZONTAL, n, !0),
                            this.clearItemByEffect(e, i.SPECIAL_EFFECT.VERTICAL, n, !0);
                        break;
                    case i.SPECIAL_EFFECT.CENTER:
                        this.clearScore += 1500,
                            this._fightScene.effectGroup.showSkillRangeEffect(this.getItemWorldPosByIndex(e));
                        for (var d = -2; d <= 2; d++)
                            for (var p = -2; p <= 2; p++)
                                if (0 !== d || 0 !== p || n) {
                                    var f = cc.v2(o.x + d, o.y + p);
                                    if (!(f.x < 0 || f.x > i.LINK_COLS_COUNT || f.y < 0 || f.y > i.LINK_ROWS_COUNT) && Math.abs(f.x - o.x) + Math.abs(f.y - o.y) <= 2) {
                                        var g = this.getIndexByPos(f.x, f.y);
                                        if (this.dictCakes.hasOwnProperty(g)) {
                                            var m = this.dictCakes[g].getComponent("linkItem");
                                            this.clearCake.hasOwnProperty(m.cake) ? this.clearCake[m.cake] += 1 : this.clearCake[m.cake] = 1,
                                                m.showDestory(),
                                                delete this.dictCakes[g],
                                                m.index !== e && (m.getEffect() ? this.clearItemByEffect(m.index, m.getEffect(), n) : this.clearScore += 50)
                                        }
                                    }
                                }
                }
            },
            clearLinks: function () {
                var e = this
                    , t = {}
                    , n = {};
                this.clearScore = 0;
                for (var s = 0; s < this.arrLinks.length; s++) {
                    var r = this.arrLinks[s].getComponent("linkItem")
                        , c = r.getEffect();
                    if (c && (n[r.index] = c),
                        r.isSpecial) {
                        var h = null;
                        5 === s ? (h = _.random(0, 1) ? i.SPECIAL_EFFECT.HORIZONTAL : i.SPECIAL_EFFECT.VERTICAL,
                            this.clearScore += 1e3) : (h = (s - 5) / 4 % 2 ? i.SPECIAL_EFFECT.PLUS : i.SPECIAL_EFFECT.CENTER) === i.SPECIAL_EFFECT.PLUS ? this.clearScore += 2e3 : this.clearScore += 3e3,
                            r.setSpecialType(h),
                            t[r.index] = h
                    } else
                        c || (this.clearScore += 50);
                    r.showDestory(),
                        delete this.dictCakes[r.index]
                }
                for (var l in this.clearCake = {},
                    n)
                    this.clearItemByEffect(l, n[l], !1);
                a.addScore(this.clearScore);
                var u = this.arrLinks.length;
                o.finishLink(this.currentCake, u);
                var d = null;
                u >= 22 ? d = i.AUDIO_SOUND.UNBELIEVABLE : u >= 18 ? d = i.AUDIO_SOUND.AMAZING : u >= 14 ? d = i.AUDIO_SOUND.EXCELLENT : u >= 10 ? d = i.AUDIO_SOUND.GREAT : u >= 6 && (d = i.AUDIO_SOUND.GOOD),
                    d && cc.gameSpace.audioManager.playSound(d, !1),
                    this.finishTargetsBatch(),
                    this.arrLinks = [],
                    Object.keys(t).length > 0 ? this.scheduleOnce(function () {
                        e._fightScene.showFlyEffect(t, function () {
                            o.checkGame()
                        })
                    }, .1) : o.checkGame(),
                    this.scheduleOnce(this.fillEmptyCell, .3)
            },
            fillEmptyCell: function () {
                for (var e = this, t = 0; t < i.LINK_COLS_COUNT; t++) {
                    for (var n = -1, a = 0; a < i.LINK_ROWS_COUNT; a++) {
                        var o = a * i.LINK_COLS_COUNT + t;
                        if (this.dictCakes.hasOwnProperty(o)) {
                            if (-1 !== n) {
                                var s = n * i.LINK_COLS_COUNT + t;
                                this.dictCakes[s] = this.dictCakes[o];
                                var r = this.dictCakes[s].getComponent("linkItem");
                                r.index = s,
                                    r.playMove2Index(s),
                                    delete this.dictCakes[o],
                                    n += 1
                            }
                        } else
                            -1 === n && (n = a)
                    }
                    if (-1 !== n)
                        for (var c = this.levelInfo.cakes.split("|"), h = n; h < i.LINK_ROWS_COUNT; h++) {
                            var l = h * i.LINK_COLS_COUNT + t
                                , u = (i.LINK_ROWS_COUNT + h - n) * i.LINK_COLS_COUNT + t
                                , d = c[_.random(0, c.length - 1)];
                            this.createCakeForFill(l, d, u)
                        }
                }
                this.scheduleOnce(function () {
                    e.checkIsBlocked()
                }, .2)
            },
            createCakeForFill: function (e, t, i) {
                var a = n.getNode(this.pfCake, this.nodeLinkGroup);
                a.position = this.getScreenPosByIndex(i),
                    a.opacity = 255;
                var o = a.getComponent("linkItem");
                return o.show(e, t, !0, this),
                    o.playMove2Index(e),
                    this.dictCakes[e] = a,
                    a
            },
            getItemWorldPosByIndex: function (e) {
                var t = this.getScreenPosByIndex(e);
                return this.nodeLinkGroup.convertToWorldSpaceAR(t)
            },
            getNoEffectLinkItemIndex: function () {
                for (var e = 0; ;) {
                    var t = _.random(0, i.LINK_ROWS_COUNT * i.LINK_COLS_COUNT - 1);
                    if (this.dictCakes.hasOwnProperty(t)) {
                        var n = this.dictCakes[t].getComponent("linkItem");
                        if (!n.isSpecial && !n.getEffect())
                            return n.index
                    }
                    if (++e > 30)
                        return null
                }
            },
            markLinkItemEffect: function (e, t) {
                this.dictCakes.hasOwnProperty(e) && this.dictCakes[e].getComponent("linkItem").markEffect(t)
            },
            addEffect: function (e, t) {
                this.dictCakes.hasOwnProperty(e) && this.dictCakes[e].getComponent("linkItem").showEffect(t)
            },
            delayClearItem: function (e, t, n) {
                var i = this;
                this.scheduleOnce(function () {
                    i.cntTrigger--,
                        i.dictCakes.hasOwnProperty(t) && (i.clearScore = 0,
                            i.clearCake = {},
                            i.clearItemByEffect(t, n, !0),
                            a.addScore(i.clearScore),
                            i.finishTargetsBatch()),
                        i.cntTrigger <= 0 && i.allTriggerOverCb && i.allTriggerOverCb()
                }, .2 * e)
            },
            triggerAllSpecialEffect: function (e) {
                for (var t = 0, n = 0; n < i.LINK_ROWS_COUNT; n++)
                    for (var a = 0; a < i.LINK_COLS_COUNT; a++) {
                        var o = this.getIndexByPos(a, n);
                        if (this.dictCakes.hasOwnProperty(o)) {
                            var s = this.dictCakes[o].getComponent("linkItem");
                            s && s.getEffect() && (this.delayClearItem(t, o, s.getEffect()),
                                t++)
                        }
                    }
                this.cntTrigger = t,
                    this.allTriggerOverCb = e,
                    this.cntTrigger <= 0 && this.allTriggerOverCb && this.allTriggerOverCb()
            },
            finishTargetsBatch: function () {
                for (var e in this.clearCake)
                    a.finishTarget(e, this.clearCake[e]),
                        s.dispatchEvent("updateTargets", e);
                s.dispatchEvent("updateStep")
            },
            showLinkFinishEffect: function (e) {
                var t = this;
                r.createEffect("fight/frame/frame", function (n, i) {
                    if (n)
                        e && e(n);
                    else {
                        var a = i.getComponent(cc.Animation);
                        a.play("frame"),
                            a.once("finished", function () {
                                i.destroy(),
                                    e && e(null)
                            }, t)
                    }
                }, this.nodeLinkOverEffect)
            },
            checkIsBlocked: function () {
                for (var e = 0; e < i.LINK_ROWS_COUNT; e++)
                    for (var t = 0; t < i.LINK_COLS_COUNT; t++) {
                        var n = this.getIndexByPos(t, e);
                        if (this.dictCakes.hasOwnProperty(n)) {
                            var a = this.dictCakes[n].getComponent("linkItem");
                            if (a && this.checkItemChannelIsClear(n, a.cake))
                                return
                        }
                    }
                this.refreshLinkItems()
            },
            checkItemChannelIsClear: function (e, t, n) {
                for (var a = this.getPosByIndex(e), o = 0, s = a.y - 1; s <= a.y + 1; s++)
                    for (var r = a.x - 1; r <= a.x + 1; r++)
                        if (!(s < 0 || r < 0 || s >= i.LINK_ROWS_COUNT || r >= i.LINK_COLS_COUNT || s === a.y && r === a.x)) {
                            if (n && n.x === r && n.y === s)
                                continue;
                            var c = this.getIndexByPos(r, s);
                            if (this.dictCakes.hasOwnProperty(c)) {
                                var h = this.dictCakes[c].getComponent("linkItem");
                                if (h && h.cake === t) {
                                    if (n)
                                        return !0;
                                    if (this.checkItemChannelIsClear(c, t, a))
                                        return !0;
                                    if (++o >= 2)
                                        return !0
                                }
                            }
                        }
                return !1
            },
            onPropTouchStart: function (e) {
                var t = this.getCakeNodeByTouchPos(e.getLocation());
                t && (t.scale = .9),
                    this.currentPropTouchNode = t
            },
            onPropTouchEnd: function (e) {
                if (!this.currentPropTouchNode)
                    return -1;
                this.currentPropTouchNode.scale = 1;
                var t = this.getCakeNodeByTouchPos(e.getLocation());
                return t === this.currentPropTouchNode ? t.getComponent("linkItem").index : (this.currentPropTouchNode = null,
                    -1)
            },
            onPropTouchCancel: function () {
                return this.currentPropTouchNode && (this.currentPropTouchNode.scale = 1,
                    this.currentPropTouchNode = null),
                    -1
            },
            refreshLinkItems: function () {
                var e = this;
                return !this.isRefreshing && (this.isRefreshing = !0,
                    this.showAllLinkItem(!1, function () {
                        e.initCake(function () {
                            e.isRefreshing = !1
                        })
                    }),
                    !0)
            },
            destoryCake: function (e) {
                if (this.dictCakes.hasOwnProperty(e)) {
                    var t = this.dictCakes[e].getComponent("linkItem");
                    t.showDestory(),
                        delete this.dictCakes[e],
                        this.clearScore = 0,
                        this.clearCake = {},
                        this.clearCake[t.cake] = 1,
                        t.getEffect() ? this.clearItemByEffect(e, t.getEffect(), !1) : this.clearScore = 50,
                        a.addScore(this.clearScore),
                        this.finishTargetsBatch(),
                        o.checkGame(),
                        this.scheduleOnce(this.fillEmptyCell, .3)
                }
            },
            getConnectCake: function (e, t, n) {
                for (var a = this.getPosByIndex(e), o = a.y - 1; o <= a.y + 1; o++)
                    for (var s = a.x - 1; s <= a.x + 1; s++)
                        if (!(o < 0 || s < 0 || o >= i.LINK_ROWS_COUNT || s >= i.LINK_COLS_COUNT || o === a.y && s === a.x)) {
                            if (n && n.x === s && n.y === o)
                                continue;
                            var r = this.getIndexByPos(s, o);
                            if (this.dictCakes.hasOwnProperty(r)) {
                                var c = this.dictCakes[r].getComponent("linkItem");
                                if (c && c.cake === t) {
                                    if (n)
                                        return this.arrConnected.push(r),
                                            !0;
                                    var h = this.arrConnected.length;
                                    if (this.getConnectCake(r, t, a))
                                        return this.arrConnected.splice(h, 0, r),
                                            !0
                                }
                            }
                        }
                return !1
            },
            getConnectCakeByIndex: function (e, t) {
                if (this.arrConnected = [],
                    this.dictCakes.hasOwnProperty(e)) {
                    this.arrConnected.push(e);
                    var n = this.dictCakes[e].getComponent("linkItem");
                    if (n)
                        if (t) {
                            if (-1 !== t.indexOf(n.cake) && (this.getConnectCake(e, n.cake),
                                this.arrConnected.length >= 3))
                                return !0
                        } else if (this.getConnectCake(e, n.cake),
                            this.arrConnected.length >= 3)
                            return !0
                }
                return !1
            },
            findConnectPathForGuide: function (e) {
                var t = null;
                if (e)
                    for (var n in t = [],
                        a.dictTargets)
                        a.dictTargets[n] && t.push(n);
                for (var o = i.LINK_ROWS_COUNT * i.LINK_COLS_COUNT, s = o / 2 + i.LINK_COLS_COUNT / 2, r = s - 1, c = s, h = !1; !h && (c < o || r >= 0);) {
                    if (this.arrConnected = [],
                        c < o && this.getConnectCakeByIndex(c, t))
                        return !0;
                    if (r > 0 && (h = this.getConnectCakeByIndex(r, t)))
                        return !0;
                    c++,
                        r--
                }
                return !1
            },
            showGuideLine: function (e) {
                this.arrLinks = [];
                for (var t = 0; t <= e; t++) {
                    var n = this.dictCakes[this.arrConnected[t]];
                    n && this.arrLinks.push(n)
                }
                this.drawLine()
            },
            showGuideHand: function () {
                var e = this;
                this.isShowHandGuide = !0;
                var t = this.findConnectPathForGuide(!0);
                if (t || (t = this.findConnectPathForGuide(!1)),
                    t) {
                    for (var n = [], i = 0; i < this.arrConnected.length; i++)
                        n.push(this.getScreenPosByIndex(this.arrConnected[i])),
                            this.dictCakes[this.arrConnected[i]].getComponent("linkItem").showSelect(!0);
                    this.nodeHand ? (this.nodeHand.active = !0,
                        this.nodeHand.getComponent("fightHandGuide").showGuide(n, function (t) {
                            e.showGuideLine(t)
                        })) : r.loadRes("prefabs/fight/fightHandGuide", cc.Prefab, function (t, i) {
                            var a = cc.instantiate(i);
                            a.parent = e.node,
                                e.nodeHand = a,
                                e.nodeHand.getComponent("fightHandGuide").showGuide(n, function (t) {
                                    e.showGuideLine(t)
                                })
                        })
                }
            },
            stopGuideHand: function () {
                if (this.isShowHandGuide = !1,
                    this.lastOperationTime = 0,
                    this.arrConnected && this.dictCakes)
                    for (var e = 0; e < this.arrConnected.length; e++) {
                        var t = this.dictCakes[this.arrConnected[e]];
                        t && t.getComponent("linkItem").showSelect(!1)
                    }
                this.nodeHand && (this.nodeHand.destroy(),
                    this.nodeHand = null),
                    this.arrLinks = [],
                    this.drawLine()
            },
            update: function (e) {
                this._fightScene.isLevelOver || !this._fightScene.isLevelStart || this.isShowHandGuide || this.currentNode || this._fightScene.isShowOperationUI || (this.lastOperationTime += e,
                    this.lastOperationTime > 5 && (this.showGuideHand(),
                        this.lastOperationTime = 0))
            }
        }),
            cc._RF.pop()
    }
        , {
        clientEvent: "clientEvent",
        constants: "constants",
        gameLogic: "gameLogic",
        playerData: "playerData",
        poolManager: "poolManager",
        resourceUtil: "resourceUtil"
    }],
    linkItem: [function (e, t) {
        "use strict";
        cc._RF.push(t, "000eahOFsJC4YWx/wV0fJqQ", "linkItem");
        var n = e("resourceUtil")
            , i = e("poolManager")
            , a = e("constants")
            , o = cc.Enum({
                SHOW: "linkItemShow",
                HIDE: "linkItemHide",
                SELECT: "linkItemSelect",
                SHAKE: "linkItemShake",
                SKILL: "linkItemSkill"
            });
        cc.Class({
            extends: cc.Component,
            properties: {
                spCake: cc.Sprite,
                aniCake: cc.Animation
            },
            start: function () { },
            show: function (e, t, i, o) {
                this.index = e,
                    this.cake = t,
                    this.linkParent = o,
                    this.isSpecial = !1,
                    this.specialType = null,
                    this.effectType = null,
                    this.node.zIndex = a.ZORDER.LINK_ITEM_NORMAL,
                    this.spCake.node.scale = 0,
                    n.setCakeIcon(this.cake, this.spCake, function () { }),
                    i && this.playShowAction(0)
            },
            playShowAction: function (e) {
                var t = this;
                this.node.stopActionByTag(1e4);
                var n = cc.sequence(cc.delayTime(e), cc.callFunc(function () {
                    t.aniCake.play(o.SHOW),
                        t.currentStatus = o.SHOW
                }, this));
                n.setTag(1e4),
                    this.node.runAction(n)
            },
            playHideAction: function (e, t) {
                var n = this;
                this.node.stopActionByTag(1e4);
                var a = cc.sequence(cc.delayTime(e), cc.callFunc(function () {
                    n.aniCake.play(o.HIDE),
                        n.currentStatus = o.HIDE,
                        t && n.linkParent._fightScene.effectGroup.showLinkItemDestroyEffect(n.node.convertToWorldSpaceAR(cc.v2(0, 0)), n.getScore()),
                        n.aniCake.once("finished", function () {
                            i.putNode(n.node),
                                n.effectNode && (n.effectNode.destroy(),
                                    n.effectNode = null),
                                n.specialEffect && (i.putNode(n.specialEffect),
                                    n.specialEffect = null)
                        }, n)
                }, this));
                a.setTag(1e4),
                    this.node.runAction(a)
            },
            getScore: function () {
                var e = 0;
                if (this.isSpecial && (this.specialType === a.SPECIAL_EFFECT.HORIZONTAL || this.specialType === a.SPECIAL_EFFECT.VERTICAL ? e += 1e3 : this.specialType === a.SPECIAL_EFFECT.PLUS ? e += 2e3 : this.specialType === a.SPECIAL_EFFECT.CENTER && (e += 3e3),
                    !this.effectType))
                    return e;
                if (this.effectType)
                    switch (this.effectType) {
                        case a.SPECIAL_EFFECT.HORIZONTAL:
                        case a.SPECIAL_EFFECT.VERTICAL:
                            return e + 500;
                        case a.SPECIAL_EFFECT.PLUS:
                            return e + 1e3;
                        case a.SPECIAL_EFFECT.CENTER:
                            return e + 1500
                    }
                return 50
            },
            showSelect: function (e) {
                var t = this.cake;
                e ? (this.aniCake.play(o.SELECT),
                    this.currentStatus = o.SELECT,
                    t = this.cake + "Light") : this.effectType ? (this.aniCake.play(o.SKILL),
                        this.currentStatus = o.SKILL) : (this.aniCake.setCurrentTime(0),
                            this.aniCake.stop()),
                    n.setCakeIcon(t, this.spCake, function () { })
            },
            showDestory: function () {
                this.playHideAction(0, !0)
            },
            playMove2Index: function (e) {
                var t = this
                    , n = this.linkParent.getScreenPosByIndex(e)
                    , i = n.sub(this.node.position).mag();
                this.node.stopActionByTag(10001);
                var a = cc.moveTo(i / 1e3, n).easing(cc.easeIn(3))
                    , s = cc.sequence(a, cc.callFunc(function () {
                        t.aniCake.play(o.SHAKE)
                    }, this));
                s.setTag(10001),
                    this.node.runAction(s)
            },
            showSpecial: function (e) {
                var t = this;
                this.isSpecial = e,
                    e ? n.getEffectPrefab("fight/linkStar/linkStar", function (e, n) {
                        e || t.isSpecial && (t.specialEffect = i.getNode(n, t.node),
                            t.specialEffect.position = cc.v2(0, 0),
                            t.specialEffect.getComponent(cc.Animation).play("linkStarShow"))
                    }) : this.specialEffect && (i.putNode(this.specialEffect),
                        this.specialEffect = null)
            },
            setSpecialType: function (e) {
                this.specialType = e
            },
            markEffect: function (e) {
                this.effectType = e
            },
            showEffect: function (e) {
                var t = this;
                this.effectNode && this.effectNode.destroy(),
                    this.node.zIndex = a.ZORDER.LINK_ITEM_SKILL,
                    this.effectType = e,
                    this.aniCake.play(o.SKILL),
                    this.currentStatus = o.SKILL;
                var i = 0
                    , s = "fight/effectSkillTips/skillTipsLine";
                switch (e) {
                    case a.SPECIAL_EFFECT.HORIZONTAL:
                        break;
                    case a.SPECIAL_EFFECT.VERTICAL:
                        i = 90;
                        break;
                    case a.SPECIAL_EFFECT.PLUS:
                        s = "fight/effectSkillTips/skillTipsPlus";
                        break;
                    case a.SPECIAL_EFFECT.CENTER:
                        s = "fight/effectSkillTips/skillTipsRange"
                }
                n.createEffect(s, function (e, n) {
                    e || (t.effectNode = n,
                        t.effectNode.rotation = i)
                }, this.node)
            },
            getEffect: function () {
                return this.effectType
            }
        }),
            cc._RF.pop()
    }
        , {
        constants: "constants",
        poolManager: "poolManager",
        resourceUtil: "resourceUtil"
    }],
    linkLine: [function (e, t) {
        "use strict";
        cc._RF.push(t, "23fc7Zdwd5LN4VPatBdx7mq", "linkLine"),
            cc.Class({
                extends: cc.Component,
                properties: {
                    animation: cc.Animation
                },
                start: function () { },
                show: function () {
                    var e = this;
                    this.animation.play("linkLineShow"),
                        this.animation.once("finished", function () {
                            e.animation.play("linkLineNormal")
                        })
                },
                setLinePosition: function (e, t) {
                    var n = t.sub(e)
                        , i = cc.v2(e.x + n.x / 2, e.y + n.y / 2);
                    this.node.position = i;
                    var a;
                    a = 0 !== n.x ? cc.misc.radiansToDegrees(Math.atan(n.y / n.x)) : 90,
                        this.node.rotation = -a
                }
            }),
            cc._RF.pop()
    }
        , {}],
    loadingUI: [function (e, t) {
        "use strict";
        cc._RF.push(t, "f33bfL32OJOUqxJ3VWLer3l", "loadingUI");
        var n = e("constants")
            , i = (e("LanguageData"),
                e("localConfig"));
        cc.Class({
            extends: cc.Component,
            properties: {
                progressBar: {
                    default: null,
                    type: cc.ProgressBar
                },
                percentLabel: {
                    default: null,
                    type: cc.Label
                },
                versionLabel: {
                    default: null,
                    type: cc.Label
                },
                tipsNode: {
                    default: null,
                    type: cc.Node
                },
                spriteArr: {
                    default: [],
                    type: cc.SpriteFrame
                }
            },
            onLoad: function () {
                this.updateTimer = 0,
                    this.updateInterval = .01,
                    this.totalLength = this.progressBar.totalLength,
                    this.lengthInterval = 30,
                    this.versionLabel.string = "Ver:" + i.getVersion()
            },
            onEnable: function () {
                var e = Math.floor(3 * Math.random());
                e = e >= 3 ? 2 : e,
                    this.tipsNode.getComponent("cc.Sprite").spriteFrame = this.spriteArr[e]
            },
            startLoading: function (e, t, n) {
                cc.game.addPersistRootNode(this.node),
                    this.node.active = !0,
                    this.type = e,
                    this.callback = n,
                    this.tasks = t,
                    this.currentMaxLength = 0,
                    this.currentLength = 0,
                    this.progressBar.progress = 0,
                    this.percentLabel.string = "0%",
                    this.taskIndex = 0,
                    this.running = !0,
                    this.nextTask([])
            },
            nextTask: function (e) {
                if (this.tasks) {
                    if (this.taskIndex === this.tasks.length)
                        return this.currentMaxLength = this.totalLength,
                            void (this.type === n.SCENE_MANAGER_TYPE.LOAD && (this.currentLength = this.currentMaxLength,
                                this.setProgress()));
                    this.type === n.SCENE_MANAGER_TYPE.LOAD && (this.currentLength = this.currentMaxLength,
                        this.setProgress());
                    var t = this;
                    e.push(function (e, n) {
                        if (e)
                            return t.callback.apply(null, [e].concat(n));
                        t.nextTask(Array.prototype.slice.call(arguments).slice(1))
                    });
                    var i = this.tasks[this.taskIndex++];
                    this.currentMaxLength = this.totalLength / (this.tasks.length + 1) * this.taskIndex,
                        i.apply(null, e)
                }
            },
            update: function (e) {
                this.updateTimer += e,
                    this.updateTimer < this.updateInterval || this.running && (this.updateTimer = 0,
                        this.currentLength += this.lengthInterval,
                        this.currentLength = this.currentLength > this.currentMaxLength ? this.currentMaxLength : this.currentLength,
                        this.setProgress())
            },
            setProgress: function () {
                var e = this.currentLength / this.totalLength;
                e = e > 1 ? 1 : e,
                    this.percentLabel.string = parseInt(100 * e) + "%",
                    this.progressBar.progress = e,
                    1 === e && (this.running = !1,
                        this.callback.apply(null, [null].concat(null)))
            }
        }),
            cc._RF.pop()
    }
        , {
        LanguageData: "LanguageData",
        constants: "constants",
        localConfig: "localConfig"
    }],
    loading: [function (e, t) {
        "use strict";
        cc._RF.push(t, "7c72f8OVs9Jgr00M87vUcnZ", "loading"),
            e("resourceUtil"),
            cc.Class({
                extends: cc.Component,
                properties: {
                    txtTips: cc.Label,
                    aniLoading: cc.Animation
                },
                start: function () { },
                show: function (e) {
                    this.txtTips.string = e || ""
                },
                onEnable: function () {
                    this.aniLoading.play()
                },
                onDisable: function () {
                    this.aniLoading.stop()
                }
            }),
            cc._RF.pop()
    }
        , {
        resourceUtil: "resourceUtil"
    }],
    localConfig: [function (e, t) {
        (function (n) {
            "use strict";
            cc._RF.push(t, "dd4b0SiNtlCwYx3SFjMfxLz", "localConfig");
            var i = null
                , a = null;
            "undefined" != typeof cc ? (i = e("configManager"),
                e("constants"),
                e("utils"),
                e("formula"),
                a = e("resourceUtil"),
                e("LanguageData"),
                e("configuration")) : (i = e("./configManager"),
                    e("./constants"),
                    e("./utils"),
                    e("./formula"));
            var o = {
                _callback: null,
                loadConfig: function (e) {
                    this._callback = e,
                        this.loadCSV()
                },
                loadCSV: function () {
                    this._skills = {},
                        this.currentLoad = 0;
                    var t = this;
                    if ("undefined" != typeof cc) {
                        var o = ["level", "signIn", "lottery", "prop", "task", "gift"];
                        this.cntLoad = o.length + 1,
                            o.forEach(function (e) {
                                a.getData(e, function (n, a) {
                                    i.addTable(e, a),
                                        t.tryToCallbackOnFinished()
                                })
                            }),
                            a.getJsonData("servers", function (e, n) {
                                t.servers = n,
                                    t.tryToCallbackOnFinished()
                            })
                    } else {
                        var s = e("fs")
                            , r = e("path");
                        i.init();
                        var c = n + "/../datas";
                        c = r.normalize(c);
                        for (var h = [], l = [], u = s.readdirSync(c), d = 0; d < u.length; d++) {
                            var p = u[d];
                            if (-1 !== p.indexOf(".csv") && -1 === p.indexOf(".csv.meta")) {
                                var f = p.split(".")[0]
                                    , g = c + "/" + p;
                                s.lstatSync(g).isDirectory() || (l.push(f),
                                    h.push(g))
                            }
                        }
                        for (var m = {}, v = function (e, t) {
                            var n = (new Date).getTime();
                            if (!(m[t] && n - m[t] < 1e3)) {
                                m[t] = n;
                                var a = s.readFileSync(t);
                                a.length <= 0 || i.addTable(e, a.toString(), !0)
                            }
                        }, S = function (e, t) {
                            s.watch(t, function (n) {
                                "change" === n && setTimeout(function () {
                                    v(e, t)
                                }, 100)
                            })
                        }, I = 0; I < l.length; I++)
                            v(l[I], h[I]),
                                S(l[I], h[I]);
                        this._skills = [],
                            this._env = [],
                            this._dirtyWords = [];
                        for (var C = ["skills.zy8", "env.zy8", "dirtyWords.zy8"], T = function (e, t) {
                            switch (e) {
                                case 0:
                                    this._skills = t;
                                    break;
                                case 1:
                                    this._env = t;
                                    break;
                                case 2:
                                    this._dirtyWords = t
                            }
                        }
                            .bind(this), E = function (e, t) {
                                if ("change" === e) {
                                    for (var n = -1, i = 0; i < C.length; i++)
                                        if (t === C[i]) {
                                            n = i;
                                            break
                                        }
                                    if (-1 !== n) {
                                        var a = c + "/" + t;
                                        setTimeout(function () {
                                            var e = s.readFileSync(a);
                                            e = JSON.parse(e),
                                                T(n, e),
                                                console.info("reload config: " + a)
                                        }
                                            .bind(this, a), 100)
                                    }
                                }
                            }, y = 0; y < C.length; y++) {
                            var R = c + "/" + C[y];
                            if (s.existsSync(R)) {
                                var L = s.readFileSync(R);
                                L = JSON.parse(L),
                                    T(y, L),
                                    s.watch(R, E)
                            }
                        }
                        this._callback && this._callback()
                    }
                },
                queryOne: function (e, t, n) {
                    return i.queryOne(e, t, n)
                },
                queryByID: function (e, t) {
                    return i.queryByID(e, t)
                },
                getTable: function (e) {
                    return i.getTable(e)
                },
                queryAll: function (e, t, n) {
                    return i.queryAll(e, t, n)
                },
                queryIn: function (e, t, n) {
                    return i.queryIn(e, t, n)
                },
                queryByCondition: function (e, t) {
                    return i.queryByCondition(e, t)
                },
                tryToCallbackOnFinished: function () {
                    this._callback && (this.currentLoad++,
                        this.currentLoad >= this.cntLoad && this._callback())
                },
                getEnvModule: function (e) {
                    return this._env[e]
                },
                getEnv: function (e, t) {
                    var n = this.getEnvModule(e);
                    return n ? n[t].value : null
                },
                getServerList: function () {
                    return this.servers
                },
                getCurrentServer: function () {
                    return null === this.servers && this.getServerList(),
                        this.servers ? this.servers[0] : null
                },
                getVersion: function () {
                    var e = this.getCurrentServer();
                    return e ? e.version : "unknown"
                },
                getDailyTaskByType: function (e) {
                    var t = this.getTable("dailyTask")
                        , n = [];
                    for (var i in t)
                        if (t.hasOwnProperty(i)) {
                            var a = t[i];
                            a.taskId = i,
                                a.type === e && n.push(a)
                        }
                    return n
                },
                getBuffByType: function (e) {
                    var t = this.getTable("buff");
                    for (var n in t)
                        if (t.hasOwnProperty(n)) {
                            var i = t[n];
                            if (i.buffId = n,
                                i.type === e)
                                return i
                        }
                    return null
                }
            }
                , s = Object.create(o);
            "undefined" == typeof cc && s.loadConfig(),
                t.exports = s,
                cc._RF.pop()
        }
        ).call(this, "/library\\imports\\dd")
    }
        , {
        "./configManager": "configManager",
        "./constants": "constants",
        "./formula": "formula",
        "./utils": "utils",
        LanguageData: "LanguageData",
        configManager: "configManager",
        configuration: "configuration",
        constants: "constants",
        formula: "formula",
        fs: void 0,
        path: 1,
        resourceUtil: "resourceUtil",
        utils: "utils"
    }],
    loginScene: [function (e, t) {
        "use strict";
        cc._RF.push(t, "78951xH1B5FbIWkKgRGXo5v", "loginScene");
        var n = e("configuration")
            , i = e("uiManager")
            , a = e("LanguageData")
            , o = e("playerData")
            , s = e("resourceUtil")
            , r = e("clientEvent")
            , c = e("../../frameworks/Platform");
        cc.Class({
            extends: cc.Component,
            properties: {
                ndGameStartBtn: cc.Node,
                ndVisitorLoginBtn: cc.Node
            },
            onLoad: function () { },
            start: function () {
                this.onBtnVisitorLoginClick()
            },
            reqDataSyncLogin: function () {
                this.userLogin()
            },
            getCreateDate: function () {
                var e = new Date(o.playerInfo.createDate)
                    , t = e.getMonth() + 1;
                t = t < 10 ? "0" + t : t + "";
                var n = e.getDate();
                return n = n < 10 ? "0" + n : n + "",
                    e.getFullYear() + "-" + t + "-" + n
            },
            userLogin: function (e) {
                o.saveAccount(this.uid),
                    o.loadFromCache(),
                    (!o.playerInfo || Object.keys(o.playerInfo).length <= 0) && o.createPlayerInfo(e),
                    this.showLoadingUI()
            },
            loadCommonRes: function () {
                s.getUIPrefabRes("common/tips", function () { }),
                    s.getUIPrefabRes("common/loading", function () { })
            },
            showLoadingUI: function () {
                var e = this
                    , t = cc.find("loading").getComponent("sceneManager");
                this.currentStep = 0;
                var n = function () {
                    t.discontinue();
                    var n = a.t("login/timeout");
                    i.showMessageBox("Error", n, function () {
                        e.reqDataSyncLogin()
                    }, null)
                };
                this.scheduleOnce(n, 30),
                    this.loadCommonRes(),
                    t.load([function (t) {
                        e.currentStep = 1,
                            e.loadSubPackage(t)
                    }
                        , function (t) {
                            e.currentStep = 2,
                                e.loadGameSubPackage(t)
                        }
                        , function (t) {
                            e.currentStep = 3,
                                e.unschedule(n),
                                e.enterMainScene(t)
                        }
                    ], function (e) {
                        e && cc.error(e.message || e)
                    })
            },
            loadSubPackage: function (e) {
                e()
            },
            loadGameSubPackage: function (e) {
                e()
            },
            enterMainScene: function (e) {
                var t = this
                    , n = o.isNewBee ? "fight" : "pve";
                cc.director.preloadScene(n, function () {
                    t.currentStep = 4,
                        e(),
                        cc.director.loadScene(n, function () {
                            t.currentStep = 5,
                                r.dispatchEvent("onSceneChanged"),
                                cc.gameSpace.gameLogic.afterLogin(),
                                c.closeLoadingModal(),
                                c.showTitleAd()
                        })
                })
            },
            onBtnVisitorLoginClick: function () {
                var e = this;
                c.login(function (t) {
                    var n = t.openId;
                    e.uid = n,
                        e.reqDataSyncLogin()
                })
            },
            saveOldData: function () {
                var e = n.getUserId();
                if (e) {
                    for (var t = 0; t < e.length; t++) {
                        var i = e[t];
                        if (isNaN(Number(i)))
                            return
                    }
                    o.loadFromCache(),
                        o.saveAccount(this.uid),
                        o.saveAll()
                }
            }
        }),
            cc._RF.pop()
    }
        , {
        "../../frameworks/Platform": "Platform",
        LanguageData: "LanguageData",
        clientEvent: "clientEvent",
        configuration: "configuration",
        playerData: "playerData",
        resourceUtil: "resourceUtil",
        uiManager: "uiManager"
    }],
    lotteryItem: [function (e, t) {
        "use strict";
        cc._RF.push(t, "f1db2PMDSdEoolhZOaw5gvA", "lotteryItem");
        var n = e("constants")
            , i = (e("localConfig"),
                e("utils"))
            , a = (e("clientEvent"),
                e("resourceUtil"))
            , o = e("uiManager");
        e("gameLogic"),
            cc.Class({
                extends: cc.Component,
                properties: {
                    spSelect: cc.Sprite,
                    lbValue: cc.Label,
                    spIcon: cc.Sprite,
                    sfGold: cc.SpriteFrame,
                    sfDiamond: cc.SpriteFrame,
                    colorNormal: new cc.Color,
                    colorSelect: new cc.Color,
                    ndPropAddIcon: cc.Node
                },
                start: function () { },
                setInfo: function (e) {
                    switch (this.info = e,
                    this.rewardType = e.type,
                    this.rewardType) {
                        case n.REWARD_TYPE.DIAMOND:
                            this.rewardValue = e.amount,
                                this.spIcon.spriteFrame = this.sfDiamond,
                                this.ndPropAddIcon.active = !1,
                                this.lbValue.string = this.rewardValue,
                                this.spIcon.node.width = 88.8,
                                this.spIcon.node.height = 50.4;
                            break;
                        case n.REWARD_TYPE.GOLD:
                            this.rewardValue = e.amount,
                                this.spIcon.spriteFrame = this.sfGold,
                                this.lbValue.string = i.formatMoney(this.rewardValue),
                                this.ndPropAddIcon.active = !1,
                                this.spIcon.node.width = 93,
                                this.spIcon.node.height = 92;
                            break;
                        case n.REWARD_TYPE.PROP:
                            this.rewardValue = e.amount,
                                this.lbValue.string = this.rewardValue,
                                this.propId = "00" + e.subType,
                                this.spIcon.spriteFrame = a.setPropIcon(this.propId, this.spIcon, function () { }),
                                this.ndPropAddIcon.active = !0,
                                this.spIcon.node.width = 77,
                                this.spIcon.node.height = 77
                    }
                },
                setSelect: function (e) {
                    this.spSelect.enabled = e,
                        this.lbValue.node.color = e ? this.colorSelect : this.colorNormal,
                        e && this.setReceivedUI()
                },
                setReceivedUI: function () {
                    var e = {};
                    e.itemType = this.info.type,
                        e.itemSubType = this.info.subType,
                        e.itemAmount = this.info.amount,
                        o.pushToPopupSeq("lottery/reward", "reward", [e, !0, n.SHARE_FUNCTION.LOTTERY_REWARD])
                }
            }),
            cc._RF.pop()
    }
        , {
        clientEvent: "clientEvent",
        constants: "constants",
        gameLogic: "gameLogic",
        localConfig: "localConfig",
        resourceUtil: "resourceUtil",
        uiManager: "uiManager",
        utils: "utils"
    }],
    lottery: [function (e, t) {
        "use strict";
        cc._RF.push(t, "da336DqBNdPOLmRdGzIoRW8", "lottery");
        var n = e("utils")
            , i = e("localConfig")
            , a = e("uiManager")
            , o = e("playerData")
            , s = e("LanguageData")
            , r = e("clientEvent")
            , c = e("constants")
            , h = e("resourceUtil");
        cc.Class({
            extends: cc.Component,
            properties: {
                arrRewardNode: [cc.Node],
                aniLightGroup: cc.Animation,
                pfRewardItem: cc.Prefab,
                lbSpareTimes: cc.Label,
                lbAdSpareTimes: cc.Label,
                lbShareSpareTimes: cc.Label,
                lbGold: cc.Label,
                ndBtnStart: cc.Node,
                ndBtnAd: cc.Node,
                ndBtnShare: cc.Node,
                ndTurnable: cc.Node
            },
            ctor: function () {
                this.dictReward = {},
                    this.arrRewardData = []
            },
            start: function () { },
            show: function () {
                this.initReward(),
                    this.initInfo(),
                    this.updateGold()
            },
            onEnable: function () {
                r.on("updateGold", this.updateGold, this)
            },
            onDisable: function () {
                r.off("updateGold", this.updateGold, this)
            },
            initReward: function () {
                var e = this;
                if (this.arrRewardData.length <= 0) {
                    var t = i.getTable("lottery");
                    this.arrRewardData = n.objectToArray(t)
                }
                this.arrProbability = [];
                var a = 0;
                this.arrRewardData.forEach(function (t, n) {
                    var i = e.arrRewardNode[n]
                        , o = e.dictReward[n];
                    if (e.dictReward.hasOwnProperty(n) || ((o = cc.instantiate(e.pfRewardItem)).parent = i,
                        e.dictReward[n] = o),
                        e.arrRewardData.length > n) {
                        var s = e.arrRewardData[n];
                        o.getComponent("lotteryItem").setInfo(s);
                        var r = a
                            , c = a + s.probability;
                        e.arrProbability.push({
                            min: r,
                            max: c,
                            idx: n
                        }),
                            a = c
                    }
                })
            },
            initInfo: function () {
                this.times = o.getLotterySpareTimes(!1),
                    this.moreTimes = o.getLotterySpareTimes(!0),
                    this.lbSpareTimes.string = this.times + "/" + c.LOTTERY_MAX_TIMES,
                    this.lbAdSpareTimes.string = this.moreTimes + "/" + c.LOTTERY_AD_MAX_TIMES,
                    this.lbShareSpareTimes.string = this.moreTimes + "/" + c.LOTTERY_AD_MAX_TIMES,
                    this.checkBtnStatus()
            },
            checkBtnStatus: function () {
                this.times <= 0 ? (this.showBtnShareOrAd(),
                    this.moreTimes <= 0 && (this.ndBtnAd.getComponent("buttonEx").interactable = !1,
                        this.ndBtnShare.getComponent("buttonEx").interactable = !1,
                        this.lbAdSpareTimes.node.active = !1,
                        this.lbShareSpareTimes.node.active = !1,
                        h.setGray(this.ndBtnAd, !0),
                        h.setGray(this.ndBtnShare, !0))) : (this.ndBtnStart.active = !0,
                            this.ndBtnStart.getComponent("buttonEx").interactable = !0)
            },
            updateGold: function () {
                this.lbGold.string = n.formatMoney(o.getGold())
            },
            onBtnStartClick: function () {
                this.showSelectUI(this.ndBtnStart, this.lbSpareTimes, !1)
            },
            showSelectUI: function (e, t, n) {
                for (var i in this.isBtnStartShow = !0,
                    e.getComponent("buttonEx").interactable = !1,
                    this.dictReward)
                    this.dictReward[i].getComponent("lotteryItem").setSelect(!1);
                o.addLotteryTimes(n),
                    n ? (this.moreTimes = o.getLotterySpareTimes(n),
                        t.string = this.moreTimes + "/" + c.LOTTERY_AD_MAX_TIMES) : (this.times = o.getLotterySpareTimes(n),
                            t.string = this.times + "/" + c.LOTTERY_MAX_TIMES),
                    r.dispatchEvent("updateLotterySpareTimes"),
                    this.randValue = this.getRandValue(),
                    this.aniLightGroup.play(),
                    this.startRun()
            },
            startRun: function () {
                this.ndTurnable.rotation = this.ndTurnable.rotation % 360;
                var e = 360 - this.ndTurnable.rotation
                    , t = 3 + Math.floor(4 * Math.random())
                    , n = cc.rotateTo(e / 360 + .5 * t, 360 + 360 * t + 36 * this.randValue).easing(cc.easeCircleActionOut())
                    , i = cc.sequence(n, cc.callFunc(function () {
                        this.showReward()
                    }, this));
                this.ndTurnable.runAction(i)
            },
            getRandValue: function () {
                for (var e = -1, t = Math.floor(100 * Math.random()), n = 0; n < this.arrProbability.length; n++) {
                    var i = this.arrProbability[n];
                    if (t >= i.min && t < i.max) {
                        e = i.idx;
                        break
                    }
                }
                return -1 !== e ? e : this.getRandValue()
            },
            showReward: function () {
                this.aniLightGroup.stop(),
                    this.itemNode = this.dictReward[this.randValue],
                    this.itemNode.getComponent("lotteryItem").setSelect(!0),
                    this.isBtnStartShow && (this.checkBtnStatus(),
                        this.isBtnStartShow = !1)
            },
            onBtnAddDiamondClick: function () {
                a.showTips(s.t("lottery.noChargePleaseWait"))
            },
            onBtnAdClick: function () {
                var e = this;
                cc.gameSpace.gameLogic.showRewardAd(function (t) {
                    t || e.showSelectUI(e.ndBtnAd, e.lbAdSpareTimes, !0)
                })
            },
            onBtnShareClick: function () {
                var e = this;
                cc.gameSpace.gameLogic.share(c.SHARE_FUNCTION.LOTTERY, {}, function (t) {
                    t || e.showSelectUI(e.ndBtnShare, e.lbShareSpareTimes, !0)
                })
            },
            showBtnShareOrAd: function () {
                var e = this;
                cc.gameSpace.gameLogic.getOpenRewardType(c.SHARE_FUNCTION.LOTTERY, function (t, n) {
                    if (!t)
                        switch (n) {
                            case c.OPEN_REWARD_TYPE.AD:
                                e.ndBtnStart.active = !1,
                                    e.ndBtnShare.active = !1,
                                    e.ndBtnAd.active = !0,
                                    e.ndBtnAd.getComponent("buttonEx").interactable = !0;
                                break;
                            case c.OPEN_REWARD_TYPE.SHARE:
                                e.ndBtnStart.active = !1,
                                    e.ndBtnAd.active = !1,
                                    e.ndBtnShare.active = !0,
                                    e.ndBtnShare.getComponent("buttonEx").interactable = !0;
                                break;
                            case c.OPEN_REWARD_TYPE.NULL:
                                e.ndBtnStart.active = !0,
                                    e.ndBtnStart.getComponent("buttonEx").interactable = !1,
                                    h.setGray(e.ndBtnStart, !0),
                                    e.ndBtnAd.active = !1,
                                    e.ndBtnShare.active = !1
                        }
                })
            },
            onBtnCloseClick: function () {
                a.hideSharedDialog("lottery/lottery")
            }
        }),
            cc._RF.pop()
    }
        , {
        LanguageData: "LanguageData",
        clientEvent: "clientEvent",
        constants: "constants",
        localConfig: "localConfig",
        playerData: "playerData",
        resourceUtil: "resourceUtil",
        uiManager: "uiManager",
        utils: "utils"
    }],
    main: [function (e, t) {
        "use strict";
        cc._RF.push(t, "6b387AcadlMp55LFiP9IztP", "main");
        var n = e("./frameworks/Platform")
            , i = e("clientEvent")
            , a = e("LanguageData")
            , o = e("uiManager")
            , s = e("audioManager")
            , r = e("localConfig")
            , c = e("gameLogic")
            , h = e("constants");
        cc.gameSpace = {},
            cc.gameSpace.TIME_SCALE = 1,
            cc.gameSpace.isStop = !1,
            cc.gameSpace.SDK = "open",
            a.init(n.getLang()),
            cc.Class({
                extends: cc.Component,
                properties: {},
                onLoad: function () {
                    var e = 0
                        , t = setInterval(function () {
                            e < .8 ? n.reportProgress(e += .1) : clearInterval(t)
                        }, 80)
                },
                start: function () {
                    cc.debug.setDisplayStats(!1);
                    var e = cc.winSize;
                    e.width > e.height && (cc.find("Canvas").getComponent(cc.Canvas).fitHeight = !0),
                        cc.gameSpace.isIphoneX = cc.game.canvas.height / cc.game.canvas.width > 2,
                        cc.gameSpace.gameLogic = c,
                        cc.gameSpace.audioManager = s,
                        cc.gameSpace.uiManager = o,
                        cc.gameSpace.showTips = o.showTips.bind(o),
                        cc.gameSpace.showLoading = o.showLoading.bind(o),
                        cc.gameSpace.hideLoading = o.hideLoading.bind(o),
                        cc.gameSpace.clientEvent = i,
                        cc.gameSpace.isInitFinished = !1,
                        cc.gameSpace.isConfigLoadFinished = !1,
                        cc.gameSpace.audioManager.playMusic(h.AUDIO_MUSIC.BACKGROUND, !0),
                        r.loadConfig(function () {
                            cc.gameSpace.isConfigLoadFinished = !0
                        })
                }
            }),
            cc._RF.pop()
    }
        , {
        "./frameworks/Platform": "Platform",
        LanguageData: "LanguageData",
        audioManager: "audioManager",
        clientEvent: "clientEvent",
        constants: "constants",
        gameLogic: "gameLogic",
        localConfig: "localConfig",
        uiManager: "uiManager"
    }],
    messageBox: [function (e, t) {
        "use strict";
        cc._RF.push(t, "96b1e8L36VKD744Ij/lrQSV", "messageBox"),
            cc.Class({
                extends: cc.Component,
                properties: {
                    lbContent: cc.Label
                },
                start: function () { },
                show: function (e, t, n) {
                    this.lbContent.string = e,
                        this.confirmCallback = t,
                        this.cancelCallback = n
                },
                onBtnConfirmClick: function () {
                    this.confirmCallback && this.confirmCallback(),
                        this.close()
                },
                onBtnCloseClick: function () {
                    this.cancelCallback && this.cancelCallback(),
                        this.close()
                },
                close: function () {
                    cc.gameSpace.uiManager.hideSharedDialog("common/messageBox")
                }
            }),
            cc._RF.pop()
    }
        , {}],
    multiScrollView: [function (e, t) {
        "use strict";
        cc._RF.push(t, "3e6b57QbUBJ9rTvcQwwnAgL", "multiScrollView");
        var n = e("localConfig")
            , i = e("utils")
            , a = e("playerData");
        cc.Class({
            extends: cc.Component,
            properties: {
                scrollView: {
                    default: null,
                    type: cc.ScrollView
                },
                pve1Prefab: {
                    default: null,
                    type: cc.Prefab
                },
                pve2Prefab: {
                    default: null,
                    type: cc.Prefab
                }
            },
            onLoad: function () {
                this.updateTimer = 0,
                    this.updateInterval = .2,
                    this.lastPositionY = 0,
                    this.pool = new cc.NodePool,
                    this.pool1 = new cc.NodePool,
                    this.pool2 = new cc.NodePool,
                    this.contentNode = this.scrollView.content,
                    this.pve1Node = cc.instantiate(this.pve1Prefab),
                    this.contentNode.addChild(this.pve1Node, 999)
            },
            start: function () {
                this.show()
            },
            onEnable: function () {
                this.contentNode.on("size-changed", this.sizeChange, this)
            },
            onDisable: function () {
                this.contentNode.off("size-changed", this.sizeChange, this)
            },
            init: function (e) {
                this.parent = e
            },
            show: function () {
                this.isChange = !0,
                    this.isNeedScroll = !0,
                    this.positions = [];
                var e, t = i.objectToArray(n.getTable("level")), o = t.slice(0, 1);
                this.pve1Node.setPosition(0, -100);
                var s = this.contentNode.getContentSize();
                this.contentNode.setContentSize(cc.size(s.width, this.pve1Node.height + -100)),
                    this.pve1Node.getComponent("pveSlotUI").show(this, o, -1),
                    this.arrayPrefab = _.chunk(_.drop(t, 1), 22);
                for (var r = this.arrayPrefab.length, c = 0; c < r; c++)
                    e = (s = this.contentNode.getContentSize()).height,
                        this.positions.push(cc.v2(0, e)),
                        this.contentNode.setContentSize(cc.size(s.width, e + this.pve2Prefab.data.height));
                s = this.contentNode.getContentSize(),
                    this.contentNode.setContentSize(cc.size(s.width, s.height - this.pve2Prefab.data.height / 3)),
                    this.addNode();
                var h = a.getCurrentLevel()
                    , l = _.findIndex(t, function (e) {
                        return e.ID === h.ID
                    })
                    , u = l / 22;
                this.currentPosition = u >= 0 ? this.positions[Math.floor(u)] : cc.v2(0, 0),
                    this.currentPosition = cc.v2(this.currentPosition.x, this.currentPosition.y);
                var d = l % 22 + 1;
                this.currentPosition.y = this.currentPosition.y + this.pve2Prefab.data.getChildByName("level" + d).y,
                    this.currentPosition.y -= cc.winSize.height / 2,
                    this.scrollToNode()
            },
            update: function (e) {
                this.scrolling(),
                    this.updateTimer += e,
                    this.updateTimer < this.updateInterval || (this.updateTimer = 0,
                        this.addNode())
            },
            addNode: function () {
                for (var e, t = 0; t < this.arrayPrefab.length; t++)
                    e = this.pve2Prefab.data.height,
                        this.updateNode(t, e, this.contentNode, this.pool, this.positions, this.pve2Prefab, this.arrayPrefab);
                this.isChange = !1
            },
            updateNode: function (e, t, n, i, a, o, s) {
                var r, c = this.getPositionInView(n, a[e]);
                if (this.isOverBorder(c, t))
                    (r = n.getChildByName(String(e))) && this.remove(r, n, i);
                else if (r = n.getChildByName(String(e))) {
                    if (this.isChange) {
                        var h = r.getComponent("pveSlotUI");
                        h && h.show(this, s[e], e),
                            r.setPosition(a[e]),
                            r.tag = e
                    }
                } else
                    this.create(r, e, n, i, a, o, s)
            },
            create: function (e, t, n, i, a, o, s) {
                (e = i.size() > 0 ? i.get() : cc.instantiate(o)).setPosition(a[t]),
                    n.addChild(e, a.length - t, String(t));
                var r = e.getComponent("pveSlotUI");
                r && r.show(this, s[t], t)
            },
            remove: function (e, t, n) {
                n.put(e),
                    t.removeChild(e, !1)
            },
            getPositionInView: function (e, t) {
                var n = e.convertToWorldSpaceAR(t);
                return this.scrollView.node.convertToNodeSpaceAR(n)
            },
            isOverBorder: function (e, t) {
                var n = this.scrollView.node.height
                    , i = n + n / 2 + t / 2;
                return e.y > i || e.y < -i
            },
            onDestory: function () {
                this.pool.clear(),
                    this.pool1.clear(),
                    this.pool2.clear()
            },
            sizeChange: function () {
                var e = this.contentNode.getContentSize();
                this.node.setContentSize(e)
            },
            scrollToNode: function () {
                this.isNeedScroll && this.scrollView.scrollTo(cc.v2(0, this.currentPosition.y / (this.scrollView.content.height - cc.winSize.height)), .1)
            },
            scrolling: function () {
                var e = this.contentNode.getPosition();
                this.lastPositionY = e.y
            },
            createCloud: function () {
                this.positionCloud1 = [],
                    this.positionCloud2 = [];
                var e, t = cc.find("Canvas").height, n = this.contentNode.getContentSize().height, i = Math.ceil(n / t);
                for (e = 0; e < i; e++)
                    this.positionCloud1.push(this.randomPosition());
                for (e = 0; e < i; e++)
                    this.positionCloud2.push(this.randomPosition())
            },
            randomPosition: function () {
                var e = cc.find("Canvas").height
                    , t = this.scrollView.getMaxScrollOffset().y
                    , n = i.getRandomInt(300, 400)
                    , a = i.getRandomInt(e / 2, t);
                return i.getRandomInt(0, 1) ? cc.v2(n, a) : cc.v2(-n, a)
            },
            getCloudPrefabMaxHeight: function () {
                var e = 0;
                return _.forEach(this.cloudPrefab, function (t) {
                    e < t.data.height && (e = t.data.height)
                }),
                    e
            }
        }),
            cc._RF.pop()
    }
        , {
        localConfig: "localConfig",
        playerData: "playerData",
        utils: "utils"
    }],
    offLineReward: [function (e, t) {
        "use strict";
        cc._RF.push(t, "7bf14l0xJZIx6dTAV7YPTWD", "offLineReward");
        var n = e("constants")
            , i = e("LanguageData")
            , a = e("uiManager")
            , o = e("localConfig")
            , s = (e("playerData"),
                e("resourceUtil"))
            , r = (e("clientEvent"),
                e("../../frameworks/Platform"));
        cc.Class({
            extends: cc.Component,
            properties: {
                sfDiamond: cc.SpriteFrame,
                sfGold: cc.SpriteFrame,
                spIcon: cc.Sprite,
                lbRewardValue: cc.Label,
                aniGetItem: cc.Animation,
                ndThreeReceive: cc.Node,
                ndNormalReceive: cc.Node
            },
            start: function () { },
            show: function (e) {
                var t = this;
                this.itemInfo = e,
                    this.itemType = e.itemType,
                    this.itemAmount = e.itemAmount,
                    this.itemSubType = e.itemSubType,
                    this.aniGetItem.play("getItemShow"),
                    this.aniGetItem.once("finished", function () {
                        t.aniGetItem.play("getItemIdle")
                    }, this),
                    this.showUI(),
                    this.ndNormalReceive.active = !1,
                    this.scheduleOnce(function () {
                        t.ndNormalReceive.active = !0,
                            t.ndNormalReceive.getComponent(cc.RichText).string = "<u><color=#ffffff>" + i.t("onlineReward.receive") + "</color></u>"
                    }, n.NORMAL_SHOW_TIME)
            },
            showUI: function () {
                var e = this;
                switch (this.itemType) {
                    case n.REWARD_TYPE.DIAMOND:
                        this.spIcon.spriteFrame = this.sfDiamond,
                            this.lbRewardValue.string = "x" + this.itemAmount;
                        break;
                    case n.REWARD_TYPE.GOLD:
                        this.spIcon.spriteFrame = this.sfGold,
                            this.lbRewardValue.string = "x" + this.itemAmount,
                            this.spIcon.node.width = 257,
                            this.spIcon.node.height = 166;
                        break;
                    case n.REWARD_TYPE.PROP:
                        var t = "00" + this.itemSubType
                            , a = o.queryByID("prop", t - "");
                        this.spIcon.node.width = 168,
                            this.spIcon.node.height = 168,
                            s.setPropIcon(t, this.spIcon, function () { });
                        var r = i.t("table_prop." + a.name);
                        this.lbRewardValue.string = r + i.t("") + " x " + this.itemAmount
                }
                cc.gameSpace.gameLogic.getOpenRewardType(n.SHARE_FUNCTION.OFFLINE, function (t, i) {
                    e.rewardType = i,
                        t ? e.close() : e.ndThreeReceive.active = i !== n.OPEN_REWARD_TYPE.NULL
                })
            },
            showAd: function () {
                var e = this;
                r.showRewardAd({
                    onReward: function () {
                        e.showReward()
                    }
                })
            },
            showShare: function () {
                var e = this;
                cc.gameSpace.gameLogic.share(n.SHARE_FUNCTION.OFFLINE, {}, function (t) {
                    t || e.showReward()
                })
            },
            onBtnThreeReceiveClick: function () {
                this.rewardType === n.OPEN_REWARD_TYPE.AD ? this.showAd() : this.rewardType === n.OPEN_REWARD_TYPE.SHARE && this.showShare()
            },
            showReward: function () {
                a.insertToPopupSeq(1, "lottery/reward", "reward", [{
                    itemType: n.REWARD_TYPE.GOLD,
                    itemAmount: 3 * this.itemAmount,
                    itemSubType: 0
                }, !1, n.SHARE_FUNCTION.OFFLINE]),
                    this.close()
            },
            onBtnNormalClick: function () {
                cc.gameSpace.gameLogic.addGold(this.itemAmount),
                    this.close()
            },
            close: function () {
                a.shiftFromPopupSeq("pve/offLineReward")
            }
        }),
            cc._RF.pop()
    }
        , {
        "../../frameworks/Platform": "Platform",
        LanguageData: "LanguageData",
        clientEvent: "clientEvent",
        constants: "constants",
        localConfig: "localConfig",
        playerData: "playerData",
        resourceUtil: "resourceUtil",
        uiManager: "uiManager"
    }],
    onlineReward: [function (e, t) {
        "use strict";
        cc._RF.push(t, "f6263VSRTFBzIruWaj84Ky6", "onlineReward");
        var n = e("localConfig")
            , i = e("playerData")
            , a = e("constants")
            , o = e("utils")
            , s = (e("gameLogic"),
                e("uiManager"))
            , r = e("LanguageData")
            , c = e("../../frameworks/Platform");
        cc.Class({
            extends: cc.Component,
            properties: {
                ndTimer: cc.Node,
                lbTime: cc.Label,
                aniFreeReward: cc.Animation,
                btnReceive: cc.Button
            },
            start: function () {
                this.checkOnlineReward()
            },
            checkOnlineReward: function () {
                switch (i.getOnlineRewardInfo().value.receiveStatus) {
                    case a.REWARD_STATUS.UNRECEIVABLE:
                        this.btnReceive.node && (this.btnReceive.node.active = !1),
                            this.aniFreeReward.play("freeGiftIdle"),
                            this.schedule(this.countDownCallback, .5);
                        break;
                    case a.REWARD_STATUS.RECEIVABLE:
                        this.btnReceive.node && (this.btnReceive.node.active = !0),
                            this.aniFreeReward.play("freeGiftActivation"),
                            this.lbTime.string = r.t("onlineReward.receive"),
                            this.unschedule(this.countDownCallback)
                }
            },
            onBtnReceiveClick: function () {
                var e = this;
                "undefined" != typeof minigame ? c.showSlotAd({
                    onPlay: function () { },
                    onError: function () { },
                    onFinish: function () {
                        e.onBtnReceiveClickRun()
                    }
                }) : this.onBtnReceiveClickRun()
            },
            onBtnReceiveClickRun: function () {
                var e = this
                    , t = n.getTable("prop");
                if (!t)
                    return !1;
                var i = Object.keys(t).filter(function (e) {
                    return Number(e) !== a.PROP_ID.INFINITE
                })
                    , o = i[Math.floor(Math.random() * i.length)] - "";
                cc.gameSpace.gameLogic.getOpenRewardType(a.SHARE_FUNCTION.ONLINE, function (t, n) {
                    if (!t)
                        switch (n) {
                            case a.OPEN_REWARD_TYPE.AD:
                                cc.gameSpace.gameLogic.showRewardAd(function (t) {
                                    t || e.showReward(o)
                                });
                                break;
                            case a.OPEN_REWARD_TYPE.SHARE:
                                cc.gameSpace.gameLogic.share(a.SHARE_FUNCTION.ONLINE, {}, function (t) {
                                    t || e.showReward(o)
                                });
                                break;
                            case a.OPEN_REWARD_TYPE.NULL:
                                e.showReward(o)
                        }
                })
            },
            countDownCallback: function () {
                var e = Date.now();
                if (this.oldTime || (this.oldTime = e),
                    e - this.oldTime > 1e3) {
                    var t = i.getOnlineRewardInfo().usedTime
                        , n = 6e4 * i.getCountdownTime() - 1e3 * t;
                    n <= 0 ? (this.unschedule(this.countDownCallback),
                        i.updateOnlineRewardInfo(!1),
                        this.checkOnlineReward(),
                        this.lbTime.string = r.t("onlineReward.receive")) : (this.lbTime.string = o.formatTimeForMillisecond(n),
                            this.oldTime = e)
                }
            },
            showReward: function (e) {
                var t = {};
                t.itemType = a.REWARD_TYPE.PROP,
                    t.itemSubType = e,
                    t.itemAmount = 1,
                    s.pushToPopupSeq("lottery/reward", "reward", [t, !1, a.SHARE_FUNCTION.ONLINE]),
                    i.updateOnlineRewardInfo(!0),
                    this.checkOnlineReward()
            }
        }),
            cc._RF.pop()
    }
        , {
        "../../frameworks/Platform": "Platform",
        LanguageData: "LanguageData",
        constants: "constants",
        gameLogic: "gameLogic",
        localConfig: "localConfig",
        playerData: "playerData",
        uiManager: "uiManager",
        utils: "utils"
    }],
    playerData: [function (e, t) {
        "use strict";
        cc._RF.push(t, "14eachCr31GCLxc9ewBLwgW", "playerData");
        var n = e("configuration")
            , i = e("localConfig")
            , a = e("constants")
            , o = e("utils")
            , s = e("uiManager")
            , r = e("clientEvent")
            , c = e("LanguageData")
            , h = new (cc.Class({
                start: function () {
                    this.userId = null,
                        this.account = null,
                        this.password = null,
                        this.level = 1,
                        this.isNewBee = !1,
                        this.loadGlobalCache()
                },
                loadGlobalCache: function () {
                    var e = n.getGlobalData(a.LOCAL_CACHE.ACCOUNT);
                    e && (this.account = e)
                },
                loadFromCache: function () {
                    this.playerInfo = this.loadDataByKey(a.LOCAL_CACHE.PLAYER),
                        this.history = this.loadDataByKey(a.LOCAL_CACHE.HISTORY),
                        this.bag = this.loadDataByKey(a.LOCAL_CACHE.BAG),
                        this.settings = this.loadDataByKey(a.LOCAL_CACHE.SETTINGS)
                },
                loadDataByKey: function (e) {
                    var t = {}
                        , i = n.getConfigData(e);
                    if (i)
                        try {
                            t = JSON.parse(i)
                        } catch (a) {
                            t = {}
                        }
                    return t
                },
                saveAccount: function (e) {
                    this.account = e,
                        this.userId = e,
                        n.setUserId(e),
                        n.setGlobalData(a.LOCAL_CACHE.ACCOUNT, e)
                },
                createPlayerInfo: function (e) {
                    if (this.playerInfo = {},
                        this.playerInfo.diamond = 0,
                        this.playerInfo.gold = 0,
                        this.playerInfo.item = 0,
                        this.playerInfo.createDate = new Date,
                        this.playerInfo.hasSeenGuide = !1,
                        this.playerInfo.unLockInfo = [],
                        this.isNewBee = !0,
                        e)
                        for (var t in e)
                            this.playerInfo[t] = e[t];
                    this.savePlayerInfoToLocalCache()
                },
                savePlayerInfoToLocalCache: function () {
                    this.addDataVersion(),
                        n.setConfigData(a.LOCAL_CACHE.PLAYER, JSON.stringify(this.playerInfo))
                },
                addDataVersion: function () {
                    var e = (new Date).toLocaleDateString()
                        , t = !1;
                    if (this.dataVersion && "string" == typeof this.dataVersion) {
                        var i = this.dataVersion.split("@");
                        i.length >= 2 && i[0] === e && (this.dataVersion = e + "@" + (Number(i[1]) + 1),
                            t = !0)
                    }
                    t || (this.dataVersion = e + "@1"),
                        n.setConfigDataWithoutSave(a.LOCAL_CACHE.DATA_VERSION, this.dataVersion)
                },
                saveAll: function () {
                    n.setConfigDataWithoutSave(a.LOCAL_CACHE.PLAYER, JSON.stringify(this.playerInfo)),
                        n.setConfigDataWithoutSave(a.LOCAL_CACHE.HISTORY, JSON.stringify(this.history)),
                        n.setConfigDataWithoutSave(a.LOCAL_CACHE.SETTINGS, JSON.stringify(this.settings)),
                        n.setConfigDataWithoutSave(a.LOCAL_CACHE.BAG, JSON.stringify(this.bag)),
                        n.setConfigData(a.LOCAL_CACHE.DATA_VERSION, this.dataVersion)
                },
                updatePlayerInfo: function (e, t) {
                    var i = !1;
                    this.playerInfo.hasOwnProperty(e) && ("number" == typeof t ? (i = !0,
                        this.playerInfo[e] += t,
                        this.playerInfo[e] < 0 && (this.playerInfo[e] = 0)) : "boolean" != typeof t && "string" != typeof t || (i = !0,
                            this.playerInfo[e] = t)),
                        i && n.setConfigData(a.LOCAL_CACHE.PLAYER, JSON.stringify(this.playerInfo))
                },
                nextLevel: function () {
                    this.level++,
                        this.startNewLevel()
                },
                getCurrentLevelInfo: function () {
                    var e = i.queryByID("level", this.level);
                    return e && (e.level = this.level),
                        e
                },
                getNextLevelInfo: function () {
                    return i.queryByID("level", this.level + 1)
                },
                startNewLevel: function () {
                    var e = this.getCurrentLevelInfo();
                    this.score = 0,
                        this.spareStep = 0,
                        this.curLevelInfo = {},
                        this.curLevelInfo.startTime = Date.now(),
                        this.curLevelInfo.infinite = !1,
                        e && (this.spareStep = e.limit),
                        this.dictTargets = {};
                    for (var t = e.targets.split("|"), n = 0; n < t.length; n++) {
                        var i = t[n].split("-");
                        this.dictTargets[i[0]] = Number(i[1])
                    }
                    this.arrStars = e.stars.split("|")
                },
                getTargetValue: function (e) {
                    return this.dictTargets.hasOwnProperty(e) ? this.dictTargets[e] : 0
                },
                finishLink: function (e, t) {
                    this.reduceStep(),
                        this.finishTarget(e, t)
                },
                finishTarget: function (e, t) {
                    this.dictTargets.hasOwnProperty(e) && (this.dictTargets[e] -= t,
                        this.dictTargets[e] < 0 && (this.dictTargets[e] = 0))
                },
                reduceStep: function () {
                    this.curLevelInfo.infinite || (this.spareStep--,
                        this.spareStep < 0 && (this.spareStep = 0))
                },
                addStep: function (e) {
                    this.spareStep += e
                },
                isLevelFinish: function () {
                    var e = !0;
                    for (var t in this.dictTargets)
                        if (this.dictTargets.hasOwnProperty(t) && this.dictTargets[t] > 0) {
                            e = !1;
                            break
                        }
                    return e
                },
                isGameOver: function () {
                    return this.spareStep <= 0
                },
                addScore: function (e) {
                    this.score += e
                },
                finishLevel: function (e, t) {
                    var o = 0
                        , s = i.queryByID("level", e)
                        , c = (Date.now() - this.curLevelInfo.startTime) / 1e3;
                    if (s) {
                        var h = s.stars.split("|");
                        t >= h[2] ? o = 3 : t >= h[1] ? o = 2 : t >= h[0] && (o = 1)
                    }
                    var l = 0;
                    this.history.hasOwnProperty(e) ? (l = this.history[e].star,
                        this.history[e].score < t && (this.history[e].score = t,
                            this.history[e].star = o,
                            this.history[e].costTime = c)) : this.history[e] = {
                                levelId: e,
                                score: t,
                                star: o,
                                costTime: c
                            },
                        n.setConfigData(a.LOCAL_CACHE.HISTORY, JSON.stringify(this.history));
                    for (var u = s.golds.split("|"), d = 0, p = l; p < o; p++)
                        d += Number(u[p]);
                    return d > 0 && (this.addGold(d),
                        r.dispatchEvent("updateGold")),
                    {
                        levelId: e,
                        score: t,
                        star: o,
                        gold: d,
                        costTime: c,
                        spareStep: this.spareStep
                    }
                },
                getHighestScoreByLevel: function (e) {
                    return this.history.hasOwnProperty(e) ? this.history[e].score : 0
                },
                hasSeenGuide: function () {
                    return this.playerInfo.hasSeenGuide
                },
                finishSeenGuide: function () {
                    this.playerInfo.hasSeenGuide = !0,
                        this.updatePlayerInfo("hasSeenGuide", !0)
                },
                updateUnLockInfo: function (e) {
                    var t = this.playerInfo.unLockInfo;
                    t.includes(e) || (t.push(e),
                        this.savePlayerInfoToLocalCache())
                },
                getUnLockInfo: function () {
                    if (!this.playerInfo.hasOwnProperty("unLockInfo")) {
                        var e = this.getCurrentLevel().ID
                            , t = a.UNLOCK_PROP_ID
                            , n = e - 1;
                        this.playerInfo.unLockInfo = t.slice(0, n),
                            this.savePlayerInfoToLocalCache()
                    }
                    return this.playerInfo.unLockInfo
                },
                isPropUnlock: function (e) {
                    var t = this.getCurrentLevel().ID;
                    return this.playerInfo.hasOwnProperty("unLockInfo") || this.getUnLockInfo(),
                        t > 1 && this.playerInfo.unLockInfo.includes(e)
                },
                isNeedOpenUnlockPanel: function () {
                    var e = this.getCurrentLevelInfo().ID;
                    if (e > 1 && e <= a.UNLOCK_HIGEST_LEVEl) {
                        var t = a.UNLOCK_PROP_ID[e - 2];
                        if (this.playerInfo.hasOwnProperty("unLockInfo") || this.getUnLockInfo(),
                            !this.isPropUnlock(t))
                            return !0
                    }
                    return !1
                },
                updateSignInCurrentDay: function () {
                    if (!this.playerInfo.signInInfo || this.isNeedRecycleSignInInfo())
                        this.createNewSignInInfo();
                    else {
                        var e = o.getDeltaDays(this.playerInfo.signInInfo.signInDate, Date.now());
                        if (0 === e)
                            return;
                        this.updateSignInFillSignInDays(0, !0),
                            this.playerInfo.signInInfo.currentDay += e,
                            this.playerInfo.signInInfo.currentDay <= 0 && this.createNewSignInInfo(),
                            this.playerInfo.signInInfo.currentDay > a.MAX_SIGN_IN_REWARDS_DAY ? a.MAX_SIGN_IN_REWARDS_DAY : this.playerInfo.signInInfo.currentDay,
                            this.playerInfo.signInInfo.signInDate = Date.now()
                    }
                    this.savePlayerInfoToLocalCache()
                },
                createNewSignInInfo: function () {
                    this.playerInfo.signInInfo || (this.playerInfo.signInInfo = {}),
                        this.playerInfo.signInInfo.createDate = Date.now(),
                        this.playerInfo.signInInfo.signInDate = Date.now(),
                        this.playerInfo.signInInfo.currentDay = 1,
                        this.playerInfo.signInInfo.receivedDays = [],
                        this.playerInfo.signInInfo.afterFillSignInDays = [],
                        this.savePlayerInfoToLocalCache()
                },
                isNeedRecycleSignInInfo: function () {
                    this.playerInfo.signInInfo || this.createNewSignInInfo();
                    var e = !1;
                    return o.getDeltaDays(this.playerInfo.signInInfo.createDate, Date.now()) >= a.MAX_SIGN_IN_REWARDS_DAY && (e = !0),
                        e
                },
                updateSignInReceivedDays: function (e) {
                    var t = this.playerInfo.signInInfo.receivedDays;
                    Array.isArray(t) && t.includes(e) || (t.push(Number(e)),
                        this.savePlayerInfoToLocalCache())
                },
                updateSignInFillSignInDays: function (e, t) {
                    var n = this.playerInfo.signInInfo.afterFillSignInDays;
                    if (t)
                        n.length = 0;
                    else {
                        if (Array.isArray(n) && n.includes(e))
                            return;
                        n.push(Number(e))
                    }
                    this.savePlayerInfoToLocalCache()
                },
                getSignInReceivedInfo: function () {
                    this.playerInfo.signInInfo || this.createNewSignInInfo();
                    var e = this.playerInfo.signInInfo;
                    return {
                        isAllReceived: !(e.receivedDays.length < e.currentDay),
                        isTodayReceived: !!e.receivedDays.includes(e.currentDay)
                    }
                },
                convertSignInDataFormat: function (e) {
                    var t = e.value.split("#")
                        , n = t[1].split("|");
                    n.splice(n.length - 1, 1),
                        this.playerInfo.signInInfo.createDate = e.signInDate - 864e5 * Number(t[0] - 1),
                        this.playerInfo.signInInfo.signInDate = e.signInDate,
                        this.playerInfo.signInInfo.currentDay = Number(t[0]),
                        this.playerInfo.signInInfo.receivedDays = n.map(Number),
                        this.playerInfo.signInInfo.afterFillSignInDays = [],
                        delete e.value,
                        this.savePlayerInfoToLocalCache()
                },
                openGift: function (e) {
                    var t = this;
                    this.parseGift(e).forEach(function (e) {
                        switch (e.type) {
                            case a.REWARD_TYPE.DIAMOND:
                                t.addDiamond(e.amount),
                                    r.dispatchEvent("addDiamond");
                                break;
                            case a.REWARD_TYPE.GOLD:
                                t.addGold(e.amount),
                                    r.dispatchEvent("updateGold");
                                break;
                            case a.REWARD_TYPE.PROP:
                                t.addProp(e.subType, e.amount),
                                    r.dispatchEvent("updateProp")
                        }
                    })
                },
                parseGift: function (e) {
                    var t = i.queryByID("gift", e);
                    if (!t)
                        return null;
                    var n = t.type.split("|").map(Number)
                        , a = t.subType.split("|").map(Number)
                        , o = t.amount.split("|").map(Number)
                        , s = [];
                    return n.forEach(function (e, t) {
                        s.push({
                            type: e,
                            subType: a[t],
                            amount: o[t]
                        })
                    }),
                        s
                },
                getCurrentLevel: function () {
                    var e = o.objectToArray(this.history)
                        , t = e.length;
                    if (0 === t)
                        return i.queryOne("level", "name", "1");
                    e.sort(function (e, t) {
                        return Number(e.levelId) - Number(t.levelId)
                    });
                    var n = e[t - 1]
                        , a = i.queryByID("level", parseInt(n.levelId))
                        , s = i.queryOne("level", "name", String(parseInt(a.name) + 1));
                    return s && 0 !== n.star ? s : a
                },
                setSetting: function (e, t) {
                    this.settings || (this.settings = {}),
                        this.settings[e] = t,
                        this.saveSettingsToLocalCache()
                },
                getSetting: function (e) {
                    return this.settings && this.settings.hasOwnProperty(e) ? this.settings[e] : null
                },
                saveSettingsToLocalCache: function () {
                    this.addDataVersion(),
                        n.setConfigData(a.LOCAL_CACHE.SETTINGS, JSON.stringify(this.settings))
                },
                getLotterySpareTimes: function (e) {
                    var t = a.LOTTERY_MAX_TIMES;
                    e && (t = a.LOTTERY_AD_MAX_TIMES);
                    var n = o.getDay()
                        , i = this.getSetting(a.SETTINGS_KEY.LOTTERY);
                    if (i || (i = {}),
                        !i.today || i.today !== n)
                        return (i = {}).today = {},
                            this.setSetting(a.SETTINGS_KEY.LOTTERY, i),
                            t;
                    var s = i.times;
                    e && (s = i.moreTimes),
                        s || (s = 0);
                    var r = t - s;
                    return r > 0 ? r : 0
                },
                addLotteryTimes: function (e, t) {
                    t || (t = 1);
                    var n = o.getDay()
                        , i = this.getSetting(a.SETTINGS_KEY.LOTTERY);
                    i || (i = {}),
                        i.today && i.today === n || ((i = {}).today = n),
                        e ? i.moreTimes ? i.moreTimes += t : i.moreTimes = t : i.times ? i.times += t : i.times = t,
                        this.setSetting(a.SETTINGS_KEY.LOTTERY, i)
                },
                getGold: function () {
                    return this.playerInfo.hasOwnProperty("gold") ? this.playerInfo.gold : 0
                },
                getDiamond: function () {
                    return this.playerInfo.hasOwnProperty("diamond") ? this.playerInfo.diamond : 0
                },
                addGold: function (e) {
                    this.updatePlayerInfo("gold", Number(e))
                },
                addDiamond: function (e) {
                    this.updatePlayerInfo("diamond", e)
                },
                getPropAmount: function (e) {
                    return this.bag.hasOwnProperty(e) && this.bag[e].amount || 0
                },
                buyProp: function (e, t) {
                    var n = i.queryByID("prop", e);
                    if (!n)
                        return !1;
                    t || (t = n.countPerBuy);
                    var a = n.price * t;
                    return !(this.playerInfo.gold < a || (this.addGold(-a),
                        r.dispatchEvent("updateGold"),
                        this.addProp(e, t),
                        r.dispatchEvent("updateProp"),
                        0))
                },
                addProp: function (e, t) {
                    if (this.bag.hasOwnProperty(e))
                        this.bag[e].amount += t;
                    else {
                        var i = {
                            amount: t
                        };
                        this.bag[e] = i
                    }
                    return this.addDataVersion(),
                        n.setConfigData(a.LOCAL_CACHE.BAG, JSON.stringify(this.bag)),
                        !0
                },
                costProp: function (e) {
                    if (!this.bag.hasOwnProperty(e))
                        return !1;
                    var t = this.bag[e];
                    return !(t <= 0 || (t.amount--,
                        this.addDataVersion(),
                        n.setConfigData(a.LOCAL_CACHE.BAG, JSON.stringify(this.bag)),
                        0))
                },
                createRandTask: function () {
                    var e = this.playerInfo.dictTask ? this.playerInfo.dictTask : []
                        , t = null
                        , n = []
                        , s = i.getTable("task")
                        , r = Object.keys(s);
                    if (0 === Object.keys(e).length)
                        t = r;
                    else {
                        var c = Object.keys(e);
                        t = o.difference(r, c)
                    }
                    for (var h = o.shuffle(t), l = 0; l < a.TASK_MAX_NUM; l++) {
                        var u = {
                            taskId: h[l],
                            taskState: 0,
                            taskFinishCount: 0
                        };
                        n.push(u)
                    }
                    this.playerInfo.dictTask = o.arrayToObject(n, "taskId"),
                        this.playerInfo.taskDate = Date.now(),
                        this.savePlayerInfoToLocalCache()
                },
                checkTaskDate: function () {
                    var e = Date.now();
                    return !this.playerInfo.hasOwnProperty("taskDate") || (this.playerInfo.taskDate ? e - this.playerInfo.taskDate >= 36e5 * a.TASK_RESET_TIME : void 0)
                },
                getTaskStatusById: function (e) {
                    return this.playerInfo && this.playerInfo.hasOwnProperty("taskDate") && this.playerInfo.dictTask[e] || null
                },
                isFinishTaskAndNoReceive: function () {
                    if (!this.playerInfo || !this.playerInfo.dictTask)
                        return !1;
                    for (var e in this.playerInfo.dictTask) {
                        this.playerInfo.dictTask[e];
                        var t = i.queryByID("task", e)
                            , n = this.getTaskStatusById(e);
                        if (n.taskFinishCount >= t.count && n.taskState === a.RECEIVABLE)
                            return !0
                    }
                    return !1
                },
                saveTaskReceivedData: function (e) {
                    if (!this.playerInfo || !this.playerInfo.dictTask)
                        return this.playerInfo = {},
                            this.playerInfo.dictTask = {},
                            !1;
                    this.playerInfo.dictTask[e].taskState = a.TASK_STATE.RECEIVED,
                        this.savePlayerInfoToLocalCache()
                },
                getTaskReward: function (e, t) {
                    var n = this.getTaskStatusById(e)
                        , o = i.queryByID("task", e);
                    switch (o || s.showTips(c.t("task.notExist")),
                    n.taskFinishCount < o.count && s.showTips(c.t("task.fail")),
                    n.taskFinishCount >= o.count && (s.showTips(c.t("task.succeed")),
                        this.saveTaskReceivedData(e),
                        r.dispatchEvent("updateTask", this.playerInfo.dictTask[e])),
                    o.rewardType) {
                        case a.REWARD_TYPE.DIAMOND:
                            this.addDiamond(o.rewardValue),
                                r.dispatchEvent("updateDiamond");
                            break;
                        case a.REWARD_TYPE.GOLD:
                            this.addGold(o.rewardValue),
                                r.dispatchEvent("updateGold")
                    }
                    t && t()
                },
                finishTask: function (e, t) {
                    for (var n in this.playerInfo.dictTask) {
                        var o = i.queryByID("task", n);
                        if (o.type === e) {
                            var s = this.getTaskStatusById(n);
                            if (s.taskFinishCount >= o.count && s.taskState === a.TASK_STATE.RECEIVED)
                                continue;
                            this.playerInfo.dictTask[n].taskFinishCount += t,
                                s.taskFinishCount >= o.count && (this.playerInfo.dictTask[n].taskState = a.TASK_STATE.RECEIVABLE,
                                    r.dispatchEvent("taskFinished")),
                                r.dispatchEvent("updateTask", this.playerInfo.dictTask)
                        }
                    }
                    this.savePlayerInfoToLocalCache()
                },
                getOnlineRewardInfo: function () {
                    return this.playerInfo.hasOwnProperty("onlineRewardInfo") ? o.getDeltaDays(this.playerInfo.onlineRewardInfo.loginTime, Date.now()) > 0 && this.resetOnlineRewardInfo() : this.resetOnlineRewardInfo(),
                        this.playerInfo.onlineRewardInfo
                },
                resetOnlineRewardInfo: function () {
                    this.playerInfo.onlineRewardInfo = {},
                        this.playerInfo.onlineRewardInfo.value = {
                            times: 0,
                            receiveStatus: a.REWARD_STATUS.UNRECEIVABLE
                        },
                        this.playerInfo.onlineRewardInfo.loginTime = Date.now(),
                        this.playerInfo.onlineRewardInfo.usedTime = 0,
                        this.savePlayerInfoToLocalCache()
                },
                updateOnlineRewardInfo: function (e) {
                    if (this.playerInfo.onlineRewardInfo) {
                        var t = this.playerInfo.onlineRewardInfo.value;
                        e ? (t.times += 1,
                            t.receiveStatus = a.REWARD_STATUS.UNRECEIVABLE) : (t.receiveStatus = a.REWARD_STATUS.RECEIVABLE,
                                this.playerInfo.onlineRewardInfo.usedTime = 0),
                            this.savePlayerInfoToLocalCache()
                    }
                },
                getCountdownTime: function () {
                    var e = this.playerInfo.onlineRewardInfo.value.times
                        , t = a.ONLINE_REWARD_INTERVAL
                        , n = t.length - 1;
                    return t[e = e > n ? n : e]
                },
                addUsedTime: function () {
                    this.playerInfo.onlineRewardInfo && (cc.gameSpace.isStop || (this.playerInfo.onlineRewardInfo.usedTime += 1,
                        this.savePlayerInfoToLocalCache()))
                },
                isOpenOffLineReward: function () {
                    var e = Date.now()
                        , t = !1;
                    return this.playerInfo.loginDate ? (t = e - this.playerInfo.loginDate >= 6e4 * a.OFFLINE_REWARD) && (this.playerInfo.loginDate = e) : this.playerInfo.loginDate = Date.now(),
                        this.savePlayerInfoToLocalCache(),
                        t
                },
                getInfiniteTimes: function () {
                    return this.playerInfo.infiniteShareTimes ? this.playerInfo.infiniteShareTimes : 0
                },
                addInfiniteTimes: function (e) {
                    this.playerInfo.infiniteShareTimes ? this.playerInfo.infiniteShareTimes += e : this.playerInfo.infiniteShareTimes = e,
                        r.dispatchEvent("updateInfiniteShareTimes"),
                        this.savePlayerInfoToLocalCache()
                },
                exchangeInfiniteProp: function () {
                    this.playerInfo.infiniteShareTimes >= a.MAX_INFINITE_TIMES ? this.playerInfo.infiniteShareTimes -= a.MAX_INFINITE_TIMES : this.playerInfo.infiniteShareTimes = 0,
                        r.dispatchEvent("updateInfiniteShareTimes"),
                        this.savePlayerInfoToLocalCache()
                },
                resetShopPropInfo: function () {
                    this.playerInfo.shopPropInfo = {};
                    var e = i.getTable("prop");
                    if (!e)
                        return !1;
                    var t = Object.keys(e).filter(function (e) {
                        return Number(e) !== a.PROP_ID.INFINITE
                    })
                        , n = t[Math.floor(Math.random() * t.length)];
                    this.playerInfo.shopPropInfo.createDate = Date.now(),
                        this.playerInfo.shopPropInfo.prop = n,
                        this.playerInfo.shopPropInfo.receiveStatus = a.REWARD_STATUS.UNRECEIVABLE,
                        this.savePlayerInfoToLocalCache()
                },
                updateShopPropInfo: function (e) {
                    this.playerInfo.shopPropInfo && (e ? this.resetShopPropInfo() : this.playerInfo.shopPropInfo.receiveStatus = a.REWARD_STATUS.RECEIVABLE,
                        this.savePlayerInfoToLocalCache())
                },
                isFirstClickMoreGame: function (e) {
                    return e && (this.isFirst = e),
                        this.isFirst
                },
                clear: function () {
                    delete n.jsonData[this.userId],
                        n.save()
                }
            }));
        h.start(),
            t.exports = h,
            cc._RF.pop()
    }
        , {
        LanguageData: "LanguageData",
        clientEvent: "clientEvent",
        configuration: "configuration",
        constants: "constants",
        localConfig: "localConfig",
        uiManager: "uiManager",
        utils: "utils"
    }],
    "polyglot.min": [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "e26fd9yy65A4q3/JkpVnFYg", "polyglot.min"),
            function (e, i) {
                "function" == typeof define && define.amd ? define([], function () {
                    return i(e)
                }) : "object" == typeof n ? t.exports = i(e) : e.Polyglot = i(e)
            }(void 0, function (e) {
                function t(e) {
                    e = e || {},
                        this.phrases = {},
                        this.extend(e.phrases || {}),
                        this.currentLocale = e.locale || "en",
                        this.allowMissing = !!e.allowMissing,
                        this.warn = e.warn || c
                }
                function n(e) {
                    var t, n, i, a = {};
                    for (t in e)
                        if (e.hasOwnProperty(t))
                            for (i in n = e[t])
                                a[n[i]] = t;
                    return a
                }
                function i(e) {
                    return e.replace(/^\s+|\s+$/g, "")
                }
                function a(e, t, n) {
                    var a;
                    return null != n && e ? i((a = e.split(l))[s(t, n)] || a[0]) : e
                }
                function o(e) {
                    var t = n(d);
                    return t[e] || t.en
                }
                function s(e, t) {
                    return u[o(e)](t)
                }
                function r(e, t) {
                    for (var n in t)
                        "_" !== n && t.hasOwnProperty(n) && (e = e.replace(new RegExp("%\\{" + n + "\\}", "g"), t[n]));
                    return e
                }
                function c(t) {
                    e.console && e.console.warn && e.console.warn("WARNING: " + t)
                }
                function h(e) {
                    var t = {};
                    for (var n in e)
                        t[n] = e[n];
                    return t
                }
                t.VERSION = "0.4.3",
                    t.prototype.locale = function (e) {
                        return e && (this.currentLocale = e),
                            this.currentLocale
                    }
                    ,
                    t.prototype.extend = function (e, t) {
                        var n;
                        for (var i in e)
                            e.hasOwnProperty(i) && (n = e[i],
                                t && (i = t + "." + i),
                                "object" == typeof n ? this.extend(n, i) : this.phrases[i] = n)
                    }
                    ,
                    t.prototype.clear = function () {
                        this.phrases = {}
                    }
                    ,
                    t.prototype.replace = function (e) {
                        this.clear(),
                            this.extend(e)
                    }
                    ,
                    t.prototype.t = function (e, t) {
                        var n, i;
                        return "number" == typeof (t = null == t ? {} : t) && (t = {
                            smart_count: t
                        }),
                            "string" == typeof this.phrases[e] ? n = this.phrases[e] : "string" == typeof t._ ? n = t._ : this.allowMissing ? n = e : (this.warn('Missing translation for key: "' + e + '"'),
                                i = e),
                            "string" == typeof n && (t = h(t),
                                i = r(i = a(n, this.currentLocale, t.smart_count), t)),
                            i
                    }
                    ,
                    t.prototype.has = function (e) {
                        return e in this.phrases
                    }
                    ;
                var l = "||||"
                    , u = {
                        chinese: function () {
                            return 0
                        },
                        german: function (e) {
                            return 1 !== e ? 1 : 0
                        },
                        french: function (e) {
                            return e > 1 ? 1 : 0
                        },
                        russian: function (e) {
                            return e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2
                        },
                        czech: function (e) {
                            return 1 === e ? 0 : e >= 2 && e <= 4 ? 1 : 2
                        },
                        polish: function (e) {
                            return 1 === e ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2
                        },
                        icelandic: function (e) {
                            return e % 10 != 1 || e % 100 == 11 ? 1 : 0
                        }
                    }
                    , d = {
                        chinese: ["fa", "id", "ja", "ko", "lo", "ms", "th", "tr", "zh"],
                        german: ["da", "de", "en", "es", "fi", "el", "he", "hu", "it", "nl", "no", "pt", "sv"],
                        french: ["fr", "tl", "pt-br"],
                        russian: ["hr", "ru"],
                        czech: ["cs"],
                        polish: ["pl"],
                        icelandic: ["is"]
                    };
                return t
            }),
            cc._RF.pop()
    }
        , {}],
    poolManager: [function (e, t) {
        "use strict";
        cc._RF.push(t, "0746dzBgM9Bh7n6exAZnNXf", "poolManager");
        var n = new (cc.Class({
            start: function () {
                this.dictPool = {}
            },
            getNode: function (e, t) {
                var n = e.name
                    , i = null;
                if (this.dictPool.hasOwnProperty(n)) {
                    var a = this.dictPool[n];
                    i = a.size() > 0 ? a.get() : cc.instantiate(e)
                } else {
                    var o = new cc.NodePool;
                    this.dictPool[n] = o,
                        i = cc.instantiate(e)
                }
                return i.parent = t,
                    i
            },
            putNode: function (e) {
                var t = e.name
                    , n = null;
                this.dictPool.hasOwnProperty(t) ? n = this.dictPool[t] : (n = new cc.NodePool,
                    this.dictPool[t] = n),
                    n.put(e)
            },
            clearPool: function (e) {
                this.dictPool.hasOwnProperty(e) && this.dictPool[e].clear()
            }
        }));
        n.start(),
            t.exports = n,
            cc._RF.pop()
    }
        , {}],
    propItem: [function (e, t) {
        "use strict";
        cc._RF.push(t, "e7ad36HvgtJMJhvgKYrltrK", "propItem"),
            e("uiManager"),
            e("LanguageData");
        var n = e("playerData")
            , i = e("resourceUtil")
            , a = e("clientEvent")
            , o = e("constants");
        cc.Class({
            extends: cc.Component,
            properties: {
                lbPropNum: cc.Label,
                spPropIcon: cc.Sprite
            },
            start: function () {
                this.updateUnlockProp()
            },
            onEnable: function () {
                a.on("updateProp", this.updateProp, this),
                    a.on("updateUnlockProp", this.updateUnlockProp, this)
            },
            onDisable: function () {
                a.off("updateProp", this.updateProp, this),
                    a.off("updateUnlockProp", this.updateUnlockProp, this)
            },
            setInfo: function (e) {
                this.propInfo = e;
                var t = n.getPropAmount(e.ID);
                t <= 0 && (t = "+"),
                    this.lbPropNum.string = t,
                    i.setPropIcon(e.icon, this.spPropIcon, function () { }),
                    this.propPrice = e.price
            },
            onPropItemClick: function () {
                cc.gameSpace.uiManager.showSharedDialog("props/buy", "buy", [this.propInfo.ID, o.ANALYTICS_TYPE.CHECKPOINT_PROP_BUY_NUM])
            },
            updateProp: function (e) {
                e === this.propInfo.ID && this.setInfo(this.propInfo)
            },
            updateUnlockProp: function () {
                var e = n.isPropUnlock(this.propInfo.ID);
                this.node.getComponent("buttonEx").interactable = e,
                    i.setGray(this.node, !e)
            }
        }),
            cc._RF.pop()
    }
        , {
        LanguageData: "LanguageData",
        clientEvent: "clientEvent",
        constants: "constants",
        playerData: "playerData",
        resourceUtil: "resourceUtil",
        uiManager: "uiManager"
    }],
    pveSlotUI: [function (e, t) {
        "use strict";
        cc._RF.push(t, "61998EPL8lJqYcj54CvjY6+", "pveSlotUI"),
            e("localConfig");
        var n = e("playerData")
            , i = e("constants");
        e("utils"),
            cc.Class({
                extends: cc.Component,
                properties: {
                    levelNodes: {
                        default: [],
                        type: cc.Node
                    },
                    prefabLevel: {
                        default: null,
                        type: cc.Prefab
                    },
                    prefabCloud: {
                        default: null,
                        type: cc.Prefab
                    }
                },
                show: function (e, t, n) {
                    this.index = n,
                        this._parent = e,
                        this.levelArray = t,
                        this.addLevelNodes()
                },
                addLevelNodes: function () {
                    for (var e = n.getCurrentLevel(), t = parseInt(e.name), a = this.levelArray.length, o = 0, s = 0; s < a; s++) {
                        this.levelNodes[s].active = !0;
                        var r = this.levelNodes[s].getComponentInChildren("levelUI");
                        if (!r) {
                            var c = cc.instantiate(this.prefabLevel);
                            c.active = !0,
                                c.setPosition(0, 0),
                                this.levelNodes[s].addChild(c)
                        }
                        var h = this.levelArray[s].name;
                        parseInt(h) < t ? this.levelArray[s].status = i.PVE_LEVEL_STATUS.DONE : parseInt(h) === t ? this.levelArray[s].status = i.PVE_LEVEL_STATUS.DOING : this.levelArray[s].status = i.PVE_LEVEL_STATUS.UNDONE;
                        var l = this.levelArray[s].ID;
                        n.history.hasOwnProperty(l) && (this.levelArray[s].star = n.history[l].star),
                            (r = this.levelNodes[s].getComponentInChildren("levelUI")).init(this.levelArray[s]),
                            o = this.levelNodes[s].y
                    }
                    this.showCloudsUponLevels(o);
                    for (var u = this.levelNodes.length, d = this.levelArray.length; d < u; d++)
                        this.levelNodes[d].removeAllChildren(),
                            this.levelNodes[d].active = !1
                },
                showCloudsUponLevels: function (e) {
                    var t = this.node.getChildByName("cloud");
                    t && this.node.removeChild(t);
                    var n = 0
                        , i = e;
                    this.index < 0 ? n = 0 : (n = this.index,
                        i += 430),
                        i += this.node.height * n;
                    var a = this.node.height + this.node.y
                        , o = this._parent.contentNode.getContentSize().height
                        , s = cc.instantiate(this.prefabCloud);
                    Math.floor(Math.abs(o - i) / s.height) && Math.abs(a - i) > s.height && (s.setPosition(0, e + s.height / 2),
                        s.active = !0,
                        this.node.addChild(s))
                }
            }),
            cc._RF.pop()
    }
        , {
        constants: "constants",
        localConfig: "localConfig",
        playerData: "playerData",
        utils: "utils"
    }],
    pveUI: [function (e, t) {
        "use strict";
        cc._RF.push(t, "61b9axYpi9De7EZBUlEuYVP", "pveUI");
        var n = e("multiScrollView")
            , i = e("uiManager")
            , a = e("constants")
            , o = e("playerData")
            , s = e("clientEvent")
            , r = e("utils")
            , c = e("../../frameworks/Platform");
        cc.Class({
            extends: cc.Component,
            properties: {
                multiScrollView: {
                    default: null,
                    type: n
                },
                settingNode: {
                    default: null,
                    type: cc.Node
                },
                introductionNode: {
                    default: null,
                    type: cc.Node
                },
                ndLotteryBtn: cc.Node,
                ndLotteryTips: cc.Node,
                lbLotterySpareTimes: cc.Label,
                ndRedDot: cc.Node,
                sfBlueDot: cc.SpriteFrame,
                sfRedDot: cc.SpriteFrame,
                lbGold: cc.Label,
                ndShare: cc.Node,
                ndMoreRedDot: cc.Node,
                ndSignRedDot: cc.Node,
                ndShopRedDot: cc.Node,
                rankBtn: cc.Node
            },
            onLoad: function () {
                var e = cc.winSize;
                e.width > e.height && (cc.find("Canvas").getComponent(cc.Canvas).fitHeight = !0),
                    this.ndShare.active = !1,
                    this.ndMoreRedDot.active = !1,
                    "undefined" != typeof tgaGameSDK && (this.rankBtn.active = !0)
            },
            onEnable: function () {
                s.on("updateSignIn", this.checkSignInRedDot, this),
                    s.on("updateLotterySpareTimes", this.updateLotterySpareTimes, this),
                    s.on("taskFinished", this.updateRedDotState, this),
                    s.on("updateGold", this.updateGold, this),
                    s.on("updateShopPropInfo", this.checkShopRedDot, this)
            },
            onDisable: function () {
                s.off("updateSignIn", this.checkSignInRedDot, this),
                    s.off("updateLotterySpareTimes", this.updateLotterySpareTimes, this),
                    s.off("taskFinished", this.updateRedDotState, this),
                    s.off("updateGold", this.updateGold, this),
                    s.off("updateShopPropInfo", this.checkShopRedDot, this)
            },
            start: function () {
                o.playerInfo.isNew ? this.introductionNode.active = !0 : this.introductionNode.active = !1,
                    this.refreshUI(),
                    this.checkSignInRedDot(),
                    o.isFirstClickMoreGame() && (this.ndMoreRedDot.active = Math.random() <= .3),
                    this.checkShopRedDot(),
                    this.updateLotterySpareTimes()
            },
            refreshUI: function () {
                this.updateRedDotState(),
                    this.updateGold()
            },
            onBtnBack: function () { },
            onBtnSettingClick: function () {
                cc.gameSpace.gameLogic.showInterStitialAd(function () {
                    i.showSharedDialog("dialog/setting", "setting")
                })
            },
            onBtnSignClick: function () {
                "undefined" != typeof minigame ? c.showSlotAd({
                    onPlay: function () { },
                    onError: function () { },
                    onFinish: function () {
                        i.showSharedDialog("signIn/signIn", "signIn")
                    }
                }) : i.showSharedDialog("signIn/signIn", "signIn")
            },
            onBtnLotteryClick: function () {
                "undefined" != typeof minigame ? c.showSlotAd({
                    onPlay: function () { },
                    onError: function () { },
                    onFinish: function () {
                        i.showSharedDialog("lottery/lottery", "lottery")
                    }
                }) : i.showSharedDialog("lottery/lottery", "lottery")
            },
            onBtnTaskClick: function () {
                "undefined" != typeof minigame ? c.showSlotAd({
                    onPlay: function () { },
                    onError: function () { },
                    onFinish: function () {
                        i.showSharedDialog("task/task", "task")
                    }
                }) : i.showSharedDialog("task/task", "task")
            },
            onBtnIntrodutionClick: function () {
                this.introductionNode.active = !1,
                    o.updateIsNew()
            },
            onBtnRankingClick: function () {
                c.showRankModal()
            },
            updateLotterySpareTimes: function () {
                var e = this;
                cc.gameSpace.gameLogic.getOpenRewardType(a.SHARE_FUNCTION.LOTTERY, function (t, n) {
                    t || (e.rewardType = n)
                });
                var t = o.getLotterySpareTimes(!1)
                    , n = o.getLotterySpareTimes(!0);
                this.ndLotteryTips.active = t > 0 || n > 0,
                    this.lbLotterySpareTimes.string = t;
                var i = this.ndLotteryBtn.getComponent(cc.Animation);
                t > 0 || n > 0 ? t ? i.play() : this.rewardType !== a.OPEN_REWARD_TYPE.NULL ? (this.lbLotterySpareTimes.string = n,
                    this.ndLotteryTips.getComponent(cc.Sprite).spriteFrame = this.sfBlueDot,
                    i.play()) : (this.ndLotteryTips.active = !1,
                        i.stop(),
                        this.ndLotteryBtn.getChildByName("pveIconLotterya").rotation = 0) : (i.stop(),
                            this.ndLotteryBtn.getChildByName("pveIconLotterya").rotation = 0)
            },
            updateRedDotState: function () {
                this.ndRedDot.active = o.isFinishTaskAndNoReceive()
            },
            updateGold: function () {
                this.lbGold.string = r.formatMoney(o.getGold())
            },
            onBtnShareClick: function () { },
            onBtnShopClick: function () {
                "undefined" != typeof minigame ? c.showSlotAd({
                    onPlay: function () { },
                    onError: function () { },
                    onFinish: function () {
                        cc.gameSpace.uiManager.showSharedDialog("shop/shop", "shop")
                    }
                }) : cc.gameSpace.uiManager.showSharedDialog("shop/shop", "shop")
            },
            checkSignInRedDot: function () {
                var e = this;
                o.updateSignInCurrentDay(),
                    cc.gameSpace.gameLogic.getOpenRewardType(a.SHARE_FUNCTION.FILL_SIGN, function (t, n) {
                        if (!t)
                            switch (n) {
                                case a.OPEN_REWARD_TYPE.AD:
                                case a.OPEN_REWARD_TYPE.SHARE:
                                    e.ndSignRedDot.active = !o.getSignInReceivedInfo().isAllReceived;
                                    break;
                                case a.OPEN_REWARD_TYPE.NULL:
                                    e.ndSignRedDot.active = !o.getSignInReceivedInfo().isTodayReceived
                            }
                    })
            },
            checkShopRedDot: function () {
                o.playerInfo.hasOwnProperty("shopPropInfo") || (o.resetShopPropInfo(),
                    o.updateShopPropInfo(!1)),
                    this.ndShopRedDot.active = o.playerInfo.shopPropInfo.receiveStatus === a.REWARD_STATUS.RECEIVABLE
            },
            onBtnDebugClick: function () {
                if (this.debugIdx || (this.debugIdx = 0),
                    this.debugIdx++,
                    this.debugIdx > 8)
                    cc.gameSpace.uiManager.showSharedDialog("debug/password", "password", []);
                else if (!this.debugTimer) {
                    var e = this;
                    this.debugTimer = setTimeout(function () {
                        e.debugTimer = null,
                            e.debugIdx < 8 && (e.debugIdx = 0)
                    }, 3e3)
                }
            }
        }),
            cc._RF.pop()
    }
        , {
        "../../frameworks/Platform": "Platform",
        clientEvent: "clientEvent",
        constants: "constants",
        multiScrollView: "multiScrollView",
        playerData: "playerData",
        uiManager: "uiManager",
        utils: "utils"
    }],
    resourceUtil: [function (e, t) {
        "use strict";
        cc._RF.push(t, "bfde0XMjYVCmZ2PEpQD47/b", "resourceUtil");
        var n = new (cc.Class({
            onLoad: function () { },
            loadRes: function (e, t, n) {
                cc.loader.loadRes(e, t, function (e, t) {
                    if (e)
                        return cc.error(e.message || e),
                            void n(e, t);
                    n(e, t)
                })
            },
            getUIPrefabRes: function (e, t) {
                this.loadRes("prefabs/ui/" + e, cc.Prefab, t)
            },
            createUI: function (e, t, n) {
                this.getUIPrefabRes(e, function (e, i) {
                    if (!e) {
                        var a = cc.instantiate(i);
                        a.setPosition(cc.v2(0, 0)),
                            n || (n = cc.find("Canvas")),
                            n.addChild(a),
                            t(null, a)
                    }
                })
            },
            createEffect: function (e, t, n) {
                this.loadRes("/gamePackages/effects/" + e, cc.Prefab, function (e, i) {
                    if (e)
                        t("err", null);
                    else {
                        var a = cc.instantiate(i);
                        n || (n = cc.find("Canvas")),
                            n.addChild(a),
                            t(null, a)
                    }
                })
            },
            getEffectPrefab: function (e, t) {
                this.loadRes("gamePackages/effects/" + e, cc.Prefab, t)
            },
            getData: function (e, t) {
                cc.loader.loadRes("datas/" + e, function (e, n) {
                    if (e)
                        cc.error(e.message || e);
                    else {
                        var i = n.text;
                        i ? t(e, i) : cc.loader.load(n.nativeUrl, function (e, n) {
                            t(e, i = n)
                        })
                    }
                })
            },
            getJsonData: function (e, t) {
                cc.loader.loadRes("datas/" + e, function (e, n) {
                    e ? cc.error(e.message || e) : n.json ? t(e, n.json) : t("failed!!!")
                })
            },
            setSpriteFrame: function (e, t, n) {
                this.loadRes(e, cc.SpriteFrame, function (i, a) {
                    if (i)
                        return console.error("set sprite frame failed! err:", e, i),
                            void n(i);
                    t && cc.isValid(t) && (t.spriteFrame = a,
                        n(null))
                })
            },
            getCakeIcon: function (e, t) {
                this.loadRes("gamePackages/textures/icons/cakes/" + e, cc.SpriteFrame, function (e, n) {
                    if (e)
                        return console.error("get cake icon failed! err:", path, e),
                            void t(e);
                    t(null, n)
                })
            },
            setCakeIcon: function (e, t, n) {
                this.setSpriteFrame("gamePackages/textures/icons/cakes/" + e, t, n)
            },
            setPropIcon: function (e, t, n) {
                this.setSpriteFrame("gamePackages/textures/icons/props/" + e, t, n)
            },
            setGameIcon: function (e, t, n) {
                e.startsWith("http") ? this.setAvatar(e, t, n) : this.setSpriteFrame("gamePackages/textures/icons/games/" + e, t, n)
            },
            formatName: function (e) {
                var t = "";
                if (e.length)
                    if (e.length > 6) {
                        for (var n = 0; n < 6; n++) {
                            var i = e[n] + e[n + 1];
                            null !== emojione.regUnicode.exec(i) ? (t += i,
                                n++) : t += e[n]
                        }
                        t += "..."
                    } else
                        t = e;
                return t
            },
            setAvatar: function (e, t, n) {
                e && e.startsWith("http") && cc.loader.load({
                    url: e,
                    type: "png"
                }, function (i, a) {
                    if (i)
                        return console.error("set avatar failed! err:", e, i),
                            void n(i);
                    var o = new cc.SpriteFrame(a, cc.Rect(0, 0, a.width, a.height));
                    t && cc.isValid(t) && (t.spriteFrame = o,
                        n(null))
                })
            },
            convertMovieClip2Animation: function (e, t, n) {
                var i = e.res
                    , a = {};
                for (var o in i) {
                    var s = i[o]
                        , r = new cc.SpriteFrame(t, cc.rect(s.x, s.y, s.w, s.h));
                    a[o] = r
                }
                var c = e.mc
                    , h = [];
                for (var l in c) {
                    var u = {}
                        , d = c[l];
                    u.sample = d.frameRate,
                        u.frames = [];
                    for (var p = 0; p < d.frames.length; p++)
                        for (var f = d.frames[p], g = 0; g < f.duration; g++)
                            u.frames.push(a[f.res]);
                    var m = cc.AnimationClip.createWithSpriteFrames(u.frames, u.sample);
                    m.name = l,
                        h.push(m)
                }
                n(null, h)
            },
            loadMoveClip: function (e, t, n) {
                var i = this
                    , a = null
                    , o = null;
                cc.loader.load({
                    url: e,
                    type: "json"
                }, function (e, t) {
                    e || null !== (a = t) && null !== o && i.convertMovieClip2Animation(a, o, n)
                }),
                    cc.loader.load({
                        url: t,
                        type: "png"
                    }, function (e, t) {
                        e || (o = t,
                            null !== a && null !== o && i.convertMovieClip2Animation(a, o, n))
                    })
            },
            setGray: function (e, t) {
                for (var n = e.getComponentsInChildren(cc.Sprite), i = 0; i < n.length; ++i) {
                    var a = n[i];
                    t ? a.setState(cc.Sprite.State.GRAY) : a.setState(cc.Sprite.State.NORMAL)
                }
            }
        }));
        n.onLoad(),
            t.exports = n,
            cc._RF.pop()
    }
        , {}],
    reward: [function (e, t) {
        "use strict";
        cc._RF.push(t, "511b6KMY/hH0J3ytfJAXF3B", "reward");
        var n = e("constants")
            , i = e("LanguageData")
            , a = e("uiManager")
            , o = e("localConfig")
            , s = (e("playerData"),
                e("resourceUtil"))
            , r = e("gameLogic")
            , c = e("../../frameworks/Platform");
        cc.Class({
            extends: cc.Component,
            properties: {
                sfDiamond: cc.SpriteFrame,
                sfGold: cc.SpriteFrame,
                spIcon: cc.Sprite,
                lbRewardValue: cc.Label,
                aniGetItem: cc.Animation,
                ndBtnNormalReceive: cc.Node,
                ndBtnDoubleReceive: cc.Node,
                ndBtnReceive: cc.Node
            },
            start: function () { },
            show: function (e, t, a) {
                var o = this;
                this.itemType = e.itemType,
                    this.itemAmount = e.itemAmount,
                    this.itemSubType = e.itemSubType,
                    this.shareFunction = a,
                    this.aniGetItem.play("getItemShow"),
                    this.aniGetItem.once("finished", function () {
                        o.aniGetItem.play("getItemIdle")
                    }, this),
                    this.setRewardPage(),
                    this.ndBtnNormalReceive.getComponent(cc.RichText).string = "<u><color=#ffffff>" + i.t("daily.claim") + "</color></u>",
                    this.ndBtnReceive.active = !1,
                    this.ndBtnDoubleReceive.active = !0,
                    this.ndBtnNormalReceive.active = !1,
                    this.scheduleOnce(this.normalBtnCallback, n.NORMAL_SHOW_TIME)
            },
            normalBtnCallback: function () {
                this.ndBtnNormalReceive.active = !0
            },
            setRewardPage: function () {
                switch (this.itemType) {
                    case n.REWARD_TYPE.DIAMOND:
                        this.spIcon.spriteFrame = this.sfDiamond,
                            this.lbRewardValue.string = "x" + this.itemAmount;
                        break;
                    case n.REWARD_TYPE.GOLD:
                        this.spIcon.spriteFrame = this.sfGold,
                            this.lbRewardValue.string = "x" + this.itemAmount,
                            this.spIcon.node.width = 257,
                            this.spIcon.node.height = 166;
                        break;
                    case n.REWARD_TYPE.PROP:
                        var e = o.queryByID("prop", this.itemSubType);
                        this.spIcon.node.width = 168,
                            this.spIcon.node.height = 168,
                            s.setPropIcon(e.icon, this.spIcon, function () { });
                        var t = i.t("table_prop." + e.name);
                        this.lbRewardValue.string = t + i.t("") + " x " + this.itemAmount
                }
            },
            onBtnNormalReceiveClick: function () {
                this.addReward(),
                    this.close()
            },
            onBtnDoubleReceiveClick: function () {
                var e = this;
                c.showRewardAd({
                    onReward: function () {
                        e.itemAmount *= 2,
                            e.showDoubleReward()
                    }
                })
            },
            addReward: function () {
                switch (this.itemType) {
                    case n.REWARD_TYPE.DIAMOND:
                        r.addDiamond(this.itemAmount);
                        break;
                    case n.REWARD_TYPE.GOLD:
                        r.addGold(this.itemAmount);
                        break;
                    case n.REWARD_TYPE.PROP:
                        r.addProp(this.itemSubType, this.itemAmount)
                }
            },
            showDoubleReward: function () {
                this.unschedule(this.normalBtnCallback);
                var e = {};
                e.itemType = this.itemType,
                    e.itemSubType = this.itemSubType,
                    e.itemAmount = this.itemAmount,
                    a.insertToPopupSeq(1, "lottery/reward", "reward", [e, !1, this.shareFunction]),
                    this.close(),
                    this.ndBtnDoubleReceive.active = !1
            },
            close: function () {
                a.shiftFromPopupSeq("lottery/reward")
            }
        }),
            cc._RF.pop()
    }
        , {
        "../../frameworks/Platform": "Platform",
        LanguageData: "LanguageData",
        constants: "constants",
        gameLogic: "gameLogic",
        localConfig: "localConfig",
        playerData: "playerData",
        resourceUtil: "resourceUtil",
        uiManager: "uiManager"
    }],
    sceneManager: [function (e, t) {
        "use strict";
        cc._RF.push(t, "1c9f2SaApBI24JPUfdbbqk8", "sceneManager");
        var n = e("clientEvent")
            , i = e("resourceUtil")
            , a = e("constants");
        cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function () {
                cc.game.addPersistRootNode(this.node)
            },
            loadScene: function (e, t, i) {
                this.curLoadingScene = e,
                    this.callback = i;
                var o = a.SCENE_MANAGER_TYPE.LOAD_SCENE
                    , s = this;
                t.push(this.preloadScene.bind(this));
                var r = cc.director.getScene();
                this.initLoadingUI(r, "loading", function () {
                    s.loading.getComponent("loadingUI").startLoading(o, t, function (e, t) {
                        if (e)
                            return cc.error(e.message || e),
                                void s.callback.apply(null, [e].concat(t));
                        cc.director.loadScene(s.curLoadingScene, function () {
                            s.callback.apply(null, [null].concat(null)),
                                cc.game.removePersistRootNode(s.loading),
                                s.loading.removeFromParent(),
                                n.dispatchEvent("onSceneChanged")
                        })
                    })
                })
            },
            preloadScene: function () {
                var e = arguments
                    , t = function () {
                        e[e.length - 1].apply(null, Array.prototype.slice.call(e, 1))
                    };
                cc.director.preloadScene(this.curLoadingScene, t)
            },
            load: function (e, t) {
                this.callback = t,
                    this.tasks = e;
                var n = this
                    , i = a.SCENE_MANAGER_TYPE.LOAD
                    , o = cc.find("Canvas");
                this.initLoadingUI(o, "loading", function () {
                    n.loading.setPosition(0, 0),
                        n.loading.getComponent("loadingUI").startLoading(i, n.tasks, function (e, t) {
                            if (e)
                                return cc.error(e.message || e),
                                    void n.callback.apply(null, [e].concat(t));
                            n.callback.apply(null, [null].concat(null)),
                                n.node.active = !1
                        })
                })
            },
            initLoadingUI: function (e, t, n) {
                var a = this;
                i.getUIPrefabRes("loading/" + t, function (t, i) {
                    a.loading && "loading" === a.loading.name || (delete a.loading,
                        a.loading = cc.instantiate(i),
                        a.loading.active = !1,
                        e.addChild(a.loading, 999)),
                        n()
                })
            },
            enterSceneByAnimation: function (e, t, i, a) {
                this.curLoadingScene = t,
                    this.callback = a;
                var o = this;
                i.push(this.preloadScene.bind(this));
                var s = cc.director.getScene();
                this.initLoadingUI(s, e, function () {
                    o.loading.getComponent("loadingCloudUI").startLoading(!1, i, function (e, t) {
                        if (e)
                            return cc.error(e.message || e),
                                void o.callback.apply(null, [e].concat(t));
                        cc.director.loadScene(o.curLoadingScene, function () {
                            o.loading.getComponent("loadingCloudUI").endLoading(!0),
                                o.callback.apply(null, [null].concat(null)),
                                n.dispatchEvent("onSceneChanged")
                        })
                    })
                })
            },
            discontinue: function () {
                this.loading && this.loading.destroy()
            }
        }),
            cc._RF.pop()
    }
        , {
        clientEvent: "clientEvent",
        constants: "constants",
        resourceUtil: "resourceUtil"
    }],
    setting: [function (e, t) {
        "use strict";
        cc._RF.push(t, "ba66atexAVHHJdMxg2byzWt", "setting");
        var n = e("uiManager")
            , i = e("audioManager")
            , a = e("localConfig");
        e("constants"),
            cc.Class({
                extends: cc.Component,
                properties: {
                    versionLabel: cc.Label,
                    ndMusicOpen: cc.Node,
                    ndMusicClose: cc.Node,
                    ndSoundOpen: cc.Node,
                    ndSoundClose: cc.Node,
                    spMusicIcon: cc.Sprite,
                    spSoundIcon: cc.Sprite,
                    sfMusicOn: cc.SpriteFrame,
                    sfMusicOff: cc.SpriteFrame,
                    sfSoundOn: cc.SpriteFrame,
                    sfSoundOff: cc.SpriteFrame
                },
                start: function () { },
                show: function () {
                    this.node.active = !0;
                    var e = i.getConfiguration(!0)
                        , t = i.getConfiguration(!1);
                    this.ndMusicOpen.active = !e,
                        this.ndMusicClose.active = e,
                        this.ndSoundOpen.active = !t,
                        this.ndSoundClose.active = t,
                        this.versionLabel.string = "Ver: " + a.getVersion(),
                        this.spMusicIcon.spriteFrame = !0 === this.ndMusicOpen.active ? this.sfMusicOff : this.sfMusicOn,
                        this.spSoundIcon.spriteFrame = !0 === this.ndSoundOpen.active ? this.sfSoundOff : this.sfSoundOn
                },
                onBtnMusicOpenClick: function () {
                    i.openMusic(),
                        this.show()
                },
                onBtnMusicCloseClick: function () {
                    i.closeMusic(),
                        this.show()
                },
                onBtnSoundOpenClick: function () {
                    i.openSound(),
                        this.show()
                },
                onBtnSoundCloseClick: function () {
                    i.closeSound(),
                        this.show()
                },
                onBtnCloseClick: function () {
                    n.hideSharedDialog("dialog/setting")
                }
            }),
            cc._RF.pop()
    }
        , {
        audioManager: "audioManager",
        constants: "constants",
        localConfig: "localConfig",
        uiManager: "uiManager"
    }],
    shopItem: [function (e, t) {
        "use strict";
        cc._RF.push(t, "583beWcByBAYIU3DaI3EGJj", "shopItem");
        var n = e("clientEvent")
            , i = e("resourceUtil")
            , a = e("localConfig")
            , o = e("playerData")
            , s = e("../common/buttonEx")
            , r = e("constants");
        cc.Class({
            extends: cc.Component,
            properties: {
                spIcon: cc.Sprite,
                lbPrise: cc.Label,
                ndGold: cc.Node,
                lbNum: cc.Label,
                lbProcess: cc.Label,
                aniLight: cc.Animation,
                exBtnBuy: s,
                ndNumber: cc.Node,
                spBtnBuy: cc.Sprite,
                sfBuy: cc.SpriteFrame,
                sfShare: cc.SpriteFrame,
                sfAd: cc.SpriteFrame,
                sfReceive: cc.SpriteFrame
            },
            start: function () { },
            onEnable: function () {
                n.on("updateGold", this.refreshBtn, this),
                    n.on("updateInfiniteShareTimes", this.updateInfiniteShareTimes, this)
            },
            onDisable: function () {
                n.off("updateGold", this.refreshBtn, this),
                    n.off("updateInfiniteShareTimes", this.updateInfiniteShareTimes, this)
            },
            setInfo: function (e, t) {
                this.info = e,
                    this.parent = t,
                    this.id = e.ID,
                    this.price = e.price,
                    this.countPerBuy = e.countPerBuy,
                    this.icon = e.icon,
                    this.refreshUI(),
                    this.refreshBtn()
            },
            refreshUI: function () {
                this.animState = this.aniLight.play("shopPropertyIdle"),
                    i.setPropIcon(this.icon, this.spIcon, function () { });
                var e = a.queryByID("prop", this.id);
                this.totalPrice = this.countPerBuy * this.price,
                    this.lbNum.string = e.countPerBuy,
                    this.times = o.getInfiniteTimes(),
                    this.maxTimes = r.MAX_INFINITE_TIMES,
                    this.lbPrise.string = this.totalPrice,
                    this.lbProcess.node.active = !1
            },
            refreshBtn: function () {
                "number" == typeof this.rewardType && this.rewardType !== r.OPEN_REWARD_TYPE.NULL ? this.exBtnBuy.interactable = !0 : this.exBtnBuy.interactable = o.getGold() >= this.totalPrice
            },
            onBtnBuyClick: function () {
                cc.gameSpace.uiManager.showSharedDialog("props/buy", "buy", [this.id, r.ANALYTICS_TYPE.SHOP_PROP_PER_BUY]),
                    this.parent.showAllItemUnSelect(),
                    this.showSelect()
            },
            onItemClick: function () {
                this.parent.showAllItemUnSelect(),
                    this.parent.hideRandPropSelect(),
                    this.showSelect()
            },
            showSelect: function () {
                this.animState = this.aniLight.play("shopPropertySelect"),
                    this.parent.shopPropsOperationScript.show(this.id)
            },
            showUnSelect: function () {
                "shopPropertyIdle" !== this.animState.name && (this.animState = this.aniLight.play("shopPropertyIdle"))
            },
            updateInfiniteShareTimes: function () {
                this.spBtnBuy.node.scale = 1
            }
        }),
            cc._RF.pop()
    }
        , {
        "../common/buttonEx": "buttonEx",
        clientEvent: "clientEvent",
        constants: "constants",
        localConfig: "localConfig",
        playerData: "playerData",
        resourceUtil: "resourceUtil"
    }],
    shopPropsOperation: [function (e, t) {
        "use strict";
        cc._RF.push(t, "4a0f7h1SXdPto0QRIGkEQAJ", "shopPropsOperation");
        var n = e("LanguageData")
            , i = e("localConfig");
        e("constants"),
            cc.Class({
                extends: cc.Component,
                properties: {
                    lbTitle: cc.Label,
                    lbDesc: cc.Label,
                    spTip: cc.Sprite,
                    arrSftip: [cc.SpriteFrame]
                },
                start: function () { },
                show: function (e) {
                    this.node.active = !0,
                        this.type = e,
                        this.refreshUI()
                },
                hide: function () {
                    this.node.active = !1
                },
                refreshUI: function () {
                    var e = i.queryByID("prop", this.type);
                    this.lbTitle.string = n.t("table_prop." + e.name),
                        this.lbDesc.string = n.t("table_prop." + e.desc),
                        this.spTip.spriteFrame = this.arrSftip[this.type - 1]
                }
            }),
            cc._RF.pop()
    }
        , {
        LanguageData: "LanguageData",
        constants: "constants",
        localConfig: "localConfig"
    }],
    shop: [function (e, t) {
        "use strict";
        cc._RF.push(t, "ece87xczkNChrPYtwiev9Te", "shop");
        var n = e("localConfig")
            , i = e("clientEvent")
            , a = e("utils")
            , o = e("playerData")
            , s = e("constants")
            , r = e("resourceUtil");
        cc.Class({
            extends: cc.Component,
            properties: {
                arrMenu: [cc.Node],
                pbShopItem: cc.Prefab,
                lbGold: cc.Label,
                aniLight: cc.Animation,
                ndShopPropsOperation: cc.Node,
                spRandPropIcon: cc.Sprite,
                lbRandPropNumber: cc.Label,
                ndBtnReceive: cc.Node,
                spReceive: cc.Sprite,
                sfReceive: cc.SpriteFrame,
                sfShare: cc.SpriteFrame,
                sfAd: cc.SpriteFrame
            },
            ctor: function () {
                this.arrShopItemScript = []
            },
            start: function () { },
            onEnable: function () {
                i.on("updateGold", this.updateGold, this),
                    i.on("updateShopPropInfo", this.showShopProp, this)
            },
            onDisable: function () {
                i.off("updateGold", this.updateGold, this),
                    i.off("updateShopPropInfo", this.showShopProp, this)
            },
            show: function () {
                this.updateGold(),
                    this.init(),
                    this.animState = this.aniLight.play("shopPropertyIdle"),
                    this.showShopProp()
            },
            showShopProp: function () {
                var e = o.playerInfo.shopPropInfo
                    , t = n.getTable("prop");
                switch (this.randomItem = t[e.prop],
                r.setPropIcon(this.randomItem.icon, this.spRandPropIcon, function () { }),
                this.lbRandPropNumber.string = 1,
                e.receiveStatus) {
                    case s.REWARD_STATUS.UNRECEIVABLE:
                        this.ndBtnReceive.getComponent("buttonEx").interactable = !1;
                        break;
                    case s.REWARD_STATUS.RECEIVABLE:
                        this.ndBtnReceive.getComponent("buttonEx").interactable = !0
                }
            },
            init: function () {
                var e = this;
                this.shopPropsOperationScript = this.ndShopPropsOperation.getComponent("shopPropsOperation"),
                    this.arrShopItemScript || (this.arrShopItemScript = []);
                var t = n.getTable("prop");
                a.objectToArray(t).forEach(function (t, n) {
                    var i = null;
                    e.arrMenu[n].getChildByName("shopItem") ? i = e.arrMenu[n].getChildByName("shopItem") : (i = cc.instantiate(e.pbShopItem)).parent = e.arrMenu[n];
                    var a = i.getComponent("shopItem");
                    a.setInfo(t, e),
                        0 === n && a.showSelect(),
                        e.arrShopItemScript.includes(a) || e.arrShopItemScript.push(a)
                })
            },
            updateGold: function () {
                this.lbGold.string = a.formatMoney(o.getGold())
            },
            onBtnCloseClick: function () {
                cc.gameSpace.uiManager.hideSharedDialog("shop/shop")
            },
            showAllItemUnSelect: function () {
                this.arrShopItemScript.forEach(function (e) {
                    e.showUnSelect()
                })
            },
            onBtnReceiveClick: function () {
                this.showRandPropSecelt(),
                    this.shopPropsOperationScript.show(this.randomItem.ID),
                    this.showReward()
            },
            onRandPropClick: function () {
                this.showRandPropSecelt(),
                    this.shopPropsOperationScript.show(this.randomItem.ID)
            },
            showRandPropSecelt: function () {
                this.showAllItemUnSelect(),
                    this.animState = this.aniLight.play("shopPropertySelect")
            },
            hideRandPropSelect: function () {
                "shopPropertyIdle" !== this.animState.name && (this.animState = this.aniLight.play("shopPropertyIdle"))
            },
            showReward: function () {
                var e = {};
                e.itemType = s.REWARD_TYPE.PROP,
                    e.itemSubType = this.randomItem.ID,
                    e.itemAmount = 1,
                    cc.gameSpace.uiManager.showSharedDialog("lottery/reward", "reward", [e, !1, s.SHARE_FUNCTION.SHOP_PROP]),
                    o.updateShopPropInfo(!0),
                    this.showShopProp(),
                    i.dispatchEvent("updateShopPropInfo"),
                    this.showRandPropSecelt(),
                    this.shopPropsOperationScript.show(this.randomItem.ID)
            }
        }),
            cc._RF.pop()
    }
        , {
        clientEvent: "clientEvent",
        constants: "constants",
        localConfig: "localConfig",
        playerData: "playerData",
        resourceUtil: "resourceUtil",
        utils: "utils"
    }],
    showTargetCake: [function (e, t) {
        "use strict";
        cc._RF.push(t, "9c9c8xtNVNNdaML8iBVjy6C", "showTargetCake");
        var n = e("playerData")
            , i = e("resourceUtil");
        cc.Class({
            extends: cc.Component,
            properties: {
                spCake: cc.Sprite,
                lbCake: cc.Label,
                aniCake: cc.Animation,
                nodeValue: cc.Node,
                nodePanel: cc.Node
            },
            start: function () { },
            show: function (e, t) {
                var a = this;
                this.cake = e,
                    i.setCakeIcon(this.cake, this.spCake, function () { }),
                    this.lbCake.string = n.getTargetValue(e),
                    this.aniCake.play("showTargetCakeShow"),
                    this.aniCake.once("finished", function () {
                        a.aniCake.play("showTargetCakeOver"),
                            t.showFlyEffect(a.cake, a.spCake.node.convertToWorldSpaceAR(cc.v2(0, 0)))
                    }, this)
            },
            onlyShowCake: function (e) {
                i.setCakeIcon(e, this.spCake, function () { }),
                    this.nodeValue.active = !1,
                    this.nodePanel.active = !1
            }
        }),
            cc._RF.pop()
    }
        , {
        playerData: "playerData",
        resourceUtil: "resourceUtil"
    }],
    showTarget: [function (e, t) {
        "use strict";
        cc._RF.push(t, "2c1036ANX5HcIKmghpPMpLE", "showTarget");
        var n = e("clientEvent")
            , i = e("playerData");
        cc.Class({
            extends: cc.Component,
            properties: {
                pfCake: cc.Prefab,
                nodeTargetGroup: cc.Node,
                aniTarget: cc.Animation
            },
            start: function () { },
            show: function (e, t) {
                var n = this;
                for (var a in this._parent = e,
                    this.aniTarget.play("showTarget"),
                    this.aniTarget.once("finished", function () {
                        n.node.destroy(),
                            t && t()
                    }, this),
                    i.dictTargets) {
                    var o = cc.instantiate(this.pfCake);
                    o.parent = this.nodeTargetGroup,
                        o.getComponent("showTargetCake").show(a, this)
                }
            },
            showFlyEffect: function (e, t) {
                var i = this._parent.getTargetWorldPos(e);
                i ? this._parent._fightScene.effectGroup.playTargetCakeFlyEffect(e, t, i, function () {
                    n.dispatchEvent("showTargetCake", e)
                }) : n.dispatchEvent("showTargetCake", e)
            }
        }),
            cc._RF.pop()
    }
        , {
        clientEvent: "clientEvent",
        playerData: "playerData"
    }],
    signInItem: [function (e, t) {
        "use strict";
        cc._RF.push(t, "9ed24FbGtFK/r/yqUqxT4pv", "signInItem");
        var n = e("constants")
            , i = e("playerData");
        e("clientEvent"),
            cc.Class({
                extends: cc.Component,
                properties: {
                    lbAmount: cc.Label,
                    spIcon: cc.Sprite,
                    spPan: cc.Sprite,
                    sfDiamond: cc.SpriteFrame,
                    sfGold: cc.SpriteFrame,
                    sfGift: cc.SpriteFrame,
                    ndLight: cc.Node,
                    ndTick: cc.Node,
                    ndBtnFillSignIn: cc.Node,
                    ndBtnReceive: cc.Node,
                    ndMenu: cc.Node
                },
                start: function () {
                    this.isReceived = !1
                },
                init: function (e, t) {
                    var i = this;
                    this._parent = t,
                        this.itemInfo = e,
                        this.setIcon(e.rewardType),
                        this.setStatus(e.status),
                        cc.gameSpace.gameLogic.getOpenRewardType(n.SHARE_FUNCTION.FILL_SIGN, function (e, t) {
                            if (e)
                                i.close();
                            else
                                switch (i.openRewardType = t,
                                t) {
                                    case n.OPEN_REWARD_TYPE.AD:
                                    case n.OPEN_REWARD_TYPE.SHARE:
                                        break;
                                    case n.OPEN_REWARD_TYPE.NULL:
                                        i.ndBtnFillSignIn.active = !1
                                }
                        })
                },
                setIcon: function (e) {
                    switch (e) {
                        case n.REWARD_TYPE.DIAMOND:
                            this.spIcon.spriteFrame = this.sfDiamond,
                                this.spIcon.node.width = 165,
                                this.spIcon.node.height = 126,
                                this.spIcon.node.y = 56;
                            break;
                        case n.REWARD_TYPE.GOLD:
                            this.spIcon.spriteFrame = this.sfGold,
                                this.spIcon.node.width = 165,
                                this.spIcon.node.height = 126,
                                this.spIcon.node.y = 56;
                            break;
                        case n.REWARD_TYPE.GIFT:
                            this.spIcon.spriteFrame = this.sfGift
                    }
                    this.itemInfo.ID <= 6 ? this.spPan.node.scale = .6 : this.ndTick.y = 50,
                        this.ndMenu.y = -50
                },
                setStatus: function (e) {
                    switch (e) {
                        case n.SIGN_REWARD_STATUS.RECEIVED:
                            this.showItemUI(!1, !0, !1, !1);
                            break;
                        case n.SIGN_REWARD_STATUS.RECEIVABLE:
                            this.showItemUI(!0, !1, !1, !1);
                            break;
                        case n.SIGN_REWARD_STATUS.UNRECEIVABLE:
                            this.showItemUI(!1, !1, !1, !1);
                            break;
                        case n.SIGN_REWARD_STATUS.FILLSIGNIN:
                            this.showItemUI(!1, !1, !0, !1);
                            break;
                        case n.SIGN_REWARD_STATUS.AFTER_FILLSIGNIN:
                            this.showItemUI(!0, !1, !1, !0)
                    }
                },
                showItemUI: function (e, t, n, i) {
                    this.ndLight.active = e,
                        this.ndTick.active = t,
                        this.ndBtnFillSignIn.active = n,
                        this.ndBtnReceive.active = i
                },
                onBtnReceiveClick: function () {
                    this.itemInfo.status !== n.SIGN_REWARD_STATUS.AFTER_FILLSIGNIN && this.itemInfo.status !== n.SIGN_REWARD_STATUS.RECEIVABLE || this._parent.receiveReward(this.itemInfo, !1, this.markReceived.bind(this))
                },
                markReceived: function () {
                    this.itemInfo.status = n.SIGN_REWARD_STATUS.RECEIVED,
                        this.setStatus(this.itemInfo.status)
                },
                markAfterFillSignIn: function () {
                    this.itemInfo.status = n.SIGN_REWARD_STATUS.AFTER_FILLSIGNIN,
                        this.setStatus(this.itemInfo.status),
                        i.updateSignInFillSignInDays(this.itemInfo.ID, !1)
                },
                onBtnFillSignInClick: function () {
                    var e = this;
                    switch (this.openRewardType) {
                        case n.OPEN_REWARD_TYPE.AD:
                            cc.gameSpace.gameLogic.showRewardAd(function (t) {
                                t || e.markAfterFillSignIn()
                            });
                            break;
                        case n.OPEN_REWARD_TYPE.SHARE:
                            cc.gameSpace.gameLogic.share(n.SHARE_FUNCTION.FILL_SIGN, {}, function (t) {
                                t || e.markAfterFillSignIn()
                            });
                            break;
                        case n.OPEN_REWARD_TYPE.NULL:
                    }
                }
            }),
            cc._RF.pop()
    }
        , {
        clientEvent: "clientEvent",
        constants: "constants",
        playerData: "playerData"
    }],
    signIn: [function (e, t) {
        "use strict";
        cc._RF.push(t, "8885akyBoFF94Jx+V7yERfJ", "signIn"),
            e("audioManager"),
            e("configuration");
        var n = e("localConfig")
            , i = e("constants")
            , a = e("playerData")
            , o = e("uiManager")
            , s = e("LanguageData")
            , r = e("clientEvent")
            , c = e("../../frameworks/Platform");
        cc.Class({
            extends: cc.Component,
            properties: {
                prefabItem: cc.Prefab,
                iconList: [cc.Node],
                ndSeventhItem: cc.Node,
                ndBtnDoubleReceive: cc.Node,
                arrDay: [cc.Label],
                ndBtnNormalReceive: cc.Node
            },
            start: function () { },
            onEnable: function () {
                r.on("updateSignIn", this.updateSignIn, this)
            },
            onDisable: function () {
                r.off("updateSignIn", this.updateSignIn, this)
            },
            show: function () {
                a.updateSignInCurrentDay();
                var e = a.playerInfo.signInInfo;
                console.log("###signInfo", e),
                    this.currentDay = e.currentDay,
                    this.arrReceived = e.receivedDays,
                    this.arrAfterFillSignIn = e.afterFillSignInDays,
                    this.showSignInInfo(),
                    this.ndSeventhItem.zIndex = i.ZORDER.TIPS,
                    this.updateSignIn(),
                    this.isTodayReceived = a.getSignInReceivedInfo().isTodayReceived,
                    this.ndBtnNormalReceive.active = !1,
                    this.isTodayReceived ? this.scheduleOnce(this.showNormalBtnCallback, 1) : this.scheduleOnce(this.showNormalBtnCallback, i.NORMAL_SHOW_TIME)
            },
            updateSignIn: function () {
                this.ndBtnDoubleReceive.getComponent("buttonEx").interactable = !a.getSignInReceivedInfo().isTodayReceived,
                    console.log("###getSignInReceivedInfo", a.getSignInReceivedInfo())
            },
            showNormalBtnCallback: function () {
                this.ndBtnNormalReceive.active = !0,
                    this.ndBtnNormalReceive.getComponent(cc.RichText).string = "<u><color=#ffffff>" + s.t("daily.close") + "</color></u>",
                    this.node.getComponent(cc.Widget).enabled = !0,
                    this.ndBtnNormalReceive.getComponent(cc.Widget).enabled = !0,
                    this.ndBtnNormalReceive.getComponent(cc.Widget).bottom = 205,
                    console.log("bottom", this.ndBtnNormalReceive.getComponent(cc.Widget).bottom),
                    console.log("enable", this.ndBtnNormalReceive.getComponent(cc.Widget).enabled)
            },
            showSignInInfo: function () {
                var e = n.getTable("signIn");
                for (var t in this.arrSignInItemScript = [],
                    e) {
                    var a = e[t].ID
                        , o = !!this.arrReceived.includes(Number(a));
                    a <= this.currentDay ? (e[t].status = o ? i.SIGN_REWARD_STATUS.RECEIVED : i.SIGN_REWARD_STATUS.RECEIVABLE,
                        e[t].status === i.SIGN_REWARD_STATUS.RECEIVABLE && a < this.currentDay && (e[t].status = i.SIGN_REWARD_STATUS.FILLSIGNIN,
                            this.arrAfterFillSignIn.includes(a) && (e[t].status = i.SIGN_REWARD_STATUS.AFTER_FILLSIGNIN))) : e[t].status = i.SIGN_REWARD_STATUS.UNRECEIVABLE;
                    var r = this.iconList[t - 1]
                        , c = null;
                    r.childrenCount <= 1 ? (c = cc.instantiate(this.prefabItem),
                        r.addChild(c),
                        c.setPosition(0, 0)) : c = r.getChildByName("signInItem"),
                        this.signInItemScript = c.getComponent("signInItem"),
                        this.signInItemScript.init(e[t], this),
                        this.arrSignInItemScript.includes(this.signInItemScript) || this.arrSignInItemScript.push(this.signInItemScript),
                        this.arrDay[t - 1].string = s.t("sign.day%{value}", {
                            value: t
                        })
                }
            },
            receiveReward: function (e, t, n) {
                var s = e.ID;
                if (!(this.currentDay < s)) {
                    var r = !1;
                    if (e.rewardType === i.REWARD_TYPE.GIFT)
                        for (var c = a.parseGift(e.subType), h = 0; h < c.length; h++) {
                            var l = {};
                            l.ID = e.ID,
                                l.itemType = c[h].type,
                                l.itemSubType = c[h].subType,
                                l.itemAmount = t ? 2 * Number(c[h].amount) : c[h].amount,
                                r = h === c.length - 1,
                                o.pushToPopupSeq("signIn/signInReward", "signinReward", [l, n, r])
                        }
                    else {
                        var u = {};
                        u.ID = e.ID,
                            u.itemType = e.rewardType,
                            u.itemSubType = e.subType,
                            u.itemAmount = t ? 2 * Number(e.amount) : e.amount,
                            r = !0,
                            o.pushToPopupSeq("signIn/signInReward", "signinReward", [u, n, r])
                    }
                    o.shiftFromPopupSeq("signIn/signIn"),
                        this.unschedule(this.showNormalBtnCallback)
                }
            },
            receiveClick: function (e) {
                for (var t = this, n = function (n) {
                    var a = t.arrSignInItemScript[n];
                    if (a.itemInfo.status === i.SIGN_REWARD_STATUS.RECEIVABLE)
                        return a._parent.receiveReward(a.itemInfo, e, function () {
                            a.markReceived()
                        }),
                            "break"
                }, a = 0; a < this.arrSignInItemScript.length && "break" !== n(a); a++)
                    ;
            },
            onBtnDoubleReceiveClick: function () {
                var e = this;
                c.showRewardAd({
                    onReward: function () {
                        e.receiveClick(!0)
                    }
                })
            },
            showAd: function () {
                var e = this;
                cc.gameSpace.gameLogic.showRewardAd(function (t) {
                    t || e.receiveClick(!0)
                })
            },
            showShare: function () {
                var e = this;
                cc.gameSpace.gameLogic.share(i.SHARE_FUNCTION.SIGN, {}, function (t) {
                    t || e.receiveClick(!0)
                })
            },
            onBtnNormalReceiveClick: function () {
                this.onBtnCloseClick()
            },
            onBtnCloseClick: function () {
                o.shiftFromPopupSeq("signIn/signIn"),
                    o.hideSharedDialog("signIn/signInReward"),
                    this.unschedule(this.showNormalBtnCallback)
            }
        }),
            cc._RF.pop()
    }
        , {
        "../../frameworks/Platform": "Platform",
        LanguageData: "LanguageData",
        audioManager: "audioManager",
        clientEvent: "clientEvent",
        configuration: "configuration",
        constants: "constants",
        localConfig: "localConfig",
        playerData: "playerData",
        uiManager: "uiManager"
    }],
    signinReward: [function (e, t) {
        "use strict";
        cc._RF.push(t, "332caaRRoVO04/rOFgXW9L6", "signinReward");
        var n = e("constants")
            , i = e("LanguageData")
            , a = e("uiManager")
            , o = e("localConfig")
            , s = e("playerData")
            , r = e("resourceUtil")
            , c = e("clientEvent")
            , h = e("gameLogic");
        cc.Class({
            extends: cc.Component,
            properties: {
                sfDiamond: cc.SpriteFrame,
                sfGold: cc.SpriteFrame,
                spIcon: cc.Sprite,
                lbRewardValue: cc.Label,
                aniGetItem: cc.Animation
            },
            start: function () { },
            show: function (e, t, n) {
                var i = this;
                this.itemInfo = e,
                    this.currentDay = e.ID,
                    this.callback = t,
                    this.isLast = n,
                    this.updateSignInCallbak = this.updateSignInCallbak,
                    this.itemType = e.itemType,
                    this.itemAmount = e.itemAmount,
                    this.itemSubType = e.itemSubType,
                    this.aniGetItem.play("getItemShow"),
                    this.aniGetItem.once("finished", function () {
                        i.aniGetItem.play("getItemIdle")
                    }, this),
                    this.setRewardPage()
            },
            setRewardPage: function () {
                switch (this.itemType) {
                    case n.REWARD_TYPE.DIAMOND:
                        this.spIcon.spriteFrame = this.sfDiamond,
                            this.lbRewardValue.string = this.itemAmount;
                        break;
                    case n.REWARD_TYPE.GOLD:
                        this.spIcon.spriteFrame = this.sfGold,
                            this.lbRewardValue.string = this.itemAmount,
                            this.spIcon.node.width = 257,
                            this.spIcon.node.height = 166;
                        break;
                    case n.REWARD_TYPE.PROP:
                        var e = "00" + this.itemSubType
                            , t = o.queryByID("prop", e - "");
                        r.setPropIcon(e, this.spIcon, function () { }),
                            this.spIcon.node.width = 168,
                            this.spIcon.node.height = 168;
                        var a = i.t("table_prop." + t.name);
                        this.lbRewardValue.string = a + i.t("") + " x " + this.itemAmount
                }
            },
            onBtnReceiveClick: function () {
                if (this.addReward(),
                    this.isLast) {
                    var e = null;
                    cc.gameSpace.gameLogic.getOpenRewardType(n.SHARE_FUNCTION.FILL_SIGN, function (t, i) {
                        if (t)
                            e = s.getSignInReceivedInfo().isAllReceived;
                        else
                            switch (i) {
                                case n.OPEN_REWARD_TYPE.AD:
                                case n.OPEN_REWARD_TYPE.SHARE:
                                    e = s.getSignInReceivedInfo().isAllReceived;
                                    break;
                                case n.OPEN_REWARD_TYPE.NULL:
                                    e = s.getSignInReceivedInfo().isTodayReceived
                            }
                    }),
                        e ? a.hideSharedDialog("signIn/signInReward") : a.pushToPopupSeq("signIn/signIn", "signIn")
                }
                a.shiftFromPopupSeq("signIn/signInReward")
            },
            addReward: function () {
                switch (this.itemType) {
                    case n.REWARD_TYPE.DIAMOND:
                        h.addDiamond(this.itemAmount);
                        break;
                    case n.REWARD_TYPE.GOLD:
                        h.addGold(this.itemAmount);
                        break;
                    case n.REWARD_TYPE.PROP:
                        h.addProp(this.itemSubType, this.itemAmount)
                }
                this.currentDay && (s.updateSignInReceivedDays(this.currentDay),
                    c.dispatchEvent("updateSignIn")),
                    this.callback && this.callback()
            }
        }),
            cc._RF.pop()
    }
        , {
        LanguageData: "LanguageData",
        clientEvent: "clientEvent",
        constants: "constants",
        gameLogic: "gameLogic",
        localConfig: "localConfig",
        playerData: "playerData",
        resourceUtil: "resourceUtil",
        uiManager: "uiManager"
    }],
    stopPropagation: [function (e, t) {
        "use strict";
        cc._RF.push(t, "628d0zbx11LV4NaSW232uP9", "stopPropagation"),
            cc.Class({
                extends: cc.Component,
                properties: {},
                onLoad: function () { },
                onEnable: function () {
                    this.node.on("touchstart", function (e) {
                        e.stopPropagation()
                    }),
                        this.node.on("touchend", function (e) {
                            e.stopPropagation()
                        }),
                        this.node.on("touchmove", function (e) {
                            e.stopPropagation()
                        }),
                        this.node.on("touchcancel", function (e) {
                            e.stopPropagation()
                        }),
                        this.node.on("mousedown", function (e) {
                            e.stopPropagation()
                        }),
                        this.node.on("mouseenter", function (e) {
                            e.stopPropagation()
                        }),
                        this.node.on("mousemove", function (e) {
                            e.stopPropagation()
                        }),
                        this.node.on("mouseleave", function (e) {
                            e.stopPropagation()
                        }),
                        this.node.on("mouseup", function (e) {
                            e.stopPropagation()
                        }),
                        this.node.on("mousewheel", function (e) {
                            e.stopPropagation()
                        })
                },
                onDisable: function () {
                    this.node.off("touchstart", function (e) {
                        e.stopPropagation()
                    }),
                        this.node.off("touchend", function (e) {
                            e.stopPropagation()
                        }),
                        this.node.off("touchmove", function (e) {
                            e.stopPropagation()
                        }),
                        this.node.off("touchcancel", function (e) {
                            e.stopPropagation()
                        }),
                        this.node.off("mousedown", function (e) {
                            e.stopPropagation()
                        }),
                        this.node.off("mouseenter", function (e) {
                            e.stopPropagation()
                        }),
                        this.node.off("mousemove", function (e) {
                            e.stopPropagation()
                        }),
                        this.node.off("mouseleave", function (e) {
                            e.stopPropagation()
                        }),
                        this.node.off("mouseup", function (e) {
                            e.stopPropagation()
                        }),
                        this.node.off("mousewheel", function (e) {
                            e.stopPropagation()
                        })
                }
            }),
            cc._RF.pop()
    }
        , {}],
    targetCake: [function (e, t) {
        "use strict";
        cc._RF.push(t, "bd95fbKL6dI6r423PTMarGm", "targetCake");
        var n = e("resourceUtil");
        cc.Class({
            extends: cc.Component,
            properties: {
                spCakeIcon: cc.Sprite,
                lbCakeNum: cc.Label
            },
            start: function () { },
            setInfo: function (e) {
                var t = e.split("-");
                this.spCakeIcon.spriteFrame = n.setCakeIcon(t[0], this.spCakeIcon, function () { }),
                    this.lbCakeNum.string = t[1]
            }
        }),
            cc._RF.pop()
    }
        , {
        resourceUtil: "resourceUtil"
    }],
    taskItem: [function (e, t) {
        "use strict";
        cc._RF.push(t, "d90caLKDPxLepKDX83xcvvQ", "taskItem");
        var n = e("constants")
            , i = e("playerData")
            , a = e("clientEvent");
        cc.Class({
            extends: cc.Component,
            properties: {
                spIcon: cc.Sprite,
                sfGold: cc.SpriteFrame,
                sfDiamond: cc.SpriteFrame,
                sfProp: cc.SpriteFrame,
                lbProgress: cc.Label,
                lbDesc: cc.Label,
                lbRewardValue: cc.Label,
                progressBar: cc.ProgressBar,
                ndReceiveBtn: cc.Node,
                spRewardIcon: cc.Sprite,
                lbReceivedTxt: cc.Label
            },
            start: function () { },
            onEnable: function () {
                a.on("updateTask", this.refreshTaskItemUI, this)
            },
            onDisable: function () {
                a.off("updateTask", this.refreshTaskItemUI, this)
            },
            setInfo: function (e) {
                this.taskTemplate = e,
                    this.refreshUI()
            },
            refreshUI: function () {
                switch (this.taskTemplate.rewardType) {
                    case n.REWARD_TYPE.DIAMOND:
                        this.spRewardIcon.spriteFrame = this.sfDiamond;
                        break;
                    case n.REWARD_TYPE.GOLD:
                        this.spRewardIcon.spriteFrame = this.sfGold;
                        break;
                    case n.REWARD_TYPE.PROP:
                        this.spRewardIcon.spriteFrame = this.sfProp
                }
                this.lbDesc.string = this.taskTemplate.desc,
                    this.lbRewardValue.string = this.taskTemplate.rewardValue;
                var e = this.taskTemplate.status;
                if (e.hasOwnProperty("taskId")) {
                    var t = e.taskFinishCount
                        , i = this.taskTemplate.count;
                    t = t > i ? i : t,
                        this.progressBar.progress = t / i,
                        this.lbProgress.string = t + "/" + i
                } else
                    this.progressBar.progress = 0,
                        this.lbProgress.string = "0/" + this.taskTemplate.count;
                if (e.hasOwnProperty("taskState"))
                    switch (e.taskState) {
                        case n.TASK_STATE.UNRECEIVABLE:
                            this.switchRewardStatus(!0, !1, !1);
                            break;
                        case n.TASK_STATE.RECEIVABLE:
                            this.switchRewardStatus(!1, !0, !1);
                            break;
                        case n.TASK_STATE.RECEIVED:
                            this.switchRewardStatus(!1, !1, !0)
                    }
                else
                    this.switchRewardStatus(!0, !1, !1)
            },
            switchRewardStatus: function (e, t, n) {
                this.spRewardIcon.node.active = e,
                    this.ndReceiveBtn.active = t,
                    this.lbReceivedTxt.node.active = n
            },
            onBtnReceiveClick: function () {
                var e = this
                    , t = this.taskTemplate.taskId;
                i.getTaskReward(t, function () {
                    e.refreshUI(e.taskTemplate),
                        a.dispatchEvent("taskFinished")
                })
            },
            refreshTaskItemUI: function (e) {
                this.taskTemplate.taskId === e.taskId && (this.taskTemplate.status = e,
                    this.refreshUI())
            }
        }),
            cc._RF.pop()
    }
        , {
        clientEvent: "clientEvent",
        constants: "constants",
        playerData: "playerData"
    }],
    task: [function (e, t) {
        "use strict";
        cc._RF.push(t, "6278eoZqRFGEq4uaGbMA1p7", "task");
        var n = e("localConfig")
            , i = e("uiManager")
            , a = (e("configuration"),
                e("constants"))
            , o = e("playerData")
            , s = e("utils");
        cc.Class({
            extends: cc.Component,
            properties: {
                ndContent: cc.Node,
                lbTimeTxt: cc.Label,
                pbTaskItem: cc.Prefab
            },
            start: function () { },
            show: function () {
                this.schedule(this.countDownCallback, .5),
                    this.showTaskUI()
            },
            showTaskUI: function () {
                var e = o.checkTaskDate()
                    , t = o.playerInfo.dictTask;
                !e && t && 0 !== Object.keys(t).length || o.createRandTask();
                var i = [];
                for (var a in this.dictTaskTable = n.getTable("task"),
                    this.dictTaskTable) {
                    var s = this.dictTaskTable[a];
                    s.taskId = a,
                        s.status = o.getTaskStatusById(a),
                        s.status && i.push(s)
                }
                i.sort(function (e, t) {
                    return e.taskId - t.taskId
                });
                for (var r = 0; r < i.length; r++) {
                    var c = null
                        , h = i[r];
                    this.ndContent.children.length > r ? c = this.ndContent.children[r] : (c = cc.instantiate(this.pbTaskItem)).parent = this.ndContent,
                        c.getComponent("taskItem").setInfo(h)
                }
            },
            countDownCallback: function () {
                if (this.nowTime = Date.now(),
                    this.oldTime || (this.oldTime = this.nowTime),
                    this.nowTime - this.oldTime > 1e3) {
                    var e = o.playerInfo.taskDate + 36e5 * a.TASK_RESET_TIME - this.nowTime;
                    e <= 0 ? this.isFirstClearTimer || (this.unschedule(this.countDownCallback),
                        this.isFirstClearTimer = !0,
                        this.show()) : (this.isFirstClearTimer = !1,
                            this.lbTimeTxt.string = s.formatTimeForMillisecond(e),
                            this.oldTime = this.nowTime)
                }
            },
            onBtncloseCLick: function () {
                i.hideSharedDialog("task/task")
            },
            onBtnTimerClick: function () { }
        }),
            cc._RF.pop()
    }
        , {
        configuration: "configuration",
        constants: "constants",
        localConfig: "localConfig",
        playerData: "playerData",
        uiManager: "uiManager",
        utils: "utils"
    }],
    uiManager: [function (e, t) {
        "use strict";
        cc._RF.push(t, "5229ch4DA9O451Iv3BUZ/L7", "uiManager"),
            e("clientEvent");
        var n = e("constants")
            , i = e("resourceUtil")
            , a = e("poolManager")
            , o = new (cc.Class({
                start: function () {
                    this.dictSharedPanel = {},
                        this.dictLoading = {},
                        this.arrPopupDialog = [],
                        this.showTipsTime = 0
                },
                showSharedDialog: function (e, t, a) {
                    var o = this;
                    if (!this.dictLoading[e]) {
                        if (a || (a = []),
                            this.dictSharedPanel.hasOwnProperty(e)) {
                            var s = this.dictSharedPanel[e];
                            if (cc.isValid(s)) {
                                s.parent = cc.find("Canvas"),
                                    s.active = !0;
                                var r = s.getComponent(t);
                                return void (r.show && r.show.apply(r, a))
                            }
                        }
                        this.dictLoading[e] = !0,
                            i.createUI(e, function (i, s) {
                                var r = !1;
                                if (o.dictLoading[e] || (r = !0),
                                    o.dictLoading[e] = !1,
                                    i)
                                    console.error(i);
                                else {
                                    s.zIndex = n.ZORDER.DIALOG,
                                        o.dictSharedPanel[e] = s;
                                    var c = s.getComponent(t);
                                    c.show && c.show.apply(c, a),
                                        r && o.hideSharedDialog(e)
                                }
                            })
                    }
                },
                hideSharedDialog: function (e, t) {
                    if (this.dictSharedPanel.hasOwnProperty(e)) {
                        var n = this.dictSharedPanel[e];
                        if (n && cc.isValid(n)) {
                            var i = n.getComponent("animationUI");
                            i ? i.close(function () {
                                n.parent = null,
                                    t && "function" == typeof t && t()
                            }) : (n.parent = null,
                                t && "function" == typeof t && t())
                        } else
                            t && "function" == typeof t && t()
                    }
                    this.dictLoading[e] = !1
                },
                pushToPopupSeq: function (e, t, n) {
                    var i = {
                        panelPath: e,
                        scriptName: t,
                        param: n,
                        isShow: !1
                    };
                    this.arrPopupDialog.push(i),
                        this.checkPopupSeq()
                },
                insertToPopupSeq: function (e, t, n, i) {
                    var a = {
                        panelPath: t,
                        scriptName: n,
                        param: i,
                        isShow: !1
                    };
                    this.arrPopupDialog.splice(e, 0, a)
                },
                shiftFromPopupSeq: function (e) {
                    var t = this;
                    this.hideSharedDialog(e, function () {
                        t.arrPopupDialog[0] && t.arrPopupDialog[0].panelPath === e && (t.arrPopupDialog.shift(),
                            t.checkPopupSeq())
                    })
                },
                checkPopupSeq: function () {
                    if (this.arrPopupDialog.length > 0) {
                        var e = this.arrPopupDialog[0];
                        e.isShow || (this.showSharedDialog(e.panelPath, e.scriptName, e.param),
                            this.arrPopupDialog[0].isShow = !0)
                    }
                },
                showTips: function (e, t) {
                    var n = Date.now();
                    if (n - this.showTipsTime < 800) {
                        var i = 800 - (n - this.showTipsTime);
                        setTimeout(function (e, t) {
                            this._showTipsAni(e, t)
                        }
                            .bind(this, e, t), i),
                            this.showTipsTime = n + i
                    } else
                        this._showTipsAni(e, t),
                            this.showTipsTime = n
                },
                _showTipsAni: function (e, t) {
                    i.getUIPrefabRes("common/tips", function (i, o) {
                        if (!i) {
                            var s = a.getNode(o, cc.find("Canvas"));
                            s.zIndex = n.ZORDER.TIPS,
                                s.setPosition(cc.v2(0, 100)),
                                s.opacity = 255,
                                s.stopActionByTag(1e4);
                            var r = s.getChildByName("txtValue").getComponent(cc.RichText);
                            r.maxWidth = 0,
                                r.string = "<color=#001D34>" + e + "</color>";
                            var c = r._linesWidth;
                            c.length && c[0] < 500 ? r.maxWidth = c[0] : (r.maxWidth = 500,
                                r.node.setContentSize(500, r.node.getContentSize().height));
                            var h = r.node.getContentSize();
                            if (cc.isValid(h)) {
                                s.setContentSize(h.width + 136 < 240 ? 240 : h.width + 136, h.height + 30);
                                var l, u = cc.delayTime(.8), d = cc.moveBy(.8, cc.v2(0, 150)), p = cc.fadeOut(.8), f = cc.callFunc(function (e) {
                                    a.putNode(e)
                                }, this);
                                (l = t ? cc.sequence(u, d, u, p, cc.callFunc(t), f) : cc.sequence(u, d, u, p, f)).setTag(1e4),
                                    s.runAction(l)
                            } else
                                a.putNode(s)
                        }
                    })
                },
                showLoading: function (e, t) {
                    this.showSharedDialog("common/loading", "loading", [e, t])
                },
                hideLoading: function () {
                    this.hideSharedDialog("common/loading")
                },
                showGetMoneyTips: function (e, t, n) {
                    i.createUI("common/getTips", function (i, a) {
                        if (!i) {
                            var o = a.parent.convertToNodeSpaceAR(e);
                            a.setPosition(o);
                            var s = "+" + t
                                , r = cc.Color.GREEN;
                            t < 0 && (s = t,
                                r = cc.Color.RED);
                            var c = a.getChildByName("txtValue");
                            c.color = r,
                                c.getComponent(cc.Label).string = s,
                                a.setScale(0);
                            var h, l = cc.scaleTo(.5, 1).easing(cc.easeBackInOut()), u = cc.delayTime(.5), d = cc.fadeOut(.8);
                            h = n ? cc.sequence(l, u, d, cc.callFunc(n), cc.removeSelf(!0)) : cc.sequence(l, u, d, cc.removeSelf(!0)),
                                a.runAction(h)
                        }
                    })
                },
                showMessageBox: function (e, t, n, i) {
                    this.showSharedDialog("common/messageBox", "messageBox", [e, t, n, i])
                }
            }));
        o.start(),
            t.exports = o,
            cc._RF.pop()
    }
        , {
        clientEvent: "clientEvent",
        constants: "constants",
        poolManager: "poolManager",
        resourceUtil: "resourceUtil"
    }],
    unLockProp: [function (e, t) {
        "use strict";
        cc._RF.push(t, "44716UPwaNDPLwthoATscTT", "unLockProp");
        var n = e("playerData")
            , i = e("constants")
            , a = e("clientEvent")
            , o = e("localConfig")
            , s = e("resourceUtil")
            , r = e("LanguageData")
            , c = e("../../frameworks/Platform");
        cc.Class({
            extends: cc.Component,
            properties: {
                lbNum: cc.Label,
                lbName: cc.Label,
                spIcon: cc.Sprite,
                spBtnReceive: cc.Sprite,
                sfReceive: cc.SpriteFrame,
                sfAd: cc.SpriteFrame,
                sfShare: cc.SpriteFrame,
                ndBtnGoStart: cc.Node
            },
            start: function () { },
            show: function (e, t) {
                var a = this;
                this._fightUI = t,
                    this.callback = e,
                    this.level = n.getCurrentLevelInfo().ID,
                    this.unLoclProp = i.UNLOCK_PROP_ID[this.level - 2],
                    this.propItem = o.queryByID("prop", this.unLoclProp),
                    this.spBtnReceive.spriteFrame = this.sfAd,
                    this.ndBtnGoStart.getComponent(cc.RichText).string = "<u><color=#ffffff>" + r.t("unlock.start") + "</color></u>",
                    this.ndBtnGoStart.active = !1,
                    this.scheduleOnce(function () {
                        a.ndBtnGoStart.active = !0
                    }, i.NORMAL_SHOW_TIME),
                    this.init()
            },
            init: function () {
                this.lbNum.string = 1,
                    this.lbName.string = r.t("table_prop." + this.propItem.name),
                    s.setPropIcon(this.propItem.icon, this.spIcon, function () { })
            },
            onBtnReceiveClick: function () {
                var e = this;
                switch (c.showRewardAd({
                    onReward: function () {
                        e.showUnlockProp(),
                            cc.gameSpace.gameLogic.addProp(e.propItem.ID, 1)
                    }
                }),
                this.openRewardType) {
                    case i.OPEN_REWARD_TYPE.AD:
                        cc.gameSpace.gameLogic.showRewardAd(function (t) {
                            t || (e.showUnlockProp(),
                                cc.gameSpace.gameLogic.addProp(e.propItem.ID, 1))
                        });
                        break;
                    case i.OPEN_REWARD_TYPE.SHARE:
                        cc.gameSpace.gameLogic.share(i.SHARE_FUNCTION.FIGHT, {}, function (t) {
                            t || (e.showUnlockProp(),
                                cc.gameSpace.gameLogic.addProp(e.propItem.ID, 1))
                        });
                        break;
                    case i.OPEN_REWARD_TYPE.NULL:
                        this.showUnlockProp(),
                            cc.gameSpace.gameLogic.addProp(this.propItem.ID, 1)
                }
            },
            showUnlockProp: function () {
                var e = this;
                this.close(),
                    this._fightUI.showUnlockProp(this.propItem.ID, function () {
                        n.updateUnLockInfo(e.propItem.ID),
                            a.dispatchEvent("updateUnlockProp"),
                            e.callback()
                    })
            },
            onBtnCloseClick: function () {
                this.close(),
                    this.showUnlockProp()
            },
            close: function () {
                cc.gameSpace.uiManager.hideSharedDialog("fight/unLockProp")
            }
        }),
            cc._RF.pop()
    }
        , {
        "../../frameworks/Platform": "Platform",
        LanguageData: "LanguageData",
        clientEvent: "clientEvent",
        constants: "constants",
        localConfig: "localConfig",
        playerData: "playerData",
        resourceUtil: "resourceUtil"
    }],
    "use_v2.1-2.2.1_cc.Toggle_event": [function (e, t) {
        "use strict";
        cc._RF.push(t, "20d9asiR9dLz64Q7aXs5VNM", "use_v2.1-2.2.1_cc.Toggle_event"),
            cc.Toggle && (cc.Toggle._triggerEventInScript_isChecked = !0),
            cc._RF.pop()
    }
        , {}],
    "use_v2.1.x_cc.Action": [function (e, t) {
        "use strict";
        cc._RF.push(t, "6015bKWQn5F2pnBw8QXEKp8", "use_v2.1.x_cc.Action"),
            cc.macro.ROTATE_ACTION_CCW = !0,
            cc._RF.pop()
    }
        , {}],
    utils: [function (e, t) {
        "use strict";
        cc._RF.push(t, "04ef58UptZE3aEqQ2I+onJb", "utils");
        var n = {
            clone: function (e) {
                if (null === e || "object" != typeof e)
                    return e;
                var t = {};
                for (var n in e.constructor === Array && (t = []),
                    e)
                    e.hasOwnProperty(n) && (t[n] = this.clone(e[n]));
                return t
            },
            objectToArray: function (e) {
                var t = [];
                for (var n in e)
                    e.hasOwnProperty(n) && t.push(e[n]);
                return t
            },
            arrayToObject: function (e, t) {
                var n = {};
                for (var i in e)
                    e.hasOwnProperty(i) && e[i][t] && (n[e[i][t]] = e[i]);
                return n
            },
            getWeightRandIndex: function (e, t) {
                for (var n = parseInt(Math.random() * t), i = 0, a = 0; a < e.length && !(n < (i += e[a])); a++)
                    ;
                return a
            },
            getRandomNFromM: function (e, t) {
                for (var n = [], i = 0, a = 0; a < t && !(a >= e + 1);) {
                    i = this.getRandomInt(0, e);
                    for (var o = 0, s = 0; s < a; s++)
                        if (n[s] === i) {
                            o = 1;
                            break
                        }
                    0 === o && (n[a] = i,
                        a++)
                }
                return n
            },
            getRandomInt: function (e, t) {
                var n = Math.random() * (t - e + 1) + e;
                return Math.floor(n)
            },
            getStringLength: function (e) {
                for (var t = e, n = 0, i = 0, a = t.length; i < a; i++)
                    n += t.charCodeAt(i) <= 255 ? 1 : 2;
                return Math.ceil(n / 2)
            },
            isEmptyObject: function (e) {
                var t = !0;
                if (e && e.constructor === Object) {
                    for (var n in e)
                        if (e.hasOwnProperty(n)) {
                            t = !1;
                            break
                        }
                } else
                    t = !1;
                return t
            },
            formatNum: function (e) {
                if (e <= 0)
                    return "0";
                var t = Math.round(Math.log(e) / Math.log(1e3));
                return parseInt(e / Math.pow(1e3, t - 1 < 0 ? 0 : t - 1), 10) + ["", "", "K", "M", "B"][t]
            },
            isNewDay: function (e) {
                var t = new Date(e)
                    , n = new Date
                    , i = t.getYear()
                    , a = t.getMonth()
                    , o = t.getDate()
                    , s = n.getYear()
                    , r = n.getMonth()
                    , c = n.getDate();
                return s > i || r > a || c > o
            },
            getPropertyCount: function (e) {
                var t, n = 0;
                for (t in e)
                    e.hasOwnProperty(t) && n++;
                return n
            },
            difference: function (e, t) {
                var n = [];
                if (e.constructor !== Array || t.constructor !== Array)
                    return n;
                for (var i = e.length, a = 0; a < i; a++)
                    -1 === t.indexOf(e[a]) && n.push(e[a]);
                return n
            },
            base64encode: function (e) {
                var t, n, i, a, o, s, r, c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", h = "", l = 0;
                for (e = this.utf8Encode(e); l < e.length;)
                    a = (t = e.charCodeAt(l++)) >> 2,
                        o = (3 & t) << 4 | (n = e.charCodeAt(l++)) >> 4,
                        s = (15 & n) << 2 | (i = e.charCodeAt(l++)) >> 6,
                        r = 63 & i,
                        isNaN(n) ? s = r = 64 : isNaN(i) && (r = 64),
                        h = h + c.charAt(a) + c.charAt(o) + c.charAt(s) + c.charAt(r);
                return h
            },
            utf8Encode: function (e) {
                e = e.replace(/\r\n/g, "\n");
                for (var t = "", n = 0; n < e.length; n++) {
                    var i = e.charCodeAt(n);
                    i < 128 ? t += String.fromCharCode(i) : i > 127 && i < 2048 ? (t += String.fromCharCode(i >> 6 | 192),
                        t += String.fromCharCode(63 & i | 128)) : (t += String.fromCharCode(i >> 12 | 224),
                            t += String.fromCharCode(i >> 6 & 63 | 128),
                            t += String.fromCharCode(63 & i | 128))
                }
                return t
            },
            base64Decode: function (e) {
                var t, n, i, a, o, s, r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", c = "", h = 0;
                for (e = e.replace(/[^A-Za-z0-9\+\/\=]/g, ""); h < e.length;)
                    t = r.indexOf(e.charAt(h++)) << 2 | (a = r.indexOf(e.charAt(h++))) >> 4,
                        n = (15 & a) << 4 | (o = r.indexOf(e.charAt(h++))) >> 2,
                        i = (3 & o) << 6 | (s = r.indexOf(e.charAt(h++))),
                        c += String.fromCharCode(t),
                        64 != o && (c += String.fromCharCode(n)),
                        64 != s && (c += String.fromCharCode(i));
                return this.utf8Decode(c)
            },
            utf8Decode: function (e) {
                for (var t = "", n = 0, i = 0, a = 0, o = 0; n < e.length;)
                    (i = e.charCodeAt(n)) < 128 ? (t += String.fromCharCode(i),
                        n++) : i > 191 && i < 224 ? (a = e.charCodeAt(n + 1),
                            t += String.fromCharCode((31 & i) << 6 | 63 & a),
                            n += 2) : (a = e.charCodeAt(n + 1),
                                o = e.charCodeAt(n + 2),
                                t += String.fromCharCode((15 & i) << 12 | (63 & a) << 6 | 63 & o),
                                n += 3);
                return t
            },
            stringToArray: function (e) {
                var t, n = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff", i = RegExp("[\\u200d\\ud800-\\udfff" + n + "\\ufe0e\\ufe0f]"), a = "\\ud83c[\\udffb-\\udfff]", o = "[" + n + "]", s = "(?:" + o + "|" + a + ")?", r = "[^\\ud800-\\udfff]", c = "(?:\\ud83c[\\udde6-\\uddff]){2}", h = "[\\ud800-\\udbff][\\udc00-\\udfff]", l = "[\\ufe0e\\ufe0f]?" + s + "(?:\\u200d(?:" + [r, c, h].join("|") + ")[\\ufe0e\\ufe0f]?" + s + ")*", u = "(?:" + [r + o + "?", o, c, h, "[\\ud800-\\udfff]"].join("|") + ")", d = RegExp(a + "(?=" + a + ")|" + u + l, "g");
                return t = e,
                    i.test(t) ? e.match(d) || [] : e.split("")
            },
            simulationUUID: function () {
                function e() {
                    return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
                }
                return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e()
            },
            trim: function (e) {
                return e.replace(/(^\s*)|(\s*$)/g, "")
            },
            isNowValid: function (e, t) {
                var n = new Date(e)
                    , i = new Date(t)
                    , a = !1;
                if (n.getDate() + "" != "NaN" && i.getDate() + "" != "NaN") {
                    var o = new Date;
                    a = o < i && o > n
                }
                return a
            },
            getDeltaDays: function (e, t) {
                e = new Date(e),
                    t = new Date(t);
                var n = e.getFullYear()
                    , i = e.getMonth() + 1
                    , a = e.getDate()
                    , o = t.getFullYear()
                    , s = t.getMonth() + 1
                    , r = t.getDate();
                e = new Date(n + "/" + i + "/" + a + " GMT+0800").getTime();
                var c = (t = new Date(o + "/" + s + "/" + r + " GMT+0800").getTime()) - e;
                return Math.floor(c / 864e5)
            },
            getMin: function (e) {
                var t = null;
                if (e.constructor === Array)
                    for (var n = e.length, i = 0; i < n; i++)
                        t = 0 === i ? Number(e[0]) : t > Number(e[i]) ? Number(e[i]) : t;
                return t
            },
            formatTwoDigits: function (e) {
                return (Array(2).join(0) + e).slice(-2)
            },
            formatDate: function (e, t) {
                var n = {
                    "M+": e.getMonth() + 1,
                    "d+": e.getDate(),
                    "h+": e.getHours(),
                    "m+": e.getMinutes(),
                    "s+": e.getSeconds(),
                    "q+": Math.floor((e.getMonth() + 3) / 3),
                    S: e.getMilliseconds()
                };
                for (var i in /(y+)/.test(t) && (t = t.replace(RegExp.$1, (e.getFullYear() + "").substr(4 - RegExp.$1.length))),
                    n)
                    new RegExp("(" + i + ")").test(t) && (t = t.replace(RegExp.$1, 1 === RegExp.$1.length ? n[i] : ("00" + n[i]).substr(("" + n[i]).length)));
                return t
            },
            getDay: function () {
                var e = new Date;
                return e.getFullYear() + "-" + (e.getMonth() + 1) + "-" + e.getDate()
            },
            formatName: function (e, t) {
                t = t || 6;
                var n = this.stringToArray(e)
                    , i = "";
                if (n.length > t) {
                    for (var a = 0; a < t; a++)
                        i += n[a];
                    i += "..."
                } else
                    i = e;
                return i
            },
            formatMoney: function (e) {
                for (var t = ["", "K", "M", "G", "T", "P", "E", "Z", "Y", "B", "N", "D"], n = "", i = 0; i < t.length; i++) {
                    if (!(e >= 1e4)) {
                        n = Math.floor(e) + t[i];
                        break
                    }
                    e /= 1e3
                }
                return "" === n && (n = Math.floor(e) + "U"),
                    n
            },
            formatTimeForSecond: function (e) {
                var t = ""
                    , n = e % 60
                    , i = Math.floor(e / 60);
                i = i < 0 ? 0 : i;
                var a = Math.floor(i / 60)
                    , o = i % 60;
                return a > 0 && (t += a > 9 ? a.toString() : "0" + a,
                    t += ":"),
                    t += o > 9 ? o.toString() : "0" + o,
                    (t += ":") + (n > 9 ? n.toString() : "0" + n)
            },
            formatTimeForMillisecond: function (e) {
                var t = Math.floor(e / 1e3 % 60)
                    , n = Math.floor(e / 1e3 / 60 % 60)
                    , i = Math.floor(e / 1e3 / 60 / 60);
                return (i = i < 10 ? "0" + i : i) + ":" + (n = n < 10 ? "0" + n : n) + ":" + (t < 10 ? "0" + t : t)
            },
            zip: function (e) {
                var t = pako.gzip(encodeURIComponent(e), {
                    to: "string"
                });
                return this.base64encode(t)
            },
            unZip: function (e) {
                var t = this.base64Decode(e)
                    , n = t.split("").map(function (e) {
                        return e.charCodeAt(0)
                    })
                    , i = new Uint8Array(n)
                    , a = pako.inflate(i);
                return t = String.fromCharCode.apply(null, new Uint16Array(a)),
                    decodeURIComponent(t)
            },
            encrypt: function (e) {
                var t = this.base64encode(e)
                    , n = 6;
                t.length % 2 == 0 && (n = 7);
                for (var i = "", a = 0; a < (t.length - n + 1) / 2; a++)
                    i += t[2 * a + 1],
                        i += t[2 * a];
                return i + t.slice(t.length - n + 1)
            },
            decrypt: function (e) {
                var t = 6;
                e.length % 2 == 0 && (t = 7);
                for (var n = "", i = 0; i < e.length - t; i += 2)
                    n += e[i + 1],
                        n += e[i];
                return n += e.slice(e.length - t + 1),
                    this.base64Decode(n)
            },
            parsePoker: function (e) {
                var t = {};
                t.num = e,
                    t.type = Math.floor((e - 1) / 13);
                var n = e % 13;
                t.realNum = 0 === n ? 13 : n;
                var i = t.realNum;
                switch (i) {
                    case 1:
                        i = "A";
                        break;
                    case 11:
                        i = "J";
                        break;
                    case 12:
                        i = "Q";
                        break;
                    case 13:
                        i = "K"
                }
                var a = ""
                    , o = "";
                switch (t.type) {
                    case 0:
                        o = "diamonds",
                            a = "\u65b9\u5757";
                        break;
                    case 1:
                        o = "clubs",
                            a = "\u6885\u82b1";
                        break;
                    case 2:
                        o = "hearts",
                            a = "\u7ea2\u6843";
                        break;
                    case 3:
                        o = "spades",
                            a = "\u9ed1\u6843"
                }
                return t.color = o,
                    t.name = a,
                    t.showNum = i,
                    t
            },
            formateCards: function (e) {
                for (var t = _.cloneDeep(e), n = [], i = 0; i < t.length; i++) {
                    var a = t[i] % 13;
                    (a = 0 === a ? 13 : a) <= 10 ? n.push(a) : n.push(10)
                }
                for (var o = [], s = !1, r = 0; r < 3; r++) {
                    for (var c = r + 1; c < 4; c++) {
                        for (var h = c + 1; h < 5; h++)
                            if ((n[r] + n[c] + n[h]) % 10 == 0) {
                                o = [r, c, h],
                                    s = !0;
                                break
                            }
                        if (s)
                            break
                    }
                    if (s)
                        break
                }
                for (var l = [], u = 0; u < o.length; u++)
                    l = l.concat(t.splice(o[u] - u, 1));
                return l.concat(t)
            },
            getCardScore: function (e) {
                for (var t = !0, n = !0, i = -1, a = [], o = [], s = 0; s < e.length; s++) {
                    var r = e[s]
                        , c = r % 13
                        , h = i % 13;
                    (c = 0 === c ? 13 : c) > (h = 0 === h ? 13 : h) ? i = r : c === h && r > i && (i = r),
                        a.push(c),
                        c <= 10 ? (o.push(c),
                            n = !1,
                            c > 4 && (t = !1)) : (o.push(10),
                                t = !1)
                }
                e.length < 5 && (t = !1,
                    n = !1),
                    t && _.sumBy(o, function (e) {
                        return e
                    }) > 10 && (t = !1),
                    t ? i += 6e4 : n && (i += 5e4);
                var l = _.countBy(a);
                if (Object.keys(l).length <= 2)
                    for (var u in l)
                        if (l[u] >= 4) {
                            i += 4e4;
                            break
                        }
                for (var d = !1, p = 0; p < 3; p++) {
                    for (var f = p + 1; f < 4; f++) {
                        for (var g = f + 1; g < 5; g++)
                            if ((o[p] + o[f] + o[g]) % 10 == 0) {
                                i += 1e4;
                                var m = _.cloneDeep(o);
                                m.splice(p, 1),
                                    m.splice(f - 1, 1),
                                    m.splice(g - 2, 1);
                                var v = _.sumBy(m, function (e) {
                                    return e
                                }) % 10;
                                i += 0 === v ? 1e3 : 100 * v,
                                    d = !0;
                                break
                            }
                        if (d)
                            break
                    }
                    if (d)
                        break
                }
                return i
            },
            compareScore: function (e, t) {
                var n = Math.floor(e / 100)
                    , i = Math.floor(t / 100);
                if (n > i)
                    return !0;
                if (n === i) {
                    var a = e - n
                        , o = t - i
                        , s = a % 13
                        , r = o % 13;
                    if ((s = 0 === s ? 13 : s) > (r = 0 === r ? 13 : r) || s === r && a > o)
                        return !0
                }
                return !1
            },
            shuffle: function (e) {
                for (var t = e.length, n = 0; n < t - 1; n++) {
                    var i = parseInt(Math.random() * (t - n))
                        , a = e[i];
                    e[i] = e[t - n - 1],
                        e[t - n - 1] = a
                }
                return e
            }
        };
        t.exports = n,
            cc._RF.pop()
    }
        , {}]
}, {}, ["use_v2.1-2.2.1_cc.Toggle_event", "use_v2.1.x_cc.Action", "gridView", "stopPropagation", "Platform", "audioManager", "clientEvent", "clientEventOne", "configuration", "gameLogic", "playerData", "poolManager", "uiManager", "eventListener", "main", "configManager", "constants", "formula", "localConfig", "utils", "animationUI", "buttonEx", "elasticLimit", "loading", "messageBox", "adProp", "adStep", "adStepItem", "balance", "balanceFailed", "effectGroup", "fightGuide", "fightHandGuide", "fightNum", "fightProp", "fightPropsOperation", "fightScene", "fightTarget", "fightUI", "linkContent", "linkItem", "linkLine", "showTarget", "showTargetCake", "unLockProp", "loadingUI", "sceneManager", "loginScene", "lottery", "lotteryItem", "reward", "onlineReward", "buy", "levelPanel", "levelUI", "multiScrollView", "offLineReward", "propItem", "pveSlotUI", "pveUI", "targetCake", "gameSetting", "setting", "shop", "shopItem", "shopPropsOperation", "signIn", "signInItem", "signinReward", "task", "taskItem", "resourceUtil", "LanguageData", "LocalizedLabel", "LocalizedSprite", "SpriteFrameSet", "polyglot.min"]);
