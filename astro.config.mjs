import { defineConfig } from "astro/config";

const base = import.meta.env.DEV ? "/" : "/kano_website/";

export default defineConfig({
  site: "https://elieagencekano.github.io",
  base: base,
});