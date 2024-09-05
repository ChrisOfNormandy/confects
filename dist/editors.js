import { C as b } from "./text-editor-CZgmjBzc.js";
import { j as e } from "./jsx-runtime-Q3clG3tb.js";
import { B as o } from "./social-link--B5r20zD.js";
import { g as p } from "./components-CHkrLo1-.js";
import { I as c } from "./Icon-lxzzq7dr.js";
import { useState as l, useRef as u, useEffect as j } from "react";
function C({
  className: d,
  ...m
}) {
  const [t, i] = l(""), [a, n] = l(null), r = u(null), s = u(null);
  return j(() => {
    if (t) {
      a && clearTimeout(a), s.current && s.current.classList.remove("fading");
      const f = setTimeout(() => {
        if (!s.current)
          return;
        s.current.classList.add("fading");
        const x = setTimeout(() => {
          i("");
        }, 1e3);
        n(x);
      }, 500);
      n(f);
    }
  }, [t]), /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: p("input text-editor", d),
      children: [
        /* @__PURE__ */ e.jsxs(
          "div",
          {
            className: "editor",
            children: [
              /* @__PURE__ */ e.jsx(
                "textarea",
                {
                  className: "f-main",
                  ref: r,
                  placeholder: "Begin typing...",
                  ...m
                }
              ),
              t && /* @__PURE__ */ e.jsx(
                "div",
                {
                  className: "status-overlay",
                  ref: s,
                  children: t
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ e.jsxs(
          "div",
          {
            className: "editor-controls f-body b-divider",
            children: [
              /* @__PURE__ */ e.jsxs(
                o,
                {
                  className: "f-primary",
                  onClick: () => {
                    r.current && (navigator.clipboard.writeText(r.current.value), i("copied"));
                  },
                  children: [
                    /* @__PURE__ */ e.jsx(
                      c,
                      {
                        icon: "copy"
                      }
                    ),
                    /* @__PURE__ */ e.jsx("span", { children: "Copy" })
                  ]
                }
              ),
              /* @__PURE__ */ e.jsxs(
                o,
                {
                  className: "f-primary",
                  onClick: () => {
                    r.current && (r.current.value = "", i("cleared"));
                  },
                  children: [
                    /* @__PURE__ */ e.jsx(
                      c,
                      {
                        icon: "x-lg"
                      }
                    ),
                    /* @__PURE__ */ e.jsx("span", { children: "Clear" })
                  ]
                }
              )
            ]
          }
        )
      ]
    }
  );
}
export {
  b as CodeEditor,
  C as TextEditor
};
