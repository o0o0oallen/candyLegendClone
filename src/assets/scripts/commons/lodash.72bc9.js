(function () {
	function n(n, t) {
		Array.isArray(n) ? n.forEach(t) : r(n).forEach(function (r) {
			var e = r.key,
				u = r.value;
			t(u, e, n)
		})
	}

	function r(n) {
		var r = [];
		for (var t in n) n.hasOwnProperty(t) && r.push({
			key: t,
			value: n[t]
		});
		return r
	}

	function t(n) {
		var r = [];
		for (var t in n) n.hasOwnProperty(t) && r.push(n[t]);
		return r
	}

	function e(n, r) {
		for (var t, e = n ? r.length : 0, u = e - 1; e--;) {
			var i = r[e];
			e !== u && i === t || (t = i, Array.prototype.splice.call(n, i, 1))
		}
		return n
	}

	function u(n) {
		return "number" == typeof n
	}

	function i(n) {
		return n ? (n = Number(n)) === 1 / 0 || n === -1 / 0 ? 17976931348623157e292 * (n < 0 ? -1 : 1) : n == n ? n : 0 : 0 === n ? n : 0
	}

	function f(n, r, t, e) {
		for (var u = -1, i = (0, Math.max)((0, Math.ceil)((r - n) / (t || 1)), 0), f = Array(i); i--;) f[e ? i : ++u] = n, n += t;
		return f
	}

	function o(n) {
		var r = typeof n;
		return null !== n && ("object" === r || "function" === r)
	}
	var a = 9007199254740991;

	function c(n) {
		return "number" == typeof n && n > -1 && n % 1 == 0 && n <= a
	}

	function l(n) {
		return null !== n && c(n.length)
	}

	function h(n, r) {
		return n === r || n != n && r != r
	}

	function s(n, r) {
		var t = typeof n;
		return !!(r = null === r ? a : r) && ("number" === t || "symbol" !== t && /^(?:0|[1-9]\d*)$/.test(n)) && n > -1 && n % 1 == 0 && n < r
	}

	function v(n, r, t) {
		if (!o(t)) return !1;
		var e = typeof r;
		return !!("number" === e ? l(t) && s(r, t.length) : "string" === e && r in t) && h(t[r], n)
	}
	var y = {
		find: function (n, r) {
			var e;
			if (Array.isArray(n) || (n = t(n)), (e = n.filter(r)).length) return e[0]
		},
		filter: function (n, r) {
			return Array.isArray(n) || (n = t(n)), n.filter(r)
		}
	};
	y.forEach = n, y.each = n, y.cloneDeep = function n(r) {
		if (null === r || "object" != typeof r) return r;
		var t = {};
		for (var e in r.constructor === Array && (t = []), r) r.hasOwnProperty(e) && (t[e] = n(r[e]));
		return t
	}, y.map = function (n, r) {
		Array.isArray(n) || (n = t(n));
		var e = [];
		return n.forEach(function (n, t, u) {
			e.push(r(n, t, u))
		}), e
	}, y.random = function (n, r) {
		var t = Math.random() * (r - n + 1) + n;
		return Math.floor(t)
	}, y.toArray = t, y.pullAllWith = function (n, r, t) {
		return r.forEach(function (r) {
			n.filter(function (n) {
				return t(n, r)
			}).forEach(function (r) {
				var t = n.indexOf(r); - 1 !== n.indexOf(r) && n.splice(t, 1)
			})
		}), n
	}, y.isEqual = function n(r, t) {
		var e = r instanceof Object,
			u = t instanceof Object;
		if (!e || !u) return r === t;
		if (Object.keys(r).length !== Object.keys(t).length) return !1;
		for (var i in r) {
			var f = r[i] instanceof Object,
				o = t[i] instanceof Object;
			if (f && o) return n(r[i], t[i]);
			if (r[i] !== t[i]) return !1
		}
		return !0
	}, y.now = function () {
		return Date.now()
	}, y.pullAll = function (n, r) {
		return r.forEach(function (r) {
			var t = n.indexOf(r); - 1 !== n.indexOf(r) && n.splice(t, 1)
		}), n
	}, y.forEachRight = function (n, r) {
		Array.isArray(n) || (n = t(n));
		for (var e = n.length - 1; e >= 0 && r(n[e]); e--);
	}, y.startsWith = function (n, r, t) {
		return (n = n.substr(t)).startsWith(r)
	}, y.endsWith = function (n, r, t) {
		return (n = n.substr(t)).endsWith(r)
	}, y.remove = function (n, r) {
		var t = [],
			u = [];
		return n.forEach(function (n, e) {
			r(n) && (t.push(n), u.push(e))
		}), e(n, u), t
	}, y.findIndex = function (n, r, t) {
		var e;
		if (n = n.slice(t), "function" == typeof r) {
			for (e = 0; e < n.length; e++)
				if (r(n[e])) return e
		} else if (Array.isArray(r))
			for (e = 0; e < n.length; e++) {
				var u = r[0],
					i = !0;
				if (r.length > 1 && (i = r[1]), n[e][u] === i) return e
			} else
			for (e = 0; e < n.length; e++)
				if (n[e] === r) return e;
		return -1
	}, y.concat = function () {
		var n = arguments.length;
		if (!n) return [];
		for (var r = arguments[0], t = 1; t < n;) r = r.concat(arguments[t]), t++;
		return r
	}, y.isNumber = u, y.indexOf = function (n, r, t) {
		return (n = n.slice(t)).indexOf(r)
	}, y.join = function (n, r) {
		if (null === n) return "";
		var t = "";
		return n.forEach(function (n) {
			t += n + r
		}), t.substr(0, t.length - 1)
	}, y.split = function (n, r, t) {
		return n.split(r, t)
	}, y.max = function (n) {
		if (n && n.length) {
			for (var r, t = 0; t < n.length; t++) 0 === t ? r = n[0] : r < n[t] && (r = n[t]);
			return r
		}
	}, y.drop = function (n, r) {
		return null !== n && n.length ? n.slice(r) : []
	}, y.flattenDeep = function n(r) {
		return r.reduce(function (r, t) {
			return r.concat(Array.isArray(t) ? n(t) : t)
		}, [])
	}, y.uniq = function (n) {
		var r = [];
		return n.forEach(function (n) {
			-1 === r.indexOf(n) && r.push(n)
		}), r
	}, y.isNaN = function (n) {
		return u(n) && n !== +n
	}, y.chunk = function (n, r) {
		if (null === n || !n.length || r < 1) return [];
		for (var t = []; n.length > r;) t.push(n.slice(0, r)), n = n.slice(r);
		return t.push(n), t
	}, y.maxBy = function (n, r) {
		if (n && n.length) {
			for (var t, e, u = 0; u < n.length; u++) 0 === u ? (t = r(n[0]), e = n[0]) : t < n[u] && (t = n[u], e = n[u]);
			return e
		}
	}, y.minBy = function (n, r) {
		if (n && n.length) {
			for (var t, e, u = 0; u < n.length; u++) 0 === u ? (t = r(n[0]), e = n[0]) : t > n[u] && (t = r(n[u]), e = n[u]);
			return e
		}
	}, y.range = function (n, r, t) {
		return t && "number" != typeof t && v(n, r, t) && (r = t = void 0), n = i(n), void 0 === r ? (r = n, n = 0) : r = i(r), f(n, r, t = void 0 === t ? n < r ? 1 : -1 : i(t), void 0)
	}, y.sumBy = function (n, r) {
		var t = 0;
		for (var e in n) t += r(n[e]);
		return t
	}, y.countBy = function (n) {
		var r = {};
		for (var t in n) {
			var e = n[t];
			r.hasOwnProperty(e) ? r[e] += 1 : r[e] = 1
		}
		return r
	}, window._ = y
})();