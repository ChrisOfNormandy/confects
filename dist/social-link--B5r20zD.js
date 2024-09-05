import { j as p } from "./jsx-runtime-Q3clG3tb.js";
import { g as i } from "./components-CHkrLo1-.js";
function u({
  children: s,
  className: f,
  noDefaultClassName: r,
  reset: e = !1,
  submit: o = !1,
  innerRef: n,
  ...a
}) {
  const t = {};
  return o ? (t.type = "submit", typeof o == "string" && (t.form = o)) : e ? (t.type = "reset", typeof e == "string" && (t.form = e)) : t.type = "button", /* @__PURE__ */ p.jsx(
    "button",
    {
      ...a,
      ...t,
      ref: n,
      className: i(!r && "btn", f),
      children: s
    }
  );
}
export {
  u as B
};
