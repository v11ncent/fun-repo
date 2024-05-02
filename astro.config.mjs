import { defineConfig } from "astro/config";

import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://christchurchsedalia.com",
  experimental: {
    assets: true,
    viewTransitions: true,
  },
  integrations: [
    partytown(),
    sitemap({
      changefreq: "weekly",
      lastmod: new Date(),
    }),
  ],
  build: {
    inlineStylesheets: "always",
  },
});
