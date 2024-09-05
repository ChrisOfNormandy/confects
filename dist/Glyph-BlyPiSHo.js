import { j as s } from "./jsx-runtime-Q3clG3tb.js";
import { B as e } from "./social-link--B5r20zD.js";
import { g as i } from "./components-CHkrLo1-.js";
import { I as n } from "./Icon-lxzzq7dr.js";
function c({
  icon: o,
  className: r,
  iconOnly: t,
  size: a = 3,
  ...m
}) {
  return /* @__PURE__ */ s.jsx(
    e,
    {
      noDefaultClassName: !0,
      className: i("glyph hvr dis", r, `size-${a}`, t && "icon-only"),
      ...m,
      children: /* @__PURE__ */ s.jsx(
        n,
        {
          icon: o
        }
      )
    }
  );
}
export {
  c as G
};
