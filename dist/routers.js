var Ze = Object.defineProperty;
var Ke = (n, e, t) => e in n ? Ze(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var C = (n, e, t) => Ke(n, typeof e != "symbol" ? e + "" : e, t);
import { j as g } from "./jsx-runtime-Q3clG3tb.js";
import H, { useState as te, useRef as je, useEffect as re, createContext as De, useReducer as Ae, useCallback as L, useMemo as Xe, useContext as Ge } from "react";
import * as Fe from "react-router-dom";
import { Navigate as Me, Route as He } from "react-router-dom";
import { B as Je } from "./social-link--B5r20zD.js";
import { g as Te } from "./components-CHkrLo1-.js";
import "./Icon-lxzzq7dr.js";
import { a as Ye, b as Ve, g as Be, c as $e, d as qe, e as Qe, C as Y } from "./ContentTileGroup-BLK9qLuL.js";
/* empty css                            */
import { MarkdownRenderer as xe } from "./markdown.js";
import { L as et } from "./Loading-FbjY_1B2.js";
function tt(n) {
  return "href" in n;
}
function nt(n) {
  return "image" in n;
}
function it(n) {
  return "list" in n;
}
function ot(n) {
  return "group" in n;
}
function rt(n) {
  return "tiles" in n;
}
function at({
  className: n,
  defaultContent: e,
  href: t,
  ...i
}) {
  const [o, r] = te(e), [s, d] = te(!0), l = je(null);
  return re(() => {
    s ? (console.log("FETCH:", t), fetch(t).then((u) => u.json()).then((u) => r(u)).catch(console.error)) : d(!0);
  }, [s, t]), o ? /* @__PURE__ */ g.jsxs(
    "div",
    {
      className: Te("content-renderer", n),
      ref: l,
      ...i,
      children: [
        /* @__PURE__ */ g.jsx(
          Je,
          {
            onClick: () => {
              if (!l.current)
                return;
              const u = window.open("", "print_window");
              if (!u)
                return;
              const a = l.current.outerHTML;
              u.document.write("<html><head><title>Print</title>"), u.document.write("<style>body { font-family: Arial, sans-serif; }</style>"), u.document.write("</head><body>"), u.document.write(a), u.document.write("</body></html>"), u.document.close(), u.onload = function() {
                u.print();
              };
            },
            children: "Print"
          }
        ),
        /* @__PURE__ */ g.jsx(
          st,
          {
            schema: o
          }
        )
      ]
    }
  ) : /* @__PURE__ */ g.jsx("div", { children: "Fetching content..." });
}
function st({
  schema: n
}) {
  return /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
    n.title && /* @__PURE__ */ g.jsx("title", { children: n.title }),
    n.layout.map((e, t) => (console.log("block content", t, e), /* @__PURE__ */ g.jsx(Ye, { children: e.content.map((i, o) => (console.log("to define:", o, i), i === null ? /* @__PURE__ */ g.jsx(Ve, {}) : rt(i) ? (console.log("tile group", i.tiles.content), /* @__PURE__ */ g.jsx(
      Be,
      {
        tiles: i.tiles.content,
        ...i.tiles.options
      },
      o
    )) : ot(i) ? (console.log("is group"), /* @__PURE__ */ g.jsx(
      $e,
      {
        children: i.group.map((r, s) => (console.log("group", s, r), /* @__PURE__ */ g.jsx(
          V,
          {
            schema: r
          },
          s
        )))
      },
      o
    )) : it(i) ? (console.log("list"), /* @__PURE__ */ g.jsx(
      qe,
      {
        children: i.list.map((r, s) => (console.log("list", s, r), /* @__PURE__ */ g.jsx(
          Qe,
          {
            children: r.content.map((d, l) => (console.log("list item", l, r), /* @__PURE__ */ g.jsx(
              V,
              {
                schema: d
              },
              l
            )))
          },
          s
        )))
      },
      o
    )) : (console.log("unknown content", i), /* @__PURE__ */ g.jsx(
      V,
      {
        schema: i
      },
      o
    )))) })))
  ] });
}
function V({
  schema: n
}) {
  console.log("render content:", n);
  const { content: e } = n;
  return e ? tt(e) ? /* @__PURE__ */ g.jsx(Y, { children: /* @__PURE__ */ g.jsx(
    xe,
    {
      href: e.href,
      features: {
        bodyOnly: !0
      }
    }
  ) }) : nt(e) ? /* @__PURE__ */ g.jsx(Y, { children: /* @__PURE__ */ g.jsxs("figure", { children: [
    /* @__PURE__ */ g.jsx(
      "img",
      {
        src: e.image.src
      }
    ),
    e.caption && /* @__PURE__ */ g.jsx("figcaption", { children: e.caption })
  ] }) }) : /* @__PURE__ */ g.jsx(Y, { children: e.text }) : (console.warn(n), /* @__PURE__ */ g.jsx("div", { children: "UNDEFINED" }));
}
var ne = function(n, e) {
  return ne = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, i) {
    t.__proto__ = i;
  } || function(t, i) {
    for (var o in i) Object.prototype.hasOwnProperty.call(i, o) && (t[o] = i[o]);
  }, ne(n, e);
};
function ct(n, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  ne(n, e);
  function t() {
    this.constructor = n;
  }
  n.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
var O = function() {
  return O = Object.assign || function(e) {
    for (var t, i = 1, o = arguments.length; i < o; i++) {
      t = arguments[i];
      for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    }
    return e;
  }, O.apply(this, arguments);
};
function ut(n, e) {
  var t = {};
  for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && e.indexOf(i) < 0 && (t[i] = n[i]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, i = Object.getOwnPropertySymbols(n); o < i.length; o++)
      e.indexOf(i[o]) < 0 && Object.prototype.propertyIsEnumerable.call(n, i[o]) && (t[i[o]] = n[i[o]]);
  return t;
}
function U(n, e, t, i) {
  function o(r) {
    return r instanceof t ? r : new t(function(s) {
      s(r);
    });
  }
  return new (t || (t = Promise))(function(r, s) {
    function d(a) {
      try {
        u(i.next(a));
      } catch (c) {
        s(c);
      }
    }
    function l(a) {
      try {
        u(i.throw(a));
      } catch (c) {
        s(c);
      }
    }
    function u(a) {
      a.done ? r(a.value) : o(a.value).then(d, l);
    }
    u((i = i.apply(n, [])).next());
  });
}
function N(n, e) {
  var t = { label: 0, sent: function() {
    if (r[0] & 1) throw r[1];
    return r[1];
  }, trys: [], ops: [] }, i, o, r, s;
  return s = { next: d(0), throw: d(1), return: d(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function d(u) {
    return function(a) {
      return l([u, a]);
    };
  }
  function l(u) {
    if (i) throw new TypeError("Generator is already executing.");
    for (; s && (s = 0, u[0] && (t = 0)), t; ) try {
      if (i = 1, o && (r = u[0] & 2 ? o.return : u[0] ? o.throw || ((r = o.return) && r.call(o), 0) : o.next) && !(r = r.call(o, u[1])).done) return r;
      switch (o = 0, r && (u = [u[0] & 2, r.value]), u[0]) {
        case 0:
        case 1:
          r = u;
          break;
        case 4:
          return t.label++, { value: u[1], done: !1 };
        case 5:
          t.label++, o = u[1], u = [0];
          continue;
        case 7:
          u = t.ops.pop(), t.trys.pop();
          continue;
        default:
          if (r = t.trys, !(r = r.length > 0 && r[r.length - 1]) && (u[0] === 6 || u[0] === 2)) {
            t = 0;
            continue;
          }
          if (u[0] === 3 && (!r || u[1] > r[0] && u[1] < r[3])) {
            t.label = u[1];
            break;
          }
          if (u[0] === 6 && t.label < r[1]) {
            t.label = r[1], r = u;
            break;
          }
          if (r && t.label < r[2]) {
            t.label = r[2], t.ops.push(u);
            break;
          }
          r[2] && t.ops.pop(), t.trys.pop();
          continue;
      }
      u = e.call(n, t);
    } catch (a) {
      u = [6, a], o = 0;
    } finally {
      i = r = 0;
    }
    if (u[0] & 5) throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}
function E(n, e) {
  var t = {};
  for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && e.indexOf(i) < 0 && (t[i] = n[i]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function") {
    var o = 0;
    for (i = Object.getOwnPropertySymbols(n); o < i.length; o++) e.indexOf(i[o]) < 0 && Object.prototype.propertyIsEnumerable.call(n, i[o]) && (t[i[o]] = n[i[o]]);
  }
  return t;
}
var Z = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ae(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
function se(n, e) {
  return n(e = { exports: {} }, e.exports), e.exports;
}
var W = se(function(n, e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = function() {
    function i() {
      var o = this;
      this.locked = /* @__PURE__ */ new Map(), this.addToLocked = function(r, s) {
        var d = o.locked.get(r);
        d === void 0 ? s === void 0 ? o.locked.set(r, []) : o.locked.set(r, [s]) : s !== void 0 && (d.unshift(s), o.locked.set(r, d));
      }, this.isLocked = function(r) {
        return o.locked.has(r);
      }, this.lock = function(r) {
        return new Promise(function(s, d) {
          o.isLocked(r) ? o.addToLocked(r, s) : (o.addToLocked(r), s());
        });
      }, this.unlock = function(r) {
        var s = o.locked.get(r);
        if (s !== void 0 && s.length !== 0) {
          var d = s.pop();
          o.locked.set(r, s), d !== void 0 && setTimeout(d, 0);
        } else o.locked.delete(r);
      };
    }
    return i.getInstance = function() {
      return i.instance === void 0 && (i.instance = new i()), i.instance;
    }, i;
  }();
  e.default = function() {
    return t.getInstance();
  };
});
ae(W);
var lt = ae(se(function(n, e) {
  var t = Z && Z.__awaiter || function(a, c, h, p) {
    return new (h || (h = Promise))(function(m, v) {
      function w(y) {
        try {
          _(p.next(y));
        } catch (f) {
          v(f);
        }
      }
      function b(y) {
        try {
          _(p.throw(y));
        } catch (f) {
          v(f);
        }
      }
      function _(y) {
        y.done ? m(y.value) : new h(function(f) {
          f(y.value);
        }).then(w, b);
      }
      _((p = p.apply(a, c || [])).next());
    });
  }, i = Z && Z.__generator || function(a, c) {
    var h, p, m, v, w = { label: 0, sent: function() {
      if (1 & m[0]) throw m[1];
      return m[1];
    }, trys: [], ops: [] };
    return v = { next: b(0), throw: b(1), return: b(2) }, typeof Symbol == "function" && (v[Symbol.iterator] = function() {
      return this;
    }), v;
    function b(_) {
      return function(y) {
        return function(f) {
          if (h) throw new TypeError("Generator is already executing.");
          for (; w; ) try {
            if (h = 1, p && (m = 2 & f[0] ? p.return : f[0] ? p.throw || ((m = p.return) && m.call(p), 0) : p.next) && !(m = m.call(p, f[1])).done) return m;
            switch (p = 0, m && (f = [2 & f[0], m.value]), f[0]) {
              case 0:
              case 1:
                m = f;
                break;
              case 4:
                return w.label++, { value: f[1], done: !1 };
              case 5:
                w.label++, p = f[1], f = [0];
                continue;
              case 7:
                f = w.ops.pop(), w.trys.pop();
                continue;
              default:
                if (m = w.trys, !((m = m.length > 0 && m[m.length - 1]) || f[0] !== 6 && f[0] !== 2)) {
                  w = 0;
                  continue;
                }
                if (f[0] === 3 && (!m || f[1] > m[0] && f[1] < m[3])) {
                  w.label = f[1];
                  break;
                }
                if (f[0] === 6 && w.label < m[1]) {
                  w.label = m[1], m = f;
                  break;
                }
                if (m && w.label < m[2]) {
                  w.label = m[2], w.ops.push(f);
                  break;
                }
                m[2] && w.ops.pop(), w.trys.pop();
                continue;
            }
            f = c.call(a, w);
          } catch (k) {
            f = [6, k], p = 0;
          } finally {
            h = m = 0;
          }
          if (5 & f[0]) throw f[1];
          return { value: f[0] ? f[1] : void 0, done: !0 };
        }([_, y]);
      };
    }
  }, o = Z;
  Object.defineProperty(e, "__esModule", { value: !0 });
  var r = "browser-tabs-lock-key", s = { key: function(a) {
    return t(o, void 0, void 0, function() {
      return i(this, function(c) {
        throw new Error("Unsupported");
      });
    });
  }, getItem: function(a) {
    return t(o, void 0, void 0, function() {
      return i(this, function(c) {
        throw new Error("Unsupported");
      });
    });
  }, clear: function() {
    return t(o, void 0, void 0, function() {
      return i(this, function(a) {
        return [2, window.localStorage.clear()];
      });
    });
  }, removeItem: function(a) {
    return t(o, void 0, void 0, function() {
      return i(this, function(c) {
        throw new Error("Unsupported");
      });
    });
  }, setItem: function(a, c) {
    return t(o, void 0, void 0, function() {
      return i(this, function(h) {
        throw new Error("Unsupported");
      });
    });
  }, keySync: function(a) {
    return window.localStorage.key(a);
  }, getItemSync: function(a) {
    return window.localStorage.getItem(a);
  }, clearSync: function() {
    return window.localStorage.clear();
  }, removeItemSync: function(a) {
    return window.localStorage.removeItem(a);
  }, setItemSync: function(a, c) {
    return window.localStorage.setItem(a, c);
  } };
  function d(a) {
    return new Promise(function(c) {
      return setTimeout(c, a);
    });
  }
  function l(a) {
    for (var c = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz", h = "", p = 0; p < a; p++)
      h += c[Math.floor(Math.random() * c.length)];
    return h;
  }
  var u = function() {
    function a(c) {
      this.acquiredIatSet = /* @__PURE__ */ new Set(), this.storageHandler = void 0, this.id = Date.now().toString() + l(15), this.acquireLock = this.acquireLock.bind(this), this.releaseLock = this.releaseLock.bind(this), this.releaseLock__private__ = this.releaseLock__private__.bind(this), this.waitForSomethingToChange = this.waitForSomethingToChange.bind(this), this.refreshLockWhileAcquired = this.refreshLockWhileAcquired.bind(this), this.storageHandler = c, a.waiters === void 0 && (a.waiters = []);
    }
    return a.prototype.acquireLock = function(c, h) {
      return h === void 0 && (h = 5e3), t(this, void 0, void 0, function() {
        var p, m, v, w, b, _, y;
        return i(this, function(f) {
          switch (f.label) {
            case 0:
              p = Date.now() + l(4), m = Date.now() + h, v = r + "-" + c, w = this.storageHandler === void 0 ? s : this.storageHandler, f.label = 1;
            case 1:
              return Date.now() < m ? [4, d(30)] : [3, 8];
            case 2:
              return f.sent(), w.getItemSync(v) !== null ? [3, 5] : (b = this.id + "-" + c + "-" + p, [4, d(Math.floor(25 * Math.random()))]);
            case 3:
              return f.sent(), w.setItemSync(v, JSON.stringify({ id: this.id, iat: p, timeoutKey: b, timeAcquired: Date.now(), timeRefreshed: Date.now() })), [4, d(30)];
            case 4:
              return f.sent(), (_ = w.getItemSync(v)) !== null && (y = JSON.parse(_)).id === this.id && y.iat === p ? (this.acquiredIatSet.add(p), this.refreshLockWhileAcquired(v, p), [2, !0]) : [3, 7];
            case 5:
              return a.lockCorrector(this.storageHandler === void 0 ? s : this.storageHandler), [4, this.waitForSomethingToChange(m)];
            case 6:
              f.sent(), f.label = 7;
            case 7:
              return p = Date.now() + l(4), [3, 1];
            case 8:
              return [2, !1];
          }
        });
      });
    }, a.prototype.refreshLockWhileAcquired = function(c, h) {
      return t(this, void 0, void 0, function() {
        var p = this;
        return i(this, function(m) {
          return setTimeout(function() {
            return t(p, void 0, void 0, function() {
              var v, w, b;
              return i(this, function(_) {
                switch (_.label) {
                  case 0:
                    return [4, W.default().lock(h)];
                  case 1:
                    return _.sent(), this.acquiredIatSet.has(h) ? (v = this.storageHandler === void 0 ? s : this.storageHandler, (w = v.getItemSync(c)) === null ? (W.default().unlock(h), [2]) : ((b = JSON.parse(w)).timeRefreshed = Date.now(), v.setItemSync(c, JSON.stringify(b)), W.default().unlock(h), this.refreshLockWhileAcquired(c, h), [2])) : (W.default().unlock(h), [2]);
                }
              });
            });
          }, 1e3), [2];
        });
      });
    }, a.prototype.waitForSomethingToChange = function(c) {
      return t(this, void 0, void 0, function() {
        return i(this, function(h) {
          switch (h.label) {
            case 0:
              return [4, new Promise(function(p) {
                var m = !1, v = Date.now(), w = !1;
                function b() {
                  if (w || (window.removeEventListener("storage", b), a.removeFromWaiting(b), clearTimeout(_), w = !0), !m) {
                    m = !0;
                    var y = 50 - (Date.now() - v);
                    y > 0 ? setTimeout(p, y) : p(null);
                  }
                }
                window.addEventListener("storage", b), a.addToWaiting(b);
                var _ = setTimeout(b, Math.max(0, c - Date.now()));
              })];
            case 1:
              return h.sent(), [2];
          }
        });
      });
    }, a.addToWaiting = function(c) {
      this.removeFromWaiting(c), a.waiters !== void 0 && a.waiters.push(c);
    }, a.removeFromWaiting = function(c) {
      a.waiters !== void 0 && (a.waiters = a.waiters.filter(function(h) {
        return h !== c;
      }));
    }, a.notifyWaiters = function() {
      a.waiters !== void 0 && a.waiters.slice().forEach(function(c) {
        return c();
      });
    }, a.prototype.releaseLock = function(c) {
      return t(this, void 0, void 0, function() {
        return i(this, function(h) {
          switch (h.label) {
            case 0:
              return [4, this.releaseLock__private__(c)];
            case 1:
              return [2, h.sent()];
          }
        });
      });
    }, a.prototype.releaseLock__private__ = function(c) {
      return t(this, void 0, void 0, function() {
        var h, p, m, v;
        return i(this, function(w) {
          switch (w.label) {
            case 0:
              return h = this.storageHandler === void 0 ? s : this.storageHandler, p = r + "-" + c, (m = h.getItemSync(p)) === null ? [2] : (v = JSON.parse(m)).id !== this.id ? [3, 2] : [4, W.default().lock(v.iat)];
            case 1:
              w.sent(), this.acquiredIatSet.delete(v.iat), h.removeItemSync(p), W.default().unlock(v.iat), a.notifyWaiters(), w.label = 2;
            case 2:
              return [2];
          }
        });
      });
    }, a.lockCorrector = function(c) {
      for (var h = Date.now() - 5e3, p = c, m = [], v = 0; ; ) {
        var w = p.keySync(v);
        if (w === null) break;
        m.push(w), v++;
      }
      for (var b = !1, _ = 0; _ < m.length; _++) {
        var y = m[_];
        if (y.includes(r)) {
          var f = p.getItemSync(y);
          if (f !== null) {
            var k = JSON.parse(f);
            (k.timeRefreshed === void 0 && k.timeAcquired < h || k.timeRefreshed !== void 0 && k.timeRefreshed < h) && (p.removeItemSync(y), b = !0);
          }
        }
      }
      b && a.notifyWaiters();
    }, a.waiters = void 0, a;
  }();
  e.default = u;
}));
const dt = { timeoutInSeconds: 60 }, Ee = { name: "auth0-spa-js", version: "2.1.3" }, Pe = () => Date.now();
class x extends Error {
  constructor(e, t) {
    super(t), this.error = e, this.error_description = t, Object.setPrototypeOf(this, x.prototype);
  }
  static fromPayload({ error: e, error_description: t }) {
    return new x(e, t);
  }
}
class ce extends x {
  constructor(e, t, i, o = null) {
    super(e, t), this.state = i, this.appState = o, Object.setPrototypeOf(this, ce.prototype);
  }
}
class G extends x {
  constructor() {
    super("timeout", "Timeout"), Object.setPrototypeOf(this, G.prototype);
  }
}
class ue extends G {
  constructor(e) {
    super(), this.popup = e, Object.setPrototypeOf(this, ue.prototype);
  }
}
class le extends x {
  constructor(e) {
    super("cancelled", "Popup closed"), this.popup = e, Object.setPrototypeOf(this, le.prototype);
  }
}
class de extends x {
  constructor(e, t, i) {
    super(e, t), this.mfa_token = i, Object.setPrototypeOf(this, de.prototype);
  }
}
class J extends x {
  constructor(e, t) {
    super("missing_refresh_token", `Missing Refresh Token (audience: '${fe(e, ["default"])}', scope: '${fe(t)}')`), this.audience = e, this.scope = t, Object.setPrototypeOf(this, J.prototype);
  }
}
function fe(n, e = []) {
  return n && !e.includes(n) ? n : "";
}
const M = () => window.crypto, B = () => {
  const n = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_~.";
  let e = "";
  return Array.from(M().getRandomValues(new Uint8Array(43))).forEach((t) => e += n[t % n.length]), e;
}, ge = (n) => btoa(n), ie = (n) => {
  var { clientId: e } = n, t = E(n, ["clientId"]);
  return new URLSearchParams(((i) => Object.keys(i).filter((o) => i[o] !== void 0).reduce((o, r) => Object.assign(Object.assign({}, o), { [r]: i[r] }), {}))(Object.assign({ client_id: e }, t))).toString();
}, we = (n) => ((e) => decodeURIComponent(atob(e).split("").map((t) => "%" + ("00" + t.charCodeAt(0).toString(16)).slice(-2)).join("")))(n.replace(/_/g, "/").replace(/-/g, "+")), ht = async (n, e) => {
  const t = await fetch(n, e);
  return { ok: t.ok, json: await t.json() };
}, pt = async (n, e, t) => {
  const i = new AbortController();
  let o;
  return e.signal = i.signal, Promise.race([ht(n, e), new Promise((r, s) => {
    o = setTimeout(() => {
      i.abort(), s(new Error("Timeout when executing 'fetch'"));
    }, t);
  })]).finally(() => {
    clearTimeout(o);
  });
}, mt = async (n, e, t, i, o, r, s) => {
  return d = { auth: { audience: e, scope: t }, timeout: o, fetchUrl: n, fetchOptions: i, useFormData: s }, l = r, new Promise(function(u, a) {
    const c = new MessageChannel();
    c.port1.onmessage = function(h) {
      h.data.error ? a(new Error(h.data.error)) : u(h.data), c.port1.close();
    }, l.postMessage(d, [c.port2]);
  });
  var d, l;
}, ft = async (n, e, t, i, o, r, s = 1e4) => o ? mt(n, e, t, i, s, o, r) : pt(n, i, s);
async function gt(n, e) {
  var { baseUrl: t, timeout: i, audience: o, scope: r, auth0Client: s, useFormData: d } = n, l = E(n, ["baseUrl", "timeout", "audience", "scope", "auth0Client", "useFormData"]);
  const u = d ? ie(l) : JSON.stringify(l);
  return await async function(a, c, h, p, m, v, w) {
    let b, _ = null;
    for (let I = 0; I < 3; I++) try {
      b = await ft(a, h, p, m, v, w, c), _ = null;
      break;
    } catch (j) {
      _ = j;
    }
    if (_) throw _;
    const y = b.json, { error: f, error_description: k } = y, T = E(y, ["error", "error_description"]), { ok: S } = b;
    if (!S) {
      const I = k || `HTTP error. Unable to fetch ${a}`;
      throw f === "mfa_required" ? new de(f, I, T.mfa_token) : f === "missing_refresh_token" ? new J(h, p) : new x(f || "request_error", I);
    }
    return T;
  }(`${t}/oauth/token`, i, o || "default", r, { method: "POST", body: u, headers: { "Content-Type": d ? "application/x-www-form-urlencoded" : "application/json", "Auth0-Client": btoa(JSON.stringify(s || Ee)) } }, e, d);
}
const F = (...n) => {
  return (e = n.filter(Boolean).join(" ").trim().split(/\s+/), Array.from(new Set(e))).join(" ");
  var e;
};
class P {
  constructor(e, t = "@@auth0spajs@@", i) {
    this.prefix = t, this.suffix = i, this.clientId = e.clientId, this.scope = e.scope, this.audience = e.audience;
  }
  toKey() {
    return [this.prefix, this.clientId, this.audience, this.scope, this.suffix].filter(Boolean).join("::");
  }
  static fromKey(e) {
    const [t, i, o, r] = e.split("::");
    return new P({ clientId: i, scope: r, audience: o }, t);
  }
  static fromCacheEntry(e) {
    const { scope: t, audience: i, client_id: o } = e;
    return new P({ scope: t, audience: i, clientId: o });
  }
}
class wt {
  set(e, t) {
    localStorage.setItem(e, JSON.stringify(t));
  }
  get(e) {
    const t = window.localStorage.getItem(e);
    if (t) try {
      return JSON.parse(t);
    } catch {
      return;
    }
  }
  remove(e) {
    localStorage.removeItem(e);
  }
  allKeys() {
    return Object.keys(window.localStorage).filter((e) => e.startsWith("@@auth0spajs@@"));
  }
}
class Re {
  constructor() {
    this.enclosedCache = /* @__PURE__ */ function() {
      let e = {};
      return { set(t, i) {
        e[t] = i;
      }, get(t) {
        const i = e[t];
        if (i) return i;
      }, remove(t) {
        delete e[t];
      }, allKeys: () => Object.keys(e) };
    }();
  }
}
class vt {
  constructor(e, t, i) {
    this.cache = e, this.keyManifest = t, this.nowProvider = i || Pe;
  }
  async setIdToken(e, t, i) {
    var o;
    const r = this.getIdTokenCacheKey(e);
    await this.cache.set(r, { id_token: t, decodedToken: i }), await ((o = this.keyManifest) === null || o === void 0 ? void 0 : o.add(r));
  }
  async getIdToken(e) {
    const t = await this.cache.get(this.getIdTokenCacheKey(e.clientId));
    if (!t && e.scope && e.audience) {
      const i = await this.get(e);
      return !i || !i.id_token || !i.decodedToken ? void 0 : { id_token: i.id_token, decodedToken: i.decodedToken };
    }
    if (t) return { id_token: t.id_token, decodedToken: t.decodedToken };
  }
  async get(e, t = 0) {
    var i;
    let o = await this.cache.get(e.toKey());
    if (!o) {
      const d = await this.getCacheKeys();
      if (!d) return;
      const l = this.matchExistingCacheKey(e, d);
      l && (o = await this.cache.get(l));
    }
    if (!o) return;
    const r = await this.nowProvider(), s = Math.floor(r / 1e3);
    return o.expiresAt - t < s ? o.body.refresh_token ? (o.body = { refresh_token: o.body.refresh_token }, await this.cache.set(e.toKey(), o), o.body) : (await this.cache.remove(e.toKey()), void await ((i = this.keyManifest) === null || i === void 0 ? void 0 : i.remove(e.toKey()))) : o.body;
  }
  async set(e) {
    var t;
    const i = new P({ clientId: e.client_id, scope: e.scope, audience: e.audience }), o = await this.wrapCacheEntry(e);
    await this.cache.set(i.toKey(), o), await ((t = this.keyManifest) === null || t === void 0 ? void 0 : t.add(i.toKey()));
  }
  async clear(e) {
    var t;
    const i = await this.getCacheKeys();
    i && (await i.filter((o) => !e || o.includes(e)).reduce(async (o, r) => {
      await o, await this.cache.remove(r);
    }, Promise.resolve()), await ((t = this.keyManifest) === null || t === void 0 ? void 0 : t.clear()));
  }
  async wrapCacheEntry(e) {
    const t = await this.nowProvider();
    return { body: e, expiresAt: Math.floor(t / 1e3) + e.expires_in };
  }
  async getCacheKeys() {
    var e;
    return this.keyManifest ? (e = await this.keyManifest.get()) === null || e === void 0 ? void 0 : e.keys : this.cache.allKeys ? this.cache.allKeys() : void 0;
  }
  getIdTokenCacheKey(e) {
    return new P({ clientId: e }, "@@auth0spajs@@", "@@user@@").toKey();
  }
  matchExistingCacheKey(e, t) {
    return t.filter((i) => {
      var o;
      const r = P.fromKey(i), s = new Set(r.scope && r.scope.split(" ")), d = ((o = e.scope) === null || o === void 0 ? void 0 : o.split(" ")) || [], l = r.scope && d.reduce((u, a) => u && s.has(a), !0);
      return r.prefix === "@@auth0spajs@@" && r.clientId === e.clientId && r.audience === e.audience && l;
    })[0];
  }
}
class yt {
  constructor(e, t, i) {
    this.storage = e, this.clientId = t, this.cookieDomain = i, this.storageKey = `a0.spajs.txs.${this.clientId}`;
  }
  create(e) {
    this.storage.save(this.storageKey, e, { daysUntilExpire: 1, cookieDomain: this.cookieDomain });
  }
  get() {
    return this.storage.get(this.storageKey);
  }
  remove() {
    this.storage.remove(this.storageKey, { cookieDomain: this.cookieDomain });
  }
}
const X = (n) => typeof n == "number", kt = ["iss", "aud", "exp", "nbf", "iat", "jti", "azp", "nonce", "auth_time", "at_hash", "c_hash", "acr", "amr", "sub_jwk", "cnf", "sip_from_tag", "sip_date", "sip_callid", "sip_cseq_num", "sip_via_branch", "orig", "dest", "mky", "events", "toe", "txn", "rph", "sid", "vot", "vtm"], bt = (n) => {
  if (!n.id_token) throw new Error("ID token is required but missing");
  const e = ((r) => {
    const s = r.split("."), [d, l, u] = s;
    if (s.length !== 3 || !d || !l || !u) throw new Error("ID token could not be decoded");
    const a = JSON.parse(we(l)), c = { __raw: r }, h = {};
    return Object.keys(a).forEach((p) => {
      c[p] = a[p], kt.includes(p) || (h[p] = a[p]);
    }), { encoded: { header: d, payload: l, signature: u }, header: JSON.parse(we(d)), claims: c, user: h };
  })(n.id_token);
  if (!e.claims.iss) throw new Error("Issuer (iss) claim must be a string present in the ID token");
  if (e.claims.iss !== n.iss) throw new Error(`Issuer (iss) claim mismatch in the ID token; expected "${n.iss}", found "${e.claims.iss}"`);
  if (!e.user.sub) throw new Error("Subject (sub) claim must be a string present in the ID token");
  if (e.header.alg !== "RS256") throw new Error(`Signature algorithm of "${e.header.alg}" is not supported. Expected the ID token to be signed with "RS256".`);
  if (!e.claims.aud || typeof e.claims.aud != "string" && !Array.isArray(e.claims.aud)) throw new Error("Audience (aud) claim must be a string or array of strings present in the ID token");
  if (Array.isArray(e.claims.aud)) {
    if (!e.claims.aud.includes(n.aud)) throw new Error(`Audience (aud) claim mismatch in the ID token; expected "${n.aud}" but was not one of "${e.claims.aud.join(", ")}"`);
    if (e.claims.aud.length > 1) {
      if (!e.claims.azp) throw new Error("Authorized Party (azp) claim must be a string present in the ID token when Audience (aud) claim has multiple values");
      if (e.claims.azp !== n.aud) throw new Error(`Authorized Party (azp) claim mismatch in the ID token; expected "${n.aud}", found "${e.claims.azp}"`);
    }
  } else if (e.claims.aud !== n.aud) throw new Error(`Audience (aud) claim mismatch in the ID token; expected "${n.aud}" but found "${e.claims.aud}"`);
  if (n.nonce) {
    if (!e.claims.nonce) throw new Error("Nonce (nonce) claim must be a string present in the ID token");
    if (e.claims.nonce !== n.nonce) throw new Error(`Nonce (nonce) claim mismatch in the ID token; expected "${n.nonce}", found "${e.claims.nonce}"`);
  }
  if (n.max_age && !X(e.claims.auth_time)) throw new Error("Authentication Time (auth_time) claim must be a number present in the ID token when Max Age (max_age) is specified");
  if (e.claims.exp == null || !X(e.claims.exp)) throw new Error("Expiration Time (exp) claim must be a number present in the ID token");
  if (!X(e.claims.iat)) throw new Error("Issued At (iat) claim must be a number present in the ID token");
  const t = n.leeway || 60, i = new Date(n.now || Date.now()), o = /* @__PURE__ */ new Date(0);
  if (o.setUTCSeconds(e.claims.exp + t), i > o) throw new Error(`Expiration Time (exp) claim error in the ID token; current time (${i}) is after expiration time (${o})`);
  if (e.claims.nbf != null && X(e.claims.nbf)) {
    const r = /* @__PURE__ */ new Date(0);
    if (r.setUTCSeconds(e.claims.nbf - t), i < r) throw new Error(`Not Before time (nbf) claim in the ID token indicates that this token can't be used just yet. Current time (${i}) is before ${r}`);
  }
  if (e.claims.auth_time != null && X(e.claims.auth_time)) {
    const r = /* @__PURE__ */ new Date(0);
    if (r.setUTCSeconds(parseInt(e.claims.auth_time) + n.max_age + t), i > r) throw new Error(`Authentication Time (auth_time) claim in the ID token indicates that too much time has passed since the last end-user authentication. Current time (${i}) is after last auth at ${r}`);
  }
  if (n.organization) {
    const r = n.organization.trim();
    if (r.startsWith("org_")) {
      const s = r;
      if (!e.claims.org_id) throw new Error("Organization ID (org_id) claim must be a string present in the ID token");
      if (s !== e.claims.org_id) throw new Error(`Organization ID (org_id) claim mismatch in the ID token; expected "${s}", found "${e.claims.org_id}"`);
    } else {
      const s = r.toLowerCase();
      if (!e.claims.org_name) throw new Error("Organization Name (org_name) claim must be a string present in the ID token");
      if (s !== e.claims.org_name) throw new Error(`Organization Name (org_name) claim mismatch in the ID token; expected "${s}", found "${e.claims.org_name}"`);
    }
  }
  return e;
};
var K = se(function(n, e) {
  var t = Z && Z.__assign || function() {
    return t = Object.assign || function(l) {
      for (var u, a = 1, c = arguments.length; a < c; a++) for (var h in u = arguments[a]) Object.prototype.hasOwnProperty.call(u, h) && (l[h] = u[h]);
      return l;
    }, t.apply(this, arguments);
  };
  function i(l, u) {
    if (!u) return "";
    var a = "; " + l;
    return u === !0 ? a : a + "=" + u;
  }
  function o(l, u, a) {
    return encodeURIComponent(l).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/\(/g, "%28").replace(/\)/g, "%29") + "=" + encodeURIComponent(u).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent) + function(c) {
      if (typeof c.expires == "number") {
        var h = /* @__PURE__ */ new Date();
        h.setMilliseconds(h.getMilliseconds() + 864e5 * c.expires), c.expires = h;
      }
      return i("Expires", c.expires ? c.expires.toUTCString() : "") + i("Domain", c.domain) + i("Path", c.path) + i("Secure", c.secure) + i("SameSite", c.sameSite);
    }(a);
  }
  function r(l) {
    for (var u = {}, a = l ? l.split("; ") : [], c = /(%[\dA-F]{2})+/gi, h = 0; h < a.length; h++) {
      var p = a[h].split("="), m = p.slice(1).join("=");
      m.charAt(0) === '"' && (m = m.slice(1, -1));
      try {
        u[p[0].replace(c, decodeURIComponent)] = m.replace(c, decodeURIComponent);
      } catch {
      }
    }
    return u;
  }
  function s() {
    return r(document.cookie);
  }
  function d(l, u, a) {
    document.cookie = o(l, u, t({ path: "/" }, a));
  }
  e.__esModule = !0, e.encode = o, e.parse = r, e.getAll = s, e.get = function(l) {
    return s()[l];
  }, e.set = d, e.remove = function(l, u) {
    d(l, "", t(t({}, u), { expires: -1 }));
  };
});
ae(K), K.encode, K.parse, K.getAll;
var _t = K.get, Ce = K.set, ze = K.remove;
const D = { get(n) {
  const e = _t(n);
  if (e !== void 0) return JSON.parse(e);
}, save(n, e, t) {
  let i = {};
  window.location.protocol === "https:" && (i = { secure: !0, sameSite: "none" }), t != null && t.daysUntilExpire && (i.expires = t.daysUntilExpire), t != null && t.cookieDomain && (i.domain = t.cookieDomain), Ce(n, JSON.stringify(e), i);
}, remove(n, e) {
  let t = {};
  e != null && e.cookieDomain && (t.domain = e.cookieDomain), ze(n, t);
} }, It = { get(n) {
  return D.get(n) || D.get(`_legacy_${n}`);
}, save(n, e, t) {
  let i = {};
  window.location.protocol === "https:" && (i = { secure: !0 }), t != null && t.daysUntilExpire && (i.expires = t.daysUntilExpire), t != null && t.cookieDomain && (i.domain = t.cookieDomain), Ce(`_legacy_${n}`, JSON.stringify(e), i), D.save(n, e, t);
}, remove(n, e) {
  let t = {};
  e != null && e.cookieDomain && (t.domain = e.cookieDomain), ze(n, t), D.remove(n, e), D.remove(`_legacy_${n}`, e);
} }, St = { get(n) {
  if (typeof sessionStorage > "u") return;
  const e = sessionStorage.getItem(n);
  return e != null ? JSON.parse(e) : void 0;
}, save(n, e) {
  sessionStorage.setItem(n, JSON.stringify(e));
}, remove(n) {
  sessionStorage.removeItem(n);
} };
function Ot(n, e, t) {
  var i = e === void 0 ? null : e, o = function(l, u) {
    var a = atob(l);
    if (u) {
      for (var c = new Uint8Array(a.length), h = 0, p = a.length; h < p; ++h) c[h] = a.charCodeAt(h);
      return String.fromCharCode.apply(null, new Uint16Array(c.buffer));
    }
    return a;
  }(n, t !== void 0 && t), r = o.indexOf(`
`, 10) + 1, s = o.substring(r) + (i ? "//# sourceMappingURL=" + i : ""), d = new Blob([s], { type: "application/javascript" });
  return URL.createObjectURL(d);
}
var ve, ye, ke, $, jt = (ve = "Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwohZnVuY3Rpb24oKXsidXNlIHN0cmljdCI7Y2xhc3MgZSBleHRlbmRzIEVycm9ye2NvbnN0cnVjdG9yKHQscil7c3VwZXIociksdGhpcy5lcnJvcj10LHRoaXMuZXJyb3JfZGVzY3JpcHRpb249cixPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcyxlLnByb3RvdHlwZSl9c3RhdGljIGZyb21QYXlsb2FkKHtlcnJvcjp0LGVycm9yX2Rlc2NyaXB0aW9uOnJ9KXtyZXR1cm4gbmV3IGUodCxyKX19Y2xhc3MgdCBleHRlbmRzIGV7Y29uc3RydWN0b3IoZSxzKXtzdXBlcigibWlzc2luZ19yZWZyZXNoX3Rva2VuIixgTWlzc2luZyBSZWZyZXNoIFRva2VuIChhdWRpZW5jZTogJyR7cihlLFsiZGVmYXVsdCJdKX0nLCBzY29wZTogJyR7cihzKX0nKWApLHRoaXMuYXVkaWVuY2U9ZSx0aGlzLnNjb3BlPXMsT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsdC5wcm90b3R5cGUpfX1mdW5jdGlvbiByKGUsdD1bXSl7cmV0dXJuIGUmJiF0LmluY2x1ZGVzKGUpP2U6IiJ9ImZ1bmN0aW9uIj09dHlwZW9mIFN1cHByZXNzZWRFcnJvciYmU3VwcHJlc3NlZEVycm9yO2NvbnN0IHM9ZT0+e3ZhcntjbGllbnRJZDp0fT1lLHI9ZnVuY3Rpb24oZSx0KXt2YXIgcj17fTtmb3IodmFyIHMgaW4gZSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxzKSYmdC5pbmRleE9mKHMpPDAmJihyW3NdPWVbc10pO2lmKG51bGwhPWUmJiJmdW5jdGlvbiI9PXR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKXt2YXIgbz0wO2ZvcihzPU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZSk7bzxzLmxlbmd0aDtvKyspdC5pbmRleE9mKHNbb10pPDAmJk9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChlLHNbb10pJiYocltzW29dXT1lW3Nbb11dKX1yZXR1cm4gcn0oZSxbImNsaWVudElkIl0pO3JldHVybiBuZXcgVVJMU2VhcmNoUGFyYW1zKChlPT5PYmplY3Qua2V5cyhlKS5maWx0ZXIoKHQ9PnZvaWQgMCE9PWVbdF0pKS5yZWR1Y2UoKCh0LHIpPT5PYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sdCkse1tyXTplW3JdfSkpLHt9KSkoT2JqZWN0LmFzc2lnbih7Y2xpZW50X2lkOnR9LHIpKSkudG9TdHJpbmcoKX07bGV0IG89e307Y29uc3Qgbj0oZSx0KT0+YCR7ZX18JHt0fWA7YWRkRXZlbnRMaXN0ZW5lcigibWVzc2FnZSIsKGFzeW5jKHtkYXRhOnt0aW1lb3V0OmUsYXV0aDpyLGZldGNoVXJsOmksZmV0Y2hPcHRpb25zOmMsdXNlRm9ybURhdGE6YX0scG9ydHM6W3BdfSk9PntsZXQgZjtjb25zdHthdWRpZW5jZTp1LHNjb3BlOmx9PXJ8fHt9O3RyeXtjb25zdCByPWE/KGU9Pntjb25zdCB0PW5ldyBVUkxTZWFyY2hQYXJhbXMoZSkscj17fTtyZXR1cm4gdC5mb3JFYWNoKCgoZSx0KT0+e3JbdF09ZX0pKSxyfSkoYy5ib2R5KTpKU09OLnBhcnNlKGMuYm9keSk7aWYoIXIucmVmcmVzaF90b2tlbiYmInJlZnJlc2hfdG9rZW4iPT09ci5ncmFudF90eXBlKXtjb25zdCBlPSgoZSx0KT0+b1tuKGUsdCldKSh1LGwpO2lmKCFlKXRocm93IG5ldyB0KHUsbCk7Yy5ib2R5PWE/cyhPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30scikse3JlZnJlc2hfdG9rZW46ZX0pKTpKU09OLnN0cmluZ2lmeShPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30scikse3JlZnJlc2hfdG9rZW46ZX0pKX1sZXQgaCxnOyJmdW5jdGlvbiI9PXR5cGVvZiBBYm9ydENvbnRyb2xsZXImJihoPW5ldyBBYm9ydENvbnRyb2xsZXIsYy5zaWduYWw9aC5zaWduYWwpO3RyeXtnPWF3YWl0IFByb21pc2UucmFjZShbKGQ9ZSxuZXcgUHJvbWlzZSgoZT0+c2V0VGltZW91dChlLGQpKSkpLGZldGNoKGksT2JqZWN0LmFzc2lnbih7fSxjKSldKX1jYXRjaChlKXtyZXR1cm4gdm9pZCBwLnBvc3RNZXNzYWdlKHtlcnJvcjplLm1lc3NhZ2V9KX1pZighZylyZXR1cm4gaCYmaC5hYm9ydCgpLHZvaWQgcC5wb3N0TWVzc2FnZSh7ZXJyb3I6IlRpbWVvdXQgd2hlbiBleGVjdXRpbmcgJ2ZldGNoJyJ9KTtmPWF3YWl0IGcuanNvbigpLGYucmVmcmVzaF90b2tlbj8oKChlLHQscik9PntvW24odCxyKV09ZX0pKGYucmVmcmVzaF90b2tlbix1LGwpLGRlbGV0ZSBmLnJlZnJlc2hfdG9rZW4pOigoZSx0KT0+e2RlbGV0ZSBvW24oZSx0KV19KSh1LGwpLHAucG9zdE1lc3NhZ2Uoe29rOmcub2ssanNvbjpmfSl9Y2F0Y2goZSl7cC5wb3N0TWVzc2FnZSh7b2s6ITEsanNvbjp7ZXJyb3I6ZS5lcnJvcixlcnJvcl9kZXNjcmlwdGlvbjplLm1lc3NhZ2V9fSl9dmFyIGR9KSl9KCk7Cgo=", ye = null, ke = !1, function(n) {
  return $ = $ || Ot(ve, ye, ke), new Worker($, n);
});
const q = {};
class Tt {
  constructor(e, t) {
    this.cache = e, this.clientId = t, this.manifestKey = this.createManifestKeyFrom(this.clientId);
  }
  async add(e) {
    var t;
    const i = new Set(((t = await this.cache.get(this.manifestKey)) === null || t === void 0 ? void 0 : t.keys) || []);
    i.add(e), await this.cache.set(this.manifestKey, { keys: [...i] });
  }
  async remove(e) {
    const t = await this.cache.get(this.manifestKey);
    if (t) {
      const i = new Set(t.keys);
      return i.delete(e), i.size > 0 ? await this.cache.set(this.manifestKey, { keys: [...i] }) : await this.cache.remove(this.manifestKey);
    }
  }
  get() {
    return this.cache.get(this.manifestKey);
  }
  clear() {
    return this.cache.remove(this.manifestKey);
  }
  createManifestKeyFrom(e) {
    return `@@auth0spajs@@::${e}`;
  }
}
const xt = { memory: () => new Re().enclosedCache, localstorage: () => new wt() }, be = (n) => xt[n], _e = (n) => {
  const { openUrl: e, onRedirect: t } = n, i = E(n, ["openUrl", "onRedirect"]);
  return Object.assign(Object.assign({}, i), { openUrl: e === !1 || e ? e : t });
}, Q = new lt();
class Et {
  constructor(e) {
    let t, i;
    if (this.userCache = new Re().enclosedCache, this.defaultOptions = { authorizationParams: { scope: "openid profile email" }, useRefreshTokensFallback: !1, useFormData: !0 }, this._releaseLockOnPageHide = async () => {
      await Q.releaseLock("auth0.lock.getTokenSilently"), window.removeEventListener("pagehide", this._releaseLockOnPageHide);
    }, this.options = Object.assign(Object.assign(Object.assign({}, this.defaultOptions), e), { authorizationParams: Object.assign(Object.assign({}, this.defaultOptions.authorizationParams), e.authorizationParams) }), typeof window < "u" && (() => {
      if (!M()) throw new Error("For security reasons, `window.crypto` is required to run `auth0-spa-js`.");
      if (M().subtle === void 0) throw new Error(`
      auth0-spa-js must run on a secure origin. See https://github.com/auth0/auth0-spa-js/blob/main/FAQ.md#why-do-i-get-auth0-spa-js-must-run-on-a-secure-origin for more information.
    `);
    })(), e.cache && e.cacheLocation && console.warn("Both `cache` and `cacheLocation` options have been specified in the Auth0Client configuration; ignoring `cacheLocation` and using `cache`."), e.cache) i = e.cache;
    else {
      if (t = e.cacheLocation || "memory", !be(t)) throw new Error(`Invalid cache location "${t}"`);
      i = be(t)();
    }
    this.httpTimeoutMs = e.httpTimeoutInSeconds ? 1e3 * e.httpTimeoutInSeconds : 1e4, this.cookieStorage = e.legacySameSiteCookie === !1 ? D : It, this.orgHintCookieName = `auth0.${this.options.clientId}.organization_hint`, this.isAuthenticatedCookieName = ((s) => `auth0.${s}.is.authenticated`)(this.options.clientId), this.sessionCheckExpiryDays = e.sessionCheckExpiryDays || 1;
    const o = e.useCookiesForTransactions ? this.cookieStorage : St;
    var r;
    this.scope = F("openid", this.options.authorizationParams.scope, this.options.useRefreshTokens ? "offline_access" : ""), this.transactionManager = new yt(o, this.options.clientId, this.options.cookieDomain), this.nowProvider = this.options.nowProvider || Pe, this.cacheManager = new vt(i, i.allKeys ? void 0 : new Tt(i, this.options.clientId), this.nowProvider), this.domainUrl = (r = this.options.domain, /^https?:\/\//.test(r) ? r : `https://${r}`), this.tokenIssuer = ((s, d) => s ? s.startsWith("https://") ? s : `https://${s}/` : `${d}/`)(this.options.issuer, this.domainUrl), typeof window < "u" && window.Worker && this.options.useRefreshTokens && t === "memory" && (this.options.workerUrl ? this.worker = new Worker(this.options.workerUrl) : this.worker = new jt());
  }
  _url(e) {
    const t = encodeURIComponent(btoa(JSON.stringify(this.options.auth0Client || Ee)));
    return `${this.domainUrl}${e}&auth0Client=${t}`;
  }
  _authorizeUrl(e) {
    return this._url(`/authorize?${ie(e)}`);
  }
  async _verifyIdToken(e, t, i) {
    const o = await this.nowProvider();
    return bt({ iss: this.tokenIssuer, aud: this.options.clientId, id_token: e, nonce: t, organization: i, leeway: this.options.leeway, max_age: (r = this.options.authorizationParams.max_age, typeof r != "string" ? r : parseInt(r, 10) || void 0), now: o });
    var r;
  }
  _processOrgHint(e) {
    e ? this.cookieStorage.save(this.orgHintCookieName, e, { daysUntilExpire: this.sessionCheckExpiryDays, cookieDomain: this.options.cookieDomain }) : this.cookieStorage.remove(this.orgHintCookieName, { cookieDomain: this.options.cookieDomain });
  }
  async _prepareAuthorizeUrl(e, t, i) {
    const o = ge(B()), r = ge(B()), s = B(), d = ((a) => {
      const c = new Uint8Array(a);
      return ((h) => {
        const p = { "+": "-", "/": "_", "=": "" };
        return h.replace(/[+/=]/g, (m) => p[m]);
      })(window.btoa(String.fromCharCode(...Array.from(c))));
    })(await (async (a) => await M().subtle.digest({ name: "SHA-256" }, new TextEncoder().encode(a)))(s)), l = ((a, c, h, p, m, v, w, b) => Object.assign(Object.assign(Object.assign({ client_id: a.clientId }, a.authorizationParams), h), { scope: F(c, h.scope), response_type: "code", response_mode: b || "query", state: p, nonce: m, redirect_uri: w || a.authorizationParams.redirect_uri, code_challenge: v, code_challenge_method: "S256" }))(this.options, this.scope, e, o, r, d, e.redirect_uri || this.options.authorizationParams.redirect_uri || i, t == null ? void 0 : t.response_mode), u = this._authorizeUrl(l);
    return { nonce: r, code_verifier: s, scope: l.scope, audience: l.audience || "default", redirect_uri: l.redirect_uri, state: o, url: u };
  }
  async loginWithPopup(e, t) {
    var i;
    if (e = e || {}, !(t = t || {}).popup && (t.popup = ((d) => {
      const l = window.screenX + (window.innerWidth - 400) / 2, u = window.screenY + (window.innerHeight - 600) / 2;
      return window.open(d, "auth0:authorize:popup", `left=${l},top=${u},width=400,height=600,resizable,scrollbars=yes,status=1`);
    })(""), !t.popup)) throw new Error("Unable to open a popup for loginWithPopup - window.open returned `null`");
    const o = await this._prepareAuthorizeUrl(e.authorizationParams || {}, { response_mode: "web_message" }, window.location.origin);
    t.popup.location.href = o.url;
    const r = await ((d) => new Promise((l, u) => {
      let a;
      const c = setInterval(() => {
        d.popup && d.popup.closed && (clearInterval(c), clearTimeout(h), window.removeEventListener("message", a, !1), u(new le(d.popup)));
      }, 1e3), h = setTimeout(() => {
        clearInterval(c), u(new ue(d.popup)), window.removeEventListener("message", a, !1);
      }, 1e3 * (d.timeoutInSeconds || 60));
      a = function(p) {
        if (p.data && p.data.type === "authorization_response") {
          if (clearTimeout(h), clearInterval(c), window.removeEventListener("message", a, !1), d.popup.close(), p.data.response.error) return u(x.fromPayload(p.data.response));
          l(p.data.response);
        }
      }, window.addEventListener("message", a);
    }))(Object.assign(Object.assign({}, t), { timeoutInSeconds: t.timeoutInSeconds || this.options.authorizeTimeoutInSeconds || 60 }));
    if (o.state !== r.state) throw new x("state_mismatch", "Invalid state");
    const s = ((i = e.authorizationParams) === null || i === void 0 ? void 0 : i.organization) || this.options.authorizationParams.organization;
    await this._requestToken({ audience: o.audience, scope: o.scope, code_verifier: o.code_verifier, grant_type: "authorization_code", code: r.code, redirect_uri: o.redirect_uri }, { nonceIn: o.nonce, organization: s });
  }
  async getUser() {
    var e;
    const t = await this._getIdTokenFromCache();
    return (e = t == null ? void 0 : t.decodedToken) === null || e === void 0 ? void 0 : e.user;
  }
  async getIdTokenClaims() {
    var e;
    const t = await this._getIdTokenFromCache();
    return (e = t == null ? void 0 : t.decodedToken) === null || e === void 0 ? void 0 : e.claims;
  }
  async loginWithRedirect(e = {}) {
    var t;
    const i = _e(e), { openUrl: o, fragment: r, appState: s } = i, d = E(i, ["openUrl", "fragment", "appState"]), l = ((t = d.authorizationParams) === null || t === void 0 ? void 0 : t.organization) || this.options.authorizationParams.organization, u = await this._prepareAuthorizeUrl(d.authorizationParams || {}), { url: a } = u, c = E(u, ["url"]);
    this.transactionManager.create(Object.assign(Object.assign(Object.assign({}, c), { appState: s }), l && { organization: l }));
    const h = r ? `${a}#${r}` : a;
    o ? await o(h) : window.location.assign(h);
  }
  async handleRedirectCallback(e = window.location.href) {
    const t = e.split("?").slice(1);
    if (t.length === 0) throw new Error("There are no query params available for parsing.");
    const { state: i, code: o, error: r, error_description: s } = ((c) => {
      c.indexOf("#") > -1 && (c = c.substring(0, c.indexOf("#")));
      const h = new URLSearchParams(c);
      return { state: h.get("state"), code: h.get("code") || void 0, error: h.get("error") || void 0, error_description: h.get("error_description") || void 0 };
    })(t.join("")), d = this.transactionManager.get();
    if (!d) throw new x("missing_transaction", "Invalid state");
    if (this.transactionManager.remove(), r) throw new ce(r, s || r, i, d.appState);
    if (!d.code_verifier || d.state && d.state !== i) throw new x("state_mismatch", "Invalid state");
    const l = d.organization, u = d.nonce, a = d.redirect_uri;
    return await this._requestToken(Object.assign({ audience: d.audience, scope: d.scope, code_verifier: d.code_verifier, grant_type: "authorization_code", code: o }, a ? { redirect_uri: a } : {}), { nonceIn: u, organization: l }), { appState: d.appState };
  }
  async checkSession(e) {
    if (!this.cookieStorage.get(this.isAuthenticatedCookieName)) {
      if (!this.cookieStorage.get("auth0.is.authenticated")) return;
      this.cookieStorage.save(this.isAuthenticatedCookieName, !0, { daysUntilExpire: this.sessionCheckExpiryDays, cookieDomain: this.options.cookieDomain }), this.cookieStorage.remove("auth0.is.authenticated");
    }
    try {
      await this.getTokenSilently(e);
    } catch {
    }
  }
  async getTokenSilently(e = {}) {
    var t;
    const i = Object.assign(Object.assign({ cacheMode: "on" }, e), { authorizationParams: Object.assign(Object.assign(Object.assign({}, this.options.authorizationParams), e.authorizationParams), { scope: F(this.scope, (t = e.authorizationParams) === null || t === void 0 ? void 0 : t.scope) }) }), o = await ((r, s) => {
      let d = q[s];
      return d || (d = r().finally(() => {
        delete q[s], d = null;
      }), q[s] = d), d;
    })(() => this._getTokenSilently(i), `${this.options.clientId}::${i.authorizationParams.audience}::${i.authorizationParams.scope}`);
    return e.detailedResponse ? o : o == null ? void 0 : o.access_token;
  }
  async _getTokenSilently(e) {
    const { cacheMode: t } = e, i = E(e, ["cacheMode"]);
    if (t !== "off") {
      const o = await this._getEntryFromCache({ scope: i.authorizationParams.scope, audience: i.authorizationParams.audience || "default", clientId: this.options.clientId });
      if (o) return o;
    }
    if (t !== "cache-only") {
      if (!await (async (o, r = 3) => {
        for (let s = 0; s < r; s++) if (await o()) return !0;
        return !1;
      })(() => Q.acquireLock("auth0.lock.getTokenSilently", 5e3), 10)) throw new G();
      try {
        if (window.addEventListener("pagehide", this._releaseLockOnPageHide), t !== "off") {
          const u = await this._getEntryFromCache({ scope: i.authorizationParams.scope, audience: i.authorizationParams.audience || "default", clientId: this.options.clientId });
          if (u) return u;
        }
        const o = this.options.useRefreshTokens ? await this._getTokenUsingRefreshToken(i) : await this._getTokenFromIFrame(i), { id_token: r, access_token: s, oauthTokenScope: d, expires_in: l } = o;
        return Object.assign(Object.assign({ id_token: r, access_token: s }, d ? { scope: d } : null), { expires_in: l });
      } finally {
        await Q.releaseLock("auth0.lock.getTokenSilently"), window.removeEventListener("pagehide", this._releaseLockOnPageHide);
      }
    }
  }
  async getTokenWithPopup(e = {}, t = {}) {
    var i;
    const o = Object.assign(Object.assign({}, e), { authorizationParams: Object.assign(Object.assign(Object.assign({}, this.options.authorizationParams), e.authorizationParams), { scope: F(this.scope, (i = e.authorizationParams) === null || i === void 0 ? void 0 : i.scope) }) });
    return t = Object.assign(Object.assign({}, dt), t), await this.loginWithPopup(o, t), (await this.cacheManager.get(new P({ scope: o.authorizationParams.scope, audience: o.authorizationParams.audience || "default", clientId: this.options.clientId }))).access_token;
  }
  async isAuthenticated() {
    return !!await this.getUser();
  }
  _buildLogoutUrl(e) {
    e.clientId !== null ? e.clientId = e.clientId || this.options.clientId : delete e.clientId;
    const t = e.logoutParams || {}, { federated: i } = t, o = E(t, ["federated"]), r = i ? "&federated" : "";
    return this._url(`/v2/logout?${ie(Object.assign({ clientId: e.clientId }, o))}`) + r;
  }
  async logout(e = {}) {
    const t = _e(e), { openUrl: i } = t, o = E(t, ["openUrl"]);
    e.clientId === null ? await this.cacheManager.clear() : await this.cacheManager.clear(e.clientId || this.options.clientId), this.cookieStorage.remove(this.orgHintCookieName, { cookieDomain: this.options.cookieDomain }), this.cookieStorage.remove(this.isAuthenticatedCookieName, { cookieDomain: this.options.cookieDomain }), this.userCache.remove("@@user@@");
    const r = this._buildLogoutUrl(o);
    i ? await i(r) : i !== !1 && window.location.assign(r);
  }
  async _getTokenFromIFrame(e) {
    const t = Object.assign(Object.assign({}, e.authorizationParams), { prompt: "none" }), i = this.cookieStorage.get(this.orgHintCookieName);
    i && !t.organization && (t.organization = i);
    const { url: o, state: r, nonce: s, code_verifier: d, redirect_uri: l, scope: u, audience: a } = await this._prepareAuthorizeUrl(t, { response_mode: "web_message" }, window.location.origin);
    try {
      if (window.crossOriginIsolated) throw new x("login_required", "The application is running in a Cross-Origin Isolated context, silently retrieving a token without refresh token is not possible.");
      const c = e.timeoutInSeconds || this.options.authorizeTimeoutInSeconds, h = await ((m, v, w = 60) => new Promise((b, _) => {
        const y = window.document.createElement("iframe");
        y.setAttribute("width", "0"), y.setAttribute("height", "0"), y.style.display = "none";
        const f = () => {
          window.document.body.contains(y) && (window.document.body.removeChild(y), window.removeEventListener("message", k, !1));
        };
        let k;
        const T = setTimeout(() => {
          _(new G()), f();
        }, 1e3 * w);
        k = function(S) {
          if (S.origin != v || !S.data || S.data.type !== "authorization_response") return;
          const I = S.source;
          I && I.close(), S.data.response.error ? _(x.fromPayload(S.data.response)) : b(S.data.response), clearTimeout(T), window.removeEventListener("message", k, !1), setTimeout(f, 2e3);
        }, window.addEventListener("message", k, !1), window.document.body.appendChild(y), y.setAttribute("src", m);
      }))(o, this.domainUrl, c);
      if (r !== h.state) throw new x("state_mismatch", "Invalid state");
      const p = await this._requestToken(Object.assign(Object.assign({}, e.authorizationParams), { code_verifier: d, code: h.code, grant_type: "authorization_code", redirect_uri: l, timeout: e.authorizationParams.timeout || this.httpTimeoutMs }), { nonceIn: s, organization: t.organization });
      return Object.assign(Object.assign({}, p), { scope: u, oauthTokenScope: p.scope, audience: a });
    } catch (c) {
      throw c.error === "login_required" && this.logout({ openUrl: !1 }), c;
    }
  }
  async _getTokenUsingRefreshToken(e) {
    const t = await this.cacheManager.get(new P({ scope: e.authorizationParams.scope, audience: e.authorizationParams.audience || "default", clientId: this.options.clientId }));
    if (!(t && t.refresh_token || this.worker)) {
      if (this.options.useRefreshTokensFallback) return await this._getTokenFromIFrame(e);
      throw new J(e.authorizationParams.audience || "default", e.authorizationParams.scope);
    }
    const i = e.authorizationParams.redirect_uri || this.options.authorizationParams.redirect_uri || window.location.origin, o = typeof e.timeoutInSeconds == "number" ? 1e3 * e.timeoutInSeconds : null;
    try {
      const r = await this._requestToken(Object.assign(Object.assign(Object.assign({}, e.authorizationParams), { grant_type: "refresh_token", refresh_token: t && t.refresh_token, redirect_uri: i }), o && { timeout: o }));
      return Object.assign(Object.assign({}, r), { scope: e.authorizationParams.scope, oauthTokenScope: r.scope, audience: e.authorizationParams.audience || "default" });
    } catch (r) {
      if ((r.message.indexOf("Missing Refresh Token") > -1 || r.message && r.message.indexOf("invalid refresh token") > -1) && this.options.useRefreshTokensFallback) return await this._getTokenFromIFrame(e);
      throw r;
    }
  }
  async _saveEntryInCache(e) {
    const { id_token: t, decodedToken: i } = e, o = E(e, ["id_token", "decodedToken"]);
    this.userCache.set("@@user@@", { id_token: t, decodedToken: i }), await this.cacheManager.setIdToken(this.options.clientId, e.id_token, e.decodedToken), await this.cacheManager.set(o);
  }
  async _getIdTokenFromCache() {
    const e = this.options.authorizationParams.audience || "default", t = await this.cacheManager.getIdToken(new P({ clientId: this.options.clientId, audience: e, scope: this.scope })), i = this.userCache.get("@@user@@");
    return t && t.id_token === (i == null ? void 0 : i.id_token) ? i : (this.userCache.set("@@user@@", t), t);
  }
  async _getEntryFromCache({ scope: e, audience: t, clientId: i }) {
    const o = await this.cacheManager.get(new P({ scope: e, audience: t, clientId: i }), 60);
    if (o && o.access_token) {
      const { access_token: r, oauthTokenScope: s, expires_in: d } = o, l = await this._getIdTokenFromCache();
      return l && Object.assign(Object.assign({ id_token: l.id_token, access_token: r }, s ? { scope: s } : null), { expires_in: d });
    }
  }
  async _requestToken(e, t) {
    const { nonceIn: i, organization: o } = t || {}, r = await gt(Object.assign({ baseUrl: this.domainUrl, client_id: this.options.clientId, auth0Client: this.options.auth0Client, useFormData: this.options.useFormData, timeout: this.httpTimeoutMs }, e), this.worker), s = await this._verifyIdToken(r.id_token, i, o);
    return await this._saveEntryInCache(Object.assign(Object.assign(Object.assign(Object.assign({}, r), { decodedToken: s, scope: e.scope, audience: e.audience || "default" }), r.scope ? { oauthTokenScope: r.scope } : null), { client_id: this.options.clientId })), this.cookieStorage.save(this.isAuthenticatedCookieName, !0, { daysUntilExpire: this.sessionCheckExpiryDays, cookieDomain: this.options.cookieDomain }), this._processOrgHint(o || s.claims.org_id), Object.assign(Object.assign({}, r), { decodedToken: s });
  }
}
var Ue = {
  isAuthenticated: !1,
  isLoading: !0
}, z = function() {
  throw new Error("You forgot to wrap your component in <Auth0Provider>.");
}, Pt = O(O({}, Ue), { buildAuthorizeUrl: z, buildLogoutUrl: z, getAccessTokenSilently: z, getAccessTokenWithPopup: z, getIdTokenClaims: z, loginWithRedirect: z, loginWithPopup: z, logout: z, handleRedirectCallback: z }), he = De(Pt), Ie = (
  /** @class */
  function(n) {
    ct(e, n);
    function e(t, i) {
      var o = n.call(this, i || t) || this;
      return o.error = t, o.error_description = i, Object.setPrototypeOf(o, e.prototype), o;
    }
    return e;
  }(Error)
), Rt = /[?&]code=[^&]+/, Ct = /[?&]state=[^&]+/, zt = /[?&]error=[^&]+/, Ut = function(n) {
  return n === void 0 && (n = window.location.search), (Rt.test(n) || zt.test(n)) && Ct.test(n);
}, Ne = function(n) {
  return function(e) {
    return e instanceof Error ? e : e !== null && typeof e == "object" && "error" in e && typeof e.error == "string" ? "error_description" in e && typeof e.error_description == "string" ? new Ie(e.error, e.error_description) : new Ie(e.error) : new Error(n);
  };
}, Se = Ne("Login failed"), ee = Ne("Get access token failed"), Le = function(n) {
  var e;
  n != null && n.redirectUri && (console.warn("Using `redirectUri` has been deprecated, please use `authorizationParams.redirect_uri` instead as `redirectUri` will be no longer supported in a future version"), n.authorizationParams = n.authorizationParams || {}, n.authorizationParams.redirect_uri = n.redirectUri, delete n.redirectUri), !((e = n == null ? void 0 : n.authorizationParams) === null || e === void 0) && e.redirectUri && (console.warn("Using `authorizationParams.redirectUri` has been deprecated, please use `authorizationParams.redirect_uri` instead as `authorizationParams.redirectUri` will be removed in a future version"), n.authorizationParams.redirect_uri = n.authorizationParams.redirectUri, delete n.authorizationParams.redirectUri);
}, Nt = function(n, e) {
  switch (e.type) {
    case "LOGIN_POPUP_STARTED":
      return O(O({}, n), { isLoading: !0 });
    case "LOGIN_POPUP_COMPLETE":
    case "INITIALISED":
      return O(O({}, n), { isAuthenticated: !!e.user, user: e.user, isLoading: !1, error: void 0 });
    case "HANDLE_REDIRECT_COMPLETE":
    case "GET_ACCESS_TOKEN_COMPLETE":
      return n.user === e.user ? n : O(O({}, n), { isAuthenticated: !!e.user, user: e.user });
    case "LOGOUT":
      return O(O({}, n), { isAuthenticated: !1, user: void 0 });
    case "ERROR":
      return O(O({}, n), { isLoading: !1, error: e.error });
  }
}, Lt = function(n) {
  return Le(n), O(O({}, n), { auth0Client: {
    name: "auth0-react",
    version: "2.2.4"
  } });
}, Wt = function(n) {
  window.history.replaceState({}, document.title, (n == null ? void 0 : n.returnTo) || window.location.pathname);
}, Zt = function(n) {
  var e = n.children, t = n.skipRedirectCallback, i = n.onRedirectCallback, o = i === void 0 ? Wt : i, r = n.context, s = r === void 0 ? he : r, d = ut(n, ["children", "skipRedirectCallback", "onRedirectCallback", "context"]), l = te(function() {
    return new Et(Lt(d));
  })[0], u = Ae(Nt, Ue), a = u[0], c = u[1], h = je(!1);
  re(function() {
    h.current || (h.current = !0, function() {
      return U(void 0, void 0, void 0, function() {
        var k, T, S;
        return N(this, function(I) {
          switch (I.label) {
            case 0:
              return I.trys.push([0, 7, , 8]), k = void 0, Ut() && !t ? [4, l.handleRedirectCallback()] : [3, 3];
            case 1:
              return T = I.sent().appState, [4, l.getUser()];
            case 2:
              return k = I.sent(), o(T, k), [3, 6];
            case 3:
              return [4, l.checkSession()];
            case 4:
              return I.sent(), [4, l.getUser()];
            case 5:
              k = I.sent(), I.label = 6;
            case 6:
              return c({ type: "INITIALISED", user: k }), [3, 8];
            case 7:
              return S = I.sent(), c({ type: "ERROR", error: Se(S) }), [3, 8];
            case 8:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }());
  }, [l, o, t]);
  var p = L(function(k) {
    return Le(k), l.loginWithRedirect(k);
  }, [l]), m = L(function(k, T) {
    return U(void 0, void 0, void 0, function() {
      var S, I;
      return N(this, function(j) {
        switch (j.label) {
          case 0:
            c({ type: "LOGIN_POPUP_STARTED" }), j.label = 1;
          case 1:
            return j.trys.push([1, 3, , 4]), [4, l.loginWithPopup(k, T)];
          case 2:
            return j.sent(), [3, 4];
          case 3:
            return S = j.sent(), c({ type: "ERROR", error: Se(S) }), [
              2
              /*return*/
            ];
          case 4:
            return [4, l.getUser()];
          case 5:
            return I = j.sent(), c({ type: "LOGIN_POPUP_COMPLETE", user: I }), [
              2
              /*return*/
            ];
        }
      });
    });
  }, [l]), v = L(function(k) {
    return k === void 0 && (k = {}), U(void 0, void 0, void 0, function() {
      return N(this, function(T) {
        switch (T.label) {
          case 0:
            return [4, l.logout(k)];
          case 1:
            return T.sent(), (k.openUrl || k.openUrl === !1) && c({ type: "LOGOUT" }), [
              2
              /*return*/
            ];
        }
      });
    });
  }, [l]), w = L(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function(k) {
      return U(void 0, void 0, void 0, function() {
        var T, S, I, j;
        return N(this, function(R) {
          switch (R.label) {
            case 0:
              return R.trys.push([0, 2, 3, 5]), [4, l.getTokenSilently(k)];
            case 1:
              return T = R.sent(), [3, 5];
            case 2:
              throw S = R.sent(), ee(S);
            case 3:
              return I = c, j = {
                type: "GET_ACCESS_TOKEN_COMPLETE"
              }, [4, l.getUser()];
            case 4:
              return I.apply(void 0, [(j.user = R.sent(), j)]), [
                7
                /*endfinally*/
              ];
            case 5:
              return [2, T];
          }
        });
      });
    },
    [l]
  ), b = L(function(k, T) {
    return U(void 0, void 0, void 0, function() {
      var S, I, j, R;
      return N(this, function(A) {
        switch (A.label) {
          case 0:
            return A.trys.push([0, 2, 3, 5]), [4, l.getTokenWithPopup(k, T)];
          case 1:
            return S = A.sent(), [3, 5];
          case 2:
            throw I = A.sent(), ee(I);
          case 3:
            return j = c, R = {
              type: "GET_ACCESS_TOKEN_COMPLETE"
            }, [4, l.getUser()];
          case 4:
            return j.apply(void 0, [(R.user = A.sent(), R)]), [
              7
              /*endfinally*/
            ];
          case 5:
            return [2, S];
        }
      });
    });
  }, [l]), _ = L(function() {
    return l.getIdTokenClaims();
  }, [l]), y = L(function(k) {
    return U(void 0, void 0, void 0, function() {
      var T, S, I;
      return N(this, function(j) {
        switch (j.label) {
          case 0:
            return j.trys.push([0, 2, 3, 5]), [4, l.handleRedirectCallback(k)];
          case 1:
            return [2, j.sent()];
          case 2:
            throw T = j.sent(), ee(T);
          case 3:
            return S = c, I = {
              type: "HANDLE_REDIRECT_COMPLETE"
            }, [4, l.getUser()];
          case 4:
            return S.apply(void 0, [(I.user = j.sent(), I)]), [
              7
              /*endfinally*/
            ];
          case 5:
            return [
              2
              /*return*/
            ];
        }
      });
    });
  }, [l]), f = Xe(function() {
    return O(O({}, a), { getAccessTokenSilently: w, getAccessTokenWithPopup: b, getIdTokenClaims: _, loginWithRedirect: p, loginWithPopup: m, logout: v, handleRedirectCallback: y });
  }, [
    a,
    w,
    b,
    _,
    p,
    m,
    v,
    y
  ]);
  return H.createElement(s.Provider, { value: f }, e);
}, Kt = function(n) {
  return n === void 0 && (n = he), Ge(n);
}, Dt = function() {
  return H.createElement(H.Fragment, null);
}, At = function() {
  return U(void 0, void 0, void 0, function() {
    return N(this, function(n) {
      return [
        2
        /*return*/
      ];
    });
  });
}, Xt = function() {
  return "".concat(window.location.pathname).concat(window.location.search);
}, Gt = function(n, e) {
  return e === void 0 && (e = {}), function(i) {
    var o = this, r = e.returnTo, s = r === void 0 ? Xt : r, d = e.onRedirecting, l = d === void 0 ? Dt : d, u = e.onBeforeAuthentication, a = u === void 0 ? At : u, c = e.loginOptions, h = e.context, p = h === void 0 ? he : h, m = Kt(p), v = m.isAuthenticated, w = m.isLoading, b = m.loginWithRedirect;
    return re(function() {
      if (!(w || v)) {
        var _ = O(O({}, c), { appState: O(O({}, c && c.appState), { returnTo: typeof s == "function" ? s() : s }) });
        (function() {
          return U(o, void 0, void 0, function() {
            return N(this, function(y) {
              switch (y.label) {
                case 0:
                  return [4, a()];
                case 1:
                  return y.sent(), [4, b(_)];
                case 2:
                  return y.sent(), [
                    2
                    /*return*/
                  ];
              }
            });
          });
        })();
      }
    }, [
      w,
      v,
      b,
      a,
      c,
      s
    ]), v ? H.createElement(n, O({}, i)) : l();
  };
};
const Ft = "openid profile email";
function an({
  children: n,
  scope: e = Ft,
  domain: t,
  clientId: i,
  audience: o,
  redirectUri: r,
  ...s
}) {
  const d = Fe.useNavigate();
  return t && i && o ? /* @__PURE__ */ g.jsx(
    Zt,
    {
      onRedirectCallback: (l) => d((l == null ? void 0 : l.returnTo) || window.location.pathname),
      authorizationParams: {
        redirect_uri: r || window.location.origin,
        audience: o,
        scope: e
      },
      domain: t,
      clientId: i,
      ...s,
      children: n
    }
  ) : /* @__PURE__ */ g.jsx("div", { children: "MISSING AUTH SETTINGS" });
}
function Mt({
  router: n,
  maxDepth: e
}) {
  return /* @__PURE__ */ g.jsx(
    "div",
    {
      className: "router-nav",
      children: /* @__PURE__ */ g.jsx(
        oe,
        {
          router: n || Jt(),
          maxDepth: e
        }
      )
    }
  );
}
function Ht({
  router: n,
  maxDepth: e,
  __depth: t = 0
}) {
  return t === e ? null : n.path ? /* @__PURE__ */ g.jsxs(
    "div",
    {
      className: "router-nav-link",
      children: [
        /* @__PURE__ */ g.jsx(
          "a",
          {
            href: n.getPath(),
            children: n.path.slice(1).split(/[-_]/g).map((i) => {
              var o;
              return ((o = i[0]) == null ? void 0 : o.toUpperCase()) + i.slice(1);
            }).join(" ")
          }
        ),
        /* @__PURE__ */ g.jsx(
          oe,
          {
            router: n,
            maxDepth: e,
            __depth: t + 1
          }
        )
      ]
    }
  ) : /* @__PURE__ */ g.jsx(
    oe,
    {
      router: n,
      maxDepth: e,
      __depth: t + 1
    }
  );
}
function oe({
  router: n,
  maxDepth: e,
  __depth: t = 0
}) {
  if (!n)
    return null;
  const i = n.getRoutes();
  return !i.length || t === e ? null : /* @__PURE__ */ g.jsx(
    "ul",
    {
      className: Te("router-nav-list", !!t && "f-content"),
      children: i.map(([o, r]) => /* @__PURE__ */ g.jsx(
        "li",
        {
          className: "router-nav-item",
          children: /* @__PURE__ */ g.jsx(
            Ht,
            {
              router: r,
              maxDepth: e,
              __depth: t
            }
          )
        },
        o
      ))
    }
  );
}
function Oe({
  router: n
}) {
  return console.debug(n), n.markdown ? (console.debug("RENDER MARKDOWN", n.markdown), /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
    n.element && n.element(),
    /* @__PURE__ */ g.jsx(
      xe,
      {
        href: n.markdown.href,
        features: n.markdown.features
      }
    )
  ] })) : n.content ? (console.debug("RENDER CONTENT", n.content), /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
    n.element && n.element(),
    /* @__PURE__ */ g.jsx(
      at,
      {
        href: n.content.href
      }
    )
  ] })) : n.doRenderNav() ? (console.debug("RENDER NAVIGATION", ...n.getRoutes()), /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
    /* @__PURE__ */ g.jsx(
      Mt,
      {
        router: n,
        maxDepth: 1
      }
    ),
    n.element && n.element()
  ] })) : (console.debug("RENDER DEFAULT"), n.element && n.element());
}
let pe;
function Jt() {
  return pe;
}
const me = ([n, e], t) => {
  const i = e.getRoutes();
  return console.debug(e.getPath()), i.length === 0 ? /* @__PURE__ */ g.jsx(
    t,
    {
      path: e.getPath(),
      element: /* @__PURE__ */ g.jsx(Oe, { router: e })
    },
    n
  ) : /* @__PURE__ */ g.jsxs(
    t,
    {
      path: e.getPath(),
      element: /* @__PURE__ */ g.jsx(Oe, { router: e }),
      children: [
        i.map((o) => me(o, t)),
        e.default && /* @__PURE__ */ g.jsx(
          t,
          {
            path: e.getPath("/*"),
            element: /* @__PURE__ */ g.jsx(Me, { to: e.getPath() + e.default })
          }
        )
      ]
    },
    n
  );
};
function sn({
  router: n
}) {
  return pe = n, n.root().map((e) => me(e, He));
}
function cn(n, e) {
  return pe = n, n.root().map((t) => me(t, e));
}
function un({ element: n }) {
  const e = Gt(n, {
    onRedirecting: () => /* @__PURE__ */ g.jsx(et, {})
  });
  return /* @__PURE__ */ g.jsx(e, {});
}
class We {
  constructor(e, t) {
    C(this, "default");
    C(this, "parent");
    C(this, "path");
    C(this, "noNav");
    C(this, "markdown");
    C(this, "content");
    C(this, "routes", /* @__PURE__ */ new Map());
    C(this, "element");
    this.content = e.content, this.default = e.default, this.markdown = e.markdown, this.path = e.path, this.noNav = !!e.noNav, e.routes && e.routes.forEach((i) => this.addRoute(i)), this.parent = t, console.debug("new router", t && "with parent" || "");
  }
  setElement(e) {
    return this.element = e, this;
  }
  setPathElement(e, t) {
    this.getPath() === e ? this.setElement(t) : this.routes.forEach((o) => {
      o.setPathElement(e, t);
    });
  }
  getRoutes() {
    return Array.from(this.routes);
  }
  getPath(...e) {
    if (!this.parent)
      return e.length ? this.path + e.join("/") : this.path;
    const t = this.parent.getPath(this.path);
    return e.length ? t + e.join("/") : t;
  }
  doRenderNav() {
    return !this.noNav && this.routes.size > 0;
  }
  addRoute(e) {
    this.routes.set(e.path, new We(e, this));
  }
  root() {
    if (this.parent)
      throw new Error("Cannot use root routing for routers with parents.");
    return [[this.path, this]];
  }
}
export {
  an as AuthWrapper,
  We as CRouter,
  Oe as CRouterElement,
  sn as MarkdownRouter,
  un as ProtectedRoute,
  Mt as RouterNav,
  cn as markdownRouter,
  Jt as useRouter
};
