import { defineConfig } from "astro/config";

const isBlitz =
  typeof process !== "undefined" &&
  process.env?.STACKBLITZ_ENV === "true";

export default defineConfig({
  site: "https://elieagencekano.github.io/kano_website/",
  base: isBlitz || import.meta.env.DEV ? "/" : "/kano_website/",
  output: "static",
});