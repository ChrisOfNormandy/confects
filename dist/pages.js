import { j as s } from "./jsx-runtime-Q3clG3tb.js";
import { g as i } from "./components-CHkrLo1-.js";
function o({
  className: e,
  children: a,
  ...r
}) {
  return /* @__PURE__ */ s.jsx(
    "div",
    {
      className: i("page", e),
      ...r,
      children: a
    }
  );
}
function g({
  className: e,
  children: a,
  ...r
}) {
  return /* @__PURE__ */ s.jsx(
    "div",
    {
      className: i("page-body", e),
      ...r,
      children: a
    }
  );
}
function d({
  className: e,
  ...a
}) {
  return /* @__PURE__ */ s.jsx(
    "div",
    {
      className: i("page-divider", e),
      ...a
    }
  );
}
function m({
  className: e,
  children: a,
  ...r
}) {
  return /* @__PURE__ */ s.jsx(
    "div",
    {
      className: i("page-footer", e),
      ...r,
      children: a
    }
  );
}
function u({
  className: e,
  children: a,
  ...r
}) {
  return /* @__PURE__ */ s.jsx(
    "div",
    {
      className: i("page-header", e),
      ...r,
      children: a
    }
  );
}
function c({
  className: e,
  children: a,
  ...r
}) {
  return /* @__PURE__ */ s.jsx(
    "div",
    {
      className: i("page-main", e),
      ...r,
      children: a
    }
  );
}
export {
  o as Page,
  g as PageBody,
  d as PageDivider,
  m as PageFooter,
  u as PageHeader,
  c as PageMain
};
