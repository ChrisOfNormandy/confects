import { j as e } from "./jsx-runtime-Q3clG3tb.js";
import { g as f, d as h } from "./components-CHkrLo1-.js";
import { useState as N, useRef as L, useEffect as q } from "react";
import { B as A } from "./social-link--B5r20zD.js";
import { I as S } from "./Icon-lxzzq7dr.js";
function O() {
  return /* @__PURE__ */ e.jsx("div", { children: "CALENDAR" });
}
function W() {
  return /* @__PURE__ */ e.jsx("div", { children: "DECIMAL INPUT" });
}
function B({
  className: n,
  dropZoneText: r = "Drop Files Here",
  multiple: s,
  multipleMin: l,
  required: p,
  onFileChange: m,
  ...o
}) {
  const a = typeof s == "number" ? s : 1, c = l || p && 1 || 0, [x, k] = N(/* @__PURE__ */ new Map()), [j, b] = N(!0), u = L(null);
  q(() => {
    j || b(!0);
  }, [j]);
  const y = h((t) => {
    t.preventDefault();
    const i = x;
    let g = !1;
    t.dataTransfer.items ? [...t.dataTransfer.items].forEach((d) => {
      if (d.kind === "file") {
        const v = d.getAsFile();
        v && i.size < a && (i.set(v.name, v), g = !0);
      }
    }) : [...t.dataTransfer.files].forEach((d) => {
      i.size < a && (i.set(d.name, d), g = !0);
    }), g && (k(i), b(!1), m && m(Array.from(i.values())));
  }), R = h((t) => t.preventDefault()), D = h(() => {
    u.current && u.current.classList.add("dragged");
  }), T = h(() => {
    u.current && u.current.classList.remove("dragged");
  });
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: f("file-input", n),
      children: [
        /* @__PURE__ */ e.jsx(
          "div",
          {
            className: "file-drop-zone-wrapper f-body",
            children: /* @__PURE__ */ e.jsxs(
              "div",
              {
                className: "file-drop-zone f-main",
                onDragEnter: D,
                onDragLeave: T,
                onDragOver: R,
                onDrop: y,
                ref: u,
                children: [
                  /* @__PURE__ */ e.jsx(
                    "span",
                    {
                      className: "label drop-zone-text",
                      children: r
                    }
                  ),
                  /* @__PURE__ */ e.jsx(
                    "span",
                    {
                      className: "label allow-multiple-files",
                      children: a > 1 && `Limit: ${s}`
                    }
                  ),
                  /* @__PURE__ */ e.jsx(
                    "span",
                    {
                      className: "label allow-multiple-files",
                      children: c > 0 && `Required: ${c}`
                    }
                  )
                ]
              }
            )
          }
        ),
        /* @__PURE__ */ e.jsx(
          w,
          {
            className: "file",
            multiple: a > 1,
            required: p,
            ...o,
            type: "file"
          }
        ),
        j && x.size > 0 && /* @__PURE__ */ e.jsx(
          "div",
          {
            className: "dropped-files",
            children: /* @__PURE__ */ e.jsx(
              "ul",
              {
                className: "dropped-file-list",
                children: Array.from(x).map(([t, i]) => /* @__PURE__ */ e.jsxs(
                  "li",
                  {
                    className: "dropped-file",
                    children: [
                      /* @__PURE__ */ e.jsx("span", { children: t }),
                      /* @__PURE__ */ e.jsx("span", { children: z(i.size) })
                    ]
                  },
                  t
                ))
              }
            )
          }
        )
      ]
    }
  );
}
const E = ["b", "kb", "mb", "gb"], I = 1024;
function z(n) {
  let r = 0, s = n;
  for (; r < E.length && s > I; )
    r++, s /= I;
  return `${s.toFixed(2)} ${E[r]}`;
}
function w({
  className: n,
  ...r
}) {
  return /* @__PURE__ */ e.jsx(
    "input",
    {
      ...r,
      className: f("input", n)
    }
  );
}
function Z() {
  return /* @__PURE__ */ e.jsx("div", { children: "INTEGER INPUT" });
}
function G() {
  return /* @__PURE__ */ e.jsx("div", { children: "RAW SELECT" });
}
function H({
  options: n,
  className: r,
  ...s
}) {
  return /* @__PURE__ */ e.jsx(
    "select",
    {
      className: f("input select", r),
      ...s,
      children: n.map((l) => /* @__PURE__ */ e.jsx(
        "option",
        {
          value: l.value,
          children: l.label
        }
      ))
    }
  );
}
function K({
  className: n,
  ...r
}) {
  return /* @__PURE__ */ e.jsx(
    w,
    {
      className: f("slider", n),
      ...r,
      type: "range"
    }
  );
}
function V() {
  return /* @__PURE__ */ e.jsx("div", { children: "TIME INPUT" });
}
const C = /* @__PURE__ */ new Map(
  [
    ["check-dot", ["circle", "check-circle"]],
    ["check-square", ["square", "check-square"]],
    ["check-x", ["x", "check"]],
    ["check", ["", "check"]],
    ["dot", ["circle", "circle-fill"]],
    ["eye", ["eye-slash", "eye"]],
    ["power", ["power", "power"]],
    ["square", ["square", "square-fill"]],
    ["sun-moon", ["moon", "sun"]],
    ["thumb-down", ["hand-thumbs-down", "hand-thumbs-down-fill"]],
    ["thumb-up", ["hand-thumbs-up", "hand-thumbs-up-fill"]],
    ["toggle", ["toggle-off", "toggle-on"]],
    ["x-dot", ["circle", "x-circle"]],
    ["x-square", ["square", "x-square"]],
    ["x", ["", "x"]]
  ]
);
function J({
  className: n,
  defaultChecked: r,
  name: s,
  iconType: l = "check",
  readOnly: p,
  ...m
}) {
  const [o, a] = N(r), c = C.get(l);
  if (!c)
    throw new Error(`Unsupported icon type: ${l}`);
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: f("input toggle", n),
      ...m,
      children: [
        /* @__PURE__ */ e.jsx(
          "input",
          {
            name: s,
            value: Number(o) || 0,
            readOnly: !0,
            hidden: !0
          }
        ),
        /* @__PURE__ */ e.jsx(
          A,
          {
            onClick: () => a(!o),
            disabled: p,
            children: /* @__PURE__ */ e.jsx(
              S,
              {
                icon: o && c[1] || c[0]
              }
            )
          }
        )
      ]
    }
  );
}
function Q() {
  return /* @__PURE__ */ e.jsx("div", { children: "INTERFACE WRAPPER" });
}
export {
  O as Calendar,
  W as DecimalInput,
  B as FileInput,
  w as Input,
  Z as IntegerInput,
  Q as InterfaceWrapper,
  G as RawSelect,
  H as Select,
  K as Slider,
  V as TimeInput,
  J as Toggle
};
