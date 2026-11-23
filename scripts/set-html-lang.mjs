import { readFileSync, writeFileSync } from "node:fs";

const file = new URL("../out/en/index.html", import.meta.url);
const html = readFileSync(file, "utf8").replace(
  '<html lang="id"',
  '<html lang="en"'
);

writeFileSync(file, html);
