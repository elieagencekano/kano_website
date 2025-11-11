import { defineConfig } from "astro/config";
const isProd = process.env.GITHUB_PAGES === "true";

export default defineConfig({
  site: isProd
    ? "https://elieagencekano.github.io/kano_website/"
    : "http://localhost:4321",
  base: isProd ? "/kano_website/" : "/",
  outDir: "./dist",
});