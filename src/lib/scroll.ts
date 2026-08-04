export function scrollToId(id: string) {
  const cleanId = id.startsWith("#") ? id.slice(1) : id;
  const el = document.getElementById(cleanId);
  el?.scrollIntoView({ behavior: "smooth", block: "start" });
}
