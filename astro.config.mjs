import { defineConfig } from "astro/config";
import staticAdapter from "@astrojs/static";

const base = import.meta.env.DEV ? "/" : "/kano_website/";

export default defineConfig({
  site: "https://elieagencekano.github.io",
  base: base,
  output: "static",
  adapter: staticAdapter(),
});