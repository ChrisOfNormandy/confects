import { j as s } from "./jsx-runtime-Q3clG3tb.js";
import { B as o } from "./social-link--B5r20zD.js";
import { g as l } from "./components-CHkrLo1-.js";
import { I as m } from "./Icon-lxzzq7dr.js";
import { G as k } from "./Glyph-BlyPiSHo.js";
import { b as f } from "./brands-ByxiW7Us.js";
function d({
  children: a,
  className: n,
  group: e,
  ...t
}) {
  return /* @__PURE__ */ s.jsxs(
    o,
    {
      className: l("badge", n),
      noDefaultClassName: !0,
      ...t,
      children: [
        e && /* @__PURE__ */ s.jsx(
          "span",
          {
            className: "sect group f-main",
            children: e
          }
        ),
        /* @__PURE__ */ s.jsx(
          "span",
          {
            className: "sect text",
            children: a
          }
        )
      ]
    }
  );
}
function r({
  brand: a,
  fill: n,
  className: e,
  withLabel: t = !1,
  ...i
}) {
  const c = f[a];
  return /* @__PURE__ */ s.jsxs(
    o,
    {
      noDefaultClassName: !0,
      className: l("social-link", a, n && "fill", e, t && "with-label"),
      ...i,
      children: [
        /* @__PURE__ */ s.jsx(
          m,
          {
            icon: a
          }
        ),
        t && /* @__PURE__ */ s.jsx(
          "span",
          {
            className: "brand-name",
            children: c
          }
        )
      ]
    }
  );
}
function h({
  profileHref: a,
  pageHref: n,
  ...e
}) {
  return a || n ? /* @__PURE__ */ s.jsx(
    "a",
    {
      className: "social-link-anchor",
      children: /* @__PURE__ */ s.jsx(
        r,
        {
          ...e
        }
      )
    }
  ) : /* @__PURE__ */ s.jsx(
    r,
    {
      ...e
    }
  );
}
export {
  d as Badge,
  o as Button,
  k as Glyph,
  h as SocialLink
};
