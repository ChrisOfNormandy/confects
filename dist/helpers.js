import { d as s, g as w, m as i, a as u } from "./components-CHkrLo1-.js";
function d(t, o, a) {
  const n = new File([t], o || "download.txt", a), c = window.URL.createObjectURL(n), e = document.createElement("a");
  e.href = c, e.download = n.name, document.body.append(e), e.click(), e.remove();
}
function l(t, o, a) {
  const n = new File([t], o || "download.txt", a), c = window.URL.createObjectURL(n), e = document.createElement("a");
  e.href = c, e.target = "_blank", document.body.append(e), e.click(), e.remove();
}
export {
  d as downloadContent,
  s as dragEvent,
  w as getClassName,
  i as makeDraggable,
  u as mouseEvent,
  l as openInNewTab
};
