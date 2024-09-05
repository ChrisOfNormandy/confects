import { j as e } from "./jsx-runtime-Q3clG3tb.js";
/* empty css                            */
import { g as i } from "./components-CHkrLo1-.js";
function h({
  children: t,
  className: s,
  ...n
}) {
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      className: i("content", s),
      ...n,
      children: t
    }
  );
}
function v({
  children: t,
  className: s,
  ...n
}) {
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      className: i("content-block", s),
      ...n,
      children: t
    }
  );
}
function f({
  children: t,
  className: s,
  ...n
}) {
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      className: i("content-divider", s, "sp f-divider"),
      ...n,
      children: t
    }
  );
}
function g({
  className: t,
  children: s,
  ...n
}) {
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      className: i("content-group", t),
      ...n,
      children: s
    }
  );
}
function C({
  className: t,
  children: s,
  ...n
}) {
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      className: i("content-list", t),
      ...n,
      children: s
    }
  );
}
function N({
  className: t,
  children: s,
  ...n
}) {
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      className: i("content-list-item", t),
      ...n,
      children: s
    }
  );
}
function u({
  className: t,
  children: s,
  figure: n,
  ...c
}) {
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: i("content-tile", t),
      ...c,
      children: [
        n && /* @__PURE__ */ e.jsxs("figure", { children: [
          /* @__PURE__ */ e.jsx(
            "img",
            {
              ...n.imageOptions,
              src: n.image
            }
          ),
          n.caption && /* @__PURE__ */ e.jsx("figcaption", { children: n.href ? /* @__PURE__ */ e.jsx(
            "a",
            {
              href: n.href,
              children: n.caption
            }
          ) : n.caption })
        ] }),
        s
      ]
    }
  );
}
function b({
  className: t,
  children: s,
  tiles: n,
  perRow: c = 3,
  ...l
}) {
  const r = [];
  if (n) {
    let o = 0, a = n.slice(o * c, c * (o + 1));
    for (; a.length; )
      console.log(a.length), r.push(a), o++, a = n.slice(o * c, c * (o + 1));
  }
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: i("content-tile-group", t),
      ...l,
      children: [
        r.map(
          (o, a) => /* @__PURE__ */ e.jsx(
            "div",
            {
              className: "content-tile-grouping",
              children: o.map(
                (m, d) => /* @__PURE__ */ e.jsx(
                  u,
                  {
                    ...m
                  },
                  d
                )
              )
            },
            a
          )
        ),
        s
      ]
    }
  );
}
export {
  h as C,
  v as a,
  f as b,
  g as c,
  C as d,
  N as e,
  u as f,
  b as g
};
