
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: {
      entry: "server",
    },
  },

  // Use Netlify instead of the default Cloudflare target
  nitro: {
    preset: "netlify",
  },
});
