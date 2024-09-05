import { j as a } from "./jsx-runtime-Q3clG3tb.js";
import { g as r } from "./components-CHkrLo1-.js";
function e({
  className: n,
  children: s,
  ...t
}) {
  return /* @__PURE__ */ a.jsx(
    "div",
    {
      className: r("nav", n),
      ...t,
      children: s
    }
  );
}
function m({
  className: n,
  children: s,
  ...t
}) {
  return /* @__PURE__ */ a.jsx(
    "div",
    {
      className: r("nav-btn", n),
      ...t,
      children: s
    }
  );
}
function u({
  className: n,
  children: s,
  ...t
}) {
  return /* @__PURE__ */ a.jsx(
    "div",
    {
      className: r("ribbon", n),
      ...t,
      children: s
    }
  );
}
export {
  e as Nav,
  m as NavButton,
  u as Ribbon
};
