var w = Object.defineProperty;
var R = (s, e, t) => e in s ? w(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t;
var r = (s, e, t) => R(s, typeof e != "symbol" ? e + "" : e, t);
import { j as n } from "./jsx-runtime-Q3clG3tb.js";
import { g as u, m as j } from "./components-CHkrLo1-.js";
import { useState as v, useEffect as x, useRef as M } from "react";
import { B as f } from "./social-link--B5r20zD.js";
import { I as C } from "./Icon-lxzzq7dr.js";
import { G as O } from "./Glyph-BlyPiSHo.js";
import { v as D } from "./v4-Cgt9uYzN.js";
class N {
  constructor(e) {
    r(this, "id");
    r(this, "_refresh");
    r(this, "content", /* @__PURE__ */ new Map());
    r(this, "openIds", /* @__PURE__ */ new Set());
    this.id = e;
  }
  /**
   * Defines the private refresh function.
   * @param fn Function that refreshes the "parent" JSX Element. Undefined clears it.
   * @returns 
   * 
   * ```
   *  function ExampleElement() {
   *      const [ready, isReady] = useState(false);
   * 
   *      useEffect(() => {
   *          contentManager.setRefreshFn(() => isReady(false));
   * 
   *          return () => {
   *              contentManager.setRefreshFn();
   *          }
   *      }, []);
   * 
   *      useEffect(() => {
   *          if (!ready)
   *              isReady(true);
   *      }, [ready]);
   * 
   *      // Display the managed content after this, using `ready`
   *      // as the render condition (if `false`, return `null` or other).
   *  }
   * ```
   */
  setRefreshFn(e) {
    return this._refresh = e, this;
  }
  /**
   * Intended to be called by local methods only.
   * @param content 
   */
  refresh(e) {
    if (!this._refresh)
      throw new Error("Cannot refresh (undefined function); define with setRefreshFn() first.");
    this._refresh(e);
  }
  store(e, t) {
    return this.content.set(e, t), this;
  }
  _open() {
    this.refresh(Array.from(this.openIds).map((e) => [e, this.content.get(e)]));
  }
  open(...e) {
    return e.length === 0 ? this.openIds = new Set(this.content.keys()) : this.openIds = new Set(e), this._open();
  }
  close(...e) {
    return e.length === 0 ? this.openIds.clear() : e.forEach((t) => this.openIds.delete(t)), this._open();
  }
}
function k({
  manager: s,
  className: e,
  ...t
}) {
  const [h, i] = v(!1), [o, c] = v([]);
  return x(() => (s.setRefreshFn((a) => {
    c(a), i(!1);
  }), () => {
    s.setRefreshFn();
  }), []), x(() => {
    h || i(!0);
  }, [h]), h && o.length > 0 && /* @__PURE__ */ n.jsx(
    "div",
    {
      className: u("content-manager", s.id, e),
      ...t,
      children: o.map(([a, l]) => /* @__PURE__ */ n.jsx(
        "div",
        {
          id: `content_wrapper:${a}`,
          className: "content-wrapper",
          children: l
        },
        a
      ))
    }
  );
}
function z() {
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx(E, {}),
    /* @__PURE__ */ n.jsx(A, {})
  ] });
}
function J() {
  return /* @__PURE__ */ n.jsx("div", { children: "CARD" });
}
function _({
  children: s,
  className: e,
  ...t
}) {
  return /* @__PURE__ */ n.jsx(
    "div",
    {
      className: u("dialog-body f-main", e),
      ...t,
      children: s
    }
  );
}
function B({
  children: s,
  className: e,
  ...t
}) {
  return /* @__PURE__ */ n.jsx(
    "div",
    {
      className: u("dialog-footer f-secondary", e),
      ...t,
      children: s
    }
  );
}
function S({
  children: s,
  className: e,
  ...t
}) {
  return /* @__PURE__ */ n.jsx(
    "div",
    {
      className: u("dialog-header f-primary", e),
      ...t,
      children: s
    }
  );
}
const d = new N("dialogs");
function E() {
  return /* @__PURE__ */ n.jsx(k, { manager: d });
}
function K({
  cancelText: s = "cancel",
  children: e,
  className: t,
  closeIcon: h = "x-lg",
  heading: i,
  id: o,
  mobile: c,
  okText: a = "ok",
  onCancel: l,
  onClose: p,
  onOk: g,
  stayOpenOnCancel: y = !1,
  stayOpenOnOk: G = !1,
  ...b
}) {
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      id: o,
      className: u("dialog f-body", t),
      ...b,
      ...c !== "header" && c && j(o) || {},
      children: [
        /* @__PURE__ */ n.jsxs(
          S,
          {
            className: u(!i && "no-heading"),
            ...c === "header" && j(o) || {},
            children: [
              i && /* @__PURE__ */ n.jsx("span", { children: i }),
              /* @__PURE__ */ n.jsx("span", { children: /* @__PURE__ */ n.jsx(
                O,
                {
                  icon: h,
                  className: "f-exit b-compliment",
                  onClick: () => {
                    d.close(o), p && p();
                  }
                }
              ) })
            ]
          }
        ),
        /* @__PURE__ */ n.jsx(_, { children: e }),
        /* @__PURE__ */ n.jsxs(B, { children: [
          /* @__PURE__ */ n.jsx(
            f,
            {
              onClick: () => {
                l && l(), y || d.close(o);
              },
              className: "f-trinary hvr dis",
              children: s
            }
          ),
          /* @__PURE__ */ n.jsx(
            f,
            {
              onClick: () => {
                g && g(), G || d.close(o);
              },
              className: "f-primary hvr dis",
              children: a
            }
          )
        ] })
      ]
    }
  );
}
function Q({
  className: s,
  ...e
}) {
  return /* @__PURE__ */ n.jsx(
    "div",
    {
      className: u("dialog-divider f-divider", s),
      ...e
    }
  );
}
function F({
  menuContent: s,
  className: e,
  ...t
}) {
  const h = s.getText(), i = s.getIcon(), o = s.getHoverIcon(), c = s.getProps();
  return /* @__PURE__ */ n.jsx(
    "div",
    {
      className: u("menu-item", e),
      ...t,
      children: /* @__PURE__ */ n.jsxs(
        f,
        {
          ...c,
          className: u("menu-item-btn hvr dis", c.className),
          children: [
            i && /* @__PURE__ */ n.jsx(
              C,
              {
                className: u("menu-icon", o && "std-icon"),
                icon: i
              }
            ),
            o && /* @__PURE__ */ n.jsx(
              C,
              {
                className: u("menu-icon", o && "hvr-icon"),
                icon: o
              }
            ),
            h && /* @__PURE__ */ n.jsx(
              "span",
              {
                className: "menu-text",
                children: h
              }
            )
          ]
        }
      )
    },
    c.id
  );
}
function T({
  className: s,
  heading: e,
  menuContent: t,
  place: h,
  position: i,
  ...o
}) {
  const c = M(null);
  return x(() => {
    if (!c.current)
      return;
    const a = {
      x: i.left,
      y: i.top
    };
    if (h) {
      const l = c.current.getBoundingClientRect();
      switch (h) {
        case "bottom": {
          a.y = i.bottom;
          break;
        }
        case "top": {
          a.y = i.top - l.height;
          break;
        }
        case "left": {
          a.x = i.left - l.width;
          break;
        }
        case "right": {
          a.x = i.right;
          break;
        }
      }
    }
    c.current.style.left = `${a.x}px`, c.current.style.top = `${a.y}px`;
  }, [i, c.current]), /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: u("menu", s),
      ...o,
      ref: c,
      children: [
        e && /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "menu-header",
            children: e
          }
        ),
        t.map((a, l) => /* @__PURE__ */ n.jsx(
          F,
          {
            menuContent: a
          },
          l
        ))
      ]
    }
  );
}
const m = new N("menus");
function A() {
  return /* @__PURE__ */ n.jsx(k, { manager: m });
}
class I {
  /**
   * 
   * @param spacer Render as a divider line or whitespace instead of an option button.
   */
  constructor(e, t = !1) {
    r(this, "id");
    r(this, "menuId");
    r(this, "text");
    r(this, "textGetter");
    r(this, "icon");
    r(this, "iconGetter");
    r(this, "hoverIcon");
    r(this, "hoverIconGetter");
    r(this, "disabled");
    r(this, "disabledGetter");
    r(this, "closeOnClick", !0);
    r(this, "closeOnContextMenu", !0);
    r(this, "props", {});
    r(this, "onClick");
    r(this, "onContextMenu");
    r(this, "spacer");
    this.id = D(), this.menuId = e, this.spacer = t;
  }
  getText() {
    return this.spacer ? null : this.textGetter && this.textGetter() || this.text;
  }
  setText(e, t) {
    return this.spacer ? this : (t && (this.textGetter = t), this.text = e, this);
  }
  getIcon() {
    return this.spacer ? "" : this.iconGetter && this.iconGetter() || this.icon;
  }
  setIcon(e, t) {
    return this.spacer ? this : (t && (this.iconGetter = t), this.icon = e, this);
  }
  getHoverIcon() {
    return this.spacer ? "" : this.hoverIconGetter && this.hoverIconGetter() || this.hoverIcon;
  }
  setHoverIcon(e, t) {
    return this.spacer ? this : (t && (this.hoverIconGetter = t), this.hoverIcon = e, this);
  }
  setOnClick(e, t = !0) {
    this.onClick = e, this.closeOnClick = t;
  }
  setOnContextMenu(e, t = !0) {
    this.onContextMenu = e, this.closeOnContextMenu = t;
  }
  addProps(e) {
    return this.props = { ...this.props, ...e }, this;
  }
  getProps() {
    return this.spacer ? {
      id: this.id
    } : {
      id: this.id,
      onClick: (e) => {
        this.onClick && (this.onClick(e), this.closeOnClick && m.close(this.menuId));
      },
      onContextMenu: (e) => {
        this.onContextMenu && (this.onContextMenu(e), this.closeOnContextMenu && m.close(this.menuId));
      },
      disabled: this.disabledGetter && this.disabledGetter() || this.disabled,
      ...this.props
    };
  }
}
class U {
  constructor(e) {
    r(this, "id");
    r(this, "content", []);
    this.id = e;
  }
  addItem() {
    const e = new I(this.id);
    return this.content.push(e), e;
  }
  addSpacer() {
    const e = new I(this.id, !0);
    return this.content.push(e), e;
  }
  getContent() {
    return this.content;
  }
}
function W({
  id: s,
  builder: e,
  place: t,
  ...h
}) {
  const i = M(null);
  return /* @__PURE__ */ n.jsx(
    f,
    {
      onClick: (o) => {
        if (!i.current)
          return;
        const c = /* @__PURE__ */ n.jsx(
          T,
          {
            id: s,
            menuContent: e.getContent(),
            place: t,
            position: t && i.current.getBoundingClientRect() || new DOMRect(o.clientX, o.clientY)
          }
        );
        m.store(s, c).open();
      },
      ...h,
      innerRef: i
    }
  );
}
function Z() {
  return /* @__PURE__ */ n.jsx("div", { children: "OVERLAY" });
}
function ee() {
  return /* @__PURE__ */ n.jsx("div", { children: "TOAST" });
}
export {
  J as Card,
  N as ContentManager,
  k as ContentManagerElement,
  K as Dialog,
  _ as DialogBody,
  Q as DialogDivider,
  B as DialogFooter,
  S as DialogHeader,
  E as DialogManager,
  z as Managers,
  T as Menu,
  U as MenuBuilder,
  I as MenuContent,
  A as MenuManager,
  W as MenuSummonButton,
  Z as Overlay,
  ee as Toast,
  d as dialogs,
  m as menus
};
