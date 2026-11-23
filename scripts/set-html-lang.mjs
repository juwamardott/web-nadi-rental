import { existsSync, readFileSync, writeFileSync } from "node:fs";

const file = new URL("../out/en/index.html", import.meta.url);

if (existsSync(file)) {
  const html = readFileSync(file, "utf8").replace(
    '<html lang="id"',
    '<html lang="en"'
  );
  writeFileSync(file, html);
  console.log("Successfully set lang=\"en\" on out/en/index.html");
} else {
  console.warn("Notice: out/en/index.html was not found; skipped setting lang attribute.");
}
