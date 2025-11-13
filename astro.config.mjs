import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://elieagencekano.github.io",
  base: import.meta.env.DEV ? "/" : "/kano_website/",
  output: "static"
});