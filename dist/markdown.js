var Ii = Object.defineProperty;
var Ti = (e, n, t) => n in e ? Ii(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t;
var je = (e, n, t) => Ti(e, typeof n != "symbol" ? n + "" : n, t);
import { j as A } from "./jsx-runtime-Q3clG3tb.js";
import { B as pn } from "./social-link--B5r20zD.js";
import { g as be } from "./components-CHkrLo1-.js";
import { openInNewTab as Ai, downloadContent as Pi } from "./helpers.js";
import { G as st } from "./Glyph-BlyPiSHo.js";
import "./Icon-lxzzq7dr.js";
import { C as vi } from "./text-editor-CZgmjBzc.js";
import { useState as Ue, useEffect as sr, useRef as Li } from "react";
import { i as zi } from "./html-DNiQdleh.js";
/* empty css                            */
import { v as Di } from "./v4-Cgt9uYzN.js";
var ct = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Fi(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
const Oi = /\|\|(.*)\|\|/, Ri = /[^^]\^([^^]*)\^/, _i = /~([^^]*)\^/, Mi = /%\((.+)\)(.*)%/, Ni = /\[TOC\]/, ji = {
  element: (e) => /* @__PURE__ */ A.jsx(
    "span",
    {
      className: "highlight f-primary",
      children: e[1]
    }
  ),
  pattern: Oi
}, Bi = {
  element: (e) => /* @__PURE__ */ A.jsx("sup", { children: e[1] }),
  pattern: Ri
}, Hi = {
  element: (e) => /* @__PURE__ */ A.jsx("sub", { children: e[1] }),
  pattern: _i
};
function Ui(e, n) {
  const t = e.split(/;/g), r = {};
  return t.forEach((i) => {
    const [o, l] = i.split("=");
    if (!(o === void 0 || l === void 0))
      switch (o) {
        case "class": {
          r.className = l;
          break;
        }
        case "style": {
          r.style = JSON.parse(l);
          break;
        }
      }
  }), /* @__PURE__ */ A.jsx(
    "span",
    {
      ...r,
      children: n
    }
  );
}
const $i = {
  element: (e) => e[1] ? Ui(e[1], e[2]) : e[2],
  pattern: Mi
}, qi = {
  element: () => /* @__PURE__ */ A.jsx(Df, {}),
  pattern: Ni
}, Vi = [
  ji,
  Bi,
  Hi,
  $i,
  qi
];
function Wi(e, n, t) {
  const r = e.match(n);
  if (!r)
    return [e];
  r[1] || (r[1] = "");
  const i = e.indexOf(r[0]), o = r[0].length;
  return [
    e.slice(0, i),
    t(r),
    e.slice(i + o)
  ];
}
function ft(e) {
  return Vi.forEach(({ element: n, pattern: t }) => {
    e.forEach((r, i) => {
      typeof r == "string" && e.splice(i, 1, ...Wi(r, t, n));
    });
  }), e.filter((n) => n !== "");
}
function Yi({ children: e, node: n }) {
  if (Array.isArray(e)) {
    console.debug(n == null ? void 0 : n.tagName, e);
    const r = /* @__PURE__ */ new Map(), i = e.map((a, u) => typeof a == "object" ? (r.set(u, a), `OBJECT:${u}`) : a).join(""), l = ft([i]).map((a) => {
      if (!a || typeof a == "number" || typeof a == "boolean" || typeof a == "object" && zi(a))
        return /* @__PURE__ */ A.jsx("p", { children: a });
      if (typeof a == "string") {
        const u = [a], s = () => {
          let f = !1;
          u.forEach((c, p) => {
            typeof c == "string" && r.forEach((h, g) => {
              const x = `OBJECT:${g}`, S = c.indexOf(x), k = x.length;
              if (S === -1)
                return;
              f = !0;
              const C = [
                c.slice(0, S),
                h,
                c.slice(S + k)
              ];
              u.splice(p, 1, ...C);
            });
          }), f && s();
        };
        return s(), u.map((f, c) => typeof f != "object" ? /* @__PURE__ */ A.jsx("span", { children: f }, c) : f);
      }
      return a;
    });
    return /* @__PURE__ */ A.jsx("p", { children: l });
  }
  if (typeof e != "string")
    return /* @__PURE__ */ A.jsx(A.Fragment, { children: e });
  const t = ft([e]);
  if (t.length === 1) {
    const [r] = t;
    return typeof r != "object" ? /* @__PURE__ */ A.jsx("p", { children: r }) : /* @__PURE__ */ A.jsx(A.Fragment, { children: r });
  }
  return /* @__PURE__ */ A.jsx("p", { children: t });
}
const Qi = {
  p: (e) => Yi(e),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  code: ({ children: e, node: n, className: t, ...r }) => {
    var l, a;
    const i = e == null ? void 0 : e.toString().split(/\n/g);
    if (!i)
      return /* @__PURE__ */ A.jsx("code", { className: be("f-body", t) });
    const o = (l = i[0]) == null ? void 0 : l.match(/^\/\/ md-flags: (.+)/);
    if (o) {
      const u = i.slice(1).join(`
`).trim(), s = (a = o[1]) == null ? void 0 : a.split(/;/g).map((f) => f.trim());
      if (!s)
        return null;
      if (s.includes("editor")) {
        const f = {
          id: `editor:${Di()}`
        };
        return s.forEach((c) => {
          if (c.match(/file=\w+/)) {
            const p = c.split("=")[1];
            f.heading = p, f.id = `editor:${p}`;
          }
        }), /* @__PURE__ */ A.jsx(vi, { defaultValue: u, className: "f-primary", ...f });
      }
      return /* @__PURE__ */ A.jsx("code", { className: be("f-body", t), ...r, children: u });
    }
    return /* @__PURE__ */ A.jsx("code", { className: be("f-body", t), ...r, children: e });
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  blockquote: ({ children: e, node: n, ...t }) => /* @__PURE__ */ A.jsx("blockquote", { className: "f-body", ...t, children: e }),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  h1: ({ children: e, node: n, ...t }) => /* @__PURE__ */ A.jsx("h1", { ...t, id: (e || "").toString().toLowerCase().replace(/\s/g, "-"), className: "heading", children: e }),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  h2: ({ children: e, node: n, ...t }) => /* @__PURE__ */ A.jsx("h2", { ...t, id: (e || "").toString().toLowerCase().replace(/\s/g, "-"), className: "heading", children: e }),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  h3: ({ children: e, node: n, ...t }) => /* @__PURE__ */ A.jsx("h3", { ...t, id: (e || "").toString().toLowerCase().replace(/\s/g, "-"), className: "heading", children: e }),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  h4: ({ children: e, node: n, ...t }) => /* @__PURE__ */ A.jsx("h4", { ...t, id: (e || "").toString().toLowerCase().replace(/\s/g, "-"), className: "heading", children: e }),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  h5: ({ children: e, node: n, ...t }) => /* @__PURE__ */ A.jsx("h5", { ...t, id: (e || "").toString().toLowerCase().replace(/\s/g, "-"), className: "heading", children: e }),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  h6: ({ children: e, node: n, ...t }) => /* @__PURE__ */ A.jsx("h6", { ...t, id: (e || "").toString().toLowerCase().replace(/\s/g, "-"), className: "heading", children: e })
};
function Xi(e, n) {
  const t = {};
  return (e[e.length - 1] === "" ? [...e, ""] : e).join(
    (t.padRight ? " " : "") + "," + (t.padLeft === !1 ? "" : " ")
  ).trim();
}
const Gi = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, Ji = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, Ki = {};
function ht(e, n) {
  return (Ki.jsx ? Ji : Gi).test(e);
}
const Zi = /[ \t\n\f\r]/g;
function el(e) {
  return typeof e == "object" ? e.type === "text" ? pt(e.value) : !1 : pt(e);
}
function pt(e) {
  return e.replace(Zi, "") === "";
}
class We {
  /**
   * @constructor
   * @param {Properties} property
   * @param {Normal} normal
   * @param {string} [space]
   */
  constructor(n, t, r) {
    this.property = n, this.normal = t, r && (this.space = r);
  }
}
We.prototype.property = {};
We.prototype.normal = {};
We.prototype.space = null;
function cr(e, n) {
  const t = {}, r = {};
  let i = -1;
  for (; ++i < e.length; )
    Object.assign(t, e[i].property), Object.assign(r, e[i].normal);
  return new We(t, r, n);
}
function vn(e) {
  return e.toLowerCase();
}
class le {
  /**
   * @constructor
   * @param {string} property
   * @param {string} attribute
   */
  constructor(n, t) {
    this.property = n, this.attribute = t;
  }
}
le.prototype.space = null;
le.prototype.boolean = !1;
le.prototype.booleanish = !1;
le.prototype.overloadedBoolean = !1;
le.prototype.number = !1;
le.prototype.commaSeparated = !1;
le.prototype.spaceSeparated = !1;
le.prototype.commaOrSpaceSeparated = !1;
le.prototype.mustUseProperty = !1;
le.prototype.defined = !1;
let nl = 0;
const O = Ae(), Y = Ae(), fr = Ae(), E = Ae(), q = Ae(), Fe = Ae(), te = Ae();
function Ae() {
  return 2 ** ++nl;
}
const Ln = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  boolean: O,
  booleanish: Y,
  commaOrSpaceSeparated: te,
  commaSeparated: Fe,
  number: E,
  overloadedBoolean: fr,
  spaceSeparated: q
}, Symbol.toStringTag, { value: "Module" })), mn = Object.keys(Ln);
class Bn extends le {
  /**
   * @constructor
   * @param {string} property
   * @param {string} attribute
   * @param {number|null} [mask]
   * @param {string} [space]
   */
  constructor(n, t, r, i) {
    let o = -1;
    if (super(n, t), mt(this, "space", i), typeof r == "number")
      for (; ++o < mn.length; ) {
        const l = mn[o];
        mt(this, mn[o], (r & Ln[l]) === Ln[l]);
      }
  }
}
Bn.prototype.defined = !0;
function mt(e, n, t) {
  t && (e[n] = t);
}
const tl = {}.hasOwnProperty;
function Oe(e) {
  const n = {}, t = {};
  let r;
  for (r in e.properties)
    if (tl.call(e.properties, r)) {
      const i = e.properties[r], o = new Bn(
        r,
        e.transform(e.attributes || {}, r),
        i,
        e.space
      );
      e.mustUseProperty && e.mustUseProperty.includes(r) && (o.mustUseProperty = !0), n[r] = o, t[vn(r)] = r, t[vn(o.attribute)] = r;
    }
  return new We(n, t, e.space);
}
const hr = Oe({
  space: "xlink",
  transform(e, n) {
    return "xlink:" + n.slice(5).toLowerCase();
  },
  properties: {
    xLinkActuate: null,
    xLinkArcRole: null,
    xLinkHref: null,
    xLinkRole: null,
    xLinkShow: null,
    xLinkTitle: null,
    xLinkType: null
  }
}), pr = Oe({
  space: "xml",
  transform(e, n) {
    return "xml:" + n.slice(3).toLowerCase();
  },
  properties: { xmlLang: null, xmlBase: null, xmlSpace: null }
});
function mr(e, n) {
  return n in e ? e[n] : n;
}
function gr(e, n) {
  return mr(e, n.toLowerCase());
}
const dr = Oe({
  space: "xmlns",
  attributes: { xmlnsxlink: "xmlns:xlink" },
  transform: gr,
  properties: { xmlns: null, xmlnsXLink: null }
}), yr = Oe({
  transform(e, n) {
    return n === "role" ? n : "aria-" + n.slice(4).toLowerCase();
  },
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: Y,
    ariaAutoComplete: null,
    ariaBusy: Y,
    ariaChecked: Y,
    ariaColCount: E,
    ariaColIndex: E,
    ariaColSpan: E,
    ariaControls: q,
    ariaCurrent: null,
    ariaDescribedBy: q,
    ariaDetails: null,
    ariaDisabled: Y,
    ariaDropEffect: q,
    ariaErrorMessage: null,
    ariaExpanded: Y,
    ariaFlowTo: q,
    ariaGrabbed: Y,
    ariaHasPopup: null,
    ariaHidden: Y,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: q,
    ariaLevel: E,
    ariaLive: null,
    ariaModal: Y,
    ariaMultiLine: Y,
    ariaMultiSelectable: Y,
    ariaOrientation: null,
    ariaOwns: q,
    ariaPlaceholder: null,
    ariaPosInSet: E,
    ariaPressed: Y,
    ariaReadOnly: Y,
    ariaRelevant: null,
    ariaRequired: Y,
    ariaRoleDescription: q,
    ariaRowCount: E,
    ariaRowIndex: E,
    ariaRowSpan: E,
    ariaSelected: Y,
    ariaSetSize: E,
    ariaSort: null,
    ariaValueMax: E,
    ariaValueMin: E,
    ariaValueNow: E,
    ariaValueText: null,
    role: null
  }
}), rl = Oe({
  space: "html",
  attributes: {
    acceptcharset: "accept-charset",
    classname: "class",
    htmlfor: "for",
    httpequiv: "http-equiv"
  },
  transform: gr,
  mustUseProperty: ["checked", "multiple", "muted", "selected"],
  properties: {
    // Standard Properties.
    abbr: null,
    accept: Fe,
    acceptCharset: q,
    accessKey: q,
    action: null,
    allow: null,
    allowFullScreen: O,
    allowPaymentRequest: O,
    allowUserMedia: O,
    alt: null,
    as: null,
    async: O,
    autoCapitalize: null,
    autoComplete: q,
    autoFocus: O,
    autoPlay: O,
    blocking: q,
    capture: null,
    charSet: null,
    checked: O,
    cite: null,
    className: q,
    cols: E,
    colSpan: null,
    content: null,
    contentEditable: Y,
    controls: O,
    controlsList: q,
    coords: E | Fe,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: O,
    defer: O,
    dir: null,
    dirName: null,
    disabled: O,
    download: fr,
    draggable: Y,
    encType: null,
    enterKeyHint: null,
    fetchPriority: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: O,
    formTarget: null,
    headers: q,
    height: E,
    hidden: O,
    high: E,
    href: null,
    hrefLang: null,
    htmlFor: q,
    httpEquiv: q,
    id: null,
    imageSizes: null,
    imageSrcSet: null,
    inert: O,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: O,
    itemId: null,
    itemProp: q,
    itemRef: q,
    itemScope: O,
    itemType: q,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: O,
    low: E,
    manifest: null,
    max: null,
    maxLength: E,
    media: null,
    method: null,
    min: null,
    minLength: E,
    multiple: O,
    muted: O,
    name: null,
    nonce: null,
    noModule: O,
    noValidate: O,
    onAbort: null,
    onAfterPrint: null,
    onAuxClick: null,
    onBeforeMatch: null,
    onBeforePrint: null,
    onBeforeToggle: null,
    onBeforeUnload: null,
    onBlur: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onContextLost: null,
    onContextMenu: null,
    onContextRestored: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFormData: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLanguageChange: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadEnd: null,
    onLoadStart: null,
    onMessage: null,
    onMessageError: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRejectionHandled: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onScrollEnd: null,
    onSecurityPolicyViolation: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onSlotChange: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnhandledRejection: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onWheel: null,
    open: O,
    optimum: E,
    pattern: null,
    ping: q,
    placeholder: null,
    playsInline: O,
    popover: null,
    popoverTarget: null,
    popoverTargetAction: null,
    poster: null,
    preload: null,
    readOnly: O,
    referrerPolicy: null,
    rel: q,
    required: O,
    reversed: O,
    rows: E,
    rowSpan: E,
    sandbox: q,
    scope: null,
    scoped: O,
    seamless: O,
    selected: O,
    shadowRootClonable: O,
    shadowRootDelegatesFocus: O,
    shadowRootMode: null,
    shape: null,
    size: E,
    sizes: null,
    slot: null,
    span: E,
    spellCheck: Y,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: null,
    start: E,
    step: null,
    style: null,
    tabIndex: E,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: O,
    useMap: null,
    value: Y,
    width: E,
    wrap: null,
    writingSuggestions: null,
    // Legacy.
    // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
    align: null,
    // Several. Use CSS `text-align` instead,
    aLink: null,
    // `<body>`. Use CSS `a:active {color}` instead
    archive: q,
    // `<object>`. List of URIs to archives
    axis: null,
    // `<td>` and `<th>`. Use `scope` on `<th>`
    background: null,
    // `<body>`. Use CSS `background-image` instead
    bgColor: null,
    // `<body>` and table elements. Use CSS `background-color` instead
    border: E,
    // `<table>`. Use CSS `border-width` instead,
    borderColor: null,
    // `<table>`. Use CSS `border-color` instead,
    bottomMargin: E,
    // `<body>`
    cellPadding: null,
    // `<table>`
    cellSpacing: null,
    // `<table>`
    char: null,
    // Several table elements. When `align=char`, sets the character to align on
    charOff: null,
    // Several table elements. When `char`, offsets the alignment
    classId: null,
    // `<object>`
    clear: null,
    // `<br>`. Use CSS `clear` instead
    code: null,
    // `<object>`
    codeBase: null,
    // `<object>`
    codeType: null,
    // `<object>`
    color: null,
    // `<font>` and `<hr>`. Use CSS instead
    compact: O,
    // Lists. Use CSS to reduce space between items instead
    declare: O,
    // `<object>`
    event: null,
    // `<script>`
    face: null,
    // `<font>`. Use CSS instead
    frame: null,
    // `<table>`
    frameBorder: null,
    // `<iframe>`. Use CSS `border` instead
    hSpace: E,
    // `<img>` and `<object>`
    leftMargin: E,
    // `<body>`
    link: null,
    // `<body>`. Use CSS `a:link {color: *}` instead
    longDesc: null,
    // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
    lowSrc: null,
    // `<img>`. Use a `<picture>`
    marginHeight: E,
    // `<body>`
    marginWidth: E,
    // `<body>`
    noResize: O,
    // `<frame>`
    noHref: O,
    // `<area>`. Use no href instead of an explicit `nohref`
    noShade: O,
    // `<hr>`. Use background-color and height instead of borders
    noWrap: O,
    // `<td>` and `<th>`
    object: null,
    // `<applet>`
    profile: null,
    // `<head>`
    prompt: null,
    // `<isindex>`
    rev: null,
    // `<link>`
    rightMargin: E,
    // `<body>`
    rules: null,
    // `<table>`
    scheme: null,
    // `<meta>`
    scrolling: Y,
    // `<frame>`. Use overflow in the child context
    standby: null,
    // `<object>`
    summary: null,
    // `<table>`
    text: null,
    // `<body>`. Use CSS `color` instead
    topMargin: E,
    // `<body>`
    valueType: null,
    // `<param>`
    version: null,
    // `<html>`. Use a doctype.
    vAlign: null,
    // Several. Use CSS `vertical-align` instead
    vLink: null,
    // `<body>`. Use CSS `a:visited {color}` instead
    vSpace: E,
    // `<img>` and `<object>`
    // Non-standard Properties.
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    disablePictureInPicture: O,
    disableRemotePlayback: O,
    prefix: null,
    property: null,
    results: E,
    security: null,
    unselectable: null
  }
}), il = Oe({
  space: "svg",
  attributes: {
    accentHeight: "accent-height",
    alignmentBaseline: "alignment-baseline",
    arabicForm: "arabic-form",
    baselineShift: "baseline-shift",
    capHeight: "cap-height",
    className: "class",
    clipPath: "clip-path",
    clipRule: "clip-rule",
    colorInterpolation: "color-interpolation",
    colorInterpolationFilters: "color-interpolation-filters",
    colorProfile: "color-profile",
    colorRendering: "color-rendering",
    crossOrigin: "crossorigin",
    dataType: "datatype",
    dominantBaseline: "dominant-baseline",
    enableBackground: "enable-background",
    fillOpacity: "fill-opacity",
    fillRule: "fill-rule",
    floodColor: "flood-color",
    floodOpacity: "flood-opacity",
    fontFamily: "font-family",
    fontSize: "font-size",
    fontSizeAdjust: "font-size-adjust",
    fontStretch: "font-stretch",
    fontStyle: "font-style",
    fontVariant: "font-variant",
    fontWeight: "font-weight",
    glyphName: "glyph-name",
    glyphOrientationHorizontal: "glyph-orientation-horizontal",
    glyphOrientationVertical: "glyph-orientation-vertical",
    hrefLang: "hreflang",
    horizAdvX: "horiz-adv-x",
    horizOriginX: "horiz-origin-x",
    horizOriginY: "horiz-origin-y",
    imageRendering: "image-rendering",
    letterSpacing: "letter-spacing",
    lightingColor: "lighting-color",
    markerEnd: "marker-end",
    markerMid: "marker-mid",
    markerStart: "marker-start",
    navDown: "nav-down",
    navDownLeft: "nav-down-left",
    navDownRight: "nav-down-right",
    navLeft: "nav-left",
    navNext: "nav-next",
    navPrev: "nav-prev",
    navRight: "nav-right",
    navUp: "nav-up",
    navUpLeft: "nav-up-left",
    navUpRight: "nav-up-right",
    onAbort: "onabort",
    onActivate: "onactivate",
    onAfterPrint: "onafterprint",
    onBeforePrint: "onbeforeprint",
    onBegin: "onbegin",
    onCancel: "oncancel",
    onCanPlay: "oncanplay",
    onCanPlayThrough: "oncanplaythrough",
    onChange: "onchange",
    onClick: "onclick",
    onClose: "onclose",
    onCopy: "oncopy",
    onCueChange: "oncuechange",
    onCut: "oncut",
    onDblClick: "ondblclick",
    onDrag: "ondrag",
    onDragEnd: "ondragend",
    onDragEnter: "ondragenter",
    onDragExit: "ondragexit",
    onDragLeave: "ondragleave",
    onDragOver: "ondragover",
    onDragStart: "ondragstart",
    onDrop: "ondrop",
    onDurationChange: "ondurationchange",
    onEmptied: "onemptied",
    onEnd: "onend",
    onEnded: "onended",
    onError: "onerror",
    onFocus: "onfocus",
    onFocusIn: "onfocusin",
    onFocusOut: "onfocusout",
    onHashChange: "onhashchange",
    onInput: "oninput",
    onInvalid: "oninvalid",
    onKeyDown: "onkeydown",
    onKeyPress: "onkeypress",
    onKeyUp: "onkeyup",
    onLoad: "onload",
    onLoadedData: "onloadeddata",
    onLoadedMetadata: "onloadedmetadata",
    onLoadStart: "onloadstart",
    onMessage: "onmessage",
    onMouseDown: "onmousedown",
    onMouseEnter: "onmouseenter",
    onMouseLeave: "onmouseleave",
    onMouseMove: "onmousemove",
    onMouseOut: "onmouseout",
    onMouseOver: "onmouseover",
    onMouseUp: "onmouseup",
    onMouseWheel: "onmousewheel",
    onOffline: "onoffline",
    onOnline: "ononline",
    onPageHide: "onpagehide",
    onPageShow: "onpageshow",
    onPaste: "onpaste",
    onPause: "onpause",
    onPlay: "onplay",
    onPlaying: "onplaying",
    onPopState: "onpopstate",
    onProgress: "onprogress",
    onRateChange: "onratechange",
    onRepeat: "onrepeat",
    onReset: "onreset",
    onResize: "onresize",
    onScroll: "onscroll",
    onSeeked: "onseeked",
    onSeeking: "onseeking",
    onSelect: "onselect",
    onShow: "onshow",
    onStalled: "onstalled",
    onStorage: "onstorage",
    onSubmit: "onsubmit",
    onSuspend: "onsuspend",
    onTimeUpdate: "ontimeupdate",
    onToggle: "ontoggle",
    onUnload: "onunload",
    onVolumeChange: "onvolumechange",
    onWaiting: "onwaiting",
    onZoom: "onzoom",
    overlinePosition: "overline-position",
    overlineThickness: "overline-thickness",
    paintOrder: "paint-order",
    panose1: "panose-1",
    pointerEvents: "pointer-events",
    referrerPolicy: "referrerpolicy",
    renderingIntent: "rendering-intent",
    shapeRendering: "shape-rendering",
    stopColor: "stop-color",
    stopOpacity: "stop-opacity",
    strikethroughPosition: "strikethrough-position",
    strikethroughThickness: "strikethrough-thickness",
    strokeDashArray: "stroke-dasharray",
    strokeDashOffset: "stroke-dashoffset",
    strokeLineCap: "stroke-linecap",
    strokeLineJoin: "stroke-linejoin",
    strokeMiterLimit: "stroke-miterlimit",
    strokeOpacity: "stroke-opacity",
    strokeWidth: "stroke-width",
    tabIndex: "tabindex",
    textAnchor: "text-anchor",
    textDecoration: "text-decoration",
    textRendering: "text-rendering",
    transformOrigin: "transform-origin",
    typeOf: "typeof",
    underlinePosition: "underline-position",
    underlineThickness: "underline-thickness",
    unicodeBidi: "unicode-bidi",
    unicodeRange: "unicode-range",
    unitsPerEm: "units-per-em",
    vAlphabetic: "v-alphabetic",
    vHanging: "v-hanging",
    vIdeographic: "v-ideographic",
    vMathematical: "v-mathematical",
    vectorEffect: "vector-effect",
    vertAdvY: "vert-adv-y",
    vertOriginX: "vert-origin-x",
    vertOriginY: "vert-origin-y",
    wordSpacing: "word-spacing",
    writingMode: "writing-mode",
    xHeight: "x-height",
    // These were camelcased in Tiny. Now lowercased in SVG 2
    playbackOrder: "playbackorder",
    timelineBegin: "timelinebegin"
  },
  transform: mr,
  properties: {
    about: te,
    accentHeight: E,
    accumulate: null,
    additive: null,
    alignmentBaseline: null,
    alphabetic: E,
    amplitude: E,
    arabicForm: null,
    ascent: E,
    attributeName: null,
    attributeType: null,
    azimuth: E,
    bandwidth: null,
    baselineShift: null,
    baseFrequency: null,
    baseProfile: null,
    bbox: null,
    begin: null,
    bias: E,
    by: null,
    calcMode: null,
    capHeight: E,
    className: q,
    clip: null,
    clipPath: null,
    clipPathUnits: null,
    clipRule: null,
    color: null,
    colorInterpolation: null,
    colorInterpolationFilters: null,
    colorProfile: null,
    colorRendering: null,
    content: null,
    contentScriptType: null,
    contentStyleType: null,
    crossOrigin: null,
    cursor: null,
    cx: null,
    cy: null,
    d: null,
    dataType: null,
    defaultAction: null,
    descent: E,
    diffuseConstant: E,
    direction: null,
    display: null,
    dur: null,
    divisor: E,
    dominantBaseline: null,
    download: O,
    dx: null,
    dy: null,
    edgeMode: null,
    editable: null,
    elevation: E,
    enableBackground: null,
    end: null,
    event: null,
    exponent: E,
    externalResourcesRequired: null,
    fill: null,
    fillOpacity: E,
    fillRule: null,
    filter: null,
    filterRes: null,
    filterUnits: null,
    floodColor: null,
    floodOpacity: null,
    focusable: null,
    focusHighlight: null,
    fontFamily: null,
    fontSize: null,
    fontSizeAdjust: null,
    fontStretch: null,
    fontStyle: null,
    fontVariant: null,
    fontWeight: null,
    format: null,
    fr: null,
    from: null,
    fx: null,
    fy: null,
    g1: Fe,
    g2: Fe,
    glyphName: Fe,
    glyphOrientationHorizontal: null,
    glyphOrientationVertical: null,
    glyphRef: null,
    gradientTransform: null,
    gradientUnits: null,
    handler: null,
    hanging: E,
    hatchContentUnits: null,
    hatchUnits: null,
    height: null,
    href: null,
    hrefLang: null,
    horizAdvX: E,
    horizOriginX: E,
    horizOriginY: E,
    id: null,
    ideographic: E,
    imageRendering: null,
    initialVisibility: null,
    in: null,
    in2: null,
    intercept: E,
    k: E,
    k1: E,
    k2: E,
    k3: E,
    k4: E,
    kernelMatrix: te,
    kernelUnitLength: null,
    keyPoints: null,
    // SEMI_COLON_SEPARATED
    keySplines: null,
    // SEMI_COLON_SEPARATED
    keyTimes: null,
    // SEMI_COLON_SEPARATED
    kerning: null,
    lang: null,
    lengthAdjust: null,
    letterSpacing: null,
    lightingColor: null,
    limitingConeAngle: E,
    local: null,
    markerEnd: null,
    markerMid: null,
    markerStart: null,
    markerHeight: null,
    markerUnits: null,
    markerWidth: null,
    mask: null,
    maskContentUnits: null,
    maskUnits: null,
    mathematical: null,
    max: null,
    media: null,
    mediaCharacterEncoding: null,
    mediaContentEncodings: null,
    mediaSize: E,
    mediaTime: null,
    method: null,
    min: null,
    mode: null,
    name: null,
    navDown: null,
    navDownLeft: null,
    navDownRight: null,
    navLeft: null,
    navNext: null,
    navPrev: null,
    navRight: null,
    navUp: null,
    navUpLeft: null,
    navUpRight: null,
    numOctaves: null,
    observer: null,
    offset: null,
    onAbort: null,
    onActivate: null,
    onAfterPrint: null,
    onBeforePrint: null,
    onBegin: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnd: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFocusIn: null,
    onFocusOut: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadStart: null,
    onMessage: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onMouseWheel: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRepeat: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onShow: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onZoom: null,
    opacity: null,
    operator: null,
    order: null,
    orient: null,
    orientation: null,
    origin: null,
    overflow: null,
    overlay: null,
    overlinePosition: E,
    overlineThickness: E,
    paintOrder: null,
    panose1: null,
    path: null,
    pathLength: E,
    patternContentUnits: null,
    patternTransform: null,
    patternUnits: null,
    phase: null,
    ping: q,
    pitch: null,
    playbackOrder: null,
    pointerEvents: null,
    points: null,
    pointsAtX: E,
    pointsAtY: E,
    pointsAtZ: E,
    preserveAlpha: null,
    preserveAspectRatio: null,
    primitiveUnits: null,
    propagate: null,
    property: te,
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: te,
    rev: te,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: te,
    requiredFeatures: te,
    requiredFonts: te,
    requiredFormats: te,
    resource: null,
    restart: null,
    result: null,
    rotate: null,
    rx: null,
    ry: null,
    scale: null,
    seed: null,
    shapeRendering: null,
    side: null,
    slope: null,
    snapshotTime: null,
    specularConstant: E,
    specularExponent: E,
    spreadMethod: null,
    spacing: null,
    startOffset: null,
    stdDeviation: null,
    stemh: null,
    stemv: null,
    stitchTiles: null,
    stopColor: null,
    stopOpacity: null,
    strikethroughPosition: E,
    strikethroughThickness: E,
    string: null,
    stroke: null,
    strokeDashArray: te,
    strokeDashOffset: null,
    strokeLineCap: null,
    strokeLineJoin: null,
    strokeMiterLimit: E,
    strokeOpacity: E,
    strokeWidth: null,
    style: null,
    surfaceScale: E,
    syncBehavior: null,
    syncBehaviorDefault: null,
    syncMaster: null,
    syncTolerance: null,
    syncToleranceDefault: null,
    systemLanguage: te,
    tabIndex: E,
    tableValues: null,
    target: null,
    targetX: E,
    targetY: E,
    textAnchor: null,
    textDecoration: null,
    textRendering: null,
    textLength: null,
    timelineBegin: null,
    title: null,
    transformBehavior: null,
    type: null,
    typeOf: te,
    to: null,
    transform: null,
    transformOrigin: null,
    u1: null,
    u2: null,
    underlinePosition: E,
    underlineThickness: E,
    unicode: null,
    unicodeBidi: null,
    unicodeRange: null,
    unitsPerEm: E,
    values: null,
    vAlphabetic: E,
    vMathematical: E,
    vectorEffect: null,
    vHanging: E,
    vIdeographic: E,
    version: null,
    vertAdvY: E,
    vertOriginX: E,
    vertOriginY: E,
    viewBox: null,
    viewTarget: null,
    visibility: null,
    width: null,
    widths: null,
    wordSpacing: null,
    writingMode: null,
    x: null,
    x1: null,
    x2: null,
    xChannelSelector: null,
    xHeight: E,
    y: null,
    y1: null,
    y2: null,
    yChannelSelector: null,
    z: null,
    zoomAndPan: null
  }
}), ll = /^data[-\w.:]+$/i, gt = /-[a-z]/g, ol = /[A-Z]/g;
function al(e, n) {
  const t = vn(n);
  let r = n, i = le;
  if (t in e.normal)
    return e.property[e.normal[t]];
  if (t.length > 4 && t.slice(0, 4) === "data" && ll.test(n)) {
    if (n.charAt(4) === "-") {
      const o = n.slice(5).replace(gt, sl);
      r = "data" + o.charAt(0).toUpperCase() + o.slice(1);
    } else {
      const o = n.slice(4);
      if (!gt.test(o)) {
        let l = o.replace(ol, ul);
        l.charAt(0) !== "-" && (l = "-" + l), n = "data" + l;
      }
    }
    i = Bn;
  }
  return new i(r, n);
}
function ul(e) {
  return "-" + e.toLowerCase();
}
function sl(e) {
  return e.charAt(1).toUpperCase();
}
const cl = {
  classId: "classID",
  dataType: "datatype",
  itemId: "itemID",
  strokeDashArray: "strokeDasharray",
  strokeDashOffset: "strokeDashoffset",
  strokeLineCap: "strokeLinecap",
  strokeLineJoin: "strokeLinejoin",
  strokeMiterLimit: "strokeMiterlimit",
  typeOf: "typeof",
  xLinkActuate: "xlinkActuate",
  xLinkArcRole: "xlinkArcrole",
  xLinkHref: "xlinkHref",
  xLinkRole: "xlinkRole",
  xLinkShow: "xlinkShow",
  xLinkTitle: "xlinkTitle",
  xLinkType: "xlinkType",
  xmlnsXLink: "xmlnsXlink"
}, fl = cr([pr, hr, dr, yr, rl], "html"), Hn = cr([pr, hr, dr, yr, il], "svg");
function hl(e) {
  return e.join(" ").trim();
}
var xr = {}, dt = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, pl = /\n/g, ml = /^\s*/, gl = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, dl = /^:\s*/, yl = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, xl = /^[;\s]*/, kl = /^\s+|\s+$/g, bl = `
`, yt = "/", xt = "*", Ie = "", wl = "comment", Sl = "declaration", Cl = function(e, n) {
  if (typeof e != "string")
    throw new TypeError("First argument must be a string");
  if (!e) return [];
  n = n || {};
  var t = 1, r = 1;
  function i(g) {
    var x = g.match(pl);
    x && (t += x.length);
    var S = g.lastIndexOf(bl);
    r = ~S ? g.length - S : r + g.length;
  }
  function o() {
    var g = { line: t, column: r };
    return function(x) {
      return x.position = new l(g), s(), x;
    };
  }
  function l(g) {
    this.start = g, this.end = { line: t, column: r }, this.source = n.source;
  }
  l.prototype.content = e;
  function a(g) {
    var x = new Error(
      n.source + ":" + t + ":" + r + ": " + g
    );
    if (x.reason = g, x.filename = n.source, x.line = t, x.column = r, x.source = e, !n.silent) throw x;
  }
  function u(g) {
    var x = g.exec(e);
    if (x) {
      var S = x[0];
      return i(S), e = e.slice(S.length), x;
    }
  }
  function s() {
    u(ml);
  }
  function f(g) {
    var x;
    for (g = g || []; x = c(); )
      x !== !1 && g.push(x);
    return g;
  }
  function c() {
    var g = o();
    if (!(yt != e.charAt(0) || xt != e.charAt(1))) {
      for (var x = 2; Ie != e.charAt(x) && (xt != e.charAt(x) || yt != e.charAt(x + 1)); )
        ++x;
      if (x += 2, Ie === e.charAt(x - 1))
        return a("End of comment missing");
      var S = e.slice(2, x - 2);
      return r += 2, i(S), e = e.slice(x), r += 2, g({
        type: wl,
        comment: S
      });
    }
  }
  function p() {
    var g = o(), x = u(gl);
    if (x) {
      if (c(), !u(dl)) return a("property missing ':'");
      var S = u(yl), k = g({
        type: Sl,
        property: kt(x[0].replace(dt, Ie)),
        value: S ? kt(S[0].replace(dt, Ie)) : Ie
      });
      return u(xl), k;
    }
  }
  function h() {
    var g = [];
    f(g);
    for (var x; x = p(); )
      x !== !1 && (g.push(x), f(g));
    return g;
  }
  return s(), h();
};
function kt(e) {
  return e ? e.replace(kl, Ie) : Ie;
}
var El = ct && ct.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(xr, "__esModule", { value: !0 });
var bt = xr.default = Tl, Il = El(Cl);
function Tl(e, n) {
  var t = null;
  if (!e || typeof e != "string")
    return t;
  var r = (0, Il.default)(e), i = typeof n == "function";
  return r.forEach(function(o) {
    if (o.type === "declaration") {
      var l = o.property, a = o.value;
      i ? n(l, a, o) : a && (t = t || {}, t[l] = a);
    }
  }), t;
}
const Al = bt.default || bt, kr = br("end"), Un = br("start");
function br(e) {
  return n;
  function n(t) {
    const r = t && t.position && t.position[e] || {};
    if (typeof r.line == "number" && r.line > 0 && typeof r.column == "number" && r.column > 0)
      return {
        line: r.line,
        column: r.column,
        offset: typeof r.offset == "number" && r.offset > -1 ? r.offset : void 0
      };
  }
}
function Pl(e) {
  const n = Un(e), t = kr(e);
  if (n && t)
    return { start: n, end: t };
}
function $e(e) {
  return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? wt(e.position) : "start" in e || "end" in e ? wt(e) : "line" in e || "column" in e ? zn(e) : "";
}
function zn(e) {
  return St(e && e.line) + ":" + St(e && e.column);
}
function wt(e) {
  return zn(e && e.start) + "-" + zn(e && e.end);
}
function St(e) {
  return e && typeof e == "number" ? e : 1;
}
class K extends Error {
  /**
   * Create a message for `reason`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {Options | null | undefined} [options]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | Options | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns
   *   Instance of `VFileMessage`.
   */
  // eslint-disable-next-line complexity
  constructor(n, t, r) {
    super(), typeof t == "string" && (r = t, t = void 0);
    let i = "", o = {}, l = !1;
    if (t && ("line" in t && "column" in t ? o = { place: t } : "start" in t && "end" in t ? o = { place: t } : "type" in t ? o = {
      ancestors: [t],
      place: t.position
    } : o = { ...t }), typeof n == "string" ? i = n : !o.cause && n && (l = !0, i = n.message, o.cause = n), !o.ruleId && !o.source && typeof r == "string") {
      const u = r.indexOf(":");
      u === -1 ? o.ruleId = r : (o.source = r.slice(0, u), o.ruleId = r.slice(u + 1));
    }
    if (!o.place && o.ancestors && o.ancestors) {
      const u = o.ancestors[o.ancestors.length - 1];
      u && (o.place = u.position);
    }
    const a = o.place && "start" in o.place ? o.place.start : o.place;
    this.ancestors = o.ancestors || void 0, this.cause = o.cause || void 0, this.column = a ? a.column : void 0, this.fatal = void 0, this.file, this.message = i, this.line = a ? a.line : void 0, this.name = $e(o.place) || "1:1", this.place = o.place || void 0, this.reason = this.message, this.ruleId = o.ruleId || void 0, this.source = o.source || void 0, this.stack = l && o.cause && typeof o.cause.stack == "string" ? o.cause.stack : "", this.actual, this.expected, this.note, this.url;
  }
}
K.prototype.file = "";
K.prototype.name = "";
K.prototype.reason = "";
K.prototype.message = "";
K.prototype.stack = "";
K.prototype.column = void 0;
K.prototype.line = void 0;
K.prototype.ancestors = void 0;
K.prototype.cause = void 0;
K.prototype.fatal = void 0;
K.prototype.place = void 0;
K.prototype.ruleId = void 0;
K.prototype.source = void 0;
const $n = {}.hasOwnProperty, vl = /* @__PURE__ */ new Map(), Ll = /[A-Z]/g, zl = /-([a-z])/g, Dl = /* @__PURE__ */ new Set(["table", "tbody", "thead", "tfoot", "tr"]), Fl = /* @__PURE__ */ new Set(["td", "th"]), wr = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function Ol(e, n) {
  if (!n || n.Fragment === void 0)
    throw new TypeError("Expected `Fragment` in options");
  const t = n.filePath || void 0;
  let r;
  if (n.development) {
    if (typeof n.jsxDEV != "function")
      throw new TypeError(
        "Expected `jsxDEV` in options when `development: true`"
      );
    r = Ul(t, n.jsxDEV);
  } else {
    if (typeof n.jsx != "function")
      throw new TypeError("Expected `jsx` in production options");
    if (typeof n.jsxs != "function")
      throw new TypeError("Expected `jsxs` in production options");
    r = Hl(t, n.jsx, n.jsxs);
  }
  const i = {
    Fragment: n.Fragment,
    ancestors: [],
    components: n.components || {},
    create: r,
    elementAttributeNameCase: n.elementAttributeNameCase || "react",
    evaluater: n.createEvaluater ? n.createEvaluater() : void 0,
    filePath: t,
    ignoreInvalidStyle: n.ignoreInvalidStyle || !1,
    passKeys: n.passKeys !== !1,
    passNode: n.passNode || !1,
    schema: n.space === "svg" ? Hn : fl,
    stylePropertyNameCase: n.stylePropertyNameCase || "dom",
    tableCellAlignToStyle: n.tableCellAlignToStyle !== !1
  }, o = Sr(i, e, void 0);
  return o && typeof o != "string" ? o : i.create(
    e,
    i.Fragment,
    { children: o || void 0 },
    void 0
  );
}
function Sr(e, n, t) {
  if (n.type === "element")
    return Rl(e, n, t);
  if (n.type === "mdxFlowExpression" || n.type === "mdxTextExpression")
    return _l(e, n);
  if (n.type === "mdxJsxFlowElement" || n.type === "mdxJsxTextElement")
    return Nl(e, n, t);
  if (n.type === "mdxjsEsm")
    return Ml(e, n);
  if (n.type === "root")
    return jl(e, n, t);
  if (n.type === "text")
    return Bl(e, n);
}
function Rl(e, n, t) {
  const r = e.schema;
  let i = r;
  n.tagName.toLowerCase() === "svg" && r.space === "html" && (i = Hn, e.schema = i), e.ancestors.push(n);
  const o = Er(e, n.tagName, !1), l = $l(e, n);
  let a = Vn(e, n);
  return Dl.has(n.tagName) && (a = a.filter(function(u) {
    return typeof u == "string" ? !el(u) : !0;
  })), Cr(e, l, o, n), qn(l, a), e.ancestors.pop(), e.schema = r, e.create(n, o, l, t);
}
function _l(e, n) {
  if (n.data && n.data.estree && e.evaluater) {
    const r = n.data.estree.body[0];
    return r.type, /** @type {Child | undefined} */
    e.evaluater.evaluateExpression(r.expression);
  }
  Ve(e, n.position);
}
function Ml(e, n) {
  if (n.data && n.data.estree && e.evaluater)
    return (
      /** @type {Child | undefined} */
      e.evaluater.evaluateProgram(n.data.estree)
    );
  Ve(e, n.position);
}
function Nl(e, n, t) {
  const r = e.schema;
  let i = r;
  n.name === "svg" && r.space === "html" && (i = Hn, e.schema = i), e.ancestors.push(n);
  const o = n.name === null ? e.Fragment : Er(e, n.name, !0), l = ql(e, n), a = Vn(e, n);
  return Cr(e, l, o, n), qn(l, a), e.ancestors.pop(), e.schema = r, e.create(n, o, l, t);
}
function jl(e, n, t) {
  const r = {};
  return qn(r, Vn(e, n)), e.create(n, e.Fragment, r, t);
}
function Bl(e, n) {
  return n.value;
}
function Cr(e, n, t, r) {
  typeof t != "string" && t !== e.Fragment && e.passNode && (n.node = r);
}
function qn(e, n) {
  if (n.length > 0) {
    const t = n.length > 1 ? n : n[0];
    t && (e.children = t);
  }
}
function Hl(e, n, t) {
  return r;
  function r(i, o, l, a) {
    const s = Array.isArray(l.children) ? t : n;
    return a ? s(o, l, a) : s(o, l);
  }
}
function Ul(e, n) {
  return t;
  function t(r, i, o, l) {
    const a = Array.isArray(o.children), u = Un(r);
    return n(
      i,
      o,
      l,
      a,
      {
        columnNumber: u ? u.column - 1 : void 0,
        fileName: e,
        lineNumber: u ? u.line : void 0
      },
      void 0
    );
  }
}
function $l(e, n) {
  const t = {};
  let r, i;
  for (i in n.properties)
    if (i !== "children" && $n.call(n.properties, i)) {
      const o = Vl(e, i, n.properties[i]);
      if (o) {
        const [l, a] = o;
        e.tableCellAlignToStyle && l === "align" && typeof a == "string" && Fl.has(n.tagName) ? r = a : t[l] = a;
      }
    }
  if (r) {
    const o = (
      /** @type {Style} */
      t.style || (t.style = {})
    );
    o[e.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = r;
  }
  return t;
}
function ql(e, n) {
  const t = {};
  for (const r of n.attributes)
    if (r.type === "mdxJsxExpressionAttribute")
      if (r.data && r.data.estree && e.evaluater) {
        const o = r.data.estree.body[0];
        o.type;
        const l = o.expression;
        l.type;
        const a = l.properties[0];
        a.type, Object.assign(
          t,
          e.evaluater.evaluateExpression(a.argument)
        );
      } else
        Ve(e, n.position);
    else {
      const i = r.name;
      let o;
      if (r.value && typeof r.value == "object")
        if (r.value.data && r.value.data.estree && e.evaluater) {
          const a = r.value.data.estree.body[0];
          a.type, o = e.evaluater.evaluateExpression(a.expression);
        } else
          Ve(e, n.position);
      else
        o = r.value === null ? !0 : r.value;
      t[i] = /** @type {Props[keyof Props]} */
      o;
    }
  return t;
}
function Vn(e, n) {
  const t = [];
  let r = -1;
  const i = e.passKeys ? /* @__PURE__ */ new Map() : vl;
  for (; ++r < n.children.length; ) {
    const o = n.children[r];
    let l;
    if (e.passKeys) {
      const u = o.type === "element" ? o.tagName : o.type === "mdxJsxFlowElement" || o.type === "mdxJsxTextElement" ? o.name : void 0;
      if (u) {
        const s = i.get(u) || 0;
        l = u + "-" + s, i.set(u, s + 1);
      }
    }
    const a = Sr(e, o, l);
    a !== void 0 && t.push(a);
  }
  return t;
}
function Vl(e, n, t) {
  const r = al(e.schema, n);
  if (!(t == null || typeof t == "number" && Number.isNaN(t))) {
    if (Array.isArray(t) && (t = r.commaSeparated ? Xi(t) : hl(t)), r.property === "style") {
      let i = typeof t == "object" ? t : Wl(e, String(t));
      return e.stylePropertyNameCase === "css" && (i = Yl(i)), ["style", i];
    }
    return [
      e.elementAttributeNameCase === "react" && r.space ? cl[r.property] || r.property : r.attribute,
      t
    ];
  }
}
function Wl(e, n) {
  const t = {};
  try {
    Al(n, r);
  } catch (i) {
    if (!e.ignoreInvalidStyle) {
      const o = (
        /** @type {Error} */
        i
      ), l = new K("Cannot parse `style` attribute", {
        ancestors: e.ancestors,
        cause: o,
        ruleId: "style",
        source: "hast-util-to-jsx-runtime"
      });
      throw l.file = e.filePath || void 0, l.url = wr + "#cannot-parse-style-attribute", l;
    }
  }
  return t;
  function r(i, o) {
    let l = i;
    l.slice(0, 2) !== "--" && (l.slice(0, 4) === "-ms-" && (l = "ms-" + l.slice(4)), l = l.replace(zl, Xl)), t[l] = o;
  }
}
function Er(e, n, t) {
  let r;
  if (!t)
    r = { type: "Literal", value: n };
  else if (n.includes(".")) {
    const i = n.split(".");
    let o = -1, l;
    for (; ++o < i.length; ) {
      const a = ht(i[o]) ? { type: "Identifier", name: i[o] } : { type: "Literal", value: i[o] };
      l = l ? {
        type: "MemberExpression",
        object: l,
        property: a,
        computed: !!(o && a.type === "Literal"),
        optional: !1
      } : a;
    }
    r = l;
  } else
    r = ht(n) && !/^[a-z]/.test(n) ? { type: "Identifier", name: n } : { type: "Literal", value: n };
  if (r.type === "Literal") {
    const i = (
      /** @type {keyof JSX.IntrinsicElements} */
      r.value
    );
    return $n.call(e.components, i) ? e.components[i] : i;
  }
  if (e.evaluater)
    return e.evaluater.evaluateExpression(r);
  Ve(e);
}
function Ve(e, n) {
  const t = new K(
    "Cannot handle MDX estrees without `createEvaluater`",
    {
      ancestors: e.ancestors,
      place: n,
      ruleId: "mdx-estree",
      source: "hast-util-to-jsx-runtime"
    }
  );
  throw t.file = e.filePath || void 0, t.url = wr + "#cannot-handle-mdx-estrees-without-createevaluater", t;
}
function Yl(e) {
  const n = {};
  let t;
  for (t in e)
    $n.call(e, t) && (n[Ql(t)] = e[t]);
  return n;
}
function Ql(e) {
  let n = e.replace(Ll, Gl);
  return n.slice(0, 3) === "ms-" && (n = "-" + n), n;
}
function Xl(e, n) {
  return n.toUpperCase();
}
function Gl(e) {
  return "-" + e.toLowerCase();
}
const gn = {
  action: ["form"],
  cite: ["blockquote", "del", "ins", "q"],
  data: ["object"],
  formAction: ["button", "input"],
  href: ["a", "area", "base", "link"],
  icon: ["menuitem"],
  itemId: null,
  manifest: ["html"],
  ping: ["a", "area"],
  poster: ["video"],
  src: [
    "audio",
    "embed",
    "iframe",
    "img",
    "input",
    "script",
    "source",
    "track",
    "video"
  ]
}, Jl = {};
function Wn(e, n) {
  const t = Jl, r = typeof t.includeImageAlt == "boolean" ? t.includeImageAlt : !0, i = typeof t.includeHtml == "boolean" ? t.includeHtml : !0;
  return Ir(e, r, i);
}
function Ir(e, n, t) {
  if (Kl(e)) {
    if ("value" in e)
      return e.type === "html" && !t ? "" : e.value;
    if (n && "alt" in e && e.alt)
      return e.alt;
    if ("children" in e)
      return Ct(e.children, n, t);
  }
  return Array.isArray(e) ? Ct(e, n, t) : "";
}
function Ct(e, n, t) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; )
    r[i] = Ir(e[i], n, t);
  return r.join("");
}
function Kl(e) {
  return !!(e && typeof e == "object");
}
const Et = document.createElement("i");
function Yn(e) {
  const n = "&" + e + ";";
  Et.innerHTML = n;
  const t = Et.textContent;
  return t.charCodeAt(t.length - 1) === 59 && e !== "semi" || t === n ? !1 : t;
}
function ie(e, n, t, r) {
  const i = e.length;
  let o = 0, l;
  if (n < 0 ? n = -n > i ? 0 : i + n : n = n > i ? i : n, t = t > 0 ? t : 0, r.length < 1e4)
    l = Array.from(r), l.unshift(n, t), e.splice(...l);
  else
    for (t && e.splice(n, t); o < r.length; )
      l = r.slice(o, o + 1e4), l.unshift(n, 0), e.splice(...l), o += 1e4, n += 1e4;
}
function re(e, n) {
  return e.length > 0 ? (ie(e, e.length, 0, n), e) : n;
}
const It = {}.hasOwnProperty;
function Tr(e) {
  const n = {};
  let t = -1;
  for (; ++t < e.length; )
    Zl(n, e[t]);
  return n;
}
function Zl(e, n) {
  let t;
  for (t in n) {
    const i = (It.call(e, t) ? e[t] : void 0) || (e[t] = {}), o = n[t];
    let l;
    if (o)
      for (l in o) {
        It.call(i, l) || (i[l] = []);
        const a = o[l];
        eo(
          // @ts-expect-error Looks like a list.
          i[l],
          Array.isArray(a) ? a : a ? [a] : []
        );
      }
  }
}
function eo(e, n) {
  let t = -1;
  const r = [];
  for (; ++t < n.length; )
    (n[t].add === "after" ? e : r).push(n[t]);
  ie(e, 0, 0, r);
}
function Ar(e, n) {
  const t = Number.parseInt(e, n);
  return (
    // C0 except for HT, LF, FF, CR, space.
    t < 9 || t === 11 || t > 13 && t < 32 || // Control character (DEL) of C0, and C1 controls.
    t > 126 && t < 160 || // Lone high surrogates and low surrogates.
    t > 55295 && t < 57344 || // Noncharacters.
    t > 64975 && t < 65008 || /* eslint-disable no-bitwise */
    (t & 65535) === 65535 || (t & 65535) === 65534 || /* eslint-enable no-bitwise */
    // Out of range
    t > 1114111 ? "�" : String.fromCodePoint(t)
  );
}
function ce(e) {
  return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
const Z = we(/[A-Za-z]/), J = we(/[\dA-Za-z]/), no = we(/[#-'*+\--9=?A-Z^-~]/);
function tn(e) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    e !== null && (e < 32 || e === 127)
  );
}
const Dn = we(/\d/), to = we(/[\dA-Fa-f]/), ro = we(/[!-/:-@[-`{-~]/);
function L(e) {
  return e !== null && e < -2;
}
function $(e) {
  return e !== null && (e < 0 || e === 32);
}
function R(e) {
  return e === -2 || e === -1 || e === 32;
}
const un = we(new RegExp("\\p{P}|\\p{S}", "u")), Te = we(/\s/);
function we(e) {
  return n;
  function n(t) {
    return t !== null && t > -1 && e.test(String.fromCharCode(t));
  }
}
function Re(e) {
  const n = [];
  let t = -1, r = 0, i = 0;
  for (; ++t < e.length; ) {
    const o = e.charCodeAt(t);
    let l = "";
    if (o === 37 && J(e.charCodeAt(t + 1)) && J(e.charCodeAt(t + 2)))
      i = 2;
    else if (o < 128)
      /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o)) || (l = String.fromCharCode(o));
    else if (o > 55295 && o < 57344) {
      const a = e.charCodeAt(t + 1);
      o < 56320 && a > 56319 && a < 57344 ? (l = String.fromCharCode(o, a), i = 1) : l = "�";
    } else
      l = String.fromCharCode(o);
    l && (n.push(e.slice(r, t), encodeURIComponent(l)), r = t + i + 1, l = ""), i && (t += i, i = 0);
  }
  return n.join("") + e.slice(r);
}
function N(e, n, t, r) {
  const i = r ? r - 1 : Number.POSITIVE_INFINITY;
  let o = 0;
  return l;
  function l(u) {
    return R(u) ? (e.enter(t), a(u)) : n(u);
  }
  function a(u) {
    return R(u) && o++ < i ? (e.consume(u), a) : (e.exit(t), n(u));
  }
}
const io = {
  tokenize: lo
};
function lo(e) {
  const n = e.attempt(
    this.parser.constructs.contentInitial,
    r,
    i
  );
  let t;
  return n;
  function r(a) {
    if (a === null) {
      e.consume(a);
      return;
    }
    return e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), N(e, n, "linePrefix");
  }
  function i(a) {
    return e.enter("paragraph"), o(a);
  }
  function o(a) {
    const u = e.enter("chunkText", {
      contentType: "text",
      previous: t
    });
    return t && (t.next = u), t = u, l(a);
  }
  function l(a) {
    if (a === null) {
      e.exit("chunkText"), e.exit("paragraph"), e.consume(a);
      return;
    }
    return L(a) ? (e.consume(a), e.exit("chunkText"), o) : (e.consume(a), l);
  }
}
const oo = {
  tokenize: ao
}, Tt = {
  tokenize: uo
};
function ao(e) {
  const n = this, t = [];
  let r = 0, i, o, l;
  return a;
  function a(I) {
    if (r < t.length) {
      const z = t[r];
      return n.containerState = z[1], e.attempt(
        z[0].continuation,
        u,
        s
      )(I);
    }
    return s(I);
  }
  function u(I) {
    if (r++, n.containerState._closeFlow) {
      n.containerState._closeFlow = void 0, i && C();
      const z = n.events.length;
      let D = z, w;
      for (; D--; )
        if (n.events[D][0] === "exit" && n.events[D][1].type === "chunkFlow") {
          w = n.events[D][1].end;
          break;
        }
      k(r);
      let _ = z;
      for (; _ < n.events.length; )
        n.events[_][1].end = Object.assign({}, w), _++;
      return ie(
        n.events,
        D + 1,
        0,
        n.events.slice(z)
      ), n.events.length = _, s(I);
    }
    return a(I);
  }
  function s(I) {
    if (r === t.length) {
      if (!i)
        return p(I);
      if (i.currentConstruct && i.currentConstruct.concrete)
        return g(I);
      n.interrupt = !!(i.currentConstruct && !i._gfmTableDynamicInterruptHack);
    }
    return n.containerState = {}, e.check(
      Tt,
      f,
      c
    )(I);
  }
  function f(I) {
    return i && C(), k(r), p(I);
  }
  function c(I) {
    return n.parser.lazy[n.now().line] = r !== t.length, l = n.now().offset, g(I);
  }
  function p(I) {
    return n.containerState = {}, e.attempt(
      Tt,
      h,
      g
    )(I);
  }
  function h(I) {
    return r++, t.push([n.currentConstruct, n.containerState]), p(I);
  }
  function g(I) {
    if (I === null) {
      i && C(), k(0), e.consume(I);
      return;
    }
    return i = i || n.parser.flow(n.now()), e.enter("chunkFlow", {
      contentType: "flow",
      previous: o,
      _tokenizer: i
    }), x(I);
  }
  function x(I) {
    if (I === null) {
      S(e.exit("chunkFlow"), !0), k(0), e.consume(I);
      return;
    }
    return L(I) ? (e.consume(I), S(e.exit("chunkFlow")), r = 0, n.interrupt = void 0, a) : (e.consume(I), x);
  }
  function S(I, z) {
    const D = n.sliceStream(I);
    if (z && D.push(null), I.previous = o, o && (o.next = I), o = I, i.defineSkip(I.start), i.write(D), n.parser.lazy[I.start.line]) {
      let w = i.events.length;
      for (; w--; )
        if (
          // The token starts before the line ending…
          i.events[w][1].start.offset < l && // …and either is not ended yet…
          (!i.events[w][1].end || // …or ends after it.
          i.events[w][1].end.offset > l)
        )
          return;
      const _ = n.events.length;
      let V = _, B, y;
      for (; V--; )
        if (n.events[V][0] === "exit" && n.events[V][1].type === "chunkFlow") {
          if (B) {
            y = n.events[V][1].end;
            break;
          }
          B = !0;
        }
      for (k(r), w = _; w < n.events.length; )
        n.events[w][1].end = Object.assign({}, y), w++;
      ie(
        n.events,
        V + 1,
        0,
        n.events.slice(_)
      ), n.events.length = w;
    }
  }
  function k(I) {
    let z = t.length;
    for (; z-- > I; ) {
      const D = t[z];
      n.containerState = D[1], D[0].exit.call(n, e);
    }
    t.length = I;
  }
  function C() {
    i.write([null]), o = void 0, i = void 0, n.containerState._closeFlow = void 0;
  }
}
function uo(e, n, t) {
  return N(
    e,
    e.attempt(this.parser.constructs.document, n, t),
    "linePrefix",
    this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
  );
}
function rn(e) {
  if (e === null || $(e) || Te(e))
    return 1;
  if (un(e))
    return 2;
}
function sn(e, n, t) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; ) {
    const o = e[i].resolveAll;
    o && !r.includes(o) && (n = o(n, t), r.push(o));
  }
  return n;
}
const Fn = {
  name: "attention",
  tokenize: co,
  resolveAll: so
};
function so(e, n) {
  let t = -1, r, i, o, l, a, u, s, f;
  for (; ++t < e.length; )
    if (e[t][0] === "enter" && e[t][1].type === "attentionSequence" && e[t][1]._close) {
      for (r = t; r--; )
        if (e[r][0] === "exit" && e[r][1].type === "attentionSequence" && e[r][1]._open && // If the markers are the same:
        n.sliceSerialize(e[r][1]).charCodeAt(0) === n.sliceSerialize(e[t][1]).charCodeAt(0)) {
          if ((e[r][1]._close || e[t][1]._open) && (e[t][1].end.offset - e[t][1].start.offset) % 3 && !((e[r][1].end.offset - e[r][1].start.offset + e[t][1].end.offset - e[t][1].start.offset) % 3))
            continue;
          u = e[r][1].end.offset - e[r][1].start.offset > 1 && e[t][1].end.offset - e[t][1].start.offset > 1 ? 2 : 1;
          const c = Object.assign({}, e[r][1].end), p = Object.assign({}, e[t][1].start);
          At(c, -u), At(p, u), l = {
            type: u > 1 ? "strongSequence" : "emphasisSequence",
            start: c,
            end: Object.assign({}, e[r][1].end)
          }, a = {
            type: u > 1 ? "strongSequence" : "emphasisSequence",
            start: Object.assign({}, e[t][1].start),
            end: p
          }, o = {
            type: u > 1 ? "strongText" : "emphasisText",
            start: Object.assign({}, e[r][1].end),
            end: Object.assign({}, e[t][1].start)
          }, i = {
            type: u > 1 ? "strong" : "emphasis",
            start: Object.assign({}, l.start),
            end: Object.assign({}, a.end)
          }, e[r][1].end = Object.assign({}, l.start), e[t][1].start = Object.assign({}, a.end), s = [], e[r][1].end.offset - e[r][1].start.offset && (s = re(s, [["enter", e[r][1], n], ["exit", e[r][1], n]])), s = re(s, [["enter", i, n], ["enter", l, n], ["exit", l, n], ["enter", o, n]]), s = re(s, sn(n.parser.constructs.insideSpan.null, e.slice(r + 1, t), n)), s = re(s, [["exit", o, n], ["enter", a, n], ["exit", a, n], ["exit", i, n]]), e[t][1].end.offset - e[t][1].start.offset ? (f = 2, s = re(s, [["enter", e[t][1], n], ["exit", e[t][1], n]])) : f = 0, ie(e, r - 1, t - r + 3, s), t = r + s.length - f - 2;
          break;
        }
    }
  for (t = -1; ++t < e.length; )
    e[t][1].type === "attentionSequence" && (e[t][1].type = "data");
  return e;
}
function co(e, n) {
  const t = this.parser.constructs.attentionMarkers.null, r = this.previous, i = rn(r);
  let o;
  return l;
  function l(u) {
    return o = u, e.enter("attentionSequence"), a(u);
  }
  function a(u) {
    if (u === o)
      return e.consume(u), a;
    const s = e.exit("attentionSequence"), f = rn(u), c = !f || f === 2 && i || t.includes(u), p = !i || i === 2 && f || t.includes(r);
    return s._open = !!(o === 42 ? c : c && (i || !p)), s._close = !!(o === 42 ? p : p && (f || !c)), n(u);
  }
}
function At(e, n) {
  e.column += n, e.offset += n, e._bufferIndex += n;
}
const fo = {
  name: "autolink",
  tokenize: ho
};
function ho(e, n, t) {
  let r = 0;
  return i;
  function i(h) {
    return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(h), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), o;
  }
  function o(h) {
    return Z(h) ? (e.consume(h), l) : h === 64 ? t(h) : s(h);
  }
  function l(h) {
    return h === 43 || h === 45 || h === 46 || J(h) ? (r = 1, a(h)) : s(h);
  }
  function a(h) {
    return h === 58 ? (e.consume(h), r = 0, u) : (h === 43 || h === 45 || h === 46 || J(h)) && r++ < 32 ? (e.consume(h), a) : (r = 0, s(h));
  }
  function u(h) {
    return h === 62 ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(h), e.exit("autolinkMarker"), e.exit("autolink"), n) : h === null || h === 32 || h === 60 || tn(h) ? t(h) : (e.consume(h), u);
  }
  function s(h) {
    return h === 64 ? (e.consume(h), f) : no(h) ? (e.consume(h), s) : t(h);
  }
  function f(h) {
    return J(h) ? c(h) : t(h);
  }
  function c(h) {
    return h === 46 ? (e.consume(h), r = 0, f) : h === 62 ? (e.exit("autolinkProtocol").type = "autolinkEmail", e.enter("autolinkMarker"), e.consume(h), e.exit("autolinkMarker"), e.exit("autolink"), n) : p(h);
  }
  function p(h) {
    if ((h === 45 || J(h)) && r++ < 63) {
      const g = h === 45 ? p : c;
      return e.consume(h), g;
    }
    return t(h);
  }
}
const Ye = {
  tokenize: po,
  partial: !0
};
function po(e, n, t) {
  return r;
  function r(o) {
    return R(o) ? N(e, i, "linePrefix")(o) : i(o);
  }
  function i(o) {
    return o === null || L(o) ? n(o) : t(o);
  }
}
const Pr = {
  name: "blockQuote",
  tokenize: mo,
  continuation: {
    tokenize: go
  },
  exit: yo
};
function mo(e, n, t) {
  const r = this;
  return i;
  function i(l) {
    if (l === 62) {
      const a = r.containerState;
      return a.open || (e.enter("blockQuote", {
        _container: !0
      }), a.open = !0), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(l), e.exit("blockQuoteMarker"), o;
    }
    return t(l);
  }
  function o(l) {
    return R(l) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(l), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), n) : (e.exit("blockQuotePrefix"), n(l));
  }
}
function go(e, n, t) {
  const r = this;
  return i;
  function i(l) {
    return R(l) ? N(e, o, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(l) : o(l);
  }
  function o(l) {
    return e.attempt(Pr, n, t)(l);
  }
}
function yo(e) {
  e.exit("blockQuote");
}
const vr = {
  name: "characterEscape",
  tokenize: xo
};
function xo(e, n, t) {
  return r;
  function r(o) {
    return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(o), e.exit("escapeMarker"), i;
  }
  function i(o) {
    return ro(o) ? (e.enter("characterEscapeValue"), e.consume(o), e.exit("characterEscapeValue"), e.exit("characterEscape"), n) : t(o);
  }
}
const Lr = {
  name: "characterReference",
  tokenize: ko
};
function ko(e, n, t) {
  const r = this;
  let i = 0, o, l;
  return a;
  function a(c) {
    return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(c), e.exit("characterReferenceMarker"), u;
  }
  function u(c) {
    return c === 35 ? (e.enter("characterReferenceMarkerNumeric"), e.consume(c), e.exit("characterReferenceMarkerNumeric"), s) : (e.enter("characterReferenceValue"), o = 31, l = J, f(c));
  }
  function s(c) {
    return c === 88 || c === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(c), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), o = 6, l = to, f) : (e.enter("characterReferenceValue"), o = 7, l = Dn, f(c));
  }
  function f(c) {
    if (c === 59 && i) {
      const p = e.exit("characterReferenceValue");
      return l === J && !Yn(r.sliceSerialize(p)) ? t(c) : (e.enter("characterReferenceMarker"), e.consume(c), e.exit("characterReferenceMarker"), e.exit("characterReference"), n);
    }
    return l(c) && i++ < o ? (e.consume(c), f) : t(c);
  }
}
const Pt = {
  tokenize: wo,
  partial: !0
}, vt = {
  name: "codeFenced",
  tokenize: bo,
  concrete: !0
};
function bo(e, n, t) {
  const r = this, i = {
    tokenize: D,
    partial: !0
  };
  let o = 0, l = 0, a;
  return u;
  function u(w) {
    return s(w);
  }
  function s(w) {
    const _ = r.events[r.events.length - 1];
    return o = _ && _[1].type === "linePrefix" ? _[2].sliceSerialize(_[1], !0).length : 0, a = w, e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), f(w);
  }
  function f(w) {
    return w === a ? (l++, e.consume(w), f) : l < 3 ? t(w) : (e.exit("codeFencedFenceSequence"), R(w) ? N(e, c, "whitespace")(w) : c(w));
  }
  function c(w) {
    return w === null || L(w) ? (e.exit("codeFencedFence"), r.interrupt ? n(w) : e.check(Pt, x, z)(w)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", {
      contentType: "string"
    }), p(w));
  }
  function p(w) {
    return w === null || L(w) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), c(w)) : R(w) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), N(e, h, "whitespace")(w)) : w === 96 && w === a ? t(w) : (e.consume(w), p);
  }
  function h(w) {
    return w === null || L(w) ? c(w) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", {
      contentType: "string"
    }), g(w));
  }
  function g(w) {
    return w === null || L(w) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), c(w)) : w === 96 && w === a ? t(w) : (e.consume(w), g);
  }
  function x(w) {
    return e.attempt(i, z, S)(w);
  }
  function S(w) {
    return e.enter("lineEnding"), e.consume(w), e.exit("lineEnding"), k;
  }
  function k(w) {
    return o > 0 && R(w) ? N(e, C, "linePrefix", o + 1)(w) : C(w);
  }
  function C(w) {
    return w === null || L(w) ? e.check(Pt, x, z)(w) : (e.enter("codeFlowValue"), I(w));
  }
  function I(w) {
    return w === null || L(w) ? (e.exit("codeFlowValue"), C(w)) : (e.consume(w), I);
  }
  function z(w) {
    return e.exit("codeFenced"), n(w);
  }
  function D(w, _, V) {
    let B = 0;
    return y;
    function y(j) {
      return w.enter("lineEnding"), w.consume(j), w.exit("lineEnding"), P;
    }
    function P(j) {
      return w.enter("codeFencedFence"), R(j) ? N(w, v, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(j) : v(j);
    }
    function v(j) {
      return j === a ? (w.enter("codeFencedFenceSequence"), H(j)) : V(j);
    }
    function H(j) {
      return j === a ? (B++, w.consume(j), H) : B >= l ? (w.exit("codeFencedFenceSequence"), R(j) ? N(w, W, "whitespace")(j) : W(j)) : V(j);
    }
    function W(j) {
      return j === null || L(j) ? (w.exit("codeFencedFence"), _(j)) : V(j);
    }
  }
}
function wo(e, n, t) {
  const r = this;
  return i;
  function i(l) {
    return l === null ? t(l) : (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), o);
  }
  function o(l) {
    return r.parser.lazy[r.now().line] ? t(l) : n(l);
  }
}
const dn = {
  name: "codeIndented",
  tokenize: Co
}, So = {
  tokenize: Eo,
  partial: !0
};
function Co(e, n, t) {
  const r = this;
  return i;
  function i(s) {
    return e.enter("codeIndented"), N(e, o, "linePrefix", 5)(s);
  }
  function o(s) {
    const f = r.events[r.events.length - 1];
    return f && f[1].type === "linePrefix" && f[2].sliceSerialize(f[1], !0).length >= 4 ? l(s) : t(s);
  }
  function l(s) {
    return s === null ? u(s) : L(s) ? e.attempt(So, l, u)(s) : (e.enter("codeFlowValue"), a(s));
  }
  function a(s) {
    return s === null || L(s) ? (e.exit("codeFlowValue"), l(s)) : (e.consume(s), a);
  }
  function u(s) {
    return e.exit("codeIndented"), n(s);
  }
}
function Eo(e, n, t) {
  const r = this;
  return i;
  function i(l) {
    return r.parser.lazy[r.now().line] ? t(l) : L(l) ? (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), i) : N(e, o, "linePrefix", 5)(l);
  }
  function o(l) {
    const a = r.events[r.events.length - 1];
    return a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? n(l) : L(l) ? i(l) : t(l);
  }
}
const Io = {
  name: "codeText",
  tokenize: Po,
  resolve: To,
  previous: Ao
};
function To(e) {
  let n = e.length - 4, t = 3, r, i;
  if ((e[t][1].type === "lineEnding" || e[t][1].type === "space") && (e[n][1].type === "lineEnding" || e[n][1].type === "space")) {
    for (r = t; ++r < n; )
      if (e[r][1].type === "codeTextData") {
        e[t][1].type = "codeTextPadding", e[n][1].type = "codeTextPadding", t += 2, n -= 2;
        break;
      }
  }
  for (r = t - 1, n++; ++r <= n; )
    i === void 0 ? r !== n && e[r][1].type !== "lineEnding" && (i = r) : (r === n || e[r][1].type === "lineEnding") && (e[i][1].type = "codeTextData", r !== i + 2 && (e[i][1].end = e[r - 1][1].end, e.splice(i + 2, r - i - 2), n -= r - i - 2, r = i + 2), i = void 0);
  return e;
}
function Ao(e) {
  return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function Po(e, n, t) {
  let r = 0, i, o;
  return l;
  function l(c) {
    return e.enter("codeText"), e.enter("codeTextSequence"), a(c);
  }
  function a(c) {
    return c === 96 ? (e.consume(c), r++, a) : (e.exit("codeTextSequence"), u(c));
  }
  function u(c) {
    return c === null ? t(c) : c === 32 ? (e.enter("space"), e.consume(c), e.exit("space"), u) : c === 96 ? (o = e.enter("codeTextSequence"), i = 0, f(c)) : L(c) ? (e.enter("lineEnding"), e.consume(c), e.exit("lineEnding"), u) : (e.enter("codeTextData"), s(c));
  }
  function s(c) {
    return c === null || c === 32 || c === 96 || L(c) ? (e.exit("codeTextData"), u(c)) : (e.consume(c), s);
  }
  function f(c) {
    return c === 96 ? (e.consume(c), i++, f) : i === r ? (e.exit("codeTextSequence"), e.exit("codeText"), n(c)) : (o.type = "codeTextData", s(c));
  }
}
class vo {
  /**
   * @param {ReadonlyArray<T> | null | undefined} [initial]
   *   Initial items (optional).
   * @returns
   *   Splice buffer.
   */
  constructor(n) {
    this.left = n ? [...n] : [], this.right = [];
  }
  /**
   * Array access;
   * does not move the cursor.
   *
   * @param {number} index
   *   Index.
   * @return {T}
   *   Item.
   */
  get(n) {
    if (n < 0 || n >= this.left.length + this.right.length)
      throw new RangeError("Cannot access index `" + n + "` in a splice buffer of size `" + (this.left.length + this.right.length) + "`");
    return n < this.left.length ? this.left[n] : this.right[this.right.length - n + this.left.length - 1];
  }
  /**
   * The length of the splice buffer, one greater than the largest index in the
   * array.
   */
  get length() {
    return this.left.length + this.right.length;
  }
  /**
   * Remove and return `list[0]`;
   * moves the cursor to `0`.
   *
   * @returns {T | undefined}
   *   Item, optional.
   */
  shift() {
    return this.setCursor(0), this.right.pop();
  }
  /**
   * Slice the buffer to get an array;
   * does not move the cursor.
   *
   * @param {number} start
   *   Start.
   * @param {number | null | undefined} [end]
   *   End (optional).
   * @returns {Array<T>}
   *   Array of items.
   */
  slice(n, t) {
    const r = t ?? Number.POSITIVE_INFINITY;
    return r < this.left.length ? this.left.slice(n, r) : n > this.left.length ? this.right.slice(this.right.length - r + this.left.length, this.right.length - n + this.left.length).reverse() : this.left.slice(n).concat(this.right.slice(this.right.length - r + this.left.length).reverse());
  }
  /**
   * Mimics the behavior of Array.prototype.splice() except for the change of
   * interface necessary to avoid segfaults when patching in very large arrays.
   *
   * This operation moves cursor is moved to `start` and results in the cursor
   * placed after any inserted items.
   *
   * @param {number} start
   *   Start;
   *   zero-based index at which to start changing the array;
   *   negative numbers count backwards from the end of the array and values
   *   that are out-of bounds are clamped to the appropriate end of the array.
   * @param {number | null | undefined} [deleteCount=0]
   *   Delete count (default: `0`);
   *   maximum number of elements to delete, starting from start.
   * @param {Array<T> | null | undefined} [items=[]]
   *   Items to include in place of the deleted items (default: `[]`).
   * @return {Array<T>}
   *   Any removed items.
   */
  splice(n, t, r) {
    const i = t || 0;
    this.setCursor(Math.trunc(n));
    const o = this.right.splice(this.right.length - i, Number.POSITIVE_INFINITY);
    return r && Be(this.left, r), o.reverse();
  }
  /**
   * Remove and return the highest-numbered item in the array, so
   * `list[list.length - 1]`;
   * Moves the cursor to `length`.
   *
   * @returns {T | undefined}
   *   Item, optional.
   */
  pop() {
    return this.setCursor(Number.POSITIVE_INFINITY), this.left.pop();
  }
  /**
   * Inserts a single item to the high-numbered side of the array;
   * moves the cursor to `length`.
   *
   * @param {T} item
   *   Item.
   * @returns {undefined}
   *   Nothing.
   */
  push(n) {
    this.setCursor(Number.POSITIVE_INFINITY), this.left.push(n);
  }
  /**
   * Inserts many items to the high-numbered side of the array.
   * Moves the cursor to `length`.
   *
   * @param {Array<T>} items
   *   Items.
   * @returns {undefined}
   *   Nothing.
   */
  pushMany(n) {
    this.setCursor(Number.POSITIVE_INFINITY), Be(this.left, n);
  }
  /**
   * Inserts a single item to the low-numbered side of the array;
   * Moves the cursor to `0`.
   *
   * @param {T} item
   *   Item.
   * @returns {undefined}
   *   Nothing.
   */
  unshift(n) {
    this.setCursor(0), this.right.push(n);
  }
  /**
   * Inserts many items to the low-numbered side of the array;
   * moves the cursor to `0`.
   *
   * @param {Array<T>} items
   *   Items.
   * @returns {undefined}
   *   Nothing.
   */
  unshiftMany(n) {
    this.setCursor(0), Be(this.right, n.reverse());
  }
  /**
   * Move the cursor to a specific position in the array. Requires
   * time proportional to the distance moved.
   *
   * If `n < 0`, the cursor will end up at the beginning.
   * If `n > length`, the cursor will end up at the end.
   *
   * @param {number} n
   *   Position.
   * @return {undefined}
   *   Nothing.
   */
  setCursor(n) {
    if (!(n === this.left.length || n > this.left.length && this.right.length === 0 || n < 0 && this.left.length === 0))
      if (n < this.left.length) {
        const t = this.left.splice(n, Number.POSITIVE_INFINITY);
        Be(this.right, t.reverse());
      } else {
        const t = this.right.splice(this.left.length + this.right.length - n, Number.POSITIVE_INFINITY);
        Be(this.left, t.reverse());
      }
  }
}
function Be(e, n) {
  let t = 0;
  if (n.length < 1e4)
    e.push(...n);
  else
    for (; t < n.length; )
      e.push(...n.slice(t, t + 1e4)), t += 1e4;
}
function zr(e) {
  const n = {};
  let t = -1, r, i, o, l, a, u, s;
  const f = new vo(e);
  for (; ++t < f.length; ) {
    for (; t in n; )
      t = n[t];
    if (r = f.get(t), t && r[1].type === "chunkFlow" && f.get(t - 1)[1].type === "listItemPrefix" && (u = r[1]._tokenizer.events, o = 0, o < u.length && u[o][1].type === "lineEndingBlank" && (o += 2), o < u.length && u[o][1].type === "content"))
      for (; ++o < u.length && u[o][1].type !== "content"; )
        u[o][1].type === "chunkText" && (u[o][1]._isInFirstContentOfListItem = !0, o++);
    if (r[0] === "enter")
      r[1].contentType && (Object.assign(n, Lo(f, t)), t = n[t], s = !0);
    else if (r[1]._container) {
      for (o = t, i = void 0; o-- && (l = f.get(o), l[1].type === "lineEnding" || l[1].type === "lineEndingBlank"); )
        l[0] === "enter" && (i && (f.get(i)[1].type = "lineEndingBlank"), l[1].type = "lineEnding", i = o);
      i && (r[1].end = Object.assign({}, f.get(i)[1].start), a = f.slice(i, t), a.unshift(r), f.splice(i, t - i + 1, a));
    }
  }
  return ie(e, 0, Number.POSITIVE_INFINITY, f.slice(0)), !s;
}
function Lo(e, n) {
  const t = e.get(n)[1], r = e.get(n)[2];
  let i = n - 1;
  const o = [], l = t._tokenizer || r.parser[t.contentType](t.start), a = l.events, u = [], s = {};
  let f, c, p = -1, h = t, g = 0, x = 0;
  const S = [x];
  for (; h; ) {
    for (; e.get(++i)[1] !== h; )
      ;
    o.push(i), h._tokenizer || (f = r.sliceStream(h), h.next || f.push(null), c && l.defineSkip(h.start), h._isInFirstContentOfListItem && (l._gfmTasklistFirstContentOfListItem = !0), l.write(f), h._isInFirstContentOfListItem && (l._gfmTasklistFirstContentOfListItem = void 0)), c = h, h = h.next;
  }
  for (h = t; ++p < a.length; )
    // Find a void token that includes a break.
    a[p][0] === "exit" && a[p - 1][0] === "enter" && a[p][1].type === a[p - 1][1].type && a[p][1].start.line !== a[p][1].end.line && (x = p + 1, S.push(x), h._tokenizer = void 0, h.previous = void 0, h = h.next);
  for (l.events = [], h ? (h._tokenizer = void 0, h.previous = void 0) : S.pop(), p = S.length; p--; ) {
    const k = a.slice(S[p], S[p + 1]), C = o.pop();
    u.push([C, C + k.length - 1]), e.splice(C, 2, k);
  }
  for (u.reverse(), p = -1; ++p < u.length; )
    s[g + u[p][0]] = g + u[p][1], g += u[p][1] - u[p][0] - 1;
  return s;
}
const zo = {
  tokenize: Oo,
  resolve: Fo
}, Do = {
  tokenize: Ro,
  partial: !0
};
function Fo(e) {
  return zr(e), e;
}
function Oo(e, n) {
  let t;
  return r;
  function r(a) {
    return e.enter("content"), t = e.enter("chunkContent", {
      contentType: "content"
    }), i(a);
  }
  function i(a) {
    return a === null ? o(a) : L(a) ? e.check(Do, l, o)(a) : (e.consume(a), i);
  }
  function o(a) {
    return e.exit("chunkContent"), e.exit("content"), n(a);
  }
  function l(a) {
    return e.consume(a), e.exit("chunkContent"), t.next = e.enter("chunkContent", {
      contentType: "content",
      previous: t
    }), t = t.next, i;
  }
}
function Ro(e, n, t) {
  const r = this;
  return i;
  function i(l) {
    return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), N(e, o, "linePrefix");
  }
  function o(l) {
    if (l === null || L(l))
      return t(l);
    const a = r.events[r.events.length - 1];
    return !r.parser.constructs.disable.null.includes("codeIndented") && a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? n(l) : e.interrupt(r.parser.constructs.flow, t, n)(l);
  }
}
function Dr(e, n, t, r, i, o, l, a, u) {
  const s = u || Number.POSITIVE_INFINITY;
  let f = 0;
  return c;
  function c(k) {
    return k === 60 ? (e.enter(r), e.enter(i), e.enter(o), e.consume(k), e.exit(o), p) : k === null || k === 32 || k === 41 || tn(k) ? t(k) : (e.enter(r), e.enter(l), e.enter(a), e.enter("chunkString", {
      contentType: "string"
    }), x(k));
  }
  function p(k) {
    return k === 62 ? (e.enter(o), e.consume(k), e.exit(o), e.exit(i), e.exit(r), n) : (e.enter(a), e.enter("chunkString", {
      contentType: "string"
    }), h(k));
  }
  function h(k) {
    return k === 62 ? (e.exit("chunkString"), e.exit(a), p(k)) : k === null || k === 60 || L(k) ? t(k) : (e.consume(k), k === 92 ? g : h);
  }
  function g(k) {
    return k === 60 || k === 62 || k === 92 ? (e.consume(k), h) : h(k);
  }
  function x(k) {
    return !f && (k === null || k === 41 || $(k)) ? (e.exit("chunkString"), e.exit(a), e.exit(l), e.exit(r), n(k)) : f < s && k === 40 ? (e.consume(k), f++, x) : k === 41 ? (e.consume(k), f--, x) : k === null || k === 32 || k === 40 || tn(k) ? t(k) : (e.consume(k), k === 92 ? S : x);
  }
  function S(k) {
    return k === 40 || k === 41 || k === 92 ? (e.consume(k), x) : x(k);
  }
}
function Fr(e, n, t, r, i, o) {
  const l = this;
  let a = 0, u;
  return s;
  function s(h) {
    return e.enter(r), e.enter(i), e.consume(h), e.exit(i), e.enter(o), f;
  }
  function f(h) {
    return a > 999 || h === null || h === 91 || h === 93 && !u || // To do: remove in the future once we’ve switched from
    // `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
    // which doesn’t need this.
    // Hidden footnotes hook.
    /* c8 ignore next 3 */
    h === 94 && !a && "_hiddenFootnoteSupport" in l.parser.constructs ? t(h) : h === 93 ? (e.exit(o), e.enter(i), e.consume(h), e.exit(i), e.exit(r), n) : L(h) ? (e.enter("lineEnding"), e.consume(h), e.exit("lineEnding"), f) : (e.enter("chunkString", {
      contentType: "string"
    }), c(h));
  }
  function c(h) {
    return h === null || h === 91 || h === 93 || L(h) || a++ > 999 ? (e.exit("chunkString"), f(h)) : (e.consume(h), u || (u = !R(h)), h === 92 ? p : c);
  }
  function p(h) {
    return h === 91 || h === 92 || h === 93 ? (e.consume(h), a++, c) : c(h);
  }
}
function Or(e, n, t, r, i, o) {
  let l;
  return a;
  function a(p) {
    return p === 34 || p === 39 || p === 40 ? (e.enter(r), e.enter(i), e.consume(p), e.exit(i), l = p === 40 ? 41 : p, u) : t(p);
  }
  function u(p) {
    return p === l ? (e.enter(i), e.consume(p), e.exit(i), e.exit(r), n) : (e.enter(o), s(p));
  }
  function s(p) {
    return p === l ? (e.exit(o), u(l)) : p === null ? t(p) : L(p) ? (e.enter("lineEnding"), e.consume(p), e.exit("lineEnding"), N(e, s, "linePrefix")) : (e.enter("chunkString", {
      contentType: "string"
    }), f(p));
  }
  function f(p) {
    return p === l || p === null || L(p) ? (e.exit("chunkString"), s(p)) : (e.consume(p), p === 92 ? c : f);
  }
  function c(p) {
    return p === l || p === 92 ? (e.consume(p), f) : f(p);
  }
}
function qe(e, n) {
  let t;
  return r;
  function r(i) {
    return L(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), t = !0, r) : R(i) ? N(
      e,
      r,
      t ? "linePrefix" : "lineSuffix"
    )(i) : n(i);
  }
}
const _o = {
  name: "definition",
  tokenize: No
}, Mo = {
  tokenize: jo,
  partial: !0
};
function No(e, n, t) {
  const r = this;
  let i;
  return o;
  function o(h) {
    return e.enter("definition"), l(h);
  }
  function l(h) {
    return Fr.call(
      r,
      e,
      a,
      // Note: we don’t need to reset the way `markdown-rs` does.
      t,
      "definitionLabel",
      "definitionLabelMarker",
      "definitionLabelString"
    )(h);
  }
  function a(h) {
    return i = ce(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)), h === 58 ? (e.enter("definitionMarker"), e.consume(h), e.exit("definitionMarker"), u) : t(h);
  }
  function u(h) {
    return $(h) ? qe(e, s)(h) : s(h);
  }
  function s(h) {
    return Dr(
      e,
      f,
      // Note: we don’t need to reset the way `markdown-rs` does.
      t,
      "definitionDestination",
      "definitionDestinationLiteral",
      "definitionDestinationLiteralMarker",
      "definitionDestinationRaw",
      "definitionDestinationString"
    )(h);
  }
  function f(h) {
    return e.attempt(Mo, c, c)(h);
  }
  function c(h) {
    return R(h) ? N(e, p, "whitespace")(h) : p(h);
  }
  function p(h) {
    return h === null || L(h) ? (e.exit("definition"), r.parser.defined.push(i), n(h)) : t(h);
  }
}
function jo(e, n, t) {
  return r;
  function r(a) {
    return $(a) ? qe(e, i)(a) : t(a);
  }
  function i(a) {
    return Or(e, o, t, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(a);
  }
  function o(a) {
    return R(a) ? N(e, l, "whitespace")(a) : l(a);
  }
  function l(a) {
    return a === null || L(a) ? n(a) : t(a);
  }
}
const Bo = {
  name: "hardBreakEscape",
  tokenize: Ho
};
function Ho(e, n, t) {
  return r;
  function r(o) {
    return e.enter("hardBreakEscape"), e.consume(o), i;
  }
  function i(o) {
    return L(o) ? (e.exit("hardBreakEscape"), n(o)) : t(o);
  }
}
const Uo = {
  name: "headingAtx",
  tokenize: qo,
  resolve: $o
};
function $o(e, n) {
  let t = e.length - 2, r = 3, i, o;
  return e[r][1].type === "whitespace" && (r += 2), t - 2 > r && e[t][1].type === "whitespace" && (t -= 2), e[t][1].type === "atxHeadingSequence" && (r === t - 1 || t - 4 > r && e[t - 2][1].type === "whitespace") && (t -= r + 1 === t ? 2 : 4), t > r && (i = {
    type: "atxHeadingText",
    start: e[r][1].start,
    end: e[t][1].end
  }, o = {
    type: "chunkText",
    start: e[r][1].start,
    end: e[t][1].end,
    contentType: "text"
  }, ie(e, r, t - r + 1, [["enter", i, n], ["enter", o, n], ["exit", o, n], ["exit", i, n]])), e;
}
function qo(e, n, t) {
  let r = 0;
  return i;
  function i(f) {
    return e.enter("atxHeading"), o(f);
  }
  function o(f) {
    return e.enter("atxHeadingSequence"), l(f);
  }
  function l(f) {
    return f === 35 && r++ < 6 ? (e.consume(f), l) : f === null || $(f) ? (e.exit("atxHeadingSequence"), a(f)) : t(f);
  }
  function a(f) {
    return f === 35 ? (e.enter("atxHeadingSequence"), u(f)) : f === null || L(f) ? (e.exit("atxHeading"), n(f)) : R(f) ? N(e, a, "whitespace")(f) : (e.enter("atxHeadingText"), s(f));
  }
  function u(f) {
    return f === 35 ? (e.consume(f), u) : (e.exit("atxHeadingSequence"), a(f));
  }
  function s(f) {
    return f === null || f === 35 || $(f) ? (e.exit("atxHeadingText"), a(f)) : (e.consume(f), s);
  }
}
const Vo = [
  "address",
  "article",
  "aside",
  "base",
  "basefont",
  "blockquote",
  "body",
  "caption",
  "center",
  "col",
  "colgroup",
  "dd",
  "details",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "frame",
  "frameset",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hr",
  "html",
  "iframe",
  "legend",
  "li",
  "link",
  "main",
  "menu",
  "menuitem",
  "nav",
  "noframes",
  "ol",
  "optgroup",
  "option",
  "p",
  "param",
  "search",
  "section",
  "summary",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "title",
  "tr",
  "track",
  "ul"
], Lt = ["pre", "script", "style", "textarea"], Wo = {
  name: "htmlFlow",
  tokenize: Go,
  resolveTo: Xo,
  concrete: !0
}, Yo = {
  tokenize: Ko,
  partial: !0
}, Qo = {
  tokenize: Jo,
  partial: !0
};
function Xo(e) {
  let n = e.length;
  for (; n-- && !(e[n][0] === "enter" && e[n][1].type === "htmlFlow"); )
    ;
  return n > 1 && e[n - 2][1].type === "linePrefix" && (e[n][1].start = e[n - 2][1].start, e[n + 1][1].start = e[n - 2][1].start, e.splice(n - 2, 2)), e;
}
function Go(e, n, t) {
  const r = this;
  let i, o, l, a, u;
  return s;
  function s(d) {
    return f(d);
  }
  function f(d) {
    return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(d), c;
  }
  function c(d) {
    return d === 33 ? (e.consume(d), p) : d === 47 ? (e.consume(d), o = !0, x) : d === 63 ? (e.consume(d), i = 3, r.interrupt ? n : m) : Z(d) ? (e.consume(d), l = String.fromCharCode(d), S) : t(d);
  }
  function p(d) {
    return d === 45 ? (e.consume(d), i = 2, h) : d === 91 ? (e.consume(d), i = 5, a = 0, g) : Z(d) ? (e.consume(d), i = 4, r.interrupt ? n : m) : t(d);
  }
  function h(d) {
    return d === 45 ? (e.consume(d), r.interrupt ? n : m) : t(d);
  }
  function g(d) {
    const ue = "CDATA[";
    return d === ue.charCodeAt(a++) ? (e.consume(d), a === ue.length ? r.interrupt ? n : v : g) : t(d);
  }
  function x(d) {
    return Z(d) ? (e.consume(d), l = String.fromCharCode(d), S) : t(d);
  }
  function S(d) {
    if (d === null || d === 47 || d === 62 || $(d)) {
      const ue = d === 47, Se = l.toLowerCase();
      return !ue && !o && Lt.includes(Se) ? (i = 1, r.interrupt ? n(d) : v(d)) : Vo.includes(l.toLowerCase()) ? (i = 6, ue ? (e.consume(d), k) : r.interrupt ? n(d) : v(d)) : (i = 7, r.interrupt && !r.parser.lazy[r.now().line] ? t(d) : o ? C(d) : I(d));
    }
    return d === 45 || J(d) ? (e.consume(d), l += String.fromCharCode(d), S) : t(d);
  }
  function k(d) {
    return d === 62 ? (e.consume(d), r.interrupt ? n : v) : t(d);
  }
  function C(d) {
    return R(d) ? (e.consume(d), C) : y(d);
  }
  function I(d) {
    return d === 47 ? (e.consume(d), y) : d === 58 || d === 95 || Z(d) ? (e.consume(d), z) : R(d) ? (e.consume(d), I) : y(d);
  }
  function z(d) {
    return d === 45 || d === 46 || d === 58 || d === 95 || J(d) ? (e.consume(d), z) : D(d);
  }
  function D(d) {
    return d === 61 ? (e.consume(d), w) : R(d) ? (e.consume(d), D) : I(d);
  }
  function w(d) {
    return d === null || d === 60 || d === 61 || d === 62 || d === 96 ? t(d) : d === 34 || d === 39 ? (e.consume(d), u = d, _) : R(d) ? (e.consume(d), w) : V(d);
  }
  function _(d) {
    return d === u ? (e.consume(d), u = null, B) : d === null || L(d) ? t(d) : (e.consume(d), _);
  }
  function V(d) {
    return d === null || d === 34 || d === 39 || d === 47 || d === 60 || d === 61 || d === 62 || d === 96 || $(d) ? D(d) : (e.consume(d), V);
  }
  function B(d) {
    return d === 47 || d === 62 || R(d) ? I(d) : t(d);
  }
  function y(d) {
    return d === 62 ? (e.consume(d), P) : t(d);
  }
  function P(d) {
    return d === null || L(d) ? v(d) : R(d) ? (e.consume(d), P) : t(d);
  }
  function v(d) {
    return d === 45 && i === 2 ? (e.consume(d), G) : d === 60 && i === 1 ? (e.consume(d), Q) : d === 62 && i === 4 ? (e.consume(d), ae) : d === 63 && i === 3 ? (e.consume(d), m) : d === 93 && i === 5 ? (e.consume(d), pe) : L(d) && (i === 6 || i === 7) ? (e.exit("htmlFlowData"), e.check(Yo, me, H)(d)) : d === null || L(d) ? (e.exit("htmlFlowData"), H(d)) : (e.consume(d), v);
  }
  function H(d) {
    return e.check(Qo, W, me)(d);
  }
  function W(d) {
    return e.enter("lineEnding"), e.consume(d), e.exit("lineEnding"), j;
  }
  function j(d) {
    return d === null || L(d) ? H(d) : (e.enter("htmlFlowData"), v(d));
  }
  function G(d) {
    return d === 45 ? (e.consume(d), m) : v(d);
  }
  function Q(d) {
    return d === 47 ? (e.consume(d), l = "", oe) : v(d);
  }
  function oe(d) {
    if (d === 62) {
      const ue = l.toLowerCase();
      return Lt.includes(ue) ? (e.consume(d), ae) : v(d);
    }
    return Z(d) && l.length < 8 ? (e.consume(d), l += String.fromCharCode(d), oe) : v(d);
  }
  function pe(d) {
    return d === 93 ? (e.consume(d), m) : v(d);
  }
  function m(d) {
    return d === 62 ? (e.consume(d), ae) : d === 45 && i === 2 ? (e.consume(d), m) : v(d);
  }
  function ae(d) {
    return d === null || L(d) ? (e.exit("htmlFlowData"), me(d)) : (e.consume(d), ae);
  }
  function me(d) {
    return e.exit("htmlFlow"), n(d);
  }
}
function Jo(e, n, t) {
  const r = this;
  return i;
  function i(l) {
    return L(l) ? (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), o) : t(l);
  }
  function o(l) {
    return r.parser.lazy[r.now().line] ? t(l) : n(l);
  }
}
function Ko(e, n, t) {
  return r;
  function r(i) {
    return e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), e.attempt(Ye, n, t);
  }
}
const Zo = {
  name: "htmlText",
  tokenize: ea
};
function ea(e, n, t) {
  const r = this;
  let i, o, l;
  return a;
  function a(m) {
    return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(m), u;
  }
  function u(m) {
    return m === 33 ? (e.consume(m), s) : m === 47 ? (e.consume(m), D) : m === 63 ? (e.consume(m), I) : Z(m) ? (e.consume(m), V) : t(m);
  }
  function s(m) {
    return m === 45 ? (e.consume(m), f) : m === 91 ? (e.consume(m), o = 0, g) : Z(m) ? (e.consume(m), C) : t(m);
  }
  function f(m) {
    return m === 45 ? (e.consume(m), h) : t(m);
  }
  function c(m) {
    return m === null ? t(m) : m === 45 ? (e.consume(m), p) : L(m) ? (l = c, Q(m)) : (e.consume(m), c);
  }
  function p(m) {
    return m === 45 ? (e.consume(m), h) : c(m);
  }
  function h(m) {
    return m === 62 ? G(m) : m === 45 ? p(m) : c(m);
  }
  function g(m) {
    const ae = "CDATA[";
    return m === ae.charCodeAt(o++) ? (e.consume(m), o === ae.length ? x : g) : t(m);
  }
  function x(m) {
    return m === null ? t(m) : m === 93 ? (e.consume(m), S) : L(m) ? (l = x, Q(m)) : (e.consume(m), x);
  }
  function S(m) {
    return m === 93 ? (e.consume(m), k) : x(m);
  }
  function k(m) {
    return m === 62 ? G(m) : m === 93 ? (e.consume(m), k) : x(m);
  }
  function C(m) {
    return m === null || m === 62 ? G(m) : L(m) ? (l = C, Q(m)) : (e.consume(m), C);
  }
  function I(m) {
    return m === null ? t(m) : m === 63 ? (e.consume(m), z) : L(m) ? (l = I, Q(m)) : (e.consume(m), I);
  }
  function z(m) {
    return m === 62 ? G(m) : I(m);
  }
  function D(m) {
    return Z(m) ? (e.consume(m), w) : t(m);
  }
  function w(m) {
    return m === 45 || J(m) ? (e.consume(m), w) : _(m);
  }
  function _(m) {
    return L(m) ? (l = _, Q(m)) : R(m) ? (e.consume(m), _) : G(m);
  }
  function V(m) {
    return m === 45 || J(m) ? (e.consume(m), V) : m === 47 || m === 62 || $(m) ? B(m) : t(m);
  }
  function B(m) {
    return m === 47 ? (e.consume(m), G) : m === 58 || m === 95 || Z(m) ? (e.consume(m), y) : L(m) ? (l = B, Q(m)) : R(m) ? (e.consume(m), B) : G(m);
  }
  function y(m) {
    return m === 45 || m === 46 || m === 58 || m === 95 || J(m) ? (e.consume(m), y) : P(m);
  }
  function P(m) {
    return m === 61 ? (e.consume(m), v) : L(m) ? (l = P, Q(m)) : R(m) ? (e.consume(m), P) : B(m);
  }
  function v(m) {
    return m === null || m === 60 || m === 61 || m === 62 || m === 96 ? t(m) : m === 34 || m === 39 ? (e.consume(m), i = m, H) : L(m) ? (l = v, Q(m)) : R(m) ? (e.consume(m), v) : (e.consume(m), W);
  }
  function H(m) {
    return m === i ? (e.consume(m), i = void 0, j) : m === null ? t(m) : L(m) ? (l = H, Q(m)) : (e.consume(m), H);
  }
  function W(m) {
    return m === null || m === 34 || m === 39 || m === 60 || m === 61 || m === 96 ? t(m) : m === 47 || m === 62 || $(m) ? B(m) : (e.consume(m), W);
  }
  function j(m) {
    return m === 47 || m === 62 || $(m) ? B(m) : t(m);
  }
  function G(m) {
    return m === 62 ? (e.consume(m), e.exit("htmlTextData"), e.exit("htmlText"), n) : t(m);
  }
  function Q(m) {
    return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(m), e.exit("lineEnding"), oe;
  }
  function oe(m) {
    return R(m) ? N(e, pe, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(m) : pe(m);
  }
  function pe(m) {
    return e.enter("htmlTextData"), l(m);
  }
}
const Qn = {
  name: "labelEnd",
  tokenize: oa,
  resolveTo: la,
  resolveAll: ia
}, na = {
  tokenize: aa
}, ta = {
  tokenize: ua
}, ra = {
  tokenize: sa
};
function ia(e) {
  let n = -1;
  for (; ++n < e.length; ) {
    const t = e[n][1];
    (t.type === "labelImage" || t.type === "labelLink" || t.type === "labelEnd") && (e.splice(n + 1, t.type === "labelImage" ? 4 : 2), t.type = "data", n++);
  }
  return e;
}
function la(e, n) {
  let t = e.length, r = 0, i, o, l, a;
  for (; t--; )
    if (i = e[t][1], o) {
      if (i.type === "link" || i.type === "labelLink" && i._inactive)
        break;
      e[t][0] === "enter" && i.type === "labelLink" && (i._inactive = !0);
    } else if (l) {
      if (e[t][0] === "enter" && (i.type === "labelImage" || i.type === "labelLink") && !i._balanced && (o = t, i.type !== "labelLink")) {
        r = 2;
        break;
      }
    } else i.type === "labelEnd" && (l = t);
  const u = {
    type: e[o][1].type === "labelLink" ? "link" : "image",
    start: Object.assign({}, e[o][1].start),
    end: Object.assign({}, e[e.length - 1][1].end)
  }, s = {
    type: "label",
    start: Object.assign({}, e[o][1].start),
    end: Object.assign({}, e[l][1].end)
  }, f = {
    type: "labelText",
    start: Object.assign({}, e[o + r + 2][1].end),
    end: Object.assign({}, e[l - 2][1].start)
  };
  return a = [["enter", u, n], ["enter", s, n]], a = re(a, e.slice(o + 1, o + r + 3)), a = re(a, [["enter", f, n]]), a = re(a, sn(n.parser.constructs.insideSpan.null, e.slice(o + r + 4, l - 3), n)), a = re(a, [["exit", f, n], e[l - 2], e[l - 1], ["exit", s, n]]), a = re(a, e.slice(l + 1)), a = re(a, [["exit", u, n]]), ie(e, o, e.length, a), e;
}
function oa(e, n, t) {
  const r = this;
  let i = r.events.length, o, l;
  for (; i--; )
    if ((r.events[i][1].type === "labelImage" || r.events[i][1].type === "labelLink") && !r.events[i][1]._balanced) {
      o = r.events[i][1];
      break;
    }
  return a;
  function a(p) {
    return o ? o._inactive ? c(p) : (l = r.parser.defined.includes(ce(r.sliceSerialize({
      start: o.end,
      end: r.now()
    }))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(p), e.exit("labelMarker"), e.exit("labelEnd"), u) : t(p);
  }
  function u(p) {
    return p === 40 ? e.attempt(na, f, l ? f : c)(p) : p === 91 ? e.attempt(ta, f, l ? s : c)(p) : l ? f(p) : c(p);
  }
  function s(p) {
    return e.attempt(ra, f, c)(p);
  }
  function f(p) {
    return n(p);
  }
  function c(p) {
    return o._balanced = !0, t(p);
  }
}
function aa(e, n, t) {
  return r;
  function r(c) {
    return e.enter("resource"), e.enter("resourceMarker"), e.consume(c), e.exit("resourceMarker"), i;
  }
  function i(c) {
    return $(c) ? qe(e, o)(c) : o(c);
  }
  function o(c) {
    return c === 41 ? f(c) : Dr(e, l, a, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(c);
  }
  function l(c) {
    return $(c) ? qe(e, u)(c) : f(c);
  }
  function a(c) {
    return t(c);
  }
  function u(c) {
    return c === 34 || c === 39 || c === 40 ? Or(e, s, t, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(c) : f(c);
  }
  function s(c) {
    return $(c) ? qe(e, f)(c) : f(c);
  }
  function f(c) {
    return c === 41 ? (e.enter("resourceMarker"), e.consume(c), e.exit("resourceMarker"), e.exit("resource"), n) : t(c);
  }
}
function ua(e, n, t) {
  const r = this;
  return i;
  function i(a) {
    return Fr.call(r, e, o, l, "reference", "referenceMarker", "referenceString")(a);
  }
  function o(a) {
    return r.parser.defined.includes(ce(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? n(a) : t(a);
  }
  function l(a) {
    return t(a);
  }
}
function sa(e, n, t) {
  return r;
  function r(o) {
    return e.enter("reference"), e.enter("referenceMarker"), e.consume(o), e.exit("referenceMarker"), i;
  }
  function i(o) {
    return o === 93 ? (e.enter("referenceMarker"), e.consume(o), e.exit("referenceMarker"), e.exit("reference"), n) : t(o);
  }
}
const ca = {
  name: "labelStartImage",
  tokenize: fa,
  resolveAll: Qn.resolveAll
};
function fa(e, n, t) {
  const r = this;
  return i;
  function i(a) {
    return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(a), e.exit("labelImageMarker"), o;
  }
  function o(a) {
    return a === 91 ? (e.enter("labelMarker"), e.consume(a), e.exit("labelMarker"), e.exit("labelImage"), l) : t(a);
  }
  function l(a) {
    return a === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? t(a) : n(a);
  }
}
const ha = {
  name: "labelStartLink",
  tokenize: pa,
  resolveAll: Qn.resolveAll
};
function pa(e, n, t) {
  const r = this;
  return i;
  function i(l) {
    return e.enter("labelLink"), e.enter("labelMarker"), e.consume(l), e.exit("labelMarker"), e.exit("labelLink"), o;
  }
  function o(l) {
    return l === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? t(l) : n(l);
  }
}
const yn = {
  name: "lineEnding",
  tokenize: ma
};
function ma(e, n) {
  return t;
  function t(r) {
    return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), N(e, n, "linePrefix");
  }
}
const en = {
  name: "thematicBreak",
  tokenize: ga
};
function ga(e, n, t) {
  let r = 0, i;
  return o;
  function o(s) {
    return e.enter("thematicBreak"), l(s);
  }
  function l(s) {
    return i = s, a(s);
  }
  function a(s) {
    return s === i ? (e.enter("thematicBreakSequence"), u(s)) : r >= 3 && (s === null || L(s)) ? (e.exit("thematicBreak"), n(s)) : t(s);
  }
  function u(s) {
    return s === i ? (e.consume(s), r++, u) : (e.exit("thematicBreakSequence"), R(s) ? N(e, a, "whitespace")(s) : a(s));
  }
}
const ee = {
  name: "list",
  tokenize: xa,
  continuation: {
    tokenize: ka
  },
  exit: wa
}, da = {
  tokenize: Sa,
  partial: !0
}, ya = {
  tokenize: ba,
  partial: !0
};
function xa(e, n, t) {
  const r = this, i = r.events[r.events.length - 1];
  let o = i && i[1].type === "linePrefix" ? i[2].sliceSerialize(i[1], !0).length : 0, l = 0;
  return a;
  function a(h) {
    const g = r.containerState.type || (h === 42 || h === 43 || h === 45 ? "listUnordered" : "listOrdered");
    if (g === "listUnordered" ? !r.containerState.marker || h === r.containerState.marker : Dn(h)) {
      if (r.containerState.type || (r.containerState.type = g, e.enter(g, {
        _container: !0
      })), g === "listUnordered")
        return e.enter("listItemPrefix"), h === 42 || h === 45 ? e.check(en, t, s)(h) : s(h);
      if (!r.interrupt || h === 49)
        return e.enter("listItemPrefix"), e.enter("listItemValue"), u(h);
    }
    return t(h);
  }
  function u(h) {
    return Dn(h) && ++l < 10 ? (e.consume(h), u) : (!r.interrupt || l < 2) && (r.containerState.marker ? h === r.containerState.marker : h === 41 || h === 46) ? (e.exit("listItemValue"), s(h)) : t(h);
  }
  function s(h) {
    return e.enter("listItemMarker"), e.consume(h), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || h, e.check(
      Ye,
      // Can’t be empty when interrupting.
      r.interrupt ? t : f,
      e.attempt(da, p, c)
    );
  }
  function f(h) {
    return r.containerState.initialBlankLine = !0, o++, p(h);
  }
  function c(h) {
    return R(h) ? (e.enter("listItemPrefixWhitespace"), e.consume(h), e.exit("listItemPrefixWhitespace"), p) : t(h);
  }
  function p(h) {
    return r.containerState.size = o + r.sliceSerialize(e.exit("listItemPrefix"), !0).length, n(h);
  }
}
function ka(e, n, t) {
  const r = this;
  return r.containerState._closeFlow = void 0, e.check(Ye, i, o);
  function i(a) {
    return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, N(e, n, "listItemIndent", r.containerState.size + 1)(a);
  }
  function o(a) {
    return r.containerState.furtherBlankLines || !R(a) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, l(a)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(ya, n, l)(a));
  }
  function l(a) {
    return r.containerState._closeFlow = !0, r.interrupt = void 0, N(e, e.attempt(ee, n, t), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(a);
  }
}
function ba(e, n, t) {
  const r = this;
  return N(e, i, "listItemIndent", r.containerState.size + 1);
  function i(o) {
    const l = r.events[r.events.length - 1];
    return l && l[1].type === "listItemIndent" && l[2].sliceSerialize(l[1], !0).length === r.containerState.size ? n(o) : t(o);
  }
}
function wa(e) {
  e.exit(this.containerState.type);
}
function Sa(e, n, t) {
  const r = this;
  return N(e, i, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
  function i(o) {
    const l = r.events[r.events.length - 1];
    return !R(o) && l && l[1].type === "listItemPrefixWhitespace" ? n(o) : t(o);
  }
}
const zt = {
  name: "setextUnderline",
  tokenize: Ea,
  resolveTo: Ca
};
function Ca(e, n) {
  let t = e.length, r, i, o;
  for (; t--; )
    if (e[t][0] === "enter") {
      if (e[t][1].type === "content") {
        r = t;
        break;
      }
      e[t][1].type === "paragraph" && (i = t);
    } else
      e[t][1].type === "content" && e.splice(t, 1), !o && e[t][1].type === "definition" && (o = t);
  const l = {
    type: "setextHeading",
    start: Object.assign({}, e[i][1].start),
    end: Object.assign({}, e[e.length - 1][1].end)
  };
  return e[i][1].type = "setextHeadingText", o ? (e.splice(i, 0, ["enter", l, n]), e.splice(o + 1, 0, ["exit", e[r][1], n]), e[r][1].end = Object.assign({}, e[o][1].end)) : e[r][1] = l, e.push(["exit", l, n]), e;
}
function Ea(e, n, t) {
  const r = this;
  let i;
  return o;
  function o(s) {
    let f = r.events.length, c;
    for (; f--; )
      if (r.events[f][1].type !== "lineEnding" && r.events[f][1].type !== "linePrefix" && r.events[f][1].type !== "content") {
        c = r.events[f][1].type === "paragraph";
        break;
      }
    return !r.parser.lazy[r.now().line] && (r.interrupt || c) ? (e.enter("setextHeadingLine"), i = s, l(s)) : t(s);
  }
  function l(s) {
    return e.enter("setextHeadingLineSequence"), a(s);
  }
  function a(s) {
    return s === i ? (e.consume(s), a) : (e.exit("setextHeadingLineSequence"), R(s) ? N(e, u, "lineSuffix")(s) : u(s));
  }
  function u(s) {
    return s === null || L(s) ? (e.exit("setextHeadingLine"), n(s)) : t(s);
  }
}
const Ia = {
  tokenize: Ta
};
function Ta(e) {
  const n = this, t = e.attempt(
    // Try to parse a blank line.
    Ye,
    r,
    // Try to parse initial flow (essentially, only code).
    e.attempt(
      this.parser.constructs.flowInitial,
      i,
      N(
        e,
        e.attempt(
          this.parser.constructs.flow,
          i,
          e.attempt(zo, i)
        ),
        "linePrefix"
      )
    )
  );
  return t;
  function r(o) {
    if (o === null) {
      e.consume(o);
      return;
    }
    return e.enter("lineEndingBlank"), e.consume(o), e.exit("lineEndingBlank"), n.currentConstruct = void 0, t;
  }
  function i(o) {
    if (o === null) {
      e.consume(o);
      return;
    }
    return e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), n.currentConstruct = void 0, t;
  }
}
const Aa = {
  resolveAll: _r()
}, Pa = Rr("string"), va = Rr("text");
function Rr(e) {
  return {
    tokenize: n,
    resolveAll: _r(
      e === "text" ? La : void 0
    )
  };
  function n(t) {
    const r = this, i = this.parser.constructs[e], o = t.attempt(i, l, a);
    return l;
    function l(f) {
      return s(f) ? o(f) : a(f);
    }
    function a(f) {
      if (f === null) {
        t.consume(f);
        return;
      }
      return t.enter("data"), t.consume(f), u;
    }
    function u(f) {
      return s(f) ? (t.exit("data"), o(f)) : (t.consume(f), u);
    }
    function s(f) {
      if (f === null)
        return !0;
      const c = i[f];
      let p = -1;
      if (c)
        for (; ++p < c.length; ) {
          const h = c[p];
          if (!h.previous || h.previous.call(r, r.previous))
            return !0;
        }
      return !1;
    }
  }
}
function _r(e) {
  return n;
  function n(t, r) {
    let i = -1, o;
    for (; ++i <= t.length; )
      o === void 0 ? t[i] && t[i][1].type === "data" && (o = i, i++) : (!t[i] || t[i][1].type !== "data") && (i !== o + 2 && (t[o][1].end = t[i - 1][1].end, t.splice(o + 2, i - o - 2), i = o + 2), o = void 0);
    return e ? e(t, r) : t;
  }
}
function La(e, n) {
  let t = 0;
  for (; ++t <= e.length; )
    if ((t === e.length || e[t][1].type === "lineEnding") && e[t - 1][1].type === "data") {
      const r = e[t - 1][1], i = n.sliceStream(r);
      let o = i.length, l = -1, a = 0, u;
      for (; o--; ) {
        const s = i[o];
        if (typeof s == "string") {
          for (l = s.length; s.charCodeAt(l - 1) === 32; )
            a++, l--;
          if (l) break;
          l = -1;
        } else if (s === -2)
          u = !0, a++;
        else if (s !== -1) {
          o++;
          break;
        }
      }
      if (a) {
        const s = {
          type: t === e.length || u || a < 2 ? "lineSuffix" : "hardBreakTrailing",
          start: {
            line: r.end.line,
            column: r.end.column - a,
            offset: r.end.offset - a,
            _index: r.start._index + o,
            _bufferIndex: o ? l : r.start._bufferIndex + l
          },
          end: Object.assign({}, r.end)
        };
        r.end = Object.assign({}, s.start), r.start.offset === r.end.offset ? Object.assign(r, s) : (e.splice(
          t,
          0,
          ["enter", s, n],
          ["exit", s, n]
        ), t += 2);
      }
      t++;
    }
  return e;
}
function za(e, n, t) {
  let r = Object.assign(
    t ? Object.assign({}, t) : {
      line: 1,
      column: 1,
      offset: 0
    },
    {
      _index: 0,
      _bufferIndex: -1
    }
  );
  const i = {}, o = [];
  let l = [], a = [];
  const u = {
    consume: C,
    enter: I,
    exit: z,
    attempt: _(D),
    check: _(w),
    interrupt: _(w, {
      interrupt: !0
    })
  }, s = {
    previous: null,
    code: null,
    containerState: {},
    events: [],
    parser: e,
    sliceStream: h,
    sliceSerialize: p,
    now: g,
    defineSkip: x,
    write: c
  };
  let f = n.tokenize.call(s, u);
  return n.resolveAll && o.push(n), s;
  function c(P) {
    return l = re(l, P), S(), l[l.length - 1] !== null ? [] : (V(n, 0), s.events = sn(o, s.events, s), s.events);
  }
  function p(P, v) {
    return Fa(h(P), v);
  }
  function h(P) {
    return Da(l, P);
  }
  function g() {
    const { line: P, column: v, offset: H, _index: W, _bufferIndex: j } = r;
    return {
      line: P,
      column: v,
      offset: H,
      _index: W,
      _bufferIndex: j
    };
  }
  function x(P) {
    i[P.line] = P.column, y();
  }
  function S() {
    let P;
    for (; r._index < l.length; ) {
      const v = l[r._index];
      if (typeof v == "string")
        for (P = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === P && r._bufferIndex < v.length; )
          k(v.charCodeAt(r._bufferIndex));
      else
        k(v);
    }
  }
  function k(P) {
    f = f(P);
  }
  function C(P) {
    L(P) ? (r.line++, r.column = 1, r.offset += P === -3 ? 2 : 1, y()) : P !== -1 && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === l[r._index].length && (r._bufferIndex = -1, r._index++)), s.previous = P;
  }
  function I(P, v) {
    const H = v || {};
    return H.type = P, H.start = g(), s.events.push(["enter", H, s]), a.push(H), H;
  }
  function z(P) {
    const v = a.pop();
    return v.end = g(), s.events.push(["exit", v, s]), v;
  }
  function D(P, v) {
    V(P, v.from);
  }
  function w(P, v) {
    v.restore();
  }
  function _(P, v) {
    return H;
    function H(W, j, G) {
      let Q, oe, pe, m;
      return Array.isArray(W) ? me(W) : "tokenize" in W ? (
        // @ts-expect-error Looks like a construct.
        me([W])
      ) : ae(W);
      function ae(X) {
        return _e;
        function _e(xe) {
          const Pe = xe !== null && X[xe], ve = xe !== null && X.null, Xe = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray(Pe) ? Pe : Pe ? [Pe] : [],
            ...Array.isArray(ve) ? ve : ve ? [ve] : []
          ];
          return me(Xe)(xe);
        }
      }
      function me(X) {
        return Q = X, oe = 0, X.length === 0 ? G : d(X[oe]);
      }
      function d(X) {
        return _e;
        function _e(xe) {
          return m = B(), pe = X, X.partial || (s.currentConstruct = X), X.name && s.parser.constructs.disable.null.includes(X.name) ? Se() : X.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            v ? Object.assign(Object.create(s), v) : s,
            u,
            ue,
            Se
          )(xe);
        }
      }
      function ue(X) {
        return P(pe, m), j;
      }
      function Se(X) {
        return m.restore(), ++oe < Q.length ? d(Q[oe]) : G;
      }
    }
  }
  function V(P, v) {
    P.resolveAll && !o.includes(P) && o.push(P), P.resolve && ie(
      s.events,
      v,
      s.events.length - v,
      P.resolve(s.events.slice(v), s)
    ), P.resolveTo && (s.events = P.resolveTo(s.events, s));
  }
  function B() {
    const P = g(), v = s.previous, H = s.currentConstruct, W = s.events.length, j = Array.from(a);
    return {
      restore: G,
      from: W
    };
    function G() {
      r = P, s.previous = v, s.currentConstruct = H, s.events.length = W, a = j, y();
    }
  }
  function y() {
    r.line in i && r.column < 2 && (r.column = i[r.line], r.offset += i[r.line] - 1);
  }
}
function Da(e, n) {
  const t = n.start._index, r = n.start._bufferIndex, i = n.end._index, o = n.end._bufferIndex;
  let l;
  if (t === i)
    l = [e[t].slice(r, o)];
  else {
    if (l = e.slice(t, i), r > -1) {
      const a = l[0];
      typeof a == "string" ? l[0] = a.slice(r) : l.shift();
    }
    o > 0 && l.push(e[i].slice(0, o));
  }
  return l;
}
function Fa(e, n) {
  let t = -1;
  const r = [];
  let i;
  for (; ++t < e.length; ) {
    const o = e[t];
    let l;
    if (typeof o == "string")
      l = o;
    else
      switch (o) {
        case -5: {
          l = "\r";
          break;
        }
        case -4: {
          l = `
`;
          break;
        }
        case -3: {
          l = `\r
`;
          break;
        }
        case -2: {
          l = n ? " " : "	";
          break;
        }
        case -1: {
          if (!n && i) continue;
          l = " ";
          break;
        }
        default:
          l = String.fromCharCode(o);
      }
    i = o === -2, r.push(l);
  }
  return r.join("");
}
const Oa = {
  42: ee,
  43: ee,
  45: ee,
  48: ee,
  49: ee,
  50: ee,
  51: ee,
  52: ee,
  53: ee,
  54: ee,
  55: ee,
  56: ee,
  57: ee,
  62: Pr
}, Ra = {
  91: _o
}, _a = {
  [-2]: dn,
  [-1]: dn,
  32: dn
}, Ma = {
  35: Uo,
  42: en,
  45: [zt, en],
  60: Wo,
  61: zt,
  95: en,
  96: vt,
  126: vt
}, Na = {
  38: Lr,
  92: vr
}, ja = {
  [-5]: yn,
  [-4]: yn,
  [-3]: yn,
  33: ca,
  38: Lr,
  42: Fn,
  60: [fo, Zo],
  91: ha,
  92: [Bo, vr],
  93: Qn,
  95: Fn,
  96: Io
}, Ba = {
  null: [Fn, Aa]
}, Ha = {
  null: [42, 95]
}, Ua = {
  null: []
}, $a = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  attentionMarkers: Ha,
  contentInitial: Ra,
  disable: Ua,
  document: Oa,
  flow: Ma,
  flowInitial: _a,
  insideSpan: Ba,
  string: Na,
  text: ja
}, Symbol.toStringTag, { value: "Module" }));
function qa(e) {
  const t = (
    /** @type {FullNormalizedExtension} */
    Tr([$a, ...(e || {}).extensions || []])
  ), r = {
    defined: [],
    lazy: {},
    constructs: t,
    content: i(io),
    document: i(oo),
    flow: i(Ia),
    string: i(Pa),
    text: i(va)
  };
  return r;
  function i(o) {
    return l;
    function l(a) {
      return za(r, o, a);
    }
  }
}
function Va(e) {
  for (; !zr(e); )
    ;
  return e;
}
const Dt = /[\0\t\n\r]/g;
function Wa() {
  let e = 1, n = "", t = !0, r;
  return i;
  function i(o, l, a) {
    const u = [];
    let s, f, c, p, h;
    for (o = n + (typeof o == "string" ? o.toString() : new TextDecoder(l || void 0).decode(o)), c = 0, n = "", t && (o.charCodeAt(0) === 65279 && c++, t = void 0); c < o.length; ) {
      if (Dt.lastIndex = c, s = Dt.exec(o), p = s && s.index !== void 0 ? s.index : o.length, h = o.charCodeAt(p), !s) {
        n = o.slice(c);
        break;
      }
      if (h === 10 && c === p && r)
        u.push(-3), r = void 0;
      else
        switch (r && (u.push(-5), r = void 0), c < p && (u.push(o.slice(c, p)), e += p - c), h) {
          case 0: {
            u.push(65533), e++;
            break;
          }
          case 9: {
            for (f = Math.ceil(e / 4) * 4, u.push(-2); e++ < f; ) u.push(-1);
            break;
          }
          case 10: {
            u.push(-4), e = 1;
            break;
          }
          default:
            r = !0, e = 1;
        }
      c = p + 1;
    }
    return a && (r && u.push(-5), n && u.push(n), u.push(null)), u;
  }
}
const Ya = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function Qa(e) {
  return e.replace(Ya, Xa);
}
function Xa(e, n, t) {
  if (n)
    return n;
  if (t.charCodeAt(0) === 35) {
    const i = t.charCodeAt(1), o = i === 120 || i === 88;
    return Ar(t.slice(o ? 2 : 1), o ? 16 : 10);
  }
  return Yn(t) || e;
}
const Mr = {}.hasOwnProperty;
function Ga(e, n, t) {
  return typeof n != "string" && (t = n, n = void 0), Ja(t)(Va(qa(t).document().write(Wa()(e, n, !0))));
}
function Ja(e) {
  const n = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: o(at),
      autolinkProtocol: B,
      autolinkEmail: B,
      atxHeading: o(it),
      blockQuote: o(ve),
      characterEscape: B,
      characterReference: B,
      codeFenced: o(Xe),
      codeFencedFenceInfo: l,
      codeFencedFenceMeta: l,
      codeIndented: o(Xe, l),
      codeText: o(di, l),
      codeTextData: B,
      data: B,
      codeFlowValue: B,
      definition: o(yi),
      definitionDestinationString: l,
      definitionLabelString: l,
      definitionTitleString: l,
      emphasis: o(xi),
      hardBreakEscape: o(lt),
      hardBreakTrailing: o(lt),
      htmlFlow: o(ot, l),
      htmlFlowData: B,
      htmlText: o(ot, l),
      htmlTextData: B,
      image: o(ki),
      label: l,
      link: o(at),
      listItem: o(bi),
      listItemValue: p,
      listOrdered: o(ut, c),
      listUnordered: o(ut),
      paragraph: o(wi),
      reference: d,
      referenceString: l,
      resourceDestinationString: l,
      resourceTitleString: l,
      setextHeading: o(it),
      strong: o(Si),
      thematicBreak: o(Ei)
    },
    exit: {
      atxHeading: u(),
      atxHeadingSequence: D,
      autolink: u(),
      autolinkEmail: Pe,
      autolinkProtocol: xe,
      blockQuote: u(),
      characterEscapeValue: y,
      characterReferenceMarkerHexadecimal: Se,
      characterReferenceMarkerNumeric: Se,
      characterReferenceValue: X,
      characterReference: _e,
      codeFenced: u(S),
      codeFencedFence: x,
      codeFencedFenceInfo: h,
      codeFencedFenceMeta: g,
      codeFlowValue: y,
      codeIndented: u(k),
      codeText: u(j),
      codeTextData: y,
      data: y,
      definition: u(),
      definitionDestinationString: z,
      definitionLabelString: C,
      definitionTitleString: I,
      emphasis: u(),
      hardBreakEscape: u(v),
      hardBreakTrailing: u(v),
      htmlFlow: u(H),
      htmlFlowData: y,
      htmlText: u(W),
      htmlTextData: y,
      image: u(Q),
      label: pe,
      labelText: oe,
      lineEnding: P,
      link: u(G),
      listItem: u(),
      listOrdered: u(),
      listUnordered: u(),
      paragraph: u(),
      referenceString: ue,
      resourceDestinationString: m,
      resourceTitleString: ae,
      resource: me,
      setextHeading: u(V),
      setextHeadingLineSequence: _,
      setextHeadingText: w,
      strong: u(),
      thematicBreak: u()
    }
  };
  Nr(n, (e || {}).mdastExtensions || []);
  const t = {};
  return r;
  function r(b) {
    let T = {
      type: "root",
      children: []
    };
    const F = {
      stack: [T],
      tokenStack: [],
      config: n,
      enter: a,
      exit: s,
      buffer: l,
      resume: f,
      data: t
    }, M = [];
    let U = -1;
    for (; ++U < b.length; )
      if (b[U][1].type === "listOrdered" || b[U][1].type === "listUnordered")
        if (b[U][0] === "enter")
          M.push(U);
        else {
          const se = M.pop();
          U = i(b, se, U);
        }
    for (U = -1; ++U < b.length; ) {
      const se = n[b[U][0]];
      Mr.call(se, b[U][1].type) && se[b[U][1].type].call(Object.assign({
        sliceSerialize: b[U][2].sliceSerialize
      }, F), b[U][1]);
    }
    if (F.tokenStack.length > 0) {
      const se = F.tokenStack[F.tokenStack.length - 1];
      (se[1] || Ft).call(F, void 0, se[0]);
    }
    for (T.position = {
      start: ke(b.length > 0 ? b[0][1].start : {
        line: 1,
        column: 1,
        offset: 0
      }),
      end: ke(b.length > 0 ? b[b.length - 2][1].end : {
        line: 1,
        column: 1,
        offset: 0
      })
    }, U = -1; ++U < n.transforms.length; )
      T = n.transforms[U](T) || T;
    return T;
  }
  function i(b, T, F) {
    let M = T - 1, U = -1, se = !1, Ce, ge, Me, Ne;
    for (; ++M <= F; ) {
      const ne = b[M];
      switch (ne[1].type) {
        case "listUnordered":
        case "listOrdered":
        case "blockQuote": {
          ne[0] === "enter" ? U++ : U--, Ne = void 0;
          break;
        }
        case "lineEndingBlank": {
          ne[0] === "enter" && (Ce && !Ne && !U && !Me && (Me = M), Ne = void 0);
          break;
        }
        case "linePrefix":
        case "listItemValue":
        case "listItemMarker":
        case "listItemPrefix":
        case "listItemPrefixWhitespace":
          break;
        default:
          Ne = void 0;
      }
      if (!U && ne[0] === "enter" && ne[1].type === "listItemPrefix" || U === -1 && ne[0] === "exit" && (ne[1].type === "listUnordered" || ne[1].type === "listOrdered")) {
        if (Ce) {
          let Le = M;
          for (ge = void 0; Le--; ) {
            const de = b[Le];
            if (de[1].type === "lineEnding" || de[1].type === "lineEndingBlank") {
              if (de[0] === "exit") continue;
              ge && (b[ge][1].type = "lineEndingBlank", se = !0), de[1].type = "lineEnding", ge = Le;
            } else if (!(de[1].type === "linePrefix" || de[1].type === "blockQuotePrefix" || de[1].type === "blockQuotePrefixWhitespace" || de[1].type === "blockQuoteMarker" || de[1].type === "listItemIndent")) break;
          }
          Me && (!ge || Me < ge) && (Ce._spread = !0), Ce.end = Object.assign({}, ge ? b[ge][1].start : ne[1].end), b.splice(ge || M, 0, ["exit", Ce, ne[2]]), M++, F++;
        }
        if (ne[1].type === "listItemPrefix") {
          const Le = {
            type: "listItem",
            _spread: !1,
            start: Object.assign({}, ne[1].start),
            // @ts-expect-error: we’ll add `end` in a second.
            end: void 0
          };
          Ce = Le, b.splice(M, 0, ["enter", Le, ne[2]]), M++, F++, Me = void 0, Ne = !0;
        }
      }
    }
    return b[T][1]._spread = se, F;
  }
  function o(b, T) {
    return F;
    function F(M) {
      a.call(this, b(M), M), T && T.call(this, M);
    }
  }
  function l() {
    this.stack.push({
      type: "fragment",
      children: []
    });
  }
  function a(b, T, F) {
    this.stack[this.stack.length - 1].children.push(b), this.stack.push(b), this.tokenStack.push([T, F]), b.position = {
      start: ke(T.start),
      // @ts-expect-error: `end` will be patched later.
      end: void 0
    };
  }
  function u(b) {
    return T;
    function T(F) {
      b && b.call(this, F), s.call(this, F);
    }
  }
  function s(b, T) {
    const F = this.stack.pop(), M = this.tokenStack.pop();
    if (M)
      M[0].type !== b.type && (T ? T.call(this, b, M[0]) : (M[1] || Ft).call(this, b, M[0]));
    else throw new Error("Cannot close `" + b.type + "` (" + $e({
      start: b.start,
      end: b.end
    }) + "): it’s not open");
    F.position.end = ke(b.end);
  }
  function f() {
    return Wn(this.stack.pop());
  }
  function c() {
    this.data.expectingFirstListItemValue = !0;
  }
  function p(b) {
    if (this.data.expectingFirstListItemValue) {
      const T = this.stack[this.stack.length - 2];
      T.start = Number.parseInt(this.sliceSerialize(b), 10), this.data.expectingFirstListItemValue = void 0;
    }
  }
  function h() {
    const b = this.resume(), T = this.stack[this.stack.length - 1];
    T.lang = b;
  }
  function g() {
    const b = this.resume(), T = this.stack[this.stack.length - 1];
    T.meta = b;
  }
  function x() {
    this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = !0);
  }
  function S() {
    const b = this.resume(), T = this.stack[this.stack.length - 1];
    T.value = b.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0;
  }
  function k() {
    const b = this.resume(), T = this.stack[this.stack.length - 1];
    T.value = b.replace(/(\r?\n|\r)$/g, "");
  }
  function C(b) {
    const T = this.resume(), F = this.stack[this.stack.length - 1];
    F.label = T, F.identifier = ce(this.sliceSerialize(b)).toLowerCase();
  }
  function I() {
    const b = this.resume(), T = this.stack[this.stack.length - 1];
    T.title = b;
  }
  function z() {
    const b = this.resume(), T = this.stack[this.stack.length - 1];
    T.url = b;
  }
  function D(b) {
    const T = this.stack[this.stack.length - 1];
    if (!T.depth) {
      const F = this.sliceSerialize(b).length;
      T.depth = F;
    }
  }
  function w() {
    this.data.setextHeadingSlurpLineEnding = !0;
  }
  function _(b) {
    const T = this.stack[this.stack.length - 1];
    T.depth = this.sliceSerialize(b).codePointAt(0) === 61 ? 1 : 2;
  }
  function V() {
    this.data.setextHeadingSlurpLineEnding = void 0;
  }
  function B(b) {
    const F = this.stack[this.stack.length - 1].children;
    let M = F[F.length - 1];
    (!M || M.type !== "text") && (M = Ci(), M.position = {
      start: ke(b.start),
      // @ts-expect-error: we’ll add `end` later.
      end: void 0
    }, F.push(M)), this.stack.push(M);
  }
  function y(b) {
    const T = this.stack.pop();
    T.value += this.sliceSerialize(b), T.position.end = ke(b.end);
  }
  function P(b) {
    const T = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const F = T.children[T.children.length - 1];
      F.position.end = ke(b.end), this.data.atHardBreak = void 0;
      return;
    }
    !this.data.setextHeadingSlurpLineEnding && n.canContainEols.includes(T.type) && (B.call(this, b), y.call(this, b));
  }
  function v() {
    this.data.atHardBreak = !0;
  }
  function H() {
    const b = this.resume(), T = this.stack[this.stack.length - 1];
    T.value = b;
  }
  function W() {
    const b = this.resume(), T = this.stack[this.stack.length - 1];
    T.value = b;
  }
  function j() {
    const b = this.resume(), T = this.stack[this.stack.length - 1];
    T.value = b;
  }
  function G() {
    const b = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const T = this.data.referenceType || "shortcut";
      b.type += "Reference", b.referenceType = T, delete b.url, delete b.title;
    } else
      delete b.identifier, delete b.label;
    this.data.referenceType = void 0;
  }
  function Q() {
    const b = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const T = this.data.referenceType || "shortcut";
      b.type += "Reference", b.referenceType = T, delete b.url, delete b.title;
    } else
      delete b.identifier, delete b.label;
    this.data.referenceType = void 0;
  }
  function oe(b) {
    const T = this.sliceSerialize(b), F = this.stack[this.stack.length - 2];
    F.label = Qa(T), F.identifier = ce(T).toLowerCase();
  }
  function pe() {
    const b = this.stack[this.stack.length - 1], T = this.resume(), F = this.stack[this.stack.length - 1];
    if (this.data.inReference = !0, F.type === "link") {
      const M = b.children;
      F.children = M;
    } else
      F.alt = T;
  }
  function m() {
    const b = this.resume(), T = this.stack[this.stack.length - 1];
    T.url = b;
  }
  function ae() {
    const b = this.resume(), T = this.stack[this.stack.length - 1];
    T.title = b;
  }
  function me() {
    this.data.inReference = void 0;
  }
  function d() {
    this.data.referenceType = "collapsed";
  }
  function ue(b) {
    const T = this.resume(), F = this.stack[this.stack.length - 1];
    F.label = T, F.identifier = ce(this.sliceSerialize(b)).toLowerCase(), this.data.referenceType = "full";
  }
  function Se(b) {
    this.data.characterReferenceType = b.type;
  }
  function X(b) {
    const T = this.sliceSerialize(b), F = this.data.characterReferenceType;
    let M;
    F ? (M = Ar(T, F === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : M = Yn(T);
    const U = this.stack[this.stack.length - 1];
    U.value += M;
  }
  function _e(b) {
    const T = this.stack.pop();
    T.position.end = ke(b.end);
  }
  function xe(b) {
    y.call(this, b);
    const T = this.stack[this.stack.length - 1];
    T.url = this.sliceSerialize(b);
  }
  function Pe(b) {
    y.call(this, b);
    const T = this.stack[this.stack.length - 1];
    T.url = "mailto:" + this.sliceSerialize(b);
  }
  function ve() {
    return {
      type: "blockquote",
      children: []
    };
  }
  function Xe() {
    return {
      type: "code",
      lang: null,
      meta: null,
      value: ""
    };
  }
  function di() {
    return {
      type: "inlineCode",
      value: ""
    };
  }
  function yi() {
    return {
      type: "definition",
      identifier: "",
      label: null,
      title: null,
      url: ""
    };
  }
  function xi() {
    return {
      type: "emphasis",
      children: []
    };
  }
  function it() {
    return {
      type: "heading",
      // @ts-expect-error `depth` will be set later.
      depth: 0,
      children: []
    };
  }
  function lt() {
    return {
      type: "break"
    };
  }
  function ot() {
    return {
      type: "html",
      value: ""
    };
  }
  function ki() {
    return {
      type: "image",
      title: null,
      url: "",
      alt: null
    };
  }
  function at() {
    return {
      type: "link",
      title: null,
      url: "",
      children: []
    };
  }
  function ut(b) {
    return {
      type: "list",
      ordered: b.type === "listOrdered",
      start: null,
      spread: b._spread,
      children: []
    };
  }
  function bi(b) {
    return {
      type: "listItem",
      spread: b._spread,
      checked: null,
      children: []
    };
  }
  function wi() {
    return {
      type: "paragraph",
      children: []
    };
  }
  function Si() {
    return {
      type: "strong",
      children: []
    };
  }
  function Ci() {
    return {
      type: "text",
      value: ""
    };
  }
  function Ei() {
    return {
      type: "thematicBreak"
    };
  }
}
function ke(e) {
  return {
    line: e.line,
    column: e.column,
    offset: e.offset
  };
}
function Nr(e, n) {
  let t = -1;
  for (; ++t < n.length; ) {
    const r = n[t];
    Array.isArray(r) ? Nr(e, r) : Ka(e, r);
  }
}
function Ka(e, n) {
  let t;
  for (t in n)
    if (Mr.call(n, t))
      switch (t) {
        case "canContainEols": {
          const r = n[t];
          r && e[t].push(...r);
          break;
        }
        case "transforms": {
          const r = n[t];
          r && e[t].push(...r);
          break;
        }
        case "enter":
        case "exit": {
          const r = n[t];
          r && Object.assign(e[t], r);
          break;
        }
      }
}
function Ft(e, n) {
  throw e ? new Error("Cannot close `" + e.type + "` (" + $e({
    start: e.start,
    end: e.end
  }) + "): a different token (`" + n.type + "`, " + $e({
    start: n.start,
    end: n.end
  }) + ") is open") : new Error("Cannot close document, a token (`" + n.type + "`, " + $e({
    start: n.start,
    end: n.end
  }) + ") is still open");
}
function Za(e) {
  const n = this;
  n.parser = t;
  function t(r) {
    return Ga(r, {
      ...n.data("settings"),
      ...e,
      // Note: these options are not in the readme.
      // The goal is for them to be set by plugins on `data` instead of being
      // passed by users.
      extensions: n.data("micromarkExtensions") || [],
      mdastExtensions: n.data("fromMarkdownExtensions") || []
    });
  }
}
function eu(e, n) {
  const t = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: e.wrap(e.all(n), !0)
  };
  return e.patch(n, t), e.applyData(n, t);
}
function nu(e, n) {
  const t = { type: "element", tagName: "br", properties: {}, children: [] };
  return e.patch(n, t), [e.applyData(n, t), { type: "text", value: `
` }];
}
function tu(e, n) {
  const t = n.value ? n.value + `
` : "", r = {};
  n.lang && (r.className = ["language-" + n.lang]);
  let i = {
    type: "element",
    tagName: "code",
    properties: r,
    children: [{ type: "text", value: t }]
  };
  return n.meta && (i.data = { meta: n.meta }), e.patch(n, i), i = e.applyData(n, i), i = { type: "element", tagName: "pre", properties: {}, children: [i] }, e.patch(n, i), i;
}
function ru(e, n) {
  const t = {
    type: "element",
    tagName: "del",
    properties: {},
    children: e.all(n)
  };
  return e.patch(n, t), e.applyData(n, t);
}
function iu(e, n) {
  const t = {
    type: "element",
    tagName: "em",
    properties: {},
    children: e.all(n)
  };
  return e.patch(n, t), e.applyData(n, t);
}
function lu(e, n) {
  const t = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", r = String(n.identifier).toUpperCase(), i = Re(r.toLowerCase()), o = e.footnoteOrder.indexOf(r);
  let l, a = e.footnoteCounts.get(r);
  a === void 0 ? (a = 0, e.footnoteOrder.push(r), l = e.footnoteOrder.length) : l = o + 1, a += 1, e.footnoteCounts.set(r, a);
  const u = {
    type: "element",
    tagName: "a",
    properties: {
      href: "#" + t + "fn-" + i,
      id: t + "fnref-" + i + (a > 1 ? "-" + a : ""),
      dataFootnoteRef: !0,
      ariaDescribedBy: ["footnote-label"]
    },
    children: [{ type: "text", value: String(l) }]
  };
  e.patch(n, u);
  const s = {
    type: "element",
    tagName: "sup",
    properties: {},
    children: [u]
  };
  return e.patch(n, s), e.applyData(n, s);
}
function ou(e, n) {
  const t = {
    type: "element",
    tagName: "h" + n.depth,
    properties: {},
    children: e.all(n)
  };
  return e.patch(n, t), e.applyData(n, t);
}
function au(e, n) {
  if (e.options.allowDangerousHtml) {
    const t = { type: "raw", value: n.value };
    return e.patch(n, t), e.applyData(n, t);
  }
}
function jr(e, n) {
  const t = n.referenceType;
  let r = "]";
  if (t === "collapsed" ? r += "[]" : t === "full" && (r += "[" + (n.label || n.identifier) + "]"), n.type === "imageReference")
    return [{ type: "text", value: "![" + n.alt + r }];
  const i = e.all(n), o = i[0];
  o && o.type === "text" ? o.value = "[" + o.value : i.unshift({ type: "text", value: "[" });
  const l = i[i.length - 1];
  return l && l.type === "text" ? l.value += r : i.push({ type: "text", value: r }), i;
}
function uu(e, n) {
  const t = String(n.identifier).toUpperCase(), r = e.definitionById.get(t);
  if (!r)
    return jr(e, n);
  const i = { src: Re(r.url || ""), alt: n.alt };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  const o = { type: "element", tagName: "img", properties: i, children: [] };
  return e.patch(n, o), e.applyData(n, o);
}
function su(e, n) {
  const t = { src: Re(n.url) };
  n.alt !== null && n.alt !== void 0 && (t.alt = n.alt), n.title !== null && n.title !== void 0 && (t.title = n.title);
  const r = { type: "element", tagName: "img", properties: t, children: [] };
  return e.patch(n, r), e.applyData(n, r);
}
function cu(e, n) {
  const t = { type: "text", value: n.value.replace(/\r?\n|\r/g, " ") };
  e.patch(n, t);
  const r = {
    type: "element",
    tagName: "code",
    properties: {},
    children: [t]
  };
  return e.patch(n, r), e.applyData(n, r);
}
function fu(e, n) {
  const t = String(n.identifier).toUpperCase(), r = e.definitionById.get(t);
  if (!r)
    return jr(e, n);
  const i = { href: Re(r.url || "") };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  const o = {
    type: "element",
    tagName: "a",
    properties: i,
    children: e.all(n)
  };
  return e.patch(n, o), e.applyData(n, o);
}
function hu(e, n) {
  const t = { href: Re(n.url) };
  n.title !== null && n.title !== void 0 && (t.title = n.title);
  const r = {
    type: "element",
    tagName: "a",
    properties: t,
    children: e.all(n)
  };
  return e.patch(n, r), e.applyData(n, r);
}
function pu(e, n, t) {
  const r = e.all(n), i = t ? mu(t) : Br(n), o = {}, l = [];
  if (typeof n.checked == "boolean") {
    const f = r[0];
    let c;
    f && f.type === "element" && f.tagName === "p" ? c = f : (c = { type: "element", tagName: "p", properties: {}, children: [] }, r.unshift(c)), c.children.length > 0 && c.children.unshift({ type: "text", value: " " }), c.children.unshift({
      type: "element",
      tagName: "input",
      properties: { type: "checkbox", checked: n.checked, disabled: !0 },
      children: []
    }), o.className = ["task-list-item"];
  }
  let a = -1;
  for (; ++a < r.length; ) {
    const f = r[a];
    (i || a !== 0 || f.type !== "element" || f.tagName !== "p") && l.push({ type: "text", value: `
` }), f.type === "element" && f.tagName === "p" && !i ? l.push(...f.children) : l.push(f);
  }
  const u = r[r.length - 1];
  u && (i || u.type !== "element" || u.tagName !== "p") && l.push({ type: "text", value: `
` });
  const s = { type: "element", tagName: "li", properties: o, children: l };
  return e.patch(n, s), e.applyData(n, s);
}
function mu(e) {
  let n = !1;
  if (e.type === "list") {
    n = e.spread || !1;
    const t = e.children;
    let r = -1;
    for (; !n && ++r < t.length; )
      n = Br(t[r]);
  }
  return n;
}
function Br(e) {
  const n = e.spread;
  return n ?? e.children.length > 1;
}
function gu(e, n) {
  const t = {}, r = e.all(n);
  let i = -1;
  for (typeof n.start == "number" && n.start !== 1 && (t.start = n.start); ++i < r.length; ) {
    const l = r[i];
    if (l.type === "element" && l.tagName === "li" && l.properties && Array.isArray(l.properties.className) && l.properties.className.includes("task-list-item")) {
      t.className = ["contains-task-list"];
      break;
    }
  }
  const o = {
    type: "element",
    tagName: n.ordered ? "ol" : "ul",
    properties: t,
    children: e.wrap(r, !0)
  };
  return e.patch(n, o), e.applyData(n, o);
}
function du(e, n) {
  const t = {
    type: "element",
    tagName: "p",
    properties: {},
    children: e.all(n)
  };
  return e.patch(n, t), e.applyData(n, t);
}
function yu(e, n) {
  const t = { type: "root", children: e.wrap(e.all(n)) };
  return e.patch(n, t), e.applyData(n, t);
}
function xu(e, n) {
  const t = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: e.all(n)
  };
  return e.patch(n, t), e.applyData(n, t);
}
function ku(e, n) {
  const t = e.all(n), r = t.shift(), i = [];
  if (r) {
    const l = {
      type: "element",
      tagName: "thead",
      properties: {},
      children: e.wrap([r], !0)
    };
    e.patch(n.children[0], l), i.push(l);
  }
  if (t.length > 0) {
    const l = {
      type: "element",
      tagName: "tbody",
      properties: {},
      children: e.wrap(t, !0)
    }, a = Un(n.children[1]), u = kr(n.children[n.children.length - 1]);
    a && u && (l.position = { start: a, end: u }), i.push(l);
  }
  const o = {
    type: "element",
    tagName: "table",
    properties: {},
    children: e.wrap(i, !0)
  };
  return e.patch(n, o), e.applyData(n, o);
}
function bu(e, n, t) {
  const r = t ? t.children : void 0, o = (r ? r.indexOf(n) : 1) === 0 ? "th" : "td", l = t && t.type === "table" ? t.align : void 0, a = l ? l.length : n.children.length;
  let u = -1;
  const s = [];
  for (; ++u < a; ) {
    const c = n.children[u], p = {}, h = l ? l[u] : void 0;
    h && (p.align = h);
    let g = { type: "element", tagName: o, properties: p, children: [] };
    c && (g.children = e.all(c), e.patch(c, g), g = e.applyData(c, g)), s.push(g);
  }
  const f = {
    type: "element",
    tagName: "tr",
    properties: {},
    children: e.wrap(s, !0)
  };
  return e.patch(n, f), e.applyData(n, f);
}
function wu(e, n) {
  const t = {
    type: "element",
    tagName: "td",
    // Assume body cell.
    properties: {},
    children: e.all(n)
  };
  return e.patch(n, t), e.applyData(n, t);
}
const Ot = 9, Rt = 32;
function Su(e) {
  const n = String(e), t = /\r?\n|\r/g;
  let r = t.exec(n), i = 0;
  const o = [];
  for (; r; )
    o.push(
      _t(n.slice(i, r.index), i > 0, !0),
      r[0]
    ), i = r.index + r[0].length, r = t.exec(n);
  return o.push(_t(n.slice(i), i > 0, !1)), o.join("");
}
function _t(e, n, t) {
  let r = 0, i = e.length;
  if (n) {
    let o = e.codePointAt(r);
    for (; o === Ot || o === Rt; )
      r++, o = e.codePointAt(r);
  }
  if (t) {
    let o = e.codePointAt(i - 1);
    for (; o === Ot || o === Rt; )
      i--, o = e.codePointAt(i - 1);
  }
  return i > r ? e.slice(r, i) : "";
}
function Cu(e, n) {
  const t = { type: "text", value: Su(String(n.value)) };
  return e.patch(n, t), e.applyData(n, t);
}
function Eu(e, n) {
  const t = {
    type: "element",
    tagName: "hr",
    properties: {},
    children: []
  };
  return e.patch(n, t), e.applyData(n, t);
}
const Iu = {
  blockquote: eu,
  break: nu,
  code: tu,
  delete: ru,
  emphasis: iu,
  footnoteReference: lu,
  heading: ou,
  html: au,
  imageReference: uu,
  image: su,
  inlineCode: cu,
  linkReference: fu,
  link: hu,
  listItem: pu,
  list: gu,
  paragraph: du,
  // @ts-expect-error: root is different, but hard to type.
  root: yu,
  strong: xu,
  table: ku,
  tableCell: wu,
  tableRow: bu,
  text: Cu,
  thematicBreak: Eu,
  toml: Ge,
  yaml: Ge,
  definition: Ge,
  footnoteDefinition: Ge
};
function Ge() {
}
const Hr = -1, cn = 0, ln = 1, on = 2, Xn = 3, Gn = 4, Jn = 5, Kn = 6, Ur = 7, $r = 8, Mt = typeof self == "object" ? self : globalThis, Tu = (e, n) => {
  const t = (i, o) => (e.set(o, i), i), r = (i) => {
    if (e.has(i))
      return e.get(i);
    const [o, l] = n[i];
    switch (o) {
      case cn:
      case Hr:
        return t(l, i);
      case ln: {
        const a = t([], i);
        for (const u of l)
          a.push(r(u));
        return a;
      }
      case on: {
        const a = t({}, i);
        for (const [u, s] of l)
          a[r(u)] = r(s);
        return a;
      }
      case Xn:
        return t(new Date(l), i);
      case Gn: {
        const { source: a, flags: u } = l;
        return t(new RegExp(a, u), i);
      }
      case Jn: {
        const a = t(/* @__PURE__ */ new Map(), i);
        for (const [u, s] of l)
          a.set(r(u), r(s));
        return a;
      }
      case Kn: {
        const a = t(/* @__PURE__ */ new Set(), i);
        for (const u of l)
          a.add(r(u));
        return a;
      }
      case Ur: {
        const { name: a, message: u } = l;
        return t(new Mt[a](u), i);
      }
      case $r:
        return t(BigInt(l), i);
      case "BigInt":
        return t(Object(BigInt(l)), i);
    }
    return t(new Mt[o](l), i);
  };
  return r;
}, Nt = (e) => Tu(/* @__PURE__ */ new Map(), e)(0), ze = "", { toString: Au } = {}, { keys: Pu } = Object, He = (e) => {
  const n = typeof e;
  if (n !== "object" || !e)
    return [cn, n];
  const t = Au.call(e).slice(8, -1);
  switch (t) {
    case "Array":
      return [ln, ze];
    case "Object":
      return [on, ze];
    case "Date":
      return [Xn, ze];
    case "RegExp":
      return [Gn, ze];
    case "Map":
      return [Jn, ze];
    case "Set":
      return [Kn, ze];
  }
  return t.includes("Array") ? [ln, t] : t.includes("Error") ? [Ur, t] : [on, t];
}, Je = ([e, n]) => e === cn && (n === "function" || n === "symbol"), vu = (e, n, t, r) => {
  const i = (l, a) => {
    const u = r.push(l) - 1;
    return t.set(a, u), u;
  }, o = (l) => {
    if (t.has(l))
      return t.get(l);
    let [a, u] = He(l);
    switch (a) {
      case cn: {
        let f = l;
        switch (u) {
          case "bigint":
            a = $r, f = l.toString();
            break;
          case "function":
          case "symbol":
            if (e)
              throw new TypeError("unable to serialize " + u);
            f = null;
            break;
          case "undefined":
            return i([Hr], l);
        }
        return i([a, f], l);
      }
      case ln: {
        if (u)
          return i([u, [...l]], l);
        const f = [], c = i([a, f], l);
        for (const p of l)
          f.push(o(p));
        return c;
      }
      case on: {
        if (u)
          switch (u) {
            case "BigInt":
              return i([u, l.toString()], l);
            case "Boolean":
            case "Number":
            case "String":
              return i([u, l.valueOf()], l);
          }
        if (n && "toJSON" in l)
          return o(l.toJSON());
        const f = [], c = i([a, f], l);
        for (const p of Pu(l))
          (e || !Je(He(l[p]))) && f.push([o(p), o(l[p])]);
        return c;
      }
      case Xn:
        return i([a, l.toISOString()], l);
      case Gn: {
        const { source: f, flags: c } = l;
        return i([a, { source: f, flags: c }], l);
      }
      case Jn: {
        const f = [], c = i([a, f], l);
        for (const [p, h] of l)
          (e || !(Je(He(p)) || Je(He(h)))) && f.push([o(p), o(h)]);
        return c;
      }
      case Kn: {
        const f = [], c = i([a, f], l);
        for (const p of l)
          (e || !Je(He(p))) && f.push(o(p));
        return c;
      }
    }
    const { message: s } = l;
    return i([a, { name: u, message: s }], l);
  };
  return o;
}, jt = (e, { json: n, lossy: t } = {}) => {
  const r = [];
  return vu(!(n || t), !!n, /* @__PURE__ */ new Map(), r)(e), r;
}, an = typeof structuredClone == "function" ? (
  /* c8 ignore start */
  (e, n) => n && ("json" in n || "lossy" in n) ? Nt(jt(e, n)) : structuredClone(e)
) : (e, n) => Nt(jt(e, n));
function Lu(e, n) {
  const t = [{ type: "text", value: "↩" }];
  return n > 1 && t.push({
    type: "element",
    tagName: "sup",
    properties: {},
    children: [{ type: "text", value: String(n) }]
  }), t;
}
function zu(e, n) {
  return "Back to reference " + (e + 1) + (n > 1 ? "-" + n : "");
}
function Du(e) {
  const n = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", t = e.options.footnoteBackContent || Lu, r = e.options.footnoteBackLabel || zu, i = e.options.footnoteLabel || "Footnotes", o = e.options.footnoteLabelTagName || "h2", l = e.options.footnoteLabelProperties || {
    className: ["sr-only"]
  }, a = [];
  let u = -1;
  for (; ++u < e.footnoteOrder.length; ) {
    const s = e.footnoteById.get(
      e.footnoteOrder[u]
    );
    if (!s)
      continue;
    const f = e.all(s), c = String(s.identifier).toUpperCase(), p = Re(c.toLowerCase());
    let h = 0;
    const g = [], x = e.footnoteCounts.get(c);
    for (; x !== void 0 && ++h <= x; ) {
      g.length > 0 && g.push({ type: "text", value: " " });
      let C = typeof t == "string" ? t : t(u, h);
      typeof C == "string" && (C = { type: "text", value: C }), g.push({
        type: "element",
        tagName: "a",
        properties: {
          href: "#" + n + "fnref-" + p + (h > 1 ? "-" + h : ""),
          dataFootnoteBackref: "",
          ariaLabel: typeof r == "string" ? r : r(u, h),
          className: ["data-footnote-backref"]
        },
        children: Array.isArray(C) ? C : [C]
      });
    }
    const S = f[f.length - 1];
    if (S && S.type === "element" && S.tagName === "p") {
      const C = S.children[S.children.length - 1];
      C && C.type === "text" ? C.value += " " : S.children.push({ type: "text", value: " " }), S.children.push(...g);
    } else
      f.push(...g);
    const k = {
      type: "element",
      tagName: "li",
      properties: { id: n + "fn-" + p },
      children: e.wrap(f, !0)
    };
    e.patch(s, k), a.push(k);
  }
  if (a.length !== 0)
    return {
      type: "element",
      tagName: "section",
      properties: { dataFootnotes: !0, className: ["footnotes"] },
      children: [
        {
          type: "element",
          tagName: o,
          properties: {
            ...an(l),
            id: "footnote-label"
          },
          children: [{ type: "text", value: i }]
        },
        { type: "text", value: `
` },
        {
          type: "element",
          tagName: "ol",
          properties: {},
          children: e.wrap(a, !0)
        },
        { type: "text", value: `
` }
      ]
    };
}
const fn = (
  // Note: overloads in JSDoc can’t yet use different `@template`s.
  /**
   * @type {(
   *   (<Condition extends string>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & {type: Condition}) &
   *   (<Condition extends Props>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Condition) &
   *   (<Condition extends TestFunction>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Predicate<Condition, Node>) &
   *   ((test?: null | undefined) => (node?: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node) &
   *   ((test?: Test) => Check)
   * )}
   */
  /**
   * @param {Test} [test]
   * @returns {Check}
   */
  function(e) {
    if (e == null)
      return _u;
    if (typeof e == "function")
      return hn(e);
    if (typeof e == "object")
      return Array.isArray(e) ? Fu(e) : Ou(e);
    if (typeof e == "string")
      return Ru(e);
    throw new Error("Expected function, string, or object as test");
  }
);
function Fu(e) {
  const n = [];
  let t = -1;
  for (; ++t < e.length; )
    n[t] = fn(e[t]);
  return hn(r);
  function r(...i) {
    let o = -1;
    for (; ++o < n.length; )
      if (n[o].apply(this, i)) return !0;
    return !1;
  }
}
function Ou(e) {
  const n = (
    /** @type {Record<string, unknown>} */
    e
  );
  return hn(t);
  function t(r) {
    const i = (
      /** @type {Record<string, unknown>} */
      /** @type {unknown} */
      r
    );
    let o;
    for (o in e)
      if (i[o] !== n[o]) return !1;
    return !0;
  }
}
function Ru(e) {
  return hn(n);
  function n(t) {
    return t && t.type === e;
  }
}
function hn(e) {
  return n;
  function n(t, r, i) {
    return !!(Mu(t) && e.call(
      this,
      t,
      typeof r == "number" ? r : void 0,
      i || void 0
    ));
  }
}
function _u() {
  return !0;
}
function Mu(e) {
  return e !== null && typeof e == "object" && "type" in e;
}
const qr = [], Nu = !0, On = !1, ju = "skip";
function Vr(e, n, t, r) {
  let i;
  typeof n == "function" && typeof t != "function" ? (r = t, t = n) : i = n;
  const o = fn(i), l = r ? -1 : 1;
  a(e, void 0, [])();
  function a(u, s, f) {
    const c = (
      /** @type {Record<string, unknown>} */
      u && typeof u == "object" ? u : {}
    );
    if (typeof c.type == "string") {
      const h = (
        // `hast`
        typeof c.tagName == "string" ? c.tagName : (
          // `xast`
          typeof c.name == "string" ? c.name : void 0
        )
      );
      Object.defineProperty(p, "name", {
        value: "node (" + (u.type + (h ? "<" + h + ">" : "")) + ")"
      });
    }
    return p;
    function p() {
      let h = qr, g, x, S;
      if ((!n || o(u, s, f[f.length - 1] || void 0)) && (h = Bu(t(u, f)), h[0] === On))
        return h;
      if ("children" in u && u.children) {
        const k = (
          /** @type {UnistParent} */
          u
        );
        if (k.children && h[0] !== ju)
          for (x = (r ? k.children.length : -1) + l, S = f.concat(k); x > -1 && x < k.children.length; ) {
            const C = k.children[x];
            if (g = a(C, x, S)(), g[0] === On)
              return g;
            x = typeof g[1] == "number" ? g[1] : x + l;
          }
      }
      return h;
    }
  }
}
function Bu(e) {
  return Array.isArray(e) ? e : typeof e == "number" ? [Nu, e] : e == null ? qr : [e];
}
function Zn(e, n, t, r) {
  let i, o, l;
  typeof n == "function" && typeof t != "function" ? (o = void 0, l = n, i = t) : (o = n, l = t, i = r), Vr(e, o, a, i);
  function a(u, s) {
    const f = s[s.length - 1], c = f ? f.children.indexOf(u) : void 0;
    return l(u, c, f);
  }
}
const Rn = {}.hasOwnProperty, Hu = {};
function Uu(e, n) {
  const t = n || Hu, r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), l = { ...Iu, ...t.handlers }, a = {
    all: s,
    applyData: qu,
    definitionById: r,
    footnoteById: i,
    footnoteCounts: o,
    footnoteOrder: [],
    handlers: l,
    one: u,
    options: t,
    patch: $u,
    wrap: Wu
  };
  return Zn(e, function(f) {
    if (f.type === "definition" || f.type === "footnoteDefinition") {
      const c = f.type === "definition" ? r : i, p = String(f.identifier).toUpperCase();
      c.has(p) || c.set(p, f);
    }
  }), a;
  function u(f, c) {
    const p = f.type, h = a.handlers[p];
    if (Rn.call(a.handlers, p) && h)
      return h(a, f, c);
    if (a.options.passThrough && a.options.passThrough.includes(p)) {
      if ("children" in f) {
        const { children: x, ...S } = f, k = an(S);
        return k.children = a.all(f), k;
      }
      return an(f);
    }
    return (a.options.unknownHandler || Vu)(a, f, c);
  }
  function s(f) {
    const c = [];
    if ("children" in f) {
      const p = f.children;
      let h = -1;
      for (; ++h < p.length; ) {
        const g = a.one(p[h], f);
        if (g) {
          if (h && p[h - 1].type === "break" && (!Array.isArray(g) && g.type === "text" && (g.value = Bt(g.value)), !Array.isArray(g) && g.type === "element")) {
            const x = g.children[0];
            x && x.type === "text" && (x.value = Bt(x.value));
          }
          Array.isArray(g) ? c.push(...g) : c.push(g);
        }
      }
    }
    return c;
  }
}
function $u(e, n) {
  e.position && (n.position = Pl(e));
}
function qu(e, n) {
  let t = n;
  if (e && e.data) {
    const r = e.data.hName, i = e.data.hChildren, o = e.data.hProperties;
    if (typeof r == "string")
      if (t.type === "element")
        t.tagName = r;
      else {
        const l = "children" in t ? t.children : [t];
        t = { type: "element", tagName: r, properties: {}, children: l };
      }
    t.type === "element" && o && Object.assign(t.properties, an(o)), "children" in t && t.children && i !== null && i !== void 0 && (t.children = i);
  }
  return t;
}
function Vu(e, n) {
  const t = n.data || {}, r = "value" in n && !(Rn.call(t, "hProperties") || Rn.call(t, "hChildren")) ? { type: "text", value: n.value } : {
    type: "element",
    tagName: "div",
    properties: {},
    children: e.all(n)
  };
  return e.patch(n, r), e.applyData(n, r);
}
function Wu(e, n) {
  const t = [];
  let r = -1;
  for (n && t.push({ type: "text", value: `
` }); ++r < e.length; )
    r && t.push({ type: "text", value: `
` }), t.push(e[r]);
  return n && e.length > 0 && t.push({ type: "text", value: `
` }), t;
}
function Bt(e) {
  let n = 0, t = e.charCodeAt(n);
  for (; t === 9 || t === 32; )
    n++, t = e.charCodeAt(n);
  return e.slice(n);
}
function Ht(e, n) {
  const t = Uu(e, n), r = t.one(e, void 0), i = Du(t), o = Array.isArray(r) ? { type: "root", children: r } : r || { type: "root", children: [] };
  return i && o.children.push({ type: "text", value: `
` }, i), o;
}
function Yu(e, n) {
  return e && "run" in e ? async function(t, r) {
    const i = (
      /** @type {HastRoot} */
      Ht(t, { file: r, ...n })
    );
    await e.run(i, r);
  } : function(t, r) {
    return (
      /** @type {HastRoot} */
      Ht(t, { file: r, ...n || e })
    );
  };
}
function Ut(e) {
  if (e)
    throw e;
}
var nn = Object.prototype.hasOwnProperty, Wr = Object.prototype.toString, $t = Object.defineProperty, qt = Object.getOwnPropertyDescriptor, Vt = function(n) {
  return typeof Array.isArray == "function" ? Array.isArray(n) : Wr.call(n) === "[object Array]";
}, Wt = function(n) {
  if (!n || Wr.call(n) !== "[object Object]")
    return !1;
  var t = nn.call(n, "constructor"), r = n.constructor && n.constructor.prototype && nn.call(n.constructor.prototype, "isPrototypeOf");
  if (n.constructor && !t && !r)
    return !1;
  var i;
  for (i in n)
    ;
  return typeof i > "u" || nn.call(n, i);
}, Yt = function(n, t) {
  $t && t.name === "__proto__" ? $t(n, t.name, {
    enumerable: !0,
    configurable: !0,
    value: t.newValue,
    writable: !0
  }) : n[t.name] = t.newValue;
}, Qt = function(n, t) {
  if (t === "__proto__")
    if (nn.call(n, t)) {
      if (qt)
        return qt(n, t).value;
    } else return;
  return n[t];
}, Qu = function e() {
  var n, t, r, i, o, l, a = arguments[0], u = 1, s = arguments.length, f = !1;
  for (typeof a == "boolean" && (f = a, a = arguments[1] || {}, u = 2), (a == null || typeof a != "object" && typeof a != "function") && (a = {}); u < s; ++u)
    if (n = arguments[u], n != null)
      for (t in n)
        r = Qt(a, t), i = Qt(n, t), a !== i && (f && i && (Wt(i) || (o = Vt(i))) ? (o ? (o = !1, l = r && Vt(r) ? r : []) : l = r && Wt(r) ? r : {}, Yt(a, { name: t, newValue: e(f, l, i) })) : typeof i < "u" && Yt(a, { name: t, newValue: i }));
  return a;
};
const xn = /* @__PURE__ */ Fi(Qu);
function _n(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const n = Object.getPrototypeOf(e);
  return (n === null || n === Object.prototype || Object.getPrototypeOf(n) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Xu() {
  const e = [], n = { run: t, use: r };
  return n;
  function t(...i) {
    let o = -1;
    const l = i.pop();
    if (typeof l != "function")
      throw new TypeError("Expected function as last argument, not " + l);
    a(null, ...i);
    function a(u, ...s) {
      const f = e[++o];
      let c = -1;
      if (u) {
        l(u);
        return;
      }
      for (; ++c < i.length; )
        (s[c] === null || s[c] === void 0) && (s[c] = i[c]);
      i = s, f ? Gu(f, a)(...s) : l(null, ...s);
    }
  }
  function r(i) {
    if (typeof i != "function")
      throw new TypeError(
        "Expected `middelware` to be a function, not " + i
      );
    return e.push(i), n;
  }
}
function Gu(e, n) {
  let t;
  return r;
  function r(...l) {
    const a = e.length > l.length;
    let u;
    a && l.push(i);
    try {
      u = e.apply(this, l);
    } catch (s) {
      const f = (
        /** @type {Error} */
        s
      );
      if (a && t)
        throw f;
      return i(f);
    }
    a || (u && u.then && typeof u.then == "function" ? u.then(o, i) : u instanceof Error ? i(u) : o(u));
  }
  function i(l, ...a) {
    t || (t = !0, n(l, ...a));
  }
  function o(l) {
    i(null, l);
  }
}
const fe = { basename: Ju, dirname: Ku, extname: Zu, join: es, sep: "/" };
function Ju(e, n) {
  if (n !== void 0 && typeof n != "string")
    throw new TypeError('"ext" argument must be a string');
  Qe(e);
  let t = 0, r = -1, i = e.length, o;
  if (n === void 0 || n.length === 0 || n.length > e.length) {
    for (; i--; )
      if (e.codePointAt(i) === 47) {
        if (o) {
          t = i + 1;
          break;
        }
      } else r < 0 && (o = !0, r = i + 1);
    return r < 0 ? "" : e.slice(t, r);
  }
  if (n === e)
    return "";
  let l = -1, a = n.length - 1;
  for (; i--; )
    if (e.codePointAt(i) === 47) {
      if (o) {
        t = i + 1;
        break;
      }
    } else
      l < 0 && (o = !0, l = i + 1), a > -1 && (e.codePointAt(i) === n.codePointAt(a--) ? a < 0 && (r = i) : (a = -1, r = l));
  return t === r ? r = l : r < 0 && (r = e.length), e.slice(t, r);
}
function Ku(e) {
  if (Qe(e), e.length === 0)
    return ".";
  let n = -1, t = e.length, r;
  for (; --t; )
    if (e.codePointAt(t) === 47) {
      if (r) {
        n = t;
        break;
      }
    } else r || (r = !0);
  return n < 0 ? e.codePointAt(0) === 47 ? "/" : "." : n === 1 && e.codePointAt(0) === 47 ? "//" : e.slice(0, n);
}
function Zu(e) {
  Qe(e);
  let n = e.length, t = -1, r = 0, i = -1, o = 0, l;
  for (; n--; ) {
    const a = e.codePointAt(n);
    if (a === 47) {
      if (l) {
        r = n + 1;
        break;
      }
      continue;
    }
    t < 0 && (l = !0, t = n + 1), a === 46 ? i < 0 ? i = n : o !== 1 && (o = 1) : i > -1 && (o = -1);
  }
  return i < 0 || t < 0 || // We saw a non-dot character immediately before the dot.
  o === 0 || // The (right-most) trimmed path component is exactly `..`.
  o === 1 && i === t - 1 && i === r + 1 ? "" : e.slice(i, t);
}
function es(...e) {
  let n = -1, t;
  for (; ++n < e.length; )
    Qe(e[n]), e[n] && (t = t === void 0 ? e[n] : t + "/" + e[n]);
  return t === void 0 ? "." : ns(t);
}
function ns(e) {
  Qe(e);
  const n = e.codePointAt(0) === 47;
  let t = ts(e, !n);
  return t.length === 0 && !n && (t = "."), t.length > 0 && e.codePointAt(e.length - 1) === 47 && (t += "/"), n ? "/" + t : t;
}
function ts(e, n) {
  let t = "", r = 0, i = -1, o = 0, l = -1, a, u;
  for (; ++l <= e.length; ) {
    if (l < e.length)
      a = e.codePointAt(l);
    else {
      if (a === 47)
        break;
      a = 47;
    }
    if (a === 47) {
      if (!(i === l - 1 || o === 1)) if (i !== l - 1 && o === 2) {
        if (t.length < 2 || r !== 2 || t.codePointAt(t.length - 1) !== 46 || t.codePointAt(t.length - 2) !== 46) {
          if (t.length > 2) {
            if (u = t.lastIndexOf("/"), u !== t.length - 1) {
              u < 0 ? (t = "", r = 0) : (t = t.slice(0, u), r = t.length - 1 - t.lastIndexOf("/")), i = l, o = 0;
              continue;
            }
          } else if (t.length > 0) {
            t = "", r = 0, i = l, o = 0;
            continue;
          }
        }
        n && (t = t.length > 0 ? t + "/.." : "..", r = 2);
      } else
        t.length > 0 ? t += "/" + e.slice(i + 1, l) : t = e.slice(i + 1, l), r = l - i - 1;
      i = l, o = 0;
    } else a === 46 && o > -1 ? o++ : o = -1;
  }
  return t;
}
function Qe(e) {
  if (typeof e != "string")
    throw new TypeError(
      "Path must be a string. Received " + JSON.stringify(e)
    );
}
const rs = { cwd: is };
function is() {
  return "/";
}
function Mn(e) {
  return !!(e !== null && typeof e == "object" && "href" in e && e.href && "protocol" in e && e.protocol && // @ts-expect-error: indexing is fine.
  e.auth === void 0);
}
function ls(e) {
  if (typeof e == "string")
    e = new URL(e);
  else if (!Mn(e)) {
    const n = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' + e + "`"
    );
    throw n.code = "ERR_INVALID_ARG_TYPE", n;
  }
  if (e.protocol !== "file:") {
    const n = new TypeError("The URL must be of scheme file");
    throw n.code = "ERR_INVALID_URL_SCHEME", n;
  }
  return os(e);
}
function os(e) {
  if (e.hostname !== "") {
    const r = new TypeError(
      'File URL host must be "localhost" or empty on darwin'
    );
    throw r.code = "ERR_INVALID_FILE_URL_HOST", r;
  }
  const n = e.pathname;
  let t = -1;
  for (; ++t < n.length; )
    if (n.codePointAt(t) === 37 && n.codePointAt(t + 1) === 50) {
      const r = n.codePointAt(t + 2);
      if (r === 70 || r === 102) {
        const i = new TypeError(
          "File URL path must not include encoded / characters"
        );
        throw i.code = "ERR_INVALID_FILE_URL_PATH", i;
      }
    }
  return decodeURIComponent(n);
}
const kn = (
  /** @type {const} */
  [
    "history",
    "path",
    "basename",
    "stem",
    "extname",
    "dirname"
  ]
);
class Yr {
  /**
   * Create a new virtual file.
   *
   * `options` is treated as:
   *
   * *   `string` or `Uint8Array` — `{value: options}`
   * *   `URL` — `{path: options}`
   * *   `VFile` — shallow copies its data over to the new file
   * *   `object` — all fields are shallow copied over to the new file
   *
   * Path related fields are set in the following order (least specific to
   * most specific): `history`, `path`, `basename`, `stem`, `extname`,
   * `dirname`.
   *
   * You cannot set `dirname` or `extname` without setting either `history`,
   * `path`, `basename`, or `stem` too.
   *
   * @param {Compatible | null | undefined} [value]
   *   File value.
   * @returns
   *   New instance.
   */
  constructor(n) {
    let t;
    n ? Mn(n) ? t = { path: n } : typeof n == "string" || as(n) ? t = { value: n } : t = n : t = {}, this.cwd = "cwd" in t ? "" : rs.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
    let r = -1;
    for (; ++r < kn.length; ) {
      const o = kn[r];
      o in t && t[o] !== void 0 && t[o] !== null && (this[o] = o === "history" ? [...t[o]] : t[o]);
    }
    let i;
    for (i in t)
      kn.includes(i) || (this[i] = t[i]);
  }
  /**
   * Get the basename (including extname) (example: `'index.min.js'`).
   *
   * @returns {string | undefined}
   *   Basename.
   */
  get basename() {
    return typeof this.path == "string" ? fe.basename(this.path) : void 0;
  }
  /**
   * Set basename (including extname) (`'index.min.js'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be nullified (use `file.path = file.dirname` instead).
   *
   * @param {string} basename
   *   Basename.
   * @returns {undefined}
   *   Nothing.
   */
  set basename(n) {
    wn(n, "basename"), bn(n, "basename"), this.path = fe.join(this.dirname || "", n);
  }
  /**
   * Get the parent path (example: `'~'`).
   *
   * @returns {string | undefined}
   *   Dirname.
   */
  get dirname() {
    return typeof this.path == "string" ? fe.dirname(this.path) : void 0;
  }
  /**
   * Set the parent path (example: `'~'`).
   *
   * Cannot be set if there’s no `path` yet.
   *
   * @param {string | undefined} dirname
   *   Dirname.
   * @returns {undefined}
   *   Nothing.
   */
  set dirname(n) {
    Xt(this.basename, "dirname"), this.path = fe.join(n || "", this.basename);
  }
  /**
   * Get the extname (including dot) (example: `'.js'`).
   *
   * @returns {string | undefined}
   *   Extname.
   */
  get extname() {
    return typeof this.path == "string" ? fe.extname(this.path) : void 0;
  }
  /**
   * Set the extname (including dot) (example: `'.js'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be set if there’s no `path` yet.
   *
   * @param {string | undefined} extname
   *   Extname.
   * @returns {undefined}
   *   Nothing.
   */
  set extname(n) {
    if (bn(n, "extname"), Xt(this.dirname, "extname"), n) {
      if (n.codePointAt(0) !== 46)
        throw new Error("`extname` must start with `.`");
      if (n.includes(".", 1))
        throw new Error("`extname` cannot contain multiple dots");
    }
    this.path = fe.join(this.dirname, this.stem + (n || ""));
  }
  /**
   * Get the full path (example: `'~/index.min.js'`).
   *
   * @returns {string}
   *   Path.
   */
  get path() {
    return this.history[this.history.length - 1];
  }
  /**
   * Set the full path (example: `'~/index.min.js'`).
   *
   * Cannot be nullified.
   * You can set a file URL (a `URL` object with a `file:` protocol) which will
   * be turned into a path with `url.fileURLToPath`.
   *
   * @param {URL | string} path
   *   Path.
   * @returns {undefined}
   *   Nothing.
   */
  set path(n) {
    Mn(n) && (n = ls(n)), wn(n, "path"), this.path !== n && this.history.push(n);
  }
  /**
   * Get the stem (basename w/o extname) (example: `'index.min'`).
   *
   * @returns {string | undefined}
   *   Stem.
   */
  get stem() {
    return typeof this.path == "string" ? fe.basename(this.path, this.extname) : void 0;
  }
  /**
   * Set the stem (basename w/o extname) (example: `'index.min'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be nullified (use `file.path = file.dirname` instead).
   *
   * @param {string} stem
   *   Stem.
   * @returns {undefined}
   *   Nothing.
   */
  set stem(n) {
    wn(n, "stem"), bn(n, "stem"), this.path = fe.join(this.dirname || "", n + (this.extname || ""));
  }
  // Normal prototypal methods.
  /**
   * Create a fatal message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `true` (error; file not usable)
   * and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {never}
   *   Never.
   * @throws {VFileMessage}
   *   Message.
   */
  fail(n, t, r) {
    const i = this.message(n, t, r);
    throw i.fatal = !0, i;
  }
  /**
   * Create an info message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `undefined` (info; change
   * likely not needed) and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {VFileMessage}
   *   Message.
   */
  info(n, t, r) {
    const i = this.message(n, t, r);
    return i.fatal = void 0, i;
  }
  /**
   * Create a message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `false` (warning; change may be
   * needed) and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {VFileMessage}
   *   Message.
   */
  message(n, t, r) {
    const i = new K(
      // @ts-expect-error: the overloads are fine.
      n,
      t,
      r
    );
    return this.path && (i.name = this.path + ":" + i.name, i.file = this.path), i.fatal = !1, this.messages.push(i), i;
  }
  /**
   * Serialize the file.
   *
   * > **Note**: which encodings are supported depends on the engine.
   * > For info on Node.js, see:
   * > <https://nodejs.org/api/util.html#whatwg-supported-encodings>.
   *
   * @param {string | null | undefined} [encoding='utf8']
   *   Character encoding to understand `value` as when it’s a `Uint8Array`
   *   (default: `'utf-8'`).
   * @returns {string}
   *   Serialized file.
   */
  toString(n) {
    return this.value === void 0 ? "" : typeof this.value == "string" ? this.value : new TextDecoder(n || void 0).decode(this.value);
  }
}
function bn(e, n) {
  if (e && e.includes(fe.sep))
    throw new Error(
      "`" + n + "` cannot be a path: did not expect `" + fe.sep + "`"
    );
}
function wn(e, n) {
  if (!e)
    throw new Error("`" + n + "` cannot be empty");
}
function Xt(e, n) {
  if (!e)
    throw new Error("Setting `" + n + "` requires `path` to be set too");
}
function as(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const us = (
  /**
   * @type {new <Parameters extends Array<unknown>, Result>(property: string | symbol) => (...parameters: Parameters) => Result}
   */
  /** @type {unknown} */
  /**
   * @this {Function}
   * @param {string | symbol} property
   * @returns {(...parameters: Array<unknown>) => unknown}
   */
  function(e) {
    const r = (
      /** @type {Record<string | symbol, Function>} */
      // Prototypes do exist.
      // type-coverage:ignore-next-line
      this.constructor.prototype
    ), i = r[e], o = function() {
      return i.apply(o, arguments);
    };
    return Object.setPrototypeOf(o, r), o;
  }
), ss = {}.hasOwnProperty;
class et extends us {
  /**
   * Create a processor.
   */
  constructor() {
    super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = Xu();
  }
  /**
   * Copy a processor.
   *
   * @deprecated
   *   This is a private internal method and should not be used.
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   New *unfrozen* processor ({@linkcode Processor}) that is
   *   configured to work the same as its ancestor.
   *   When the descendant processor is configured in the future it does not
   *   affect the ancestral processor.
   */
  copy() {
    const n = (
      /** @type {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>} */
      new et()
    );
    let t = -1;
    for (; ++t < this.attachers.length; ) {
      const r = this.attachers[t];
      n.use(...r);
    }
    return n.data(xn(!0, {}, this.namespace)), n;
  }
  /**
   * Configure the processor with info available to all plugins.
   * Information is stored in an object.
   *
   * Typically, options can be given to a specific plugin, but sometimes it
   * makes sense to have information shared with several plugins.
   * For example, a list of HTML elements that are self-closing, which is
   * needed during all phases.
   *
   * > **Note**: setting information cannot occur on *frozen* processors.
   * > Call the processor first to create a new unfrozen processor.
   *
   * > **Note**: to register custom data in TypeScript, augment the
   * > {@linkcode Data} interface.
   *
   * @example
   *   This example show how to get and set info:
   *
   *   ```js
   *   import {unified} from 'unified'
   *
   *   const processor = unified().data('alpha', 'bravo')
   *
   *   processor.data('alpha') // => 'bravo'
   *
   *   processor.data() // => {alpha: 'bravo'}
   *
   *   processor.data({charlie: 'delta'})
   *
   *   processor.data() // => {charlie: 'delta'}
   *   ```
   *
   * @template {keyof Data} Key
   *
   * @overload
   * @returns {Data}
   *
   * @overload
   * @param {Data} dataset
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {Key} key
   * @returns {Data[Key]}
   *
   * @overload
   * @param {Key} key
   * @param {Data[Key]} value
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @param {Data | Key} [key]
   *   Key to get or set, or entire dataset to set, or nothing to get the
   *   entire dataset (optional).
   * @param {Data[Key]} [value]
   *   Value to set (optional).
   * @returns {unknown}
   *   The current processor when setting, the value at `key` when getting, or
   *   the entire dataset when getting without key.
   */
  data(n, t) {
    return typeof n == "string" ? arguments.length === 2 ? (En("data", this.frozen), this.namespace[n] = t, this) : ss.call(this.namespace, n) && this.namespace[n] || void 0 : n ? (En("data", this.frozen), this.namespace = n, this) : this.namespace;
  }
  /**
   * Freeze a processor.
   *
   * Frozen processors are meant to be extended and not to be configured
   * directly.
   *
   * When a processor is frozen it cannot be unfrozen.
   * New processors working the same way can be created by calling the
   * processor.
   *
   * It’s possible to freeze processors explicitly by calling `.freeze()`.
   * Processors freeze automatically when `.parse()`, `.run()`, `.runSync()`,
   * `.stringify()`, `.process()`, or `.processSync()` are called.
   *
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   The current processor.
   */
  freeze() {
    if (this.frozen)
      return this;
    const n = (
      /** @type {Processor} */
      /** @type {unknown} */
      this
    );
    for (; ++this.freezeIndex < this.attachers.length; ) {
      const [t, ...r] = this.attachers[this.freezeIndex];
      if (r[0] === !1)
        continue;
      r[0] === !0 && (r[0] = void 0);
      const i = t.call(n, ...r);
      typeof i == "function" && this.transformers.use(i);
    }
    return this.frozen = !0, this.freezeIndex = Number.POSITIVE_INFINITY, this;
  }
  /**
   * Parse text to a syntax tree.
   *
   * > **Note**: `parse` freezes the processor if not already *frozen*.
   *
   * > **Note**: `parse` performs the parse phase, not the run phase or other
   * > phases.
   *
   * @param {Compatible | undefined} [file]
   *   file to parse (optional); typically `string` or `VFile`; any value
   *   accepted as `x` in `new VFile(x)`.
   * @returns {ParseTree extends undefined ? Node : ParseTree}
   *   Syntax tree representing `file`.
   */
  parse(n) {
    this.freeze();
    const t = Ke(n), r = this.parser || this.Parser;
    return Sn("parse", r), r(String(t), t);
  }
  /**
   * Process the given file as configured on the processor.
   *
   * > **Note**: `process` freezes the processor if not already *frozen*.
   *
   * > **Note**: `process` performs the parse, run, and stringify phases.
   *
   * @overload
   * @param {Compatible | undefined} file
   * @param {ProcessCallback<VFileWithOutput<CompileResult>>} done
   * @returns {undefined}
   *
   * @overload
   * @param {Compatible | undefined} [file]
   * @returns {Promise<VFileWithOutput<CompileResult>>}
   *
   * @param {Compatible | undefined} [file]
   *   File (optional); typically `string` or `VFile`]; any value accepted as
   *   `x` in `new VFile(x)`.
   * @param {ProcessCallback<VFileWithOutput<CompileResult>> | undefined} [done]
   *   Callback (optional).
   * @returns {Promise<VFile> | undefined}
   *   Nothing if `done` is given.
   *   Otherwise a promise, rejected with a fatal error or resolved with the
   *   processed file.
   *
   *   The parsed, transformed, and compiled value is available at
   *   `file.value` (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most
   *   > compilers return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  process(n, t) {
    const r = this;
    return this.freeze(), Sn("process", this.parser || this.Parser), Cn("process", this.compiler || this.Compiler), t ? i(void 0, t) : new Promise(i);
    function i(o, l) {
      const a = Ke(n), u = (
        /** @type {HeadTree extends undefined ? Node : HeadTree} */
        /** @type {unknown} */
        r.parse(a)
      );
      r.run(u, a, function(f, c, p) {
        if (f || !c || !p)
          return s(f);
        const h = (
          /** @type {CompileTree extends undefined ? Node : CompileTree} */
          /** @type {unknown} */
          c
        ), g = r.stringify(h, p);
        hs(g) ? p.value = g : p.result = g, s(
          f,
          /** @type {VFileWithOutput<CompileResult>} */
          p
        );
      });
      function s(f, c) {
        f || !c ? l(f) : o ? o(c) : t(void 0, c);
      }
    }
  }
  /**
   * Process the given file as configured on the processor.
   *
   * An error is thrown if asynchronous transforms are configured.
   *
   * > **Note**: `processSync` freezes the processor if not already *frozen*.
   *
   * > **Note**: `processSync` performs the parse, run, and stringify phases.
   *
   * @param {Compatible | undefined} [file]
   *   File (optional); typically `string` or `VFile`; any value accepted as
   *   `x` in `new VFile(x)`.
   * @returns {VFileWithOutput<CompileResult>}
   *   The processed file.
   *
   *   The parsed, transformed, and compiled value is available at
   *   `file.value` (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most
   *   > compilers return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  processSync(n) {
    let t = !1, r;
    return this.freeze(), Sn("processSync", this.parser || this.Parser), Cn("processSync", this.compiler || this.Compiler), this.process(n, i), Jt("processSync", "process", t), r;
    function i(o, l) {
      t = !0, Ut(o), r = l;
    }
  }
  /**
   * Run *transformers* on a syntax tree.
   *
   * > **Note**: `run` freezes the processor if not already *frozen*.
   *
   * > **Note**: `run` performs the run phase, not other phases.
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} done
   * @returns {undefined}
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {Compatible | undefined} file
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} done
   * @returns {undefined}
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {Compatible | undefined} [file]
   * @returns {Promise<TailTree extends undefined ? Node : TailTree>}
   *
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   *   Tree to transform and inspect.
   * @param {(
   *   RunCallback<TailTree extends undefined ? Node : TailTree> |
   *   Compatible
   * )} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} [done]
   *   Callback (optional).
   * @returns {Promise<TailTree extends undefined ? Node : TailTree> | undefined}
   *   Nothing if `done` is given.
   *   Otherwise, a promise rejected with a fatal error or resolved with the
   *   transformed tree.
   */
  run(n, t, r) {
    Gt(n), this.freeze();
    const i = this.transformers;
    return !r && typeof t == "function" && (r = t, t = void 0), r ? o(void 0, r) : new Promise(o);
    function o(l, a) {
      const u = Ke(t);
      i.run(n, u, s);
      function s(f, c, p) {
        const h = (
          /** @type {TailTree extends undefined ? Node : TailTree} */
          c || n
        );
        f ? a(f) : l ? l(h) : r(void 0, h, p);
      }
    }
  }
  /**
   * Run *transformers* on a syntax tree.
   *
   * An error is thrown if asynchronous transforms are configured.
   *
   * > **Note**: `runSync` freezes the processor if not already *frozen*.
   *
   * > **Note**: `runSync` performs the run phase, not other phases.
   *
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   *   Tree to transform and inspect.
   * @param {Compatible | undefined} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @returns {TailTree extends undefined ? Node : TailTree}
   *   Transformed tree.
   */
  runSync(n, t) {
    let r = !1, i;
    return this.run(n, t, o), Jt("runSync", "run", r), i;
    function o(l, a) {
      Ut(l), i = a, r = !0;
    }
  }
  /**
   * Compile a syntax tree.
   *
   * > **Note**: `stringify` freezes the processor if not already *frozen*.
   *
   * > **Note**: `stringify` performs the stringify phase, not the run phase
   * > or other phases.
   *
   * @param {CompileTree extends undefined ? Node : CompileTree} tree
   *   Tree to compile.
   * @param {Compatible | undefined} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @returns {CompileResult extends undefined ? Value : CompileResult}
   *   Textual representation of the tree (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most compilers
   *   > return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  stringify(n, t) {
    this.freeze();
    const r = Ke(t), i = this.compiler || this.Compiler;
    return Cn("stringify", i), Gt(n), i(n, r);
  }
  /**
   * Configure the processor to use a plugin, a list of usable values, or a
   * preset.
   *
   * If the processor is already using a plugin, the previous plugin
   * configuration is changed based on the options that are passed in.
   * In other words, the plugin is not added a second time.
   *
   * > **Note**: `use` cannot be called on *frozen* processors.
   * > Call the processor first to create a new unfrozen processor.
   *
   * @example
   *   There are many ways to pass plugins to `.use()`.
   *   This example gives an overview:
   *
   *   ```js
   *   import {unified} from 'unified'
   *
   *   unified()
   *     // Plugin with options:
   *     .use(pluginA, {x: true, y: true})
   *     // Passing the same plugin again merges configuration (to `{x: true, y: false, z: true}`):
   *     .use(pluginA, {y: false, z: true})
   *     // Plugins:
   *     .use([pluginB, pluginC])
   *     // Two plugins, the second with options:
   *     .use([pluginD, [pluginE, {}]])
   *     // Preset with plugins and settings:
   *     .use({plugins: [pluginF, [pluginG, {}]], settings: {position: false}})
   *     // Settings only:
   *     .use({settings: {position: false}})
   *   ```
   *
   * @template {Array<unknown>} [Parameters=[]]
   * @template {Node | string | undefined} [Input=undefined]
   * @template [Output=Input]
   *
   * @overload
   * @param {Preset | null | undefined} [preset]
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {PluggableList} list
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {Plugin<Parameters, Input, Output>} plugin
   * @param {...(Parameters | [boolean])} parameters
   * @returns {UsePlugin<ParseTree, HeadTree, TailTree, CompileTree, CompileResult, Input, Output>}
   *
   * @param {PluggableList | Plugin | Preset | null | undefined} value
   *   Usable value.
   * @param {...unknown} parameters
   *   Parameters, when a plugin is given as a usable value.
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   Current processor.
   */
  use(n, ...t) {
    const r = this.attachers, i = this.namespace;
    if (En("use", this.frozen), n != null) if (typeof n == "function")
      u(n, t);
    else if (typeof n == "object")
      Array.isArray(n) ? a(n) : l(n);
    else
      throw new TypeError("Expected usable value, not `" + n + "`");
    return this;
    function o(s) {
      if (typeof s == "function")
        u(s, []);
      else if (typeof s == "object")
        if (Array.isArray(s)) {
          const [f, ...c] = (
            /** @type {PluginTuple<Array<unknown>>} */
            s
          );
          u(f, c);
        } else
          l(s);
      else
        throw new TypeError("Expected usable value, not `" + s + "`");
    }
    function l(s) {
      if (!("plugins" in s) && !("settings" in s))
        throw new Error(
          "Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither"
        );
      a(s.plugins), s.settings && (i.settings = xn(!0, i.settings, s.settings));
    }
    function a(s) {
      let f = -1;
      if (s != null) if (Array.isArray(s))
        for (; ++f < s.length; ) {
          const c = s[f];
          o(c);
        }
      else
        throw new TypeError("Expected a list of plugins, not `" + s + "`");
    }
    function u(s, f) {
      let c = -1, p = -1;
      for (; ++c < r.length; )
        if (r[c][0] === s) {
          p = c;
          break;
        }
      if (p === -1)
        r.push([s, ...f]);
      else if (f.length > 0) {
        let [h, ...g] = f;
        const x = r[p][1];
        _n(x) && _n(h) && (h = xn(!0, x, h)), r[p] = [s, h, ...g];
      }
    }
  }
}
const cs = new et().freeze();
function Sn(e, n) {
  if (typeof n != "function")
    throw new TypeError("Cannot `" + e + "` without `parser`");
}
function Cn(e, n) {
  if (typeof n != "function")
    throw new TypeError("Cannot `" + e + "` without `compiler`");
}
function En(e, n) {
  if (n)
    throw new Error(
      "Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
    );
}
function Gt(e) {
  if (!_n(e) || typeof e.type != "string")
    throw new TypeError("Expected node, got `" + e + "`");
}
function Jt(e, n, t) {
  if (!t)
    throw new Error(
      "`" + e + "` finished async. Use `" + n + "` instead"
    );
}
function Ke(e) {
  return fs(e) ? e : new Yr(e);
}
function fs(e) {
  return !!(e && typeof e == "object" && "message" in e && "messages" in e);
}
function hs(e) {
  return typeof e == "string" || ps(e);
}
function ps(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const ms = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md", Kt = [], Zt = { allowDangerousHtml: !0 }, gs = /^(https?|ircs?|mailto|xmpp)$/i, ds = [
  { from: "astPlugins", id: "remove-buggy-html-in-markdown-parser" },
  { from: "allowDangerousHtml", id: "remove-buggy-html-in-markdown-parser" },
  {
    from: "allowNode",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "allowElement"
  },
  {
    from: "allowedTypes",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "allowedElements"
  },
  {
    from: "disallowedTypes",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "disallowedElements"
  },
  { from: "escapeHtml", id: "remove-buggy-html-in-markdown-parser" },
  { from: "includeElementIndex", id: "#remove-includeelementindex" },
  {
    from: "includeNodeIndex",
    id: "change-includenodeindex-to-includeelementindex"
  },
  { from: "linkTarget", id: "remove-linktarget" },
  { from: "plugins", id: "change-plugins-to-remarkplugins", to: "remarkPlugins" },
  { from: "rawSourcePos", id: "#remove-rawsourcepos" },
  { from: "renderers", id: "change-renderers-to-components", to: "components" },
  { from: "source", id: "change-source-to-children", to: "children" },
  { from: "sourcePos", id: "#remove-sourcepos" },
  { from: "transformImageUri", id: "#add-urltransform", to: "urlTransform" },
  { from: "transformLinkUri", id: "#add-urltransform", to: "urlTransform" }
];
function ys(e) {
  const n = e.allowedElements, t = e.allowElement, r = e.children || "", i = e.className, o = e.components, l = e.disallowedElements, a = e.rehypePlugins || Kt, u = e.remarkPlugins || Kt, s = e.remarkRehypeOptions ? { ...e.remarkRehypeOptions, ...Zt } : Zt, f = e.skipHtml, c = e.unwrapDisallowed, p = e.urlTransform || xs, h = cs().use(Za).use(u).use(Yu, s).use(a), g = new Yr();
  typeof r == "string" && (g.value = r);
  for (const C of ds)
    Object.hasOwn(e, C.from) && ("" + C.from + (C.to ? "use `" + C.to + "` instead" : "remove it") + ms + C.id, void 0);
  const x = h.parse(g);
  let S = h.runSync(x, g);
  return i && (S = {
    type: "element",
    tagName: "div",
    properties: { className: i },
    // Assume no doctypes.
    children: (
      /** @type {Array<ElementContent>} */
      S.type === "root" ? S.children : [S]
    )
  }), Zn(S, k), Ol(S, {
    Fragment: A.Fragment,
    components: o,
    ignoreInvalidStyle: !0,
    jsx: A.jsx,
    jsxs: A.jsxs,
    passKeys: !0,
    passNode: !0
  });
  function k(C, I, z) {
    if (C.type === "raw" && z && typeof I == "number")
      return f ? z.children.splice(I, 1) : z.children[I] = { type: "text", value: C.value }, I;
    if (C.type === "element") {
      let D;
      for (D in gn)
        if (Object.hasOwn(gn, D) && Object.hasOwn(C.properties, D)) {
          const w = C.properties[D], _ = gn[D];
          (_ === null || _.includes(C.tagName)) && (C.properties[D] = p(String(w || ""), D, C));
        }
    }
    if (C.type === "element") {
      let D = n ? !n.includes(C.tagName) : l ? l.includes(C.tagName) : !1;
      if (!D && t && typeof I == "number" && (D = !t(C, I, z)), D && z && typeof I == "number")
        return c && C.children ? z.children.splice(I, 1, ...C.children) : z.children.splice(I, 1), I;
    }
  }
}
function xs(e) {
  const n = e.indexOf(":"), t = e.indexOf("?"), r = e.indexOf("#"), i = e.indexOf("/");
  return (
    // If there is no protocol, it’s relative.
    n < 0 || // If the first colon is after a `?`, `#`, or `/`, it’s not a protocol.
    i > -1 && n > i || t > -1 && n > t || r > -1 && n > r || // It is a protocol, it should be allowed.
    gs.test(e.slice(0, n)) ? e : ""
  );
}
function er(e, n) {
  const t = String(e);
  if (typeof n != "string")
    throw new TypeError("Expected character");
  let r = 0, i = t.indexOf(n);
  for (; i !== -1; )
    r++, i = t.indexOf(n, i + n.length);
  return r;
}
function ks(e) {
  if (typeof e != "string")
    throw new TypeError("Expected a string");
  return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
function bs(e, n, t) {
  const i = fn((t || {}).ignore || []), o = ws(n);
  let l = -1;
  for (; ++l < o.length; )
    Vr(e, "text", a);
  function a(s, f) {
    let c = -1, p;
    for (; ++c < f.length; ) {
      const h = f[c], g = p ? p.children : void 0;
      if (i(
        h,
        g ? g.indexOf(h) : void 0,
        p
      ))
        return;
      p = h;
    }
    if (p)
      return u(s, f);
  }
  function u(s, f) {
    const c = f[f.length - 1], p = o[l][0], h = o[l][1];
    let g = 0;
    const S = c.children.indexOf(s);
    let k = !1, C = [];
    p.lastIndex = 0;
    let I = p.exec(s.value);
    for (; I; ) {
      const z = I.index, D = {
        index: I.index,
        input: I.input,
        stack: [...f, s]
      };
      let w = h(...I, D);
      if (typeof w == "string" && (w = w.length > 0 ? { type: "text", value: w } : void 0), w === !1 ? p.lastIndex = z + 1 : (g !== z && C.push({
        type: "text",
        value: s.value.slice(g, z)
      }), Array.isArray(w) ? C.push(...w) : w && C.push(w), g = z + I[0].length, k = !0), !p.global)
        break;
      I = p.exec(s.value);
    }
    return k ? (g < s.value.length && C.push({ type: "text", value: s.value.slice(g) }), c.children.splice(S, 1, ...C)) : C = [s], S + C.length;
  }
}
function ws(e) {
  const n = [];
  if (!Array.isArray(e))
    throw new TypeError("Expected find and replace tuple or list of tuples");
  const t = !e[0] || Array.isArray(e[0]) ? e : [e];
  let r = -1;
  for (; ++r < t.length; ) {
    const i = t[r];
    n.push([Ss(i[0]), Cs(i[1])]);
  }
  return n;
}
function Ss(e) {
  return typeof e == "string" ? new RegExp(ks(e), "g") : e;
}
function Cs(e) {
  return typeof e == "function" ? e : function() {
    return e;
  };
}
const In = "phrasing", Tn = ["autolink", "link", "image", "label"];
function Es() {
  return {
    transforms: [zs],
    enter: {
      literalAutolink: Ts,
      literalAutolinkEmail: An,
      literalAutolinkHttp: An,
      literalAutolinkWww: An
    },
    exit: {
      literalAutolink: Ls,
      literalAutolinkEmail: vs,
      literalAutolinkHttp: As,
      literalAutolinkWww: Ps
    }
  };
}
function Is() {
  return {
    unsafe: [
      {
        character: "@",
        before: "[+\\-.\\w]",
        after: "[\\-.\\w]",
        inConstruct: In,
        notInConstruct: Tn
      },
      {
        character: ".",
        before: "[Ww]",
        after: "[\\-.\\w]",
        inConstruct: In,
        notInConstruct: Tn
      },
      {
        character: ":",
        before: "[ps]",
        after: "\\/",
        inConstruct: In,
        notInConstruct: Tn
      }
    ]
  };
}
function Ts(e) {
  this.enter({ type: "link", title: null, url: "", children: [] }, e);
}
function An(e) {
  this.config.enter.autolinkProtocol.call(this, e);
}
function As(e) {
  this.config.exit.autolinkProtocol.call(this, e);
}
function Ps(e) {
  this.config.exit.data.call(this, e);
  const n = this.stack[this.stack.length - 1];
  n.type, n.url = "http://" + this.sliceSerialize(e);
}
function vs(e) {
  this.config.exit.autolinkEmail.call(this, e);
}
function Ls(e) {
  this.exit(e);
}
function zs(e) {
  bs(
    e,
    [
      [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, Ds],
      [new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)", "gu"), Fs]
    ],
    { ignore: ["link", "linkReference"] }
  );
}
function Ds(e, n, t, r, i) {
  let o = "";
  if (!Qr(i) || (/^w/i.test(n) && (t = n + t, n = "", o = "http://"), !Os(t)))
    return !1;
  const l = Rs(t + r);
  if (!l[0]) return !1;
  const a = {
    type: "link",
    title: null,
    url: o + n + l[0],
    children: [{ type: "text", value: n + l[0] }]
  };
  return l[1] ? [a, { type: "text", value: l[1] }] : a;
}
function Fs(e, n, t, r) {
  return (
    // Not an expected previous character.
    !Qr(r, !0) || // Label ends in not allowed character.
    /[-\d_]$/.test(t) ? !1 : {
      type: "link",
      title: null,
      url: "mailto:" + n + "@" + t,
      children: [{ type: "text", value: n + "@" + t }]
    }
  );
}
function Os(e) {
  const n = e.split(".");
  return !(n.length < 2 || n[n.length - 1] && (/_/.test(n[n.length - 1]) || !/[a-zA-Z\d]/.test(n[n.length - 1])) || n[n.length - 2] && (/_/.test(n[n.length - 2]) || !/[a-zA-Z\d]/.test(n[n.length - 2])));
}
function Rs(e) {
  const n = /[!"&'),.:;<>?\]}]+$/.exec(e);
  if (!n)
    return [e, void 0];
  e = e.slice(0, n.index);
  let t = n[0], r = t.indexOf(")");
  const i = er(e, "(");
  let o = er(e, ")");
  for (; r !== -1 && i > o; )
    e += t.slice(0, r + 1), t = t.slice(r + 1), r = t.indexOf(")"), o++;
  return [e, t];
}
function Qr(e, n) {
  const t = e.input.charCodeAt(e.index - 1);
  return (e.index === 0 || Te(t) || un(t)) && // If it’s an email, the previous character should not be a slash.
  (!n || t !== 47);
}
Xr.peek = Ws;
function _s() {
  return {
    enter: {
      gfmFootnoteDefinition: Ns,
      gfmFootnoteDefinitionLabelString: js,
      gfmFootnoteCall: Us,
      gfmFootnoteCallString: $s
    },
    exit: {
      gfmFootnoteDefinition: Hs,
      gfmFootnoteDefinitionLabelString: Bs,
      gfmFootnoteCall: Vs,
      gfmFootnoteCallString: qs
    }
  };
}
function Ms() {
  return {
    // This is on by default already.
    unsafe: [{ character: "[", inConstruct: ["phrasing", "label", "reference"] }],
    handlers: { footnoteDefinition: Ys, footnoteReference: Xr }
  };
}
function Ns(e) {
  this.enter(
    { type: "footnoteDefinition", identifier: "", label: "", children: [] },
    e
  );
}
function js() {
  this.buffer();
}
function Bs(e) {
  const n = this.resume(), t = this.stack[this.stack.length - 1];
  t.type, t.label = n, t.identifier = ce(
    this.sliceSerialize(e)
  ).toLowerCase();
}
function Hs(e) {
  this.exit(e);
}
function Us(e) {
  this.enter({ type: "footnoteReference", identifier: "", label: "" }, e);
}
function $s() {
  this.buffer();
}
function qs(e) {
  const n = this.resume(), t = this.stack[this.stack.length - 1];
  t.type, t.label = n, t.identifier = ce(
    this.sliceSerialize(e)
  ).toLowerCase();
}
function Vs(e) {
  this.exit(e);
}
function Xr(e, n, t, r) {
  const i = t.createTracker(r);
  let o = i.move("[^");
  const l = t.enter("footnoteReference"), a = t.enter("reference");
  return o += i.move(
    t.safe(t.associationId(e), {
      ...i.current(),
      before: o,
      after: "]"
    })
  ), a(), l(), o += i.move("]"), o;
}
function Ws() {
  return "[";
}
function Ys(e, n, t, r) {
  const i = t.createTracker(r);
  let o = i.move("[^");
  const l = t.enter("footnoteDefinition"), a = t.enter("label");
  return o += i.move(
    t.safe(t.associationId(e), {
      ...i.current(),
      before: o,
      after: "]"
    })
  ), a(), o += i.move(
    "]:" + (e.children && e.children.length > 0 ? " " : "")
  ), i.shift(4), o += i.move(
    t.indentLines(t.containerFlow(e, i.current()), Qs)
  ), l(), o;
}
function Qs(e, n, t) {
  return n === 0 ? e : (t ? "" : "    ") + e;
}
const Xs = [
  "autolink",
  "destinationLiteral",
  "destinationRaw",
  "reference",
  "titleQuote",
  "titleApostrophe"
];
Gr.peek = ec;
function Gs() {
  return {
    canContainEols: ["delete"],
    enter: { strikethrough: Ks },
    exit: { strikethrough: Zs }
  };
}
function Js() {
  return {
    unsafe: [
      {
        character: "~",
        inConstruct: "phrasing",
        notInConstruct: Xs
      }
    ],
    handlers: { delete: Gr }
  };
}
function Ks(e) {
  this.enter({ type: "delete", children: [] }, e);
}
function Zs(e) {
  this.exit(e);
}
function Gr(e, n, t, r) {
  const i = t.createTracker(r), o = t.enter("strikethrough");
  let l = i.move("~~");
  return l += t.containerPhrasing(e, {
    ...i.current(),
    before: l,
    after: "~"
  }), l += i.move("~~"), o(), l;
}
function ec() {
  return "~";
}
function nc(e, n = {}) {
  const t = (n.align || []).concat(), r = n.stringLength || rc, i = [], o = [], l = [], a = [];
  let u = 0, s = -1;
  for (; ++s < e.length; ) {
    const g = [], x = [];
    let S = -1;
    for (e[s].length > u && (u = e[s].length); ++S < e[s].length; ) {
      const k = tc(e[s][S]);
      if (n.alignDelimiters !== !1) {
        const C = r(k);
        x[S] = C, (a[S] === void 0 || C > a[S]) && (a[S] = C);
      }
      g.push(k);
    }
    o[s] = g, l[s] = x;
  }
  let f = -1;
  if (typeof t == "object" && "length" in t)
    for (; ++f < u; )
      i[f] = nr(t[f]);
  else {
    const g = nr(t);
    for (; ++f < u; )
      i[f] = g;
  }
  f = -1;
  const c = [], p = [];
  for (; ++f < u; ) {
    const g = i[f];
    let x = "", S = "";
    g === 99 ? (x = ":", S = ":") : g === 108 ? x = ":" : g === 114 && (S = ":");
    let k = n.alignDelimiters === !1 ? 1 : Math.max(
      1,
      a[f] - x.length - S.length
    );
    const C = x + "-".repeat(k) + S;
    n.alignDelimiters !== !1 && (k = x.length + k + S.length, k > a[f] && (a[f] = k), p[f] = k), c[f] = C;
  }
  o.splice(1, 0, c), l.splice(1, 0, p), s = -1;
  const h = [];
  for (; ++s < o.length; ) {
    const g = o[s], x = l[s];
    f = -1;
    const S = [];
    for (; ++f < u; ) {
      const k = g[f] || "";
      let C = "", I = "";
      if (n.alignDelimiters !== !1) {
        const z = a[f] - (x[f] || 0), D = i[f];
        D === 114 ? C = " ".repeat(z) : D === 99 ? z % 2 ? (C = " ".repeat(z / 2 + 0.5), I = " ".repeat(z / 2 - 0.5)) : (C = " ".repeat(z / 2), I = C) : I = " ".repeat(z);
      }
      n.delimiterStart !== !1 && !f && S.push("|"), n.padding !== !1 && // Don’t add the opening space if we’re not aligning and the cell is
      // empty: there will be a closing space.
      !(n.alignDelimiters === !1 && k === "") && (n.delimiterStart !== !1 || f) && S.push(" "), n.alignDelimiters !== !1 && S.push(C), S.push(k), n.alignDelimiters !== !1 && S.push(I), n.padding !== !1 && S.push(" "), (n.delimiterEnd !== !1 || f !== u - 1) && S.push("|");
    }
    h.push(
      n.delimiterEnd === !1 ? S.join("").replace(/ +$/, "") : S.join("")
    );
  }
  return h.join(`
`);
}
function tc(e) {
  return e == null ? "" : String(e);
}
function rc(e) {
  return e.length;
}
function nr(e) {
  const n = typeof e == "string" ? e.codePointAt(0) : 0;
  return n === 67 || n === 99 ? 99 : n === 76 || n === 108 ? 108 : n === 82 || n === 114 ? 114 : 0;
}
function ic(e, n, t, r) {
  const i = t.enter("blockquote"), o = t.createTracker(r);
  o.move("> "), o.shift(2);
  const l = t.indentLines(
    t.containerFlow(e, o.current()),
    lc
  );
  return i(), l;
}
function lc(e, n, t) {
  return ">" + (t ? "" : " ") + e;
}
function oc(e, n) {
  return tr(e, n.inConstruct, !0) && !tr(e, n.notInConstruct, !1);
}
function tr(e, n, t) {
  if (typeof n == "string" && (n = [n]), !n || n.length === 0)
    return t;
  let r = -1;
  for (; ++r < n.length; )
    if (e.includes(n[r]))
      return !0;
  return !1;
}
function rr(e, n, t, r) {
  let i = -1;
  for (; ++i < t.unsafe.length; )
    if (t.unsafe[i].character === `
` && oc(t.stack, t.unsafe[i]))
      return /[ \t]/.test(r.before) ? "" : " ";
  return `\\
`;
}
function ac(e, n) {
  const t = String(e);
  let r = t.indexOf(n), i = r, o = 0, l = 0;
  if (typeof n != "string")
    throw new TypeError("Expected substring");
  for (; r !== -1; )
    r === i ? ++o > l && (l = o) : o = 1, i = r + n.length, r = t.indexOf(n, i);
  return l;
}
function uc(e, n) {
  return !!(n.options.fences === !1 && e.value && // If there’s no info…
  !e.lang && // And there’s a non-whitespace character…
  /[^ \r\n]/.test(e.value) && // And the value doesn’t start or end in a blank…
  !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value));
}
function sc(e) {
  const n = e.options.fence || "`";
  if (n !== "`" && n !== "~")
    throw new Error(
      "Cannot serialize code with `" + n + "` for `options.fence`, expected `` ` `` or `~`"
    );
  return n;
}
function cc(e, n, t, r) {
  const i = sc(t), o = e.value || "", l = i === "`" ? "GraveAccent" : "Tilde";
  if (uc(e, t)) {
    const c = t.enter("codeIndented"), p = t.indentLines(o, fc);
    return c(), p;
  }
  const a = t.createTracker(r), u = i.repeat(Math.max(ac(o, i) + 1, 3)), s = t.enter("codeFenced");
  let f = a.move(u);
  if (e.lang) {
    const c = t.enter(`codeFencedLang${l}`);
    f += a.move(
      t.safe(e.lang, {
        before: f,
        after: " ",
        encode: ["`"],
        ...a.current()
      })
    ), c();
  }
  if (e.lang && e.meta) {
    const c = t.enter(`codeFencedMeta${l}`);
    f += a.move(" "), f += a.move(
      t.safe(e.meta, {
        before: f,
        after: `
`,
        encode: ["`"],
        ...a.current()
      })
    ), c();
  }
  return f += a.move(`
`), o && (f += a.move(o + `
`)), f += a.move(u), s(), f;
}
function fc(e, n, t) {
  return (t ? "" : "    ") + e;
}
function nt(e) {
  const n = e.options.quote || '"';
  if (n !== '"' && n !== "'")
    throw new Error(
      "Cannot serialize title with `" + n + "` for `options.quote`, expected `\"`, or `'`"
    );
  return n;
}
function hc(e, n, t, r) {
  const i = nt(t), o = i === '"' ? "Quote" : "Apostrophe", l = t.enter("definition");
  let a = t.enter("label");
  const u = t.createTracker(r);
  let s = u.move("[");
  return s += u.move(
    t.safe(t.associationId(e), {
      before: s,
      after: "]",
      ...u.current()
    })
  ), s += u.move("]: "), a(), // If there’s no url, or…
  !e.url || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(e.url) ? (a = t.enter("destinationLiteral"), s += u.move("<"), s += u.move(
    t.safe(e.url, { before: s, after: ">", ...u.current() })
  ), s += u.move(">")) : (a = t.enter("destinationRaw"), s += u.move(
    t.safe(e.url, {
      before: s,
      after: e.title ? " " : `
`,
      ...u.current()
    })
  )), a(), e.title && (a = t.enter(`title${o}`), s += u.move(" " + i), s += u.move(
    t.safe(e.title, {
      before: s,
      after: i,
      ...u.current()
    })
  ), s += u.move(i), a()), l(), s;
}
function pc(e) {
  const n = e.options.emphasis || "*";
  if (n !== "*" && n !== "_")
    throw new Error(
      "Cannot serialize emphasis with `" + n + "` for `options.emphasis`, expected `*`, or `_`"
    );
  return n;
}
Jr.peek = mc;
function Jr(e, n, t, r) {
  const i = pc(t), o = t.enter("emphasis"), l = t.createTracker(r);
  let a = l.move(i);
  return a += l.move(
    t.containerPhrasing(e, {
      before: a,
      after: i,
      ...l.current()
    })
  ), a += l.move(i), o(), a;
}
function mc(e, n, t) {
  return t.options.emphasis || "*";
}
function gc(e, n) {
  let t = !1;
  return Zn(e, function(r) {
    if ("value" in r && /\r?\n|\r/.test(r.value) || r.type === "break")
      return t = !0, On;
  }), !!((!e.depth || e.depth < 3) && Wn(e) && (n.options.setext || t));
}
function dc(e, n, t, r) {
  const i = Math.max(Math.min(6, e.depth || 1), 1), o = t.createTracker(r);
  if (gc(e, t)) {
    const f = t.enter("headingSetext"), c = t.enter("phrasing"), p = t.containerPhrasing(e, {
      ...o.current(),
      before: `
`,
      after: `
`
    });
    return c(), f(), p + `
` + (i === 1 ? "=" : "-").repeat(
      // The whole size…
      p.length - // Minus the position of the character after the last EOL (or
      // 0 if there is none)…
      (Math.max(p.lastIndexOf("\r"), p.lastIndexOf(`
`)) + 1)
    );
  }
  const l = "#".repeat(i), a = t.enter("headingAtx"), u = t.enter("phrasing");
  o.move(l + " ");
  let s = t.containerPhrasing(e, {
    before: "# ",
    after: `
`,
    ...o.current()
  });
  return /^[\t ]/.test(s) && (s = "&#x" + s.charCodeAt(0).toString(16).toUpperCase() + ";" + s.slice(1)), s = s ? l + " " + s : l, t.options.closeAtx && (s += " " + l), u(), a(), s;
}
Kr.peek = yc;
function Kr(e) {
  return e.value || "";
}
function yc() {
  return "<";
}
Zr.peek = xc;
function Zr(e, n, t, r) {
  const i = nt(t), o = i === '"' ? "Quote" : "Apostrophe", l = t.enter("image");
  let a = t.enter("label");
  const u = t.createTracker(r);
  let s = u.move("![");
  return s += u.move(
    t.safe(e.alt, { before: s, after: "]", ...u.current() })
  ), s += u.move("]("), a(), // If there’s no url but there is a title…
  !e.url && e.title || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(e.url) ? (a = t.enter("destinationLiteral"), s += u.move("<"), s += u.move(
    t.safe(e.url, { before: s, after: ">", ...u.current() })
  ), s += u.move(">")) : (a = t.enter("destinationRaw"), s += u.move(
    t.safe(e.url, {
      before: s,
      after: e.title ? " " : ")",
      ...u.current()
    })
  )), a(), e.title && (a = t.enter(`title${o}`), s += u.move(" " + i), s += u.move(
    t.safe(e.title, {
      before: s,
      after: i,
      ...u.current()
    })
  ), s += u.move(i), a()), s += u.move(")"), l(), s;
}
function xc() {
  return "!";
}
ei.peek = kc;
function ei(e, n, t, r) {
  const i = e.referenceType, o = t.enter("imageReference");
  let l = t.enter("label");
  const a = t.createTracker(r);
  let u = a.move("![");
  const s = t.safe(e.alt, {
    before: u,
    after: "]",
    ...a.current()
  });
  u += a.move(s + "]["), l();
  const f = t.stack;
  t.stack = [], l = t.enter("reference");
  const c = t.safe(t.associationId(e), {
    before: u,
    after: "]",
    ...a.current()
  });
  return l(), t.stack = f, o(), i === "full" || !s || s !== c ? u += a.move(c + "]") : i === "shortcut" ? u = u.slice(0, -1) : u += a.move("]"), u;
}
function kc() {
  return "!";
}
ni.peek = bc;
function ni(e, n, t) {
  let r = e.value || "", i = "`", o = -1;
  for (; new RegExp("(^|[^`])" + i + "([^`]|$)").test(r); )
    i += "`";
  for (/[^ \r\n]/.test(r) && (/^[ \r\n]/.test(r) && /[ \r\n]$/.test(r) || /^`|`$/.test(r)) && (r = " " + r + " "); ++o < t.unsafe.length; ) {
    const l = t.unsafe[o], a = t.compilePattern(l);
    let u;
    if (l.atBreak)
      for (; u = a.exec(r); ) {
        let s = u.index;
        r.charCodeAt(s) === 10 && r.charCodeAt(s - 1) === 13 && s--, r = r.slice(0, s) + " " + r.slice(u.index + 1);
      }
  }
  return i + r + i;
}
function bc() {
  return "`";
}
function ti(e, n) {
  const t = Wn(e);
  return !!(!n.options.resourceLink && // If there’s a url…
  e.url && // And there’s a no title…
  !e.title && // And the content of `node` is a single text node…
  e.children && e.children.length === 1 && e.children[0].type === "text" && // And if the url is the same as the content…
  (t === e.url || "mailto:" + t === e.url) && // And that starts w/ a protocol…
  /^[a-z][a-z+.-]+:/i.test(e.url) && // And that doesn’t contain ASCII control codes (character escapes and
  // references don’t work), space, or angle brackets…
  !/[\0- <>\u007F]/.test(e.url));
}
ri.peek = wc;
function ri(e, n, t, r) {
  const i = nt(t), o = i === '"' ? "Quote" : "Apostrophe", l = t.createTracker(r);
  let a, u;
  if (ti(e, t)) {
    const f = t.stack;
    t.stack = [], a = t.enter("autolink");
    let c = l.move("<");
    return c += l.move(
      t.containerPhrasing(e, {
        before: c,
        after: ">",
        ...l.current()
      })
    ), c += l.move(">"), a(), t.stack = f, c;
  }
  a = t.enter("link"), u = t.enter("label");
  let s = l.move("[");
  return s += l.move(
    t.containerPhrasing(e, {
      before: s,
      after: "](",
      ...l.current()
    })
  ), s += l.move("]("), u(), // If there’s no url but there is a title…
  !e.url && e.title || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(e.url) ? (u = t.enter("destinationLiteral"), s += l.move("<"), s += l.move(
    t.safe(e.url, { before: s, after: ">", ...l.current() })
  ), s += l.move(">")) : (u = t.enter("destinationRaw"), s += l.move(
    t.safe(e.url, {
      before: s,
      after: e.title ? " " : ")",
      ...l.current()
    })
  )), u(), e.title && (u = t.enter(`title${o}`), s += l.move(" " + i), s += l.move(
    t.safe(e.title, {
      before: s,
      after: i,
      ...l.current()
    })
  ), s += l.move(i), u()), s += l.move(")"), a(), s;
}
function wc(e, n, t) {
  return ti(e, t) ? "<" : "[";
}
ii.peek = Sc;
function ii(e, n, t, r) {
  const i = e.referenceType, o = t.enter("linkReference");
  let l = t.enter("label");
  const a = t.createTracker(r);
  let u = a.move("[");
  const s = t.containerPhrasing(e, {
    before: u,
    after: "]",
    ...a.current()
  });
  u += a.move(s + "]["), l();
  const f = t.stack;
  t.stack = [], l = t.enter("reference");
  const c = t.safe(t.associationId(e), {
    before: u,
    after: "]",
    ...a.current()
  });
  return l(), t.stack = f, o(), i === "full" || !s || s !== c ? u += a.move(c + "]") : i === "shortcut" ? u = u.slice(0, -1) : u += a.move("]"), u;
}
function Sc() {
  return "[";
}
function tt(e) {
  const n = e.options.bullet || "*";
  if (n !== "*" && n !== "+" && n !== "-")
    throw new Error(
      "Cannot serialize items with `" + n + "` for `options.bullet`, expected `*`, `+`, or `-`"
    );
  return n;
}
function Cc(e) {
  const n = tt(e), t = e.options.bulletOther;
  if (!t)
    return n === "*" ? "-" : "*";
  if (t !== "*" && t !== "+" && t !== "-")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.bulletOther`, expected `*`, `+`, or `-`"
    );
  if (t === n)
    throw new Error(
      "Expected `bullet` (`" + n + "`) and `bulletOther` (`" + t + "`) to be different"
    );
  return t;
}
function Ec(e) {
  const n = e.options.bulletOrdered || ".";
  if (n !== "." && n !== ")")
    throw new Error(
      "Cannot serialize items with `" + n + "` for `options.bulletOrdered`, expected `.` or `)`"
    );
  return n;
}
function li(e) {
  const n = e.options.rule || "*";
  if (n !== "*" && n !== "-" && n !== "_")
    throw new Error(
      "Cannot serialize rules with `" + n + "` for `options.rule`, expected `*`, `-`, or `_`"
    );
  return n;
}
function Ic(e, n, t, r) {
  const i = t.enter("list"), o = t.bulletCurrent;
  let l = e.ordered ? Ec(t) : tt(t);
  const a = e.ordered ? l === "." ? ")" : "." : Cc(t);
  let u = n && t.bulletLastUsed ? l === t.bulletLastUsed : !1;
  if (!e.ordered) {
    const f = e.children ? e.children[0] : void 0;
    if (
      // Bullet could be used as a thematic break marker:
      (l === "*" || l === "-") && // Empty first list item:
      f && (!f.children || !f.children[0]) && // Directly in two other list items:
      t.stack[t.stack.length - 1] === "list" && t.stack[t.stack.length - 2] === "listItem" && t.stack[t.stack.length - 3] === "list" && t.stack[t.stack.length - 4] === "listItem" && // That are each the first child.
      t.indexStack[t.indexStack.length - 1] === 0 && t.indexStack[t.indexStack.length - 2] === 0 && t.indexStack[t.indexStack.length - 3] === 0 && (u = !0), li(t) === l && f
    ) {
      let c = -1;
      for (; ++c < e.children.length; ) {
        const p = e.children[c];
        if (p && p.type === "listItem" && p.children && p.children[0] && p.children[0].type === "thematicBreak") {
          u = !0;
          break;
        }
      }
    }
  }
  u && (l = a), t.bulletCurrent = l;
  const s = t.containerFlow(e, r);
  return t.bulletLastUsed = l, t.bulletCurrent = o, i(), s;
}
function Tc(e) {
  const n = e.options.listItemIndent || "one";
  if (n !== "tab" && n !== "one" && n !== "mixed")
    throw new Error(
      "Cannot serialize items with `" + n + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`"
    );
  return n;
}
function Ac(e, n, t, r) {
  const i = Tc(t);
  let o = t.bulletCurrent || tt(t);
  n && n.type === "list" && n.ordered && (o = (typeof n.start == "number" && n.start > -1 ? n.start : 1) + (t.options.incrementListMarker === !1 ? 0 : n.children.indexOf(e)) + o);
  let l = o.length + 1;
  (i === "tab" || i === "mixed" && (n && n.type === "list" && n.spread || e.spread)) && (l = Math.ceil(l / 4) * 4);
  const a = t.createTracker(r);
  a.move(o + " ".repeat(l - o.length)), a.shift(l);
  const u = t.enter("listItem"), s = t.indentLines(
    t.containerFlow(e, a.current()),
    f
  );
  return u(), s;
  function f(c, p, h) {
    return p ? (h ? "" : " ".repeat(l)) + c : (h ? o : o + " ".repeat(l - o.length)) + c;
  }
}
function Pc(e, n, t, r) {
  const i = t.enter("paragraph"), o = t.enter("phrasing"), l = t.containerPhrasing(e, r);
  return o(), i(), l;
}
const vc = (
  /** @type {(node?: unknown) => node is Exclude<PhrasingContent, Html>} */
  fn([
    "break",
    "delete",
    "emphasis",
    // To do: next major: removed since footnotes were added to GFM.
    "footnote",
    "footnoteReference",
    "image",
    "imageReference",
    "inlineCode",
    // Enabled by `mdast-util-math`:
    "inlineMath",
    "link",
    "linkReference",
    // Enabled by `mdast-util-mdx`:
    "mdxJsxTextElement",
    // Enabled by `mdast-util-mdx`:
    "mdxTextExpression",
    "strong",
    "text",
    // Enabled by `mdast-util-directive`:
    "textDirective"
  ])
);
function Lc(e, n, t, r) {
  return (e.children.some(function(l) {
    return vc(l);
  }) ? t.containerPhrasing : t.containerFlow).call(t, e, r);
}
function zc(e) {
  const n = e.options.strong || "*";
  if (n !== "*" && n !== "_")
    throw new Error(
      "Cannot serialize strong with `" + n + "` for `options.strong`, expected `*`, or `_`"
    );
  return n;
}
oi.peek = Dc;
function oi(e, n, t, r) {
  const i = zc(t), o = t.enter("strong"), l = t.createTracker(r);
  let a = l.move(i + i);
  return a += l.move(
    t.containerPhrasing(e, {
      before: a,
      after: i,
      ...l.current()
    })
  ), a += l.move(i + i), o(), a;
}
function Dc(e, n, t) {
  return t.options.strong || "*";
}
function Fc(e, n, t, r) {
  return t.safe(e.value, r);
}
function Oc(e) {
  const n = e.options.ruleRepetition || 3;
  if (n < 3)
    throw new Error(
      "Cannot serialize rules with repetition `" + n + "` for `options.ruleRepetition`, expected `3` or more"
    );
  return n;
}
function Rc(e, n, t) {
  const r = (li(t) + (t.options.ruleSpaces ? " " : "")).repeat(Oc(t));
  return t.options.ruleSpaces ? r.slice(0, -1) : r;
}
const ai = {
  blockquote: ic,
  break: rr,
  code: cc,
  definition: hc,
  emphasis: Jr,
  hardBreak: rr,
  heading: dc,
  html: Kr,
  image: Zr,
  imageReference: ei,
  inlineCode: ni,
  link: ri,
  linkReference: ii,
  list: Ic,
  listItem: Ac,
  paragraph: Pc,
  root: Lc,
  strong: oi,
  text: Fc,
  thematicBreak: Rc
};
function _c() {
  return {
    enter: {
      table: Mc,
      tableData: ir,
      tableHeader: ir,
      tableRow: jc
    },
    exit: {
      codeText: Bc,
      table: Nc,
      tableData: Pn,
      tableHeader: Pn,
      tableRow: Pn
    }
  };
}
function Mc(e) {
  const n = e._align;
  this.enter(
    {
      type: "table",
      align: n.map(function(t) {
        return t === "none" ? null : t;
      }),
      children: []
    },
    e
  ), this.data.inTable = !0;
}
function Nc(e) {
  this.exit(e), this.data.inTable = void 0;
}
function jc(e) {
  this.enter({ type: "tableRow", children: [] }, e);
}
function Pn(e) {
  this.exit(e);
}
function ir(e) {
  this.enter({ type: "tableCell", children: [] }, e);
}
function Bc(e) {
  let n = this.resume();
  this.data.inTable && (n = n.replace(/\\([\\|])/g, Hc));
  const t = this.stack[this.stack.length - 1];
  t.type, t.value = n, this.exit(e);
}
function Hc(e, n) {
  return n === "|" ? n : e;
}
function Uc(e) {
  const n = e || {}, t = n.tableCellPadding, r = n.tablePipeAlign, i = n.stringLength, o = t ? " " : "|";
  return {
    unsafe: [
      { character: "\r", inConstruct: "tableCell" },
      { character: `
`, inConstruct: "tableCell" },
      // A pipe, when followed by a tab or space (padding), or a dash or colon
      // (unpadded delimiter row), could result in a table.
      { atBreak: !0, character: "|", after: "[	 :-]" },
      // A pipe in a cell must be encoded.
      { character: "|", inConstruct: "tableCell" },
      // A colon must be followed by a dash, in which case it could start a
      // delimiter row.
      { atBreak: !0, character: ":", after: "-" },
      // A delimiter row can also start with a dash, when followed by more
      // dashes, a colon, or a pipe.
      // This is a stricter version than the built in check for lists, thematic
      // breaks, and setex heading underlines though:
      // <https://github.com/syntax-tree/mdast-util-to-markdown/blob/51a2038/lib/unsafe.js#L57>
      { atBreak: !0, character: "-", after: "[:|-]" }
    ],
    handlers: {
      inlineCode: p,
      table: l,
      tableCell: u,
      tableRow: a
    }
  };
  function l(h, g, x, S) {
    return s(f(h, x, S), h.align);
  }
  function a(h, g, x, S) {
    const k = c(h, x, S), C = s([k]);
    return C.slice(0, C.indexOf(`
`));
  }
  function u(h, g, x, S) {
    const k = x.enter("tableCell"), C = x.enter("phrasing"), I = x.containerPhrasing(h, {
      ...S,
      before: o,
      after: o
    });
    return C(), k(), I;
  }
  function s(h, g) {
    return nc(h, {
      align: g,
      // @ts-expect-error: `markdown-table` types should support `null`.
      alignDelimiters: r,
      // @ts-expect-error: `markdown-table` types should support `null`.
      padding: t,
      // @ts-expect-error: `markdown-table` types should support `null`.
      stringLength: i
    });
  }
  function f(h, g, x) {
    const S = h.children;
    let k = -1;
    const C = [], I = g.enter("table");
    for (; ++k < S.length; )
      C[k] = c(S[k], g, x);
    return I(), C;
  }
  function c(h, g, x) {
    const S = h.children;
    let k = -1;
    const C = [], I = g.enter("tableRow");
    for (; ++k < S.length; )
      C[k] = u(S[k], h, g, x);
    return I(), C;
  }
  function p(h, g, x) {
    let S = ai.inlineCode(h, g, x);
    return x.stack.includes("tableCell") && (S = S.replace(/\|/g, "\\$&")), S;
  }
}
function $c() {
  return {
    exit: {
      taskListCheckValueChecked: lr,
      taskListCheckValueUnchecked: lr,
      paragraph: Vc
    }
  };
}
function qc() {
  return {
    unsafe: [{ atBreak: !0, character: "-", after: "[:|-]" }],
    handlers: { listItem: Wc }
  };
}
function lr(e) {
  const n = this.stack[this.stack.length - 2];
  n.type, n.checked = e.type === "taskListCheckValueChecked";
}
function Vc(e) {
  const n = this.stack[this.stack.length - 2];
  if (n && n.type === "listItem" && typeof n.checked == "boolean") {
    const t = this.stack[this.stack.length - 1];
    t.type;
    const r = t.children[0];
    if (r && r.type === "text") {
      const i = n.children;
      let o = -1, l;
      for (; ++o < i.length; ) {
        const a = i[o];
        if (a.type === "paragraph") {
          l = a;
          break;
        }
      }
      l === t && (r.value = r.value.slice(1), r.value.length === 0 ? t.children.shift() : t.position && r.position && typeof r.position.start.offset == "number" && (r.position.start.column++, r.position.start.offset++, t.position.start = Object.assign({}, r.position.start)));
    }
  }
  this.exit(e);
}
function Wc(e, n, t, r) {
  const i = e.children[0], o = typeof e.checked == "boolean" && i && i.type === "paragraph", l = "[" + (e.checked ? "x" : " ") + "] ", a = t.createTracker(r);
  o && a.move(l);
  let u = ai.listItem(e, n, t, {
    ...r,
    ...a.current()
  });
  return o && (u = u.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, s)), u;
  function s(f) {
    return f + l;
  }
}
function Yc() {
  return [
    Es(),
    _s(),
    Gs(),
    _c(),
    $c()
  ];
}
function Qc(e) {
  return {
    extensions: [
      Is(),
      Ms(),
      Js(),
      Uc(e),
      qc()
    ]
  };
}
const Xc = {
  tokenize: nf,
  partial: !0
}, ui = {
  tokenize: tf,
  partial: !0
}, si = {
  tokenize: rf,
  partial: !0
}, ci = {
  tokenize: lf,
  partial: !0
}, Gc = {
  tokenize: of,
  partial: !0
}, fi = {
  name: "wwwAutolink",
  tokenize: Zc,
  previous: pi
}, hi = {
  name: "protocolAutolink",
  tokenize: ef,
  previous: mi
}, ye = {
  name: "emailAutolink",
  tokenize: Kc,
  previous: gi
}, he = {};
function Jc() {
  return {
    text: he
  };
}
let Ee = 48;
for (; Ee < 123; )
  he[Ee] = ye, Ee++, Ee === 58 ? Ee = 65 : Ee === 91 && (Ee = 97);
he[43] = ye;
he[45] = ye;
he[46] = ye;
he[95] = ye;
he[72] = [ye, hi];
he[104] = [ye, hi];
he[87] = [ye, fi];
he[119] = [ye, fi];
function Kc(e, n, t) {
  const r = this;
  let i, o;
  return l;
  function l(c) {
    return !Nn(c) || !gi.call(r, r.previous) || rt(r.events) ? t(c) : (e.enter("literalAutolink"), e.enter("literalAutolinkEmail"), a(c));
  }
  function a(c) {
    return Nn(c) ? (e.consume(c), a) : c === 64 ? (e.consume(c), u) : t(c);
  }
  function u(c) {
    return c === 46 ? e.check(Gc, f, s)(c) : c === 45 || c === 95 || J(c) ? (o = !0, e.consume(c), u) : f(c);
  }
  function s(c) {
    return e.consume(c), i = !0, u;
  }
  function f(c) {
    return o && i && Z(r.previous) ? (e.exit("literalAutolinkEmail"), e.exit("literalAutolink"), n(c)) : t(c);
  }
}
function Zc(e, n, t) {
  const r = this;
  return i;
  function i(l) {
    return l !== 87 && l !== 119 || !pi.call(r, r.previous) || rt(r.events) ? t(l) : (e.enter("literalAutolink"), e.enter("literalAutolinkWww"), e.check(Xc, e.attempt(ui, e.attempt(si, o), t), t)(l));
  }
  function o(l) {
    return e.exit("literalAutolinkWww"), e.exit("literalAutolink"), n(l);
  }
}
function ef(e, n, t) {
  const r = this;
  let i = "", o = !1;
  return l;
  function l(c) {
    return (c === 72 || c === 104) && mi.call(r, r.previous) && !rt(r.events) ? (e.enter("literalAutolink"), e.enter("literalAutolinkHttp"), i += String.fromCodePoint(c), e.consume(c), a) : t(c);
  }
  function a(c) {
    if (Z(c) && i.length < 5)
      return i += String.fromCodePoint(c), e.consume(c), a;
    if (c === 58) {
      const p = i.toLowerCase();
      if (p === "http" || p === "https")
        return e.consume(c), u;
    }
    return t(c);
  }
  function u(c) {
    return c === 47 ? (e.consume(c), o ? s : (o = !0, u)) : t(c);
  }
  function s(c) {
    return c === null || tn(c) || $(c) || Te(c) || un(c) ? t(c) : e.attempt(ui, e.attempt(si, f), t)(c);
  }
  function f(c) {
    return e.exit("literalAutolinkHttp"), e.exit("literalAutolink"), n(c);
  }
}
function nf(e, n, t) {
  let r = 0;
  return i;
  function i(l) {
    return (l === 87 || l === 119) && r < 3 ? (r++, e.consume(l), i) : l === 46 && r === 3 ? (e.consume(l), o) : t(l);
  }
  function o(l) {
    return l === null ? t(l) : n(l);
  }
}
function tf(e, n, t) {
  let r, i, o;
  return l;
  function l(s) {
    return s === 46 || s === 95 ? e.check(ci, u, a)(s) : s === null || $(s) || Te(s) || s !== 45 && un(s) ? u(s) : (o = !0, e.consume(s), l);
  }
  function a(s) {
    return s === 95 ? r = !0 : (i = r, r = void 0), e.consume(s), l;
  }
  function u(s) {
    return i || r || !o ? t(s) : n(s);
  }
}
function rf(e, n) {
  let t = 0, r = 0;
  return i;
  function i(l) {
    return l === 40 ? (t++, e.consume(l), i) : l === 41 && r < t ? o(l) : l === 33 || l === 34 || l === 38 || l === 39 || l === 41 || l === 42 || l === 44 || l === 46 || l === 58 || l === 59 || l === 60 || l === 63 || l === 93 || l === 95 || l === 126 ? e.check(ci, n, o)(l) : l === null || $(l) || Te(l) ? n(l) : (e.consume(l), i);
  }
  function o(l) {
    return l === 41 && r++, e.consume(l), i;
  }
}
function lf(e, n, t) {
  return r;
  function r(a) {
    return a === 33 || a === 34 || a === 39 || a === 41 || a === 42 || a === 44 || a === 46 || a === 58 || a === 59 || a === 63 || a === 95 || a === 126 ? (e.consume(a), r) : a === 38 ? (e.consume(a), o) : a === 93 ? (e.consume(a), i) : (
      // `<` is an end.
      a === 60 || // So is whitespace.
      a === null || $(a) || Te(a) ? n(a) : t(a)
    );
  }
  function i(a) {
    return a === null || a === 40 || a === 91 || $(a) || Te(a) ? n(a) : r(a);
  }
  function o(a) {
    return Z(a) ? l(a) : t(a);
  }
  function l(a) {
    return a === 59 ? (e.consume(a), r) : Z(a) ? (e.consume(a), l) : t(a);
  }
}
function of(e, n, t) {
  return r;
  function r(o) {
    return e.consume(o), i;
  }
  function i(o) {
    return J(o) ? t(o) : n(o);
  }
}
function pi(e) {
  return e === null || e === 40 || e === 42 || e === 95 || e === 91 || e === 93 || e === 126 || $(e);
}
function mi(e) {
  return !Z(e);
}
function gi(e) {
  return !(e === 47 || Nn(e));
}
function Nn(e) {
  return e === 43 || e === 45 || e === 46 || e === 95 || J(e);
}
function rt(e) {
  let n = e.length, t = !1;
  for (; n--; ) {
    const r = e[n][1];
    if ((r.type === "labelLink" || r.type === "labelImage") && !r._balanced) {
      t = !0;
      break;
    }
    if (r._gfmAutolinkLiteralWalkedInto) {
      t = !1;
      break;
    }
  }
  return e.length > 0 && !t && (e[e.length - 1][1]._gfmAutolinkLiteralWalkedInto = !0), t;
}
const af = {
  tokenize: gf,
  partial: !0
};
function uf() {
  return {
    document: {
      91: {
        name: "gfmFootnoteDefinition",
        tokenize: hf,
        continuation: {
          tokenize: pf
        },
        exit: mf
      }
    },
    text: {
      91: {
        name: "gfmFootnoteCall",
        tokenize: ff
      },
      93: {
        name: "gfmPotentialFootnoteCall",
        add: "after",
        tokenize: sf,
        resolveTo: cf
      }
    }
  };
}
function sf(e, n, t) {
  const r = this;
  let i = r.events.length;
  const o = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let l;
  for (; i--; ) {
    const u = r.events[i][1];
    if (u.type === "labelImage") {
      l = u;
      break;
    }
    if (u.type === "gfmFootnoteCall" || u.type === "labelLink" || u.type === "label" || u.type === "image" || u.type === "link")
      break;
  }
  return a;
  function a(u) {
    if (!l || !l._balanced)
      return t(u);
    const s = ce(r.sliceSerialize({
      start: l.end,
      end: r.now()
    }));
    return s.codePointAt(0) !== 94 || !o.includes(s.slice(1)) ? t(u) : (e.enter("gfmFootnoteCallLabelMarker"), e.consume(u), e.exit("gfmFootnoteCallLabelMarker"), n(u));
  }
}
function cf(e, n) {
  let t = e.length;
  for (; t--; )
    if (e[t][1].type === "labelImage" && e[t][0] === "enter") {
      e[t][1];
      break;
    }
  e[t + 1][1].type = "data", e[t + 3][1].type = "gfmFootnoteCallLabelMarker";
  const r = {
    type: "gfmFootnoteCall",
    start: Object.assign({}, e[t + 3][1].start),
    end: Object.assign({}, e[e.length - 1][1].end)
  }, i = {
    type: "gfmFootnoteCallMarker",
    start: Object.assign({}, e[t + 3][1].end),
    end: Object.assign({}, e[t + 3][1].end)
  };
  i.end.column++, i.end.offset++, i.end._bufferIndex++;
  const o = {
    type: "gfmFootnoteCallString",
    start: Object.assign({}, i.end),
    end: Object.assign({}, e[e.length - 1][1].start)
  }, l = {
    type: "chunkString",
    contentType: "string",
    start: Object.assign({}, o.start),
    end: Object.assign({}, o.end)
  }, a = [
    // Take the `labelImageMarker` (now `data`, the `!`)
    e[t + 1],
    e[t + 2],
    ["enter", r, n],
    // The `[`
    e[t + 3],
    e[t + 4],
    // The `^`.
    ["enter", i, n],
    ["exit", i, n],
    // Everything in between.
    ["enter", o, n],
    ["enter", l, n],
    ["exit", l, n],
    ["exit", o, n],
    // The ending (`]`, properly parsed and labelled).
    e[e.length - 2],
    e[e.length - 1],
    ["exit", r, n]
  ];
  return e.splice(t, e.length - t + 1, ...a), e;
}
function ff(e, n, t) {
  const r = this, i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let o = 0, l;
  return a;
  function a(c) {
    return e.enter("gfmFootnoteCall"), e.enter("gfmFootnoteCallLabelMarker"), e.consume(c), e.exit("gfmFootnoteCallLabelMarker"), u;
  }
  function u(c) {
    return c !== 94 ? t(c) : (e.enter("gfmFootnoteCallMarker"), e.consume(c), e.exit("gfmFootnoteCallMarker"), e.enter("gfmFootnoteCallString"), e.enter("chunkString").contentType = "string", s);
  }
  function s(c) {
    if (
      // Too long.
      o > 999 || // Closing brace with nothing.
      c === 93 && !l || // Space or tab is not supported by GFM for some reason.
      // `\n` and `[` not being supported makes sense.
      c === null || c === 91 || $(c)
    )
      return t(c);
    if (c === 93) {
      e.exit("chunkString");
      const p = e.exit("gfmFootnoteCallString");
      return i.includes(ce(r.sliceSerialize(p))) ? (e.enter("gfmFootnoteCallLabelMarker"), e.consume(c), e.exit("gfmFootnoteCallLabelMarker"), e.exit("gfmFootnoteCall"), n) : t(c);
    }
    return $(c) || (l = !0), o++, e.consume(c), c === 92 ? f : s;
  }
  function f(c) {
    return c === 91 || c === 92 || c === 93 ? (e.consume(c), o++, s) : s(c);
  }
}
function hf(e, n, t) {
  const r = this, i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let o, l = 0, a;
  return u;
  function u(g) {
    return e.enter("gfmFootnoteDefinition")._container = !0, e.enter("gfmFootnoteDefinitionLabel"), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(g), e.exit("gfmFootnoteDefinitionLabelMarker"), s;
  }
  function s(g) {
    return g === 94 ? (e.enter("gfmFootnoteDefinitionMarker"), e.consume(g), e.exit("gfmFootnoteDefinitionMarker"), e.enter("gfmFootnoteDefinitionLabelString"), e.enter("chunkString").contentType = "string", f) : t(g);
  }
  function f(g) {
    if (
      // Too long.
      l > 999 || // Closing brace with nothing.
      g === 93 && !a || // Space or tab is not supported by GFM for some reason.
      // `\n` and `[` not being supported makes sense.
      g === null || g === 91 || $(g)
    )
      return t(g);
    if (g === 93) {
      e.exit("chunkString");
      const x = e.exit("gfmFootnoteDefinitionLabelString");
      return o = ce(r.sliceSerialize(x)), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(g), e.exit("gfmFootnoteDefinitionLabelMarker"), e.exit("gfmFootnoteDefinitionLabel"), p;
    }
    return $(g) || (a = !0), l++, e.consume(g), g === 92 ? c : f;
  }
  function c(g) {
    return g === 91 || g === 92 || g === 93 ? (e.consume(g), l++, f) : f(g);
  }
  function p(g) {
    return g === 58 ? (e.enter("definitionMarker"), e.consume(g), e.exit("definitionMarker"), i.includes(o) || i.push(o), N(e, h, "gfmFootnoteDefinitionWhitespace")) : t(g);
  }
  function h(g) {
    return n(g);
  }
}
function pf(e, n, t) {
  return e.check(Ye, n, e.attempt(af, n, t));
}
function mf(e) {
  e.exit("gfmFootnoteDefinition");
}
function gf(e, n, t) {
  const r = this;
  return N(e, i, "gfmFootnoteDefinitionIndent", 5);
  function i(o) {
    const l = r.events[r.events.length - 1];
    return l && l[1].type === "gfmFootnoteDefinitionIndent" && l[2].sliceSerialize(l[1], !0).length === 4 ? n(o) : t(o);
  }
}
function df(e) {
  let t = (e || {}).singleTilde;
  const r = {
    name: "strikethrough",
    tokenize: o,
    resolveAll: i
  };
  return t == null && (t = !0), {
    text: {
      126: r
    },
    insideSpan: {
      null: [r]
    },
    attentionMarkers: {
      null: [126]
    }
  };
  function i(l, a) {
    let u = -1;
    for (; ++u < l.length; )
      if (l[u][0] === "enter" && l[u][1].type === "strikethroughSequenceTemporary" && l[u][1]._close) {
        let s = u;
        for (; s--; )
          if (l[s][0] === "exit" && l[s][1].type === "strikethroughSequenceTemporary" && l[s][1]._open && // If the sizes are the same:
          l[u][1].end.offset - l[u][1].start.offset === l[s][1].end.offset - l[s][1].start.offset) {
            l[u][1].type = "strikethroughSequence", l[s][1].type = "strikethroughSequence";
            const f = {
              type: "strikethrough",
              start: Object.assign({}, l[s][1].start),
              end: Object.assign({}, l[u][1].end)
            }, c = {
              type: "strikethroughText",
              start: Object.assign({}, l[s][1].end),
              end: Object.assign({}, l[u][1].start)
            }, p = [["enter", f, a], ["enter", l[s][1], a], ["exit", l[s][1], a], ["enter", c, a]], h = a.parser.constructs.insideSpan.null;
            h && ie(p, p.length, 0, sn(h, l.slice(s + 1, u), a)), ie(p, p.length, 0, [["exit", c, a], ["enter", l[u][1], a], ["exit", l[u][1], a], ["exit", f, a]]), ie(l, s - 1, u - s + 3, p), u = s + p.length - 2;
            break;
          }
      }
    for (u = -1; ++u < l.length; )
      l[u][1].type === "strikethroughSequenceTemporary" && (l[u][1].type = "data");
    return l;
  }
  function o(l, a, u) {
    const s = this.previous, f = this.events;
    let c = 0;
    return p;
    function p(g) {
      return s === 126 && f[f.length - 1][1].type !== "characterEscape" ? u(g) : (l.enter("strikethroughSequenceTemporary"), h(g));
    }
    function h(g) {
      const x = rn(s);
      if (g === 126)
        return c > 1 ? u(g) : (l.consume(g), c++, h);
      if (c < 2 && !t) return u(g);
      const S = l.exit("strikethroughSequenceTemporary"), k = rn(g);
      return S._open = !k || k === 2 && !!x, S._close = !x || x === 2 && !!k, a(g);
    }
  }
}
class yf {
  /**
   * Create a new edit map.
   */
  constructor() {
    this.map = [];
  }
  /**
   * Create an edit: a remove and/or add at a certain place.
   *
   * @param {number} index
   * @param {number} remove
   * @param {Array<Event>} add
   * @returns {undefined}
   */
  add(n, t, r) {
    xf(this, n, t, r);
  }
  // To do: add this when moving to `micromark`.
  // /**
  //  * Create an edit: but insert `add` before existing additions.
  //  *
  //  * @param {number} index
  //  * @param {number} remove
  //  * @param {Array<Event>} add
  //  * @returns {undefined}
  //  */
  // addBefore(index, remove, add) {
  //   addImplementation(this, index, remove, add, true)
  // }
  /**
   * Done, change the events.
   *
   * @param {Array<Event>} events
   * @returns {undefined}
   */
  consume(n) {
    if (this.map.sort(function(o, l) {
      return o[0] - l[0];
    }), this.map.length === 0)
      return;
    let t = this.map.length;
    const r = [];
    for (; t > 0; )
      t -= 1, r.push(n.slice(this.map[t][0] + this.map[t][1]), this.map[t][2]), n.length = this.map[t][0];
    r.push([...n]), n.length = 0;
    let i = r.pop();
    for (; i; )
      n.push(...i), i = r.pop();
    this.map.length = 0;
  }
}
function xf(e, n, t, r) {
  let i = 0;
  if (!(t === 0 && r.length === 0)) {
    for (; i < e.map.length; ) {
      if (e.map[i][0] === n) {
        e.map[i][1] += t, e.map[i][2].push(...r);
        return;
      }
      i += 1;
    }
    e.map.push([n, t, r]);
  }
}
function kf(e, n) {
  let t = !1;
  const r = [];
  for (; n < e.length; ) {
    const i = e[n];
    if (t) {
      if (i[0] === "enter")
        i[1].type === "tableContent" && r.push(e[n + 1][1].type === "tableDelimiterMarker" ? "left" : "none");
      else if (i[1].type === "tableContent") {
        if (e[n - 1][1].type === "tableDelimiterMarker") {
          const o = r.length - 1;
          r[o] = r[o] === "left" ? "center" : "right";
        }
      } else if (i[1].type === "tableDelimiterRow")
        break;
    } else i[0] === "enter" && i[1].type === "tableDelimiterRow" && (t = !0);
    n += 1;
  }
  return r;
}
function bf() {
  return {
    flow: {
      null: {
        name: "table",
        tokenize: wf,
        resolveAll: Sf
      }
    }
  };
}
function wf(e, n, t) {
  const r = this;
  let i = 0, o = 0, l;
  return a;
  function a(y) {
    let P = r.events.length - 1;
    for (; P > -1; ) {
      const W = r.events[P][1].type;
      if (W === "lineEnding" || // Note: markdown-rs uses `whitespace` instead of `linePrefix`
      W === "linePrefix") P--;
      else break;
    }
    const v = P > -1 ? r.events[P][1].type : null, H = v === "tableHead" || v === "tableRow" ? w : u;
    return H === w && r.parser.lazy[r.now().line] ? t(y) : H(y);
  }
  function u(y) {
    return e.enter("tableHead"), e.enter("tableRow"), s(y);
  }
  function s(y) {
    return y === 124 || (l = !0, o += 1), f(y);
  }
  function f(y) {
    return y === null ? t(y) : L(y) ? o > 1 ? (o = 0, r.interrupt = !0, e.exit("tableRow"), e.enter("lineEnding"), e.consume(y), e.exit("lineEnding"), h) : t(y) : R(y) ? N(e, f, "whitespace")(y) : (o += 1, l && (l = !1, i += 1), y === 124 ? (e.enter("tableCellDivider"), e.consume(y), e.exit("tableCellDivider"), l = !0, f) : (e.enter("data"), c(y)));
  }
  function c(y) {
    return y === null || y === 124 || $(y) ? (e.exit("data"), f(y)) : (e.consume(y), y === 92 ? p : c);
  }
  function p(y) {
    return y === 92 || y === 124 ? (e.consume(y), c) : c(y);
  }
  function h(y) {
    return r.interrupt = !1, r.parser.lazy[r.now().line] ? t(y) : (e.enter("tableDelimiterRow"), l = !1, R(y) ? N(e, g, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(y) : g(y));
  }
  function g(y) {
    return y === 45 || y === 58 ? S(y) : y === 124 ? (l = !0, e.enter("tableCellDivider"), e.consume(y), e.exit("tableCellDivider"), x) : D(y);
  }
  function x(y) {
    return R(y) ? N(e, S, "whitespace")(y) : S(y);
  }
  function S(y) {
    return y === 58 ? (o += 1, l = !0, e.enter("tableDelimiterMarker"), e.consume(y), e.exit("tableDelimiterMarker"), k) : y === 45 ? (o += 1, k(y)) : y === null || L(y) ? z(y) : D(y);
  }
  function k(y) {
    return y === 45 ? (e.enter("tableDelimiterFiller"), C(y)) : D(y);
  }
  function C(y) {
    return y === 45 ? (e.consume(y), C) : y === 58 ? (l = !0, e.exit("tableDelimiterFiller"), e.enter("tableDelimiterMarker"), e.consume(y), e.exit("tableDelimiterMarker"), I) : (e.exit("tableDelimiterFiller"), I(y));
  }
  function I(y) {
    return R(y) ? N(e, z, "whitespace")(y) : z(y);
  }
  function z(y) {
    return y === 124 ? g(y) : y === null || L(y) ? !l || i !== o ? D(y) : (e.exit("tableDelimiterRow"), e.exit("tableHead"), n(y)) : D(y);
  }
  function D(y) {
    return t(y);
  }
  function w(y) {
    return e.enter("tableRow"), _(y);
  }
  function _(y) {
    return y === 124 ? (e.enter("tableCellDivider"), e.consume(y), e.exit("tableCellDivider"), _) : y === null || L(y) ? (e.exit("tableRow"), n(y)) : R(y) ? N(e, _, "whitespace")(y) : (e.enter("data"), V(y));
  }
  function V(y) {
    return y === null || y === 124 || $(y) ? (e.exit("data"), _(y)) : (e.consume(y), y === 92 ? B : V);
  }
  function B(y) {
    return y === 92 || y === 124 ? (e.consume(y), V) : V(y);
  }
}
function Sf(e, n) {
  let t = -1, r = !0, i = 0, o = [0, 0, 0, 0], l = [0, 0, 0, 0], a = !1, u = 0, s, f, c;
  const p = new yf();
  for (; ++t < e.length; ) {
    const h = e[t], g = h[1];
    h[0] === "enter" ? g.type === "tableHead" ? (a = !1, u !== 0 && (or(p, n, u, s, f), f = void 0, u = 0), s = {
      type: "table",
      start: Object.assign({}, g.start),
      // Note: correct end is set later.
      end: Object.assign({}, g.end)
    }, p.add(t, 0, [["enter", s, n]])) : g.type === "tableRow" || g.type === "tableDelimiterRow" ? (r = !0, c = void 0, o = [0, 0, 0, 0], l = [0, t + 1, 0, 0], a && (a = !1, f = {
      type: "tableBody",
      start: Object.assign({}, g.start),
      // Note: correct end is set later.
      end: Object.assign({}, g.end)
    }, p.add(t, 0, [["enter", f, n]])), i = g.type === "tableDelimiterRow" ? 2 : f ? 3 : 1) : i && (g.type === "data" || g.type === "tableDelimiterMarker" || g.type === "tableDelimiterFiller") ? (r = !1, l[2] === 0 && (o[1] !== 0 && (l[0] = l[1], c = Ze(p, n, o, i, void 0, c), o = [0, 0, 0, 0]), l[2] = t)) : g.type === "tableCellDivider" && (r ? r = !1 : (o[1] !== 0 && (l[0] = l[1], c = Ze(p, n, o, i, void 0, c)), o = l, l = [o[1], t, 0, 0])) : g.type === "tableHead" ? (a = !0, u = t) : g.type === "tableRow" || g.type === "tableDelimiterRow" ? (u = t, o[1] !== 0 ? (l[0] = l[1], c = Ze(p, n, o, i, t, c)) : l[1] !== 0 && (c = Ze(p, n, l, i, t, c)), i = 0) : i && (g.type === "data" || g.type === "tableDelimiterMarker" || g.type === "tableDelimiterFiller") && (l[3] = t);
  }
  for (u !== 0 && or(p, n, u, s, f), p.consume(n.events), t = -1; ++t < n.events.length; ) {
    const h = n.events[t];
    h[0] === "enter" && h[1].type === "table" && (h[1]._align = kf(n.events, t));
  }
  return e;
}
function Ze(e, n, t, r, i, o) {
  const l = r === 1 ? "tableHeader" : r === 2 ? "tableDelimiter" : "tableData", a = "tableContent";
  t[0] !== 0 && (o.end = Object.assign({}, De(n.events, t[0])), e.add(t[0], 0, [["exit", o, n]]));
  const u = De(n.events, t[1]);
  if (o = {
    type: l,
    start: Object.assign({}, u),
    // Note: correct end is set later.
    end: Object.assign({}, u)
  }, e.add(t[1], 0, [["enter", o, n]]), t[2] !== 0) {
    const s = De(n.events, t[2]), f = De(n.events, t[3]), c = {
      type: a,
      start: Object.assign({}, s),
      end: Object.assign({}, f)
    };
    if (e.add(t[2], 0, [["enter", c, n]]), r !== 2) {
      const p = n.events[t[2]], h = n.events[t[3]];
      if (p[1].end = Object.assign({}, h[1].end), p[1].type = "chunkText", p[1].contentType = "text", t[3] > t[2] + 1) {
        const g = t[2] + 1, x = t[3] - t[2] - 1;
        e.add(g, x, []);
      }
    }
    e.add(t[3] + 1, 0, [["exit", c, n]]);
  }
  return i !== void 0 && (o.end = Object.assign({}, De(n.events, i)), e.add(i, 0, [["exit", o, n]]), o = void 0), o;
}
function or(e, n, t, r, i) {
  const o = [], l = De(n.events, t);
  i && (i.end = Object.assign({}, l), o.push(["exit", i, n])), r.end = Object.assign({}, l), o.push(["exit", r, n]), e.add(t + 1, 0, o);
}
function De(e, n) {
  const t = e[n], r = t[0] === "enter" ? "start" : "end";
  return t[1][r];
}
const Cf = {
  name: "tasklistCheck",
  tokenize: If
};
function Ef() {
  return {
    text: {
      91: Cf
    }
  };
}
function If(e, n, t) {
  const r = this;
  return i;
  function i(u) {
    return (
      // Exit if there’s stuff before.
      r.previous !== null || // Exit if not in the first content that is the first child of a list
      // item.
      !r._gfmTasklistFirstContentOfListItem ? t(u) : (e.enter("taskListCheck"), e.enter("taskListCheckMarker"), e.consume(u), e.exit("taskListCheckMarker"), o)
    );
  }
  function o(u) {
    return $(u) ? (e.enter("taskListCheckValueUnchecked"), e.consume(u), e.exit("taskListCheckValueUnchecked"), l) : u === 88 || u === 120 ? (e.enter("taskListCheckValueChecked"), e.consume(u), e.exit("taskListCheckValueChecked"), l) : t(u);
  }
  function l(u) {
    return u === 93 ? (e.enter("taskListCheckMarker"), e.consume(u), e.exit("taskListCheckMarker"), e.exit("taskListCheck"), a) : t(u);
  }
  function a(u) {
    return L(u) ? n(u) : R(u) ? e.check({
      tokenize: Tf
    }, n, t)(u) : t(u);
  }
}
function Tf(e, n, t) {
  return N(e, r, "whitespace");
  function r(i) {
    return i === null ? t(i) : n(i);
  }
}
function Af(e) {
  return Tr([
    Jc(),
    uf(),
    df(e),
    bf(),
    Ef()
  ]);
}
const Pf = {};
function vf(e) {
  const n = (
    /** @type {Processor} */
    this
  ), t = e || Pf, r = n.data(), i = r.micromarkExtensions || (r.micromarkExtensions = []), o = r.fromMarkdownExtensions || (r.fromMarkdownExtensions = []), l = r.toMarkdownExtensions || (r.toMarkdownExtensions = []);
  i.push(Af(t)), o.push(Yc()), l.push(Qc(t));
}
function Vf({
  className: e,
  defaultContent: n,
  href: t,
  features: r = {},
  ...i
}) {
  const [o, l] = Ue(n), [a, u] = Ue(!0), [s, f] = Ue(!1);
  return sr(() => {
    a ? (console.log("FETCH:", t), fetch(t).then((c) => c.text()).then((c) => l(c)).catch(console.error)) : u(!0);
  }, [a, t]), o ? r.bodyOnly ? /* @__PURE__ */ A.jsx(
    "div",
    {
      className: be("markdown-renderer", e),
      ...i,
      children: /* @__PURE__ */ A.jsx(
        ar,
        {
          raw: s,
          markdownContent: o,
          className: e
        }
      )
    }
  ) : /* @__PURE__ */ A.jsxs(
    "div",
    {
      className: be("markdown-renderer f-body", e),
      ...i,
      children: [
        /* @__PURE__ */ A.jsxs(
          "div",
          {
            className: "md-header f-primary",
            children: [
              r.reload && /* @__PURE__ */ A.jsx(
                pn,
                {
                  className: "f-trinary",
                  onClick: () => u(!1),
                  children: "Reload"
                }
              ),
              r.renderToggle && /* @__PURE__ */ A.jsxs(
                "div",
                {
                  className: "render-controls",
                  children: [
                    /* @__PURE__ */ A.jsx(
                      pn,
                      {
                        onClick: () => f(!1),
                        className: be("show-pretty f-trinary", s && "l2-f" || "d2-f"),
                        children: "Pretty"
                      }
                    ),
                    /* @__PURE__ */ A.jsx(
                      pn,
                      {
                        onClick: () => f(!0),
                        className: be("show-raw f-trinary", !s && "l2-f" || "d2-f"),
                        children: "Raw"
                      }
                    )
                  ]
                }
              ),
              (r.print || r.download) && /* @__PURE__ */ A.jsxs(
                "div",
                {
                  className: "file-controls",
                  children: [
                    r.print && /* @__PURE__ */ A.jsx(
                      st,
                      {
                        className: "f-trinary",
                        icon: "printer",
                        onClick: () => Ai(o),
                        title: "Open in new tab"
                      }
                    ),
                    r.download && /* @__PURE__ */ A.jsx(
                      st,
                      {
                        className: "f-trinary",
                        icon: "download",
                        onClick: () => Pi(o),
                        title: "Download as text file"
                      }
                    )
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ A.jsx(
          ar,
          {
            raw: s,
            markdownContent: o,
            className: "f-content"
          }
        ),
        /* @__PURE__ */ A.jsx(
          "div",
          {
            className: "md-footer f-secondary"
          }
        )
      ]
    }
  ) : /* @__PURE__ */ A.jsx("div", { children: "Fetching content..." });
}
function ar({
  raw: e,
  markdownContent: n,
  className: t
}) {
  return /* @__PURE__ */ A.jsx(
    "div",
    {
      className: "md-body",
      children: /* @__PURE__ */ A.jsx(
        "div",
        {
          className: be("md-content", e && "raw", t),
          children: e ? /* @__PURE__ */ A.jsx("div", { children: n.split(/\n/g).map((r, i) => r ? /* @__PURE__ */ A.jsx(
            "p",
            {
              children: r
            },
            i
          ) : /* @__PURE__ */ A.jsx("br", {}, i)) }) : /* @__PURE__ */ A.jsx(
            ys,
            {
              remarkPlugins: [vf],
              components: Qi,
              children: n
            }
          )
        }
      )
    }
  );
}
const Lf = 20, zf = /* @__PURE__ */ new Map(
  [
    ["H1", 1],
    ["H2", 2],
    ["H3", 3],
    ["H4", 4],
    ["H5", 5],
    ["H6", 6]
  ]
);
class ur {
  constructor(n, t, r) {
    je(this, "id");
    je(this, "tier");
    je(this, "prev");
    je(this, "next", []);
    this.id = n, this.tier = t, this.prev = r;
  }
  clear() {
    this.prev = void 0, this.next = [];
  }
  addNext(n) {
    return this.next.push(n.addParent(this)), n;
  }
  parent() {
    if (!this.prev)
      throw new Error("Undefined parent");
    return this.prev;
  }
  addParent(n) {
    return this.prev = n, this;
  }
}
function Df() {
  const e = Li(null), [n] = Ue(new ur("", 0)), [t, r] = Ue(!1);
  return sr(() => {
    if (!e.current)
      return;
    let i = 0, o = e.current.parentElement;
    for (; o && !o.classList.contains("markdown-renderer") && i < Lf; )
      o = o.parentElement, i++;
    if (!o || !o.classList.contains("markdown-renderer"))
      return;
    n.clear();
    const l = /* @__PURE__ */ new Map(), a = o.querySelectorAll("*");
    let u;
    a.forEach((s) => {
      if (s instanceof HTMLHeadingElement) {
        const f = zf.get(s.tagName);
        if (!f)
          return;
        const c = new ur(s.id, f);
        if (l.set(c.id, c), !u) {
          u = n.addNext(c);
          return;
        }
        if (f === u.tier)
          u = u.parent().addNext(c);
        else if (f > u.tier)
          u = u.addNext(c);
        else {
          let p = u.parent();
          for (; p && p.tier !== f - 1; )
            p = p.parent();
          u = p.addNext(c);
        }
      }
    }), r(!0);
  }, [e]), /* @__PURE__ */ A.jsx(
    "span",
    {
      ref: e,
      className: "toc",
      children: t && /* @__PURE__ */ A.jsx(jn, { heading: n })
    }
  );
}
function jn({
  heading: e
}) {
  return e.id ? /* @__PURE__ */ A.jsxs(
    "li",
    {
      className: "toc-item",
      children: [
        /* @__PURE__ */ A.jsx(
          "a",
          {
            href: `#${e.id}`,
            children: e.id.replace(/-/g, " ")
          }
        ),
        e.next.length > 0 && /* @__PURE__ */ A.jsx(
          "ul",
          {
            className: "toc-list",
            children: e.next.map((n) => /* @__PURE__ */ A.jsx(
              jn,
              {
                heading: n
              },
              n.id
            ))
          }
        )
      ]
    }
  ) : /* @__PURE__ */ A.jsx(
    "ul",
    {
      className: "toc-list root",
      children: e.next.map((n) => /* @__PURE__ */ A.jsx(
        jn,
        {
          heading: n
        },
        n.id
      ))
    }
  );
}
export {
  Vf as MarkdownRenderer,
  Df as TableOfContents
};
