!(function (e, t) {
    "object" == typeof module && "object" == typeof module.exports
        ? (module.exports = e.document
              ? t(e, !0)
              : function (e) {
                    if (!e.document)
                        throw new Error(
                            "jQuery requires a window with a document"
                        );
                    return t(e);
                })
        : t(e);
})("undefined" != typeof window ? window : this, function (e, t) {
    function n(e) {
        var t = !!e && "length" in e && e.length,
            n = oe.type(e);
        return (
            "function" !== n &&
            !oe.isWindow(e) &&
            ("array" === n ||
                0 === t ||
                ("number" == typeof t && t > 0 && t - 1 in e))
        );
    }
    function r(e, t, n) {
        if (oe.isFunction(t))
            return oe.grep(e, function (e, r) {
                return !!t.call(e, r, e) !== n;
            });
        if (t.nodeType)
            return oe.grep(e, function (e) {
                return (e === t) !== n;
            });
        if ("string" == typeof t) {
            if (ge.test(t)) return oe.filter(t, e, n);
            t = oe.filter(t, e);
        }
        return oe.grep(e, function (e) {
            return Z.call(t, e) > -1 !== n;
        });
    }
    function i(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; );
        return e;
    }
    function o(e) {
        var t = {};
        return (
            oe.each(e.match(we) || [], function (e, n) {
                t[n] = !0;
            }),
            t
        );
    }
    function s() {
        G.removeEventListener("DOMContentLoaded", s),
            e.removeEventListener("load", s),
            oe.ready();
    }
    function a() {
        this.expando = oe.expando + a.uid++;
    }
    function u(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (
                ((r = "data-" + t.replace(je, "-$&").toLowerCase()),
                (n = e.getAttribute(r)),
                "string" == typeof n)
            ) {
                try {
                    n =
                        "true" === n ||
                        ("false" !== n &&
                            ("null" === n
                                ? null
                                : +n + "" === n
                                ? +n
                                : Se.test(n)
                                ? oe.parseJSON(n)
                                : n));
                } catch (i) {}
                Ne.set(e, t, n);
            } else n = void 0;
        return n;
    }
    function l(e, t, n, r) {
        var i,
            o = 1,
            s = 20,
            a = r
                ? function () {
                      return r.cur();
                  }
                : function () {
                      return oe.css(e, t, "");
                  },
            u = a(),
            l = (n && n[3]) || (oe.cssNumber[t] ? "" : "px"),
            c =
                (oe.cssNumber[t] || ("px" !== l && +u)) &&
                Ae.exec(oe.css(e, t));
        if (c && c[3] !== l) {
            (l = l || c[3]), (n = n || []), (c = +u || 1);
            do (o = o || ".5"), (c /= o), oe.style(e, t, c + l);
            while (o !== (o = a() / u) && 1 !== o && --s);
        }
        return (
            n &&
                ((c = +c || +u || 0),
                (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
                r && ((r.unit = l), (r.start = c), (r.end = i))),
            i
        );
    }
    function c(e, t) {
        var n =
            "undefined" != typeof e.getElementsByTagName
                ? e.getElementsByTagName(t || "*")
                : "undefined" != typeof e.querySelectorAll
                ? e.querySelectorAll(t || "*")
                : [];
        return void 0 === t || (t && oe.nodeName(e, t)) ? oe.merge([e], n) : n;
    }
    function f(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
            Ee.set(e[n], "globalEval", !t || Ee.get(t[n], "globalEval"));
    }
    function p(e, t, n, r, i) {
        for (
            var o,
                s,
                a,
                u,
                l,
                p,
                d = t.createDocumentFragment(),
                h = [],
                g = 0,
                v = e.length;
            g < v;
            g++
        )
            if (((o = e[g]), o || 0 === o))
                if ("object" === oe.type(o)) oe.merge(h, o.nodeType ? [o] : o);
                else if (Re.test(o)) {
                    for (
                        s = s || d.appendChild(t.createElement("div")),
                            a = (Oe.exec(o) || ["", ""])[1].toLowerCase(),
                            u = Pe[a] || Pe._default,
                            s.innerHTML = u[1] + oe.htmlPrefilter(o) + u[2],
                            p = u[0];
                        p--;

                    )
                        s = s.lastChild;
                    oe.merge(h, s.childNodes),
                        (s = d.firstChild),
                        (s.textContent = "");
                } else h.push(t.createTextNode(o));
        for (d.textContent = "", g = 0; (o = h[g++]); )
            if (r && oe.inArray(o, r) > -1) i && i.push(o);
            else if (
                ((l = oe.contains(o.ownerDocument, o)),
                (s = c(d.appendChild(o), "script")),
                l && f(s),
                n)
            )
                for (p = 0; (o = s[p++]); ) Fe.test(o.type || "") && n.push(o);
        return d;
    }
    function d() {
        return !0;
    }
    function h() {
        return !1;
    }
    function g() {
        try {
            return G.activeElement;
        } catch (e) {}
    }
    function v(e, t, n, r, i, o) {
        var s, a;
        if ("object" == typeof t) {
            "string" != typeof n && ((r = r || n), (n = void 0));
            for (a in t) v(e, a, n, r, t[a], o);
            return e;
        }
        if (
            (null == r && null == i
                ? ((i = n), (r = n = void 0))
                : null == i &&
                  ("string" == typeof n
                      ? ((i = r), (r = void 0))
                      : ((i = r), (r = n), (n = void 0))),
            i === !1)
        )
            i = h;
        else if (!i) return e;
        return (
            1 === o &&
                ((s = i),
                (i = function (e) {
                    return oe().off(e), s.apply(this, arguments);
                }),
                (i.guid = s.guid || (s.guid = oe.guid++))),
            e.each(function () {
                oe.event.add(this, t, i, r, n);
            })
        );
    }
    function m(e, t) {
        return oe.nodeName(e, "table") &&
            oe.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr")
            ? e.getElementsByTagName("tbody")[0] ||
                  e.appendChild(e.ownerDocument.createElement("tbody"))
            : e;
    }
    function y(e) {
        return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
    }
    function x(e) {
        var t = Xe.exec(e.type);
        return t ? (e.type = t[1]) : e.removeAttribute("type"), e;
    }
    function b(e, t) {
        var n, r, i, o, s, a, u, l;
        if (1 === t.nodeType) {
            if (
                Ee.hasData(e) &&
                ((o = Ee.access(e)), (s = Ee.set(t, o)), (l = o.events))
            ) {
                delete s.handle, (s.events = {});
                for (i in l)
                    for (n = 0, r = l[i].length; n < r; n++)
                        oe.event.add(t, i, l[i][n]);
            }
            Ne.hasData(e) &&
                ((a = Ne.access(e)), (u = oe.extend({}, a)), Ne.set(t, u));
        }
    }
    function w(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && He.test(e.type)
            ? (t.checked = e.checked)
            : ("input" !== n && "textarea" !== n) ||
              (t.defaultValue = e.defaultValue);
    }
    function T(e, t, n, r) {
        t = J.apply([], t);
        var i,
            o,
            s,
            a,
            u,
            l,
            f = 0,
            d = e.length,
            h = d - 1,
            g = t[0],
            v = oe.isFunction(g);
        if (
            v ||
            (d > 1 && "string" == typeof g && !re.checkClone && _e.test(g))
        )
            return e.each(function (i) {
                var o = e.eq(i);
                v && (t[0] = g.call(this, i, o.html())), T(o, t, n, r);
            });
        if (
            d &&
            ((i = p(t, e[0].ownerDocument, !1, e, r)),
            (o = i.firstChild),
            1 === i.childNodes.length && (i = o),
            o || r)
        ) {
            for (s = oe.map(c(i, "script"), y), a = s.length; f < d; f++)
                (u = i),
                    f !== h &&
                        ((u = oe.clone(u, !0, !0)),
                        a && oe.merge(s, c(u, "script"))),
                    n.call(e[f], u, f);
            if (a)
                for (
                    l = s[s.length - 1].ownerDocument, oe.map(s, x), f = 0;
                    f < a;
                    f++
                )
                    (u = s[f]),
                        Fe.test(u.type || "") &&
                            !Ee.access(u, "globalEval") &&
                            oe.contains(l, u) &&
                            (u.src
                                ? oe._evalUrl && oe._evalUrl(u.src)
                                : oe.globalEval(u.textContent.replace(ze, "")));
        }
        return e;
    }
    function C(e, t, n) {
        for (var r, i = t ? oe.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
            n || 1 !== r.nodeType || oe.cleanData(c(r)),
                r.parentNode &&
                    (n && oe.contains(r.ownerDocument, r) && f(c(r, "script")),
                    r.parentNode.removeChild(r));
        return e;
    }
    function k(e, t) {
        var n = oe(t.createElement(e)).appendTo(t.body),
            r = oe.css(n[0], "display");
        return n.detach(), r;
    }
    function E(e) {
        var t = G,
            n = Ve[e];
        return (
            n ||
                ((n = k(e, t)),
                ("none" !== n && n) ||
                    ((Ue = (
                        Ue ||
                        oe("<iframe frameborder='0' width='0' height='0'/>")
                    ).appendTo(t.documentElement)),
                    (t = Ue[0].contentDocument),
                    t.write(),
                    t.close(),
                    (n = k(e, t)),
                    Ue.detach()),
                (Ve[e] = n)),
            n
        );
    }
    function N(e, t, n) {
        var r,
            i,
            o,
            s,
            a = e.style;
        return (
            (n = n || Qe(e)),
            (s = n ? n.getPropertyValue(t) || n[t] : void 0),
            ("" !== s && void 0 !== s) ||
                oe.contains(e.ownerDocument, e) ||
                (s = oe.style(e, t)),
            n &&
                !re.pixelMarginRight() &&
                Ge.test(s) &&
                Ye.test(t) &&
                ((r = a.width),
                (i = a.minWidth),
                (o = a.maxWidth),
                (a.minWidth = a.maxWidth = a.width = s),
                (s = n.width),
                (a.width = r),
                (a.minWidth = i),
                (a.maxWidth = o)),
            void 0 !== s ? s + "" : s
        );
    }
    function S(e, t) {
        return {
            get: function () {
                return e()
                    ? void delete this.get
                    : (this.get = t).apply(this, arguments);
            },
        };
    }
    function j(e) {
        if (e in rt) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = nt.length; n--; )
            if (((e = nt[n] + t), e in rt)) return e;
    }
    function D(e, t, n) {
        var r = Ae.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
    }
    function A(e, t, n, r, i) {
        for (
            var o =
                    n === (r ? "border" : "content")
                        ? 4
                        : "width" === t
                        ? 1
                        : 0,
                s = 0;
            o < 4;
            o += 2
        )
            "margin" === n && (s += oe.css(e, n + qe[o], !0, i)),
                r
                    ? ("content" === n &&
                          (s -= oe.css(e, "padding" + qe[o], !0, i)),
                      "margin" !== n &&
                          (s -= oe.css(e, "border" + qe[o] + "Width", !0, i)))
                    : ((s += oe.css(e, "padding" + qe[o], !0, i)),
                      "padding" !== n &&
                          (s += oe.css(e, "border" + qe[o] + "Width", !0, i)));
        return s;
    }
    function q(e, t, n) {
        var r = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = Qe(e),
            s = "border-box" === oe.css(e, "boxSizing", !1, o);
        if (i <= 0 || null == i) {
            if (
                ((i = N(e, t, o)),
                (i < 0 || null == i) && (i = e.style[t]),
                Ge.test(i))
            )
                return i;
            (r = s && (re.boxSizingReliable() || i === e.style[t])),
                (i = parseFloat(i) || 0);
        }
        return i + A(e, t, n || (s ? "border" : "content"), r, o) + "px";
    }
    function L(e, t) {
        for (var n, r, i, o = [], s = 0, a = e.length; s < a; s++)
            (r = e[s]),
                r.style &&
                    ((o[s] = Ee.get(r, "olddisplay")),
                    (n = r.style.display),
                    t
                        ? (o[s] || "none" !== n || (r.style.display = ""),
                          "" === r.style.display &&
                              Le(r) &&
                              (o[s] = Ee.access(
                                  r,
                                  "olddisplay",
                                  E(r.nodeName)
                              )))
                        : ((i = Le(r)),
                          ("none" === n && i) ||
                              Ee.set(
                                  r,
                                  "olddisplay",
                                  i ? n : oe.css(r, "display")
                              )));
        for (s = 0; s < a; s++)
            (r = e[s]),
                r.style &&
                    ((t &&
                        "none" !== r.style.display &&
                        "" !== r.style.display) ||
                        (r.style.display = t ? o[s] || "" : "none"));
        return e;
    }
    function H(e, t, n, r, i) {
        return new H.prototype.init(e, t, n, r, i);
    }
    function O() {
        return (
            e.setTimeout(function () {
                it = void 0;
            }),
            (it = oe.now())
        );
    }
    function F(e, t) {
        var n,
            r = 0,
            i = { height: e };
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
            (n = qe[r]), (i["margin" + n] = i["padding" + n] = e);
        return t && (i.opacity = i.width = e), i;
    }
    function P(e, t, n) {
        for (
            var r,
                i = (I.tweeners[t] || []).concat(I.tweeners["*"]),
                o = 0,
                s = i.length;
            o < s;
            o++
        )
            if ((r = i[o].call(n, t, e))) return r;
    }
    function R(e, t, n) {
        var r,
            i,
            o,
            s,
            a,
            u,
            l,
            c,
            f = this,
            p = {},
            d = e.style,
            h = e.nodeType && Le(e),
            g = Ee.get(e, "fxshow");
        n.queue ||
            ((a = oe._queueHooks(e, "fx")),
            null == a.unqueued &&
                ((a.unqueued = 0),
                (u = a.empty.fire),
                (a.empty.fire = function () {
                    a.unqueued || u();
                })),
            a.unqueued++,
            f.always(function () {
                f.always(function () {
                    a.unqueued--, oe.queue(e, "fx").length || a.empty.fire();
                });
            })),
            1 === e.nodeType &&
                ("height" in t || "width" in t) &&
                ((n.overflow = [d.overflow, d.overflowX, d.overflowY]),
                (l = oe.css(e, "display")),
                (c =
                    "none" === l
                        ? Ee.get(e, "olddisplay") || E(e.nodeName)
                        : l),
                "inline" === c &&
                    "none" === oe.css(e, "float") &&
                    (d.display = "inline-block")),
            n.overflow &&
                ((d.overflow = "hidden"),
                f.always(function () {
                    (d.overflow = n.overflow[0]),
                        (d.overflowX = n.overflow[1]),
                        (d.overflowY = n.overflow[2]);
                }));
        for (r in t)
            if (((i = t[r]), st.exec(i))) {
                if (
                    (delete t[r],
                    (o = o || "toggle" === i),
                    i === (h ? "hide" : "show"))
                ) {
                    if ("show" !== i || !g || void 0 === g[r]) continue;
                    h = !0;
                }
                p[r] = (g && g[r]) || oe.style(e, r);
            } else l = void 0;
        if (oe.isEmptyObject(p))
            "inline" === ("none" === l ? E(e.nodeName) : l) && (d.display = l);
        else {
            g
                ? "hidden" in g && (h = g.hidden)
                : (g = Ee.access(e, "fxshow", {})),
                o && (g.hidden = !h),
                h
                    ? oe(e).show()
                    : f.done(function () {
                          oe(e).hide();
                      }),
                f.done(function () {
                    var t;
                    Ee.remove(e, "fxshow");
                    for (t in p) oe.style(e, t, p[t]);
                });
            for (r in p)
                (s = P(h ? g[r] : 0, r, f)),
                    r in g ||
                        ((g[r] = s.start),
                        h &&
                            ((s.end = s.start),
                            (s.start =
                                "width" === r || "height" === r ? 1 : 0)));
        }
    }
    function M(e, t) {
        var n, r, i, o, s;
        for (n in e)
            if (
                ((r = oe.camelCase(n)),
                (i = t[r]),
                (o = e[n]),
                oe.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
                n !== r && ((e[r] = o), delete e[n]),
                (s = oe.cssHooks[r]),
                s && "expand" in s)
            ) {
                (o = s.expand(o)), delete e[r];
                for (n in o) n in e || ((e[n] = o[n]), (t[n] = i));
            } else t[r] = i;
    }
    function I(e, t, n) {
        var r,
            i,
            o = 0,
            s = I.prefilters.length,
            a = oe.Deferred().always(function () {
                delete u.elem;
            }),
            u = function () {
                if (i) return !1;
                for (
                    var t = it || O(),
                        n = Math.max(0, l.startTime + l.duration - t),
                        r = n / l.duration || 0,
                        o = 1 - r,
                        s = 0,
                        u = l.tweens.length;
                    s < u;
                    s++
                )
                    l.tweens[s].run(o);
                return (
                    a.notifyWith(e, [l, o, n]),
                    o < 1 && u ? n : (a.resolveWith(e, [l]), !1)
                );
            },
            l = a.promise({
                elem: e,
                props: oe.extend({}, t),
                opts: oe.extend(
                    !0,
                    { specialEasing: {}, easing: oe.easing._default },
                    n
                ),
                originalProperties: t,
                originalOptions: n,
                startTime: it || O(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var r = oe.Tween(
                        e,
                        l.opts,
                        t,
                        n,
                        l.opts.specialEasing[t] || l.opts.easing
                    );
                    return l.tweens.push(r), r;
                },
                stop: function (t) {
                    var n = 0,
                        r = t ? l.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; n < r; n++) l.tweens[n].run(1);
                    return (
                        t
                            ? (a.notifyWith(e, [l, 1, 0]),
                              a.resolveWith(e, [l, t]))
                            : a.rejectWith(e, [l, t]),
                        this
                    );
                },
            }),
            c = l.props;
        for (M(c, l.opts.specialEasing); o < s; o++)
            if ((r = I.prefilters[o].call(l, e, c, l.opts)))
                return (
                    oe.isFunction(r.stop) &&
                        (oe._queueHooks(l.elem, l.opts.queue).stop = oe.proxy(
                            r.stop,
                            r
                        )),
                    r
                );
        return (
            oe.map(c, P, l),
            oe.isFunction(l.opts.start) && l.opts.start.call(e, l),
            oe.fx.timer(
                oe.extend(u, { elem: e, anim: l, queue: l.opts.queue })
            ),
            l
                .progress(l.opts.progress)
                .done(l.opts.done, l.opts.complete)
                .fail(l.opts.fail)
                .always(l.opts.always)
        );
    }
    function W(e) {
        return (e.getAttribute && e.getAttribute("class")) || "";
    }
    function $(e) {
        return function (t, n) {
            "string" != typeof t && ((n = t), (t = "*"));
            var r,
                i = 0,
                o = t.toLowerCase().match(we) || [];
            if (oe.isFunction(n))
                for (; (r = o[i++]); )
                    "+" === r[0]
                        ? ((r = r.slice(1) || "*"),
                          (e[r] = e[r] || []).unshift(n))
                        : (e[r] = e[r] || []).push(n);
        };
    }
    function B(e, t, n, r) {
        function i(a) {
            var u;
            return (
                (o[a] = !0),
                oe.each(e[a] || [], function (e, a) {
                    var l = a(t, n, r);
                    return "string" != typeof l || s || o[l]
                        ? s
                            ? !(u = l)
                            : void 0
                        : (t.dataTypes.unshift(l), i(l), !1);
                }),
                u
            );
        }
        var o = {},
            s = e === Nt;
        return i(t.dataTypes[0]) || (!o["*"] && i("*"));
    }
    function _(e, t) {
        var n,
            r,
            i = oe.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && oe.extend(!0, e, r), e;
    }
    function X(e, t, n) {
        for (var r, i, o, s, a = e.contents, u = e.dataTypes; "*" === u[0]; )
            u.shift(),
                void 0 === r &&
                    (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
            for (i in a)
                if (a[i] && a[i].test(r)) {
                    u.unshift(i);
                    break;
                }
        if (u[0] in n) o = u[0];
        else {
            for (i in n) {
                if (!u[0] || e.converters[i + " " + u[0]]) {
                    o = i;
                    break;
                }
                s || (s = i);
            }
            o = o || s;
        }
        if (o) return o !== u[0] && u.unshift(o), n[o];
    }
    function z(e, t, n, r) {
        var i,
            o,
            s,
            a,
            u,
            l = {},
            c = e.dataTypes.slice();
        if (c[1]) for (s in e.converters) l[s.toLowerCase()] = e.converters[s];
        for (o = c.shift(); o; )
            if (
                (e.responseFields[o] && (n[e.responseFields[o]] = t),
                !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                (u = o),
                (o = c.shift()))
            )
                if ("*" === o) o = u;
                else if ("*" !== u && u !== o) {
                    if (((s = l[u + " " + o] || l["* " + o]), !s))
                        for (i in l)
                            if (
                                ((a = i.split(" ")),
                                a[1] === o &&
                                    (s = l[u + " " + a[0]] || l["* " + a[0]]))
                            ) {
                                s === !0
                                    ? (s = l[i])
                                    : l[i] !== !0 &&
                                      ((o = a[0]), c.unshift(a[1]));
                                break;
                            }
                    if (s !== !0)
                        if (s && e["throws"]) t = s(t);
                        else
                            try {
                                t = s(t);
                            } catch (f) {
                                return {
                                    state: "parsererror",
                                    error: s
                                        ? f
                                        : "No conversion from " +
                                          u +
                                          " to " +
                                          o,
                                };
                            }
                }
        return { state: "success", data: t };
    }
    function U(e, t, n, r) {
        var i;
        if (oe.isArray(t))
            oe.each(t, function (t, i) {
                n || At.test(e)
                    ? r(e, i)
                    : U(
                          e +
                              "[" +
                              ("object" == typeof i && null != i ? t : "") +
                              "]",
                          i,
                          n,
                          r
                      );
            });
        else if (n || "object" !== oe.type(t)) r(e, t);
        else for (i in t) U(e + "[" + i + "]", t[i], n, r);
    }
    function V(e) {
        return oe.isWindow(e) ? e : 9 === e.nodeType && e.defaultView;
    }
    var Y = [],
        G = e.document,
        Q = Y.slice,
        J = Y.concat,
        K = Y.push,
        Z = Y.indexOf,
        ee = {},
        te = ee.toString,
        ne = ee.hasOwnProperty,
        re = {},
        ie = "2.2.4",
        oe = function (e, t) {
            return new oe.fn.init(e, t);
        },
        se = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ae = /^-ms-/,
        ue = /-([\da-z])/gi,
        le = function (e, t) {
            return t.toUpperCase();
        };
    (oe.fn = oe.prototype = {
        jquery: ie,
        constructor: oe,
        selector: "",
        length: 0,
        toArray: function () {
            return Q.call(this);
        },
        get: function (e) {
            return null != e
                ? e < 0
                    ? this[e + this.length]
                    : this[e]
                : Q.call(this);
        },
        pushStack: function (e) {
            var t = oe.merge(this.constructor(), e);
            return (t.prevObject = this), (t.context = this.context), t;
        },
        each: function (e) {
            return oe.each(this, e);
        },
        map: function (e) {
            return this.pushStack(
                oe.map(this, function (t, n) {
                    return e.call(t, n, t);
                })
            );
        },
        slice: function () {
            return this.pushStack(Q.apply(this, arguments));
        },
        first: function () {
            return this.eq(0);
        },
        last: function () {
            return this.eq(-1);
        },
        eq: function (e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
        },
        end: function () {
            return this.prevObject || this.constructor();
        },
        push: K,
        sort: Y.sort,
        splice: Y.splice,
    }),
        (oe.extend = oe.fn.extend = function () {
            var e,
                t,
                n,
                r,
                i,
                o,
                s = arguments[0] || {},
                a = 1,
                u = arguments.length,
                l = !1;
            for (
                "boolean" == typeof s &&
                    ((l = s), (s = arguments[a] || {}), a++),
                    "object" == typeof s || oe.isFunction(s) || (s = {}),
                    a === u && ((s = this), a--);
                a < u;
                a++
            )
                if (null != (e = arguments[a]))
                    for (t in e)
                        (n = s[t]),
                            (r = e[t]),
                            s !== r &&
                                (l &&
                                r &&
                                (oe.isPlainObject(r) || (i = oe.isArray(r)))
                                    ? (i
                                          ? ((i = !1),
                                            (o = n && oe.isArray(n) ? n : []))
                                          : (o =
                                                n && oe.isPlainObject(n)
                                                    ? n
                                                    : {}),
                                      (s[t] = oe.extend(l, o, r)))
                                    : void 0 !== r && (s[t] = r));
            return s;
        }),
        oe.extend({
            expando: "jQuery" + (ie + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (e) {
                throw new Error(e);
            },
            noop: function () {},
            isFunction: function (e) {
                return "function" === oe.type(e);
            },
            isArray: Array.isArray,
            isWindow: function (e) {
                return null != e && e === e.window;
            },
            isNumeric: function (e) {
                var t = e && e.toString();
                return !oe.isArray(e) && t - parseFloat(t) + 1 >= 0;
            },
            isPlainObject: function (e) {
                var t;
                if ("object" !== oe.type(e) || e.nodeType || oe.isWindow(e))
                    return !1;
                if (
                    e.constructor &&
                    !ne.call(e, "constructor") &&
                    !ne.call(e.constructor.prototype || {}, "isPrototypeOf")
                )
                    return !1;
                for (t in e);
                return void 0 === t || ne.call(e, t);
            },
            isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0;
            },
            type: function (e) {
                return null == e
                    ? e + ""
                    : "object" == typeof e || "function" == typeof e
                    ? ee[te.call(e)] || "object"
                    : typeof e;
            },
            globalEval: function (e) {
                var t,
                    n = eval;
                (e = oe.trim(e)),
                    e &&
                        (1 === e.indexOf("use strict")
                            ? ((t = G.createElement("script")),
                              (t.text = e),
                              G.head.appendChild(t).parentNode.removeChild(t))
                            : n(e));
            },
            camelCase: function (e) {
                return e.replace(ae, "ms-").replace(ue, le);
            },
            nodeName: function (e, t) {
                return (
                    e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
                );
            },
            each: function (e, t) {
                var r,
                    i = 0;
                if (n(e))
                    for (
                        r = e.length;
                        i < r && t.call(e[i], i, e[i]) !== !1;
                        i++
                    );
                else for (i in e) if (t.call(e[i], i, e[i]) === !1) break;
                return e;
            },
            trim: function (e) {
                return null == e ? "" : (e + "").replace(se, "");
            },
            makeArray: function (e, t) {
                var r = t || [];
                return (
                    null != e &&
                        (n(Object(e))
                            ? oe.merge(r, "string" == typeof e ? [e] : e)
                            : K.call(r, e)),
                    r
                );
            },
            inArray: function (e, t, n) {
                return null == t ? -1 : Z.call(t, e, n);
            },
            merge: function (e, t) {
                for (var n = +t.length, r = 0, i = e.length; r < n; r++)
                    e[i++] = t[r];
                return (e.length = i), e;
            },
            grep: function (e, t, n) {
                for (var r, i = [], o = 0, s = e.length, a = !n; o < s; o++)
                    (r = !t(e[o], o)), r !== a && i.push(e[o]);
                return i;
            },
            map: function (e, t, r) {
                var i,
                    o,
                    s = 0,
                    a = [];
                if (n(e))
                    for (i = e.length; s < i; s++)
                        (o = t(e[s], s, r)), null != o && a.push(o);
                else for (s in e) (o = t(e[s], s, r)), null != o && a.push(o);
                return J.apply([], a);
            },
            guid: 1,
            proxy: function (e, t) {
                var n, r, i;
                if (
                    ("string" == typeof t && ((n = e[t]), (t = e), (e = n)),
                    oe.isFunction(e))
                )
                    return (
                        (r = Q.call(arguments, 2)),
                        (i = function () {
                            return e.apply(
                                t || this,
                                r.concat(Q.call(arguments))
                            );
                        }),
                        (i.guid = e.guid = e.guid || oe.guid++),
                        i
                    );
            },
            now: Date.now,
            support: re,
        }),
        "function" == typeof Symbol &&
            (oe.fn[Symbol.iterator] = Y[Symbol.iterator]),
        oe.each(
            "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
                " "
            ),
            function (e, t) {
                ee["[object " + t + "]"] = t.toLowerCase();
            }
        );
    var ce = (function (e) {
        function t(e, t, n, r) {
            var i,
                o,
                s,
                a,
                u,
                l,
                f,
                d,
                h = t && t.ownerDocument,
                g = t ? t.nodeType : 9;
            if (
                ((n = n || []),
                "string" != typeof e || !e || (1 !== g && 9 !== g && 11 !== g))
            )
                return n;
            if (
                !r &&
                ((t ? t.ownerDocument || t : W) !== L && q(t), (t = t || L), O)
            ) {
                if (11 !== g && (l = me.exec(e)))
                    if ((i = l[1])) {
                        if (9 === g) {
                            if (!(s = t.getElementById(i))) return n;
                            if (s.id === i) return n.push(s), n;
                        } else if (
                            h &&
                            (s = h.getElementById(i)) &&
                            M(t, s) &&
                            s.id === i
                        )
                            return n.push(s), n;
                    } else {
                        if (l[2])
                            return K.apply(n, t.getElementsByTagName(e)), n;
                        if (
                            (i = l[3]) &&
                            w.getElementsByClassName &&
                            t.getElementsByClassName
                        )
                            return K.apply(n, t.getElementsByClassName(i)), n;
                    }
                if (w.qsa && !z[e + " "] && (!F || !F.test(e))) {
                    if (1 !== g) (h = t), (d = e);
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for (
                            (a = t.getAttribute("id"))
                                ? (a = a.replace(xe, "\\$&"))
                                : t.setAttribute("id", (a = I)),
                                f = E(e),
                                o = f.length,
                                u = pe.test(a) ? "#" + a : "[id='" + a + "']";
                            o--;

                        )
                            f[o] = u + " " + p(f[o]);
                        (d = f.join(",")),
                            (h = (ye.test(e) && c(t.parentNode)) || t);
                    }
                    if (d)
                        try {
                            return K.apply(n, h.querySelectorAll(d)), n;
                        } catch (v) {
                        } finally {
                            a === I && t.removeAttribute("id");
                        }
                }
            }
            return S(e.replace(ae, "$1"), t, n, r);
        }
        function n() {
            function e(n, r) {
                return (
                    t.push(n + " ") > T.cacheLength && delete e[t.shift()],
                    (e[n + " "] = r)
                );
            }
            var t = [];
            return e;
        }
        function r(e) {
            return (e[I] = !0), e;
        }
        function i(e) {
            var t = L.createElement("div");
            try {
                return !!e(t);
            } catch (n) {
                return !1;
            } finally {
                t.parentNode && t.parentNode.removeChild(t), (t = null);
            }
        }
        function o(e, t) {
            for (var n = e.split("|"), r = n.length; r--; )
                T.attrHandle[n[r]] = t;
        }
        function s(e, t) {
            var n = t && e,
                r =
                    n &&
                    1 === e.nodeType &&
                    1 === t.nodeType &&
                    (~t.sourceIndex || V) - (~e.sourceIndex || V);
            if (r) return r;
            if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
            return e ? 1 : -1;
        }
        function a(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e;
            };
        }
        function u(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e;
            };
        }
        function l(e) {
            return r(function (t) {
                return (
                    (t = +t),
                    r(function (n, r) {
                        for (var i, o = e([], n.length, t), s = o.length; s--; )
                            n[(i = o[s])] && (n[i] = !(r[i] = n[i]));
                    })
                );
            });
        }
        function c(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e;
        }
        function f() {}
        function p(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r;
        }
        function d(e, t, n) {
            var r = t.dir,
                i = n && "parentNode" === r,
                o = B++;
            return t.first
                ? function (t, n, o) {
                      for (; (t = t[r]); )
                          if (1 === t.nodeType || i) return e(t, n, o);
                  }
                : function (t, n, s) {
                      var a,
                          u,
                          l,
                          c = [$, o];
                      if (s) {
                          for (; (t = t[r]); )
                              if ((1 === t.nodeType || i) && e(t, n, s))
                                  return !0;
                      } else
                          for (; (t = t[r]); )
                              if (1 === t.nodeType || i) {
                                  if (
                                      ((l = t[I] || (t[I] = {})),
                                      (u =
                                          l[t.uniqueID] ||
                                          (l[t.uniqueID] = {})),
                                      (a = u[r]) && a[0] === $ && a[1] === o)
                                  )
                                      return (c[2] = a[2]);
                                  if (((u[r] = c), (c[2] = e(t, n, s))))
                                      return !0;
                              }
                  };
        }
        function h(e) {
            return e.length > 1
                ? function (t, n, r) {
                      for (var i = e.length; i--; )
                          if (!e[i](t, n, r)) return !1;
                      return !0;
                  }
                : e[0];
        }
        function g(e, n, r) {
            for (var i = 0, o = n.length; i < o; i++) t(e, n[i], r);
            return r;
        }
        function v(e, t, n, r, i) {
            for (var o, s = [], a = 0, u = e.length, l = null != t; a < u; a++)
                (o = e[a]) &&
                    ((n && !n(o, r, i)) || (s.push(o), l && t.push(a)));
            return s;
        }
        function m(e, t, n, i, o, s) {
            return (
                i && !i[I] && (i = m(i)),
                o && !o[I] && (o = m(o, s)),
                r(function (r, s, a, u) {
                    var l,
                        c,
                        f,
                        p = [],
                        d = [],
                        h = s.length,
                        m = r || g(t || "*", a.nodeType ? [a] : a, []),
                        y = !e || (!r && t) ? m : v(m, p, e, a, u),
                        x = n ? (o || (r ? e : h || i) ? [] : s) : y;
                    if ((n && n(y, x, a, u), i))
                        for (l = v(x, d), i(l, [], a, u), c = l.length; c--; )
                            (f = l[c]) && (x[d[c]] = !(y[d[c]] = f));
                    if (r) {
                        if (o || e) {
                            if (o) {
                                for (l = [], c = x.length; c--; )
                                    (f = x[c]) && l.push((y[c] = f));
                                o(null, (x = []), l, u);
                            }
                            for (c = x.length; c--; )
                                (f = x[c]) &&
                                    (l = o ? ee(r, f) : p[c]) > -1 &&
                                    (r[l] = !(s[l] = f));
                        }
                    } else (x = v(x === s ? x.splice(h, x.length) : x)), o ? o(null, s, x, u) : K.apply(s, x);
                })
            );
        }
        function y(e) {
            for (
                var t,
                    n,
                    r,
                    i = e.length,
                    o = T.relative[e[0].type],
                    s = o || T.relative[" "],
                    a = o ? 1 : 0,
                    u = d(
                        function (e) {
                            return e === t;
                        },
                        s,
                        !0
                    ),
                    l = d(
                        function (e) {
                            return ee(t, e) > -1;
                        },
                        s,
                        !0
                    ),
                    c = [
                        function (e, n, r) {
                            var i =
                                (!o && (r || n !== j)) ||
                                ((t = n).nodeType ? u(e, n, r) : l(e, n, r));
                            return (t = null), i;
                        },
                    ];
                a < i;
                a++
            )
                if ((n = T.relative[e[a].type])) c = [d(h(c), n)];
                else {
                    if (
                        ((n = T.filter[e[a].type].apply(null, e[a].matches)),
                        n[I])
                    ) {
                        for (r = ++a; r < i && !T.relative[e[r].type]; r++);
                        return m(
                            a > 1 && h(c),
                            a > 1 &&
                                p(
                                    e
                                        .slice(0, a - 1)
                                        .concat({
                                            value:
                                                " " === e[a - 2].type
                                                    ? "*"
                                                    : "",
                                        })
                                ).replace(ae, "$1"),
                            n,
                            a < r && y(e.slice(a, r)),
                            r < i && y((e = e.slice(r))),
                            r < i && p(e)
                        );
                    }
                    c.push(n);
                }
            return h(c);
        }
        function x(e, n) {
            var i = n.length > 0,
                o = e.length > 0,
                s = function (r, s, a, u, l) {
                    var c,
                        f,
                        p,
                        d = 0,
                        h = "0",
                        g = r && [],
                        m = [],
                        y = j,
                        x = r || (o && T.find.TAG("*", l)),
                        b = ($ += null == y ? 1 : Math.random() || 0.1),
                        w = x.length;
                    for (
                        l && (j = s === L || s || l);
                        h !== w && null != (c = x[h]);
                        h++
                    ) {
                        if (o && c) {
                            for (
                                f = 0,
                                    s ||
                                        c.ownerDocument === L ||
                                        (q(c), (a = !O));
                                (p = e[f++]);

                            )
                                if (p(c, s || L, a)) {
                                    u.push(c);
                                    break;
                                }
                            l && ($ = b);
                        }
                        i && ((c = !p && c) && d--, r && g.push(c));
                    }
                    if (((d += h), i && h !== d)) {
                        for (f = 0; (p = n[f++]); ) p(g, m, s, a);
                        if (r) {
                            if (d > 0)
                                for (; h--; )
                                    g[h] || m[h] || (m[h] = Q.call(u));
                            m = v(m);
                        }
                        K.apply(u, m),
                            l &&
                                !r &&
                                m.length > 0 &&
                                d + n.length > 1 &&
                                t.uniqueSort(u);
                    }
                    return l && (($ = b), (j = y)), g;
                };
            return i ? r(s) : s;
        }
        var b,
            w,
            T,
            C,
            k,
            E,
            N,
            S,
            j,
            D,
            A,
            q,
            L,
            H,
            O,
            F,
            P,
            R,
            M,
            I = "sizzle" + 1 * new Date(),
            W = e.document,
            $ = 0,
            B = 0,
            _ = n(),
            X = n(),
            z = n(),
            U = function (e, t) {
                return e === t && (A = !0), 0;
            },
            V = 1 << 31,
            Y = {}.hasOwnProperty,
            G = [],
            Q = G.pop,
            J = G.push,
            K = G.push,
            Z = G.slice,
            ee = function (e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1;
            },
            te =
                "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ne = "[\\x20\\t\\r\\n\\f]",
            re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            ie =
                "\\[" +
                ne +
                "*(" +
                re +
                ")(?:" +
                ne +
                "*([*^$|!~]?=)" +
                ne +
                "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
                re +
                "))|)" +
                ne +
                "*\\]",
            oe =
                ":(" +
                re +
                ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
                ie +
                ")*)|.*)\\)|)",
            se = new RegExp(ne + "+", "g"),
            ae = new RegExp(
                "^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$",
                "g"
            ),
            ue = new RegExp("^" + ne + "*," + ne + "*"),
            le = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
            ce = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
            fe = new RegExp(oe),
            pe = new RegExp("^" + re + "$"),
            de = {
                ID: new RegExp("^#(" + re + ")"),
                CLASS: new RegExp("^\\.(" + re + ")"),
                TAG: new RegExp("^(" + re + "|[*])"),
                ATTR: new RegExp("^" + ie),
                PSEUDO: new RegExp("^" + oe),
                CHILD: new RegExp(
                    "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                        ne +
                        "*(even|odd|(([+-]|)(\\d*)n|)" +
                        ne +
                        "*(?:([+-]|)" +
                        ne +
                        "*(\\d+)|))" +
                        ne +
                        "*\\)|)",
                    "i"
                ),
                bool: new RegExp("^(?:" + te + ")$", "i"),
                needsContext: new RegExp(
                    "^" +
                        ne +
                        "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                        ne +
                        "*((?:-\\d)?\\d*)" +
                        ne +
                        "*\\)|)(?=[^-]|$)",
                    "i"
                ),
            },
            he = /^(?:input|select|textarea|button)$/i,
            ge = /^h\d$/i,
            ve = /^[^{]+\{\s*\[native \w/,
            me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ye = /[+~]/,
            xe = /'|\\/g,
            be = new RegExp(
                "\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)",
                "ig"
            ),
            we = function (e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n
                    ? t
                    : r < 0
                    ? String.fromCharCode(r + 65536)
                    : String.fromCharCode(
                          (r >> 10) | 55296,
                          (1023 & r) | 56320
                      );
            },
            Te = function () {
                q();
            };
        try {
            K.apply((G = Z.call(W.childNodes)), W.childNodes),
                G[W.childNodes.length].nodeType;
        } catch (Ce) {
            K = {
                apply: G.length
                    ? function (e, t) {
                          J.apply(e, Z.call(t));
                      }
                    : function (e, t) {
                          for (var n = e.length, r = 0; (e[n++] = t[r++]); );
                          e.length = n - 1;
                      },
            };
        }
        (w = t.support = {}),
            (k = t.isXML = function (e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName;
            }),
            (q = t.setDocument = function (e) {
                var t,
                    n,
                    r = e ? e.ownerDocument || e : W;
                return r !== L && 9 === r.nodeType && r.documentElement
                    ? ((L = r),
                      (H = L.documentElement),
                      (O = !k(L)),
                      (n = L.defaultView) &&
                          n.top !== n &&
                          (n.addEventListener
                              ? n.addEventListener("unload", Te, !1)
                              : n.attachEvent && n.attachEvent("onunload", Te)),
                      (w.attributes = i(function (e) {
                          return (
                              (e.className = "i"), !e.getAttribute("className")
                          );
                      })),
                      (w.getElementsByTagName = i(function (e) {
                          return (
                              e.appendChild(L.createComment("")),
                              !e.getElementsByTagName("*").length
                          );
                      })),
                      (w.getElementsByClassName = ve.test(
                          L.getElementsByClassName
                      )),
                      (w.getById = i(function (e) {
                          return (
                              (H.appendChild(e).id = I),
                              !L.getElementsByName ||
                                  !L.getElementsByName(I).length
                          );
                      })),
                      w.getById
                          ? ((T.find.ID = function (e, t) {
                                if (
                                    "undefined" != typeof t.getElementById &&
                                    O
                                ) {
                                    var n = t.getElementById(e);
                                    return n ? [n] : [];
                                }
                            }),
                            (T.filter.ID = function (e) {
                                var t = e.replace(be, we);
                                return function (e) {
                                    return e.getAttribute("id") === t;
                                };
                            }))
                          : (delete T.find.ID,
                            (T.filter.ID = function (e) {
                                var t = e.replace(be, we);
                                return function (e) {
                                    var n =
                                        "undefined" !=
                                            typeof e.getAttributeNode &&
                                        e.getAttributeNode("id");
                                    return n && n.value === t;
                                };
                            })),
                      (T.find.TAG = w.getElementsByTagName
                          ? function (e, t) {
                                return "undefined" !=
                                    typeof t.getElementsByTagName
                                    ? t.getElementsByTagName(e)
                                    : w.qsa
                                    ? t.querySelectorAll(e)
                                    : void 0;
                            }
                          : function (e, t) {
                                var n,
                                    r = [],
                                    i = 0,
                                    o = t.getElementsByTagName(e);
                                if ("*" === e) {
                                    for (; (n = o[i++]); )
                                        1 === n.nodeType && r.push(n);
                                    return r;
                                }
                                return o;
                            }),
                      (T.find.CLASS =
                          w.getElementsByClassName &&
                          function (e, t) {
                              if (
                                  "undefined" !=
                                      typeof t.getElementsByClassName &&
                                  O
                              )
                                  return t.getElementsByClassName(e);
                          }),
                      (P = []),
                      (F = []),
                      (w.qsa = ve.test(L.querySelectorAll)) &&
                          (i(function (e) {
                              (H.appendChild(e).innerHTML =
                                  "<a id='" +
                                  I +
                                  "'></a><select id='" +
                                  I +
                                  "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                                  e.querySelectorAll("[msallowcapture^='']")
                                      .length &&
                                      F.push("[*^$]=" + ne + "*(?:''|\"\")"),
                                  e.querySelectorAll("[selected]").length ||
                                      F.push(
                                          "\\[" + ne + "*(?:value|" + te + ")"
                                      ),
                                  e.querySelectorAll("[id~=" + I + "-]")
                                      .length || F.push("~="),
                                  e.querySelectorAll(":checked").length ||
                                      F.push(":checked"),
                                  e.querySelectorAll("a#" + I + "+*").length ||
                                      F.push(".#.+[+~]");
                          }),
                          i(function (e) {
                              var t = L.createElement("input");
                              t.setAttribute("type", "hidden"),
                                  e.appendChild(t).setAttribute("name", "D"),
                                  e.querySelectorAll("[name=d]").length &&
                                      F.push("name" + ne + "*[*^$|!~]?="),
                                  e.querySelectorAll(":enabled").length ||
                                      F.push(":enabled", ":disabled"),
                                  e.querySelectorAll("*,:x"),
                                  F.push(",.*:");
                          })),
                      (w.matchesSelector = ve.test(
                          (R =
                              H.matches ||
                              H.webkitMatchesSelector ||
                              H.mozMatchesSelector ||
                              H.oMatchesSelector ||
                              H.msMatchesSelector)
                      )) &&
                          i(function (e) {
                              (w.disconnectedMatch = R.call(e, "div")),
                                  R.call(e, "[s!='']:x"),
                                  P.push("!=", oe);
                          }),
                      (F = F.length && new RegExp(F.join("|"))),
                      (P = P.length && new RegExp(P.join("|"))),
                      (t = ve.test(H.compareDocumentPosition)),
                      (M =
                          t || ve.test(H.contains)
                              ? function (e, t) {
                                    var n =
                                            9 === e.nodeType
                                                ? e.documentElement
                                                : e,
                                        r = t && t.parentNode;
                                    return (
                                        e === r ||
                                        !(
                                            !r ||
                                            1 !== r.nodeType ||
                                            !(n.contains
                                                ? n.contains(r)
                                                : e.compareDocumentPosition &&
                                                  16 &
                                                      e.compareDocumentPosition(
                                                          r
                                                      ))
                                        )
                                    );
                                }
                              : function (e, t) {
                                    if (t)
                                        for (; (t = t.parentNode); )
                                            if (t === e) return !0;
                                    return !1;
                                }),
                      (U = t
                          ? function (e, t) {
                                if (e === t) return (A = !0), 0;
                                var n =
                                    !e.compareDocumentPosition -
                                    !t.compareDocumentPosition;
                                return n
                                    ? n
                                    : ((n =
                                          (e.ownerDocument || e) ===
                                          (t.ownerDocument || t)
                                              ? e.compareDocumentPosition(t)
                                              : 1),
                                      1 & n ||
                                      (!w.sortDetached &&
                                          t.compareDocumentPosition(e) === n)
                                          ? e === L ||
                                            (e.ownerDocument === W && M(W, e))
                                              ? -1
                                              : t === L ||
                                                (t.ownerDocument === W &&
                                                    M(W, t))
                                              ? 1
                                              : D
                                              ? ee(D, e) - ee(D, t)
                                              : 0
                                          : 4 & n
                                          ? -1
                                          : 1);
                            }
                          : function (e, t) {
                                if (e === t) return (A = !0), 0;
                                var n,
                                    r = 0,
                                    i = e.parentNode,
                                    o = t.parentNode,
                                    a = [e],
                                    u = [t];
                                if (!i || !o)
                                    return e === L
                                        ? -1
                                        : t === L
                                        ? 1
                                        : i
                                        ? -1
                                        : o
                                        ? 1
                                        : D
                                        ? ee(D, e) - ee(D, t)
                                        : 0;
                                if (i === o) return s(e, t);
                                for (n = e; (n = n.parentNode); ) a.unshift(n);
                                for (n = t; (n = n.parentNode); ) u.unshift(n);
                                for (; a[r] === u[r]; ) r++;
                                return r
                                    ? s(a[r], u[r])
                                    : a[r] === W
                                    ? -1
                                    : u[r] === W
                                    ? 1
                                    : 0;
                            }),
                      L)
                    : L;
            }),
            (t.matches = function (e, n) {
                return t(e, null, null, n);
            }),
            (t.matchesSelector = function (e, n) {
                if (
                    ((e.ownerDocument || e) !== L && q(e),
                    (n = n.replace(ce, "='$1']")),
                    w.matchesSelector &&
                        O &&
                        !z[n + " "] &&
                        (!P || !P.test(n)) &&
                        (!F || !F.test(n)))
                )
                    try {
                        var r = R.call(e, n);
                        if (
                            r ||
                            w.disconnectedMatch ||
                            (e.document && 11 !== e.document.nodeType)
                        )
                            return r;
                    } catch (i) {}
                return t(n, L, null, [e]).length > 0;
            }),
            (t.contains = function (e, t) {
                return (e.ownerDocument || e) !== L && q(e), M(e, t);
            }),
            (t.attr = function (e, t) {
                (e.ownerDocument || e) !== L && q(e);
                var n = T.attrHandle[t.toLowerCase()],
                    r =
                        n && Y.call(T.attrHandle, t.toLowerCase())
                            ? n(e, t, !O)
                            : void 0;
                return void 0 !== r
                    ? r
                    : w.attributes || !O
                    ? e.getAttribute(t)
                    : (r = e.getAttributeNode(t)) && r.specified
                    ? r.value
                    : null;
            }),
            (t.error = function (e) {
                throw new Error("Syntax error, unrecognized expression: " + e);
            }),
            (t.uniqueSort = function (e) {
                var t,
                    n = [],
                    r = 0,
                    i = 0;
                if (
                    ((A = !w.detectDuplicates),
                    (D = !w.sortStable && e.slice(0)),
                    e.sort(U),
                    A)
                ) {
                    for (; (t = e[i++]); ) t === e[i] && (r = n.push(i));
                    for (; r--; ) e.splice(n[r], 1);
                }
                return (D = null), e;
            }),
            (C = t.getText = function (e) {
                var t,
                    n = "",
                    r = 0,
                    i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent)
                            return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += C(e);
                    } else if (3 === i || 4 === i) return e.nodeValue;
                } else for (; (t = e[r++]); ) n += C(t);
                return n;
            }),
            (T = t.selectors = {
                cacheLength: 50,
                createPseudo: r,
                match: de,
                attrHandle: {},
                find: {},
                relative: {
                    ">": { dir: "parentNode", first: !0 },
                    " ": { dir: "parentNode" },
                    "+": { dir: "previousSibling", first: !0 },
                    "~": { dir: "previousSibling" },
                },
                preFilter: {
                    ATTR: function (e) {
                        return (
                            (e[1] = e[1].replace(be, we)),
                            (e[3] = (e[3] || e[4] || e[5] || "").replace(
                                be,
                                we
                            )),
                            "~=" === e[2] && (e[3] = " " + e[3] + " "),
                            e.slice(0, 4)
                        );
                    },
                    CHILD: function (e) {
                        return (
                            (e[1] = e[1].toLowerCase()),
                            "nth" === e[1].slice(0, 3)
                                ? (e[3] || t.error(e[0]),
                                  (e[4] = +(e[4]
                                      ? e[5] + (e[6] || 1)
                                      : 2 *
                                        ("even" === e[3] || "odd" === e[3]))),
                                  (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                                : e[3] && t.error(e[0]),
                            e
                        );
                    },
                    PSEUDO: function (e) {
                        var t,
                            n = !e[6] && e[2];
                        return de.CHILD.test(e[0])
                            ? null
                            : (e[3]
                                  ? (e[2] = e[4] || e[5] || "")
                                  : n &&
                                    fe.test(n) &&
                                    (t = E(n, !0)) &&
                                    (t =
                                        n.indexOf(")", n.length - t) -
                                        n.length) &&
                                    ((e[0] = e[0].slice(0, t)),
                                    (e[2] = n.slice(0, t))),
                              e.slice(0, 3));
                    },
                },
                filter: {
                    TAG: function (e) {
                        var t = e.replace(be, we).toLowerCase();
                        return "*" === e
                            ? function () {
                                  return !0;
                              }
                            : function (e) {
                                  return (
                                      e.nodeName &&
                                      e.nodeName.toLowerCase() === t
                                  );
                              };
                    },
                    CLASS: function (e) {
                        var t = _[e + " "];
                        return (
                            t ||
                            ((t = new RegExp(
                                "(^|" + ne + ")" + e + "(" + ne + "|$)"
                            )) &&
                                _(e, function (e) {
                                    return t.test(
                                        ("string" == typeof e.className &&
                                            e.className) ||
                                            ("undefined" !=
                                                typeof e.getAttribute &&
                                                e.getAttribute("class")) ||
                                            ""
                                    );
                                }))
                        );
                    },
                    ATTR: function (e, n, r) {
                        return function (i) {
                            var o = t.attr(i, e);
                            return null == o
                                ? "!=" === n
                                : !n ||
                                      ((o += ""),
                                      "=" === n
                                          ? o === r
                                          : "!=" === n
                                          ? o !== r
                                          : "^=" === n
                                          ? r && 0 === o.indexOf(r)
                                          : "*=" === n
                                          ? r && o.indexOf(r) > -1
                                          : "$=" === n
                                          ? r && o.slice(-r.length) === r
                                          : "~=" === n
                                          ? (
                                                " " +
                                                o.replace(se, " ") +
                                                " "
                                            ).indexOf(r) > -1
                                          : "|=" === n &&
                                            (o === r ||
                                                o.slice(0, r.length + 1) ===
                                                    r + "-"));
                        };
                    },
                    CHILD: function (e, t, n, r, i) {
                        var o = "nth" !== e.slice(0, 3),
                            s = "last" !== e.slice(-4),
                            a = "of-type" === t;
                        return 1 === r && 0 === i
                            ? function (e) {
                                  return !!e.parentNode;
                              }
                            : function (t, n, u) {
                                  var l,
                                      c,
                                      f,
                                      p,
                                      d,
                                      h,
                                      g =
                                          o !== s
                                              ? "nextSibling"
                                              : "previousSibling",
                                      v = t.parentNode,
                                      m = a && t.nodeName.toLowerCase(),
                                      y = !u && !a,
                                      x = !1;
                                  if (v) {
                                      if (o) {
                                          for (; g; ) {
                                              for (p = t; (p = p[g]); )
                                                  if (
                                                      a
                                                          ? p.nodeName.toLowerCase() ===
                                                            m
                                                          : 1 === p.nodeType
                                                  )
                                                      return !1;
                                              h = g =
                                                  "only" === e &&
                                                  !h &&
                                                  "nextSibling";
                                          }
                                          return !0;
                                      }
                                      if (
                                          ((h = [
                                              s ? v.firstChild : v.lastChild,
                                          ]),
                                          s && y)
                                      ) {
                                          for (
                                              p = v,
                                                  f = p[I] || (p[I] = {}),
                                                  c =
                                                      f[p.uniqueID] ||
                                                      (f[p.uniqueID] = {}),
                                                  l = c[e] || [],
                                                  d = l[0] === $ && l[1],
                                                  x = d && l[2],
                                                  p = d && v.childNodes[d];
                                              (p =
                                                  (++d && p && p[g]) ||
                                                  (x = d = 0) ||
                                                  h.pop());

                                          )
                                              if (
                                                  1 === p.nodeType &&
                                                  ++x &&
                                                  p === t
                                              ) {
                                                  c[e] = [$, d, x];
                                                  break;
                                              }
                                      } else if (
                                          (y &&
                                              ((p = t),
                                              (f = p[I] || (p[I] = {})),
                                              (c =
                                                  f[p.uniqueID] ||
                                                  (f[p.uniqueID] = {})),
                                              (l = c[e] || []),
                                              (d = l[0] === $ && l[1]),
                                              (x = d)),
                                          x === !1)
                                      )
                                          for (
                                              ;
                                              (p =
                                                  (++d && p && p[g]) ||
                                                  (x = d = 0) ||
                                                  h.pop()) &&
                                              ((a
                                                  ? p.nodeName.toLowerCase() !==
                                                    m
                                                  : 1 !== p.nodeType) ||
                                                  !++x ||
                                                  (y &&
                                                      ((f =
                                                          p[I] || (p[I] = {})),
                                                      (c =
                                                          f[p.uniqueID] ||
                                                          (f[p.uniqueID] = {})),
                                                      (c[e] = [$, x])),
                                                  p !== t));

                                          );
                                      return (
                                          (x -= i),
                                          x === r || (x % r === 0 && x / r >= 0)
                                      );
                                  }
                              };
                    },
                    PSEUDO: function (e, n) {
                        var i,
                            o =
                                T.pseudos[e] ||
                                T.setFilters[e.toLowerCase()] ||
                                t.error("unsupported pseudo: " + e);
                        return o[I]
                            ? o(n)
                            : o.length > 1
                            ? ((i = [e, e, "", n]),
                              T.setFilters.hasOwnProperty(e.toLowerCase())
                                  ? r(function (e, t) {
                                        for (
                                            var r, i = o(e, n), s = i.length;
                                            s--;

                                        )
                                            (r = ee(e, i[s])),
                                                (e[r] = !(t[r] = i[s]));
                                    })
                                  : function (e) {
                                        return o(e, 0, i);
                                    })
                            : o;
                    },
                },
                pseudos: {
                    not: r(function (e) {
                        var t = [],
                            n = [],
                            i = N(e.replace(ae, "$1"));
                        return i[I]
                            ? r(function (e, t, n, r) {
                                  for (
                                      var o,
                                          s = i(e, null, r, []),
                                          a = e.length;
                                      a--;

                                  )
                                      (o = s[a]) && (e[a] = !(t[a] = o));
                              })
                            : function (e, r, o) {
                                  return (
                                      (t[0] = e),
                                      i(t, null, o, n),
                                      (t[0] = null),
                                      !n.pop()
                                  );
                              };
                    }),
                    has: r(function (e) {
                        return function (n) {
                            return t(e, n).length > 0;
                        };
                    }),
                    contains: r(function (e) {
                        return (
                            (e = e.replace(be, we)),
                            function (t) {
                                return (
                                    (
                                        t.textContent ||
                                        t.innerText ||
                                        C(t)
                                    ).indexOf(e) > -1
                                );
                            }
                        );
                    }),
                    lang: r(function (e) {
                        return (
                            pe.test(e || "") ||
                                t.error("unsupported lang: " + e),
                            (e = e.replace(be, we).toLowerCase()),
                            function (t) {
                                var n;
                                do
                                    if (
                                        (n = O
                                            ? t.lang
                                            : t.getAttribute("xml:lang") ||
                                              t.getAttribute("lang"))
                                    )
                                        return (
                                            (n = n.toLowerCase()),
                                            n === e || 0 === n.indexOf(e + "-")
                                        );
                                while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1;
                            }
                        );
                    }),
                    target: function (t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id;
                    },
                    root: function (e) {
                        return e === H;
                    },
                    focus: function (e) {
                        return (
                            e === L.activeElement &&
                            (!L.hasFocus || L.hasFocus()) &&
                            !!(e.type || e.href || ~e.tabIndex)
                        );
                    },
                    enabled: function (e) {
                        return e.disabled === !1;
                    },
                    disabled: function (e) {
                        return e.disabled === !0;
                    },
                    checked: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return (
                            ("input" === t && !!e.checked) ||
                            ("option" === t && !!e.selected)
                        );
                    },
                    selected: function (e) {
                        return (
                            e.parentNode && e.parentNode.selectedIndex,
                            e.selected === !0
                        );
                    },
                    empty: function (e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0;
                    },
                    parent: function (e) {
                        return !T.pseudos.empty(e);
                    },
                    header: function (e) {
                        return ge.test(e.nodeName);
                    },
                    input: function (e) {
                        return he.test(e.nodeName);
                    },
                    button: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return (
                            ("input" === t && "button" === e.type) ||
                            "button" === t
                        );
                    },
                    text: function (e) {
                        var t;
                        return (
                            "input" === e.nodeName.toLowerCase() &&
                            "text" === e.type &&
                            (null == (t = e.getAttribute("type")) ||
                                "text" === t.toLowerCase())
                        );
                    },
                    first: l(function () {
                        return [0];
                    }),
                    last: l(function (e, t) {
                        return [t - 1];
                    }),
                    eq: l(function (e, t, n) {
                        return [n < 0 ? n + t : n];
                    }),
                    even: l(function (e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e;
                    }),
                    odd: l(function (e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e;
                    }),
                    lt: l(function (e, t, n) {
                        for (var r = n < 0 ? n + t : n; --r >= 0; ) e.push(r);
                        return e;
                    }),
                    gt: l(function (e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                        return e;
                    }),
                },
            }),
            (T.pseudos.nth = T.pseudos.eq);
        for (b in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0,
        })
            T.pseudos[b] = a(b);
        for (b in { submit: !0, reset: !0 }) T.pseudos[b] = u(b);
        return (
            (f.prototype = T.filters = T.pseudos),
            (T.setFilters = new f()),
            (E = t.tokenize = function (e, n) {
                var r,
                    i,
                    o,
                    s,
                    a,
                    u,
                    l,
                    c = X[e + " "];
                if (c) return n ? 0 : c.slice(0);
                for (a = e, u = [], l = T.preFilter; a; ) {
                    (r && !(i = ue.exec(a))) ||
                        (i && (a = a.slice(i[0].length) || a),
                        u.push((o = []))),
                        (r = !1),
                        (i = le.exec(a)) &&
                            ((r = i.shift()),
                            o.push({ value: r, type: i[0].replace(ae, " ") }),
                            (a = a.slice(r.length)));
                    for (s in T.filter)
                        !(i = de[s].exec(a)) ||
                            (l[s] && !(i = l[s](i))) ||
                            ((r = i.shift()),
                            o.push({ value: r, type: s, matches: i }),
                            (a = a.slice(r.length)));
                    if (!r) break;
                }
                return n ? a.length : a ? t.error(e) : X(e, u).slice(0);
            }),
            (N = t.compile = function (e, t) {
                var n,
                    r = [],
                    i = [],
                    o = z[e + " "];
                if (!o) {
                    for (t || (t = E(e)), n = t.length; n--; )
                        (o = y(t[n])), o[I] ? r.push(o) : i.push(o);
                    (o = z(e, x(i, r))), (o.selector = e);
                }
                return o;
            }),
            (S = t.select = function (e, t, n, r) {
                var i,
                    o,
                    s,
                    a,
                    u,
                    l = "function" == typeof e && e,
                    f = !r && E((e = l.selector || e));
                if (((n = n || []), 1 === f.length)) {
                    if (
                        ((o = f[0] = f[0].slice(0)),
                        o.length > 2 &&
                            "ID" === (s = o[0]).type &&
                            w.getById &&
                            9 === t.nodeType &&
                            O &&
                            T.relative[o[1].type])
                    ) {
                        if (
                            ((t = (T.find.ID(s.matches[0].replace(be, we), t) ||
                                [])[0]),
                            !t)
                        )
                            return n;
                        l && (t = t.parentNode),
                            (e = e.slice(o.shift().value.length));
                    }
                    for (
                        i = de.needsContext.test(e) ? 0 : o.length;
                        i-- && ((s = o[i]), !T.relative[(a = s.type)]);

                    )
                        if (
                            (u = T.find[a]) &&
                            (r = u(
                                s.matches[0].replace(be, we),
                                (ye.test(o[0].type) && c(t.parentNode)) || t
                            ))
                        ) {
                            if ((o.splice(i, 1), (e = r.length && p(o)), !e))
                                return K.apply(n, r), n;
                            break;
                        }
                }
                return (
                    (l || N(e, f))(
                        r,
                        t,
                        !O,
                        n,
                        !t || (ye.test(e) && c(t.parentNode)) || t
                    ),
                    n
                );
            }),
            (w.sortStable = I.split("").sort(U).join("") === I),
            (w.detectDuplicates = !!A),
            q(),
            (w.sortDetached = i(function (e) {
                return 1 & e.compareDocumentPosition(L.createElement("div"));
            })),
            i(function (e) {
                return (
                    (e.innerHTML = "<a href='#'></a>"),
                    "#" === e.firstChild.getAttribute("href")
                );
            }) ||
                o("type|href|height|width", function (e, t, n) {
                    if (!n)
                        return e.getAttribute(
                            t,
                            "type" === t.toLowerCase() ? 1 : 2
                        );
                }),
            (w.attributes &&
                i(function (e) {
                    return (
                        (e.innerHTML = "<input/>"),
                        e.firstChild.setAttribute("value", ""),
                        "" === e.firstChild.getAttribute("value")
                    );
                })) ||
                o("value", function (e, t, n) {
                    if (!n && "input" === e.nodeName.toLowerCase())
                        return e.defaultValue;
                }),
            i(function (e) {
                return null == e.getAttribute("disabled");
            }) ||
                o(te, function (e, t, n) {
                    var r;
                    if (!n)
                        return e[t] === !0
                            ? t.toLowerCase()
                            : (r = e.getAttributeNode(t)) && r.specified
                            ? r.value
                            : null;
                }),
            t
        );
    })(e);
    (oe.find = ce),
        (oe.expr = ce.selectors),
        (oe.expr[":"] = oe.expr.pseudos),
        (oe.uniqueSort = oe.unique = ce.uniqueSort),
        (oe.text = ce.getText),
        (oe.isXMLDoc = ce.isXML),
        (oe.contains = ce.contains);
    var fe = function (e, t, n) {
            for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
                if (1 === e.nodeType) {
                    if (i && oe(e).is(n)) break;
                    r.push(e);
                }
            return r;
        },
        pe = function (e, t) {
            for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
            return n;
        },
        de = oe.expr.match.needsContext,
        he = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        ge = /^.[^:#\[\.,]*$/;
    (oe.filter = function (e, t, n) {
        var r = t[0];
        return (
            n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === r.nodeType
                ? oe.find.matchesSelector(r, e)
                    ? [r]
                    : []
                : oe.find.matches(
                      e,
                      oe.grep(t, function (e) {
                          return 1 === e.nodeType;
                      })
                  )
        );
    }),
        oe.fn.extend({
            find: function (e) {
                var t,
                    n = this.length,
                    r = [],
                    i = this;
                if ("string" != typeof e)
                    return this.pushStack(
                        oe(e).filter(function () {
                            for (t = 0; t < n; t++)
                                if (oe.contains(i[t], this)) return !0;
                        })
                    );
                for (t = 0; t < n; t++) oe.find(e, i[t], r);
                return (
                    (r = this.pushStack(n > 1 ? oe.unique(r) : r)),
                    (r.selector = this.selector ? this.selector + " " + e : e),
                    r
                );
            },
            filter: function (e) {
                return this.pushStack(r(this, e || [], !1));
            },
            not: function (e) {
                return this.pushStack(r(this, e || [], !0));
            },
            is: function (e) {
                return !!r(
                    this,
                    "string" == typeof e && de.test(e) ? oe(e) : e || [],
                    !1
                ).length;
            },
        });
    var ve,
        me = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        ye = (oe.fn.init = function (e, t, n) {
            var r, i;
            if (!e) return this;
            if (((n = n || ve), "string" == typeof e)) {
                if (
                    ((r =
                        "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
                            ? [null, e, null]
                            : me.exec(e)),
                    !r || (!r[1] && t))
                )
                    return !t || t.jquery
                        ? (t || n).find(e)
                        : this.constructor(t).find(e);
                if (r[1]) {
                    if (
                        ((t = t instanceof oe ? t[0] : t),
                        oe.merge(
                            this,
                            oe.parseHTML(
                                r[1],
                                t && t.nodeType ? t.ownerDocument || t : G,
                                !0
                            )
                        ),
                        he.test(r[1]) && oe.isPlainObject(t))
                    )
                        for (r in t)
                            oe.isFunction(this[r])
                                ? this[r](t[r])
                                : this.attr(r, t[r]);
                    return this;
                }
                return (
                    (i = G.getElementById(r[2])),
                    i && i.parentNode && ((this.length = 1), (this[0] = i)),
                    (this.context = G),
                    (this.selector = e),
                    this
                );
            }
            return e.nodeType
                ? ((this.context = this[0] = e), (this.length = 1), this)
                : oe.isFunction(e)
                ? void 0 !== n.ready
                    ? n.ready(e)
                    : e(oe)
                : (void 0 !== e.selector &&
                      ((this.selector = e.selector),
                      (this.context = e.context)),
                  oe.makeArray(e, this));
        });
    (ye.prototype = oe.fn), (ve = oe(G));
    var xe = /^(?:parents|prev(?:Until|All))/,
        be = { children: !0, contents: !0, next: !0, prev: !0 };
    oe.fn.extend({
        has: function (e) {
            var t = oe(e, this),
                n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++)
                    if (oe.contains(this, t[e])) return !0;
            });
        },
        closest: function (e, t) {
            for (
                var n,
                    r = 0,
                    i = this.length,
                    o = [],
                    s =
                        de.test(e) || "string" != typeof e
                            ? oe(e, t || this.context)
                            : 0;
                r < i;
                r++
            )
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (
                        n.nodeType < 11 &&
                        (s
                            ? s.index(n) > -1
                            : 1 === n.nodeType && oe.find.matchesSelector(n, e))
                    ) {
                        o.push(n);
                        break;
                    }
            return this.pushStack(o.length > 1 ? oe.uniqueSort(o) : o);
        },
        index: function (e) {
            return e
                ? "string" == typeof e
                    ? Z.call(oe(e), this[0])
                    : Z.call(this, e.jquery ? e[0] : e)
                : this[0] && this[0].parentNode
                ? this.first().prevAll().length
                : -1;
        },
        add: function (e, t) {
            return this.pushStack(
                oe.uniqueSort(oe.merge(this.get(), oe(e, t)))
            );
        },
        addBack: function (e) {
            return this.add(
                null == e ? this.prevObject : this.prevObject.filter(e)
            );
        },
    }),
        oe.each(
            {
                parent: function (e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null;
                },
                parents: function (e) {
                    return fe(e, "parentNode");
                },
                parentsUntil: function (e, t, n) {
                    return fe(e, "parentNode", n);
                },
                next: function (e) {
                    return i(e, "nextSibling");
                },
                prev: function (e) {
                    return i(e, "previousSibling");
                },
                nextAll: function (e) {
                    return fe(e, "nextSibling");
                },
                prevAll: function (e) {
                    return fe(e, "previousSibling");
                },
                nextUntil: function (e, t, n) {
                    return fe(e, "nextSibling", n);
                },
                prevUntil: function (e, t, n) {
                    return fe(e, "previousSibling", n);
                },
                siblings: function (e) {
                    return pe((e.parentNode || {}).firstChild, e);
                },
                children: function (e) {
                    return pe(e.firstChild);
                },
                contents: function (e) {
                    return e.contentDocument || oe.merge([], e.childNodes);
                },
            },
            function (e, t) {
                oe.fn[e] = function (n, r) {
                    var i = oe.map(this, t, n);
                    return (
                        "Until" !== e.slice(-5) && (r = n),
                        r && "string" == typeof r && (i = oe.filter(r, i)),
                        this.length > 1 &&
                            (be[e] || oe.uniqueSort(i),
                            xe.test(e) && i.reverse()),
                        this.pushStack(i)
                    );
                };
            }
        );
    var we = /\S+/g;
    (oe.Callbacks = function (e) {
        e = "string" == typeof e ? o(e) : oe.extend({}, e);
        var t,
            n,
            r,
            i,
            s = [],
            a = [],
            u = -1,
            l = function () {
                for (i = e.once, r = t = !0; a.length; u = -1)
                    for (n = a.shift(); ++u < s.length; )
                        s[u].apply(n[0], n[1]) === !1 &&
                            e.stopOnFalse &&
                            ((u = s.length), (n = !1));
                e.memory || (n = !1), (t = !1), i && (s = n ? [] : "");
            },
            c = {
                add: function () {
                    return (
                        s &&
                            (n && !t && ((u = s.length - 1), a.push(n)),
                            (function r(t) {
                                oe.each(t, function (t, n) {
                                    oe.isFunction(n)
                                        ? (e.unique && c.has(n)) || s.push(n)
                                        : n &&
                                          n.length &&
                                          "string" !== oe.type(n) &&
                                          r(n);
                                });
                            })(arguments),
                            n && !t && l()),
                        this
                    );
                },
                remove: function () {
                    return (
                        oe.each(arguments, function (e, t) {
                            for (var n; (n = oe.inArray(t, s, n)) > -1; )
                                s.splice(n, 1), n <= u && u--;
                        }),
                        this
                    );
                },
                has: function (e) {
                    return e ? oe.inArray(e, s) > -1 : s.length > 0;
                },
                empty: function () {
                    return s && (s = []), this;
                },
                disable: function () {
                    return (i = a = []), (s = n = ""), this;
                },
                disabled: function () {
                    return !s;
                },
                lock: function () {
                    return (i = a = []), n || (s = n = ""), this;
                },
                locked: function () {
                    return !!i;
                },
                fireWith: function (e, n) {
                    return (
                        i ||
                            ((n = n || []),
                            (n = [e, n.slice ? n.slice() : n]),
                            a.push(n),
                            t || l()),
                        this
                    );
                },
                fire: function () {
                    return c.fireWith(this, arguments), this;
                },
                fired: function () {
                    return !!r;
                },
            };
        return c;
    }),
        oe.extend({
            Deferred: function (e) {
                var t = [
                        [
                            "resolve",
                            "done",
                            oe.Callbacks("once memory"),
                            "resolved",
                        ],
                        [
                            "reject",
                            "fail",
                            oe.Callbacks("once memory"),
                            "rejected",
                        ],
                        ["notify", "progress", oe.Callbacks("memory")],
                    ],
                    n = "pending",
                    r = {
                        state: function () {
                            return n;
                        },
                        always: function () {
                            return i.done(arguments).fail(arguments), this;
                        },
                        then: function () {
                            var e = arguments;
                            return oe
                                .Deferred(function (n) {
                                    oe.each(t, function (t, o) {
                                        var s = oe.isFunction(e[t]) && e[t];
                                        i[o[1]](function () {
                                            var e =
                                                s && s.apply(this, arguments);
                                            e && oe.isFunction(e.promise)
                                                ? e
                                                      .promise()
                                                      .progress(n.notify)
                                                      .done(n.resolve)
                                                      .fail(n.reject)
                                                : n[o[0] + "With"](
                                                      this === r
                                                          ? n.promise()
                                                          : this,
                                                      s ? [e] : arguments
                                                  );
                                        });
                                    }),
                                        (e = null);
                                })
                                .promise();
                        },
                        promise: function (e) {
                            return null != e ? oe.extend(e, r) : r;
                        },
                    },
                    i = {};
                return (
                    (r.pipe = r.then),
                    oe.each(t, function (e, o) {
                        var s = o[2],
                            a = o[3];
                        (r[o[1]] = s.add),
                            a &&
                                s.add(
                                    function () {
                                        n = a;
                                    },
                                    t[1 ^ e][2].disable,
                                    t[2][2].lock
                                ),
                            (i[o[0]] = function () {
                                return (
                                    i[o[0] + "With"](
                                        this === i ? r : this,
                                        arguments
                                    ),
                                    this
                                );
                            }),
                            (i[o[0] + "With"] = s.fireWith);
                    }),
                    r.promise(i),
                    e && e.call(i, i),
                    i
                );
            },
            when: function (e) {
                var t,
                    n,
                    r,
                    i = 0,
                    o = Q.call(arguments),
                    s = o.length,
                    a = 1 !== s || (e && oe.isFunction(e.promise)) ? s : 0,
                    u = 1 === a ? e : oe.Deferred(),
                    l = function (e, n, r) {
                        return function (i) {
                            (n[e] = this),
                                (r[e] =
                                    arguments.length > 1
                                        ? Q.call(arguments)
                                        : i),
                                r === t
                                    ? u.notifyWith(n, r)
                                    : --a || u.resolveWith(n, r);
                        };
                    };
                if (s > 1)
                    for (
                        t = new Array(s), n = new Array(s), r = new Array(s);
                        i < s;
                        i++
                    )
                        o[i] && oe.isFunction(o[i].promise)
                            ? o[i]
                                  .promise()
                                  .progress(l(i, n, t))
                                  .done(l(i, r, o))
                                  .fail(u.reject)
                            : --a;
                return a || u.resolveWith(r, o), u.promise();
            },
        });
    var Te;
    (oe.fn.ready = function (e) {
        return oe.ready.promise().done(e), this;
    }),
        oe.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function (e) {
                e ? oe.readyWait++ : oe.ready(!0);
            },
            ready: function (e) {
                (e === !0 ? --oe.readyWait : oe.isReady) ||
                    ((oe.isReady = !0),
                    (e !== !0 && --oe.readyWait > 0) ||
                        (Te.resolveWith(G, [oe]),
                        oe.fn.triggerHandler &&
                            (oe(G).triggerHandler("ready"),
                            oe(G).off("ready"))));
            },
        }),
        (oe.ready.promise = function (t) {
            return (
                Te ||
                    ((Te = oe.Deferred()),
                    "complete" === G.readyState ||
                    ("loading" !== G.readyState && !G.documentElement.doScroll)
                        ? e.setTimeout(oe.ready)
                        : (G.addEventListener("DOMContentLoaded", s),
                          e.addEventListener("load", s))),
                Te.promise(t)
            );
        }),
        oe.ready.promise();
    var Ce = function (e, t, n, r, i, o, s) {
            var a = 0,
                u = e.length,
                l = null == n;
            if ("object" === oe.type(n)) {
                i = !0;
                for (a in n) Ce(e, t, a, n[a], !0, o, s);
            } else if (
                void 0 !== r &&
                ((i = !0),
                oe.isFunction(r) || (s = !0),
                l &&
                    (s
                        ? (t.call(e, r), (t = null))
                        : ((l = t),
                          (t = function (e, t, n) {
                              return l.call(oe(e), n);
                          }))),
                t)
            )
                for (; a < u; a++)
                    t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
        },
        ke = function (e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
        };
    (a.uid = 1),
        (a.prototype = {
            register: function (e, t) {
                var n = t || {};
                return (
                    e.nodeType
                        ? (e[this.expando] = n)
                        : Object.defineProperty(e, this.expando, {
                              value: n,
                              writable: !0,
                              configurable: !0,
                          }),
                    e[this.expando]
                );
            },
            cache: function (e) {
                if (!ke(e)) return {};
                var t = e[this.expando];
                return (
                    t ||
                        ((t = {}),
                        ke(e) &&
                            (e.nodeType
                                ? (e[this.expando] = t)
                                : Object.defineProperty(e, this.expando, {
                                      value: t,
                                      configurable: !0,
                                  }))),
                    t
                );
            },
            set: function (e, t, n) {
                var r,
                    i = this.cache(e);
                if ("string" == typeof t) i[t] = n;
                else for (r in t) i[r] = t[r];
                return i;
            },
            get: function (e, t) {
                return void 0 === t
                    ? this.cache(e)
                    : e[this.expando] && e[this.expando][t];
            },
            access: function (e, t, n) {
                var r;
                return void 0 === t ||
                    (t && "string" == typeof t && void 0 === n)
                    ? ((r = this.get(e, t)),
                      void 0 !== r ? r : this.get(e, oe.camelCase(t)))
                    : (this.set(e, t, n), void 0 !== n ? n : t);
            },
            remove: function (e, t) {
                var n,
                    r,
                    i,
                    o = e[this.expando];
                if (void 0 !== o) {
                    if (void 0 === t) this.register(e);
                    else {
                        oe.isArray(t)
                            ? (r = t.concat(t.map(oe.camelCase)))
                            : ((i = oe.camelCase(t)),
                              t in o
                                  ? (r = [t, i])
                                  : ((r = i),
                                    (r = r in o ? [r] : r.match(we) || []))),
                            (n = r.length);
                        for (; n--; ) delete o[r[n]];
                    }
                    (void 0 === t || oe.isEmptyObject(o)) &&
                        (e.nodeType
                            ? (e[this.expando] = void 0)
                            : delete e[this.expando]);
                }
            },
            hasData: function (e) {
                var t = e[this.expando];
                return void 0 !== t && !oe.isEmptyObject(t);
            },
        });
    var Ee = new a(),
        Ne = new a(),
        Se = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        je = /[A-Z]/g;
    oe.extend({
        hasData: function (e) {
            return Ne.hasData(e) || Ee.hasData(e);
        },
        data: function (e, t, n) {
            return Ne.access(e, t, n);
        },
        removeData: function (e, t) {
            Ne.remove(e, t);
        },
        _data: function (e, t, n) {
            return Ee.access(e, t, n);
        },
        _removeData: function (e, t) {
            Ee.remove(e, t);
        },
    }),
        oe.fn.extend({
            data: function (e, t) {
                var n,
                    r,
                    i,
                    o = this[0],
                    s = o && o.attributes;
                if (void 0 === e) {
                    if (
                        this.length &&
                        ((i = Ne.get(o)),
                        1 === o.nodeType && !Ee.get(o, "hasDataAttrs"))
                    ) {
                        for (n = s.length; n--; )
                            s[n] &&
                                ((r = s[n].name),
                                0 === r.indexOf("data-") &&
                                    ((r = oe.camelCase(r.slice(5))),
                                    u(o, r, i[r])));
                        Ee.set(o, "hasDataAttrs", !0);
                    }
                    return i;
                }
                return "object" == typeof e
                    ? this.each(function () {
                          Ne.set(this, e);
                      })
                    : Ce(
                          this,
                          function (t) {
                              var n, r;
                              if (o && void 0 === t) {
                                  if (
                                      ((n =
                                          Ne.get(o, e) ||
                                          Ne.get(
                                              o,
                                              e.replace(je, "-$&").toLowerCase()
                                          )),
                                      void 0 !== n)
                                  )
                                      return n;
                                  if (
                                      ((r = oe.camelCase(e)),
                                      (n = Ne.get(o, r)),
                                      void 0 !== n)
                                  )
                                      return n;
                                  if (((n = u(o, r, void 0)), void 0 !== n))
                                      return n;
                              } else
                                  (r = oe.camelCase(e)),
                                      this.each(function () {
                                          var n = Ne.get(this, r);
                                          Ne.set(this, r, t),
                                              e.indexOf("-") > -1 &&
                                                  void 0 !== n &&
                                                  Ne.set(this, e, t);
                                      });
                          },
                          null,
                          t,
                          arguments.length > 1,
                          null,
                          !0
                      );
            },
            removeData: function (e) {
                return this.each(function () {
                    Ne.remove(this, e);
                });
            },
        }),
        oe.extend({
            queue: function (e, t, n) {
                var r;
                if (e)
                    return (
                        (t = (t || "fx") + "queue"),
                        (r = Ee.get(e, t)),
                        n &&
                            (!r || oe.isArray(n)
                                ? (r = Ee.access(e, t, oe.makeArray(n)))
                                : r.push(n)),
                        r || []
                    );
            },
            dequeue: function (e, t) {
                t = t || "fx";
                var n = oe.queue(e, t),
                    r = n.length,
                    i = n.shift(),
                    o = oe._queueHooks(e, t),
                    s = function () {
                        oe.dequeue(e, t);
                    };
                "inprogress" === i && ((i = n.shift()), r--),
                    i &&
                        ("fx" === t && n.unshift("inprogress"),
                        delete o.stop,
                        i.call(e, s, o)),
                    !r && o && o.empty.fire();
            },
            _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return (
                    Ee.get(e, n) ||
                    Ee.access(e, n, {
                        empty: oe.Callbacks("once memory").add(function () {
                            Ee.remove(e, [t + "queue", n]);
                        }),
                    })
                );
            },
        }),
        oe.fn.extend({
            queue: function (e, t) {
                var n = 2;
                return (
                    "string" != typeof e && ((t = e), (e = "fx"), n--),
                    arguments.length < n
                        ? oe.queue(this[0], e)
                        : void 0 === t
                        ? this
                        : this.each(function () {
                              var n = oe.queue(this, e, t);
                              oe._queueHooks(this, e),
                                  "fx" === e &&
                                      "inprogress" !== n[0] &&
                                      oe.dequeue(this, e);
                          })
                );
            },
            dequeue: function (e) {
                return this.each(function () {
                    oe.dequeue(this, e);
                });
            },
            clearQueue: function (e) {
                return this.queue(e || "fx", []);
            },
            promise: function (e, t) {
                var n,
                    r = 1,
                    i = oe.Deferred(),
                    o = this,
                    s = this.length,
                    a = function () {
                        --r || i.resolveWith(o, [o]);
                    };
                for (
                    "string" != typeof e && ((t = e), (e = void 0)),
                        e = e || "fx";
                    s--;

                )
                    (n = Ee.get(o[s], e + "queueHooks")),
                        n && n.empty && (r++, n.empty.add(a));
                return a(), i.promise(t);
            },
        });
    var De = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Ae = new RegExp("^(?:([+-])=|)(" + De + ")([a-z%]*)$", "i"),
        qe = ["Top", "Right", "Bottom", "Left"],
        Le = function (e, t) {
            return (
                (e = t || e),
                "none" === oe.css(e, "display") ||
                    !oe.contains(e.ownerDocument, e)
            );
        },
        He = /^(?:checkbox|radio)$/i,
        Oe = /<([\w:-]+)/,
        Fe = /^$|\/(?:java|ecma)script/i,
        Pe = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""],
        };
    (Pe.optgroup = Pe.option),
        (Pe.tbody = Pe.tfoot = Pe.colgroup = Pe.caption = Pe.thead),
        (Pe.th = Pe.td);
    var Re = /<|&#?\w+;/;
    !(function () {
        var e = G.createDocumentFragment(),
            t = e.appendChild(G.createElement("div")),
            n = G.createElement("input");
        n.setAttribute("type", "radio"),
            n.setAttribute("checked", "checked"),
            n.setAttribute("name", "t"),
            t.appendChild(n),
            (re.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked),
            (t.innerHTML = "<textarea>x</textarea>"),
            (re.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue);
    })();
    var Me = /^key/,
        Ie = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        We = /^([^.]*)(?:\.(.+)|)/;
    (oe.event = {
        global: {},
        add: function (e, t, n, r, i) {
            var o,
                s,
                a,
                u,
                l,
                c,
                f,
                p,
                d,
                h,
                g,
                v = Ee.get(e);
            if (v)
                for (
                    n.handler && ((o = n), (n = o.handler), (i = o.selector)),
                        n.guid || (n.guid = oe.guid++),
                        (u = v.events) || (u = v.events = {}),
                        (s = v.handle) ||
                            (s = v.handle = function (t) {
                                return "undefined" != typeof oe &&
                                    oe.event.triggered !== t.type
                                    ? oe.event.dispatch.apply(e, arguments)
                                    : void 0;
                            }),
                        t = (t || "").match(we) || [""],
                        l = t.length;
                    l--;

                )
                    (a = We.exec(t[l]) || []),
                        (d = g = a[1]),
                        (h = (a[2] || "").split(".").sort()),
                        d &&
                            ((f = oe.event.special[d] || {}),
                            (d = (i ? f.delegateType : f.bindType) || d),
                            (f = oe.event.special[d] || {}),
                            (c = oe.extend(
                                {
                                    type: d,
                                    origType: g,
                                    data: r,
                                    handler: n,
                                    guid: n.guid,
                                    selector: i,
                                    needsContext:
                                        i && oe.expr.match.needsContext.test(i),
                                    namespace: h.join("."),
                                },
                                o
                            )),
                            (p = u[d]) ||
                                ((p = u[d] = []),
                                (p.delegateCount = 0),
                                (f.setup && f.setup.call(e, r, h, s) !== !1) ||
                                    (e.addEventListener &&
                                        e.addEventListener(d, s))),
                            f.add &&
                                (f.add.call(e, c),
                                c.handler.guid || (c.handler.guid = n.guid)),
                            i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                            (oe.event.global[d] = !0));
        },
        remove: function (e, t, n, r, i) {
            var o,
                s,
                a,
                u,
                l,
                c,
                f,
                p,
                d,
                h,
                g,
                v = Ee.hasData(e) && Ee.get(e);
            if (v && (u = v.events)) {
                for (t = (t || "").match(we) || [""], l = t.length; l--; )
                    if (
                        ((a = We.exec(t[l]) || []),
                        (d = g = a[1]),
                        (h = (a[2] || "").split(".").sort()),
                        d)
                    ) {
                        for (
                            f = oe.event.special[d] || {},
                                d = (r ? f.delegateType : f.bindType) || d,
                                p = u[d] || [],
                                a =
                                    a[2] &&
                                    new RegExp(
                                        "(^|\\.)" +
                                            h.join("\\.(?:.*\\.|)") +
                                            "(\\.|$)"
                                    ),
                                s = o = p.length;
                            o--;

                        )
                            (c = p[o]),
                                (!i && g !== c.origType) ||
                                    (n && n.guid !== c.guid) ||
                                    (a && !a.test(c.namespace)) ||
                                    (r &&
                                        r !== c.selector &&
                                        ("**" !== r || !c.selector)) ||
                                    (p.splice(o, 1),
                                    c.selector && p.delegateCount--,
                                    f.remove && f.remove.call(e, c));
                        s &&
                            !p.length &&
                            ((f.teardown &&
                                f.teardown.call(e, h, v.handle) !== !1) ||
                                oe.removeEvent(e, d, v.handle),
                            delete u[d]);
                    } else for (d in u) oe.event.remove(e, d + t[l], n, r, !0);
                oe.isEmptyObject(u) && Ee.remove(e, "handle events");
            }
        },
        dispatch: function (e) {
            e = oe.event.fix(e);
            var t,
                n,
                r,
                i,
                o,
                s = [],
                a = Q.call(arguments),
                u = (Ee.get(this, "events") || {})[e.type] || [],
                l = oe.event.special[e.type] || {};
            if (
                ((a[0] = e),
                (e.delegateTarget = this),
                !l.preDispatch || l.preDispatch.call(this, e) !== !1)
            ) {
                for (
                    s = oe.event.handlers.call(this, e, u), t = 0;
                    (i = s[t++]) && !e.isPropagationStopped();

                )
                    for (
                        e.currentTarget = i.elem, n = 0;
                        (o = i.handlers[n++]) &&
                        !e.isImmediatePropagationStopped();

                    )
                        (e.rnamespace && !e.rnamespace.test(o.namespace)) ||
                            ((e.handleObj = o),
                            (e.data = o.data),
                            (r = (
                                (oe.event.special[o.origType] || {}).handle ||
                                o.handler
                            ).apply(i.elem, a)),
                            void 0 !== r &&
                                (e.result = r) === !1 &&
                                (e.preventDefault(), e.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, e), e.result;
            }
        },
        handlers: function (e, t) {
            var n,
                r,
                i,
                o,
                s = [],
                a = t.delegateCount,
                u = e.target;
            if (
                a &&
                u.nodeType &&
                ("click" !== e.type || isNaN(e.button) || e.button < 1)
            )
                for (; u !== this; u = u.parentNode || this)
                    if (
                        1 === u.nodeType &&
                        (u.disabled !== !0 || "click" !== e.type)
                    ) {
                        for (r = [], n = 0; n < a; n++)
                            (o = t[n]),
                                (i = o.selector + " "),
                                void 0 === r[i] &&
                                    (r[i] = o.needsContext
                                        ? oe(i, this).index(u) > -1
                                        : oe.find(i, this, null, [u]).length),
                                r[i] && r.push(o);
                        r.length && s.push({ elem: u, handlers: r });
                    }
            return (
                a < t.length && s.push({ elem: this, handlers: t.slice(a) }), s
            );
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
            " "
        ),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (e, t) {
                return (
                    null == e.which &&
                        (e.which = null != t.charCode ? t.charCode : t.keyCode),
                    e
                );
            },
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(
                " "
            ),
            filter: function (e, t) {
                var n,
                    r,
                    i,
                    o = t.button;
                return (
                    null == e.pageX &&
                        null != t.clientX &&
                        ((n = e.target.ownerDocument || G),
                        (r = n.documentElement),
                        (i = n.body),
                        (e.pageX =
                            t.clientX +
                            ((r && r.scrollLeft) || (i && i.scrollLeft) || 0) -
                            ((r && r.clientLeft) || (i && i.clientLeft) || 0)),
                        (e.pageY =
                            t.clientY +
                            ((r && r.scrollTop) || (i && i.scrollTop) || 0) -
                            ((r && r.clientTop) || (i && i.clientTop) || 0))),
                    e.which ||
                        void 0 === o ||
                        (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
                    e
                );
            },
        },
        fix: function (e) {
            if (e[oe.expando]) return e;
            var t,
                n,
                r,
                i = e.type,
                o = e,
                s = this.fixHooks[i];
            for (
                s ||
                    (this.fixHooks[i] = s = Ie.test(i)
                        ? this.mouseHooks
                        : Me.test(i)
                        ? this.keyHooks
                        : {}),
                    r = s.props ? this.props.concat(s.props) : this.props,
                    e = new oe.Event(o),
                    t = r.length;
                t--;

            )
                (n = r[t]), (e[n] = o[n]);
            return (
                e.target || (e.target = G),
                3 === e.target.nodeType && (e.target = e.target.parentNode),
                s.filter ? s.filter(e, o) : e
            );
        },
        special: {
            load: { noBubble: !0 },
            focus: {
                trigger: function () {
                    if (this !== g() && this.focus) return this.focus(), !1;
                },
                delegateType: "focusin",
            },
            blur: {
                trigger: function () {
                    if (this === g() && this.blur) return this.blur(), !1;
                },
                delegateType: "focusout",
            },
            click: {
                trigger: function () {
                    if (
                        "checkbox" === this.type &&
                        this.click &&
                        oe.nodeName(this, "input")
                    )
                        return this.click(), !1;
                },
                _default: function (e) {
                    return oe.nodeName(e.target, "a");
                },
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result &&
                        e.originalEvent &&
                        (e.originalEvent.returnValue = e.result);
                },
            },
        },
    }),
        (oe.removeEvent = function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n);
        }),
        (oe.Event = function (e, t) {
            return this instanceof oe.Event
                ? (e && e.type
                      ? ((this.originalEvent = e),
                        (this.type = e.type),
                        (this.isDefaultPrevented =
                            e.defaultPrevented ||
                            (void 0 === e.defaultPrevented &&
                                e.returnValue === !1)
                                ? d
                                : h))
                      : (this.type = e),
                  t && oe.extend(this, t),
                  (this.timeStamp = (e && e.timeStamp) || oe.now()),
                  void (this[oe.expando] = !0))
                : new oe.Event(e, t);
        }),
        (oe.Event.prototype = {
            constructor: oe.Event,
            isDefaultPrevented: h,
            isPropagationStopped: h,
            isImmediatePropagationStopped: h,
            isSimulated: !1,
            preventDefault: function () {
                var e = this.originalEvent;
                (this.isDefaultPrevented = d),
                    e && !this.isSimulated && e.preventDefault();
            },
            stopPropagation: function () {
                var e = this.originalEvent;
                (this.isPropagationStopped = d),
                    e && !this.isSimulated && e.stopPropagation();
            },
            stopImmediatePropagation: function () {
                var e = this.originalEvent;
                (this.isImmediatePropagationStopped = d),
                    e && !this.isSimulated && e.stopImmediatePropagation(),
                    this.stopPropagation();
            },
        }),
        oe.each(
            {
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout",
            },
            function (e, t) {
                oe.event.special[e] = {
                    delegateType: t,
                    bindType: t,
                    handle: function (e) {
                        var n,
                            r = this,
                            i = e.relatedTarget,
                            o = e.handleObj;
                        return (
                            (i && (i === r || oe.contains(r, i))) ||
                                ((e.type = o.origType),
                                (n = o.handler.apply(this, arguments)),
                                (e.type = t)),
                            n
                        );
                    },
                };
            }
        ),
        oe.fn.extend({
            on: function (e, t, n, r) {
                return v(this, e, t, n, r);
            },
            one: function (e, t, n, r) {
                return v(this, e, t, n, r, 1);
            },
            off: function (e, t, n) {
                var r, i;
                if (e && e.preventDefault && e.handleObj)
                    return (
                        (r = e.handleObj),
                        oe(e.delegateTarget).off(
                            r.namespace
                                ? r.origType + "." + r.namespace
                                : r.origType,
                            r.selector,
                            r.handler
                        ),
                        this
                    );
                if ("object" == typeof e) {
                    for (i in e) this.off(i, t, e[i]);
                    return this;
                }
                return (
                    (t !== !1 && "function" != typeof t) ||
                        ((n = t), (t = void 0)),
                    n === !1 && (n = h),
                    this.each(function () {
                        oe.event.remove(this, e, n, t);
                    })
                );
            },
        });
    var $e = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        Be = /<script|<style|<link/i,
        _e = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Xe = /^true\/(.*)/,
        ze = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    oe.extend({
        htmlPrefilter: function (e) {
            return e.replace($e, "<$1></$2>");
        },
        clone: function (e, t, n) {
            var r,
                i,
                o,
                s,
                a = e.cloneNode(!0),
                u = oe.contains(e.ownerDocument, e);
            if (
                !(
                    re.noCloneChecked ||
                    (1 !== e.nodeType && 11 !== e.nodeType) ||
                    oe.isXMLDoc(e)
                )
            )
                for (s = c(a), o = c(e), r = 0, i = o.length; r < i; r++)
                    w(o[r], s[r]);
            if (t)
                if (n)
                    for (
                        o = o || c(e), s = s || c(a), r = 0, i = o.length;
                        r < i;
                        r++
                    )
                        b(o[r], s[r]);
                else b(e, a);
            return (
                (s = c(a, "script")),
                s.length > 0 && f(s, !u && c(e, "script")),
                a
            );
        },
        cleanData: function (e) {
            for (
                var t, n, r, i = oe.event.special, o = 0;
                void 0 !== (n = e[o]);
                o++
            )
                if (ke(n)) {
                    if ((t = n[Ee.expando])) {
                        if (t.events)
                            for (r in t.events)
                                i[r]
                                    ? oe.event.remove(n, r)
                                    : oe.removeEvent(n, r, t.handle);
                        n[Ee.expando] = void 0;
                    }
                    n[Ne.expando] && (n[Ne.expando] = void 0);
                }
        },
    }),
        oe.fn.extend({
            domManip: T,
            detach: function (e) {
                return C(this, e, !0);
            },
            remove: function (e) {
                return C(this, e);
            },
            text: function (e) {
                return Ce(
                    this,
                    function (e) {
                        return void 0 === e
                            ? oe.text(this)
                            : this.empty().each(function () {
                                  (1 !== this.nodeType &&
                                      11 !== this.nodeType &&
                                      9 !== this.nodeType) ||
                                      (this.textContent = e);
                              });
                    },
                    null,
                    e,
                    arguments.length
                );
            },
            append: function () {
                return T(this, arguments, function (e) {
                    if (
                        1 === this.nodeType ||
                        11 === this.nodeType ||
                        9 === this.nodeType
                    ) {
                        var t = m(this, e);
                        t.appendChild(e);
                    }
                });
            },
            prepend: function () {
                return T(this, arguments, function (e) {
                    if (
                        1 === this.nodeType ||
                        11 === this.nodeType ||
                        9 === this.nodeType
                    ) {
                        var t = m(this, e);
                        t.insertBefore(e, t.firstChild);
                    }
                });
            },
            before: function () {
                return T(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this);
                });
            },
            after: function () {
                return T(this, arguments, function (e) {
                    this.parentNode &&
                        this.parentNode.insertBefore(e, this.nextSibling);
                });
            },
            empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++)
                    1 === e.nodeType &&
                        (oe.cleanData(c(e, !1)), (e.textContent = ""));
                return this;
            },
            clone: function (e, t) {
                return (
                    (e = null != e && e),
                    (t = null == t ? e : t),
                    this.map(function () {
                        return oe.clone(this, e, t);
                    })
                );
            },
            html: function (e) {
                return Ce(
                    this,
                    function (e) {
                        var t = this[0] || {},
                            n = 0,
                            r = this.length;
                        if (void 0 === e && 1 === t.nodeType)
                            return t.innerHTML;
                        if (
                            "string" == typeof e &&
                            !Be.test(e) &&
                            !Pe[(Oe.exec(e) || ["", ""])[1].toLowerCase()]
                        ) {
                            e = oe.htmlPrefilter(e);
                            try {
                                for (; n < r; n++)
                                    (t = this[n] || {}),
                                        1 === t.nodeType &&
                                            (oe.cleanData(c(t, !1)),
                                            (t.innerHTML = e));
                                t = 0;
                            } catch (i) {}
                        }
                        t && this.empty().append(e);
                    },
                    null,
                    e,
                    arguments.length
                );
            },
            replaceWith: function () {
                var e = [];
                return T(
                    this,
                    arguments,
                    function (t) {
                        var n = this.parentNode;
                        oe.inArray(this, e) < 0 &&
                            (oe.cleanData(c(this)),
                            n && n.replaceChild(t, this));
                    },
                    e
                );
            },
        }),
        oe.each(
            {
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith",
            },
            function (e, t) {
                oe.fn[e] = function (e) {
                    for (
                        var n, r = [], i = oe(e), o = i.length - 1, s = 0;
                        s <= o;
                        s++
                    )
                        (n = s === o ? this : this.clone(!0)),
                            oe(i[s])[t](n),
                            K.apply(r, n.get());
                    return this.pushStack(r);
                };
            }
        );
    var Ue,
        Ve = { HTML: "block", BODY: "block" },
        Ye = /^margin/,
        Ge = new RegExp("^(" + De + ")(?!px)[a-z%]+$", "i"),
        Qe = function (t) {
            var n = t.ownerDocument.defaultView;
            return (n && n.opener) || (n = e), n.getComputedStyle(t);
        },
        Je = function (e, t, n, r) {
            var i,
                o,
                s = {};
            for (o in t) (s[o] = e.style[o]), (e.style[o] = t[o]);
            i = n.apply(e, r || []);
            for (o in t) e.style[o] = s[o];
            return i;
        },
        Ke = G.documentElement;
    !(function () {
        function t() {
            (a.style.cssText =
                "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%"),
                (a.innerHTML = ""),
                Ke.appendChild(s);
            var t = e.getComputedStyle(a);
            (n = "1%" !== t.top),
                (o = "2px" === t.marginLeft),
                (r = "4px" === t.width),
                (a.style.marginRight = "50%"),
                (i = "4px" === t.marginRight),
                Ke.removeChild(s);
        }
        var n,
            r,
            i,
            o,
            s = G.createElement("div"),
            a = G.createElement("div");
        a.style &&
            ((a.style.backgroundClip = "content-box"),
            (a.cloneNode(!0).style.backgroundClip = ""),
            (re.clearCloneStyle = "content-box" === a.style.backgroundClip),
            (s.style.cssText =
                "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute"),
            s.appendChild(a),
            oe.extend(re, {
                pixelPosition: function () {
                    return t(), n;
                },
                boxSizingReliable: function () {
                    return null == r && t(), r;
                },
                pixelMarginRight: function () {
                    return null == r && t(), i;
                },
                reliableMarginLeft: function () {
                    return null == r && t(), o;
                },
                reliableMarginRight: function () {
                    var t,
                        n = a.appendChild(G.createElement("div"));
                    return (
                        (n.style.cssText = a.style.cssText =
                            "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"),
                        (n.style.marginRight = n.style.width = "0"),
                        (a.style.width = "1px"),
                        Ke.appendChild(s),
                        (t = !parseFloat(e.getComputedStyle(n).marginRight)),
                        Ke.removeChild(s),
                        a.removeChild(n),
                        t
                    );
                },
            }));
    })();
    var Ze = /^(none|table(?!-c[ea]).+)/,
        et = { position: "absolute", visibility: "hidden", display: "block" },
        tt = { letterSpacing: "0", fontWeight: "400" },
        nt = ["Webkit", "O", "Moz", "ms"],
        rt = G.createElement("div").style;
    oe.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = N(e, "opacity");
                        return "" === n ? "1" : n;
                    }
                },
            },
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
        },
        cssProps: { float: "cssFloat" },
        style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i,
                    o,
                    s,
                    a = oe.camelCase(t),
                    u = e.style;
                return (
                    (t = oe.cssProps[a] || (oe.cssProps[a] = j(a) || a)),
                    (s = oe.cssHooks[t] || oe.cssHooks[a]),
                    void 0 === n
                        ? s && "get" in s && void 0 !== (i = s.get(e, !1, r))
                            ? i
                            : u[t]
                        : ((o = typeof n),
                          "string" === o &&
                              (i = Ae.exec(n)) &&
                              i[1] &&
                              ((n = l(e, t, i)), (o = "number")),
                          null != n &&
                              n === n &&
                              ("number" === o &&
                                  (n +=
                                      (i && i[3]) ||
                                      (oe.cssNumber[a] ? "" : "px")),
                              re.clearCloneStyle ||
                                  "" !== n ||
                                  0 !== t.indexOf("background") ||
                                  (u[t] = "inherit"),
                              (s &&
                                  "set" in s &&
                                  void 0 === (n = s.set(e, n, r))) ||
                                  (u[t] = n)),
                          void 0)
                );
            }
        },
        css: function (e, t, n, r) {
            var i,
                o,
                s,
                a = oe.camelCase(t);
            return (
                (t = oe.cssProps[a] || (oe.cssProps[a] = j(a) || a)),
                (s = oe.cssHooks[t] || oe.cssHooks[a]),
                s && "get" in s && (i = s.get(e, !0, n)),
                void 0 === i && (i = N(e, t, r)),
                "normal" === i && t in tt && (i = tt[t]),
                "" === n || n
                    ? ((o = parseFloat(i)),
                      n === !0 || isFinite(o) ? o || 0 : i)
                    : i
            );
        },
    }),
        oe.each(["height", "width"], function (e, t) {
            oe.cssHooks[t] = {
                get: function (e, n, r) {
                    if (n)
                        return Ze.test(oe.css(e, "display")) &&
                            0 === e.offsetWidth
                            ? Je(e, et, function () {
                                  return q(e, t, r);
                              })
                            : q(e, t, r);
                },
                set: function (e, n, r) {
                    var i,
                        o = r && Qe(e),
                        s =
                            r &&
                            A(
                                e,
                                t,
                                r,
                                "border-box" === oe.css(e, "boxSizing", !1, o),
                                o
                            );
                    return (
                        s &&
                            (i = Ae.exec(n)) &&
                            "px" !== (i[3] || "px") &&
                            ((e.style[t] = n), (n = oe.css(e, t))),
                        D(e, n, s)
                    );
                },
            };
        }),
        (oe.cssHooks.marginLeft = S(re.reliableMarginLeft, function (e, t) {
            if (t)
                return (
                    (parseFloat(N(e, "marginLeft")) ||
                        e.getBoundingClientRect().left -
                            Je(e, { marginLeft: 0 }, function () {
                                return e.getBoundingClientRect().left;
                            })) + "px"
                );
        })),
        (oe.cssHooks.marginRight = S(re.reliableMarginRight, function (e, t) {
            if (t)
                return Je(e, { display: "inline-block" }, N, [
                    e,
                    "marginRight",
                ]);
        })),
        oe.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
            (oe.cssHooks[e + t] = {
                expand: function (n) {
                    for (
                        var r = 0,
                            i = {},
                            o = "string" == typeof n ? n.split(" ") : [n];
                        r < 4;
                        r++
                    )
                        i[e + qe[r] + t] = o[r] || o[r - 2] || o[0];
                    return i;
                },
            }),
                Ye.test(e) || (oe.cssHooks[e + t].set = D);
        }),
        oe.fn.extend({
            css: function (e, t) {
                return Ce(
                    this,
                    function (e, t, n) {
                        var r,
                            i,
                            o = {},
                            s = 0;
                        if (oe.isArray(t)) {
                            for (r = Qe(e), i = t.length; s < i; s++)
                                o[t[s]] = oe.css(e, t[s], !1, r);
                            return o;
                        }
                        return void 0 !== n ? oe.style(e, t, n) : oe.css(e, t);
                    },
                    e,
                    t,
                    arguments.length > 1
                );
            },
            show: function () {
                return L(this, !0);
            },
            hide: function () {
                return L(this);
            },
            toggle: function (e) {
                return "boolean" == typeof e
                    ? e
                        ? this.show()
                        : this.hide()
                    : this.each(function () {
                          Le(this) ? oe(this).show() : oe(this).hide();
                      });
            },
        }),
        (oe.Tween = H),
        (H.prototype = {
            constructor: H,
            init: function (e, t, n, r, i, o) {
                (this.elem = e),
                    (this.prop = n),
                    (this.easing = i || oe.easing._default),
                    (this.options = t),
                    (this.start = this.now = this.cur()),
                    (this.end = r),
                    (this.unit = o || (oe.cssNumber[n] ? "" : "px"));
            },
            cur: function () {
                var e = H.propHooks[this.prop];
                return e && e.get
                    ? e.get(this)
                    : H.propHooks._default.get(this);
            },
            run: function (e) {
                var t,
                    n = H.propHooks[this.prop];
                return (
                    this.options.duration
                        ? (this.pos = t = oe.easing[this.easing](
                              e,
                              this.options.duration * e,
                              0,
                              1,
                              this.options.duration
                          ))
                        : (this.pos = t = e),
                    (this.now = (this.end - this.start) * t + this.start),
                    this.options.step &&
                        this.options.step.call(this.elem, this.now, this),
                    n && n.set ? n.set(this) : H.propHooks._default.set(this),
                    this
                );
            },
        }),
        (H.prototype.init.prototype = H.prototype),
        (H.propHooks = {
            _default: {
                get: function (e) {
                    var t;
                    return 1 !== e.elem.nodeType ||
                        (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                        ? e.elem[e.prop]
                        : ((t = oe.css(e.elem, e.prop, "")),
                          t && "auto" !== t ? t : 0);
                },
                set: function (e) {
                    oe.fx.step[e.prop]
                        ? oe.fx.step[e.prop](e)
                        : 1 !== e.elem.nodeType ||
                          (null == e.elem.style[oe.cssProps[e.prop]] &&
                              !oe.cssHooks[e.prop])
                        ? (e.elem[e.prop] = e.now)
                        : oe.style(e.elem, e.prop, e.now + e.unit);
                },
            },
        }),
        (H.propHooks.scrollTop = H.propHooks.scrollLeft = {
            set: function (e) {
                e.elem.nodeType &&
                    e.elem.parentNode &&
                    (e.elem[e.prop] = e.now);
            },
        }),
        (oe.easing = {
            linear: function (e) {
                return e;
            },
            swing: function (e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
            },
            _default: "swing",
        }),
        (oe.fx = H.prototype.init),
        (oe.fx.step = {});
    var it,
        ot,
        st = /^(?:toggle|show|hide)$/,
        at = /queueHooks$/;
    (oe.Animation = oe.extend(I, {
        tweeners: {
            "*": [
                function (e, t) {
                    var n = this.createTween(e, t);
                    return l(n.elem, e, Ae.exec(t), n), n;
                },
            ],
        },
        tweener: function (e, t) {
            oe.isFunction(e) ? ((t = e), (e = ["*"])) : (e = e.match(we));
            for (var n, r = 0, i = e.length; r < i; r++)
                (n = e[r]),
                    (I.tweeners[n] = I.tweeners[n] || []),
                    I.tweeners[n].unshift(t);
        },
        prefilters: [R],
        prefilter: function (e, t) {
            t ? I.prefilters.unshift(e) : I.prefilters.push(e);
        },
    })),
        (oe.speed = function (e, t, n) {
            var r =
                e && "object" == typeof e
                    ? oe.extend({}, e)
                    : {
                          complete: n || (!n && t) || (oe.isFunction(e) && e),
                          duration: e,
                          easing: (n && t) || (t && !oe.isFunction(t) && t),
                      };
            return (
                (r.duration = oe.fx.off
                    ? 0
                    : "number" == typeof r.duration
                    ? r.duration
                    : r.duration in oe.fx.speeds
                    ? oe.fx.speeds[r.duration]
                    : oe.fx.speeds._default),
                (null != r.queue && r.queue !== !0) || (r.queue = "fx"),
                (r.old = r.complete),
                (r.complete = function () {
                    oe.isFunction(r.old) && r.old.call(this),
                        r.queue && oe.dequeue(this, r.queue);
                }),
                r
            );
        }),
        oe.fn.extend({
            fadeTo: function (e, t, n, r) {
                return this.filter(Le)
                    .css("opacity", 0)
                    .show()
                    .end()
                    .animate({ opacity: t }, e, n, r);
            },
            animate: function (e, t, n, r) {
                var i = oe.isEmptyObject(e),
                    o = oe.speed(t, n, r),
                    s = function () {
                        var t = I(this, oe.extend({}, e), o);
                        (i || Ee.get(this, "finish")) && t.stop(!0);
                    };
                return (
                    (s.finish = s),
                    i || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
                );
            },
            stop: function (e, t, n) {
                var r = function (e) {
                    var t = e.stop;
                    delete e.stop, t(n);
                };
                return (
                    "string" != typeof e && ((n = t), (t = e), (e = void 0)),
                    t && e !== !1 && this.queue(e || "fx", []),
                    this.each(function () {
                        var t = !0,
                            i = null != e && e + "queueHooks",
                            o = oe.timers,
                            s = Ee.get(this);
                        if (i) s[i] && s[i].stop && r(s[i]);
                        else
                            for (i in s)
                                s[i] && s[i].stop && at.test(i) && r(s[i]);
                        for (i = o.length; i--; )
                            o[i].elem !== this ||
                                (null != e && o[i].queue !== e) ||
                                (o[i].anim.stop(n), (t = !1), o.splice(i, 1));
                        (!t && n) || oe.dequeue(this, e);
                    })
                );
            },
            finish: function (e) {
                return (
                    e !== !1 && (e = e || "fx"),
                    this.each(function () {
                        var t,
                            n = Ee.get(this),
                            r = n[e + "queue"],
                            i = n[e + "queueHooks"],
                            o = oe.timers,
                            s = r ? r.length : 0;
                        for (
                            n.finish = !0,
                                oe.queue(this, e, []),
                                i && i.stop && i.stop.call(this, !0),
                                t = o.length;
                            t--;

                        )
                            o[t].elem === this &&
                                o[t].queue === e &&
                                (o[t].anim.stop(!0), o.splice(t, 1));
                        for (t = 0; t < s; t++)
                            r[t] && r[t].finish && r[t].finish.call(this);
                        delete n.finish;
                    })
                );
            },
        }),
        oe.each(["toggle", "show", "hide"], function (e, t) {
            var n = oe.fn[t];
            oe.fn[t] = function (e, r, i) {
                return null == e || "boolean" == typeof e
                    ? n.apply(this, arguments)
                    : this.animate(F(t, !0), e, r, i);
            };
        }),
        oe.each(
            {
                slideDown: F("show"),
                slideUp: F("hide"),
                slideToggle: F("toggle"),
                fadeIn: { opacity: "show" },
                fadeOut: { opacity: "hide" },
                fadeToggle: { opacity: "toggle" },
            },
            function (e, t) {
                oe.fn[e] = function (e, n, r) {
                    return this.animate(t, e, n, r);
                };
            }
        ),
        (oe.timers = []),
        (oe.fx.tick = function () {
            var e,
                t = 0,
                n = oe.timers;
            for (it = oe.now(); t < n.length; t++)
                (e = n[t]), e() || n[t] !== e || n.splice(t--, 1);
            n.length || oe.fx.stop(), (it = void 0);
        }),
        (oe.fx.timer = function (e) {
            oe.timers.push(e), e() ? oe.fx.start() : oe.timers.pop();
        }),
        (oe.fx.interval = 13),
        (oe.fx.start = function () {
            ot || (ot = e.setInterval(oe.fx.tick, oe.fx.interval));
        }),
        (oe.fx.stop = function () {
            e.clearInterval(ot), (ot = null);
        }),
        (oe.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (oe.fn.delay = function (t, n) {
            return (
                (t = oe.fx ? oe.fx.speeds[t] || t : t),
                (n = n || "fx"),
                this.queue(n, function (n, r) {
                    var i = e.setTimeout(n, t);
                    r.stop = function () {
                        e.clearTimeout(i);
                    };
                })
            );
        }),
        (function () {
            var e = G.createElement("input"),
                t = G.createElement("select"),
                n = t.appendChild(G.createElement("option"));
            (e.type = "checkbox"),
                (re.checkOn = "" !== e.value),
                (re.optSelected = n.selected),
                (t.disabled = !0),
                (re.optDisabled = !n.disabled),
                (e = G.createElement("input")),
                (e.value = "t"),
                (e.type = "radio"),
                (re.radioValue = "t" === e.value);
        })();
    var ut,
        lt = oe.expr.attrHandle;
    oe.fn.extend({
        attr: function (e, t) {
            return Ce(this, oe.attr, e, t, arguments.length > 1);
        },
        removeAttr: function (e) {
            return this.each(function () {
                oe.removeAttr(this, e);
            });
        },
    }),
        oe.extend({
            attr: function (e, t, n) {
                var r,
                    i,
                    o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return "undefined" == typeof e.getAttribute
                        ? oe.prop(e, t, n)
                        : ((1 === o && oe.isXMLDoc(e)) ||
                              ((t = t.toLowerCase()),
                              (i =
                                  oe.attrHooks[t] ||
                                  (oe.expr.match.bool.test(t) ? ut : void 0))),
                          void 0 !== n
                              ? null === n
                                  ? void oe.removeAttr(e, t)
                                  : i &&
                                    "set" in i &&
                                    void 0 !== (r = i.set(e, n, t))
                                  ? r
                                  : (e.setAttribute(t, n + ""), n)
                              : i && "get" in i && null !== (r = i.get(e, t))
                              ? r
                              : ((r = oe.find.attr(e, t)),
                                null == r ? void 0 : r));
            },
            attrHooks: {
                type: {
                    set: function (e, t) {
                        if (
                            !re.radioValue &&
                            "radio" === t &&
                            oe.nodeName(e, "input")
                        ) {
                            var n = e.value;
                            return (
                                e.setAttribute("type", t), n && (e.value = n), t
                            );
                        }
                    },
                },
            },
            removeAttr: function (e, t) {
                var n,
                    r,
                    i = 0,
                    o = t && t.match(we);
                if (o && 1 === e.nodeType)
                    for (; (n = o[i++]); )
                        (r = oe.propFix[n] || n),
                            oe.expr.match.bool.test(n) && (e[r] = !1),
                            e.removeAttribute(n);
            },
        }),
        (ut = {
            set: function (e, t, n) {
                return t === !1 ? oe.removeAttr(e, n) : e.setAttribute(n, n), n;
            },
        }),
        oe.each(oe.expr.match.bool.source.match(/\w+/g), function (e, t) {
            var n = lt[t] || oe.find.attr;
            lt[t] = function (e, t, r) {
                var i, o;
                return (
                    r ||
                        ((o = lt[t]),
                        (lt[t] = i),
                        (i = null != n(e, t, r) ? t.toLowerCase() : null),
                        (lt[t] = o)),
                    i
                );
            };
        });
    var ct = /^(?:input|select|textarea|button)$/i,
        ft = /^(?:a|area)$/i;
    oe.fn.extend({
        prop: function (e, t) {
            return Ce(this, oe.prop, e, t, arguments.length > 1);
        },
        removeProp: function (e) {
            return this.each(function () {
                delete this[oe.propFix[e] || e];
            });
        },
    }),
        oe.extend({
            prop: function (e, t, n) {
                var r,
                    i,
                    o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return (
                        (1 === o && oe.isXMLDoc(e)) ||
                            ((t = oe.propFix[t] || t), (i = oe.propHooks[t])),
                        void 0 !== n
                            ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                                ? r
                                : (e[t] = n)
                            : i && "get" in i && null !== (r = i.get(e, t))
                            ? r
                            : e[t]
                    );
            },
            propHooks: {
                tabIndex: {
                    get: function (e) {
                        var t = oe.find.attr(e, "tabindex");
                        return t
                            ? parseInt(t, 10)
                            : ct.test(e.nodeName) ||
                              (ft.test(e.nodeName) && e.href)
                            ? 0
                            : -1;
                    },
                },
            },
            propFix: { for: "htmlFor", class: "className" },
        }),
        re.optSelected ||
            (oe.propHooks.selected = {
                get: function (e) {
                    var t = e.parentNode;
                    return (
                        t && t.parentNode && t.parentNode.selectedIndex, null
                    );
                },
                set: function (e) {
                    var t = e.parentNode;
                    t &&
                        (t.selectedIndex,
                        t.parentNode && t.parentNode.selectedIndex);
                },
            }),
        oe.each(
            [
                "tabIndex",
                "readOnly",
                "maxLength",
                "cellSpacing",
                "cellPadding",
                "rowSpan",
                "colSpan",
                "useMap",
                "frameBorder",
                "contentEditable",
            ],
            function () {
                oe.propFix[this.toLowerCase()] = this;
            }
        );
    var pt = /[\t\r\n\f]/g;
    oe.fn.extend({
        addClass: function (e) {
            var t,
                n,
                r,
                i,
                o,
                s,
                a,
                u = 0;
            if (oe.isFunction(e))
                return this.each(function (t) {
                    oe(this).addClass(e.call(this, t, W(this)));
                });
            if ("string" == typeof e && e)
                for (t = e.match(we) || []; (n = this[u++]); )
                    if (
                        ((i = W(n)),
                        (r =
                            1 === n.nodeType &&
                            (" " + i + " ").replace(pt, " ")))
                    ) {
                        for (s = 0; (o = t[s++]); )
                            r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        (a = oe.trim(r)), i !== a && n.setAttribute("class", a);
                    }
            return this;
        },
        removeClass: function (e) {
            var t,
                n,
                r,
                i,
                o,
                s,
                a,
                u = 0;
            if (oe.isFunction(e))
                return this.each(function (t) {
                    oe(this).removeClass(e.call(this, t, W(this)));
                });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(we) || []; (n = this[u++]); )
                    if (
                        ((i = W(n)),
                        (r =
                            1 === n.nodeType &&
                            (" " + i + " ").replace(pt, " ")))
                    ) {
                        for (s = 0; (o = t[s++]); )
                            for (; r.indexOf(" " + o + " ") > -1; )
                                r = r.replace(" " + o + " ", " ");
                        (a = oe.trim(r)), i !== a && n.setAttribute("class", a);
                    }
            return this;
        },
        toggleClass: function (e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n
                ? t
                    ? this.addClass(e)
                    : this.removeClass(e)
                : oe.isFunction(e)
                ? this.each(function (n) {
                      oe(this).toggleClass(e.call(this, n, W(this), t), t);
                  })
                : this.each(function () {
                      var t, r, i, o;
                      if ("string" === n)
                          for (
                              r = 0, i = oe(this), o = e.match(we) || [];
                              (t = o[r++]);

                          )
                              i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                      else
                          (void 0 !== e && "boolean" !== n) ||
                              ((t = W(this)),
                              t && Ee.set(this, "__className__", t),
                              this.setAttribute &&
                                  this.setAttribute(
                                      "class",
                                      t || e === !1
                                          ? ""
                                          : Ee.get(this, "__className__") || ""
                                  ));
                  });
        },
        hasClass: function (e) {
            var t,
                n,
                r = 0;
            for (t = " " + e + " "; (n = this[r++]); )
                if (
                    1 === n.nodeType &&
                    (" " + W(n) + " ").replace(pt, " ").indexOf(t) > -1
                )
                    return !0;
            return !1;
        },
    });
    var dt = /\r/g,
        ht = /[\x20\t\r\n\f]+/g;
    oe.fn.extend({
        val: function (e) {
            var t,
                n,
                r,
                i = this[0];
            {
                if (arguments.length)
                    return (
                        (r = oe.isFunction(e)),
                        this.each(function (n) {
                            var i;
                            1 === this.nodeType &&
                                ((i = r ? e.call(this, n, oe(this).val()) : e),
                                null == i
                                    ? (i = "")
                                    : "number" == typeof i
                                    ? (i += "")
                                    : oe.isArray(i) &&
                                      (i = oe.map(i, function (e) {
                                          return null == e ? "" : e + "";
                                      })),
                                (t =
                                    oe.valHooks[this.type] ||
                                    oe.valHooks[this.nodeName.toLowerCase()]),
                                (t &&
                                    "set" in t &&
                                    void 0 !== t.set(this, i, "value")) ||
                                    (this.value = i));
                        })
                    );
                if (i)
                    return (
                        (t =
                            oe.valHooks[i.type] ||
                            oe.valHooks[i.nodeName.toLowerCase()]),
                        t && "get" in t && void 0 !== (n = t.get(i, "value"))
                            ? n
                            : ((n = i.value),
                              "string" == typeof n
                                  ? n.replace(dt, "")
                                  : null == n
                                  ? ""
                                  : n)
                    );
            }
        },
    }),
        oe.extend({
            valHooks: {
                option: {
                    get: function (e) {
                        var t = oe.find.attr(e, "value");
                        return null != t
                            ? t
                            : oe.trim(oe.text(e)).replace(ht, " ");
                    },
                },
                select: {
                    get: function (e) {
                        for (
                            var t,
                                n,
                                r = e.options,
                                i = e.selectedIndex,
                                o = "select-one" === e.type || i < 0,
                                s = o ? null : [],
                                a = o ? i + 1 : r.length,
                                u = i < 0 ? a : o ? i : 0;
                            u < a;
                            u++
                        )
                            if (
                                ((n = r[u]),
                                (n.selected || u === i) &&
                                    (re.optDisabled
                                        ? !n.disabled
                                        : null ===
                                          n.getAttribute("disabled")) &&
                                    (!n.parentNode.disabled ||
                                        !oe.nodeName(n.parentNode, "optgroup")))
                            ) {
                                if (((t = oe(n).val()), o)) return t;
                                s.push(t);
                            }
                        return s;
                    },
                    set: function (e, t) {
                        for (
                            var n,
                                r,
                                i = e.options,
                                o = oe.makeArray(t),
                                s = i.length;
                            s--;

                        )
                            (r = i[s]),
                                (r.selected =
                                    oe.inArray(oe.valHooks.option.get(r), o) >
                                    -1) && (n = !0);
                        return n || (e.selectedIndex = -1), o;
                    },
                },
            },
        }),
        oe.each(["radio", "checkbox"], function () {
            (oe.valHooks[this] = {
                set: function (e, t) {
                    if (oe.isArray(t))
                        return (e.checked = oe.inArray(oe(e).val(), t) > -1);
                },
            }),
                re.checkOn ||
                    (oe.valHooks[this].get = function (e) {
                        return null === e.getAttribute("value")
                            ? "on"
                            : e.value;
                    });
        });
    var gt = /^(?:focusinfocus|focusoutblur)$/;
    oe.extend(oe.event, {
        trigger: function (t, n, r, i) {
            var o,
                s,
                a,
                u,
                l,
                c,
                f,
                p = [r || G],
                d = ne.call(t, "type") ? t.type : t,
                h = ne.call(t, "namespace") ? t.namespace.split(".") : [];
            if (
                ((s = a = r = r || G),
                3 !== r.nodeType &&
                    8 !== r.nodeType &&
                    !gt.test(d + oe.event.triggered) &&
                    (d.indexOf(".") > -1 &&
                        ((h = d.split(".")), (d = h.shift()), h.sort()),
                    (l = d.indexOf(":") < 0 && "on" + d),
                    (t = t[oe.expando]
                        ? t
                        : new oe.Event(d, "object" == typeof t && t)),
                    (t.isTrigger = i ? 2 : 3),
                    (t.namespace = h.join(".")),
                    (t.rnamespace = t.namespace
                        ? new RegExp(
                              "(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"
                          )
                        : null),
                    (t.result = void 0),
                    t.target || (t.target = r),
                    (n = null == n ? [t] : oe.makeArray(n, [t])),
                    (f = oe.event.special[d] || {}),
                    i || !f.trigger || f.trigger.apply(r, n) !== !1))
            ) {
                if (!i && !f.noBubble && !oe.isWindow(r)) {
                    for (
                        u = f.delegateType || d,
                            gt.test(u + d) || (s = s.parentNode);
                        s;
                        s = s.parentNode
                    )
                        p.push(s), (a = s);
                    a === (r.ownerDocument || G) &&
                        p.push(a.defaultView || a.parentWindow || e);
                }
                for (o = 0; (s = p[o++]) && !t.isPropagationStopped(); )
                    (t.type = o > 1 ? u : f.bindType || d),
                        (c =
                            (Ee.get(s, "events") || {})[t.type] &&
                            Ee.get(s, "handle")),
                        c && c.apply(s, n),
                        (c = l && s[l]),
                        c &&
                            c.apply &&
                            ke(s) &&
                            ((t.result = c.apply(s, n)),
                            t.result === !1 && t.preventDefault());
                return (
                    (t.type = d),
                    i ||
                        t.isDefaultPrevented() ||
                        (f._default && f._default.apply(p.pop(), n) !== !1) ||
                        !ke(r) ||
                        (l &&
                            oe.isFunction(r[d]) &&
                            !oe.isWindow(r) &&
                            ((a = r[l]),
                            a && (r[l] = null),
                            (oe.event.triggered = d),
                            r[d](),
                            (oe.event.triggered = void 0),
                            a && (r[l] = a))),
                    t.result
                );
            }
        },
        simulate: function (e, t, n) {
            var r = oe.extend(new oe.Event(), n, { type: e, isSimulated: !0 });
            oe.event.trigger(r, null, t);
        },
    }),
        oe.fn.extend({
            trigger: function (e, t) {
                return this.each(function () {
                    oe.event.trigger(e, t, this);
                });
            },
            triggerHandler: function (e, t) {
                var n = this[0];
                if (n) return oe.event.trigger(e, t, n, !0);
            },
        }),
        oe.each(
            "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
                " "
            ),
            function (e, t) {
                oe.fn[t] = function (e, n) {
                    return arguments.length > 0
                        ? this.on(t, null, e, n)
                        : this.trigger(t);
                };
            }
        ),
        oe.fn.extend({
            hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e);
            },
        }),
        (re.focusin = "onfocusin" in e),
        re.focusin ||
            oe.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
                var n = function (e) {
                    oe.event.simulate(t, e.target, oe.event.fix(e));
                };
                oe.event.special[t] = {
                    setup: function () {
                        var r = this.ownerDocument || this,
                            i = Ee.access(r, t);
                        i || r.addEventListener(e, n, !0),
                            Ee.access(r, t, (i || 0) + 1);
                    },
                    teardown: function () {
                        var r = this.ownerDocument || this,
                            i = Ee.access(r, t) - 1;
                        i
                            ? Ee.access(r, t, i)
                            : (r.removeEventListener(e, n, !0),
                              Ee.remove(r, t));
                    },
                };
            });
    var vt = e.location,
        mt = oe.now(),
        yt = /\?/;
    (oe.parseJSON = function (e) {
        return JSON.parse(e + "");
    }),
        (oe.parseXML = function (t) {
            var n;
            if (!t || "string" != typeof t) return null;
            try {
                n = new e.DOMParser().parseFromString(t, "text/xml");
            } catch (r) {
                n = void 0;
            }
            return (
                (n && !n.getElementsByTagName("parsererror").length) ||
                    oe.error("Invalid XML: " + t),
                n
            );
        });
    var xt = /#.*$/,
        bt = /([?&])_=[^&]*/,
        wt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Tt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Ct = /^(?:GET|HEAD)$/,
        kt = /^\/\//,
        Et = {},
        Nt = {},
        St = "*/".concat("*"),
        jt = G.createElement("a");
    (jt.href = vt.href),
        oe.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: vt.href,
                type: "GET",
                isLocal: Tt.test(vt.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": St,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript",
                },
                contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON",
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": oe.parseJSON,
                    "text xml": oe.parseXML,
                },
                flatOptions: { url: !0, context: !0 },
            },
            ajaxSetup: function (e, t) {
                return t ? _(_(e, oe.ajaxSettings), t) : _(oe.ajaxSettings, e);
            },
            ajaxPrefilter: $(Et),
            ajaxTransport: $(Nt),
            ajax: function (t, n) {
                function r(t, n, r, a) {
                    var l,
                        f,
                        y,
                        x,
                        w,
                        C = n;
                    2 !== b &&
                        ((b = 2),
                        u && e.clearTimeout(u),
                        (i = void 0),
                        (s = a || ""),
                        (T.readyState = t > 0 ? 4 : 0),
                        (l = (t >= 200 && t < 300) || 304 === t),
                        r && (x = X(p, T, r)),
                        (x = z(p, x, T, l)),
                        l
                            ? (p.ifModified &&
                                  ((w = T.getResponseHeader("Last-Modified")),
                                  w && (oe.lastModified[o] = w),
                                  (w = T.getResponseHeader("etag")),
                                  w && (oe.etag[o] = w)),
                              204 === t || "HEAD" === p.type
                                  ? (C = "nocontent")
                                  : 304 === t
                                  ? (C = "notmodified")
                                  : ((C = x.state),
                                    (f = x.data),
                                    (y = x.error),
                                    (l = !y)))
                            : ((y = C),
                              (!t && C) || ((C = "error"), t < 0 && (t = 0))),
                        (T.status = t),
                        (T.statusText = (n || C) + ""),
                        l
                            ? g.resolveWith(d, [f, C, T])
                            : g.rejectWith(d, [T, C, y]),
                        T.statusCode(m),
                        (m = void 0),
                        c &&
                            h.trigger(l ? "ajaxSuccess" : "ajaxError", [
                                T,
                                p,
                                l ? f : y,
                            ]),
                        v.fireWith(d, [T, C]),
                        c &&
                            (h.trigger("ajaxComplete", [T, p]),
                            --oe.active || oe.event.trigger("ajaxStop")));
                }
                "object" == typeof t && ((n = t), (t = void 0)), (n = n || {});
                var i,
                    o,
                    s,
                    a,
                    u,
                    l,
                    c,
                    f,
                    p = oe.ajaxSetup({}, n),
                    d = p.context || p,
                    h =
                        p.context && (d.nodeType || d.jquery)
                            ? oe(d)
                            : oe.event,
                    g = oe.Deferred(),
                    v = oe.Callbacks("once memory"),
                    m = p.statusCode || {},
                    y = {},
                    x = {},
                    b = 0,
                    w = "canceled",
                    T = {
                        readyState: 0,
                        getResponseHeader: function (e) {
                            var t;
                            if (2 === b) {
                                if (!a)
                                    for (a = {}; (t = wt.exec(s)); )
                                        a[t[1].toLowerCase()] = t[2];
                                t = a[e.toLowerCase()];
                            }
                            return null == t ? null : t;
                        },
                        getAllResponseHeaders: function () {
                            return 2 === b ? s : null;
                        },
                        setRequestHeader: function (e, t) {
                            var n = e.toLowerCase();
                            return (
                                b || ((e = x[n] = x[n] || e), (y[e] = t)), this
                            );
                        },
                        overrideMimeType: function (e) {
                            return b || (p.mimeType = e), this;
                        },
                        statusCode: function (e) {
                            var t;
                            if (e)
                                if (b < 2) for (t in e) m[t] = [m[t], e[t]];
                                else T.always(e[T.status]);
                            return this;
                        },
                        abort: function (e) {
                            var t = e || w;
                            return i && i.abort(t), r(0, t), this;
                        },
                    };
                if (
                    ((g.promise(T).complete = v.add),
                    (T.success = T.done),
                    (T.error = T.fail),
                    (p.url = ((t || p.url || vt.href) + "")
                        .replace(xt, "")
                        .replace(kt, vt.protocol + "//")),
                    (p.type = n.method || n.type || p.method || p.type),
                    (p.dataTypes = oe
                        .trim(p.dataType || "*")
                        .toLowerCase()
                        .match(we) || [""]),
                    null == p.crossDomain)
                ) {
                    l = G.createElement("a");
                    try {
                        (l.href = p.url),
                            (l.href = l.href),
                            (p.crossDomain =
                                jt.protocol + "//" + jt.host !=
                                l.protocol + "//" + l.host);
                    } catch (C) {
                        p.crossDomain = !0;
                    }
                }
                if (
                    (p.data &&
                        p.processData &&
                        "string" != typeof p.data &&
                        (p.data = oe.param(p.data, p.traditional)),
                    B(Et, p, n, T),
                    2 === b)
                )
                    return T;
                (c = oe.event && p.global),
                    c && 0 === oe.active++ && oe.event.trigger("ajaxStart"),
                    (p.type = p.type.toUpperCase()),
                    (p.hasContent = !Ct.test(p.type)),
                    (o = p.url),
                    p.hasContent ||
                        (p.data &&
                            ((o = p.url += (yt.test(o) ? "&" : "?") + p.data),
                            delete p.data),
                        p.cache === !1 &&
                            (p.url = bt.test(o)
                                ? o.replace(bt, "$1_=" + mt++)
                                : o + (yt.test(o) ? "&" : "?") + "_=" + mt++)),
                    p.ifModified &&
                        (oe.lastModified[o] &&
                            T.setRequestHeader(
                                "If-Modified-Since",
                                oe.lastModified[o]
                            ),
                        oe.etag[o] &&
                            T.setRequestHeader("If-None-Match", oe.etag[o])),
                    ((p.data && p.hasContent && p.contentType !== !1) ||
                        n.contentType) &&
                        T.setRequestHeader("Content-Type", p.contentType),
                    T.setRequestHeader(
                        "Accept",
                        p.dataTypes[0] && p.accepts[p.dataTypes[0]]
                            ? p.accepts[p.dataTypes[0]] +
                                  ("*" !== p.dataTypes[0]
                                      ? ", " + St + "; q=0.01"
                                      : "")
                            : p.accepts["*"]
                    );
                for (f in p.headers) T.setRequestHeader(f, p.headers[f]);
                if (
                    p.beforeSend &&
                    (p.beforeSend.call(d, T, p) === !1 || 2 === b)
                )
                    return T.abort();
                w = "abort";
                for (f in { success: 1, error: 1, complete: 1 }) T[f](p[f]);
                if ((i = B(Nt, p, n, T))) {
                    if (
                        ((T.readyState = 1),
                        c && h.trigger("ajaxSend", [T, p]),
                        2 === b)
                    )
                        return T;
                    p.async &&
                        p.timeout > 0 &&
                        (u = e.setTimeout(function () {
                            T.abort("timeout");
                        }, p.timeout));
                    try {
                        (b = 1), i.send(y, r);
                    } catch (C) {
                        if (!(b < 2)) throw C;
                        r(-1, C);
                    }
                } else r(-1, "No Transport");
                return T;
            },
            getJSON: function (e, t, n) {
                return oe.get(e, t, n, "json");
            },
            getScript: function (e, t) {
                return oe.get(e, void 0, t, "script");
            },
        }),
        oe.each(["get", "post"], function (e, t) {
            oe[t] = function (e, n, r, i) {
                return (
                    oe.isFunction(n) && ((i = i || r), (r = n), (n = void 0)),
                    oe.ajax(
                        oe.extend(
                            {
                                url: e,
                                type: t,
                                dataType: i,
                                data: n,
                                success: r,
                            },
                            oe.isPlainObject(e) && e
                        )
                    )
                );
            };
        }),
        (oe._evalUrl = function (e) {
            return oe.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                throws: !0,
            });
        }),
        oe.fn.extend({
            wrapAll: function (e) {
                var t;
                return oe.isFunction(e)
                    ? this.each(function (t) {
                          oe(this).wrapAll(e.call(this, t));
                      })
                    : (this[0] &&
                          ((t = oe(e, this[0].ownerDocument).eq(0).clone(!0)),
                          this[0].parentNode && t.insertBefore(this[0]),
                          t
                              .map(function () {
                                  for (var e = this; e.firstElementChild; )
                                      e = e.firstElementChild;
                                  return e;
                              })
                              .append(this)),
                      this);
            },
            wrapInner: function (e) {
                return oe.isFunction(e)
                    ? this.each(function (t) {
                          oe(this).wrapInner(e.call(this, t));
                      })
                    : this.each(function () {
                          var t = oe(this),
                              n = t.contents();
                          n.length ? n.wrapAll(e) : t.append(e);
                      });
            },
            wrap: function (e) {
                var t = oe.isFunction(e);
                return this.each(function (n) {
                    oe(this).wrapAll(t ? e.call(this, n) : e);
                });
            },
            unwrap: function () {
                return this.parent()
                    .each(function () {
                        oe.nodeName(this, "body") ||
                            oe(this).replaceWith(this.childNodes);
                    })
                    .end();
            },
        }),
        (oe.expr.filters.hidden = function (e) {
            return !oe.expr.filters.visible(e);
        }),
        (oe.expr.filters.visible = function (e) {
            return (
                e.offsetWidth > 0 ||
                e.offsetHeight > 0 ||
                e.getClientRects().length > 0
            );
        });
    var Dt = /%20/g,
        At = /\[\]$/,
        qt = /\r?\n/g,
        Lt = /^(?:submit|button|image|reset|file)$/i,
        Ht = /^(?:input|select|textarea|keygen)/i;
    (oe.param = function (e, t) {
        var n,
            r = [],
            i = function (e, t) {
                (t = oe.isFunction(t) ? t() : null == t ? "" : t),
                    (r[r.length] =
                        encodeURIComponent(e) + "=" + encodeURIComponent(t));
            };
        if (
            (void 0 === t &&
                (t = oe.ajaxSettings && oe.ajaxSettings.traditional),
            oe.isArray(e) || (e.jquery && !oe.isPlainObject(e)))
        )
            oe.each(e, function () {
                i(this.name, this.value);
            });
        else for (n in e) U(n, e[n], t, i);
        return r.join("&").replace(Dt, "+");
    }),
        oe.fn.extend({
            serialize: function () {
                return oe.param(this.serializeArray());
            },
            serializeArray: function () {
                return this.map(function () {
                    var e = oe.prop(this, "elements");
                    return e ? oe.makeArray(e) : this;
                })
                    .filter(function () {
                        var e = this.type;
                        return (
                            this.name &&
                            !oe(this).is(":disabled") &&
                            Ht.test(this.nodeName) &&
                            !Lt.test(e) &&
                            (this.checked || !He.test(e))
                        );
                    })
                    .map(function (e, t) {
                        var n = oe(this).val();
                        return null == n
                            ? null
                            : oe.isArray(n)
                            ? oe.map(n, function (e) {
                                  return {
                                      name: t.name,
                                      value: e.replace(qt, "\r\n"),
                                  };
                              })
                            : { name: t.name, value: n.replace(qt, "\r\n") };
                    })
                    .get();
            },
        }),
        (oe.ajaxSettings.xhr = function () {
            try {
                return new e.XMLHttpRequest();
            } catch (t) {}
        });
    var Ot = { 0: 200, 1223: 204 },
        Ft = oe.ajaxSettings.xhr();
    (re.cors = !!Ft && "withCredentials" in Ft),
        (re.ajax = Ft = !!Ft),
        oe.ajaxTransport(function (t) {
            var n, r;
            if (re.cors || (Ft && !t.crossDomain))
                return {
                    send: function (i, o) {
                        var s,
                            a = t.xhr();
                        if (
                            (a.open(
                                t.type,
                                t.url,
                                t.async,
                                t.username,
                                t.password
                            ),
                            t.xhrFields)
                        )
                            for (s in t.xhrFields) a[s] = t.xhrFields[s];
                        t.mimeType &&
                            a.overrideMimeType &&
                            a.overrideMimeType(t.mimeType),
                            t.crossDomain ||
                                i["X-Requested-With"] ||
                                (i["X-Requested-With"] = "XMLHttpRequest");
                        for (s in i) a.setRequestHeader(s, i[s]);
                        (n = function (e) {
                            return function () {
                                n &&
                                    ((n = r = a.onload = a.onerror = a.onabort = a.onreadystatechange = null),
                                    "abort" === e
                                        ? a.abort()
                                        : "error" === e
                                        ? "number" != typeof a.status
                                            ? o(0, "error")
                                            : o(a.status, a.statusText)
                                        : o(
                                              Ot[a.status] || a.status,
                                              a.statusText,
                                              "text" !==
                                                  (a.responseType || "text") ||
                                                  "string" !=
                                                      typeof a.responseText
                                                  ? { binary: a.response }
                                                  : { text: a.responseText },
                                              a.getAllResponseHeaders()
                                          ));
                            };
                        }),
                            (a.onload = n()),
                            (r = a.onerror = n("error")),
                            void 0 !== a.onabort
                                ? (a.onabort = r)
                                : (a.onreadystatechange = function () {
                                      4 === a.readyState &&
                                          e.setTimeout(function () {
                                              n && r();
                                          });
                                  }),
                            (n = n("abort"));
                        try {
                            a.send((t.hasContent && t.data) || null);
                        } catch (u) {
                            if (n) throw u;
                        }
                    },
                    abort: function () {
                        n && n();
                    },
                };
        }),
        oe.ajaxSetup({
            accepts: {
                script:
                    "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
            },
            contents: { script: /\b(?:java|ecma)script\b/ },
            converters: {
                "text script": function (e) {
                    return oe.globalEval(e), e;
                },
            },
        }),
        oe.ajaxPrefilter("script", function (e) {
            void 0 === e.cache && (e.cache = !1),
                e.crossDomain && (e.type = "GET");
        }),
        oe.ajaxTransport("script", function (e) {
            if (e.crossDomain) {
                var t, n;
                return {
                    send: function (r, i) {
                        (t = oe("<script>")
                            .prop({ charset: e.scriptCharset, src: e.url })
                            .on(
                                "load error",
                                (n = function (e) {
                                    t.remove(),
                                        (n = null),
                                        e &&
                                            i(
                                                "error" === e.type ? 404 : 200,
                                                e.type
                                            );
                                })
                            )),
                            G.head.appendChild(t[0]);
                    },
                    abort: function () {
                        n && n();
                    },
                };
            }
        });
    var Pt = [],
        Rt = /(=)\?(?=&|$)|\?\?/;
    oe.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = Pt.pop() || oe.expando + "_" + mt++;
            return (this[e] = !0), e;
        },
    }),
        oe.ajaxPrefilter("json jsonp", function (t, n, r) {
            var i,
                o,
                s,
                a =
                    t.jsonp !== !1 &&
                    (Rt.test(t.url)
                        ? "url"
                        : "string" == typeof t.data &&
                          0 ===
                              (t.contentType || "").indexOf(
                                  "application/x-www-form-urlencoded"
                              ) &&
                          Rt.test(t.data) &&
                          "data");
            if (a || "jsonp" === t.dataTypes[0])
                return (
                    (i = t.jsonpCallback = oe.isFunction(t.jsonpCallback)
                        ? t.jsonpCallback()
                        : t.jsonpCallback),
                    a
                        ? (t[a] = t[a].replace(Rt, "$1" + i))
                        : t.jsonp !== !1 &&
                          (t.url +=
                              (yt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
                    (t.converters["script json"] = function () {
                        return s || oe.error(i + " was not called"), s[0];
                    }),
                    (t.dataTypes[0] = "json"),
                    (o = e[i]),
                    (e[i] = function () {
                        s = arguments;
                    }),
                    r.always(function () {
                        void 0 === o ? oe(e).removeProp(i) : (e[i] = o),
                            t[i] &&
                                ((t.jsonpCallback = n.jsonpCallback),
                                Pt.push(i)),
                            s && oe.isFunction(o) && o(s[0]),
                            (s = o = void 0);
                    }),
                    "script"
                );
        }),
        (oe.parseHTML = function (e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && ((n = t), (t = !1)), (t = t || G);
            var r = he.exec(e),
                i = !n && [];
            return r
                ? [t.createElement(r[1])]
                : ((r = p([e], t, i)),
                  i && i.length && oe(i).remove(),
                  oe.merge([], r.childNodes));
        });
    var Mt = oe.fn.load;
    (oe.fn.load = function (e, t, n) {
        if ("string" != typeof e && Mt) return Mt.apply(this, arguments);
        var r,
            i,
            o,
            s = this,
            a = e.indexOf(" ");
        return (
            a > -1 && ((r = oe.trim(e.slice(a))), (e = e.slice(0, a))),
            oe.isFunction(t)
                ? ((n = t), (t = void 0))
                : t && "object" == typeof t && (i = "POST"),
            s.length > 0 &&
                oe
                    .ajax({
                        url: e,
                        type: i || "GET",
                        dataType: "html",
                        data: t,
                    })
                    .done(function (e) {
                        (o = arguments),
                            s.html(
                                r
                                    ? oe("<div>")
                                          .append(oe.parseHTML(e))
                                          .find(r)
                                    : e
                            );
                    })
                    .always(
                        n &&
                            function (e, t) {
                                s.each(function () {
                                    n.apply(this, o || [e.responseText, t, e]);
                                });
                            }
                    ),
            this
        );
    }),
        oe.each(
            [
                "ajaxStart",
                "ajaxStop",
                "ajaxComplete",
                "ajaxError",
                "ajaxSuccess",
                "ajaxSend",
            ],
            function (e, t) {
                oe.fn[t] = function (e) {
                    return this.on(t, e);
                };
            }
        ),
        (oe.expr.filters.animated = function (e) {
            return oe.grep(oe.timers, function (t) {
                return e === t.elem;
            }).length;
        }),
        (oe.offset = {
            setOffset: function (e, t, n) {
                var r,
                    i,
                    o,
                    s,
                    a,
                    u,
                    l,
                    c = oe.css(e, "position"),
                    f = oe(e),
                    p = {};
                "static" === c && (e.style.position = "relative"),
                    (a = f.offset()),
                    (o = oe.css(e, "top")),
                    (u = oe.css(e, "left")),
                    (l =
                        ("absolute" === c || "fixed" === c) &&
                        (o + u).indexOf("auto") > -1),
                    l
                        ? ((r = f.position()), (s = r.top), (i = r.left))
                        : ((s = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
                    oe.isFunction(t) && (t = t.call(e, n, oe.extend({}, a))),
                    null != t.top && (p.top = t.top - a.top + s),
                    null != t.left && (p.left = t.left - a.left + i),
                    "using" in t ? t.using.call(e, p) : f.css(p);
            },
        }),
        oe.fn.extend({
            offset: function (e) {
                if (arguments.length)
                    return void 0 === e
                        ? this
                        : this.each(function (t) {
                              oe.offset.setOffset(this, e, t);
                          });
                var t,
                    n,
                    r = this[0],
                    i = { top: 0, left: 0 },
                    o = r && r.ownerDocument;
                if (o)
                    return (
                        (t = o.documentElement),
                        oe.contains(t, r)
                            ? ((i = r.getBoundingClientRect()),
                              (n = V(o)),
                              {
                                  top: i.top + n.pageYOffset - t.clientTop,
                                  left: i.left + n.pageXOffset - t.clientLeft,
                              })
                            : i
                    );
            },
            position: function () {
                if (this[0]) {
                    var e,
                        t,
                        n = this[0],
                        r = { top: 0, left: 0 };
                    return (
                        "fixed" === oe.css(n, "position")
                            ? (t = n.getBoundingClientRect())
                            : ((e = this.offsetParent()),
                              (t = this.offset()),
                              oe.nodeName(e[0], "html") || (r = e.offset()),
                              (r.top += oe.css(e[0], "borderTopWidth", !0)),
                              (r.left += oe.css(e[0], "borderLeftWidth", !0))),
                        {
                            top: t.top - r.top - oe.css(n, "marginTop", !0),
                            left: t.left - r.left - oe.css(n, "marginLeft", !0),
                        }
                    );
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    for (
                        var e = this.offsetParent;
                        e && "static" === oe.css(e, "position");

                    )
                        e = e.offsetParent;
                    return e || Ke;
                });
            },
        }),
        oe.each(
            { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
            function (e, t) {
                var n = "pageYOffset" === t;
                oe.fn[e] = function (r) {
                    return Ce(
                        this,
                        function (e, r, i) {
                            var o = V(e);
                            return void 0 === i
                                ? o
                                    ? o[t]
                                    : e[r]
                                : void (o
                                      ? o.scrollTo(
                                            n ? o.pageXOffset : i,
                                            n ? i : o.pageYOffset
                                        )
                                      : (e[r] = i));
                        },
                        e,
                        r,
                        arguments.length
                    );
                };
            }
        ),
        oe.each(["top", "left"], function (e, t) {
            oe.cssHooks[t] = S(re.pixelPosition, function (e, n) {
                if (n)
                    return (
                        (n = N(e, t)),
                        Ge.test(n) ? oe(e).position()[t] + "px" : n
                    );
            });
        }),
        oe.each({ Height: "height", Width: "width" }, function (e, t) {
            oe.each(
                { padding: "inner" + e, content: t, "": "outer" + e },
                function (n, r) {
                    oe.fn[r] = function (r, i) {
                        var o =
                                arguments.length &&
                                (n || "boolean" != typeof r),
                            s =
                                n ||
                                (r === !0 || i === !0 ? "margin" : "border");
                        return Ce(
                            this,
                            function (t, n, r) {
                                var i;
                                return oe.isWindow(t)
                                    ? t.document.documentElement["client" + e]
                                    : 9 === t.nodeType
                                    ? ((i = t.documentElement),
                                      Math.max(
                                          t.body["scroll" + e],
                                          i["scroll" + e],
                                          t.body["offset" + e],
                                          i["offset" + e],
                                          i["client" + e]
                                      ))
                                    : void 0 === r
                                    ? oe.css(t, n, s)
                                    : oe.style(t, n, r, s);
                            },
                            t,
                            o ? r : void 0,
                            o,
                            null
                        );
                    };
                }
            );
        }),
        oe.fn.extend({
            bind: function (e, t, n) {
                return this.on(e, null, t, n);
            },
            unbind: function (e, t) {
                return this.off(e, null, t);
            },
            delegate: function (e, t, n, r) {
                return this.on(t, e, n, r);
            },
            undelegate: function (e, t, n) {
                return 1 === arguments.length
                    ? this.off(e, "**")
                    : this.off(t, e || "**", n);
            },
            size: function () {
                return this.length;
            },
        }),
        (oe.fn.andSelf = oe.fn.addBack),
        "function" == typeof define &&
            define.amd &&
            define("jquery", [], function () {
                return oe;
            });
    var It = e.jQuery,
        Wt = e.$;
    return (
        (oe.noConflict = function (t) {
            return (
                e.$ === oe && (e.$ = Wt),
                t && e.jQuery === oe && (e.jQuery = It),
                oe
            );
        }),
        t || (e.jQuery = e.$ = oe),
        oe
    );
});
!(function (t) {
    function a(t, a) {
        for (var e = window, r = (t || "").split("."); e && r.length; )
            e = e[r.shift()];
        return "function" == typeof e
            ? e
            : (a.push(t), Function.constructor.apply(null, a));
    }
    function e(t) {
        return "GET" === t || "POST" === t;
    }
    function r(t, a) {
        e(a) || t.setRequestHeader("X-HTTP-Method-Override", a);
    }
    function n(a, e, r) {
        var n;
        r.indexOf("application/x-javascript") === -1 &&
            ((n = (a.getAttribute("data-ajax-mode") || "").toUpperCase()),
            t(a.getAttribute("data-ajax-update")).each(function (a, r) {
                var i;
                switch (n) {
                    case "BEFORE":
                        (i = r.firstChild),
                            t("<div />")
                                .html(e)
                                .contents()
                                .each(function () {
                                    r.insertBefore(this, i);
                                });
                        break;
                    case "AFTER":
                        t("<div />")
                            .html(e)
                            .contents()
                            .each(function () {
                                r.appendChild(this);
                            });
                        break;
                    case "REPLACE-WITH":
                        t(r).replaceWith(e);
                        break;
                    default:
                        t(r).html(e);
                }
            }));
    }
    function i(i, u) {
        var o, c, d, s;
        (o = i.getAttribute("data-ajax-confirm")),
            (o && !window.confirm(o)) ||
                ((c = t(i.getAttribute("data-ajax-loading"))),
                (s =
                    parseInt(
                        i.getAttribute("data-ajax-loading-duration"),
                        10
                    ) || 0),
                t.extend(u, {
                    type: i.getAttribute("data-ajax-method") || void 0,
                    url: i.getAttribute("data-ajax-url") || void 0,
                    cache:
                        "true" ===
                        (i.getAttribute("data-ajax-cache") || "").toLowerCase(),
                    beforeSend: function (t) {
                        var e;
                        return (
                            r(t, d),
                            (e = a(i.getAttribute("data-ajax-begin"), [
                                "xhr",
                            ]).apply(i, arguments)),
                            e !== !1 && c.show(s),
                            e
                        );
                    },
                    complete: function () {
                        c.hide(s),
                            a(i.getAttribute("data-ajax-complete"), [
                                "xhr",
                                "status",
                            ]).apply(i, arguments);
                    },
                    success: function (t, e, r) {
                        n(
                            i,
                            t,
                            r.getResponseHeader("Content-Type") || "text/html"
                        ),
                            a(i.getAttribute("data-ajax-success"), [
                                "data",
                                "status",
                                "xhr",
                            ]).apply(i, arguments);
                    },
                    error: function () {
                        a(i.getAttribute("data-ajax-failure"), [
                            "xhr",
                            "status",
                            "error",
                        ]).apply(i, arguments);
                    },
                }),
                u.data.push({
                    name: "X-Requested-With",
                    value: "XMLHttpRequest",
                }),
                (d = u.type.toUpperCase()),
                e(d) ||
                    ((u.type = "POST"),
                    u.data.push({ name: "X-HTTP-Method-Override", value: d })),
                t.ajax(u));
    }
    function u(a) {
        var e = t(a).data(d);
        return !e || !e.validate || e.validate();
    }
    var o = "unobtrusiveAjaxClick",
        c = "unobtrusiveAjaxClickTarget",
        d = "unobtrusiveValidation";
    t(document).on("click", "a[data-ajax=true]", function (t) {
        t.preventDefault(), i(this, { url: this.href, type: "GET", data: [] });
    }),
        t(document).on(
            "click",
            "form[data-ajax=true] input[type=image]",
            function (a) {
                var e = a.target.name,
                    r = t(a.target),
                    n = t(r.parents("form")[0]),
                    i = r.offset();
                n.data(o, [
                    { name: e + ".x", value: Math.round(a.pageX - i.left) },
                    { name: e + ".y", value: Math.round(a.pageY - i.top) },
                ]),
                    setTimeout(function () {
                        n.removeData(o);
                    }, 0);
            }
        ),
        t(document).on("click", "form[data-ajax=true] :submit", function (a) {
            var e = a.currentTarget.name,
                r = t(a.target),
                n = t(r.parents("form")[0]);
            n.data(o, e ? [{ name: e, value: a.currentTarget.value }] : []),
                n.data(c, r),
                setTimeout(function () {
                    n.removeData(o), n.removeData(c);
                }, 0);
        }),
        t(document).on("submit", "form[data-ajax=true]", function (a) {
            var e = t(this).data(o) || [],
                r = t(this).data(c),
                n = r && r.hasClass("cancel");
            a.preventDefault(),
                (n || u(this)) &&
                    i(this, {
                        url: this.action,
                        type: this.method || "GET",
                        data: e.concat(t(this).serializeArray()),
                    });
        });
})(jQuery);
!(function (t) {
    "function" == typeof define && define.amd
        ? define(["jquery"], t)
        : "object" == typeof module && module.exports
        ? (module.exports = t(require("jquery")))
        : t(jQuery);
})(function (t) {
    t.extend(t.fn, {
        validate: function (e) {
            if (!this.length)
                return void (
                    e &&
                    e.debug &&
                    window.console &&
                    console.warn(
                        "Nothing selected, can't validate, returning nothing."
                    )
                );
            var i = t.data(this[0], "validator");
            return i
                ? i
                : (this.attr("novalidate", "novalidate"),
                  (i = new t.validator(e, this[0])),
                  t.data(this[0], "validator", i),
                  i.settings.onsubmit &&
                      (this.on("click.validate", ":submit", function (e) {
                          i.settings.submitHandler &&
                              (i.submitButton = e.target),
                              t(this).hasClass("cancel") &&
                                  (i.cancelSubmit = !0),
                              void 0 !== t(this).attr("formnovalidate") &&
                                  (i.cancelSubmit = !0);
                      }),
                      this.on("submit.validate", function (e) {
                          function s() {
                              var s, r;
                              return (
                                  !i.settings.submitHandler ||
                                  (i.submitButton &&
                                      (s = t("<input type='hidden'/>")
                                          .attr("name", i.submitButton.name)
                                          .val(t(i.submitButton).val())
                                          .appendTo(i.currentForm)),
                                  (r = i.settings.submitHandler.call(
                                      i,
                                      i.currentForm,
                                      e
                                  )),
                                  i.submitButton && s.remove(),
                                  void 0 !== r && r)
                              );
                          }
                          return (
                              i.settings.debug && e.preventDefault(),
                              i.cancelSubmit
                                  ? ((i.cancelSubmit = !1), s())
                                  : i.form()
                                  ? i.pendingRequest
                                      ? ((i.formSubmitted = !0), !1)
                                      : s()
                                  : (i.focusInvalid(), !1)
                          );
                      })),
                  i);
        },
        valid: function () {
            var e, i, s;
            return (
                t(this[0]).is("form")
                    ? (e = this.validate().form())
                    : ((s = []),
                      (e = !0),
                      (i = t(this[0].form).validate()),
                      this.each(function () {
                          (e = i.element(this) && e),
                              e || (s = s.concat(i.errorList));
                      }),
                      (i.errorList = s)),
                e
            );
        },
        rules: function (e, i) {
            if (this.length) {
                var s,
                    r,
                    n,
                    a,
                    o,
                    l,
                    h = this[0];
                if (e)
                    switch (
                        ((s = t.data(h.form, "validator").settings),
                        (r = s.rules),
                        (n = t.validator.staticRules(h)),
                        e)
                    ) {
                        case "add":
                            t.extend(n, t.validator.normalizeRule(i)),
                                delete n.messages,
                                (r[h.name] = n),
                                i.messages &&
                                    (s.messages[h.name] = t.extend(
                                        s.messages[h.name],
                                        i.messages
                                    ));
                            break;
                        case "remove":
                            return i
                                ? ((l = {}),
                                  t.each(i.split(/\s/), function (e, i) {
                                      (l[i] = n[i]),
                                          delete n[i],
                                          "required" === i &&
                                              t(h).removeAttr("aria-required");
                                  }),
                                  l)
                                : (delete r[h.name], n);
                    }
                return (
                    (a = t.validator.normalizeRules(
                        t.extend(
                            {},
                            t.validator.classRules(h),
                            t.validator.attributeRules(h),
                            t.validator.dataRules(h),
                            t.validator.staticRules(h)
                        ),
                        h
                    )),
                    a.required &&
                        ((o = a.required),
                        delete a.required,
                        (a = t.extend({ required: o }, a)),
                        t(h).attr("aria-required", "true")),
                    a.remote &&
                        ((o = a.remote),
                        delete a.remote,
                        (a = t.extend(a, { remote: o }))),
                    a
                );
            }
        },
    }),
        t.extend(t.expr[":"], {
            blank: function (e) {
                return !t.trim("" + t(e).val());
            },
            filled: function (e) {
                var i = t(e).val();
                return null !== i && !!t.trim("" + i);
            },
            unchecked: function (e) {
                return !t(e).prop("checked");
            },
        }),
        (t.validator = function (e, i) {
            (this.settings = t.extend(!0, {}, t.validator.defaults, e)),
                (this.currentForm = i),
                this.init();
        }),
        (t.validator.format = function (e, i) {
            return 1 === arguments.length
                ? function () {
                      var i = t.makeArray(arguments);
                      return i.unshift(e), t.validator.format.apply(this, i);
                  }
                : void 0 === i
                ? e
                : (arguments.length > 2 &&
                      i.constructor !== Array &&
                      (i = t.makeArray(arguments).slice(1)),
                  i.constructor !== Array && (i = [i]),
                  t.each(i, function (t, i) {
                      e = e.replace(
                          new RegExp("\\{" + t + "\\}", "g"),
                          function () {
                              return i;
                          }
                      );
                  }),
                  e);
        }),
        t.extend(t.validator, {
            defaults: {
                messages: {},
                groups: {},
                rules: {},
                errorClass: "error",
                pendingClass: "pending",
                validClass: "valid",
                errorElement: "label",
                focusCleanup: !1,
                focusInvalid: !0,
                errorContainer: t([]),
                errorLabelContainer: t([]),
                onsubmit: !0,
                ignore: ":hidden",
                ignoreTitle: !1,
                onfocusin: function (t) {
                    (this.lastActive = t),
                        this.settings.focusCleanup &&
                            (this.settings.unhighlight &&
                                this.settings.unhighlight.call(
                                    this,
                                    t,
                                    this.settings.errorClass,
                                    this.settings.validClass
                                ),
                            this.hideThese(this.errorsFor(t)));
                },
                onfocusout: function (t) {
                    this.checkable(t) ||
                        (!(t.name in this.submitted) && this.optional(t)) ||
                        this.element(t);
                },
                onkeyup: function (e, i) {
                    var s = [
                        16,
                        17,
                        18,
                        20,
                        35,
                        36,
                        37,
                        38,
                        39,
                        40,
                        45,
                        144,
                        225,
                    ];
                    (9 === i.which && "" === this.elementValue(e)) ||
                        t.inArray(i.keyCode, s) !== -1 ||
                        ((e.name in this.submitted || e.name in this.invalid) &&
                            this.element(e));
                },
                onclick: function (t) {
                    t.name in this.submitted
                        ? this.element(t)
                        : t.parentNode.name in this.submitted &&
                          this.element(t.parentNode);
                },
                highlight: function (e, i, s) {
                    "radio" === e.type
                        ? this.findByName(e.name).addClass(i).removeClass(s)
                        : t(e).addClass(i).removeClass(s);
                },
                unhighlight: function (e, i, s) {
                    "radio" === e.type
                        ? this.findByName(e.name).removeClass(i).addClass(s)
                        : t(e).removeClass(i).addClass(s);
                },
            },
            setDefaults: function (e) {
                t.extend(t.validator.defaults, e);
            },
            messages: {
                required: "This field is required.",
                remote: "Please fix this field.",
                email: "Please enter a valid email address.",
                url: "Please enter a valid URL.",
                date: "Please enter a valid date.",
                dateISO: "Please enter a valid date ( ISO ).",
                number: "Please enter a valid number.",
                digits: "Please enter only digits.",
                equalTo: "Please enter the same value again.",
                maxlength: t.validator.format(
                    "Please enter no more than {0} characters."
                ),
                minlength: t.validator.format(
                    "Please enter at least {0} characters."
                ),
                rangelength: t.validator.format(
                    "Please enter a value between {0} and {1} characters long."
                ),
                range: t.validator.format(
                    "Please enter a value between {0} and {1}."
                ),
                max: t.validator.format(
                    "Please enter a value less than or equal to {0}."
                ),
                min: t.validator.format(
                    "Please enter a value greater than or equal to {0}."
                ),
                step: t.validator.format("Please enter a multiple of {0}."),
            },
            autoCreateRanges: !1,
            prototype: {
                init: function () {
                    function e(e) {
                        var i = t.data(this.form, "validator"),
                            s = "on" + e.type.replace(/^validate/, ""),
                            r = i.settings;
                        r[s] && !t(this).is(r.ignore) && r[s].call(i, this, e);
                    }
                    (this.labelContainer = t(
                        this.settings.errorLabelContainer
                    )),
                        (this.errorContext =
                            (this.labelContainer.length &&
                                this.labelContainer) ||
                            t(this.currentForm)),
                        (this.containers = t(this.settings.errorContainer).add(
                            this.settings.errorLabelContainer
                        )),
                        (this.submitted = {}),
                        (this.valueCache = {}),
                        (this.pendingRequest = 0),
                        (this.pending = {}),
                        (this.invalid = {}),
                        this.reset();
                    var i,
                        s = (this.groups = {});
                    t.each(this.settings.groups, function (e, i) {
                        "string" == typeof i && (i = i.split(/\s/)),
                            t.each(i, function (t, i) {
                                s[i] = e;
                            });
                    }),
                        (i = this.settings.rules),
                        t.each(i, function (e, s) {
                            i[e] = t.validator.normalizeRule(s);
                        }),
                        t(this.currentForm)
                            .on(
                                "focusin.validate focusout.validate keyup.validate",
                                ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable]",
                                e
                            )
                            .on(
                                "click.validate",
                                "select, option, [type='radio'], [type='checkbox']",
                                e
                            ),
                        this.settings.invalidHandler &&
                            t(this.currentForm).on(
                                "invalid-form.validate",
                                this.settings.invalidHandler
                            ),
                        t(this.currentForm)
                            .find("[required], [data-rule-required], .required")
                            .attr("aria-required", "true");
                },
                form: function () {
                    return (
                        this.checkForm(),
                        t.extend(this.submitted, this.errorMap),
                        (this.invalid = t.extend({}, this.errorMap)),
                        this.valid() ||
                            t(this.currentForm).triggerHandler("invalid-form", [
                                this,
                            ]),
                        this.showErrors(),
                        this.valid()
                    );
                },
                checkForm: function () {
                    this.prepareForm();
                    for (
                        var t = 0, e = (this.currentElements = this.elements());
                        e[t];
                        t++
                    )
                        this.check(e[t]);
                    return this.valid();
                },
                element: function (e) {
                    var i,
                        s,
                        r = this.clean(e),
                        n = this.validationTargetFor(r),
                        a = this,
                        o = !0;
                    return (
                        void 0 === n
                            ? delete this.invalid[r.name]
                            : (this.prepareElement(n),
                              (this.currentElements = t(n)),
                              (s = this.groups[n.name]),
                              s &&
                                  t.each(this.groups, function (t, e) {
                                      e === s &&
                                          t !== n.name &&
                                          ((r = a.validationTargetFor(
                                              a.clean(a.findByName(t))
                                          )),
                                          r &&
                                              r.name in a.invalid &&
                                              (a.currentElements.push(r),
                                              (o = o && a.check(r))));
                                  }),
                              (i = this.check(n) !== !1),
                              (o = o && i),
                              i
                                  ? (this.invalid[n.name] = !1)
                                  : (this.invalid[n.name] = !0),
                              this.numberOfInvalids() ||
                                  (this.toHide = this.toHide.add(
                                      this.containers
                                  )),
                              this.showErrors(),
                              t(e).attr("aria-invalid", !i)),
                        o
                    );
                },
                showErrors: function (e) {
                    if (e) {
                        var i = this;
                        t.extend(this.errorMap, e),
                            (this.errorList = t.map(this.errorMap, function (
                                t,
                                e
                            ) {
                                return {
                                    message: t,
                                    element: i.findByName(e)[0],
                                };
                            })),
                            (this.successList = t.grep(
                                this.successList,
                                function (t) {
                                    return !(t.name in e);
                                }
                            ));
                    }
                    this.settings.showErrors
                        ? this.settings.showErrors.call(
                              this,
                              this.errorMap,
                              this.errorList
                          )
                        : this.defaultShowErrors();
                },
                resetForm: function () {
                    t.fn.resetForm && t(this.currentForm).resetForm(),
                        (this.invalid = {}),
                        (this.submitted = {}),
                        this.prepareForm(),
                        this.hideErrors();
                    var e = this.elements()
                        .removeData("previousValue")
                        .removeAttr("aria-invalid");
                    this.resetElements(e);
                },
                resetElements: function (t) {
                    var e;
                    if (this.settings.unhighlight)
                        for (e = 0; t[e]; e++)
                            this.settings.unhighlight.call(
                                this,
                                t[e],
                                this.settings.errorClass,
                                ""
                            ),
                                this.findByName(t[e].name).removeClass(
                                    this.settings.validClass
                                );
                    else
                        t.removeClass(this.settings.errorClass).removeClass(
                            this.settings.validClass
                        );
                },
                numberOfInvalids: function () {
                    return this.objectLength(this.invalid);
                },
                objectLength: function (t) {
                    var e,
                        i = 0;
                    for (e in t) t[e] && i++;
                    return i;
                },
                hideErrors: function () {
                    this.hideThese(this.toHide);
                },
                hideThese: function (t) {
                    t.not(this.containers).text(""), this.addWrapper(t).hide();
                },
                valid: function () {
                    return 0 === this.size();
                },
                size: function () {
                    return this.errorList.length;
                },
                focusInvalid: function () {
                    if (this.settings.focusInvalid)
                        try {
                            t(
                                this.findLastActive() ||
                                    (this.errorList.length &&
                                        this.errorList[0].element) ||
                                    []
                            )
                                .filter(":visible")
                                .focus()
                                .trigger("focusin");
                        } catch (e) {}
                },
                findLastActive: function () {
                    var e = this.lastActive;
                    return (
                        e &&
                        1 ===
                            t.grep(this.errorList, function (t) {
                                return t.element.name === e.name;
                            }).length &&
                        e
                    );
                },
                elements: function () {
                    var e = this,
                        i = {};
                    return t(this.currentForm)
                        .find("input, select, textarea, [contenteditable]")
                        .not(":submit, :reset, :image, :disabled")
                        .not(this.settings.ignore)
                        .filter(function () {
                            var s = this.name || t(this).attr("name");
                            return (
                                !s &&
                                    e.settings.debug &&
                                    window.console &&
                                    console.error(
                                        "%o has no name assigned",
                                        this
                                    ),
                                this.hasAttribute("contenteditable") &&
                                    (this.form = t(this).closest("form")[0]),
                                !(s in i || !e.objectLength(t(this).rules())) &&
                                    ((i[s] = !0), !0)
                            );
                        });
                },
                clean: function (e) {
                    return t(e)[0];
                },
                errors: function () {
                    var e = this.settings.errorClass.split(" ").join(".");
                    return t(
                        this.settings.errorElement + "." + e,
                        this.errorContext
                    );
                },
                resetInternals: function () {
                    (this.successList = []),
                        (this.errorList = []),
                        (this.errorMap = {}),
                        (this.toShow = t([])),
                        (this.toHide = t([]));
                },
                reset: function () {
                    this.resetInternals(), (this.currentElements = t([]));
                },
                prepareForm: function () {
                    this.reset(),
                        (this.toHide = this.errors().add(this.containers));
                },
                prepareElement: function (t) {
                    this.reset(), (this.toHide = this.errorsFor(t));
                },
                elementValue: function (e) {
                    var i,
                        s,
                        r = t(e),
                        n = e.type;
                    return "radio" === n || "checkbox" === n
                        ? this.findByName(e.name).filter(":checked").val()
                        : "number" === n && "undefined" != typeof e.validity
                        ? e.validity.badInput
                            ? "NaN"
                            : r.val()
                        : ((i = e.hasAttribute("contenteditable")
                              ? r.text()
                              : r.val()),
                          "file" === n
                              ? "C:\\fakepath\\" === i.substr(0, 12)
                                  ? i.substr(12)
                                  : ((s = i.lastIndexOf("/")),
                                    s >= 0
                                        ? i.substr(s + 1)
                                        : ((s = i.lastIndexOf("\\")),
                                          s >= 0 ? i.substr(s + 1) : i))
                              : "string" == typeof i
                              ? i.replace(/\r/g, "")
                              : i);
                },
                check: function (e) {
                    e = this.validationTargetFor(this.clean(e));
                    var i,
                        s,
                        r,
                        n = t(e).rules(),
                        a = t.map(n, function (t, e) {
                            return e;
                        }).length,
                        o = !1,
                        l = this.elementValue(e);
                    if ("function" == typeof n.normalizer) {
                        if (
                            ((l = n.normalizer.call(e, l)),
                            "string" != typeof l)
                        )
                            throw new TypeError(
                                "The normalizer should return a string value."
                            );
                        delete n.normalizer;
                    }
                    for (s in n) {
                        r = { method: s, parameters: n[s] };
                        try {
                            if (
                                ((i = t.validator.methods[s].call(
                                    this,
                                    l,
                                    e,
                                    r.parameters
                                )),
                                "dependency-mismatch" === i && 1 === a)
                            ) {
                                o = !0;
                                continue;
                            }
                            if (((o = !1), "pending" === i))
                                return void (this.toHide = this.toHide.not(
                                    this.errorsFor(e)
                                ));
                            if (!i) return this.formatAndAdd(e, r), !1;
                        } catch (h) {
                            throw (
                                (this.settings.debug &&
                                    window.console &&
                                    console.log(
                                        "Exception occurred when checking element " +
                                            e.id +
                                            ", check the '" +
                                            r.method +
                                            "' method.",
                                        h
                                    ),
                                h instanceof TypeError &&
                                    (h.message +=
                                        ".  Exception occurred when checking element " +
                                        e.id +
                                        ", check the '" +
                                        r.method +
                                        "' method."),
                                h)
                            );
                        }
                    }
                    if (!o)
                        return (
                            this.objectLength(n) && this.successList.push(e), !0
                        );
                },
                customDataMessage: function (e, i) {
                    return (
                        t(e).data(
                            "msg" +
                                i.charAt(0).toUpperCase() +
                                i.substring(1).toLowerCase()
                        ) || t(e).data("msg")
                    );
                },
                customMessage: function (t, e) {
                    var i = this.settings.messages[t];
                    return i && (i.constructor === String ? i : i[e]);
                },
                findDefined: function () {
                    for (var t = 0; t < arguments.length; t++)
                        if (void 0 !== arguments[t]) return arguments[t];
                },
                defaultMessage: function (e, i) {
                    var s = this.findDefined(
                            this.customMessage(e.name, i.method),
                            this.customDataMessage(e, i.method),
                            (!this.settings.ignoreTitle && e.title) || void 0,
                            t.validator.messages[i.method],
                            "<strong>Warning: No message defined for " +
                                e.name +
                                "</strong>"
                        ),
                        r = /\$?\{(\d+)\}/g;
                    return (
                        "function" == typeof s
                            ? (s = s.call(this, i.parameters, e))
                            : r.test(s) &&
                              (s = t.validator.format(
                                  s.replace(r, "{$1}"),
                                  i.parameters
                              )),
                        s
                    );
                },
                formatAndAdd: function (t, e) {
                    var i = this.defaultMessage(t, e);
                    this.errorList.push({
                        message: i,
                        element: t,
                        method: e.method,
                    }),
                        (this.errorMap[t.name] = i),
                        (this.submitted[t.name] = i);
                },
                addWrapper: function (t) {
                    return (
                        this.settings.wrapper &&
                            (t = t.add(t.parent(this.settings.wrapper))),
                        t
                    );
                },
                defaultShowErrors: function () {
                    var t, e, i;
                    for (t = 0; this.errorList[t]; t++)
                        (i = this.errorList[t]),
                            this.settings.highlight &&
                                this.settings.highlight.call(
                                    this,
                                    i.element,
                                    this.settings.errorClass,
                                    this.settings.validClass
                                ),
                            this.showLabel(i.element, i.message);
                    if (
                        (this.errorList.length &&
                            (this.toShow = this.toShow.add(this.containers)),
                        this.settings.success)
                    )
                        for (t = 0; this.successList[t]; t++)
                            this.showLabel(this.successList[t]);
                    if (this.settings.unhighlight)
                        for (t = 0, e = this.validElements(); e[t]; t++)
                            this.settings.unhighlight.call(
                                this,
                                e[t],
                                this.settings.errorClass,
                                this.settings.validClass
                            );
                    (this.toHide = this.toHide.not(this.toShow)),
                        this.hideErrors(),
                        this.addWrapper(this.toShow).show();
                },
                validElements: function () {
                    return this.currentElements.not(this.invalidElements());
                },
                invalidElements: function () {
                    return t(this.errorList).map(function () {
                        return this.element;
                    });
                },
                showLabel: function (e, i) {
                    var s,
                        r,
                        n,
                        a,
                        o = this.errorsFor(e),
                        l = this.idOrName(e),
                        h = t(e).attr("aria-describedby");
                    o.length
                        ? (o
                              .removeClass(this.settings.validClass)
                              .addClass(this.settings.errorClass),
                          o.html(i))
                        : ((o = t("<" + this.settings.errorElement + ">")
                              .attr("id", l + "-error")
                              .addClass(this.settings.errorClass)
                              .html(i || "")),
                          (s = o),
                          this.settings.wrapper &&
                              (s = o
                                  .hide()
                                  .show()
                                  .wrap("<" + this.settings.wrapper + "/>")
                                  .parent()),
                          this.labelContainer.length
                              ? this.labelContainer.append(s)
                              : this.settings.errorPlacement
                              ? this.settings.errorPlacement(s, t(e))
                              : s.insertAfter(e),
                          o.is("label")
                              ? o.attr("for", l)
                              : 0 ===
                                    o.parents(
                                        "label[for='" +
                                            this.escapeCssMeta(l) +
                                            "']"
                                    ).length &&
                                ((n = o.attr("id")),
                                h
                                    ? h.match(
                                          new RegExp(
                                              "\\b" +
                                                  this.escapeCssMeta(n) +
                                                  "\\b"
                                          )
                                      ) || (h += " " + n)
                                    : (h = n),
                                t(e).attr("aria-describedby", h),
                                (r = this.groups[e.name]),
                                r &&
                                    ((a = this),
                                    t.each(a.groups, function (e, i) {
                                        i === r &&
                                            t(
                                                "[name='" +
                                                    a.escapeCssMeta(e) +
                                                    "']",
                                                a.currentForm
                                            ).attr(
                                                "aria-describedby",
                                                o.attr("id")
                                            );
                                    })))),
                        !i &&
                            this.settings.success &&
                            (o.text(""),
                            "string" == typeof this.settings.success
                                ? o.addClass(this.settings.success)
                                : this.settings.success(o, e)),
                        (this.toShow = this.toShow.add(o));
                },
                errorsFor: function (e) {
                    var i = this.escapeCssMeta(this.idOrName(e)),
                        s = t(e).attr("aria-describedby"),
                        r = "label[for='" + i + "'], label[for='" + i + "'] *";
                    return (
                        s &&
                            (r =
                                r +
                                ", #" +
                                this.escapeCssMeta(s).replace(/\s+/g, ", #")),
                        this.errors().filter(r)
                    );
                },
                escapeCssMeta: function (t) {
                    return t.replace(
                        /([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g,
                        "\\$1"
                    );
                },
                idOrName: function (t) {
                    return (
                        this.groups[t.name] ||
                        (this.checkable(t) ? t.name : t.id || t.name)
                    );
                },
                validationTargetFor: function (e) {
                    return (
                        this.checkable(e) && (e = this.findByName(e.name)),
                        t(e).not(this.settings.ignore)[0]
                    );
                },
                checkable: function (t) {
                    return /radio|checkbox/i.test(t.type);
                },
                findByName: function (e) {
                    return t(this.currentForm).find(
                        "[name='" + this.escapeCssMeta(e) + "']"
                    );
                },
                getLength: function (e, i) {
                    switch (i.nodeName.toLowerCase()) {
                        case "select":
                            return t("option:selected", i).length;
                        case "input":
                            if (this.checkable(i))
                                return this.findByName(i.name).filter(
                                    ":checked"
                                ).length;
                    }
                    return e.length;
                },
                depend: function (t, e) {
                    return (
                        !this.dependTypes[typeof t] ||
                        this.dependTypes[typeof t](t, e)
                    );
                },
                dependTypes: {
                    boolean: function (t) {
                        return t;
                    },
                    string: function (e, i) {
                        return !!t(e, i.form).length;
                    },
                    function: function (t, e) {
                        return t(e);
                    },
                },
                optional: function (e) {
                    var i = this.elementValue(e);
                    return (
                        !t.validator.methods.required.call(this, i, e) &&
                        "dependency-mismatch"
                    );
                },
                startRequest: function (e) {
                    this.pending[e.name] ||
                        (this.pendingRequest++,
                        t(e).addClass(this.settings.pendingClass),
                        (this.pending[e.name] = !0));
                },
                stopRequest: function (e, i) {
                    this.pendingRequest--,
                        this.pendingRequest < 0 && (this.pendingRequest = 0),
                        delete this.pending[e.name],
                        t(e).removeClass(this.settings.pendingClass),
                        i &&
                        0 === this.pendingRequest &&
                        this.formSubmitted &&
                        this.form()
                            ? (t(this.currentForm).submit(),
                              (this.formSubmitted = !1))
                            : !i &&
                              0 === this.pendingRequest &&
                              this.formSubmitted &&
                              (t(
                                  this.currentForm
                              ).triggerHandler("invalid-form", [this]),
                              (this.formSubmitted = !1));
                },
                previousValue: function (e, i) {
                    return (
                        t.data(e, "previousValue") ||
                        t.data(e, "previousValue", {
                            old: null,
                            valid: !0,
                            message: this.defaultMessage(e, { method: i }),
                        })
                    );
                },
                destroy: function () {
                    this.resetForm(),
                        t(this.currentForm)
                            .off(".validate")
                            .removeData("validator")
                            .find(".validate-equalTo-blur")
                            .off(".validate-equalTo")
                            .removeClass("validate-equalTo-blur");
                },
            },
            classRuleSettings: {
                required: { required: !0 },
                email: { email: !0 },
                url: { url: !0 },
                date: { date: !0 },
                dateISO: { dateISO: !0 },
                number: { number: !0 },
                digits: { digits: !0 },
                creditcard: { creditcard: !0 },
            },
            addClassRules: function (e, i) {
                e.constructor === String
                    ? (this.classRuleSettings[e] = i)
                    : t.extend(this.classRuleSettings, e);
            },
            classRules: function (e) {
                var i = {},
                    s = t(e).attr("class");
                return (
                    s &&
                        t.each(s.split(" "), function () {
                            this in t.validator.classRuleSettings &&
                                t.extend(
                                    i,
                                    t.validator.classRuleSettings[this]
                                );
                        }),
                    i
                );
            },
            normalizeAttributeRule: function (t, e, i, s) {
                /min|max|step/.test(i) &&
                    (null === e || /number|range|text/.test(e)) &&
                    ((s = Number(s)), isNaN(s) && (s = void 0)),
                    s || 0 === s
                        ? (t[i] = s)
                        : e === i && "range" !== e && (t[i] = !0);
            },
            attributeRules: function (e) {
                var i,
                    s,
                    r = {},
                    n = t(e),
                    a = e.getAttribute("type");
                for (i in t.validator.methods)
                    "required" === i
                        ? ((s = e.getAttribute(i)),
                          "" === s && (s = !0),
                          (s = !!s))
                        : (s = n.attr(i)),
                        this.normalizeAttributeRule(r, a, i, s);
                return (
                    r.maxlength &&
                        /-1|2147483647|524288/.test(r.maxlength) &&
                        delete r.maxlength,
                    r
                );
            },
            dataRules: function (e) {
                var i,
                    s,
                    r = {},
                    n = t(e),
                    a = e.getAttribute("type");
                for (i in t.validator.methods)
                    (s = n.data(
                        "rule" +
                            i.charAt(0).toUpperCase() +
                            i.substring(1).toLowerCase()
                    )),
                        this.normalizeAttributeRule(r, a, i, s);
                return r;
            },
            staticRules: function (e) {
                var i = {},
                    s = t.data(e.form, "validator");
                return (
                    s.settings.rules &&
                        (i =
                            t.validator.normalizeRule(
                                s.settings.rules[e.name]
                            ) || {}),
                    i
                );
            },
            normalizeRules: function (e, i) {
                return (
                    t.each(e, function (s, r) {
                        if (r === !1) return void delete e[s];
                        if (r.param || r.depends) {
                            var n = !0;
                            switch (typeof r.depends) {
                                case "string":
                                    n = !!t(r.depends, i.form).length;
                                    break;
                                case "function":
                                    n = r.depends.call(i, i);
                            }
                            n
                                ? (e[s] = void 0 === r.param || r.param)
                                : (t
                                      .data(i.form, "validator")
                                      .resetElements(t(i)),
                                  delete e[s]);
                        }
                    }),
                    t.each(e, function (s, r) {
                        e[s] = t.isFunction(r) && "normalizer" !== s ? r(i) : r;
                    }),
                    t.each(["minlength", "maxlength"], function () {
                        e[this] && (e[this] = Number(e[this]));
                    }),
                    t.each(["rangelength", "range"], function () {
                        var i;
                        e[this] &&
                            (t.isArray(e[this])
                                ? (e[this] = [
                                      Number(e[this][0]),
                                      Number(e[this][1]),
                                  ])
                                : "string" == typeof e[this] &&
                                  ((i = e[this]
                                      .replace(/[\[\]]/g, "")
                                      .split(/[\s,]+/)),
                                  (e[this] = [Number(i[0]), Number(i[1])])));
                    }),
                    t.validator.autoCreateRanges &&
                        (null != e.min &&
                            null != e.max &&
                            ((e.range = [e.min, e.max]),
                            delete e.min,
                            delete e.max),
                        null != e.minlength &&
                            null != e.maxlength &&
                            ((e.rangelength = [e.minlength, e.maxlength]),
                            delete e.minlength,
                            delete e.maxlength)),
                    e
                );
            },
            normalizeRule: function (e) {
                if ("string" == typeof e) {
                    var i = {};
                    t.each(e.split(/\s/), function () {
                        i[this] = !0;
                    }),
                        (e = i);
                }
                return e;
            },
            addMethod: function (e, i, s) {
                (t.validator.methods[e] = i),
                    (t.validator.messages[e] =
                        void 0 !== s ? s : t.validator.messages[e]),
                    i.length < 3 &&
                        t.validator.addClassRules(
                            e,
                            t.validator.normalizeRule(e)
                        );
            },
            methods: {
                required: function (e, i, s) {
                    if (!this.depend(s, i)) return "dependency-mismatch";
                    if ("select" === i.nodeName.toLowerCase()) {
                        var r = t(i).val();
                        return r && r.length > 0;
                    }
                    return this.checkable(i)
                        ? this.getLength(e, i) > 0
                        : e.length > 0;
                },
                email: function (t, e) {
                    return (
                        this.optional(e) ||
                        /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
                            t
                        )
                    );
                },
                url: function (t, e) {
                    return (
                        this.optional(e) ||
                        /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(
                            t
                        )
                    );
                },
                date: function (t, e) {
                    return (
                        this.optional(e) ||
                        !/Invalid|NaN/.test(new Date(t).toString())
                    );
                },
                dateISO: function (t, e) {
                    return (
                        this.optional(e) ||
                        /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(
                            t
                        )
                    );
                },
                number: function (t, e) {
                    return (
                        this.optional(e) ||
                        /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)
                    );
                },
                digits: function (t, e) {
                    return this.optional(e) || /^\d+$/.test(t);
                },
                minlength: function (e, i, s) {
                    var r = t.isArray(e) ? e.length : this.getLength(e, i);
                    return this.optional(i) || r >= s;
                },
                maxlength: function (e, i, s) {
                    var r = t.isArray(e) ? e.length : this.getLength(e, i);
                    return this.optional(i) || r <= s;
                },
                rangelength: function (e, i, s) {
                    var r = t.isArray(e) ? e.length : this.getLength(e, i);
                    return this.optional(i) || (r >= s[0] && r <= s[1]);
                },
                min: function (t, e, i) {
                    return this.optional(e) || t >= i;
                },
                max: function (t, e, i) {
                    return this.optional(e) || t <= i;
                },
                range: function (t, e, i) {
                    return this.optional(e) || (t >= i[0] && t <= i[1]);
                },
                step: function (e, i, s) {
                    var r = t(i).attr("type"),
                        n =
                            "Step attribute on input type " +
                            r +
                            " is not supported.",
                        a = ["text", "number", "range"],
                        o = new RegExp("\\b" + r + "\\b"),
                        l = r && !o.test(a.join());
                    if (l) throw new Error(n);
                    return this.optional(i) || e % s === 0;
                },
                equalTo: function (e, i, s) {
                    var r = t(s);
                    return (
                        this.settings.onfocusout &&
                            r.not(".validate-equalTo-blur").length &&
                            r
                                .addClass("validate-equalTo-blur")
                                .on("blur.validate-equalTo", function () {
                                    t(i).valid();
                                }),
                        e === r.val()
                    );
                },
                remote: function (e, i, s, r) {
                    if (this.optional(i)) return "dependency-mismatch";
                    r = ("string" == typeof r && r) || "remote";
                    var n,
                        a,
                        o,
                        l = this.previousValue(i, r);
                    return (
                        this.settings.messages[i.name] ||
                            (this.settings.messages[i.name] = {}),
                        (l.originalMessage =
                            l.originalMessage ||
                            this.settings.messages[i.name][r]),
                        (this.settings.messages[i.name][r] = l.message),
                        (s = ("string" == typeof s && { url: s }) || s),
                        (o = t.param(t.extend({ data: e }, s.data))),
                        l.old === o
                            ? l.valid
                            : ((l.old = o),
                              (n = this),
                              this.startRequest(i),
                              (a = {}),
                              (a[i.name] = e),
                              t.ajax(
                                  t.extend(
                                      !0,
                                      {
                                          mode: "abort",
                                          port: "validate" + i.name,
                                          dataType: "json",
                                          data: a,
                                          context: n.currentForm,
                                          success: function (t) {
                                              var s,
                                                  a,
                                                  o,
                                                  h = t === !0 || "true" === t;
                                              (n.settings.messages[i.name][r] =
                                                  l.originalMessage),
                                                  h
                                                      ? ((o = n.formSubmitted),
                                                        n.resetInternals(),
                                                        (n.toHide = n.errorsFor(
                                                            i
                                                        )),
                                                        (n.formSubmitted = o),
                                                        n.successList.push(i),
                                                        (n.invalid[
                                                            i.name
                                                        ] = !1),
                                                        n.showErrors())
                                                      : ((s = {}),
                                                        (a =
                                                            t ||
                                                            n.defaultMessage(
                                                                i,
                                                                {
                                                                    method: r,
                                                                    parameters: e,
                                                                }
                                                            )),
                                                        (s[
                                                            i.name
                                                        ] = l.message = a),
                                                        (n.invalid[
                                                            i.name
                                                        ] = !0),
                                                        n.showErrors(s)),
                                                  (l.valid = h),
                                                  n.stopRequest(i, h);
                                          },
                                      },
                                      s
                                  )
                              ),
                              "pending")
                    );
                },
            },
        });
    var e,
        i = {};
    t.ajaxPrefilter
        ? t.ajaxPrefilter(function (t, e, s) {
              var r = t.port;
              "abort" === t.mode && (i[r] && i[r].abort(), (i[r] = s));
          })
        : ((e = t.ajax),
          (t.ajax = function (s) {
              var r = ("mode" in s ? s : t.ajaxSettings).mode,
                  n = ("port" in s ? s : t.ajaxSettings).port;
              return "abort" === r
                  ? (i[n] && i[n].abort(),
                    (i[n] = e.apply(this, arguments)),
                    i[n])
                  : e.apply(this, arguments);
          }));
});
!(function (a) {
    function e(a, e, n) {
        (a.rules[e] = n), a.message && (a.messages[e] = a.message);
    }
    function n(a) {
        return a.replace(/^\s+|\s+$/g, "").split(/\s*,\s*/g);
    }
    function t(a) {
        return a.replace(/([!"#$%&'()*+,.\/:;<=>?@\[\\\]^`{|}~])/g, "\\$1");
    }
    function r(a) {
        return a.substr(0, a.lastIndexOf(".") + 1);
    }
    function i(a, e) {
        return 0 === a.indexOf("*.") && (a = a.replace("*.", e)), a;
    }
    function o(e, n) {
        var r = a(this).find("[data-valmsg-for='" + t(n[0].name) + "']"),
            i = r.attr("data-valmsg-replace"),
            o = i ? a.parseJSON(i) !== !1 : null;
        r
            .removeClass("field-validation-valid")
            .addClass("field-validation-error"),
            e.data("unobtrusiveContainer", r),
            o
                ? (r.empty(),
                  e.removeClass("input-validation-error").appendTo(r))
                : e.hide();
    }
    function d(e, n) {
        var t = a(this).find("[data-valmsg-summary=true]"),
            r = t.find("ul");
        r &&
            r.length &&
            n.errorList.length &&
            (r.empty(),
            t
                .addClass("validation-summary-errors")
                .removeClass("validation-summary-valid"),
            a.each(n.errorList, function () {
                a("<li />").html(this.message).appendTo(r);
            }));
    }
    function s(e) {
        var n = e.data("unobtrusiveContainer");
        if (n) {
            var t = n.attr("data-valmsg-replace"),
                r = t ? a.parseJSON(t) : null;
            n
                .addClass("field-validation-valid")
                .removeClass("field-validation-error"),
                e.removeData("unobtrusiveContainer"),
                r && n.empty();
        }
    }
    function l(e) {
        var n = a(this),
            t = "__jquery_unobtrusive_validation_form_reset";
        if (!n.data(t)) {
            n.data(t, !0);
            try {
                n.data("validator").resetForm();
            } finally {
                n.removeData(t);
            }
            n
                .find(".validation-summary-errors")
                .addClass("validation-summary-valid")
                .removeClass("validation-summary-errors"),
                n
                    .find(".field-validation-error")
                    .addClass("field-validation-valid")
                    .removeClass("field-validation-error")
                    .removeData("unobtrusiveContainer")
                    .find(">*")
                    .removeData("unobtrusiveContainer");
        }
    }
    function m(e) {
        var n = a(e),
            t = n.data(v),
            r = a.proxy(l, e),
            i = p.unobtrusive.options || {},
            m = function (n, t) {
                var r = i[n];
                r && a.isFunction(r) && r.apply(e, t);
            };
        return (
            t ||
                ((t = {
                    options: {
                        errorClass: i.errorClass || "input-validation-error",
                        errorElement: i.errorElement || "span",
                        errorPlacement: function () {
                            o.apply(e, arguments),
                                m("errorPlacement", arguments);
                        },
                        invalidHandler: function () {
                            d.apply(e, arguments),
                                m("invalidHandler", arguments);
                        },
                        messages: {},
                        rules: {},
                        success: function () {
                            s.apply(e, arguments), m("success", arguments);
                        },
                    },
                    attachValidation: function () {
                        n.off("reset." + v, r)
                            .on("reset." + v, r)
                            .validate(this.options);
                    },
                    validate: function () {
                        return n.validate(), n.valid();
                    },
                }),
                n.data(v, t)),
            t
        );
    }
    var u,
        p = a.validator,
        v = "unobtrusiveValidation";
    (p.unobtrusive = {
        adapters: [],
        parseElement: function (e, n) {
            var t,
                r,
                i,
                o = a(e),
                d = o.parents("form")[0];
            d &&
                ((t = m(d)),
                (t.options.rules[e.name] = r = {}),
                (t.options.messages[e.name] = i = {}),
                a.each(this.adapters, function () {
                    var n = "data-val-" + this.name,
                        t = o.attr(n),
                        s = {};
                    void 0 !== t &&
                        ((n += "-"),
                        a.each(this.params, function () {
                            s[this] = o.attr(n + this);
                        }),
                        this.adapt({
                            element: e,
                            form: d,
                            message: t,
                            params: s,
                            rules: r,
                            messages: i,
                        }));
                }),
                a.extend(r, { __dummy__: !0 }),
                n || t.attachValidation());
        },
        parse: function (e) {
            var n = a(e),
                t = n
                    .parents()
                    .addBack()
                    .filter("form")
                    .add(n.find("form"))
                    .has("[data-val=true]");
            n.find("[data-val=true]").each(function () {
                p.unobtrusive.parseElement(this, !0);
            }),
                t.each(function () {
                    var a = m(this);
                    a && a.attachValidation();
                });
        },
    }),
        (u = p.unobtrusive.adapters),
        (u.add = function (a, e, n) {
            return (
                n || ((n = e), (e = [])),
                this.push({ name: a, params: e, adapt: n }),
                this
            );
        }),
        (u.addBool = function (a, n) {
            return this.add(a, function (t) {
                e(t, n || a, !0);
            });
        }),
        (u.addMinMax = function (a, n, t, r, i, o) {
            return this.add(a, [i || "min", o || "max"], function (a) {
                var i = a.params.min,
                    o = a.params.max;
                i && o ? e(a, r, [i, o]) : i ? e(a, n, i) : o && e(a, t, o);
            });
        }),
        (u.addSingleVal = function (a, n, t) {
            return this.add(a, [n || "val"], function (r) {
                e(r, t || a, r.params[n]);
            });
        }),
        p.addMethod("__dummy__", function (a, e, n) {
            return !0;
        }),
        p.addMethod("regex", function (a, e, n) {
            var t;
            return (
                !!this.optional(e) ||
                ((t = new RegExp(n).exec(a)),
                t && 0 === t.index && t[0].length === a.length)
            );
        }),
        p.addMethod("nonalphamin", function (a, e, n) {
            var t;
            return n && ((t = a.match(/\W/g)), (t = t && t.length >= n)), t;
        }),
        p.methods.extension
            ? (u.addSingleVal("accept", "mimtype"),
              u.addSingleVal("extension", "extension"))
            : u.addSingleVal("extension", "extension", "accept"),
        u.addSingleVal("regex", "pattern"),
        u
            .addBool("creditcard")
            .addBool("date")
            .addBool("digits")
            .addBool("email")
            .addBool("number")
            .addBool("url"),
        u
            .addMinMax("length", "minlength", "maxlength", "rangelength")
            .addMinMax("range", "min", "max", "range"),
        u
            .addMinMax("minlength", "minlength")
            .addMinMax("maxlength", "minlength", "maxlength"),
        u.add("equalto", ["other"], function (n) {
            var o = r(n.element.name),
                d = n.params.other,
                s = i(d, o),
                l = a(n.form)
                    .find(":input")
                    .filter("[name='" + t(s) + "']")[0];
            e(n, "equalTo", l);
        }),
        u.add("required", function (a) {
            ("INPUT" === a.element.tagName.toUpperCase() &&
                "CHECKBOX" === a.element.type.toUpperCase()) ||
                e(a, "required", !0);
        }),
        u.add("remote", ["url", "type", "additionalfields"], function (o) {
            var d = {
                    url: o.params.url,
                    type: o.params.type || "GET",
                    data: {},
                },
                s = r(o.element.name);
            a.each(n(o.params.additionalfields || o.element.name), function (
                e,
                n
            ) {
                var r = i(n, s);
                d.data[r] = function () {
                    var e = a(o.form)
                        .find(":input")
                        .filter("[name='" + t(r) + "']");
                    return e.is(":checkbox")
                        ? e.filter(":checked").val() ||
                              e.filter(":hidden").val() ||
                              ""
                        : e.is(":radio")
                        ? e.filter(":checked").val() || ""
                        : e.val();
                };
            }),
                e(o, "remote", d);
        }),
        u.add("password", ["min", "nonalphamin", "regex"], function (a) {
            a.params.min && e(a, "minlength", a.params.min),
                a.params.nonalphamin &&
                    e(a, "nonalphamin", a.params.nonalphamin),
                a.params.regex && e(a, "regex", a.params.regex);
        }),
        a(function () {
            p.unobtrusive.parse(document);
        });
})(jQuery);
if ("undefined" == typeof jQuery)
    throw new Error("Bootstrap's JavaScript requires jQuery");
+(function (t) {
    "use strict";
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (
        (e[0] < 2 && e[1] < 9) ||
        (1 == e[0] && 9 == e[1] && e[2] < 1) ||
        e[0] > 2
    )
        throw new Error(
            "Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3"
        );
})(jQuery),
    +(function (t) {
        "use strict";
        function e(e, s) {
            return this.each(function () {
                var o = t(this),
                    n = o.data("bs.modal"),
                    a = t.extend(
                        {},
                        i.DEFAULTS,
                        o.data(),
                        "object" == typeof e && e
                    );
                n || o.data("bs.modal", (n = new i(this, a))),
                    "string" == typeof e ? n[e](s) : a.show && n.show(s);
            });
        }
        var i = function (e, i) {
            (this.options = i),
                (this.$body = t(document.body)),
                (this.$element = t(e)),
                (this.$dialog = this.$element.find(".modal-dialog")),
                (this.$backdrop = null),
                (this.isShown = null),
                (this.originalBodyPad = null),
                (this.scrollbarWidth = 0),
                (this.ignoreBackdropClick = !1),
                this.options.remote &&
                    this.$element.find(".modal-content").load(
                        this.options.remote,
                        t.proxy(function () {
                            this.$element.trigger("loaded.bs.modal");
                        }, this)
                    );
        };
        (i.VERSION = "3.3.6"),
            (i.TRANSITION_DURATION = 300),
            (i.BACKDROP_TRANSITION_DURATION = 150),
            (i.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }),
            (i.prototype.toggle = function (t) {
                return this.isShown ? this.hide() : this.show(t);
            }),
            (i.prototype.show = function (e) {
                var s = this,
                    o = t.Event("show.bs.modal", { relatedTarget: e });
                this.$element.trigger(o),
                    this.isShown ||
                        o.isDefaultPrevented() ||
                        ((this.isShown = !0),
                        this.checkScrollbar(),
                        this.setScrollbar(),
                        this.$body.addClass("modal-open"),
                        this.escape(),
                        this.resize(),
                        this.$element.on(
                            "click.dismiss.bs.modal",
                            '[data-dismiss="modal"]',
                            t.proxy(this.hide, this)
                        ),
                        this.$dialog.on(
                            "mousedown.dismiss.bs.modal",
                            function () {
                                s.$element.one(
                                    "mouseup.dismiss.bs.modal",
                                    function (e) {
                                        t(e.target).is(s.$element) &&
                                            (s.ignoreBackdropClick = !0);
                                    }
                                );
                            }
                        ),
                        this.backdrop(function () {
                            var o =
                                t.support.transition &&
                                s.$element.hasClass("fade");
                            s.$element.parent().length ||
                                s.$element.appendTo(s.$body),
                                s.$element.show().scrollTop(0),
                                s.adjustDialog(),
                                o && s.$element[0].offsetWidth,
                                s.$element.addClass("in"),
                                s.enforceFocus();
                            var n = t.Event("shown.bs.modal", {
                                relatedTarget: e,
                            });
                            o
                                ? s.$dialog
                                      .one("bsTransitionEnd", function () {
                                          s.$element
                                              .trigger("focus")
                                              .trigger(n);
                                      })
                                      .emulateTransitionEnd(
                                          i.TRANSITION_DURATION
                                      )
                                : s.$element.trigger("focus").trigger(n);
                        }));
            }),
            (i.prototype.hide = function (e) {
                e && e.preventDefault(),
                    (e = t.Event("hide.bs.modal")),
                    this.$element.trigger(e),
                    this.isShown &&
                        !e.isDefaultPrevented() &&
                        ((this.isShown = !1),
                        this.escape(),
                        this.resize(),
                        t(document).off("focusin.bs.modal"),
                        this.$element
                            .removeClass("in")
                            .off("click.dismiss.bs.modal")
                            .off("mouseup.dismiss.bs.modal"),
                        this.$dialog.off("mousedown.dismiss.bs.modal"),
                        t.support.transition && this.$element.hasClass("fade")
                            ? this.$element
                                  .one(
                                      "bsTransitionEnd",
                                      t.proxy(this.hideModal, this)
                                  )
                                  .emulateTransitionEnd(i.TRANSITION_DURATION)
                            : this.hideModal());
            }),
            (i.prototype.enforceFocus = function () {
                t(document)
                    .off("focusin.bs.modal")
                    .on(
                        "focusin.bs.modal",
                        t.proxy(function (t) {
                            this.$element[0] === t.target ||
                                this.$element.has(t.target).length ||
                                this.$element.trigger("focus");
                        }, this)
                    );
            }),
            (i.prototype.escape = function () {
                this.isShown && this.options.keyboard
                    ? this.$element.on(
                          "keydown.dismiss.bs.modal",
                          t.proxy(function (t) {
                              27 == t.which && this.hide();
                          }, this)
                      )
                    : this.isShown ||
                      this.$element.off("keydown.dismiss.bs.modal");
            }),
            (i.prototype.resize = function () {
                this.isShown
                    ? t(window).on(
                          "resize.bs.modal",
                          t.proxy(this.handleUpdate, this)
                      )
                    : t(window).off("resize.bs.modal");
            }),
            (i.prototype.hideModal = function () {
                var t = this;
                this.$element.hide(),
                    this.backdrop(function () {
                        t.$body.removeClass("modal-open"),
                            t.resetAdjustments(),
                            t.resetScrollbar(),
                            t.$element.trigger("hidden.bs.modal");
                    });
            }),
            (i.prototype.removeBackdrop = function () {
                this.$backdrop && this.$backdrop.remove(),
                    (this.$backdrop = null);
            }),
            (i.prototype.backdrop = function (e) {
                var s = this,
                    o = this.$element.hasClass("fade") ? "fade" : "";
                if (this.isShown && this.options.backdrop) {
                    var n = t.support.transition && o;
                    if (
                        ((this.$backdrop = t(document.createElement("div"))
                            .addClass("modal-backdrop " + o)
                            .appendTo(this.$body)),
                        this.$element.on(
                            "click.dismiss.bs.modal",
                            t.proxy(function (t) {
                                return this.ignoreBackdropClick
                                    ? void (this.ignoreBackdropClick = !1)
                                    : void (
                                          t.target === t.currentTarget &&
                                          ("static" == this.options.backdrop
                                              ? this.$element[0].focus()
                                              : this.hide())
                                      );
                            }, this)
                        ),
                        n && this.$backdrop[0].offsetWidth,
                        this.$backdrop.addClass("in"),
                        !e)
                    )
                        return;
                    n
                        ? this.$backdrop
                              .one("bsTransitionEnd", e)
                              .emulateTransitionEnd(
                                  i.BACKDROP_TRANSITION_DURATION
                              )
                        : e();
                } else if (!this.isShown && this.$backdrop) {
                    this.$backdrop.removeClass("in");
                    var a = function () {
                        s.removeBackdrop(), e && e();
                    };
                    t.support.transition && this.$element.hasClass("fade")
                        ? this.$backdrop
                              .one("bsTransitionEnd", a)
                              .emulateTransitionEnd(
                                  i.BACKDROP_TRANSITION_DURATION
                              )
                        : a();
                } else e && e();
            }),
            (i.prototype.handleUpdate = function () {
                this.adjustDialog();
            }),
            (i.prototype.adjustDialog = function () {
                var t =
                    this.$element[0].scrollHeight >
                    document.documentElement.clientHeight;
                this.$element.css({
                    paddingLeft:
                        !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
                    paddingRight:
                        this.bodyIsOverflowing && !t ? this.scrollbarWidth : "",
                });
            }),
            (i.prototype.resetAdjustments = function () {
                this.$element.css({ paddingLeft: "", paddingRight: "" });
            }),
            (i.prototype.checkScrollbar = function () {
                var t = window.innerWidth;
                if (!t) {
                    var e = document.documentElement.getBoundingClientRect();
                    t = e.right - Math.abs(e.left);
                }
                (this.bodyIsOverflowing = document.body.clientWidth < t),
                    (this.scrollbarWidth = this.measureScrollbar());
            }),
            (i.prototype.setScrollbar = function () {
                var t = parseInt(this.$body.css("padding-right") || 0, 10);
                (this.originalBodyPad = document.body.style.paddingRight || ""),
                    this.bodyIsOverflowing &&
                        this.$body.css(
                            "padding-right",
                            t + this.scrollbarWidth
                        );
            }),
            (i.prototype.resetScrollbar = function () {
                this.$body.css("padding-right", this.originalBodyPad);
            }),
            (i.prototype.measureScrollbar = function () {
                var t = document.createElement("div");
                (t.className = "modal-scrollbar-measure"), this.$body.append(t);
                var e = t.offsetWidth - t.clientWidth;
                return this.$body[0].removeChild(t), e;
            });
        var s = t.fn.modal;
        (t.fn.modal = e),
            (t.fn.modal.Constructor = i),
            (t.fn.modal.noConflict = function () {
                return (t.fn.modal = s), this;
            }),
            t(document).on(
                "click.bs.modal.data-api",
                '[data-toggle="modal"]',
                function (i) {
                    var s = t(this),
                        o = s.attr("href"),
                        n = t(
                            s.attr("data-target") ||
                                (o && o.replace(/.*(?=#[^\s]+$)/, ""))
                        ),
                        a = n.data("bs.modal")
                            ? "toggle"
                            : t.extend(
                                  { remote: !/#/.test(o) && o },
                                  n.data(),
                                  s.data()
                              );
                    s.is("a") && i.preventDefault(),
                        n.one("show.bs.modal", function (t) {
                            t.isDefaultPrevented() ||
                                n.one("hidden.bs.modal", function () {
                                    s.is(":visible") && s.trigger("focus");
                                });
                        }),
                        e.call(n, a, this);
                }
            );
    })(jQuery),
    +(function (t) {
        "use strict";
        function e(e) {
            var i,
                s =
                    e.attr("data-target") ||
                    ((i = e.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""));
            return t(s);
        }
        function i(e) {
            return this.each(function () {
                var i = t(this),
                    o = i.data("bs.collapse"),
                    n = t.extend(
                        {},
                        s.DEFAULTS,
                        i.data(),
                        "object" == typeof e && e
                    );
                !o && n.toggle && /show|hide/.test(e) && (n.toggle = !1),
                    o || i.data("bs.collapse", (o = new s(this, n))),
                    "string" == typeof e && o[e]();
            });
        }
        var s = function (e, i) {
            (this.$element = t(e)),
                (this.options = t.extend({}, s.DEFAULTS, i)),
                (this.$trigger = t(
                    '[data-toggle="collapse"][href="#' +
                        e.id +
                        '"],[data-toggle="collapse"][data-target="#' +
                        e.id +
                        '"]'
                )),
                (this.transitioning = null),
                this.options.parent
                    ? (this.$parent = this.getParent())
                    : this.addAriaAndCollapsedClass(
                          this.$element,
                          this.$trigger
                      ),
                this.options.toggle && this.toggle();
        };
        (s.VERSION = "3.3.6"),
            (s.TRANSITION_DURATION = 350),
            (s.DEFAULTS = { toggle: !0 }),
            (s.prototype.dimension = function () {
                var t = this.$element.hasClass("width");
                return t ? "width" : "height";
            }),
            (s.prototype.show = function () {
                if (!this.transitioning && !this.$element.hasClass("in")) {
                    var e,
                        o =
                            this.$parent &&
                            this.$parent
                                .children(".panel")
                                .children(".in, .collapsing");
                    if (
                        !(
                            o &&
                            o.length &&
                            ((e = o.data("bs.collapse")), e && e.transitioning)
                        )
                    ) {
                        var n = t.Event("show.bs.collapse");
                        if (
                            (this.$element.trigger(n), !n.isDefaultPrevented())
                        ) {
                            o &&
                                o.length &&
                                (i.call(o, "hide"),
                                e || o.data("bs.collapse", null));
                            var a = this.dimension();
                            this.$element
                                .removeClass("collapse")
                                .addClass("collapsing")
                                [a](0)
                                .attr("aria-expanded", !0),
                                this.$trigger
                                    .removeClass("collapsed")
                                    .attr("aria-expanded", !0),
                                (this.transitioning = 1);
                            var r = function () {
                                this.$element
                                    .removeClass("collapsing")
                                    .addClass("collapse in")
                                    [a](""),
                                    (this.transitioning = 0),
                                    this.$element.trigger("shown.bs.collapse");
                            };
                            if (!t.support.transition) return r.call(this);
                            var l = t.camelCase(["scroll", a].join("-"));
                            this.$element
                                .one("bsTransitionEnd", t.proxy(r, this))
                                .emulateTransitionEnd(s.TRANSITION_DURATION)
                                [a](this.$element[0][l]);
                        }
                    }
                }
            }),
            (s.prototype.hide = function () {
                if (!this.transitioning && this.$element.hasClass("in")) {
                    var e = t.Event("hide.bs.collapse");
                    if ((this.$element.trigger(e), !e.isDefaultPrevented())) {
                        var i = this.dimension();
                        this.$element[i](this.$element[i]())[0].offsetHeight,
                            this.$element
                                .addClass("collapsing")
                                .removeClass("collapse in")
                                .attr("aria-expanded", !1),
                            this.$trigger
                                .addClass("collapsed")
                                .attr("aria-expanded", !1),
                            (this.transitioning = 1);
                        var o = function () {
                            (this.transitioning = 0),
                                this.$element
                                    .removeClass("collapsing")
                                    .addClass("collapse")
                                    .trigger("hidden.bs.collapse");
                        };
                        return t.support.transition
                            ? void this.$element[i](0)
                                  .one("bsTransitionEnd", t.proxy(o, this))
                                  .emulateTransitionEnd(s.TRANSITION_DURATION)
                            : o.call(this);
                    }
                }
            }),
            (s.prototype.toggle = function () {
                this[this.$element.hasClass("in") ? "hide" : "show"]();
            }),
            (s.prototype.getParent = function () {
                return t(this.options.parent)
                    .find(
                        '[data-toggle="collapse"][data-parent="' +
                            this.options.parent +
                            '"]'
                    )
                    .each(
                        t.proxy(function (i, s) {
                            var o = t(s);
                            this.addAriaAndCollapsedClass(e(o), o);
                        }, this)
                    )
                    .end();
            }),
            (s.prototype.addAriaAndCollapsedClass = function (t, e) {
                var i = t.hasClass("in");
                t.attr("aria-expanded", i),
                    e.toggleClass("collapsed", !i).attr("aria-expanded", i);
            });
        var o = t.fn.collapse;
        (t.fn.collapse = i),
            (t.fn.collapse.Constructor = s),
            (t.fn.collapse.noConflict = function () {
                return (t.fn.collapse = o), this;
            }),
            t(document).on(
                "click.bs.collapse.data-api",
                '[data-toggle="collapse"]',
                function (s) {
                    var o = t(this);
                    o.attr("data-target") || s.preventDefault();
                    var n = e(o),
                        a = n.data("bs.collapse"),
                        r = a ? "toggle" : o.data();
                    i.call(n, r);
                }
            );
    })(jQuery);
var ccHelpers = (function (e) {
    "use strict";
    function t(e, t) {
        s(!0);
    }
    function n(e, t) {}
    function o(e, t, n) {
        c(null);
    }
    function i(t, n, o) {
        if (t && t.ResponseType)
            switch (
                (t.MaximumResendsReached &&
                    (e("#MaximumResendsReachedMessage").show(),
                    e("#ResendLink").hide()),
                t.ResponseType)
            ) {
                case w.message:
                    s(!1),
                        T(t.Message),
                        ccHelpers.resetTimeout("ValidateTimeout"),
                        ccOtpHelper.otpResendcooldown(),
                        r(t);
                    break;
                case w.nextStep:
                default:
                    u(t);
            }
        else
            t && "PENDING" == t.NextStep
                ? (s(!1), e("#OOBValidateErrorText").show())
                : !t || ("OUTOFBAND" != t.Type && "BIOMETRIC" != t.Type)
                ? c(null)
                : u(t);
    }
    function r(e) {
        onUpdatePageCallback &&
            typeof onUpdatePageCallback == typeof Function &&
            onUpdatePageCallback(e);
    }
    function s(t) {
        (S = S || e("#ProcessingModal")), t ? S.modal("show") : S.modal("hide");
    }
    function a(t, n) {
        document.getElementById(t).onclick = function (t) {
            t.preventDefault(),
                s(!0),
                "FailWithFeedback" === n || "Error" === n || "Blocked" === n
                    ? d({
                          IssuerId: e("#IssuerId").val(),
                          MessageVersion: e("#MessageVersion").val(),
                      })
                    : p();
        };
    }
    function u(e) {
        e && e.NextStep
            ? e.NextStep === R.term
                ? d(e)
                : e.NextStep === R.pending || c(e)
            : d(e);
    }
    function c(t) {
        var n = e("form").filter(".nextstep-form")[0],
            o =
                2 == t.MessageVersion || 2 == e("#MessageVersion").val()
                    ? "2_1_0/"
                    : "",
            i = "/" + o + t.NextStep;
        if (null !== t && void 0 !== t) {
            if (null !== t.OverrideLanguage && void 0 !== t.OverrideLanguage) {
                var r = document.createElement("input");
                r.setAttribute("type", "hidden"),
                    r.setAttribute("name", "languageCode"),
                    r.setAttribute("value", t.OverrideLanguage),
                    n.appendChild(r);
            }
            if (null !== t.GroupId && void 0 !== t.GroupId) {
                var s = document.getElementById("GroupId");
                s.setAttribute("value", t.GroupId);
            }
            if (null !== t.Type && void 0 !== t.Type) {
                var a = document.getElementById("Type");
                a.setAttribute("value", t.Type);
            }
            if (null !== t.ChoiceType && void 0 !== t.ChoiceType) {
                var u = document.getElementById("NextStepChoiceType");
                u.setAttribute("name", "ChoiceType"),
                    u.setAttribute("value", t.ChoiceType);
            }
        }
        (n.action = i + "/" + t.IssuerId), n.submit();
    }
    function l(t) {
        var n = e("#TermForm");
        2 == t.MessageVersion
            ? (n.find("#CRes").val(t.CRes),
              n.find("#ThreeDSSessionData").val(t.ThreeDSSessionData),
              n.attr("action", t.NotificationUrl)[0].submit())
            : (n.find("#PaRes").val(t.PARes),
              n.find("#MD").val(t.MD),
              n.attr("action", t.TermUrl)[0].submit());
    }
    function d(t) {
        var n = { IssuerId: t.IssuerId, NextStep: R.error },
            o =
                document.getElementById("NextStepTransactionId") ||
                document.getElementById("TransactionId"),
            i = e('[name="IssuerId"]').val(),
            r =
                2 == t.MessageVersion || 2 == e("#MessageVersion").val()
                    ? "2_1_0/"
                    : "";
        s(!0),
            e.ajax({
                type: "POST",
                url: "/api/" + r + "nextstep/term",
                data: { TransactionId: o.value, IssuerId: i },
                success: function (e) {
                    e && e.NextStep === R.term
                        ? e.Payload
                            ? l(e.Payload)
                            : c(n)
                        : c(e);
                },
                error: function () {
                    c(n);
                },
            });
    }
    function p() {
        var t = f(),
            n = { IssuerId: t, NextStep: R.error },
            o = e("#NextStepTransactionId").length
                ? e("#NextStepTransactionId").val()
                : e("#TransactionId").val(),
            i = 2 == e("#MessageVersion").val() ? "2_1_0/" : "";
        s(!0),
            e.ajax({
                type: "POST",
                url: "/api/" + i + "nextstep/usercancel",
                data: { TransactionId: o, IssuerId: t },
                success: function (e) {
                    e && e.NextStep === R.term
                        ? e.Payload
                            ? l(e.Payload)
                            : c(n)
                        : c(e);
                },
                error: function () {
                    c(n);
                },
            });
    }
    function f() {
        var e = window.location.pathname.split("/");
        return e.length > 0 ? e[e.length - 1] : window.location.pathname;
    }
    function m() {
        return (N = N || e("input").filter("[data-val=true]"));
    }
    function I() {
        return (M = M || e("#ValidationErrorMessage"));
    }
    function v() {
        var e = I();
        e.text("").css("display", "none");
    }
    function g(e) {
        var t = I(),
            n = m();
        t.text(e.Content).css("display", "inline-block"),
            t.hasClass("field-validation-error") ||
                t.addClass("field-validation-error"),
            n.on("input", function (e) {
                t.css("display", "none"), n.off("input");
            });
    }
    function T(e) {
        if (e)
            switch (e.Type) {
                case b.successNotification:
                    ccHelpers.showNotification("success", e.Title, e.Content);
                    break;
                case b.inlineError:
                default:
                    g(e);
            }
        else c(null);
    }
    function x(e, t, n) {
        (toastr.options = {
            positionClass: "toast-top-full-width",
            closeButton: !0,
            extendedTimeout: 1e4,
        }),
            toastr[e](n, t);
    }
    function y(t) {
        var n = e("#" + t).val();
        n &&
            (C = setTimeout(function () {
                ccHelpers.executeTermStep({
                    IssuerId: e("#IssuerId").val(),
                    MessageVersion: e("#MessageVersion").val(),
                });
            }, n));
    }
    function h(e) {
        C && (clearTimeout(C), (C = null)), y(e);
    }
    var S,
        N,
        M,
        C,
        E = {},
        b = {
            inlineError: "InlineError",
            successNotification: "SuccessNotification",
        },
        R = { error: "ERROR", pending: "PENDING", term: "TERM" },
        w = { message: "Message", nextStep: "NextStep" };
    return (
        (E.ajax = {
            onBegin: function (e, n) {
                return t(e, n);
            },
            onComplete: function (e, t) {
                return n(e, t);
            },
            onFailure: function (e, t, n) {
                return o(e, t, n);
            },
            onSuccess: function (e, t, n) {
                return i(e, t, n);
            },
        }),
        (E.error = {
            hideInline: function () {
                return v();
            },
            showInline: function (e) {
                return g(e);
            },
        }),
        (E.processingModal = function (e) {
            return s(e);
        }),
        (E.registerExitClick = function (e, t) {
            return a(e, t);
        }),
        (E.submitNextStepForm = function (e) {
            return c(e);
        }),
        (E.doNextStep = function (e) {
            return u(e);
        }),
        (E.executeTermStep = function (e) {
            return d(e);
        }),
        (E.getIssuerIdFromUrl = function () {
            return f();
        }),
        (E.showNotification = function (e, t, n, o) {
            x(e, t, n, o);
        }),
        (E.setupTimeout = function (e) {
            y(e);
        }),
        (E.resetTimeout = function (e) {
            h(e);
        }),
        E
    );
})(jQuery);
"undefined" != typeof exports && (module.exports.ccHelpers = ccHelpers);
$(function () {
    if (
        ($(".modal")
            .filter(".accordion")
            .on("hidden.bs.modal", function (o) {
                $(this).find(".collapse").collapse("hide");
            }),
        $(".modal").not("#ThreeDsModal"))
    ) {
        var o = $(".body").attr("dir");
        "RTL" === o &&
            ($(".modal").addClass("rtl"),
            $(".modal-header").children("button").css("float", "left"));
    }
    $(".body").css("bottom", $(".sticky-footer").height()),
        $(".accordion").on("click", function (o) {
            $(this).next().hasClass("in")
                ? $(this).next().slideUp()
                : ($(this).next().slideDown(),
                  $(".collapse.in").slideUp(),
                  $("html, body").animate({
                      scrollTop: $(document).height() / 3,
                  }));
        });
});
var ccOtpHelper = (function (e) {
    "use strict";
    function n(e, n) {
        e.value !== n.href && (e.value = n.href),
            (n.href = "JavaScript:Void(0)");
    }
    function t() {
        resendLinkTemp.value &&
            ((ResendLink.title = ""), (ResendLink.href = resendLinkTemp.value));
    }
    function i(e, n) {
        var t = document.getElementById("resendLinkTooltipText"),
            i = t.value;
        e.title = i.replace("{1}", n);
    }
    function r(e, n, t) {
        e.appendChild(t), e.appendChild(n);
    }
    function o(n, t, i, r, o) {
        var d = (n / t) * i;
        e(r).animate({ width: d }, function () {
            n <= 0 &&
                (linkContainer.removeChild(r), linkContainer.removeChild(o));
        });
    }
    function d(e) {
        return !!e;
    }
    function l(e) {
        var n = [],
            t = function (e, n, t) {
                return e === t[0];
            };
        for (var i in e)
            Object.prototype.hasOwnProperty.call(e, i) && n.push(d(e[i]));
        return !!n.every(t);
    }
    function a() {
        var e = {
            linkContainer: document.getElementById("linkContainer"),
            ResendLink: document.getElementById("ResendLink"),
            resendLinkTemp: document.getElementById("resendLinkTemp"),
        };
        if (l(e)) {
            var d = 0,
                a = document.getElementById("OtpResendTimeout").value,
                u = 0,
                c = e.ResendLink.offsetWidth,
                s = e.ResendLink.offsetHeight,
                k = 5,
                f = document.createElement("linkMask"),
                p = document.createElement("blockMask"),
                m = function () {
                    return a ? a / 1e3 : u;
                };
            if (m() > 0) {
                f.setAttribute("id", "linkMask"),
                    (f.style.width = c + "px"),
                    (f.style.height = s + k + "px"),
                    p.setAttribute("id", "blockMask"),
                    (p.style.width = c + "px"),
                    (p.style.height = s + k + "px"),
                    n(e.resendLinkTemp, e.ResendLink),
                    r(e.linkContainer, f, p),
                    (d = m());
                var v = setInterval(function () {
                    var n = m() - d;
                    i(e.ResendLink, d),
                        i(f, d),
                        o(d, m(), c, f, p),
                        (d -= 1),
                        n >= m() && (clearInterval(v), t());
                }, 1e3);
            }
        }
    }
    return {
        otpResendcooldown: function () {
            a();
        },
    };
})(jQuery);
var updatePageHelper = (function (e) {
    "use strict";
    function n(e) {
        var n = document.getElementById("referenceCode");
        n && e.ReferenceCode && (n.innerText = e.ReferenceCode);
    }
    function t(e) {
        var n = document.getElementById("contentBlock-text"),
            t = "";
        if (n && e.Credentials) {
            for (var r = 0; r < e.Credentials.length; r++)
                t += e.Credentials[r].Text;
            n.innerText = t;
        }
    }
    function r(e) {
        var n = document.getElementById("contentBlock-type"),
            t = "";
        if (n && e.Credentials) {
            for (var r = 0; r < e.Credentials.length; r++)
                t += e.Credentials[r].Type;
            n.innerText = t;
        }
    }
    function a(e) {
        var n = document.getElementById("Credential_Id");
        n && e.Credentials && (n.value = e.Credentials[0].Id);
    }
    function d(e) {
        n(e),
            "False" == document.getElementById("ValidateReloadEnabled").value &&
                (t(e), r(e), a(e));
    }
    return {
        onUpdatePageCallback: function (e) {
            d(e);
        },
    };
})(jQuery);
//# sourceMappingURL=template-07a89915ee.min.js.map
