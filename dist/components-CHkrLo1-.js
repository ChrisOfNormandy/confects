function i(n) {
  return n;
}
function m(n) {
  return n;
}
function l(...n) {
  return n.filter(Boolean).join(" ");
}
function a(n) {
  const t = { x: 0, y: 0 }, s = { x: 0, y: 0 }, r = (e) => {
    e.preventDefault(), s.x = t.x - e.clientX, s.y = t.y - e.clientY, t.x = e.clientX, t.y = e.clientY;
    const o = document.getElementById(n);
    if (!o)
      throw new Error("Undefined element");
    o.style.top = `${o.offsetTop - s.y}px`, o.style.left = `${o.offsetLeft - s.x}px`;
  }, u = () => {
    document.removeEventListener("mouseup", u), document.removeEventListener("mousemove", r);
  };
  return { onMouseDown: (e) => {
    e.preventDefault(), t.x = e.clientX, t.y = e.clientY, document.addEventListener("mouseup", u), document.addEventListener("mousemove", r);
  } };
}
export {
  m as a,
  i as d,
  l as g,
  a as m
};
