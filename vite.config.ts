import { defineConfig } from "vite";
import RubyPlugin from "vite-plugin-ruby";
import react from "@vitejs/plugin-react";
import vitePlugin from "vite-plugin-react-js-support";

import eslintPlugin from "vite-plugin-eslint";

const fs = require("fs");

export default defineConfig({
  esbuild: { loader: "jsx", include: /src\/.*\.jsx?$/, exclude: [] },
  optimizeDeps: {
    force: true,
    esbuildOptions: {
      loader: {
        ".js": "jsx",
      },
      plugins: [
        {
          name: "load-js-files-as-jsx",
          setup(build) {
            build.onLoad({ filter: /src\/.*\.js$/ }, async (args) => {
              return {
                loader: "jsx",
                contents: await fs.readFile(args.path, "utf8"),
              };
            });
          },
        },
      ],
    },
  },
  css: {
    postcss: {
      plugins: [],
    },
  },
  plugins: [
    RubyPlugin(),
    react({ include: /\.(mdx|js|jsx|ts|tsx)$/ }),
    vitePlugin([], { jsxInject: true }),
    eslintPlugin(),
  ],
});
