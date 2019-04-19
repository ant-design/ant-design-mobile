export default function closest(el: Element, selector: string) {
  const matchesSelector =
    el.matches ||
    el.webkitMatchesSelector ||
    (el as any).mozMatchesSelector ||
    (el as any).msMatchesSelector;
  let p: Element | null = el;
  while (p) {
    if (matchesSelector.call(p, selector)) {
      return p;
    }
    p = p.parentElement;
  }
  return null;
}
