export function stringHandler(s: string) {
  return s
    .replace(/[^a-z0-9]/gi, "")
    .trim()
    .toLowerCase();
}
